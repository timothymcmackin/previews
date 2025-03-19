import smartpy as sp


@sp.module
def main():
    class C1(sp.Contract):
        def __init__(self):
            self.data.x = None
            self.data.y = None

        @sp.entrypoint
        def auto_call(self):
            sp.transfer(sp.ticket(1, 43), sp.tez(0), sp.self_entrypoint("run"))

        @sp.entrypoint
        def run(self, params):
            sp.cast(params, sp.ticket[sp.int])
            (ticket_data, copy) = sp.read_ticket(params)
            self.data.y = sp.Some(sp.ticket("abc", 42))
            (t1, t2) = sp.split_ticket(
                copy,
                ticket_data.amount / 3,
                sp.as_nat(ticket_data.amount - ticket_data.amount / 3),
            )
            self.data.x = sp.Some(sp.join_tickets(t2, t1))

        @sp.entrypoint
        def run2(self, params):
            sp.cast(params, sp.record(t=sp.ticket[int], x=int))
            record(x, t).match = params
            assert x == 42
            (ticket_data, copy) = sp.read_ticket(t)
            self.data.y = sp.Some(sp.ticket("abc", 42))
            (t1, t2) = sp.split_ticket(
                copy,
                ticket_data.amount / 3,
                sp.as_nat(ticket_data.amount - ticket_data.amount / 3),
            )
            self.data.x = sp.Some(sp.join_tickets(t2, t1))

    class C2(sp.Contract):
        def __init__(self, t: sp.ticket[sp.nat]):
            self.data.t = t

        @sp.entrypoint
        def run(self):
            with sp.modify_record(self.data) as data:
                (ticket_data, copy) = sp.read_ticket(data.t)
                assert ticket_data.contents == 42
                (t1, t2) = sp.split_ticket(
                    copy, ticket_data.amount / 2, ticket_data.amount / 2
                )
                data.t = sp.join_tickets(t2, t1)

    class C3(sp.Contract):
        def __init__(self):
            self.data.m = sp.cast({}, sp.map[int, sp.ticket[int]])

        @sp.entrypoint
        def ep1(self):
            with sp.modify_record(self.data) as d:
                (t, m) = sp.get_and_update(42, None, d.m)
                d.m = m

    class C4(sp.Contract):
        def __init__(self):
            self.data.m = sp.cast({}, sp.map[int, sp.ticket[int]])
            self.data.x = 0

        @sp.entrypoint
        def ep1(self):
            with sp.modify_record(self.data) as data:
                (t, m) = sp.get_and_update(42, None, data.m)
                data.m = m
                data.x = 0

        @sp.entrypoint
        def ep2(self, cb):
            with sp.modify_record(self.data) as data:
                t1 = sp.ticket("a", 1)
                t2 = sp.ticket("b", 2)
                sp.transfer((t1, t2), sp.mutez(0), cb)


@sp.add_test()
def test():
    s = sp.test_scenario("Ticket", main)
    c = main.C1()
    s += c
    c.auto_call()
    t = sp.test_ticket(c.address, 5, 6)
    c.run(t)

    s += main.C2(t)
    s += main.C3()
    s += main.C4()
