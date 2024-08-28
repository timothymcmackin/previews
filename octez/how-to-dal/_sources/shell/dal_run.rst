Running a DAL node
==================

To run a node for the :doc:`DAL layer <./dal_overview>`, you need an active baker and node.
While you can run a DAL node without an active baker, when you do so, your account is not assigned DAL attestation rights and therefore your node can distribute data among other DAL nodes but cannot attest that it is available.
Adding a DAL node to a baker's setup improves the Tezos ecosystem because it makes the DAL able to handle more data.

Before you begin, make sure that you have an instance of the ``octez-node`` binary running in operator mode, which requires an account with a stake of at least 6,000 tez.

.. warning::

   For the most secure setup, run the DAL node and layer 1 node on different IP addresses; for more information, see :doc:`Bakers & the DAL <./dal_bakers>`.

Follow these steps to run a DAL node along with a layer 1 node and a baker.

#. Verify that you have attestation rights by running this command, where ``MY_ADDRESS`` is your account's address (not its ``octez-client`` alias):

   .. code-block:: shell

      octez-client rpc get /chains/main/blocks/head/helpers/attestation_rights?delegate="$MY_ADDRESS"

#. Initialize the DAL node by running its ``config init`` command with the URL to an RPC node and the directory to store its data in.
   For example, this command initializes the DAL node with the address of a local ``octez-node`` instance on port 8732:

   .. code-block:: shell

      octez-dal-node config init --endpoint http://127.0.0.1:8732 --data-dir "$HOME/.tezos-dal-node"

   You can specify parameters such as the RPC node in the ``config init`` command or in the ``run`` command.
   These commands have the same parameters; for information about them, run ``octez-dal-node config init --help`` or see :ref:`DAL node commands <dal-node-commands>`.

   At minimum, you must specify the URL of an RPC node that the DAL node can use.

#. Start the DAL node by running its ``run`` command, using the URL of your ``octez-node`` instance.

   .. code-block:: shell

      octez-dal-node run

   Leave the DAL node process running.

#. In a new terminal window, start or restart a baking daemon as usual, but tell it to connect to the DAL node by passing the ``--dal-node`` argument.
   The DAL node runs on port 10732 by default, so the command might look like this example, where ``<PROTO_HASH>`` is the short hash of the current protocol of the network:

   .. code-block:: shell

      octez-baker-<PROTO_HASH> run with local node "$HOME/.tezos-node" bob --liquidity-baking-toggle-vote pass --dal-node http://127.0.0.1:10732

   The baker daemon connects to the DAL node and attests to the availability of DAL data as well as its usual layer 1 baking function.

#. In a new terminal window, verify that the DAL node is running properly:

   #. Verify that the node is connected to the DAL by running this command:

      .. code-block:: shell

         curl http://localhost:10732/p2p/gossipsub/connections

      This command should show a list of other DAL nodes that the node is connected to.

   #. Verify that the node is connected to topics by running this command:

      .. code-block:: shell

         curl http://localhost:10732/p2p/gossipsub/topics

      This command should return topics in the form ``{"slot_index":<index>,"pkh":"<ADDRESS OF BAKER>"}`` to represent the topics that the node is subscribed to on the DAL peer-to-peer network.

   #. Verify that the node is receiving shards by running this command and using your address:

      .. code-block:: shell

         octez-client rpc get /chains/main/blocks/head/context/dal/shards?delegates=$MY_ADDRESS

      For more information about topics and shards, see :doc:`DAL overview <./dal_overview>`.

Now the DAL node is running and subscribed to the relevant topics.
