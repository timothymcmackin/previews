import smartpy as sp


@sp.module
def main():
    @sp.effects()
    def l(x):
        if x:
            raise "A"
        else:
            raise ()

    init_type: type = sp.record(
        l=sp.lambda_(sp.bool, sp.unit), l2=sp.lambda_(sp.bool, sp.unit)
    )

    class C(sp.Contract):
        def __init__(self, l2):
            self.data.l = l
            self.data.l2 = l2

        @sp.entrypoint
        def ep1(self):
            raise "A"

        @sp.entrypoint
        def ep2(self):
            raise "B"

        @sp.entrypoint
        def ep3(self):
            raise "A"

        @sp.entrypoint
        def ep4(self):
            raise sp.nat(42)

        @sp.entrypoint
        def ep5(self):
            raise ("A", 5)

        @sp.entrypoint
        def exec_l(self):
            self.data.l(True)

        @sp.entrypoint
        def exec_l2(self):
            self.data.l2(True)

        @sp.onchain_view
        def v1(self, x):
            if x:
                raise "A"
            else:
                return ()

        @sp.onchain_view
        def v2(self, x):
            if x:
                raise "C"
            else:
                return ()

    class Factory(sp.Contract):
        def __init__(self):
            self.data.created = None

        @sp.entrypoint
        def create(self, l2):
            self.data.created = sp.Some(
                sp.create_contract(C, None, sp.mutez(0), sp.record(l=l, l2=l2))
            )

        @sp.entrypoint
        def ep1(self):
            created = self.data.created.unwrap_some()
            contract = sp.contract(sp.unit, created, entrypoint="ep1")
            sp.transfer((), sp.tez(0), contract.unwrap_some())

        @sp.entrypoint
        def ep2(self):
            created = self.data.created.unwrap_some()
            contract = sp.contract(sp.unit, created, entrypoint="ep2")
            sp.transfer((), sp.tez(0), contract.unwrap_some())

        @sp.entrypoint
        def ep3(self):
            created = self.data.created.unwrap_some()
            contract = sp.contract(sp.unit, created, entrypoint="ep3")
            sp.transfer((), sp.tez(0), contract.unwrap_some())

        @sp.entrypoint
        def exec_l(self):
            created = self.data.created.unwrap_some()
            contract = sp.contract(sp.unit, created, entrypoint="exec_l")
            sp.transfer((), sp.tez(0), contract.unwrap_some())

        @sp.entrypoint
        def exec_l2(self):
            created = self.data.created.unwrap_some()
            contract = sp.contract(sp.unit, created, entrypoint="exec_l2")
            sp.transfer((), sp.tez(0), contract.unwrap_some())

        @sp.entrypoint
        def ep_v1(self):
            created = self.data.created.unwrap_some()
            _ = sp.view("v1", created, True, sp.unit)

        @sp.entrypoint
        def ep_v2(self):
            created = self.data.created.unwrap_some()
            _ = sp.view("v2", created, True, sp.unit)


def run_test(f, value, expansion):
    failed = False
    try:
        f()
    except Exception as e:
        assert e.value == value
        assert e.expansion == expansion
        failed = True
    assert failed


@sp.add_test()
def test():
    s = sp.test_scenario("Error replacement", main)

    # Error aren't mapped without flag
    c1 = main.C(main.l)
    s += c1
    if s.simulation_mode() is sp.SimulationMode.MOCKUP:
        s.p("mockups - TODO hook up errors properly")
        return

    run_test(c1.ep1, "A", None)
    run_test(c1.ep2, "B", None)
    run_test(c1.ep3, "A", None)
    run_test(c1.exec_l, "A", None)
    run_test(c1.exec_l2, "A", None)
    run_test(lambda: s.compute(c1.v1(True)), "A", None)
    run_test(lambda: s.compute(c1.v2(True)), "C", None)

    # Mapped errors
    s.add_flag("exceptions", "metadata-id")
    c2 = main.C(main.l)
    s += c2
    run_test(c2.ep1, "0", "A")
    run_test(c2.ep2, "1", "B")
    run_test(c2.ep3, "0", "A")
    run_test(c1.exec_l, "A", None)
    run_test(c1.exec_l2, "A", None)
    run_test(lambda: s.compute(c2.v1(True)), "0", "A")
    run_test(lambda: s.compute(c2.v2(True)), "2", "C")

    metadata = sp.create_tzip16_metadata(error_map=c2.get_error_map())
    assert (
        metadata["errors"].__str__()
        == "[{'error': {'int': '2'}, 'expansion': {'string': 'C'}}, {'error': {'int': '1'}, 'expansion': {'string': 'B'}}, {'error': {'int': '0'}, 'expansion': {'string': 'A'}}]"
    )

    # Flag doesn't affect already instantiated contracts
    run_test(c1.ep1, "A", None)
    run_test(c1.ep2, "B", None)
    run_test(lambda: s.compute(c1.v1(True)), "A", None)
    run_test(lambda: s.compute(c1.v2(True)), "C", None)

    # Dynamically created contracts
    f1 = main.Factory()
    s += f1

    f1.create(main.l)
    run_test(f1.ep1, "0", "A")
    run_test(f1.ep2, "1", "B")
    run_test(f1.ep3, "0", "A")
    run_test(f1.exec_l, "A", None)
    run_test(f1.exec_l2, "A", None)
    run_test(f1.ep_v1, "0", "A")
    run_test(f1.ep_v2, "2", "C")
