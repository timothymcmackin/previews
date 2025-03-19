import smartpy as sp

# FA2 standard: https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md
# Documentation: https://smartpy.io/guides/FA2-lib/overview


@sp.module
def main():
    balance_of_args: type = sp.record(
        requests=sp.list[sp.record(owner=sp.address, token_id=sp.nat)],
        callback=sp.contract[
            sp.list[
                sp.record(
                    request=sp.record(owner=sp.address, token_id=sp.nat), balance=sp.nat
                ).layout(("request", "balance"))
            ]
        ],
    ).layout(("requests", "callback"))

    class Fa2FungibleMinimal(sp.Contract):
        """Minimal FA2 contract for fungible tokens.

        This is a minimal self contained implementation example showing how to
        implement an NFT following the FA2 standard in SmartPy. It is for
        illustrative purposes only. For a more flexible toolbox aimed at real world
        applications please refer to FA2_lib.
        """

        def __init__(self, administrator, metadata):
            self.data.administrator = administrator
            self.data.ledger = sp.cast(
                sp.big_map(), sp.big_map[sp.pair[sp.address, sp.nat], sp.nat]
            )
            self.data.metadata = metadata
            self.data.next_token_id = sp.nat(0)
            self.data.operators = sp.cast(
                sp.big_map(),
                sp.big_map[
                    sp.record(
                        owner=sp.address,
                        operator=sp.address,
                        token_id=sp.nat,
                    ).layout(("owner", ("operator", "token_id"))),
                    sp.unit,
                ],
            )
            self.data.supply = sp.cast(sp.big_map(), sp.big_map[sp.nat, sp.nat])
            self.data.token_metadata = sp.cast(
                sp.big_map(),
                sp.big_map[
                    sp.nat,
                    sp.record(token_id=sp.nat, token_info=sp.map[sp.string, sp.bytes]),
                ],
            )

            # TODO: pass metadata_base as an argument
            # metadata_base["views"] = [
            #     self.all_tokens,
            #     self.get_balance,
            #     self.is_operator,
            #     self.total_supply,
            # ]
            # self.init_metadata("metadata_base", metadata_base)

        @sp.entrypoint
        def transfer(self, batch):
            """Accept a list of transfer operations.

            Each transfer operation specifies a source: `from_` and a list
            of transactions. Each transaction specifies the destination: `to_`,
            the `token_id` and the `amount` to be transferred.

            Args:
                batch: List of transfer operations.
            Raises:
                `FA2_TOKEN_UNDEFINED`, `FA2_NOT_OPERATOR`, `FA2_INSUFFICIENT_BALANCE`
            """
            for transfer in batch:
                for tx in transfer.txs:
                    sp.cast(
                        tx,
                        sp.record(
                            to_=sp.address, token_id=sp.nat, amount=sp.nat
                        ).layout(("to_", ("token_id", "amount"))),
                    )
                    assert tx.token_id < self.data.next_token_id, "FA2_TOKEN_UNDEFINED"
                    from_ = (transfer.from_, tx.token_id)
                    to_ = (tx.to_, tx.token_id)
                    assert transfer.from_ == sp.sender or self.data.operators.contains(
                        sp.record(
                            owner=transfer.from_,
                            operator=sp.sender,
                            token_id=tx.token_id,
                        )
                    ), "FA2_NOT_OPERATOR"
                    self.data.ledger[from_] = sp.as_nat(
                        self.data.ledger.get(from_, default=0) - tx.amount,
                        error="FA2_INSUFFICIENT_BALANCE",
                    )
                    self.data.ledger[to_] = (
                        self.data.ledger.get(to_, default=0) + tx.amount
                    )

        @sp.entrypoint
        def update_operators(self, actions):
            """Accept a list of variants to add or remove operators.

            Operators can perform transfer on behalf of the owner.
            Owner is a Tezos address which can hold tokens.

            Only the owner can change its operators.

            Args:
                actions: List of operator update actions.
            Raises:
                `FA2_NOT_OWNER`
            """
            for action in actions:
                match action:
                    case add_operator(operator):
                        assert operator.owner == sp.sender, "FA2_NOT_OWNER"
                        self.data.operators[operator] = ()
                    case remove_operator(operator):
                        assert operator.owner == sp.sender, "FA2_NOT_OWNER"
                        del self.data.operators[operator]

        @sp.entrypoint
        def balance_of(self, param):
            """Send the balance of multiple account / token pairs to a
            callback address.

            transfer 0 mutez to `callback` with corresponding response.

            Args:
                callback (contract): Where we callback the answer.
                requests: List of requested balances.
            Raises:
                `FA2_TOKEN_UNDEFINED`, `FA2_CALLBACK_NOT_FOUND`
            """
            sp.cast(param, balance_of_args)
            balances = []
            for req in param.requests:
                assert req.token_id < self.data.next_token_id, "FA2_TOKEN_UNDEFINED"
                balances.push(
                    sp.record(
                        request=sp.record(owner=req.owner, token_id=req.token_id),
                        balance=self.data.ledger.get(
                            (req.owner, req.token_id), default=0
                        ),
                    )
                )

            sp.transfer(reversed(balances), sp.mutez(0), param.callback)

        @sp.entrypoint
        def mint(self, to_, amount, token):
            """(Admin only) Create new tokens from scratch and assign
            them to `to_`.

            If `token` is "existing": increase the supply of the `token_id`.
            If `token` is "new": create a new token and assign the `metadata`.

            Args:
                to_ (address): Receiver of the tokens.
                amount (nat): Amount of token to be minted.
                token (variant): "_new_": id of the token, "_existing_": metadata of the token.
            Raises:
                `FA2_NOT_ADMIN`, `FA2_TOKEN_UNDEFINED`
            """
            assert sp.sender == self.data.administrator, "FA2_NOT_ADMIN"
            match token:
                case new(metadata):
                    token_id = self.data.next_token_id
                    self.data.token_metadata[token_id] = sp.record(
                        token_id=token_id, token_info=metadata
                    )
                    self.data.supply[token_id] = amount
                    self.data.ledger[(to_, token_id)] = amount
                    self.data.next_token_id += 1
                case existing(token_id):
                    assert token_id < self.data.next_token_id, "FA2_TOKEN_UNDEFINED"
                    self.data.supply[token_id] += amount
                    self.data.ledger[(to_, token_id)] = (
                        self.data.ledger.get((to_, token_id), default=0) + amount
                    )

        @sp.offchain_view
        def all_tokens(self):
            """(Offchain view) Return the list of all the `token_id` known to the contract."""
            return range(0, self.data.next_token_id)

        @sp.offchain_view
        def get_balance(self, params):
            """(Offchain view) Return the balance of an address for the specified `token_id`."""
            sp.cast(
                params,
                sp.record(owner=sp.address, token_id=sp.nat).layout(
                    ("owner", "token_id")
                ),
            )
            assert params.token_id < self.data.next_token_id, "FA2_TOKEN_UNDEFINED"
            return self.data.ledger.get((params.owner, params.token_id), default=0)

        @sp.offchain_view
        def total_supply(self, params):
            """(Offchain view) Return the total number of tokens for the given `token_id` if known or
            fail if not."""
            assert params.token_id < self.data.next_token_id, "FA2_TOKEN_UNDEFINED"
            return self.data.supply.get(params.token_id, default=0)

        @sp.offchain_view
        def is_operator(self, params):
            """(Offchain view) Return whether `operator` is allowed to transfer `token_id` tokens
            owned by `owner`."""
            return self.data.operators.contains(params)

    class Fa2FungibleMinimalTest(Fa2FungibleMinimal):
        def __init__(
            self, administrator, metadata, ledger, token_metadata, next_token_id
        ):
            Fa2FungibleMinimal.__init__(self, administrator, metadata)

            self.data.next_token_id = next_token_id
            self.data.ledger = ledger
            self.data.token_metadata = token_metadata


if "main" in __name__:

    def make_metadata(symbol, name, decimals):
        """Helper function to build metadata JSON bytes values."""
        return sp.map(
            l={
                "decimals": sp.scenario_utils.bytes_of_string("%d" % decimals),
                "name": sp.scenario_utils.bytes_of_string(name),
                "symbol": sp.scenario_utils.bytes_of_string(symbol),
            }
        )

    admin = sp.test_account("Administrator")
    alice = sp.test_account("Alice")
    tok0_md = make_metadata(name="Token Zero", decimals=1, symbol="Tok0")
    tok1_md = make_metadata(name="Token One", decimals=1, symbol="Tok1")
    tok2_md = make_metadata(name="Token Two", decimals=1, symbol="Tok2")

    @sp.add_test()
    def test():
        scenario = sp.test_scenario("Test", main)
        c1 = main.Fa2FungibleMinimal(
            admin.address, sp.scenario_utils.metadata_of_url("https//example.com")
        )
        scenario += c1

    from smartpy.templates import fa2_lib_testing as testing

    kwargs = {
        "class_": main.Fa2FungibleMinimalTest,
        "kwargs": {
            "administrator": admin.address,
            "metadata": sp.scenario_utils.metadata_of_url("https://example.com"),
            "ledger": sp.big_map(
                {
                    (alice.address, 0): 42,
                    (alice.address, 1): 42,
                    (alice.address, 2): 42,
                }
            ),
            "token_metadata": sp.big_map(
                {
                    0: sp.record(token_id=0, token_info=tok0_md),
                    1: sp.record(token_id=1, token_info=tok1_md),
                    2: sp.record(token_id=2, token_info=tok2_md),
                }
            ),
            "next_token_id": 3,
        },
        "ledger_type": "Fungible",
        "test_name": "",
        "modules": main,
    }

    testing.test_core_interfaces(**kwargs)
    testing.test_transfer(**kwargs)
    testing.test_owner_or_operator_transfer(**kwargs)
    testing.test_balance_of(**kwargs)
