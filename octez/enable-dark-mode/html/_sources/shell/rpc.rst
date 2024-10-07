.. raw:: html
  
  
  <style>
     .wy-nav-content {
        max-width: 100%;
     }
    .tab {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
    }
    .tab button {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 5px 10px;
    }
    .tab button:hover {
      background-color: #ddd;
    }
    .tab button.active {
      background-color: #ccc;
    }
    .tabcontent {
      display: none;
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-top: none;
      max-height: 40ex;
      margin-bottom: 7ex;
      overflow: auto;
    }
    .tabcontent p {
      margin-bottom: 12px;
    }
    pre {
      font-size: 12px
    }
    .rst-content .section ul p {
      margin-bottom: 0;
    }
    span.query {
      font-family: monospace;
      white-space: pre;
    }
  </style>
  


.. raw:: html
  
  
  <script>
    function showTab(elt, tab, ref) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName(ref);
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
  
      tablinks = elt.parentNode.children;
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
  
      document.getElementById(tab).style.display = 'block';
      elt.className += ' active';
    }
  
    document.addEventListener('DOMContentLoaded', function() {
      var a = document.getElementsByClassName('defaultOpen');
      for (i = 0; i < a.length; i++) { a[i].click() }
    })
  </script>
  


.. _rpc_index_shell :

Shell RPCs - Reference
######################

.. include:: /shell/rpc_introduction.rst.inc

Index
*****

* /
  
  * /chains
    
    * /chains/<chain_id> (`PATCH <PATCH_--chains--chain_id_>`_)
      
      * /chains/<chain_id>/blocks (`GET <GET_--chains--chain_id--blocks_>`_)
        
        * /chains/<chain_id>/blocks/<block_id> (<dyn>)
      
      * /chains/<chain_id>/chain_id (`GET <GET_--chains--chain_id--chain_id_>`_)
      
      * /chains/<chain_id>/invalid_blocks (`GET <GET_--chains--chain_id--invalid_blocks_>`_)
        
        * /chains/<chain_id>/invalid_blocks/<block_hash> (`GET <GET_--chains--chain_id--invalid_blocks--block_hash_>`_ `DELETE <DELETE_--chains--chain_id--invalid_blocks--block_hash_>`_)
      
      * /chains/<chain_id>/is_bootstrapped (`GET <GET_--chains--chain_id--is_bootstrapped_>`_)
      
      * /chains/<chain_id>/levels
        
        * /chains/<chain_id>/levels/caboose (`GET <GET_--chains--chain_id--levels--caboose_>`_)
        
        * /chains/<chain_id>/levels/checkpoint (`GET <GET_--chains--chain_id--levels--checkpoint_>`_)
        
        * /chains/<chain_id>/levels/savepoint (`GET <GET_--chains--chain_id--levels--savepoint_>`_)
      
      * /chains/<chain_id>/mempool (<dyn>)
  
  * /config (`GET <GET_--config_>`_)
    
    * /config/history_mode (`GET <GET_--config--history_mode_>`_)
    
    * /config/logging (`PUT <PUT_--config--logging_>`_)
    
    * /config/network
      
      * /config/network/dal (`GET <GET_--config--network--dal_>`_)
      
      * /config/network/user_activated_protocol_overrides (`GET <GET_--config--network--user_activated_protocol_overrides_>`_)
      
      * /config/network/user_activated_upgrades (`GET <GET_--config--network--user_activated_upgrades_>`_)
  
  * /errors (`GET <GET_--errors_>`_)
  
  * /fetch_protocol
    
    * /fetch_protocol/<Protocol_hash> (`GET <GET_--fetch_protocol--Protocol_hash_>`_)
  
  * /health
    
    * /health/ready (`GET <GET_--health--ready_>`_)
  
  * /injection
    
    * /injection/block (`POST <POST_--injection--block_>`_)
    
    * /injection/operation (`POST <POST_--injection--operation_>`_)
    
    * /injection/protocol (`POST <POST_--injection--protocol_>`_)
  
  * /monitor
    
    * /monitor/active_chains (`GET <GET_--monitor--active_chains_>`_)
    
    * /monitor/applied_blocks (`GET <GET_--monitor--applied_blocks_>`_)
    
    * /monitor/bootstrapped (`GET <GET_--monitor--bootstrapped_>`_)
    
    * /monitor/heads
      
      * /monitor/heads/<chain_id> (`GET <GET_--monitor--heads--chain_id_>`_)
    
    * /monitor/protocols (`GET <GET_--monitor--protocols_>`_)
    
    * /monitor/received_blocks
      
      * /monitor/received_blocks/<chain_id> (`GET <GET_--monitor--received_blocks--chain_id_>`_)
    
    * /monitor/validated_blocks (`GET <GET_--monitor--validated_blocks_>`_)
  
  * /network
    
    * /network/connections (`GET <GET_--network--connections_>`_)
      
      * /network/connections/<peer_id> (`GET <GET_--network--connections--peer_id_>`_ `DELETE <DELETE_--network--connections--peer_id_>`_)
    
    * /network/greylist (`DELETE <DELETE_--network--greylist_>`_)
      
      * /network/greylist/ips (`GET <GET_--network--greylist--ips_>`_)
      
      * /network/greylist/peers (`GET <GET_--network--greylist--peers_>`_)
    
    * /network/log (`GET <GET_--network--log_>`_)
    
    * /network/peers (`GET <GET_--network--peers_>`_)
      
      * /network/peers/<peer_id> (`GET <GET_--network--peers--peer_id_>`_ `PATCH <PATCH_--network--peers--peer_id_>`_)
        
        * /network/peers/<peer_id>/banned (`GET <GET_--network--peers--peer_id--banned_>`_)
        
        * /network/peers/<peer_id>/log (`GET <GET_--network--peers--peer_id--log_>`_)
    
    * /network/points (`GET <GET_--network--points_>`_)
      
      * /network/points/<point> (`GET <GET_--network--points--point_>`_ `PUT <PUT_--network--points--point_>`_ `PATCH <PATCH_--network--points--point_>`_)
        
        * /network/points/<point>/banned (`GET <GET_--network--points--point--banned_>`_)
        
        * /network/points/<point>/log (`GET <GET_--network--points--point--log_>`_)
    
    * /network/self (`GET <GET_--network--self_>`_)
    
    * /network/stat (`GET <GET_--network--stat_>`_)
  
  * /private
    
    * /private/injection
      
      * /private/injection/operation (`POST <POST_--private--injection--operation_>`_)
      
      * /private/injection/operations (`POST <POST_--private--injection--operations_>`_)
  
  * /protocols (`GET <GET_--protocols_>`_)
    
    * /protocols/<Protocol_hash> (`GET <GET_--protocols--Protocol_hash_>`_)
      
      * /protocols/<Protocol_hash>/environment (`GET <GET_--protocols--Protocol_hash--environment_>`_)
  
  * /stats
    
    * /stats/gc (`GET <GET_--stats--gc_>`_)
    
    * /stats/memory (`GET <GET_--stats--memory_>`_)
  
  * /version (`GET <GET_--version_>`_)
  
  * /workers
    
    * /workers/block_validator (`GET <GET_--workers--block_validator_>`_)
    
    * /workers/chain_validators (`GET <GET_--workers--chain_validators_>`_)
      
      * /workers/chain_validators/<chain_id> (`GET <GET_--workers--chain_validators--chain_id_>`_)
        
        * /workers/chain_validators/<chain_id>/ddb (`GET <GET_--workers--chain_validators--chain_id--ddb_>`_)
        
        * /workers/chain_validators/<chain_id>/peers_validators (`GET <GET_--workers--chain_validators--chain_id--peers_validators_>`_)
          
          * /workers/chain_validators/<chain_id>/peers_validators/<peer_id> (`GET <GET_--workers--chain_validators--chain_id--peers_validators--peer_id_>`_)
    
    * /workers/prevalidators (`GET <GET_--workers--prevalidators_>`_)
      
      * /workers/prevalidators/<chain_id> (`GET <GET_--workers--prevalidators--chain_id_>`_)

Full description
****************

.. _PATCH_--chains--chain_id :

**PATCH /chains/<chain_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'PATCH_--chains--chain_iddescr', 'PATCH_--chains--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--chains--chain_idinput.json', 'PATCH_--chains--chain_id')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--chains--chain_idinput.bin', 'PATCH_--chains--chain_id')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--chains--chain_idoutput.json', 'PATCH_--chains--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--chains--chain_idoutput.bin', 'PATCH_--chains--chain_id')">Binary output</button>
    </div><div id="PATCH_--chains--chain_iddescr" class="PATCH_--chains--chain_id tabcontent">
            <p>
            Forcefully set the bootstrapped flag of the node</p>
            </div>
  <div id="PATCH_--chains--chain_idinput.json" class="PATCH_--chains--chain_id tabcontent">
    <pre>
    { "bootstrapped": boolean }</pre>
    </div>
  <div id="PATCH_--chains--chain_idinput.bin" class="PATCH_--chains--chain_id tabcontent">
    <pre>
    +--------------+--------+-------------------------------------+
    | Name         | Size   | Contents                            |
    +==============+========+=====================================+
    | bootstrapped | 1 byte | boolean (0 for false, 255 for true) |
    +--------------+--------+-------------------------------------+
    
    
    </pre>
    </div>
  <div id="PATCH_--chains--chain_idoutput.json" class="PATCH_--chains--chain_id tabcontent">
    <pre>
    any</pre>
    </div>
  <div id="PATCH_--chains--chain_idoutput.bin" class="PATCH_--chains--chain_id tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  

.. _GET_--chains--chain_id--blocks :

**GET /chains/<chain_id>/blocks?[length=<uint>]&(head=<block_hash>)\*&[min_date=<date>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--blocksdescr', 'GET_--chains--chain_id--blocks')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--blocksoutput.json', 'GET_--chains--chain_id--blocks')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--blocksoutput.bin', 'GET_--chains--chain_id--blocks')">Binary output</button>
    </div><div id="GET_--chains--chain_id--blocksdescr" class="GET_--chains--chain_id--blocks tabcontent">
            <p>
            Lists block hashes from '&lt;chain&gt;', up to the last checkpoint, sorted with decreasing fitness. Without arguments it returns the head of the chain. Optional arguments allow to return the list of predecessors of a given block or of a set of blocks.</p> <p>Optional query arguments :<ul><li><span class="query">length = &lt;uint&gt;</span> : The requested number of predecessors to return (per request; see next argument).</li><li><span class="query">head = &lt;block_hash&gt;</span> : An empty argument requests blocks starting with the current head. A non empty list allows to request one or more specific fragments of the chain.</li><li><span class="query">min_date = &lt;date&gt;</span> : When `min_date` is provided, blocks with a timestamp before `min_date` are filtered out. However, if the `length` parameter is also provided, then up to that number of predecessors will be returned regardless of their date.</li></ul></p>
            </div>
  <div id="GET_--chains--chain_id--blocksoutput.json" class="GET_--chains--chain_id--blocks tabcontent">
    <pre>
    [ [ $block_hash ... ] ... ]
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--blocksoutput.bin" class="GET_--chains--chain_id--blocks tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of bytes                  |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--chains--chain_id--chain_id :

**GET /chains/<chain_id>/chain_id**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--chain_iddescr', 'GET_--chains--chain_id--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--chain_idoutput.json', 'GET_--chains--chain_id--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--chain_idoutput.bin', 'GET_--chains--chain_id--chain_id')">Binary output</button>
    </div><div id="GET_--chains--chain_id--chain_iddescr" class="GET_--chains--chain_id--chain_id tabcontent">
            <p>
            The chain unique identifier.</p>
            </div>
  <div id="GET_--chains--chain_id--chain_idoutput.json" class="GET_--chains--chain_id--chain_id tabcontent">
    <pre>
    $unistring
    /* Network identifier (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--chain_idoutput.bin" class="GET_--chains--chain_id--chain_id tabcontent">
    <pre>
    +----------+---------+----------+
    | Name     | Size    | Contents |
    +==========+=========+==========+
    | Chain_id | 4 bytes | bytes    |
    +----------+---------+----------+
    
    
    </pre>
    </div>
  


.. _GET_--chains--chain_id--invalid_blocks :

**GET /chains/<chain_id>/invalid_blocks**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocksdescr', 'GET_--chains--chain_id--invalid_blocks')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocksoutput.json', 'GET_--chains--chain_id--invalid_blocks')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocksoutput.bin', 'GET_--chains--chain_id--invalid_blocks')">Binary output</button>
    </div><div id="GET_--chains--chain_id--invalid_blocksdescr" class="GET_--chains--chain_id--invalid_blocks tabcontent">
            <p>
            Lists blocks that have been declared invalid along with the errors that led to them being declared invalid.</p>
            </div>
  <div id="GET_--chains--chain_id--invalid_blocksoutput.json" class="GET_--chains--chain_id--invalid_blocks tabcontent">
    <pre>
    [ { "block": $block_hash,
        "level": integer ∈ [-2^31-1, 2^31],
        "errors": $error } ... ]
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--invalid_blocksoutput.bin" class="GET_--chains--chain_id--invalid_blocks tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | block                    | 32 bytes | bytes                              |
    +--------------------------+----------+------------------------------------+
    | level                    | 4 bytes  | signed 32-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    </pre>
    </div>
  

.. _GET_--chains--chain_id--invalid_blocks--block_hash :

**GET /chains/<chain_id>/invalid_blocks/<block_hash>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocks--block_hashdescr', 'GET_--chains--chain_id--invalid_blocks--block_hash')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocks--block_hashoutput.json', 'GET_--chains--chain_id--invalid_blocks--block_hash')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--invalid_blocks--block_hashoutput.bin', 'GET_--chains--chain_id--invalid_blocks--block_hash')">Binary output</button>
    </div><div id="GET_--chains--chain_id--invalid_blocks--block_hashdescr" class="GET_--chains--chain_id--invalid_blocks--block_hash tabcontent">
            <p>
            The errors that appears during the block (in)validation.</p>
            </div>
  <div id="GET_--chains--chain_id--invalid_blocks--block_hashoutput.json" class="GET_--chains--chain_id--invalid_blocks--block_hash tabcontent">
    <pre>
    { "block": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31],
      "errors": $error }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--invalid_blocks--block_hashoutput.bin" class="GET_--chains--chain_id--invalid_blocks--block_hash tabcontent">
    <pre>
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | block                    | 32 bytes | bytes                              |
    +--------------------------+----------+------------------------------------+
    | level                    | 4 bytes  | signed 32-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  

.. _DELETE_--chains--chain_id--invalid_blocks--block_hash :

**DELETE /chains/<chain_id>/invalid_blocks/<block_hash>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'DELETE_--chains--chain_id--invalid_blocks--block_hashdescr', 'DELETE_--chains--chain_id--invalid_blocks--block_hash')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--chains--chain_id--invalid_blocks--block_hashoutput.json', 'DELETE_--chains--chain_id--invalid_blocks--block_hash')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--chains--chain_id--invalid_blocks--block_hashoutput.bin', 'DELETE_--chains--chain_id--invalid_blocks--block_hash')">Binary output</button>
    </div><div id="DELETE_--chains--chain_id--invalid_blocks--block_hashdescr" class="DELETE_--chains--chain_id--invalid_blocks--block_hash tabcontent">
            <p>
            Remove an invalid block for the tezos storage</p>
            </div>
  <div id="DELETE_--chains--chain_id--invalid_blocks--block_hashoutput.json" class="DELETE_--chains--chain_id--invalid_blocks--block_hash tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="DELETE_--chains--chain_id--invalid_blocks--block_hashoutput.bin" class="DELETE_--chains--chain_id--invalid_blocks--block_hash tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  


.. _GET_--chains--chain_id--is_bootstrapped :

**GET /chains/<chain_id>/is_bootstrapped**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--is_bootstrappeddescr', 'GET_--chains--chain_id--is_bootstrapped')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--is_bootstrappedoutput.json', 'GET_--chains--chain_id--is_bootstrapped')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--is_bootstrappedoutput.bin', 'GET_--chains--chain_id--is_bootstrapped')">Binary output</button>
    </div><div id="GET_--chains--chain_id--is_bootstrappeddescr" class="GET_--chains--chain_id--is_bootstrapped tabcontent">
            <p>
            The bootstrap status of a chain</p>
            </div>
  <div id="GET_--chains--chain_id--is_bootstrappedoutput.json" class="GET_--chains--chain_id--is_bootstrapped tabcontent">
    <pre>
    { "bootstrapped": boolean,
      "sync_state": $chain_status }
    $chain_status:
      /* If 'unsynced', the node is not currently synchronized with of its
         peers (it is probably still bootstrapping and its head is lagging
         behind the chain's).
         If 'synced', the node considers itself synchronized with its peers and
         the current head timestamp is recent.
         If 'stuck', the node considers itself synchronized with its peers but
         the chain seems to be halted from its viewpoint. */
      "stuck" | "synced" | "unsynced"</pre>
    </div>
  <div id="GET_--chains--chain_id--is_bootstrappedoutput.bin" class="GET_--chains--chain_id--is_bootstrapped tabcontent">
    <pre>
    +--------------+--------+-------------------------------------------------------------------+
    | Name         | Size   | Contents                                                          |
    +==============+========+===================================================================+
    | bootstrapped | 1 byte | boolean (0 for false, 255 for true)                               |
    +--------------+--------+-------------------------------------------------------------------+
    | sync_state   | 1 byte | unsigned 8-bit integer encoding an enumeration (see chain_status) |
    +--------------+--------+-------------------------------------------------------------------+
    
    
    chain_status (Enumeration: unsigned 8-bit integer):
    ***************************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | synced         |
    +-------------+----------------+
    | 1           | unsynced       |
    +-------------+----------------+
    | 2           | stuck          |
    +-------------+----------------+
    
    </pre>
    </div>
  


.. _GET_--chains--chain_id--levels--caboose :

**GET /chains/<chain_id>/levels/caboose**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--levels--caboosedescr', 'GET_--chains--chain_id--levels--caboose')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--cabooseoutput.json', 'GET_--chains--chain_id--levels--caboose')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--cabooseoutput.bin', 'GET_--chains--chain_id--levels--caboose')">Binary output</button>
    </div><div id="GET_--chains--chain_id--levels--caboosedescr" class="GET_--chains--chain_id--levels--caboose tabcontent">
            <p>
            The current caboose for this chain.</p>
            </div>
  <div id="GET_--chains--chain_id--levels--cabooseoutput.json" class="GET_--chains--chain_id--levels--caboose tabcontent">
    <pre>
    { "block_hash": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--levels--cabooseoutput.bin" class="GET_--chains--chain_id--levels--caboose tabcontent">
    <pre>
    +------------+----------+----------------------------------+
    | Name       | Size     | Contents                         |
    +============+==========+==================================+
    | block_hash | 32 bytes | bytes                            |
    +------------+----------+----------------------------------+
    | level      | 4 bytes  | signed 32-bit big-endian integer |
    +------------+----------+----------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--chains--chain_id--levels--checkpoint :

**GET /chains/<chain_id>/levels/checkpoint**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--levels--checkpointdescr', 'GET_--chains--chain_id--levels--checkpoint')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--checkpointoutput.json', 'GET_--chains--chain_id--levels--checkpoint')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--checkpointoutput.bin', 'GET_--chains--chain_id--levels--checkpoint')">Binary output</button>
    </div><div id="GET_--chains--chain_id--levels--checkpointdescr" class="GET_--chains--chain_id--levels--checkpoint tabcontent">
            <p>
            The current checkpoint for this chain.</p>
            </div>
  <div id="GET_--chains--chain_id--levels--checkpointoutput.json" class="GET_--chains--chain_id--levels--checkpoint tabcontent">
    <pre>
    { "block_hash": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--levels--checkpointoutput.bin" class="GET_--chains--chain_id--levels--checkpoint tabcontent">
    <pre>
    +------------+----------+----------------------------------+
    | Name       | Size     | Contents                         |
    +============+==========+==================================+
    | block_hash | 32 bytes | bytes                            |
    +------------+----------+----------------------------------+
    | level      | 4 bytes  | signed 32-bit big-endian integer |
    +------------+----------+----------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--chains--chain_id--levels--savepoint :

**GET /chains/<chain_id>/levels/savepoint**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--chains--chain_id--levels--savepointdescr', 'GET_--chains--chain_id--levels--savepoint')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--savepointoutput.json', 'GET_--chains--chain_id--levels--savepoint')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--chains--chain_id--levels--savepointoutput.bin', 'GET_--chains--chain_id--levels--savepoint')">Binary output</button>
    </div><div id="GET_--chains--chain_id--levels--savepointdescr" class="GET_--chains--chain_id--levels--savepoint tabcontent">
            <p>
            The current savepoint for this chain.</p>
            </div>
  <div id="GET_--chains--chain_id--levels--savepointoutput.json" class="GET_--chains--chain_id--levels--savepoint tabcontent">
    <pre>
    { "block_hash": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--chains--chain_id--levels--savepointoutput.bin" class="GET_--chains--chain_id--levels--savepoint tabcontent">
    <pre>
    +------------+----------+----------------------------------+
    | Name       | Size     | Contents                         |
    +============+==========+==================================+
    | block_hash | 32 bytes | bytes                            |
    +------------+----------+----------------------------------+
    | level      | 4 bytes  | signed 32-bit big-endian integer |
    +------------+----------+----------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--config :

**GET /config**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--configdescr', 'GET_--config')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--configoutput.json', 'GET_--config')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--configoutput.bin', 'GET_--config')">Binary output</button>
    </div><div id="GET_--configdescr" class="GET_--config tabcontent">
            <p>
            Return the runtime node configuration (this takes into account the command-line arguments and the on-disk configuration file)</p>
            </div>
  <div id="GET_--configoutput.json" class="GET_--config tabcontent">
    <pre>
    { "data-dir"?: $unistring /* Location of the data dir on disk. */,
      "disable-config-validation"?:
        boolean
        /* Disable the node configuration validation. */,
      "rpc"?:
        { /* Configuration of rpc parameters */
          "listen-addrs"?:
            [ $unistring ... ]
            /* Hosts to listen to. If the port is not specified, the default
               port 8732 will be assumed. */,
          "external-listen-addrs"?:
            [ $unistring ... ]
            /* Hosts to listen to. If the port is not specified, the default
               port 8732 will be assumed. */,
          "listen-addr"?: $unistring /* Legacy value: Host to listen to */,
          "cors-origin"?:
            [ $unistring ... ]
            /* Cross Origin Resource Sharing parameters, see
               https://en.wikipedia.org/wiki/Cross-origin_resource_sharing. */,
          "cors-headers"?:
            [ $unistring ... ]
            /* Cross Origin Resource Sharing parameters, see
               https://en.wikipedia.org/wiki/Cross-origin_resource_sharing. */,
          "crt"?:
            $unistring
            /* Certificate file (necessary when TLS is used). */,
          "key"?: $unistring /* Key file (necessary when TLS is used). */,
          "acl"?:
            [ { /* Whitelist */
                "address": $unistring,
                "whitelist": [ $unistring ... ] }
              || { /* Blacklist */
                   "address": $unistring,
                   "blacklist": [ $unistring ... ] } ... ]
            /* A list of RPC ACLs for specific listening addresses. */,
          "media-type"?: "json" | "any" | "binary",
          "max_active_rpc_connections"?:
            $max_active_rpc_connections
            /* The maximum number of active connections per RPC endpoint. */,
          "enable-http-cache-headers"?:
            boolean
            /* Enables HTTP cache headers in the RPC response. When enabled,
               'Cache-control' will be present with 'max-age' in the response
               header of relative queries (eg. head, head-n, head~n). The
               'max-age' value indicates the duration of which the returned
               response is cacheable. It is an estimate of the remaining
               duration of the current round based on when the block was
               forged. Enabling this feature adds a performance overhead to all
               queries hence you should only do so if you are running the RPC
               server behind a caching server. The feature is implemented based
               on RFC9111 hence useful for reverse proxies with auto-caching
               mechanism. */ },
      "p2p"?:
        { /* Configuration of network parameters */
          "expected-proof-of-work"?:
            number
            /* Floating point number between 0 and 256 that represents a
               difficulty, 24 signifies for example that at least 24 leading
               zeroes are expected in the hash. */,
          "bootstrap-peers"?:
            [ $unistring ... ]
            /* List of hosts. Tezos can connect to both IPv6 and IPv4 hosts. If
               the port is not specified, default port 9732 will be assumed. */,
          "listen-addr"?:
            $unistring
            /* Host to listen to. If the port is not specified, the default
               port 9732 will be assumed. */,
          "advertised-net-port"?:
            integer ∈ [0, 2^16-1]
            /* Alternative port advertised to other peers to connect to. If the
               port is not specified, the port from listen-addr will be
               assumed. */,
          "discovery-addr"?:
            /* Host for local peer discovery. If the port is not specified, the
               default port 10732 will be assumed. */
            $unistring /* Some */ || null /* None */,
          "private-mode"?:
            boolean
            /* Specify if the node is in private mode or not. A node in private
               mode rejects incoming connections from untrusted peers and only
               opens outgoing connections to peers listed in 'bootstrap-peers'
               or provided with '--peer' option. Moreover, these peers will
               keep the identity and the address of the private node secret. */,
          "limits"?:
            { /* Network limits */
              "connection-timeout"?:
                $timespan.system
                /* Delay acceptable when initiating a connection to a new peer,
                   in seconds. */,
              "authentication-timeout"?:
                $timespan.system
                /* Delay granted to a peer to perform authentication, in
                   seconds. */,
              "min-connections"?:
                integer ∈ [0, 2^16-1]
                /* Strict minimum number of connections (triggers an urgent
                   maintenance). */,
              "expected-connections"?:
                integer ∈ [0, 2^16-1]
                /* Targeted number of connections to reach when bootstrapping /
                   maintaining. */,
              "max-connections"?:
                integer ∈ [0, 2^16-1]
                /* Maximum number of connections (exceeding peers are
                   disconnected). */,
              "backlog"?:
                integer ∈ [0, 255]
                /* Number above which pending incoming connections are
                   immediately rejected. */,
              "max-incoming-connections"?:
                integer ∈ [0, 255]
                /* Number above which pending incoming connections are
                   immediately rejected. */,
              "max-download-speed"?:
                integer ∈ [-2^30, 2^30]
                /* Max download speeds in KiB/s. */,
              "max-upload-speed"?:
                integer ∈ [-2^30, 2^30]
                /* Max upload speeds in KiB/s. */,
              "swap-linger"?: $timespan.system /* Some */ || null /* None */,
              "binary-chunks-size"?: integer ∈ [0, 255],
              "read-buffer-size"?:
                integer ∈ [-2^30, 2^30]
                /* Size of the buffer passed to read(2). */,
              "read-queue-size"?: integer ∈ [-2^30, 2^30],
              "write-queue-size"?: integer ∈ [-2^30, 2^30],
              "incoming-app-message-queue-size"?: integer ∈ [-2^30, 2^30],
              "incoming-message-queue-size"?: integer ∈ [-2^30, 2^30],
              "outgoing-message-queue-size"?: integer ∈ [-2^30, 2^30],
              "max_known_points"?:
                [ integer ∈ [0, 2^16-1], integer ∈ [0, 2^16-1] ]
                /* The max and target size for the known address table. */,
              "max_known_peer_ids"?:
                [ integer ∈ [0, 2^16-1], integer ∈ [0, 2^16-1] ]
                /* The max and target size for the known peers table. */,
              "peer_greylist_size"?:
                integer ∈ [0, 2^16-1]
                /* The number of peer_ids kept in the peer_id greylist. */,
              "ip_greylist_size_in_kilobytes"?:
                integer ∈ [0, 2^16-1]
                /* The size of the IP address greylist (in kilobytes). */,
              "ip_greylist_cleanup_delay"?:
                $timespan.system
                /* The time an IP address is kept in the greylist. */,
              "greylist-timeout"?:
                $timespan.system
                /* GC delay for the greylists tables, in seconds. */,
              "maintenance-idle-time"?:
                /* How long to wait at most, in seconds, before running a
                   maintenance loop. If null -- decoding to None -- is provided
                   then the maintenance is disabled. */
                $timespan.system /* Some */ || null /* None */ },
          "disable_mempool"?:
            boolean
            /* If set to [true], the node will not participate in the
               propagation of pending operations (mempool). Default value is
               [false]. It can be used to decrease the memory and computation
               footprints of the node. */,
          "enable_testchain"?:
            boolean
            /* DEPRECATED. If set to [true], the node will spawn a testchain
               during the protocol's testing voting period. Default value is
               [false]. It is disabled to decrease the node storage usage and
               computation by dropping the validation of the test network
               blocks. */,
          "greylisting_config"?:
            { /* The reconnection policy regulates the frequency with which the
                 node tries to reconnect to an old known peer. */
              "factor"?:
                number
                /* The factor by which the reconnection delay is increased when
                   a peer that was previously disconnected is disconnected
                   again. This value should be set to 1 for a linear back-off
                   and to >1 for an exponential back-off. */,
              "initial-delay"?:
                $timespan.system
                /* The span of time a peer is disconnected for when it is first
                   disconnected. */,
              "disconnection-delay"?:
                $timespan.system
                /* The span of time a peer is disconnected for when it is
                   disconnected as the result of an error. */,
              "increase-cap"?:
                $timespan.system
                /* The maximum amount by which the reconnection is extended.
                   This limits the rate of the exponential back-off, which
                   eventually becomes linear when it reaches this limit. This
                   limit is set to avoid reaching the End-of-Time when
                   repeatedly reconnection a peer. */ },
          "disable_peer_discovery"?:
            boolean
            /* This field should be used for testing purpose only. If set to
               [true], the node will not participate to the peer discovery
               mechanism. The node will not be able to find new peers to
               connect with. */ },
      "log"?:
        { /* Configuration of the Lwt-log sink (part of the logging framework) */
          "output"?:
            $unistring
            /* Output for the logging function. Either 'stdout', 'stderr' or
               the name of a log file . */,
          "level"?: "info" | "debug" | "error" | "fatal" | "warning" | "notice",
          "colors"?: boolean /* Enables light coloring in logs. */,
          "rules"?:
            $unistring
            /* Fine-grained logging instructions. Same format as described in
               `octez-node run --help`, DEBUG section. In the example below,
               sections 'p2p' and all sections starting by 'client' will have
               their messages logged up to the debug level, whereas the rest of
               log sections will be logged up to the notice level. */ },
      "internal-events"?:
        /* Configuration of the structured logging framework */
        { /* Active-Sinks
             List of sinks to make sure are activated. */
          "active_sinks"?:
            [ $unistring ... ]
            /* List of URIs to activate/configure sinks. */ }
        || { /* Active-Sinks-Deprecated
                List of sinks to make sure are activated, deprecated
                backwards-compatibility encoding. */
             "activate"?:
               [ $unistring ... ]
               /* List of URIs to activate/configure sinks. */ },
      "shell"?:
        { /* Configuration of network parameters */
          "peer_validator"?:
            { "block_header_request_timeout"?: $timespan.system,
              "block_operations_request_timeout"?: $timespan.system,
              "protocol_request_timeout"?: $timespan.system,
              "new_head_request_timeout"?: $timespan.system },
          "block_validator"?:
            { "protocol_request_timeout"?: $timespan.system,
              "operation_metadata_size_limit"?: $operation_metadata_size_limit },
          "prevalidator"?:
            { "operations_request_timeout"?: $timespan.system,
              "max_refused_operations"?: integer ∈ [0, 2^16-1],
              "operations_batch_size"?: integer ∈ [-2^30, 2^30] },
          "chain_validator"?:
            { /* synchronisation_heuristic_encoding */
              "latency"?:
                integer ∈ [0, 2^16-1]
                /* [latency] is the time interval (in seconds) used to
                   determine if a peer is synchronized with a chain. For
                   instance, a peer whose known head has a timestamp T is
                   considered synchronized if T >= now - latency. This
                   parameter depends on the baking rate and the latency of the
                   network. */,
              "synchronisation_threshold"?:
                integer ∈ [0, 255]
                /* The minimal number of peers this peer should be synchronized
                   with in order to be bootstrapped. */ }
            || { /* legacy_bootstrap_threshold_encoding */
                 "bootstrap_threshold"?:
                   integer ∈ [0, 255]
                   /* [DEPRECATED] Set the number of peers with whom a chain
                      synchronisation must be completed to bootstrap the node. */ },
          "history_mode"?: $history_mode,
          "disable_context_pruning"?: boolean,
          "storage_maintenance_delay"?: $storage_maintenance_delay },
      "network"?:
        /* Configuration of which network/blockchain to connect to */
        "sandbox"
        || "mainnet"
        || "ghostnet"
        || { /* Custom */
             "genesis":
               { "timestamp": $timestamp.protocol,
                 "block": $block_hash,
                 "protocol": $Protocol_hash },
             "genesis_parameters"?:
               { "context_key"?: $unistring,
                 "values": any },
             "chain_name": $distributed_db_version.name,
             "old_chain_name"?: $distributed_db_version.name,
             "incompatible_chain_name"?: $distributed_db_version.name,
             "sandboxed_chain_name": $distributed_db_version.name,
             "user_activated_upgrades"?: $user_activated.upgrades,
             "user_activated_protocol_overrides"?:
               $user_activated.protocol_overrides,
             "default_bootstrap_peers"?:
               [ $unistring ... ]
               /* List of hosts to use if p2p.bootstrap_peers is unspecified. */,
             "dal_config"?:
               { /* USE FOR TESTING PURPOSE ONLY. Configuration for the
                    data-availibility layer */
                 "activated"?: boolean,
                 "bootstrap_peers": [ $unistring ... ] } },
      "metrics_addr"?:
        [ $unistring ... ]
        /* Configuration of the Prometheus metrics endpoint */ }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $distributed_db_version.name:
      /* A name for the distributed DB protocol */
      $unistring
    $history_mode:
      /* history mode
         Storage mode for the Tezos shell. */
      "archive"
      || { /* full
              Full mode retains every block and operations since the genesis
              block but periodically prunes older blocks' metadata to reduce
              the storage size. */
           "full":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the savepoint.
                    By default: 1 additional cycles will be stored. */ } }
      || { /* rolling
              Rolling mode only retain the most recent cycles by periodically
              periodically discarding older blocks to reduce the storage size. */
           "rolling":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the savepoint.
                    By default: 1 additional cycles will be stored. */ } }
      || "full"
      || "rolling"
    $max_active_rpc_connections:
      /* max_active_rpc_connections
         The maximum alowed number of RPC connections */
      "unlimited"
      || integer ∈ [-2^30, 2^30]
      /* limited
         The number of maximum RPC connections allowed is limited to the given
         integer's value. */
    $operation_metadata_size_limit:
      /* operation_metadata_size_limit
         The operation metadata size limit */
      "unlimited"
      || integer ∈ [-2^30, 2^30]
      /* limited
         The metadata size is limited to the given integer's value (in bytes). */
    $storage_maintenance_delay:
      /* storage maintenance delay
         Delay prior to the storage maintenance trigger */
      "disabled"
      || { /* custom
              When "custom <N>" is set, storage maintenance is triggered "N"
              blocks after the start of a new cycle. */
           "custom": integer ∈ [-2^31-1, 2^31] }
      || "auto"
    $timespan.system:
      /* A span of time, as seen by the local computer. */
      number
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }
    $user_activated.protocol_overrides:
      /* User activated protocol overrides
         User activated protocol overrides: activate a protocol instead of
         another. */
      [ { "replaced_protocol": $Protocol_hash,
          "replacement_protocol": $Protocol_hash } ... ]
    $user_activated.upgrades:
      /* User activated upgrades
         User activated upgrades: at given level, switch to given protocol. */
      [ { "level": integer ∈ [-2^31-1, 2^31],
          "replacement_protocol": $Protocol_hash } ... ]</pre>
    </div>
  <div id="GET_--configoutput.bin" class="GET_--config tabcontent">
    <pre>
    +---------------------------------------+----------------------+-------------------------------------+
    | Name                                  | Size                 | Contents                            |
    +=======================================+======================+=====================================+
    | # bytes in next field                 | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------------+----------------------+-------------------------------------+
    | data-dir                              | Variable             | bytes                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | disable-config-validation             | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------+----------------------+-------------------------------------+
    | rpc                                   | Determined from data | $X_0                                |
    +---------------------------------------+----------------------+-------------------------------------+
    | p2p                                   | Determined from data | $X_14                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | log                                   | Determined from data | $X_25                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "internal-events" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------+----------------------+-------------------------------------+
    | internal-events                       | Determined from data | $X_30                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | shell                                 | Determined from data | $X_31                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | network                               | Determined from data | $X_43                               |
    +---------------------------------------+----------------------+-------------------------------------+
    | # bytes in next field                 | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------------+----------------------+-------------------------------------+
    | metrics_addr                          | Variable             | sequence of $X_2                    |
    +---------------------------------------+----------------------+-------------------------------------+
    
    
    X_2
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_2                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_12 (Determined from data, 8-bit tag)
    **************************************
    
    Whitelist (tag 0)
    =================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | address               | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | whitelist             | Variable | sequence of $X_2                   |
    +-----------------------+----------+------------------------------------+
    
    
    Blacklist (tag 1)
    =================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | address               | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | blacklist             | Variable | sequence of $X_2                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_13 (Enumeration: unsigned 8-bit integer):
    *******************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | json           |
    +-------------+----------------+
    | 1           | binary         |
    +-------------+----------------+
    | 2           | any            |
    +-------------+----------------+
    
    
    max_active_rpc_connections (Determined from data, 8-bit tag)
    ************************************************************
    
    unlimited (tag 0)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    limited (tag 1)
    ===============
    
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | Tag             | 1 byte  | unsigned 8-bit integer                                                  |
    +-----------------+---------+-------------------------------------------------------------------------+
    | Unnamed field 0 | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | Name                                        | Size                 | Contents                                                  |
    +=============================================+======================+===========================================================+
    | ? presence of field "listen-addrs"          | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | listen-addrs                                | Determined from data | $X_1                                                      |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | ? presence of field "external-listen-addrs" | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | external-listen-addrs                       | Determined from data | $X_1                                                      |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | ? presence of field "listen-addr"           | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | listen-addr                                 | Determined from data | $X_2                                                      |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | # bytes in next field                       | 4 bytes              | unsigned 30-bit big-endian integer                        |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | cors-origin                                 | Variable             | sequence of $X_2                                          |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | # bytes in next field                       | 4 bytes              | unsigned 30-bit big-endian integer                        |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | cors-headers                                | Variable             | sequence of $X_2                                          |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | ? presence of field "crt"                   | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | crt                                         | Determined from data | $X_2                                                      |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | ? presence of field "key"                   | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | key                                         | Determined from data | $X_2                                                      |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | # bytes in next field                       | 4 bytes              | unsigned 30-bit big-endian integer                        |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | acl                                         | Variable             | sequence of $X_12                                         |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | media-type                                  | 1 byte               | unsigned 8-bit integer encoding an enumeration (see X_13) |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | max_active_rpc_connections                  | Determined from data | $max_active_rpc_connections                               |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    | enable-http-cache-headers                   | 1 byte               | boolean (0 for false, 255 for true)                       |
    +---------------------------------------------+----------------------+-----------------------------------------------------------+
    
    
    X_18 (Determined from data, 8-bit tag)
    **************************************
    
    None (tag 0)
    ============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Some (tag 1)
    ============
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_20 (Determined from data, 8-bit tag)
    **************************************
    
    None (tag 0)
    ============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Some (tag 1)
    ============
    
    +-----------------+---------+----------------------------------------+
    | Name            | Size    | Contents                               |
    +=================+=========+========================================+
    | Tag             | 1 byte  | unsigned 8-bit integer                 |
    +-----------------+---------+----------------------------------------+
    | Unnamed field 0 | 8 bytes | double-precision floating-point number |
    +-----------------+---------+----------------------------------------+
    
    
    X_21
    ****
    
    +-----------------+---------+------------------------------------+
    | Name            | Size    | Contents                           |
    +=================+=========+====================================+
    | Unnamed field 0 | 2 bytes | unsigned 16-bit big-endian integer |
    +-----------------+---------+------------------------------------+
    | Unnamed field 1 | 2 bytes | unsigned 16-bit big-endian integer |
    +-----------------+---------+------------------------------------+
    
    
    X_19
    ****
    
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | Name                                                  | Size                 | Contents                                                                |
    +=======================================================+======================+=========================================================================+
    | connection-timeout                                    | 8 bytes              | double-precision floating-point number                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | authentication-timeout                                | 8 bytes              | double-precision floating-point number                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | min-connections                                       | 2 bytes              | unsigned 16-bit big-endian integer                                      |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | expected-connections                                  | 2 bytes              | unsigned 16-bit big-endian integer                                      |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max-connections                                       | 2 bytes              | unsigned 16-bit big-endian integer                                      |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | backlog                                               | 1 byte               | unsigned 8-bit integer                                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max-incoming-connections                              | 1 byte               | unsigned 8-bit integer                                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "max-download-speed"              | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max-download-speed                                    | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "max-upload-speed"                | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max-upload-speed                                      | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | swap-linger                                           | Determined from data | $X_20                                                                   |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "binary-chunks-size"              | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | binary-chunks-size                                    | 1 byte               | unsigned 8-bit integer                                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | read-buffer-size                                      | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "read-queue-size"                 | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | read-queue-size                                       | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "write-queue-size"                | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | write-queue-size                                      | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "incoming-app-message-queue-size" | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | incoming-app-message-queue-size                       | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "incoming-message-queue-size"     | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | incoming-message-queue-size                           | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "outgoing-message-queue-size"     | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | outgoing-message-queue-size                           | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "max_known_points"                | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max_known_points                                      | 4 bytes              | $X_21                                                                   |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ? presence of field "max_known_peer_ids"              | 1 byte               | boolean (0 for false, 255 for true)                                     |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | max_known_peer_ids                                    | 4 bytes              | $X_21                                                                   |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | peer_greylist_size                                    | 2 bytes              | unsigned 16-bit big-endian integer                                      |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ip_greylist_size_in_kilobytes                         | 2 bytes              | unsigned 16-bit big-endian integer                                      |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | ip_greylist_cleanup_delay                             | 8 bytes              | double-precision floating-point number                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | greylist-timeout                                      | 8 bytes              | double-precision floating-point number                                  |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    | maintenance-idle-time                                 | Determined from data | $X_20                                                                   |
    +-------------------------------------------------------+----------------------+-------------------------------------------------------------------------+
    
    
    X_24
    ****
    
    +---------------------+---------+----------------------------------------+
    | Name                | Size    | Contents                               |
    +=====================+=========+========================================+
    | factor              | 8 bytes | double-precision floating-point number |
    +---------------------+---------+----------------------------------------+
    | initial-delay       | 8 bytes | double-precision floating-point number |
    +---------------------+---------+----------------------------------------+
    | disconnection-delay | 8 bytes | double-precision floating-point number |
    +---------------------+---------+----------------------------------------+
    | increase-cap        | 8 bytes | double-precision floating-point number |
    +---------------------+---------+----------------------------------------+
    
    
    X_14
    ****
    
    +-------------------------------------------+----------------------+----------------------------------------+
    | Name                                      | Size                 | Contents                               |
    +===========================================+======================+========================================+
    | expected-proof-of-work                    | 8 bytes              | double-precision floating-point number |
    +-------------------------------------------+----------------------+----------------------------------------+
    | ? presence of field "bootstrap-peers"     | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | bootstrap-peers                           | Determined from data | $X_1                                   |
    +-------------------------------------------+----------------------+----------------------------------------+
    | ? presence of field "listen-addr"         | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | listen-addr                               | Determined from data | $X_2                                   |
    +-------------------------------------------+----------------------+----------------------------------------+
    | ? presence of field "advertised-net-port" | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | advertised-net-port                       | 2 bytes              | unsigned 16-bit big-endian integer     |
    +-------------------------------------------+----------------------+----------------------------------------+
    | discovery-addr                            | Determined from data | $X_18                                  |
    +-------------------------------------------+----------------------+----------------------------------------+
    | private-mode                              | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | limits                                    | Determined from data | $X_19                                  |
    +-------------------------------------------+----------------------+----------------------------------------+
    | disable_mempool                           | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | enable_testchain                          | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    | greylisting_config                        | 32 bytes             | $X_24                                  |
    +-------------------------------------------+----------------------+----------------------------------------+
    | disable_peer_discovery                    | 1 byte               | boolean (0 for false, 255 for true)    |
    +-------------------------------------------+----------------------+----------------------------------------+
    
    
    X_26 (Enumeration: unsigned 8-bit integer):
    *******************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | debug          |
    +-------------+----------------+
    | 1           | info           |
    +-------------+----------------+
    | 2           | notice         |
    +-------------+----------------+
    | 3           | warning        |
    +-------------+----------------+
    | 4           | error          |
    +-------------+----------------+
    | 5           | fatal          |
    +-------------+----------------+
    
    
    X_25
    ****
    
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | Name                        | Size                 | Contents                                                  |
    +=============================+======================+===========================================================+
    | # bytes in next field       | 4 bytes              | unsigned 30-bit big-endian integer                        |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | output                      | Variable             | bytes                                                     |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | level                       | 1 byte               | unsigned 8-bit integer encoding an enumeration (see X_26) |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | colors                      | 1 byte               | boolean (0 for false, 255 for true)                       |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | ? presence of field "rules" | 1 byte               | boolean (0 for false, 255 for true)                       |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    | rules                       | Determined from data | $X_2                                                      |
    +-----------------------------+----------------------+-----------------------------------------------------------+
    
    
    X_30 (Determined from data, 8-bit tag)
    **************************************
    
    Active-Sinks (tag 0)
    ====================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | active_sinks          | Variable | sequence of $X_2                   |
    +-----------------------+----------+------------------------------------+
    
    
    Active-Sinks-Deprecated (tag 1)
    ===============================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | activate              | Variable | sequence of $X_2                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_32
    ****
    
    +----------------------------------+---------+----------------------------------------+
    | Name                             | Size    | Contents                               |
    +==================================+=========+========================================+
    | block_header_request_timeout     | 8 bytes | double-precision floating-point number |
    +----------------------------------+---------+----------------------------------------+
    | block_operations_request_timeout | 8 bytes | double-precision floating-point number |
    +----------------------------------+---------+----------------------------------------+
    | protocol_request_timeout         | 8 bytes | double-precision floating-point number |
    +----------------------------------+---------+----------------------------------------+
    | new_head_request_timeout         | 8 bytes | double-precision floating-point number |
    +----------------------------------+---------+----------------------------------------+
    
    
    X_33
    ****
    
    +-------------------------------+----------------------+----------------------------------------+
    | Name                          | Size                 | Contents                               |
    +===============================+======================+========================================+
    | protocol_request_timeout      | 8 bytes              | double-precision floating-point number |
    +-------------------------------+----------------------+----------------------------------------+
    | operation_metadata_size_limit | Determined from data | $max_active_rpc_connections            |
    +-------------------------------+----------------------+----------------------------------------+
    
    
    X_34
    ****
    
    +----------------------------+---------+-------------------------------------------------------------------------+
    | Name                       | Size    | Contents                                                                |
    +============================+=========+=========================================================================+
    | operations_request_timeout | 8 bytes | double-precision floating-point number                                  |
    +----------------------------+---------+-------------------------------------------------------------------------+
    | max_refused_operations     | 2 bytes | unsigned 16-bit big-endian integer                                      |
    +----------------------------+---------+-------------------------------------------------------------------------+
    | operations_batch_size      | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +----------------------------+---------+-------------------------------------------------------------------------+
    
    
    X_35 (Determined from data, 8-bit tag)
    **************************************
    
    synchronisation_heuristic_encoding (tag 0)
    ==========================================
    
    +---------------------------+---------+------------------------------------+
    | Name                      | Size    | Contents                           |
    +===========================+=========+====================================+
    | Tag                       | 1 byte  | unsigned 8-bit integer             |
    +---------------------------+---------+------------------------------------+
    | latency                   | 2 bytes | unsigned 16-bit big-endian integer |
    +---------------------------+---------+------------------------------------+
    | synchronisation_threshold | 1 byte  | unsigned 8-bit integer             |
    +---------------------------+---------+------------------------------------+
    
    
    legacy_bootstrap_threshold_encoding (tag 1)
    ===========================================
    
    +---------------------+--------+------------------------+
    | Name                | Size   | Contents               |
    +=====================+========+========================+
    | Tag                 | 1 byte | unsigned 8-bit integer |
    +---------------------+--------+------------------------+
    | bootstrap_threshold | 1 byte | unsigned 8-bit integer |
    +---------------------+--------+------------------------+
    
    
    history_mode (Determined from data, 8-bit tag)
    **********************************************
    
    archive (tag 0)
    ===============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    full (tag 1)
    ============
    
    +------+---------+-----------------------------------------------------------+
    | Name | Size    | Contents                                                  |
    +======+=========+===========================================================+
    | Tag  | 1 byte  | unsigned 8-bit integer                                    |
    +------+---------+-----------------------------------------------------------+
    | full | 2 bytes | unsigned 16-bit big-endian integer in the range 0 to 1000 |
    +------+---------+-----------------------------------------------------------+
    
    
    rolling (tag 2)
    ===============
    
    +---------+---------+-----------------------------------------------------------+
    | Name    | Size    | Contents                                                  |
    +=========+=========+===========================================================+
    | Tag     | 1 byte  | unsigned 8-bit integer                                    |
    +---------+---------+-----------------------------------------------------------+
    | rolling | 2 bytes | unsigned 16-bit big-endian integer in the range 0 to 1000 |
    +---------+---------+-----------------------------------------------------------+
    
    
    full_alias (tag 3)
    ==================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    rolling_alias (tag 4)
    =====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    storage_maintenance_delay (Determined from data, 8-bit tag)
    ***********************************************************
    
    disabled (tag 0)
    ================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    custom (tag 1)
    ==============
    
    +--------+---------+----------------------------------+
    | Name   | Size    | Contents                         |
    +========+=========+==================================+
    | Tag    | 1 byte  | unsigned 8-bit integer           |
    +--------+---------+----------------------------------+
    | custom | 4 bytes | signed 32-bit big-endian integer |
    +--------+---------+----------------------------------+
    
    
    auto (tag 2)
    ============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    X_31
    ****
    
    +-------------------------------------------------+----------------------+-------------------------------------+
    | Name                                            | Size                 | Contents                            |
    +=================================================+======================+=====================================+
    | peer_validator                                  | 32 bytes             | $X_32                               |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | block_validator                                 | Determined from data | $X_33                               |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | prevalidator                                    | 14 bytes             | $X_34                               |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | chain_validator                                 | Determined from data | $X_35                               |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "history_mode"              | 1 byte               | boolean (0 for false, 255 for true) |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | history_mode                                    | Determined from data | $history_mode                       |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "disable_context_pruning"   | 1 byte               | boolean (0 for false, 255 for true) |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | disable_context_pruning                         | 1 byte               | boolean (0 for false, 255 for true) |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "storage_maintenance_delay" | 1 byte               | boolean (0 for false, 255 for true) |
    +-------------------------------------------------+----------------------+-------------------------------------+
    | storage_maintenance_delay                       | Determined from data | $storage_maintenance_delay          |
    +-------------------------------------------------+----------------------+-------------------------------------+
    
    
    X_36
    ****
    
    +-----------+----------+----------------------------------+
    | Name      | Size     | Contents                         |
    +===========+==========+==================================+
    | timestamp | 8 bytes  | signed 64-bit big-endian integer |
    +-----------+----------+----------------------------------+
    | block     | 32 bytes | bytes                            |
    +-----------+----------+----------------------------------+
    | protocol  | 32 bytes | bytes                            |
    +-----------+----------+----------------------------------+
    
    
    X_37
    ****
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | context_key           | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | values                | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_38
    ****
    
    +----------------------+----------+----------------------------------+
    | Name                 | Size     | Contents                         |
    +======================+==========+==================================+
    | level                | 4 bytes  | signed 32-bit big-endian integer |
    +----------------------+----------+----------------------------------+
    | replacement_protocol | 32 bytes | bytes                            |
    +----------------------+----------+----------------------------------+
    
    
    X_39
    ****
    
    +----------------------+----------+----------+
    | Name                 | Size     | Contents |
    +======================+==========+==========+
    | replaced_protocol    | 32 bytes | bytes    |
    +----------------------+----------+----------+
    | replacement_protocol | 32 bytes | bytes    |
    +----------------------+----------+----------+
    
    
    X_41
    ****
    
    +-----------------------+----------+-------------------------------------+
    | Name                  | Size     | Contents                            |
    +=======================+==========+=====================================+
    | activated             | 1 byte   | boolean (0 for false, 255 for true) |
    +-----------------------+----------+-------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer  |
    +-----------------------+----------+-------------------------------------+
    | bootstrap_peers       | Variable | sequence of $X_2                    |
    +-----------------------+----------+-------------------------------------+
    
    
    X_43 (Determined from data, 8-bit tag)
    **************************************
    
    Custom (tag 0)
    ==============
    
    +------------------------------------------------------+----------------------+-------------------------------------+
    | Name                                                 | Size                 | Contents                            |
    +======================================================+======================+=====================================+
    | Tag                                                  | 1 byte               | unsigned 8-bit integer              |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | genesis                                              | 72 bytes             | $X_36                               |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "genesis_parameters"             | 1 byte               | boolean (0 for false, 255 for true) |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | genesis_parameters                                   | Determined from data | $X_37                               |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | # bytes in field "distributed_db_version.name"       | 4 bytes              | unsigned 30-bit big-endian integer  |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | chain_name                                           | Variable             | bytes                               |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "old_chain_name"                 | 1 byte               | boolean (0 for false, 255 for true) |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | old_chain_name                                       | Determined from data | $X_2                                |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "incompatible_chain_name"        | 1 byte               | boolean (0 for false, 255 for true) |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | incompatible_chain_name                              | Determined from data | $X_2                                |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | # bytes in field "distributed_db_version.name"       | 4 bytes              | unsigned 30-bit big-endian integer  |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | sandboxed_chain_name                                 | Variable             | bytes                               |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | # bytes in field "user_activated.upgrades"           | 4 bytes              | unsigned 30-bit big-endian integer  |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | user_activated_upgrades                              | Variable             | sequence of $X_38                   |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | # bytes in field "user_activated.protocol_overrides" | 4 bytes              | unsigned 30-bit big-endian integer  |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | user_activated_protocol_overrides                    | Variable             | sequence of $X_39                   |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | # bytes in next field                                | 4 bytes              | unsigned 30-bit big-endian integer  |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | default_bootstrap_peers                              | Variable             | sequence of $X_2                    |
    +------------------------------------------------------+----------------------+-------------------------------------+
    | dal_config                                           | Determined from data | $X_41                               |
    +------------------------------------------------------+----------------------+-------------------------------------+
    
    
    sandbox (tag 1)
    ===============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    mainnet (tag 4)
    ===============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    ghostnet (tag 19)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    </pre>
    </div>
  

.. _GET_--config--history_mode :

**GET /config/history_mode**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--config--history_modedescr', 'GET_--config--history_mode')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--history_modeoutput.json', 'GET_--config--history_mode')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--history_modeoutput.bin', 'GET_--config--history_mode')">Binary output</button>
    </div><div id="GET_--config--history_modedescr" class="GET_--config--history_mode tabcontent">
            <p>
            Returns the history mode of the node's underlying storage. In full or rolling mode, it provides the values of `additional_cycles` and `blocks_preservation_cycles`. The sum of these values is the total number of stored cycles.</p>
            </div>
  <div id="GET_--config--history_modeoutput.json" class="GET_--config--history_mode tabcontent">
    <pre>
    { "history_mode": $history_mode,
      "blocks_preservation_cycles"?: integer ∈ [0, 255] }
    $history_mode:
      /* history mode
         Storage mode for the Tezos shell. */
      "archive"
      || { /* full
              Full mode retains every block and operations since the genesis
              block but periodically prunes older blocks' metadata to reduce
              the storage size. */
           "full":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the savepoint.
                    By default: 1 additional cycles will be stored. */ } }
      || { /* rolling
              Rolling mode only retain the most recent cycles by periodically
              periodically discarding older blocks to reduce the storage size. */
           "rolling":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the savepoint.
                    By default: 1 additional cycles will be stored. */ } }
      || "full"
      || "rolling"</pre>
    </div>
  <div id="GET_--config--history_modeoutput.bin" class="GET_--config--history_mode tabcontent">
    <pre>
    +--------------------------------------------------+----------------------+----------------------------------------------+
    | Name                                             | Size                 | Contents                                     |
    +==================================================+======================+==============================================+
    | history_mode                                     | Determined from data | $history_mode                                |
    +--------------------------------------------------+----------------------+----------------------------------------------+
    | ? presence of field "blocks_preservation_cycles" | 1 byte               | boolean (0 for false, 255 for true)          |
    +--------------------------------------------------+----------------------+----------------------------------------------+
    | blocks_preservation_cycles                       | 1 byte               | unsigned 8-bit integer in the range 0 to 255 |
    +--------------------------------------------------+----------------------+----------------------------------------------+
    
    
    history_mode (Determined from data, 8-bit tag)
    **********************************************
    
    archive (tag 0)
    ===============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    full (tag 1)
    ============
    
    +------+---------+-----------------------------------------------------------+
    | Name | Size    | Contents                                                  |
    +======+=========+===========================================================+
    | Tag  | 1 byte  | unsigned 8-bit integer                                    |
    +------+---------+-----------------------------------------------------------+
    | full | 2 bytes | unsigned 16-bit big-endian integer in the range 0 to 1000 |
    +------+---------+-----------------------------------------------------------+
    
    
    rolling (tag 2)
    ===============
    
    +---------+---------+-----------------------------------------------------------+
    | Name    | Size    | Contents                                                  |
    +=========+=========+===========================================================+
    | Tag     | 1 byte  | unsigned 8-bit integer                                    |
    +---------+---------+-----------------------------------------------------------+
    | rolling | 2 bytes | unsigned 16-bit big-endian integer in the range 0 to 1000 |
    +---------+---------+-----------------------------------------------------------+
    
    
    full_alias (tag 3)
    ==================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    rolling_alias (tag 4)
    =====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    </pre>
    </div>
  


.. _PUT_--config--logging :

**PUT /config/logging**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'PUT_--config--loggingdescr', 'PUT_--config--logging')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--config--logginginput.json', 'PUT_--config--logging')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--config--logginginput.bin', 'PUT_--config--logging')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--config--loggingoutput.json', 'PUT_--config--logging')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--config--loggingoutput.bin', 'PUT_--config--logging')">Binary output</button>
    </div><div id="PUT_--config--loggingdescr" class="PUT_--config--logging tabcontent">
            <p>
            Replace the logging configuration of the node.</p>
            </div>
  <div id="PUT_--config--logginginput.json" class="PUT_--config--logging tabcontent">
    <pre>
    { /* Active-Sinks
         List of sinks to make sure are activated. */
      "active_sinks"?:
        [ $unistring ... ]
        /* List of URIs to activate/configure sinks. */ }
    || { /* Active-Sinks-Deprecated
            List of sinks to make sure are activated, deprecated
            backwards-compatibility encoding. */
         "activate"?:
           [ $unistring ... ]
           /* List of URIs to activate/configure sinks. */ }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="PUT_--config--logginginput.bin" class="PUT_--config--logging tabcontent">
    <pre>
    +-----------------+----------------------+----------+
    | Name            | Size                 | Contents |
    +=================+======================+==========+
    | Unnamed field 0 | Determined from data | $X_2     |
    +-----------------+----------------------+----------+
    
    
    X_0
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_2 (Determined from data, 8-bit tag)
    *************************************
    
    Active-Sinks (tag 0)
    ====================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | active_sinks          | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    Active-Sinks-Deprecated (tag 1)
    ===============================
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | activate              | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  <div id="PUT_--config--loggingoutput.json" class="PUT_--config--logging tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="PUT_--config--loggingoutput.bin" class="PUT_--config--logging tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  


.. _GET_--config--network--dal :

**GET /config/network/dal**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--config--network--daldescr', 'GET_--config--network--dal')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--daloutput.json', 'GET_--config--network--dal')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--daloutput.bin', 'GET_--config--network--dal')">Binary output</button>
    </div><div id="GET_--config--network--daldescr" class="GET_--config--network--dal tabcontent">
            <p>
            Configuration for the DAL</p>
            </div>
  <div id="GET_--config--network--daloutput.json" class="GET_--config--network--dal tabcontent">
    <pre>
    { "activated"?: boolean,
      "bootstrap_peers": [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--config--network--daloutput.bin" class="GET_--config--network--dal tabcontent">
    <pre>
    +-----------------------+----------+-------------------------------------+
    | Name                  | Size     | Contents                            |
    +=======================+==========+=====================================+
    | activated             | 1 byte   | boolean (0 for false, 255 for true) |
    +-----------------------+----------+-------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer  |
    +-----------------------+----------+-------------------------------------+
    | bootstrap_peers       | Variable | sequence of $X_0                    |
    +-----------------------+----------+-------------------------------------+
    
    
    X_0
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--config--network--user_activated_protocol_overrides :

**GET /config/network/user_activated_protocol_overrides**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--config--network--user_activated_protocol_overridesdescr', 'GET_--config--network--user_activated_protocol_overrides')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--user_activated_protocol_overridesoutput.json', 'GET_--config--network--user_activated_protocol_overrides')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--user_activated_protocol_overridesoutput.bin', 'GET_--config--network--user_activated_protocol_overrides')">Binary output</button>
    </div><div id="GET_--config--network--user_activated_protocol_overridesdescr" class="GET_--config--network--user_activated_protocol_overrides tabcontent">
            <p>
            List of protocols which replace other protocols</p>
            </div>
  <div id="GET_--config--network--user_activated_protocol_overridesoutput.json" class="GET_--config--network--user_activated_protocol_overrides tabcontent">
    <pre>
    [ { "replaced_protocol": $Protocol_hash,
        "replacement_protocol": $Protocol_hash } ... ]
    /* User activated protocol overrides
       User activated protocol overrides: activate a protocol instead of
       another. */
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--config--network--user_activated_protocol_overridesoutput.bin" class="GET_--config--network--user_activated_protocol_overrides tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +----------------------+----------+----------+
    | Name                 | Size     | Contents |
    +======================+==========+==========+
    | replaced_protocol    | 32 bytes | bytes    |
    +----------------------+----------+----------+
    | replacement_protocol | 32 bytes | bytes    |
    +----------------------+----------+----------+
    
    </pre>
    </div>
  


.. _GET_--config--network--user_activated_upgrades :

**GET /config/network/user_activated_upgrades**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--config--network--user_activated_upgradesdescr', 'GET_--config--network--user_activated_upgrades')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--user_activated_upgradesoutput.json', 'GET_--config--network--user_activated_upgrades')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--config--network--user_activated_upgradesoutput.bin', 'GET_--config--network--user_activated_upgrades')">Binary output</button>
    </div><div id="GET_--config--network--user_activated_upgradesdescr" class="GET_--config--network--user_activated_upgrades tabcontent">
            <p>
            List of protocols to switch to at given levels</p>
            </div>
  <div id="GET_--config--network--user_activated_upgradesoutput.json" class="GET_--config--network--user_activated_upgrades tabcontent">
    <pre>
    [ { "level": integer ∈ [-2^31-1, 2^31],
        "replacement_protocol": $Protocol_hash } ... ]
    /* User activated upgrades
       User activated upgrades: at given level, switch to given protocol. */
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--config--network--user_activated_upgradesoutput.bin" class="GET_--config--network--user_activated_upgrades tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +----------------------+----------+----------------------------------+
    | Name                 | Size     | Contents                         |
    +======================+==========+==================================+
    | level                | 4 bytes  | signed 32-bit big-endian integer |
    +----------------------+----------+----------------------------------+
    | replacement_protocol | 32 bytes | bytes                            |
    +----------------------+----------+----------------------------------+
    
    </pre>
    </div>
  


.. _GET_--errors :

**GET /errors**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--errorsdescr', 'GET_--errors')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--errorsoutput.json', 'GET_--errors')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--errorsoutput.bin', 'GET_--errors')">Binary output</button>
    </div><div id="GET_--errorsdescr" class="GET_--errors tabcontent">
            <p>
            Schema for all the RPC errors from the shell</p>
            </div>
  <div id="GET_--errorsoutput.json" class="GET_--errors tabcontent">
    <pre>
    any</pre>
    </div>
  <div id="GET_--errorsoutput.bin" class="GET_--errors tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--fetch_protocol--Protocol_hash :

**GET /fetch_protocol/<Protocol_hash>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--fetch_protocol--Protocol_hashdescr', 'GET_--fetch_protocol--Protocol_hash')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--fetch_protocol--Protocol_hashoutput.json', 'GET_--fetch_protocol--Protocol_hash')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--fetch_protocol--Protocol_hashoutput.bin', 'GET_--fetch_protocol--Protocol_hash')">Binary output</button>
    </div><div id="GET_--fetch_protocol--Protocol_hashdescr" class="GET_--fetch_protocol--Protocol_hash tabcontent">
            <p>
            Fetch a protocol from the network.</p>
            </div>
  <div id="GET_--fetch_protocol--Protocol_hashoutput.json" class="GET_--fetch_protocol--Protocol_hash tabcontent">
    <pre>
    any</pre>
    </div>
  <div id="GET_--fetch_protocol--Protocol_hashoutput.bin" class="GET_--fetch_protocol--Protocol_hash tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  


.. _GET_--health--ready :

**GET /health/ready**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--health--readydescr', 'GET_--health--ready')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--health--readyoutput.json', 'GET_--health--ready')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--health--readyoutput.bin', 'GET_--health--ready')">Binary output</button>
    </div><div id="GET_--health--readydescr" class="GET_--health--ready tabcontent">
            <p>
            Returns whether or not the node is ready to answer to requests.</p>
            </div>
  <div id="GET_--health--readyoutput.json" class="GET_--health--ready tabcontent">
    <pre>
    { "ready": boolean }</pre>
    </div>
  <div id="GET_--health--readyoutput.bin" class="GET_--health--ready tabcontent">
    <pre>
    +-------+--------+-------------------------------------+
    | Name  | Size   | Contents                            |
    +=======+========+=====================================+
    | ready | 1 byte | boolean (0 for false, 255 for true) |
    +-------+--------+-------------------------------------+
    
    
    </pre>
    </div>
  


.. _POST_--injection--block :

**POST /injection/block?[async]&[force]&[chain=<chain_id>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'POST_--injection--blockdescr', 'POST_--injection--block')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--blockinput.json', 'POST_--injection--block')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--blockinput.bin', 'POST_--injection--block')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--blockoutput.json', 'POST_--injection--block')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--blockoutput.bin', 'POST_--injection--block')">Binary output</button>
    </div><div id="POST_--injection--blockdescr" class="POST_--injection--block tabcontent">
            <p>
            Inject a block in the node and broadcast it. The `operations` embedded in `blockHeader` might be pre-validated using a contextual RPCs from the latest block (e.g. '/blocks/head/context/preapply'). Returns the ID of the block. By default, the RPC will wait for the block to be validated before answering. If ?async is true, the function returns immediately. Otherwise, the block will be validated before the result is returned. If ?force is true, it will be injected even on non strictly increasing fitness. An optional ?chain parameter can be used to specify whether to inject on the test chain or the main chain.</p> <p>Optional query arguments :<ul><li><span class="query">async</span></li><li><span class="query">force</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="POST_--injection--blockinput.json" class="POST_--injection--block tabcontent">
    <pre>
    { "data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/,
      "operations": [ [ $operation ... ] ... ] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $operation:
      /* An operation. The shell_header part indicates a block an operation is
         meant to apply on top of. The proto part is protocol-specific and
         appears as a binary blob. */
      { "branch": $block_hash,
        "data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--injection--blockinput.bin" class="POST_--injection--block tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | data                  | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | operations            | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | # bytes in next 2 fields | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | branch                   | 32 bytes | bytes                              |
    +--------------------------+----------+------------------------------------+
    | data                     | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | # bytes in next 2 fields | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | # bytes in next field    | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | Unnamed field 0          | Variable | sequence of $X_1                   |
    +--------------------------+----------+------------------------------------+
    
    </pre>
    </div>
  <div id="POST_--injection--blockoutput.json" class="POST_--injection--block tabcontent">
    <pre>
    $unistring
    /* A block identifier (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--injection--blockoutput.bin" class="POST_--injection--block tabcontent">
    <pre>
    +------------+----------+----------+
    | Name       | Size     | Contents |
    +============+==========+==========+
    | block_hash | 32 bytes | bytes    |
    +------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _POST_--injection--operation :

**POST /injection/operation?[async]&[chain=<chain_id>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'POST_--injection--operationdescr', 'POST_--injection--operation')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--operationinput.json', 'POST_--injection--operation')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--operationinput.bin', 'POST_--injection--operation')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--operationoutput.json', 'POST_--injection--operation')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--operationoutput.bin', 'POST_--injection--operation')">Binary output</button>
    </div><div id="POST_--injection--operationdescr" class="POST_--injection--operation tabcontent">
            <p>
            Inject an operation in node and broadcast it. Returns the ID of the operation. The `signedOperationContents` should be constructed using contextual RPCs from the latest block and signed by the client. The injection of the operation will apply it on the current mempool context. This context may change at each operation injection or operation reception from peers. By default, the RPC will wait for the operation to be (pre-)validated before returning. However, if ?async is true, the function returns immediately. The optional ?chain parameter can be used to specify whether to inject on the test chain or the main chain.</p> <p>Optional query arguments :<ul><li><span class="query">async</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="POST_--injection--operationinput.json" class="POST_--injection--operation tabcontent">
    <pre>
    /^([a-zA-Z0-9][a-zA-Z0-9])*$/</pre>
    </div>
  <div id="POST_--injection--operationinput.bin" class="POST_--injection--operation tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  <div id="POST_--injection--operationoutput.json" class="POST_--injection--operation tabcontent">
    <pre>
    $unistring
    /* A Tezos operation ID (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--injection--operationoutput.bin" class="POST_--injection--operation tabcontent">
    <pre>
    +----------------+----------+----------+
    | Name           | Size     | Contents |
    +================+==========+==========+
    | Operation_hash | 32 bytes | bytes    |
    +----------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _POST_--injection--protocol :

**POST /injection/protocol?[async]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'POST_--injection--protocoldescr', 'POST_--injection--protocol')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--protocolinput.json', 'POST_--injection--protocol')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--protocolinput.bin', 'POST_--injection--protocol')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--protocoloutput.json', 'POST_--injection--protocol')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--injection--protocoloutput.bin', 'POST_--injection--protocol')">Binary output</button>
    </div><div id="POST_--injection--protocoldescr" class="POST_--injection--protocol tabcontent">
            <p>
            Inject a protocol in node. Returns the ID of the protocol. If ?async is true, the function returns immediately. Otherwise, the protocol will be validated before the result is returned.</p> <p>Optional query arguments :<ul><li><span class="query">async</span></li></ul></p>
            </div>
  <div id="POST_--injection--protocolinput.json" class="POST_--injection--protocol tabcontent">
    <pre>
    { /* The environment a protocol relies on and the components a protocol is
         made of. */
      "expected_env_version": $protocol.environment_version,
      "components":
        [ { "name": $unistring,
            "interface"?: $unistring,
            "implementation": $unistring } ... ] }
    $protocol.environment_version: integer ∈ [0, 2^16-1]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--injection--protocolinput.bin" class="POST_--injection--protocol tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | expected_env_version  | 2 bytes  | unsigned 16-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | components            | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +---------------------------------+----------------------+-------------------------------------+
    | Name                            | Size                 | Contents                            |
    +=================================+======================+=====================================+
    | # bytes in next field           | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------+----------------------+-------------------------------------+
    | name                            | Variable             | bytes                               |
    +---------------------------------+----------------------+-------------------------------------+
    | ? presence of field "interface" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------+----------------------+-------------------------------------+
    | interface                       | Determined from data | $X_1                                |
    +---------------------------------+----------------------+-------------------------------------+
    | # bytes in next field           | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------+----------------------+-------------------------------------+
    | implementation                  | Variable             | bytes                               |
    +---------------------------------+----------------------+-------------------------------------+
    
    </pre>
    </div>
  <div id="POST_--injection--protocoloutput.json" class="POST_--injection--protocol tabcontent">
    <pre>
    $unistring
    /* A Tezos protocol ID (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--injection--protocoloutput.bin" class="POST_--injection--protocol tabcontent">
    <pre>
    +---------------+----------+----------+
    | Name          | Size     | Contents |
    +===============+==========+==========+
    | Protocol_hash | 32 bytes | bytes    |
    +---------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _GET_--monitor--active_chains :

**GET /monitor/active_chains**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--active_chainsdescr', 'GET_--monitor--active_chains')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--active_chainsoutput.json', 'GET_--monitor--active_chains')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--active_chainsoutput.bin', 'GET_--monitor--active_chains')">Binary output</button>
    </div><div id="GET_--monitor--active_chainsdescr" class="GET_--monitor--active_chains tabcontent">
            <p>
            Monitor every chain creation and destruction. Currently active chains will be given as first elements</p>
            </div>
  <div id="GET_--monitor--active_chainsoutput.json" class="GET_--monitor--active_chains tabcontent">
    <pre>
    [ { /* Main */
        "chain_id": $Chain_id }
      || { /* Test */
           "chain_id": $Chain_id,
           "test_protocol": $Protocol_hash,
           "expiration_date": $timestamp.protocol }
      || { /* Stopping */
           "stopping": $Chain_id } ... ]
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--active_chainsoutput.bin" class="GET_--monitor--active_chains tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Main (tag 0)
    ============
    
    +----------+---------+------------------------+
    | Name     | Size    | Contents               |
    +==========+=========+========================+
    | Tag      | 1 byte  | unsigned 8-bit integer |
    +----------+---------+------------------------+
    | chain_id | 4 bytes | bytes                  |
    +----------+---------+------------------------+
    
    
    Test (tag 1)
    ============
    
    +-----------------+----------+----------------------------------+
    | Name            | Size     | Contents                         |
    +=================+==========+==================================+
    | Tag             | 1 byte   | unsigned 8-bit integer           |
    +-----------------+----------+----------------------------------+
    | chain_id        | 4 bytes  | bytes                            |
    +-----------------+----------+----------------------------------+
    | test_protocol   | 32 bytes | bytes                            |
    +-----------------+----------+----------------------------------+
    | expiration_date | 8 bytes  | signed 64-bit big-endian integer |
    +-----------------+----------+----------------------------------+
    
    
    Stopping (tag 2)
    ================
    
    +----------+---------+------------------------+
    | Name     | Size    | Contents               |
    +==========+=========+========================+
    | Tag      | 1 byte  | unsigned 8-bit integer |
    +----------+---------+------------------------+
    | stopping | 4 bytes | bytes                  |
    +----------+---------+------------------------+
    
    </pre>
    </div>
  


.. _GET_--monitor--applied_blocks :

**GET /monitor/applied_blocks?(protocol=<Protocol_hash>)\*&(next_protocol=<Protocol_hash>)\*&(chain=<chain_id>)\***

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--applied_blocksdescr', 'GET_--monitor--applied_blocks')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--applied_blocksoutput.json', 'GET_--monitor--applied_blocks')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--applied_blocksoutput.bin', 'GET_--monitor--applied_blocks')">Binary output</button>
    </div><div id="GET_--monitor--applied_blocksdescr" class="GET_--monitor--applied_blocks tabcontent">
            <p>
            Monitor all blocks that are successfully applied and stored by the node, disregarding whether they were selected as the new head or not.</p> <p>Optional query arguments :<ul><li><span class="query">protocol = &lt;Protocol_hash&gt;</span></li><li><span class="query">next_protocol = &lt;Protocol_hash&gt;</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="GET_--monitor--applied_blocksoutput.json" class="GET_--monitor--applied_blocks tabcontent">
    <pre>
    { "chain_id": $Chain_id,
      "hash": $block_hash,
      "header": $block_header,
      "operations": [ [ $operation ... ] ... ] }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $Operation_list_list_hash:
      /* A list of list of operations (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $block_header:
      /* Block header
         Block header. It contains both shell and protocol specific data. */
      { "level": integer ∈ [-2^31-1, 2^31],
        "proto": integer ∈ [0, 255],
        "predecessor": $block_hash,
        "timestamp": $timestamp.protocol,
        "validation_pass": integer ∈ [0, 255],
        "operations_hash": $Operation_list_list_hash,
        "fitness": $fitness,
        "context": $Context_hash,
        "protocol_data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte sequences.
         They are compared as follows: shortest lists are smaller; lists of the
         same length are compared according to the lexicographical order. */
      [ /^([a-zA-Z0-9][a-zA-Z0-9])*$/ ... ]
    $operation:
      /* An operation. The shell_header part indicates a block an operation is
         meant to apply on top of. The proto part is protocol-specific and
         appears as a binary blob. */
      { "branch": $block_hash,
        "data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--applied_blocksoutput.bin" class="GET_--monitor--applied_blocks tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | chain_id              | 4 bytes  | bytes                              |
    +-----------------------+----------+------------------------------------+
    | hash                  | 32 bytes | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | header                | Variable | $block_header                      |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | operations            | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    fitness.elem
    ************
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    block_header
    ************
    
    +----------------------------+----------+------------------------------------+
    | Name                       | Size     | Contents                           |
    +============================+==========+====================================+
    | level                      | 4 bytes  | signed 32-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | proto                      | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | predecessor                | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | timestamp                  | 8 bytes  | signed 64-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | validation_pass            | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | operations_hash            | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | # bytes in field "fitness" | 4 bytes  | unsigned 30-bit big-endian integer |
    +----------------------------+----------+------------------------------------+
    | fitness                    | Variable | sequence of $fitness.elem          |
    +----------------------------+----------+------------------------------------+
    | context                    | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | protocol_data              | Variable | bytes                              |
    +----------------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | # bytes in next 2 fields | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | branch                   | 32 bytes | bytes                              |
    +--------------------------+----------+------------------------------------+
    | data                     | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_1                   |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--monitor--bootstrapped :

**GET /monitor/bootstrapped**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--bootstrappeddescr', 'GET_--monitor--bootstrapped')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--bootstrappedoutput.json', 'GET_--monitor--bootstrapped')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--bootstrappedoutput.bin', 'GET_--monitor--bootstrapped')">Binary output</button>
    </div><div id="GET_--monitor--bootstrappeddescr" class="GET_--monitor--bootstrapped tabcontent">
            <p>
            Wait for the node to have synchronized its chain with a few peers (configured by the node's administrator), streaming head updates that happen during the bootstrapping process, and closing the stream at the end. If the node was already bootstrapped, returns the current head immediately.</p>
            </div>
  <div id="GET_--monitor--bootstrappedoutput.json" class="GET_--monitor--bootstrapped tabcontent">
    <pre>
    { "block": $block_hash,
      "timestamp": $timestamp.protocol }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--bootstrappedoutput.bin" class="GET_--monitor--bootstrapped tabcontent">
    <pre>
    +-----------+----------+----------------------------------+
    | Name      | Size     | Contents                         |
    +===========+==========+==================================+
    | block     | 32 bytes | bytes                            |
    +-----------+----------+----------------------------------+
    | timestamp | 8 bytes  | signed 64-bit big-endian integer |
    +-----------+----------+----------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--monitor--heads--chain_id :

**GET /monitor/heads/<chain_id>?(protocol=<Protocol_hash>)\*&(next_protocol=<Protocol_hash>)\***

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--heads--chain_iddescr', 'GET_--monitor--heads--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--heads--chain_idoutput.json', 'GET_--monitor--heads--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--heads--chain_idoutput.bin', 'GET_--monitor--heads--chain_id')">Binary output</button>
    </div><div id="GET_--monitor--heads--chain_iddescr" class="GET_--monitor--heads--chain_id tabcontent">
            <p>
            Monitor all blocks that are successfully validated and applied by the node and selected as the new head of the given chain.</p> <p>Optional query arguments :<ul><li><span class="query">protocol = &lt;Protocol_hash&gt;</span></li><li><span class="query">next_protocol = &lt;Protocol_hash&gt;</span></li></ul></p>
            </div>
  <div id="GET_--monitor--heads--chain_idoutput.json" class="GET_--monitor--heads--chain_id tabcontent">
    <pre>
    { /* Block header
         Block header. It contains both shell and protocol specific data. */
      "hash": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31],
      "proto": integer ∈ [0, 255],
      "predecessor": $block_hash,
      "timestamp": $timestamp.protocol,
      "validation_pass": integer ∈ [0, 255],
      "operations_hash": $Operation_list_list_hash,
      "fitness": $fitness,
      "context": $Context_hash,
      "protocol_data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $Operation_list_list_hash:
      /* A list of list of operations (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte sequences.
         They are compared as follows: shortest lists are smaller; lists of the
         same length are compared according to the lexicographical order. */
      [ /^([a-zA-Z0-9][a-zA-Z0-9])*$/ ... ]
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--heads--chain_idoutput.bin" class="GET_--monitor--heads--chain_id tabcontent">
    <pre>
    +----------------------------+----------+------------------------------------+
    | Name                       | Size     | Contents                           |
    +============================+==========+====================================+
    | hash                       | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | level                      | 4 bytes  | signed 32-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | proto                      | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | predecessor                | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | timestamp                  | 8 bytes  | signed 64-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | validation_pass            | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | operations_hash            | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | # bytes in field "fitness" | 4 bytes  | unsigned 30-bit big-endian integer |
    +----------------------------+----------+------------------------------------+
    | fitness                    | Variable | sequence of $fitness.elem          |
    +----------------------------+----------+------------------------------------+
    | context                    | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | protocol_data              | Variable | bytes                              |
    +----------------------------+----------+------------------------------------+
    
    
    fitness.elem
    ************
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--monitor--protocols :

**GET /monitor/protocols**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--protocolsdescr', 'GET_--monitor--protocols')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--protocolsoutput.json', 'GET_--monitor--protocols')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--protocolsoutput.bin', 'GET_--monitor--protocols')">Binary output</button>
    </div><div id="GET_--monitor--protocolsdescr" class="GET_--monitor--protocols tabcontent">
            <p>
            Monitor all economic protocols that are retrieved and successfully loaded and compiled by the node.</p>
            </div>
  <div id="GET_--monitor--protocolsoutput.json" class="GET_--monitor--protocols tabcontent">
    <pre>
    $unistring
    /* A Tezos protocol ID (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--protocolsoutput.bin" class="GET_--monitor--protocols tabcontent">
    <pre>
    +---------------+----------+----------+
    | Name          | Size     | Contents |
    +===============+==========+==========+
    | Protocol_hash | 32 bytes | bytes    |
    +---------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _GET_--monitor--received_blocks--chain_id :

**GET /monitor/received_blocks/<chain_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--received_blocks--chain_iddescr', 'GET_--monitor--received_blocks--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--received_blocks--chain_idoutput.json', 'GET_--monitor--received_blocks--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--received_blocks--chain_idoutput.bin', 'GET_--monitor--received_blocks--chain_id')">Binary output</button>
    </div><div id="GET_--monitor--received_blocks--chain_iddescr" class="GET_--monitor--received_blocks--chain_id tabcontent">
            <p>
            Monitor all newly received blocks that are not yet known by the store.</p>
            </div>
  <div id="GET_--monitor--received_blocks--chain_idoutput.json" class="GET_--monitor--received_blocks--chain_id tabcontent">
    <pre>
    { "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--received_blocks--chain_idoutput.bin" class="GET_--monitor--received_blocks--chain_id tabcontent">
    <pre>
    +------+----------+----------+
    | Name | Size     | Contents |
    +======+==========+==========+
    | hash | 32 bytes | bytes    |
    +------+----------+----------+
    
    
    </pre>
    </div>
  


.. _GET_--monitor--validated_blocks :

**GET /monitor/validated_blocks?(protocol=<Protocol_hash>)\*&(next_protocol=<Protocol_hash>)\*&(chain=<chain_id>)\***

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--monitor--validated_blocksdescr', 'GET_--monitor--validated_blocks')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--validated_blocksoutput.json', 'GET_--monitor--validated_blocks')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--monitor--validated_blocksoutput.bin', 'GET_--monitor--validated_blocks')">Binary output</button>
    </div><div id="GET_--monitor--validated_blocksdescr" class="GET_--monitor--validated_blocks tabcontent">
            <p>
            Monitor all blocks that were successfully validated by the node but are not applied nor stored yet, disregarding whether they are going to be selected as the new head or not.</p> <p>Optional query arguments :<ul><li><span class="query">protocol = &lt;Protocol_hash&gt;</span></li><li><span class="query">next_protocol = &lt;Protocol_hash&gt;</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="GET_--monitor--validated_blocksoutput.json" class="GET_--monitor--validated_blocks tabcontent">
    <pre>
    { "chain_id": $Chain_id,
      "hash": $block_hash,
      "header": $block_header,
      "operations": [ [ $operation ... ] ... ] }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $Operation_list_list_hash:
      /* A list of list of operations (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $block_header:
      /* Block header
         Block header. It contains both shell and protocol specific data. */
      { "level": integer ∈ [-2^31-1, 2^31],
        "proto": integer ∈ [0, 255],
        "predecessor": $block_hash,
        "timestamp": $timestamp.protocol,
        "validation_pass": integer ∈ [0, 255],
        "operations_hash": $Operation_list_list_hash,
        "fitness": $fitness,
        "context": $Context_hash,
        "protocol_data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte sequences.
         They are compared as follows: shortest lists are smaller; lists of the
         same length are compared according to the lexicographical order. */
      [ /^([a-zA-Z0-9][a-zA-Z0-9])*$/ ... ]
    $operation:
      /* An operation. The shell_header part indicates a block an operation is
         meant to apply on top of. The proto part is protocol-specific and
         appears as a binary blob. */
      { "branch": $block_hash,
        "data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--monitor--validated_blocksoutput.bin" class="GET_--monitor--validated_blocks tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | chain_id              | 4 bytes  | bytes                              |
    +-----------------------+----------+------------------------------------+
    | hash                  | 32 bytes | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | header                | Variable | $block_header                      |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | operations            | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    fitness.elem
    ************
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    block_header
    ************
    
    +----------------------------+----------+------------------------------------+
    | Name                       | Size     | Contents                           |
    +============================+==========+====================================+
    | level                      | 4 bytes  | signed 32-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | proto                      | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | predecessor                | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | timestamp                  | 8 bytes  | signed 64-bit big-endian integer   |
    +----------------------------+----------+------------------------------------+
    | validation_pass            | 1 byte   | unsigned 8-bit integer             |
    +----------------------------+----------+------------------------------------+
    | operations_hash            | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | # bytes in field "fitness" | 4 bytes  | unsigned 30-bit big-endian integer |
    +----------------------------+----------+------------------------------------+
    | fitness                    | Variable | sequence of $fitness.elem          |
    +----------------------------+----------+------------------------------------+
    | context                    | 32 bytes | bytes                              |
    +----------------------------+----------+------------------------------------+
    | protocol_data              | Variable | bytes                              |
    +----------------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | # bytes in next 2 fields | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | branch                   | 32 bytes | bytes                              |
    +--------------------------+----------+------------------------------------+
    | data                     | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_1                   |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--network--connections :

**GET /network/connections**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--connectionsdescr', 'GET_--network--connections')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--connectionsoutput.json', 'GET_--network--connections')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--connectionsoutput.bin', 'GET_--network--connections')">Binary output</button>
    </div><div id="GET_--network--connectionsdescr" class="GET_--network--connections tabcontent">
            <p>
            List the running P2P connection.</p>
            </div>
  <div id="GET_--network--connectionsoutput.json" class="GET_--network--connections tabcontent">
    <pre>
    [ { "incoming": boolean,
        "peer_id": $Crypto_box.Public_key_hash,
        "id_point": $p2p_connection.id,
        "remote_socket_port": integer ∈ [0, 2^16-1],
        "announced_version": $network_version,
        "private": boolean,
        "local_metadata":
          { "disable_mempool": boolean,
            "private_node": boolean },
        "remote_metadata":
          { "disable_mempool": boolean,
            "private_node": boolean } } ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $distributed_db_version:
      /* A version number for the distributed DB protocol */
      integer ∈ [0, 2^16-1]
    $distributed_db_version.name:
      /* A name for the distributed DB protocol */
      $unistring
    $network_version:
      /* A version number for the network protocol (includes distributed DB
         version and p2p version) */
      { "chain_name": $distributed_db_version.name,
        "distributed_db_version": $distributed_db_version,
        "p2p_version": $p2p_version }
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_version:
      /* A version number for the p2p layer. */
      integer ∈ [0, 2^16-1]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--connectionsoutput.bin" class="GET_--network--connections tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    network_version
    ***************
    
    +------------------------------------------------+----------+------------------------------------+
    | Name                                           | Size     | Contents                           |
    +================================================+==========+====================================+
    | # bytes in field "distributed_db_version.name" | 4 bytes  | unsigned 30-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | chain_name                                     | Variable | bytes                              |
    +------------------------------------------------+----------+------------------------------------+
    | distributed_db_version                         | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | p2p_version                                    | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | disable_mempool | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    | private_node    | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    X_0
    ***
    
    +--------------------+----------------------+-------------------------------------+
    | Name               | Size                 | Contents                            |
    +====================+======================+=====================================+
    | incoming           | 1 byte               | boolean (0 for false, 255 for true) |
    +--------------------+----------------------+-------------------------------------+
    | peer_id            | 16 bytes             | bytes                               |
    +--------------------+----------------------+-------------------------------------+
    | id_point           | Determined from data | $p2p_connection.id                  |
    +--------------------+----------------------+-------------------------------------+
    | remote_socket_port | 2 bytes              | unsigned 16-bit big-endian integer  |
    +--------------------+----------------------+-------------------------------------+
    | announced_version  | Determined from data | $network_version                    |
    +--------------------+----------------------+-------------------------------------+
    | private            | 1 byte               | boolean (0 for false, 255 for true) |
    +--------------------+----------------------+-------------------------------------+
    | local_metadata     | 2 bytes              | $X_1                                |
    +--------------------+----------------------+-------------------------------------+
    | remote_metadata    | 2 bytes              | $X_1                                |
    +--------------------+----------------------+-------------------------------------+
    
    </pre>
    </div>
  

.. _GET_--network--connections--peer_id :

**GET /network/connections/<peer_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--connections--peer_iddescr', 'GET_--network--connections--peer_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--connections--peer_idoutput.json', 'GET_--network--connections--peer_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--connections--peer_idoutput.bin', 'GET_--network--connections--peer_id')">Binary output</button>
    </div><div id="GET_--network--connections--peer_iddescr" class="GET_--network--connections--peer_id tabcontent">
            <p>
            Details about the current P2P connection to the given peer.</p>
            </div>
  <div id="GET_--network--connections--peer_idoutput.json" class="GET_--network--connections--peer_id tabcontent">
    <pre>
    { "incoming": boolean,
      "peer_id": $Crypto_box.Public_key_hash,
      "id_point": $p2p_connection.id,
      "remote_socket_port": integer ∈ [0, 2^16-1],
      "announced_version": $network_version,
      "private": boolean,
      "local_metadata": { "disable_mempool": boolean,
                          "private_node": boolean },
      "remote_metadata":
        { "disable_mempool": boolean,
          "private_node": boolean } }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $distributed_db_version:
      /* A version number for the distributed DB protocol */
      integer ∈ [0, 2^16-1]
    $distributed_db_version.name:
      /* A name for the distributed DB protocol */
      $unistring
    $network_version:
      /* A version number for the network protocol (includes distributed DB
         version and p2p version) */
      { "chain_name": $distributed_db_version.name,
        "distributed_db_version": $distributed_db_version,
        "p2p_version": $p2p_version }
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_version:
      /* A version number for the p2p layer. */
      integer ∈ [0, 2^16-1]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--connections--peer_idoutput.bin" class="GET_--network--connections--peer_id tabcontent">
    <pre>
    +--------------------+----------------------+-------------------------------------+
    | Name               | Size                 | Contents                            |
    +====================+======================+=====================================+
    | incoming           | 1 byte               | boolean (0 for false, 255 for true) |
    +--------------------+----------------------+-------------------------------------+
    | peer_id            | 16 bytes             | bytes                               |
    +--------------------+----------------------+-------------------------------------+
    | id_point           | Determined from data | $p2p_connection.id                  |
    +--------------------+----------------------+-------------------------------------+
    | remote_socket_port | 2 bytes              | unsigned 16-bit big-endian integer  |
    +--------------------+----------------------+-------------------------------------+
    | announced_version  | Determined from data | $network_version                    |
    +--------------------+----------------------+-------------------------------------+
    | private            | 1 byte               | boolean (0 for false, 255 for true) |
    +--------------------+----------------------+-------------------------------------+
    | local_metadata     | 2 bytes              | $X_0                                |
    +--------------------+----------------------+-------------------------------------+
    | remote_metadata    | 2 bytes              | $X_0                                |
    +--------------------+----------------------+-------------------------------------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    network_version
    ***************
    
    +------------------------------------------------+----------+------------------------------------+
    | Name                                           | Size     | Contents                           |
    +================================================+==========+====================================+
    | # bytes in field "distributed_db_version.name" | 4 bytes  | unsigned 30-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | chain_name                                     | Variable | bytes                              |
    +------------------------------------------------+----------+------------------------------------+
    | distributed_db_version                         | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | p2p_version                                    | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | disable_mempool | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    | private_node    | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    </pre>
    </div>
  

.. _DELETE_--network--connections--peer_id :

**DELETE /network/connections/<peer_id>?[wait]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'DELETE_--network--connections--peer_iddescr', 'DELETE_--network--connections--peer_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--network--connections--peer_idoutput.json', 'DELETE_--network--connections--peer_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--network--connections--peer_idoutput.bin', 'DELETE_--network--connections--peer_id')">Binary output</button>
    </div><div id="DELETE_--network--connections--peer_iddescr" class="DELETE_--network--connections--peer_id tabcontent">
            <p>
            Forced close of the current P2P connection to the given peer.</p> <p>Optional query arguments :<ul><li><span class="query">wait</span></li></ul></p>
            </div>
  <div id="DELETE_--network--connections--peer_idoutput.json" class="DELETE_--network--connections--peer_id tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="DELETE_--network--connections--peer_idoutput.bin" class="DELETE_--network--connections--peer_id tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  


.. _DELETE_--network--greylist :

**DELETE /network/greylist**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'DELETE_--network--greylistdescr', 'DELETE_--network--greylist')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--network--greylistoutput.json', 'DELETE_--network--greylist')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'DELETE_--network--greylistoutput.bin', 'DELETE_--network--greylist')">Binary output</button>
    </div><div id="DELETE_--network--greylistdescr" class="DELETE_--network--greylist tabcontent">
            <p>
            Clear all greylists tables. This will unban all addresses and peers automatically greylisted by the system.</p>
            </div>
  <div id="DELETE_--network--greylistoutput.json" class="DELETE_--network--greylist tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="DELETE_--network--greylistoutput.bin" class="DELETE_--network--greylist tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  

.. _GET_--network--greylist--ips :

**GET /network/greylist/ips**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--greylist--ipsdescr', 'GET_--network--greylist--ips')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--greylist--ipsoutput.json', 'GET_--network--greylist--ips')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--greylist--ipsoutput.bin', 'GET_--network--greylist--ips')">Binary output</button>
    </div><div id="GET_--network--greylist--ipsdescr" class="GET_--network--greylist--ips tabcontent">
            <p>
            Returns an object that contains a list of IP and the field "not_reliable_since".
                       If the field "not_reliable_since" is None then the list contains the currently greylisted IP addresses.
                       If the field "not_reliable_since" Contains a date, this means that the greylist has been overflowed and it is no more possible to obtain the exact list of greylisted IPs. Since the greylist of IP addresses has been design to work whatever his size, there is no security issue related to this overflow.
                      Reinitialize the ACL structure by calling "delete /network/greylist" to get back this list reliable.</p>
            </div>
  <div id="GET_--network--greylist--ipsoutput.json" class="GET_--network--greylist--ips tabcontent">
    <pre>
    { "ips": [ $p2p_address ... ],
      "not_reliable_since": $timestamp.system /* Some */ || null /* None */ }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--greylist--ipsoutput.bin" class="GET_--network--greylist--ips tabcontent">
    <pre>
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | ips                   | Variable             | sequence of $p2p_address           |
    +-----------------------+----------------------+------------------------------------+
    | not_reliable_since    | Determined from data | $X_0                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    p2p_address
    ***********
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    None (tag 0)
    ============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Some (tag 1)
    ============
    
    +-----------------+---------+----------------------------------+
    | Name            | Size    | Contents                         |
    +=================+=========+==================================+
    | Tag             | 1 byte  | unsigned 8-bit integer           |
    +-----------------+---------+----------------------------------+
    | Unnamed field 0 | 8 bytes | signed 64-bit big-endian integer |
    +-----------------+---------+----------------------------------+
    
    </pre>
    </div>
  


.. _GET_--network--greylist--peers :

**GET /network/greylist/peers**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--greylist--peersdescr', 'GET_--network--greylist--peers')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--greylist--peersoutput.json', 'GET_--network--greylist--peers')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--greylist--peersoutput.bin', 'GET_--network--greylist--peers')">Binary output</button>
    </div><div id="GET_--network--greylist--peersdescr" class="GET_--network--greylist--peers tabcontent">
            <p>
            List of the last greylisted peers.</p>
            </div>
  <div id="GET_--network--greylist--peersoutput.json" class="GET_--network--greylist--peers tabcontent">
    <pre>
    [ $Crypto_box.Public_key_hash ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--greylist--peersoutput.bin" class="GET_--network--greylist--peers tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of bytes                  |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--network--log :

**GET /network/log**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--logdescr', 'GET_--network--log')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--logoutput.json', 'GET_--network--log')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--logoutput.bin', 'GET_--network--log')">Binary output</button>
    </div><div id="GET_--network--logdescr" class="GET_--network--log tabcontent">
            <p>
            Stream of all network events</p>
            </div>
  <div id="GET_--network--logoutput.json" class="GET_--network--log tabcontent">
    <pre>
    /* An event that may happen during maintenance of and other operations on
       the p2p connection pool. Typically, it includes connection errors, peer
       swaps, etc. */
    { /* Too_few_connections */
      "event": "too_few_connections" }
    || { /* Too_many_connections */
         "event": "too_many_connections" }
    || { /* New_point */
         "event": "new_point",
         "point": $p2p_point.id }
    || { /* New_peer */
         "event": "new_peer",
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* Incoming_connection */
         "event": "incoming_connection",
         "point": $p2p_point.id }
    || { /* Outgoing_connection */
         "event": "outgoing_connection",
         "point": $p2p_point.id }
    || { /* Authentication_failed */
         "event": "authentication_failed",
         "point": $p2p_point.id }
    || { /* Accepting_request */
         "event": "accepting_request",
         "point": $p2p_point.id,
         "id_point": $p2p_connection.id,
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* Rejecting_request */
         "event": "rejecting_request",
         "point": $p2p_point.id,
         "id_point": $p2p_connection.id,
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* Request_rejected */
         "event": "request_rejected",
         "point": $p2p_point.id,
         "identity"?: [ $p2p_connection.id, $Crypto_box.Public_key_hash ] }
    || { /* Connection_established */
         "event": "connection_established",
         "id_point": $p2p_connection.id,
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* Disconnection */
         "event": "disconnection",
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* External_disconnection */
         "event": "external_disconnection",
         "peer_id": $Crypto_box.Public_key_hash }
    || { /* Gc_points */
         "event": "gc_points" }
    || { /* Gc_peer_ids */
         "event": "gc_peer_ids" }
    || { /* Swap_request_received */
         "event": "swap_request_received",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_ack_received */
         "event": "swap_ack_received",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_request_sent */
         "event": "swap_request_sent",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_ack_sent */
         "event": "swap_ack_sent",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_request_ignored */
         "event": "swap_request_ignored",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_success */
         "event": "swap_success",
         "source": $Crypto_box.Public_key_hash }
    || { /* Swap_failure */
         "event": "swap_failure",
         "source": $Crypto_box.Public_key_hash }
    || { /* Bootstrap_sent */
         "event": "bootstrap_sent",
         "source": $Crypto_box.Public_key_hash }
    || { /* Bootstrap_received */
         "event": "bootstrap_received",
         "source": $Crypto_box.Public_key_hash }
    || { /* Advertise_sent */
         "event": "advertise_sent",
         "source": $Crypto_box.Public_key_hash }
    || { /* Advertise_received */
         "event": "advertise_received",
         "source": $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_point.id:
      /* Identifier for a peer point */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--logoutput.bin" class="GET_--network--log tabcontent">
    <pre>
    +-----------------+----------------------+----------+
    | Name            | Size                 | Contents |
    +=================+======================+==========+
    | Unnamed field 0 | Determined from data | $X_1     |
    +-----------------+----------------------+----------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    p2p_point.id
    ************
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------------------+--------------------+
    | Name            | Size                 | Contents           |
    +=================+======================+====================+
    | Unnamed field 0 | Determined from data | $p2p_connection.id |
    +-----------------+----------------------+--------------------+
    | Unnamed field 1 | 16 bytes             | bytes              |
    +-----------------+----------------------+--------------------+
    
    
    X_1 (Determined from data, 8-bit tag)
    *************************************
    
    Too_few_connections (tag 0)
    ===========================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Too_many_connections (tag 1)
    ============================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    New_point (tag 2)
    =================
    
    +-------+----------------------+------------------------+
    | Name  | Size                 | Contents               |
    +=======+======================+========================+
    | Tag   | 1 byte               | unsigned 8-bit integer |
    +-------+----------------------+------------------------+
    | point | Determined from data | $p2p_point.id          |
    +-------+----------------------+------------------------+
    
    
    New_peer (tag 3)
    ================
    
    +---------+----------+------------------------+
    | Name    | Size     | Contents               |
    +=========+==========+========================+
    | Tag     | 1 byte   | unsigned 8-bit integer |
    +---------+----------+------------------------+
    | peer_id | 16 bytes | bytes                  |
    +---------+----------+------------------------+
    
    
    Incoming_connection (tag 4)
    ===========================
    
    +-------+----------------------+------------------------+
    | Name  | Size                 | Contents               |
    +=======+======================+========================+
    | Tag   | 1 byte               | unsigned 8-bit integer |
    +-------+----------------------+------------------------+
    | point | Determined from data | $p2p_point.id          |
    +-------+----------------------+------------------------+
    
    
    Outgoing_connection (tag 5)
    ===========================
    
    +-------+----------------------+------------------------+
    | Name  | Size                 | Contents               |
    +=======+======================+========================+
    | Tag   | 1 byte               | unsigned 8-bit integer |
    +-------+----------------------+------------------------+
    | point | Determined from data | $p2p_point.id          |
    +-------+----------------------+------------------------+
    
    
    Authentication_failed (tag 6)
    =============================
    
    +-------+----------------------+------------------------+
    | Name  | Size                 | Contents               |
    +=======+======================+========================+
    | Tag   | 1 byte               | unsigned 8-bit integer |
    +-------+----------------------+------------------------+
    | point | Determined from data | $p2p_point.id          |
    +-------+----------------------+------------------------+
    
    
    Accepting_request (tag 7)
    =========================
    
    +----------+----------------------+------------------------+
    | Name     | Size                 | Contents               |
    +==========+======================+========================+
    | Tag      | 1 byte               | unsigned 8-bit integer |
    +----------+----------------------+------------------------+
    | point    | Determined from data | $p2p_point.id          |
    +----------+----------------------+------------------------+
    | id_point | Determined from data | $p2p_connection.id     |
    +----------+----------------------+------------------------+
    | peer_id  | 16 bytes             | bytes                  |
    +----------+----------------------+------------------------+
    
    
    Rejecting_request (tag 8)
    =========================
    
    +----------+----------------------+------------------------+
    | Name     | Size                 | Contents               |
    +==========+======================+========================+
    | Tag      | 1 byte               | unsigned 8-bit integer |
    +----------+----------------------+------------------------+
    | point    | Determined from data | $p2p_point.id          |
    +----------+----------------------+------------------------+
    | id_point | Determined from data | $p2p_connection.id     |
    +----------+----------------------+------------------------+
    | peer_id  | 16 bytes             | bytes                  |
    +----------+----------------------+------------------------+
    
    
    Request_rejected (tag 9)
    ========================
    
    +--------------------------------+----------------------+-------------------------------------+
    | Name                           | Size                 | Contents                            |
    +================================+======================+=====================================+
    | Tag                            | 1 byte               | unsigned 8-bit integer              |
    +--------------------------------+----------------------+-------------------------------------+
    | point                          | Determined from data | $p2p_point.id                       |
    +--------------------------------+----------------------+-------------------------------------+
    | ? presence of field "identity" | 1 byte               | boolean (0 for false, 255 for true) |
    +--------------------------------+----------------------+-------------------------------------+
    | identity                       | Determined from data | $X_0                                |
    +--------------------------------+----------------------+-------------------------------------+
    
    
    Connection_established (tag 10)
    ===============================
    
    +----------+----------------------+------------------------+
    | Name     | Size                 | Contents               |
    +==========+======================+========================+
    | Tag      | 1 byte               | unsigned 8-bit integer |
    +----------+----------------------+------------------------+
    | id_point | Determined from data | $p2p_connection.id     |
    +----------+----------------------+------------------------+
    | peer_id  | 16 bytes             | bytes                  |
    +----------+----------------------+------------------------+
    
    
    Disconnection (tag 11)
    ======================
    
    +---------+----------+------------------------+
    | Name    | Size     | Contents               |
    +=========+==========+========================+
    | Tag     | 1 byte   | unsigned 8-bit integer |
    +---------+----------+------------------------+
    | peer_id | 16 bytes | bytes                  |
    +---------+----------+------------------------+
    
    
    External_disconnection (tag 12)
    ===============================
    
    +---------+----------+------------------------+
    | Name    | Size     | Contents               |
    +=========+==========+========================+
    | Tag     | 1 byte   | unsigned 8-bit integer |
    +---------+----------+------------------------+
    | peer_id | 16 bytes | bytes                  |
    +---------+----------+------------------------+
    
    
    Gc_points (tag 13)
    ==================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Gc_peer_ids (tag 14)
    ====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Swap_request_received (tag 15)
    ==============================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_ack_received (tag 16)
    ==========================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_request_sent (tag 17)
    ==========================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_ack_sent (tag 18)
    ======================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_request_ignored (tag 19)
    =============================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_success (tag 20)
    =====================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Swap_failure (tag 21)
    =====================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Bootstrap_sent (tag 22)
    =======================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Bootstrap_received (tag 23)
    ===========================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Advertise_sent (tag 24)
    =======================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    
    Advertise_received (tag 25)
    ===========================
    
    +--------+----------+------------------------+
    | Name   | Size     | Contents               |
    +========+==========+========================+
    | Tag    | 1 byte   | unsigned 8-bit integer |
    +--------+----------+------------------------+
    | source | 16 bytes | bytes                  |
    +--------+----------+------------------------+
    
    </pre>
    </div>
  


.. _GET_--network--peers :

**GET /network/peers?(filter=<p2p.point.state_filter>)\***

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--peersdescr', 'GET_--network--peers')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peersoutput.json', 'GET_--network--peers')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peersoutput.bin', 'GET_--network--peers')">Binary output</button>
    </div><div id="GET_--network--peersdescr" class="GET_--network--peers tabcontent">
            <p>
            List the peers the node ever met.</p> <p>Optional query arguments :<ul><li><span class="query">filter = &lt;p2p.point.state_filter&gt;</span></li></ul></p>
            </div>
  <div id="GET_--network--peersoutput.json" class="GET_--network--peers tabcontent">
    <pre>
    [ [ $Crypto_box.Public_key_hash,
        { "score": number,
          "trusted": boolean,
          "conn_metadata"?:
            { "disable_mempool": boolean,
              "private_node": boolean },
          "peer_metadata":
            { "responses":
                { "sent":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "failed":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "received":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "unexpected": $bignum,
                  "outdated": $bignum },
              "requests":
                { "sent":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "received":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "failed":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum },
                  "scheduled":
                    { /* peer_metadata.v1 */
                      "branch": $bignum,
                      "head": $bignum,
                      "block_header": $bignum,
                      "operations": $bignum,
                      "protocols": $bignum,
                      "operation_hashes_for_block": $bignum,
                      "operations_for_block": $bignum,
                      "checkpoint": $bignum,
                      "protocol_branch": $bignum,
                      "predecessor_header": $bignum,
                      "other": $bignum }
                    || { /* peer_metadata.legacy_v0 */
                         "branch": $bignum,
                         "head": $bignum,
                         "block_header": $bignum,
                         "operations": $bignum,
                         "protocols": $bignum,
                         "operation_hashes_for_block": $bignum,
                         "operations_for_block": $bignum,
                         "other": $bignum } },
              "valid_blocks": $bignum,
              "old_heads": $bignum,
              "prevalidator_results":
                { "cannot_download": $bignum,
                  "cannot_parse": $bignum,
                  "refused_by_prefilter": $bignum,
                  "refused_by_postfilter": $bignum,
                  "applied": $bignum,
                  "branch_delayed": $bignum,
                  "branch_refused": $bignum,
                  "refused": $bignum,
                  "duplicate": $bignum,
                  "outdated": $bignum },
              "unactivated_chains": $bignum,
              "inactive_chains": $bignum,
              "future_blocks_advertised": $bignum,
              "unadvertised":
                { "block": $bignum,
                  "operations": $bignum,
                  "protocol": $bignum },
              "advertisements":
                { "sent": { "head": $bignum,
                            "branch": $bignum },
                  "received": { "head": $bignum,
                                "branch": $bignum } } },
          "state": $p2p_peer.state,
          "reachable_at"?: $p2p_connection.id,
          "stat": $p2p_stat,
          "last_failed_connection"?: [ $p2p_connection.id, $timestamp.system ],
          "last_rejected_connection"?:
            [ $p2p_connection.id, $timestamp.system ],
          "last_established_connection"?:
            [ $p2p_connection.id, $timestamp.system ],
          "last_disconnection"?: [ $p2p_connection.id, $timestamp.system ],
          "last_seen"?: [ $p2p_connection.id, $timestamp.system ],
          "last_miss"?: [ $p2p_connection.id, $timestamp.system ] } ] ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_peer.state:
      /* The state a peer connection can be in: accepted (when the connection
         is being established), running (when the connection is already
         established), disconnected (otherwise). */
      "running" | "accepted" | "disconnected"
    $p2p_stat:
      /* Statistics about the p2p network. */
      { "total_sent": $int64,
        "total_recv": $int64,
        "current_inflow": integer ∈ [-2^30, 2^30],
        "current_outflow": integer ∈ [-2^30, 2^30] }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--peersoutput.bin" class="GET_--network--peers tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_2
    ***
    
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | disable_mempool | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    | private_node    | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    X_5 (Determined from data, 8-bit tag)
    *************************************
    
    
    Z.t
    ***
    
    A variable-length sequence of bytes encoding a Zarith integer. Each byte has a running unary size bit: the most significant bit of each byte indicates whether this is the last byte in the sequence (0) or whether the sequence continues (1). The second most significant bit of the first byte is reserved for the sign (0 for positive, 1 for negative). Size and sign bits ignored, the data is the binary representation of the absolute value of the number in little-endian order.
    
    +------+----------------------+----------+
    | Name | Size                 | Contents |
    +======+======================+==========+
    | Z.t  | Determined from data | bytes    |
    +------+----------------------+----------+
    
    
    X_4
    ***
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | sent       | Determined from data | $X_5     |
    +------------+----------------------+----------+
    | failed     | Determined from data | $X_5     |
    +------------+----------------------+----------+
    | received   | Determined from data | $X_5     |
    +------------+----------------------+----------+
    | unexpected | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | outdated   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_8
    ***
    
    +-----------+----------------------+----------+
    | Name      | Size                 | Contents |
    +===========+======================+==========+
    | sent      | Determined from data | $X_5     |
    +-----------+----------------------+----------+
    | received  | Determined from data | $X_5     |
    +-----------+----------------------+----------+
    | failed    | Determined from data | $X_5     |
    +-----------+----------------------+----------+
    | scheduled | Determined from data | $X_5     |
    +-----------+----------------------+----------+
    
    
    X_13
    ****
    
    +-----------------------+----------------------+----------+
    | Name                  | Size                 | Contents |
    +=======================+======================+==========+
    | cannot_download       | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | cannot_parse          | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_prefilter  | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_postfilter | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | applied               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_delayed        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_refused        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | duplicate             | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | outdated              | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    
    
    X_14
    ****
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | block      | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | operations | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | protocol   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_16
    ****
    
    +--------+----------------------+----------+
    | Name   | Size                 | Contents |
    +========+======================+==========+
    | head   | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    | branch | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    
    
    X_15
    ****
    
    +----------+----------------------+----------+
    | Name     | Size                 | Contents |
    +==========+======================+==========+
    | sent     | Determined from data | $X_16    |
    +----------+----------------------+----------+
    | received | Determined from data | $X_16    |
    +----------+----------------------+----------+
    
    
    X_3
    ***
    
    +--------------------------+----------------------+----------+
    | Name                     | Size                 | Contents |
    +==========================+======================+==========+
    | responses                | Determined from data | $X_4     |
    +--------------------------+----------------------+----------+
    | requests                 | Determined from data | $X_8     |
    +--------------------------+----------------------+----------+
    | valid_blocks             | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | old_heads                | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | prevalidator_results     | Determined from data | $X_13    |
    +--------------------------+----------------------+----------+
    | unactivated_chains       | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | inactive_chains          | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | future_blocks_advertised | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | unadvertised             | Determined from data | $X_14    |
    +--------------------------+----------------------+----------+
    | advertisements           | Determined from data | $X_15    |
    +--------------------------+----------------------+----------+
    
    
    p2p_peer.state (Enumeration: unsigned 8-bit integer):
    *****************************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | accepted       |
    +-------------+----------------+
    | 1           | running        |
    +-------------+----------------+
    | 2           | disconnected   |
    +-------------+----------------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    p2p_stat
    ********
    
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | total_sent      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | total_recv      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_inflow  | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_outflow | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    X_18
    ****
    
    +-----------------+----------------------+----------------------------------+
    | Name            | Size                 | Contents                         |
    +=================+======================+==================================+
    | Unnamed field 0 | Determined from data | $p2p_connection.id               |
    +-----------------+----------------------+----------------------------------+
    | Unnamed field 1 | 8 bytes              | signed 64-bit big-endian integer |
    +-----------------+----------------------+----------------------------------+
    
    
    X_1
    ***
    
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | Name                                              | Size                 | Contents                                                            |
    +===================================================+======================+=====================================================================+
    | score                                             | 8 bytes              | double-precision floating-point number                              |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "conn_metadata"               | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | conn_metadata                                     | 2 bytes              | $X_2                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | peer_metadata                                     | Determined from data | $X_3                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | state                                             | 1 byte               | unsigned 8-bit integer encoding an enumeration (see p2p_peer.state) |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "reachable_at"                | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | reachable_at                                      | Determined from data | $p2p_connection.id                                                  |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | stat                                              | 24 bytes             | $p2p_stat                                                           |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_failed_connection                            | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_rejected_connection                          | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_established_connection                       | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_disconnection                                | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_seen                                         | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_miss                                         | Determined from data | $X_18                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------------------+----------+
    | Name            | Size                 | Contents |
    +=================+======================+==========+
    | Unnamed field 0 | 16 bytes             | bytes    |
    +-----------------+----------------------+----------+
    | Unnamed field 1 | Determined from data | $X_1     |
    +-----------------+----------------------+----------+
    
    </pre>
    </div>
  

.. _GET_--network--peers--peer_id :

**GET /network/peers/<peer_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--peers--peer_iddescr', 'GET_--network--peers--peer_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_idoutput.json', 'GET_--network--peers--peer_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_idoutput.bin', 'GET_--network--peers--peer_id')">Binary output</button>
    </div><div id="GET_--network--peers--peer_iddescr" class="GET_--network--peers--peer_id tabcontent">
            <p>
            Details about a given peer.</p>
            </div>
  <div id="GET_--network--peers--peer_idoutput.json" class="GET_--network--peers--peer_id tabcontent">
    <pre>
    { "score": number,
      "trusted": boolean,
      "conn_metadata"?: { "disable_mempool": boolean,
                          "private_node": boolean },
      "peer_metadata":
        { "responses":
            { "sent":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "failed":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "received":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "unexpected": $bignum,
              "outdated": $bignum },
          "requests":
            { "sent":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "received":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "failed":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "scheduled":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum } },
          "valid_blocks": $bignum,
          "old_heads": $bignum,
          "prevalidator_results":
            { "cannot_download": $bignum,
              "cannot_parse": $bignum,
              "refused_by_prefilter": $bignum,
              "refused_by_postfilter": $bignum,
              "applied": $bignum,
              "branch_delayed": $bignum,
              "branch_refused": $bignum,
              "refused": $bignum,
              "duplicate": $bignum,
              "outdated": $bignum },
          "unactivated_chains": $bignum,
          "inactive_chains": $bignum,
          "future_blocks_advertised": $bignum,
          "unadvertised":
            { "block": $bignum,
              "operations": $bignum,
              "protocol": $bignum },
          "advertisements":
            { "sent": { "head": $bignum,
                        "branch": $bignum },
              "received": { "head": $bignum,
                            "branch": $bignum } } },
      "state": $p2p_peer.state,
      "reachable_at"?: $p2p_connection.id,
      "stat": $p2p_stat,
      "last_failed_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_rejected_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_established_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_disconnection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_seen"?: [ $p2p_connection.id, $timestamp.system ],
      "last_miss"?: [ $p2p_connection.id, $timestamp.system ] }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_peer.state:
      /* The state a peer connection can be in: accepted (when the connection
         is being established), running (when the connection is already
         established), disconnected (otherwise). */
      "running" | "accepted" | "disconnected"
    $p2p_stat:
      /* Statistics about the p2p network. */
      { "total_sent": $int64,
        "total_recv": $int64,
        "current_inflow": integer ∈ [-2^30, 2^30],
        "current_outflow": integer ∈ [-2^30, 2^30] }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--peers--peer_idoutput.bin" class="GET_--network--peers--peer_id tabcontent">
    <pre>
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | Name                                              | Size                 | Contents                                                            |
    +===================================================+======================+=====================================================================+
    | score                                             | 8 bytes              | double-precision floating-point number                              |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "conn_metadata"               | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | conn_metadata                                     | 2 bytes              | $X_0                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | peer_metadata                                     | Determined from data | $X_1                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | state                                             | 1 byte               | unsigned 8-bit integer encoding an enumeration (see p2p_peer.state) |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "reachable_at"                | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | reachable_at                                      | Determined from data | $p2p_connection.id                                                  |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | stat                                              | 24 bytes             | $p2p_stat                                                           |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_failed_connection                            | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_rejected_connection                          | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_established_connection                       | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_disconnection                                | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_seen                                         | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_miss                                         | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | disable_mempool | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    | private_node    | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    X_3 (Determined from data, 8-bit tag)
    *************************************
    
    
    Z.t
    ***
    
    A variable-length sequence of bytes encoding a Zarith integer. Each byte has a running unary size bit: the most significant bit of each byte indicates whether this is the last byte in the sequence (0) or whether the sequence continues (1). The second most significant bit of the first byte is reserved for the sign (0 for positive, 1 for negative). Size and sign bits ignored, the data is the binary representation of the absolute value of the number in little-endian order.
    
    +------+----------------------+----------+
    | Name | Size                 | Contents |
    +======+======================+==========+
    | Z.t  | Determined from data | bytes    |
    +------+----------------------+----------+
    
    
    X_2
    ***
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | sent       | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | failed     | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | received   | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | unexpected | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | outdated   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_6
    ***
    
    +-----------+----------------------+----------+
    | Name      | Size                 | Contents |
    +===========+======================+==========+
    | sent      | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | received  | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | failed    | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | scheduled | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    
    
    X_11
    ****
    
    +-----------------------+----------------------+----------+
    | Name                  | Size                 | Contents |
    +=======================+======================+==========+
    | cannot_download       | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | cannot_parse          | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_prefilter  | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_postfilter | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | applied               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_delayed        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_refused        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | duplicate             | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | outdated              | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    
    
    X_12
    ****
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | block      | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | operations | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | protocol   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_14
    ****
    
    +--------+----------------------+----------+
    | Name   | Size                 | Contents |
    +========+======================+==========+
    | head   | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    | branch | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    
    
    X_13
    ****
    
    +----------+----------------------+----------+
    | Name     | Size                 | Contents |
    +==========+======================+==========+
    | sent     | Determined from data | $X_14    |
    +----------+----------------------+----------+
    | received | Determined from data | $X_14    |
    +----------+----------------------+----------+
    
    
    X_1
    ***
    
    +--------------------------+----------------------+----------+
    | Name                     | Size                 | Contents |
    +==========================+======================+==========+
    | responses                | Determined from data | $X_2     |
    +--------------------------+----------------------+----------+
    | requests                 | Determined from data | $X_6     |
    +--------------------------+----------------------+----------+
    | valid_blocks             | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | old_heads                | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | prevalidator_results     | Determined from data | $X_11    |
    +--------------------------+----------------------+----------+
    | unactivated_chains       | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | inactive_chains          | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | future_blocks_advertised | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | unadvertised             | Determined from data | $X_12    |
    +--------------------------+----------------------+----------+
    | advertisements           | Determined from data | $X_13    |
    +--------------------------+----------------------+----------+
    
    
    p2p_peer.state (Enumeration: unsigned 8-bit integer):
    *****************************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | accepted       |
    +-------------+----------------+
    | 1           | running        |
    +-------------+----------------+
    | 2           | disconnected   |
    +-------------+----------------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    p2p_stat
    ********
    
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | total_sent      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | total_recv      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_inflow  | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_outflow | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    X_16
    ****
    
    +-----------------+----------------------+----------------------------------+
    | Name            | Size                 | Contents                         |
    +=================+======================+==================================+
    | Unnamed field 0 | Determined from data | $p2p_connection.id               |
    +-----------------+----------------------+----------------------------------+
    | Unnamed field 1 | 8 bytes              | signed 64-bit big-endian integer |
    +-----------------+----------------------+----------------------------------+
    
    </pre>
    </div>
  

.. _PATCH_--network--peers--peer_id :

**PATCH /network/peers/<peer_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'PATCH_--network--peers--peer_iddescr', 'PATCH_--network--peers--peer_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--peers--peer_idinput.json', 'PATCH_--network--peers--peer_id')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--peers--peer_idinput.bin', 'PATCH_--network--peers--peer_id')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--peers--peer_idoutput.json', 'PATCH_--network--peers--peer_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--peers--peer_idoutput.bin', 'PATCH_--network--peers--peer_id')">Binary output</button>
    </div><div id="PATCH_--network--peers--peer_iddescr" class="PATCH_--network--peers--peer_id tabcontent">
            <p>
            Change the permissions of a given peer. With `{acl: ban}`: blacklist the given peer and remove it from the whitelist if present. With `{acl: open}`: removes the peer from the blacklist and whitelist. With `{acl: trust}`: trust the given peer permanently and remove it from the blacklist if present. The peer cannot be blocked (but its host IP still can).</p>
            </div>
  <div id="PATCH_--network--peers--peer_idinput.json" class="PATCH_--network--peers--peer_id tabcontent">
    <pre>
    { "acl"?: "open" | "trust" | "ban" }</pre>
    </div>
  <div id="PATCH_--network--peers--peer_idinput.bin" class="PATCH_--network--peers--peer_id tabcontent">
    <pre>
    +---------------------------+--------+----------------------------------------------------------+
    | Name                      | Size   | Contents                                                 |
    +===========================+========+==========================================================+
    | ? presence of field "acl" | 1 byte | boolean (0 for false, 255 for true)                      |
    +---------------------------+--------+----------------------------------------------------------+
    | acl                       | 1 byte | unsigned 8-bit integer encoding an enumeration (see X_0) |
    +---------------------------+--------+----------------------------------------------------------+
    
    
    X_0 (Enumeration: unsigned 8-bit integer):
    ******************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | ban            |
    +-------------+----------------+
    | 1           | trust          |
    +-------------+----------------+
    | 2           | open           |
    +-------------+----------------+
    
    </pre>
    </div>
  <div id="PATCH_--network--peers--peer_idoutput.json" class="PATCH_--network--peers--peer_id tabcontent">
    <pre>
    { "score": number,
      "trusted": boolean,
      "conn_metadata"?: { "disable_mempool": boolean,
                          "private_node": boolean },
      "peer_metadata":
        { "responses":
            { "sent":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "failed":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "received":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "unexpected": $bignum,
              "outdated": $bignum },
          "requests":
            { "sent":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "received":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "failed":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum },
              "scheduled":
                { /* peer_metadata.v1 */
                  "branch": $bignum,
                  "head": $bignum,
                  "block_header": $bignum,
                  "operations": $bignum,
                  "protocols": $bignum,
                  "operation_hashes_for_block": $bignum,
                  "operations_for_block": $bignum,
                  "checkpoint": $bignum,
                  "protocol_branch": $bignum,
                  "predecessor_header": $bignum,
                  "other": $bignum }
                || { /* peer_metadata.legacy_v0 */
                     "branch": $bignum,
                     "head": $bignum,
                     "block_header": $bignum,
                     "operations": $bignum,
                     "protocols": $bignum,
                     "operation_hashes_for_block": $bignum,
                     "operations_for_block": $bignum,
                     "other": $bignum } },
          "valid_blocks": $bignum,
          "old_heads": $bignum,
          "prevalidator_results":
            { "cannot_download": $bignum,
              "cannot_parse": $bignum,
              "refused_by_prefilter": $bignum,
              "refused_by_postfilter": $bignum,
              "applied": $bignum,
              "branch_delayed": $bignum,
              "branch_refused": $bignum,
              "refused": $bignum,
              "duplicate": $bignum,
              "outdated": $bignum },
          "unactivated_chains": $bignum,
          "inactive_chains": $bignum,
          "future_blocks_advertised": $bignum,
          "unadvertised":
            { "block": $bignum,
              "operations": $bignum,
              "protocol": $bignum },
          "advertisements":
            { "sent": { "head": $bignum,
                        "branch": $bignum },
              "received": { "head": $bignum,
                            "branch": $bignum } } },
      "state": $p2p_peer.state,
      "reachable_at"?: $p2p_connection.id,
      "stat": $p2p_stat,
      "last_failed_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_rejected_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_established_connection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_disconnection"?: [ $p2p_connection.id, $timestamp.system ],
      "last_seen"?: [ $p2p_connection.id, $timestamp.system ],
      "last_miss"?: [ $p2p_connection.id, $timestamp.system ] }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a port
         number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $p2p_peer.state:
      /* The state a peer connection can be in: accepted (when the connection
         is being established), running (when the connection is already
         established), disconnected (otherwise). */
      "running" | "accepted" | "disconnected"
    $p2p_stat:
      /* Statistics about the p2p network. */
      { "total_sent": $int64,
        "total_recv": $int64,
        "current_inflow": integer ∈ [-2^30, 2^30],
        "current_outflow": integer ∈ [-2^30, 2^30] }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="PATCH_--network--peers--peer_idoutput.bin" class="PATCH_--network--peers--peer_id tabcontent">
    <pre>
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | Name                                              | Size                 | Contents                                                            |
    +===================================================+======================+=====================================================================+
    | score                                             | 8 bytes              | double-precision floating-point number                              |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "conn_metadata"               | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | conn_metadata                                     | 2 bytes              | $X_0                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | peer_metadata                                     | Determined from data | $X_1                                                                |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | state                                             | 1 byte               | unsigned 8-bit integer encoding an enumeration (see p2p_peer.state) |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "reachable_at"                | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | reachable_at                                      | Determined from data | $p2p_connection.id                                                  |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | stat                                              | 24 bytes             | $p2p_stat                                                           |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_failed_connection                            | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_rejected_connection                          | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_established_connection                       | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_disconnection                                | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_seen                                         | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true)                                 |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    | last_miss                                         | Determined from data | $X_16                                                               |
    +---------------------------------------------------+----------------------+---------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | disable_mempool | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    | private_node    | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    X_3 (Determined from data, 8-bit tag)
    *************************************
    
    
    Z.t
    ***
    
    A variable-length sequence of bytes encoding a Zarith integer. Each byte has a running unary size bit: the most significant bit of each byte indicates whether this is the last byte in the sequence (0) or whether the sequence continues (1). The second most significant bit of the first byte is reserved for the sign (0 for positive, 1 for negative). Size and sign bits ignored, the data is the binary representation of the absolute value of the number in little-endian order.
    
    +------+----------------------+----------+
    | Name | Size                 | Contents |
    +======+======================+==========+
    | Z.t  | Determined from data | bytes    |
    +------+----------------------+----------+
    
    
    X_2
    ***
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | sent       | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | failed     | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | received   | Determined from data | $X_3     |
    +------------+----------------------+----------+
    | unexpected | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | outdated   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_6
    ***
    
    +-----------+----------------------+----------+
    | Name      | Size                 | Contents |
    +===========+======================+==========+
    | sent      | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | received  | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | failed    | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    | scheduled | Determined from data | $X_3     |
    +-----------+----------------------+----------+
    
    
    X_11
    ****
    
    +-----------------------+----------------------+----------+
    | Name                  | Size                 | Contents |
    +=======================+======================+==========+
    | cannot_download       | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | cannot_parse          | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_prefilter  | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused_by_postfilter | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | applied               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_delayed        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | branch_refused        | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | refused               | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | duplicate             | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    | outdated              | Determined from data | $Z.t     |
    +-----------------------+----------------------+----------+
    
    
    X_12
    ****
    
    +------------+----------------------+----------+
    | Name       | Size                 | Contents |
    +============+======================+==========+
    | block      | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | operations | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    | protocol   | Determined from data | $Z.t     |
    +------------+----------------------+----------+
    
    
    X_14
    ****
    
    +--------+----------------------+----------+
    | Name   | Size                 | Contents |
    +========+======================+==========+
    | head   | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    | branch | Determined from data | $Z.t     |
    +--------+----------------------+----------+
    
    
    X_13
    ****
    
    +----------+----------------------+----------+
    | Name     | Size                 | Contents |
    +==========+======================+==========+
    | sent     | Determined from data | $X_14    |
    +----------+----------------------+----------+
    | received | Determined from data | $X_14    |
    +----------+----------------------+----------+
    
    
    X_1
    ***
    
    +--------------------------+----------------------+----------+
    | Name                     | Size                 | Contents |
    +==========================+======================+==========+
    | responses                | Determined from data | $X_2     |
    +--------------------------+----------------------+----------+
    | requests                 | Determined from data | $X_6     |
    +--------------------------+----------------------+----------+
    | valid_blocks             | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | old_heads                | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | prevalidator_results     | Determined from data | $X_11    |
    +--------------------------+----------------------+----------+
    | unactivated_chains       | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | inactive_chains          | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | future_blocks_advertised | Determined from data | $Z.t     |
    +--------------------------+----------------------+----------+
    | unadvertised             | Determined from data | $X_12    |
    +--------------------------+----------------------+----------+
    | advertisements           | Determined from data | $X_13    |
    +--------------------------+----------------------+----------+
    
    
    p2p_peer.state (Enumeration: unsigned 8-bit integer):
    *****************************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | accepted       |
    +-------------+----------------+
    | 1           | running        |
    +-------------+----------------+
    | 2           | disconnected   |
    +-------------+----------------+
    
    
    p2p_connection.id
    *****************
    
    +--------------------------------+----------+-------------------------------------+
    | Name                           | Size     | Contents                            |
    +================================+==========+=====================================+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    | addr                           | Variable | bytes                               |
    +--------------------------------+----------+-------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true) |
    +--------------------------------+----------+-------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer  |
    +--------------------------------+----------+-------------------------------------+
    
    
    p2p_stat
    ********
    
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | total_sent      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | total_recv      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_inflow  | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_outflow | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    X_16
    ****
    
    +-----------------+----------------------+----------------------------------+
    | Name            | Size                 | Contents                         |
    +=================+======================+==================================+
    | Unnamed field 0 | Determined from data | $p2p_connection.id               |
    +-----------------+----------------------+----------------------------------+
    | Unnamed field 1 | 8 bytes              | signed 64-bit big-endian integer |
    +-----------------+----------------------+----------------------------------+
    
    </pre>
    </div>
  

.. _GET_--network--peers--peer_id--banned :

**GET /network/peers/<peer_id>/banned**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--peers--peer_id--banneddescr', 'GET_--network--peers--peer_id--banned')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_id--bannedoutput.json', 'GET_--network--peers--peer_id--banned')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_id--bannedoutput.bin', 'GET_--network--peers--peer_id--banned')">Binary output</button>
    </div><div id="GET_--network--peers--peer_id--banneddescr" class="GET_--network--peers--peer_id--banned tabcontent">
            <p>
            Check if a given peer is blacklisted or greylisted.</p>
            </div>
  <div id="GET_--network--peers--peer_id--bannedoutput.json" class="GET_--network--peers--peer_id--banned tabcontent">
    <pre>
    boolean</pre>
    </div>
  <div id="GET_--network--peers--peer_id--bannedoutput.bin" class="GET_--network--peers--peer_id--banned tabcontent">
    <pre>
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | Unnamed field 0 | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--network--peers--peer_id--log :

**GET /network/peers/<peer_id>/log?[monitor]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--peers--peer_id--logdescr', 'GET_--network--peers--peer_id--log')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_id--logoutput.json', 'GET_--network--peers--peer_id--log')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--peers--peer_id--logoutput.bin', 'GET_--network--peers--peer_id--log')">Binary output</button>
    </div><div id="GET_--network--peers--peer_id--logdescr" class="GET_--network--peers--peer_id--log tabcontent">
            <p>
            Monitor network events related to a given peer.</p> <p>Optional query arguments :<ul><li><span class="query">monitor</span></li></ul></p>
            </div>
  <div id="GET_--network--peers--peer_id--logoutput.json" class="GET_--network--peers--peer_id--log tabcontent">
    <pre>
    [ $p2p_peer.pool_event ... ]
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_peer.pool_event:
      /* An event that may happen during maintenance of and other operations on
         the connection to a specific peer. */
      { "kind":
          "rejecting_request"
          | "incoming_request"
          | "disconnection"
          | "external_disconnection"
          | "connection_established"
          | "request_rejected",
        "timestamp": $timestamp.system,
        "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--peers--peer_id--logoutput.bin" class="GET_--network--peers--peer_id--log tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $p2p_peer.pool_event   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0 (Enumeration: unsigned 8-bit integer):
    ******************************************
    
    +-------------+------------------------+
    | Case number | Encoded string         |
    +=============+========================+
    | 0           | incoming_request       |
    +-------------+------------------------+
    | 1           | rejecting_request      |
    +-------------+------------------------+
    | 2           | request_rejected       |
    +-------------+------------------------+
    | 3           | connection_established |
    +-------------+------------------------+
    | 4           | disconnection          |
    +-------------+------------------------+
    | 5           | external_disconnection |
    +-------------+------------------------+
    
    
    p2p_peer.pool_event
    *******************
    
    +--------------------------------+----------+----------------------------------------------------------+
    | Name                           | Size     | Contents                                                 |
    +================================+==========+==========================================================+
    | kind                           | 1 byte   | unsigned 8-bit integer encoding an enumeration (see X_0) |
    +--------------------------------+----------+----------------------------------------------------------+
    | timestamp                      | 8 bytes  | signed 64-bit big-endian integer                         |
    +--------------------------------+----------+----------------------------------------------------------+
    | # bytes in field "p2p_address" | 4 bytes  | unsigned 30-bit big-endian integer                       |
    +--------------------------------+----------+----------------------------------------------------------+
    | addr                           | Variable | bytes                                                    |
    +--------------------------------+----------+----------------------------------------------------------+
    | ? presence of field "port"     | 1 byte   | boolean (0 for false, 255 for true)                      |
    +--------------------------------+----------+----------------------------------------------------------+
    | port                           | 2 bytes  | unsigned 16-bit big-endian integer                       |
    +--------------------------------+----------+----------------------------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--network--points :

**GET /network/points?(filter=<p2p.point.state_filter>)\***

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--pointsdescr', 'GET_--network--points')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--pointsoutput.json', 'GET_--network--points')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--pointsoutput.bin', 'GET_--network--points')">Binary output</button>
    </div><div id="GET_--network--pointsdescr" class="GET_--network--points tabcontent">
            <p>
            List the pool of known `IP:port` used for establishing P2P connections.</p> <p>Optional query arguments :<ul><li><span class="query">filter = &lt;p2p.point.state_filter&gt;</span></li></ul></p>
            </div>
  <div id="GET_--network--pointsoutput.json" class="GET_--network--points tabcontent">
    <pre>
    [ [ $p2p_point.id, $p2p_point.info ] ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_point.id:
      /* Identifier for a peer point */
      $unistring
    $p2p_point.info:
      /* Information about a peer point. Includes flags, state, and records
         about past events. */
      { "trusted": boolean,
        "greylisted_until"?: $timestamp.system,
        "state": $p2p_point.state,
        "p2p_peer_id"?: $Crypto_box.Public_key_hash,
        "last_failed_connection"?: $timestamp.system,
        "last_rejected_connection"?:
          [ $Crypto_box.Public_key_hash, $timestamp.system ],
        "last_established_connection"?:
          [ $Crypto_box.Public_key_hash, $timestamp.system ],
        "last_disconnection"?:
          [ $Crypto_box.Public_key_hash, $timestamp.system ],
        "last_seen"?: [ $Crypto_box.Public_key_hash, $timestamp.system ],
        "last_miss"?: $timestamp.system,
        "expected_peer_id"?: $Crypto_box.Public_key_hash }
    $p2p_point.state:
      /* The state a connection to a peer point can be in: requested
         (connection open from here), accepted (handshake), running (connection
         already established), disconnected (no connection). */
      { /* Requested */
        "event_kind": "requested" }
      || { /* Accepted */
           "event_kind": "accepted",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Running */
           "event_kind": "running",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Disconnected */
           "event_kind": "disconnected" }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--pointsoutput.bin" class="GET_--network--points tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    p2p_point.id
    ************
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    p2p_point.state (Determined from data, 8-bit tag)
    *************************************************
    
    Requested (tag 0)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Accepted (tag 1)
    ================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Running (tag 2)
    ===============
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Disconnected (tag 3)
    ====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    X_1
    ***
    
    +-----------------+----------+----------------------------------+
    | Name            | Size     | Contents                         |
    +=================+==========+==================================+
    | Unnamed field 0 | 16 bytes | bytes                            |
    +-----------------+----------+----------------------------------+
    | Unnamed field 1 | 8 bytes  | signed 64-bit big-endian integer |
    +-----------------+----------+----------------------------------+
    
    
    p2p_point.info
    **************
    
    +---------------------------------------------------+----------------------+-------------------------------------+
    | Name                                              | Size                 | Contents                            |
    +===================================================+======================+=====================================+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "greylisted_until"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | greylisted_until                                  | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | state                                             | Determined from data | $p2p_point.state                    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "p2p_peer_id"                 | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | p2p_peer_id                                       | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_failed_connection                            | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_rejected_connection                          | 24 bytes             | $X_1                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_established_connection                       | 24 bytes             | $X_1                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_disconnection                                | 24 bytes             | $X_1                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_seen                                         | 24 bytes             | $X_1                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_miss                                         | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "expected_peer_id"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | expected_peer_id                                  | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------------------+-----------------+
    | Name            | Size                 | Contents        |
    +=================+======================+=================+
    | Unnamed field 0 | Determined from data | $p2p_point.id   |
    +-----------------+----------------------+-----------------+
    | Unnamed field 1 | Determined from data | $p2p_point.info |
    +-----------------+----------------------+-----------------+
    
    </pre>
    </div>
  

.. _GET_--network--points--point :

**GET /network/points/<point>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--points--pointdescr', 'GET_--network--points--point')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--pointoutput.json', 'GET_--network--points--point')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--pointoutput.bin', 'GET_--network--points--point')">Binary output</button>
    </div><div id="GET_--network--points--pointdescr" class="GET_--network--points--point tabcontent">
            <p>
            Details about a given `IP:addr`.</p>
            </div>
  <div id="GET_--network--points--pointoutput.json" class="GET_--network--points--point tabcontent">
    <pre>
    { /* Information about a peer point. Includes flags, state, and records
         about past events. */
      "trusted": boolean,
      "greylisted_until"?: $timestamp.system,
      "state": $p2p_point.state,
      "p2p_peer_id"?: $Crypto_box.Public_key_hash,
      "last_failed_connection"?: $timestamp.system,
      "last_rejected_connection"?:
        [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_established_connection"?:
        [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_disconnection"?: [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_seen"?: [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_miss"?: $timestamp.system,
      "expected_peer_id"?: $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_point.state:
      /* The state a connection to a peer point can be in: requested
         (connection open from here), accepted (handshake), running (connection
         already established), disconnected (no connection). */
      { /* Requested */
        "event_kind": "requested" }
      || { /* Accepted */
           "event_kind": "accepted",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Running */
           "event_kind": "running",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Disconnected */
           "event_kind": "disconnected" }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--points--pointoutput.bin" class="GET_--network--points--point tabcontent">
    <pre>
    +---------------------------------------------------+----------------------+-------------------------------------+
    | Name                                              | Size                 | Contents                            |
    +===================================================+======================+=====================================+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "greylisted_until"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | greylisted_until                                  | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | state                                             | Determined from data | $p2p_point.state                    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "p2p_peer_id"                 | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | p2p_peer_id                                       | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_failed_connection                            | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_rejected_connection                          | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_established_connection                       | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_disconnection                                | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_seen                                         | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_miss                                         | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "expected_peer_id"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | expected_peer_id                                  | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    
    
    p2p_point.state (Determined from data, 8-bit tag)
    *************************************************
    
    Requested (tag 0)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Accepted (tag 1)
    ================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Running (tag 2)
    ===============
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Disconnected (tag 3)
    ====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------+----------------------------------+
    | Name            | Size     | Contents                         |
    +=================+==========+==================================+
    | Unnamed field 0 | 16 bytes | bytes                            |
    +-----------------+----------+----------------------------------+
    | Unnamed field 1 | 8 bytes  | signed 64-bit big-endian integer |
    +-----------------+----------+----------------------------------+
    
    </pre>
    </div>
  

.. _PUT_--network--points--point :

**PUT /network/points/<point>?[timeout=<timespan>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'PUT_--network--points--pointdescr', 'PUT_--network--points--point')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--network--points--pointinput.json', 'PUT_--network--points--point')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--network--points--pointinput.bin', 'PUT_--network--points--point')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--network--points--pointoutput.json', 'PUT_--network--points--point')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'PUT_--network--points--pointoutput.bin', 'PUT_--network--points--point')">Binary output</button>
    </div><div id="PUT_--network--points--pointdescr" class="PUT_--network--points--point tabcontent">
            <p>
            Connect to a peer</p> <p>Optional query arguments :<ul><li><span class="query">timeout = &lt;timespan&gt;</span></li></ul></p>
            </div>
  <div id="PUT_--network--points--pointinput.json" class="PUT_--network--points--point tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="PUT_--network--points--pointinput.bin" class="PUT_--network--points--point tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  <div id="PUT_--network--points--pointoutput.json" class="PUT_--network--points--point tabcontent">
    <pre>
    {  }</pre>
    </div>
  <div id="PUT_--network--points--pointoutput.bin" class="PUT_--network--points--point tabcontent">
    <pre>
    This value's binary representation is empty. It takes zero (0) bytes of output.
    </pre>
    </div>
  

.. _PATCH_--network--points--point :

**PATCH /network/points/<point>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'PATCH_--network--points--pointdescr', 'PATCH_--network--points--point')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--points--pointinput.json', 'PATCH_--network--points--point')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--points--pointinput.bin', 'PATCH_--network--points--point')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--points--pointoutput.json', 'PATCH_--network--points--point')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'PATCH_--network--points--pointoutput.bin', 'PATCH_--network--points--point')">Binary output</button>
    </div><div id="PATCH_--network--points--pointdescr" class="PATCH_--network--points--point tabcontent">
            <p>
            Change the connectivity state of a given `IP:addr`. With `{acl : ban}`: blacklist the given address and remove it from the whitelist if present. With `{acl: open}`: removes an address from the blacklist and whitelist. With `{acl: trust}`: trust a given address permanently and remove it from the blacklist if present. With `{peer_id: &lt;id&gt;}` set the peerId of the point. Connections from this address can still be closed on authentication if the peer is greylisted. </p>
            </div>
  <div id="PATCH_--network--points--pointinput.json" class="PATCH_--network--points--point tabcontent">
    <pre>
    { "acl"?: "open" | "trust" | "ban",
      "peer_id"?: $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="PATCH_--network--points--pointinput.bin" class="PATCH_--network--points--point tabcontent">
    <pre>
    +-------------------------------+----------+----------------------------------------------------------+
    | Name                          | Size     | Contents                                                 |
    +===============================+==========+==========================================================+
    | ? presence of field "acl"     | 1 byte   | boolean (0 for false, 255 for true)                      |
    +-------------------------------+----------+----------------------------------------------------------+
    | acl                           | 1 byte   | unsigned 8-bit integer encoding an enumeration (see X_0) |
    +-------------------------------+----------+----------------------------------------------------------+
    | ? presence of field "peer_id" | 1 byte   | boolean (0 for false, 255 for true)                      |
    +-------------------------------+----------+----------------------------------------------------------+
    | peer_id                       | 16 bytes | bytes                                                    |
    +-------------------------------+----------+----------------------------------------------------------+
    
    
    X_0 (Enumeration: unsigned 8-bit integer):
    ******************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | ban            |
    +-------------+----------------+
    | 1           | trust          |
    +-------------+----------------+
    | 2           | open           |
    +-------------+----------------+
    
    </pre>
    </div>
  <div id="PATCH_--network--points--pointoutput.json" class="PATCH_--network--points--point tabcontent">
    <pre>
    { /* Information about a peer point. Includes flags, state, and records
         about past events. */
      "trusted": boolean,
      "greylisted_until"?: $timestamp.system,
      "state": $p2p_point.state,
      "p2p_peer_id"?: $Crypto_box.Public_key_hash,
      "last_failed_connection"?: $timestamp.system,
      "last_rejected_connection"?:
        [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_established_connection"?:
        [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_disconnection"?: [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_seen"?: [ $Crypto_box.Public_key_hash, $timestamp.system ],
      "last_miss"?: $timestamp.system,
      "expected_peer_id"?: $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_point.state:
      /* The state a connection to a peer point can be in: requested
         (connection open from here), accepted (handshake), running (connection
         already established), disconnected (no connection). */
      { /* Requested */
        "event_kind": "requested" }
      || { /* Accepted */
           "event_kind": "accepted",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Running */
           "event_kind": "running",
           "p2p_peer_id": $Crypto_box.Public_key_hash }
      || { /* Disconnected */
           "event_kind": "disconnected" }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="PATCH_--network--points--pointoutput.bin" class="PATCH_--network--points--point tabcontent">
    <pre>
    +---------------------------------------------------+----------------------+-------------------------------------+
    | Name                                              | Size                 | Contents                            |
    +===================================================+======================+=====================================+
    | trusted                                           | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "greylisted_until"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | greylisted_until                                  | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | state                                             | Determined from data | $p2p_point.state                    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "p2p_peer_id"                 | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | p2p_peer_id                                       | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_failed_connection"      | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_failed_connection                            | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_rejected_connection"    | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_rejected_connection                          | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_established_connection" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_established_connection                       | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_disconnection"          | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_disconnection                                | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_seen"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_seen                                         | 24 bytes             | $X_0                                |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "last_miss"                   | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | last_miss                                         | 8 bytes              | signed 64-bit big-endian integer    |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "expected_peer_id"            | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------------------+----------------------+-------------------------------------+
    | expected_peer_id                                  | 16 bytes             | bytes                               |
    +---------------------------------------------------+----------------------+-------------------------------------+
    
    
    p2p_point.state (Determined from data, 8-bit tag)
    *************************************************
    
    Requested (tag 0)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Accepted (tag 1)
    ================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Running (tag 2)
    ===============
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Disconnected (tag 3)
    ====================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------+----------------------------------+
    | Name            | Size     | Contents                         |
    +=================+==========+==================================+
    | Unnamed field 0 | 16 bytes | bytes                            |
    +-----------------+----------+----------------------------------+
    | Unnamed field 1 | 8 bytes  | signed 64-bit big-endian integer |
    +-----------------+----------+----------------------------------+
    
    </pre>
    </div>
  

.. _GET_--network--points--point--banned :

**GET /network/points/<point>/banned**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--points--point--banneddescr', 'GET_--network--points--point--banned')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--point--bannedoutput.json', 'GET_--network--points--point--banned')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--point--bannedoutput.bin', 'GET_--network--points--point--banned')">Binary output</button>
    </div><div id="GET_--network--points--point--banneddescr" class="GET_--network--points--point--banned tabcontent">
            <p>
            Check if a given address is blacklisted or greylisted. Port component is unused.</p>
            </div>
  <div id="GET_--network--points--point--bannedoutput.json" class="GET_--network--points--point--banned tabcontent">
    <pre>
    boolean</pre>
    </div>
  <div id="GET_--network--points--point--bannedoutput.bin" class="GET_--network--points--point--banned tabcontent">
    <pre>
    +-----------------+--------+-------------------------------------+
    | Name            | Size   | Contents                            |
    +=================+========+=====================================+
    | Unnamed field 0 | 1 byte | boolean (0 for false, 255 for true) |
    +-----------------+--------+-------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--network--points--point--log :

**GET /network/points/<point>/log?[monitor]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--points--point--logdescr', 'GET_--network--points--point--log')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--point--logoutput.json', 'GET_--network--points--point--log')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--points--point--logoutput.bin', 'GET_--network--points--point--log')">Binary output</button>
    </div><div id="GET_--network--points--point--logdescr" class="GET_--network--points--point--log tabcontent">
            <p>
            Monitor network events related to an `IP:addr`.</p> <p>Optional query arguments :<ul><li><span class="query">monitor</span></li></ul></p>
            </div>
  <div id="GET_--network--points--point--logoutput.json" class="GET_--network--points--point--log tabcontent">
    <pre>
    [ $p2p_point.pool_event ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $p2p_point.pool_event:
      /* Events happening during maintenance of and operations on a peer point
         pool (such as connections, disconnections, connection requests). */
      [ $timestamp.system,
        { /* Outgoing_request */
          "event_kind": "outgoing_request" }
        || { /* Accepting_request */
             "event_kind": "accepting_request",
             "p2p_peer_id": $Crypto_box.Public_key_hash }
        || { /* Rejecting_request */
             "event_kind": "rejecting_request",
             "p2p_peer_id": $Crypto_box.Public_key_hash }
        || { /* Rejecting_rejected */
             "event_kind": "request_rejected",
             "p2p_peer_id"?: $Crypto_box.Public_key_hash }
        || { /* Connection_established */
             "event_kind": "rejecting_request",
             "p2p_peer_id": $Crypto_box.Public_key_hash }
        || { /* Disconnection */
             "event_kind": "rejecting_request",
             "p2p_peer_id": $Crypto_box.Public_key_hash }
        || { /* External_disconnection */
             "event_kind": "rejecting_request",
             "p2p_peer_id": $Crypto_box.Public_key_hash } ]
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--points--point--logoutput.bin" class="GET_--network--points--point--log tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $p2p_point.pool_event  |
    +-----------------------+----------+------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Outgoing_request (tag 0)
    ========================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Accepting_request (tag 1)
    =========================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Rejecting_request (tag 2)
    =========================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Rejecting_rejected (tag 3)
    ==========================
    
    +-----------------------------------+----------+-------------------------------------+
    | Name                              | Size     | Contents                            |
    +===================================+==========+=====================================+
    | Tag                               | 1 byte   | unsigned 8-bit integer              |
    +-----------------------------------+----------+-------------------------------------+
    | ? presence of field "p2p_peer_id" | 1 byte   | boolean (0 for false, 255 for true) |
    +-----------------------------------+----------+-------------------------------------+
    | p2p_peer_id                       | 16 bytes | bytes                               |
    +-----------------------------------+----------+-------------------------------------+
    
    
    Connection_established (tag 4)
    ==============================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    Disconnection (tag 5)
    =====================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    External_disconnection (tag 6)
    ==============================
    
    +-------------+----------+------------------------+
    | Name        | Size     | Contents               |
    +=============+==========+========================+
    | Tag         | 1 byte   | unsigned 8-bit integer |
    +-------------+----------+------------------------+
    | p2p_peer_id | 16 bytes | bytes                  |
    +-------------+----------+------------------------+
    
    
    p2p_point.pool_event
    ********************
    
    +-----------------+----------------------+----------------------------------+
    | Name            | Size                 | Contents                         |
    +=================+======================+==================================+
    | Unnamed field 0 | 8 bytes              | signed 64-bit big-endian integer |
    +-----------------+----------------------+----------------------------------+
    | Unnamed field 1 | Determined from data | $X_0                             |
    +-----------------+----------------------+----------------------------------+
    
    </pre>
    </div>
  


.. _GET_--network--self :

**GET /network/self**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--selfdescr', 'GET_--network--self')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--selfoutput.json', 'GET_--network--self')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--selfoutput.bin', 'GET_--network--self')">Binary output</button>
    </div><div id="GET_--network--selfdescr" class="GET_--network--self tabcontent">
            <p>
            Return the node's peer id</p>
            </div>
  <div id="GET_--network--selfoutput.json" class="GET_--network--self tabcontent">
    <pre>
    $unistring
    /* A Cryptobox public key ID (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--network--selfoutput.bin" class="GET_--network--self tabcontent">
    <pre>
    +----------------------------+----------+----------+
    | Name                       | Size     | Contents |
    +============================+==========+==========+
    | Crypto_box.Public_key_hash | 16 bytes | bytes    |
    +----------------------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _GET_--network--stat :

**GET /network/stat**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--network--statdescr', 'GET_--network--stat')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--statoutput.json', 'GET_--network--stat')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--network--statoutput.bin', 'GET_--network--stat')">Binary output</button>
    </div><div id="GET_--network--statdescr" class="GET_--network--stat tabcontent">
            <p>
            Global network bandwidth statistics in B/s.</p>
            </div>
  <div id="GET_--network--statoutput.json" class="GET_--network--stat tabcontent">
    <pre>
    { /* Statistics about the p2p network. */
      "total_sent": $int64,
      "total_recv": $int64,
      "current_inflow": integer ∈ [-2^30, 2^30],
      "current_outflow": integer ∈ [-2^30, 2^30] }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>
  <div id="GET_--network--statoutput.bin" class="GET_--network--stat tabcontent">
    <pre>
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | total_sent      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | total_recv      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_inflow  | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    | current_outflow | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    </pre>
    </div>
  


.. _POST_--private--injection--operation :

**POST /private/injection/operation?[async]&[chain=<chain_id>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'POST_--private--injection--operationdescr', 'POST_--private--injection--operation')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationinput.json', 'POST_--private--injection--operation')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationinput.bin', 'POST_--private--injection--operation')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationoutput.json', 'POST_--private--injection--operation')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationoutput.bin', 'POST_--private--injection--operation')">Binary output</button>
    </div><div id="POST_--private--injection--operationdescr" class="POST_--private--injection--operation tabcontent">
            <p>
            Inject an operation in node and broadcast it. Returns the ID of the operation. The `signedOperationContents` should be constructed using contextual RPCs from the latest block and signed by the client. The injection of the operation will apply it on the current mempool context. This context may change at each operation injection or operation reception from peers. By default, the RPC will wait for the operation to be (pre-)validated before returning. However, if ?async is true, the function returns immediately. The optional ?chain parameter can be used to specify whether to inject on the test chain or the main chain.</p> <p>Optional query arguments :<ul><li><span class="query">async</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="POST_--private--injection--operationinput.json" class="POST_--private--injection--operation tabcontent">
    <pre>
    /^([a-zA-Z0-9][a-zA-Z0-9])*$/</pre>
    </div>
  <div id="POST_--private--injection--operationinput.bin" class="POST_--private--injection--operation tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  <div id="POST_--private--injection--operationoutput.json" class="POST_--private--injection--operation tabcontent">
    <pre>
    $unistring
    /* A Tezos operation ID (Base58Check-encoded) */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--private--injection--operationoutput.bin" class="POST_--private--injection--operation tabcontent">
    <pre>
    +----------------+----------+----------+
    | Name           | Size     | Contents |
    +================+==========+==========+
    | Operation_hash | 32 bytes | bytes    |
    +----------------+----------+----------+
    
    
    </pre>
    </div>
  


.. _POST_--private--injection--operations :

**POST /private/injection/operations?[async]&[force]&[chain=<chain_id>]**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'POST_--private--injection--operationsdescr', 'POST_--private--injection--operations')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationsinput.json', 'POST_--private--injection--operations')">Json input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationsinput.bin', 'POST_--private--injection--operations')">Binary input</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationsoutput.json', 'POST_--private--injection--operations')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'POST_--private--injection--operationsoutput.bin', 'POST_--private--injection--operations')">Binary output</button>
    </div><div id="POST_--private--injection--operationsdescr" class="POST_--private--injection--operations tabcontent">
            <p>
            Inject a list of operations in a node. If [force] is [true] then the operations are immediatly injected. The injection will succeed, but it does not mean the operations are (all) valid. In any case, the injection will be quick, hence [async] will be taken into account but should have almost no impact. If [async] is [true], all the promises returned by injecting an operation will be dropped. Each injection is done independently, and does not depend on the other injected operations result. Otherwise ([async]=[force]=[false]), for each operation, we record a list of promises. If all the injections succeed, the result is the list of operation hashes injected, otherwise an error ("injection_operations_error") is returned. This error is followed by markers for each operation: "injection_operation_succeed" for success and "injection_operation_error" for failure (followed by the errors specific to this injection).</p> <p>Optional query arguments :<ul><li><span class="query">async</span></li><li><span class="query">force</span></li><li><span class="query">chain = &lt;chain_id&gt;</span></li></ul></p>
            </div>
  <div id="POST_--private--injection--operationsinput.json" class="POST_--private--injection--operations tabcontent">
    <pre>
    [ /^([a-zA-Z0-9][a-zA-Z0-9])*$/ ... ]</pre>
    </div>
  <div id="POST_--private--injection--operationsinput.bin" class="POST_--private--injection--operations tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | # bytes in next 2 fields | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | # bytes in next field    | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | Unnamed field 0          | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    </pre>
    </div>
  <div id="POST_--private--injection--operationsoutput.json" class="POST_--private--injection--operations tabcontent">
    <pre>
    [ $Operation_hash ... ]
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="POST_--private--injection--operationsoutput.bin" class="POST_--private--injection--operations tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of bytes                  |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--protocols :

**GET /protocols**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--protocolsdescr', 'GET_--protocols')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocolsoutput.json', 'GET_--protocols')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocolsoutput.bin', 'GET_--protocols')">Binary output</button>
    </div><div id="GET_--protocolsdescr" class="GET_--protocols tabcontent">
            <p>
            </p>
            </div>
  <div id="GET_--protocolsoutput.json" class="GET_--protocols tabcontent">
    <pre>
    [ $Protocol_hash ... ]
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--protocolsoutput.bin" class="GET_--protocols tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of bytes                  |
    +-----------------------+----------+------------------------------------+
    
    
    </pre>
    </div>
  

.. _GET_--protocols--Protocol_hash :

**GET /protocols/<Protocol_hash>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--protocols--Protocol_hashdescr', 'GET_--protocols--Protocol_hash')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocols--Protocol_hashoutput.json', 'GET_--protocols--Protocol_hash')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocols--Protocol_hashoutput.bin', 'GET_--protocols--Protocol_hash')">Binary output</button>
    </div><div id="GET_--protocols--Protocol_hashdescr" class="GET_--protocols--Protocol_hash tabcontent">
            <p>
            </p>
            </div>
  <div id="GET_--protocols--Protocol_hashoutput.json" class="GET_--protocols--Protocol_hash tabcontent">
    <pre>
    { /* The environment a protocol relies on and the components a protocol is
         made of. */
      "expected_env_version": $protocol.environment_version,
      "components":
        [ { "name": $unistring,
            "interface"?: $unistring,
            "implementation": $unistring } ... ] }
    $protocol.environment_version: integer ∈ [0, 2^16-1]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--protocols--Protocol_hashoutput.bin" class="GET_--protocols--Protocol_hash tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | expected_env_version  | 2 bytes  | unsigned 16-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | components            | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    
    X_0
    ***
    
    +---------------------------------+----------------------+-------------------------------------+
    | Name                            | Size                 | Contents                            |
    +=================================+======================+=====================================+
    | # bytes in next field           | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------+----------------------+-------------------------------------+
    | name                            | Variable             | bytes                               |
    +---------------------------------+----------------------+-------------------------------------+
    | ? presence of field "interface" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------+----------------------+-------------------------------------+
    | interface                       | Determined from data | $X_1                                |
    +---------------------------------+----------------------+-------------------------------------+
    | # bytes in next field           | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------+----------------------+-------------------------------------+
    | implementation                  | Variable             | bytes                               |
    +---------------------------------+----------------------+-------------------------------------+
    
    </pre>
    </div>
  

.. _GET_--protocols--Protocol_hash--environment :

**GET /protocols/<Protocol_hash>/environment**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--protocols--Protocol_hash--environmentdescr', 'GET_--protocols--Protocol_hash--environment')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocols--Protocol_hash--environmentoutput.json', 'GET_--protocols--Protocol_hash--environment')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--protocols--Protocol_hash--environmentoutput.bin', 'GET_--protocols--Protocol_hash--environment')">Binary output</button>
    </div><div id="GET_--protocols--Protocol_hash--environmentdescr" class="GET_--protocols--Protocol_hash--environment tabcontent">
            <p>
            </p>
            </div>
  <div id="GET_--protocols--Protocol_hash--environmentoutput.json" class="GET_--protocols--Protocol_hash--environment tabcontent">
    <pre>
    integer ∈ [0, 2^16-1]</pre>
    </div>
  <div id="GET_--protocols--Protocol_hash--environmentoutput.bin" class="GET_--protocols--Protocol_hash--environment tabcontent">
    <pre>
    +-----------------+---------+------------------------------------+
    | Name            | Size    | Contents                           |
    +=================+=========+====================================+
    | Unnamed field 0 | 2 bytes | unsigned 16-bit big-endian integer |
    +-----------------+---------+------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--stats--gc :

**GET /stats/gc**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--stats--gcdescr', 'GET_--stats--gc')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--stats--gcoutput.json', 'GET_--stats--gc')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--stats--gcoutput.bin', 'GET_--stats--gc')">Binary output</button>
    </div><div id="GET_--stats--gcdescr" class="GET_--stats--gc tabcontent">
            <p>
            Gets stats from the OCaml Garbage Collector</p>
            </div>
  <div id="GET_--stats--gcoutput.json" class="GET_--stats--gc tabcontent">
    <pre>
    { "minor_words": number,
      "promoted_words": number,
      "major_words": number,
      "minor_collections": integer ∈ [-2^30, 2^30],
      "major_collections": integer ∈ [-2^30, 2^30],
      "forced_major_collections": integer ∈ [-2^30, 2^30],
      "heap_words": integer ∈ [-2^30, 2^30],
      "heap_chunks": integer ∈ [-2^30, 2^30],
      "live_words": integer ∈ [-2^30, 2^30],
      "live_blocks": integer ∈ [-2^30, 2^30],
      "free_words": integer ∈ [-2^30, 2^30],
      "free_blocks": integer ∈ [-2^30, 2^30],
      "largest_free": integer ∈ [-2^30, 2^30],
      "fragments": integer ∈ [-2^30, 2^30],
      "compactions": integer ∈ [-2^30, 2^30],
      "top_heap_words": integer ∈ [-2^30, 2^30],
      "stack_size": integer ∈ [-2^30, 2^30] }</pre>
    </div>
  <div id="GET_--stats--gcoutput.bin" class="GET_--stats--gc tabcontent">
    <pre>
    +--------------------------+---------+-------------------------------------------------------------------------+
    | Name                     | Size    | Contents                                                                |
    +==========================+=========+=========================================================================+
    | minor_words              | 8 bytes | double-precision floating-point number                                  |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | promoted_words           | 8 bytes | double-precision floating-point number                                  |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | major_words              | 8 bytes | double-precision floating-point number                                  |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | minor_collections        | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | major_collections        | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | forced_major_collections | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | heap_words               | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | heap_chunks              | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | live_words               | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | live_blocks              | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | free_words               | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | free_blocks              | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | largest_free             | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | fragments                | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | compactions              | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | top_heap_words           | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    | stack_size               | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------------+---------+-------------------------------------------------------------------------+
    
    
    </pre>
    </div>
  


.. _GET_--stats--memory :

**GET /stats/memory**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--stats--memorydescr', 'GET_--stats--memory')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--stats--memoryoutput.json', 'GET_--stats--memory')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--stats--memoryoutput.bin', 'GET_--stats--memory')">Binary output</button>
    </div><div id="GET_--stats--memorydescr" class="GET_--stats--memory tabcontent">
            <p>
            Gets memory usage stats</p>
            </div>
  <div id="GET_--stats--memoryoutput.json" class="GET_--stats--memory tabcontent">
    <pre>
    { /* Linux_proc_statm */
      "page_size": integer ∈ [-2^30, 2^30],
      "size": $int64,
      "resident": $int64,
      "shared": $int64,
      "text": $int64,
      "lib": $int64,
      "data": $int64,
      "dt": $int64 }
    || { /* Darwin_ps */
         "page_size": integer ∈ [-2^30, 2^30],
         "mem": number,
         "resident": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>
  <div id="GET_--stats--memoryoutput.bin" class="GET_--stats--memory tabcontent">
    <pre>
    +-----------------+----------------------+----------+
    | Name            | Size                 | Contents |
    +=================+======================+==========+
    | Unnamed field 0 | Determined from data | $X_0     |
    +-----------------+----------------------+----------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Linux_proc_statm (tag 0)
    ========================
    
    +-----------+---------+-------------------------------------------------------------------------+
    | Name      | Size    | Contents                                                                |
    +===========+=========+=========================================================================+
    | Tag       | 1 byte  | unsigned 8-bit integer                                                  |
    +-----------+---------+-------------------------------------------------------------------------+
    | page_size | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------+---------+-------------------------------------------------------------------------+
    | size      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | resident  | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | shared    | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | text      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | lib       | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | data      | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    | dt        | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    
    
    Darwin_ps (tag 1)
    =================
    
    +-----------+---------+-------------------------------------------------------------------------+
    | Name      | Size    | Contents                                                                |
    +===========+=========+=========================================================================+
    | Tag       | 1 byte  | unsigned 8-bit integer                                                  |
    +-----------+---------+-------------------------------------------------------------------------+
    | page_size | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------+---------+-------------------------------------------------------------------------+
    | mem       | 8 bytes | double-precision floating-point number                                  |
    +-----------+---------+-------------------------------------------------------------------------+
    | resident  | 8 bytes | signed 64-bit big-endian integer                                        |
    +-----------+---------+-------------------------------------------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--version :

**GET /version**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--versiondescr', 'GET_--version')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--versionoutput.json', 'GET_--version')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--versionoutput.bin', 'GET_--version')">Binary output</button>
    </div><div id="GET_--versiondescr" class="GET_--version tabcontent">
            <p>
            Get information on the node version</p>
            </div>
  <div id="GET_--versionoutput.json" class="GET_--version tabcontent">
    <pre>
    { "version":
        { "major": integer ∈ [-2^30, 2^30],
          "minor": integer ∈ [-2^30, 2^30],
          "additional_info":
            "dev"
            || { /* RC */
                 "rc": integer ∈ [-2^30, 2^30] }
            || "release"
            || { /* RC_dev */
                 "rc_dev": integer ∈ [-2^30, 2^30] }
            || { /* Beta */
                 "beta": integer ∈ [-2^30, 2^30] }
            || { /* Beta_dev */
                 "beta_dev": integer ∈ [-2^30, 2^30] } },
      "network_version": $network_version,
      "commit_info":
        { /* Some */
          "commit_hash": $unistring,
          "commit_date": $unistring }
        || null
        /* None */ }
    $distributed_db_version:
      /* A version number for the distributed DB protocol */
      integer ∈ [0, 2^16-1]
    $distributed_db_version.name:
      /* A name for the distributed DB protocol */
      $unistring
    $network_version:
      /* A version number for the network protocol (includes distributed DB
         version and p2p version) */
      { "chain_name": $distributed_db_version.name,
        "distributed_db_version": $distributed_db_version,
        "p2p_version": $p2p_version }
    $p2p_version:
      /* A version number for the p2p layer. */
      integer ∈ [0, 2^16-1]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--versionoutput.bin" class="GET_--version tabcontent">
    <pre>
    +-----------------+----------------------+------------------+
    | Name            | Size                 | Contents         |
    +=================+======================+==================+
    | version         | Determined from data | $X_0             |
    +-----------------+----------------------+------------------+
    | network_version | Determined from data | $network_version |
    +-----------------+----------------------+------------------+
    | commit_info     | Determined from data | $X_2             |
    +-----------------+----------------------+------------------+
    
    
    X_1 (Determined from data, 8-bit tag)
    *************************************
    
    Dev (tag 0)
    ===========
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    RC (tag 1)
    ==========
    
    +------+---------+-------------------------------------------------------------------------+
    | Name | Size    | Contents                                                                |
    +======+=========+=========================================================================+
    | Tag  | 1 byte  | unsigned 8-bit integer                                                  |
    +------+---------+-------------------------------------------------------------------------+
    | rc   | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +------+---------+-------------------------------------------------------------------------+
    
    
    Release (tag 2)
    ===============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    RC_dev (tag 3)
    ==============
    
    +--------+---------+-------------------------------------------------------------------------+
    | Name   | Size    | Contents                                                                |
    +========+=========+=========================================================================+
    | Tag    | 1 byte  | unsigned 8-bit integer                                                  |
    +--------+---------+-------------------------------------------------------------------------+
    | rc_dev | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------+---------+-------------------------------------------------------------------------+
    
    
    Beta (tag 4)
    ============
    
    +------+---------+-------------------------------------------------------------------------+
    | Name | Size    | Contents                                                                |
    +======+=========+=========================================================================+
    | Tag  | 1 byte  | unsigned 8-bit integer                                                  |
    +------+---------+-------------------------------------------------------------------------+
    | beta | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +------+---------+-------------------------------------------------------------------------+
    
    
    Beta_dev (tag 5)
    ================
    
    +----------+---------+-------------------------------------------------------------------------+
    | Name     | Size    | Contents                                                                |
    +==========+=========+=========================================================================+
    | Tag      | 1 byte  | unsigned 8-bit integer                                                  |
    +----------+---------+-------------------------------------------------------------------------+
    | beta_dev | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +----------+---------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-----------------+----------------------+-------------------------------------------------------------------------+
    | Name            | Size                 | Contents                                                                |
    +=================+======================+=========================================================================+
    | major           | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+----------------------+-------------------------------------------------------------------------+
    | minor           | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+----------------------+-------------------------------------------------------------------------+
    | additional_info | Determined from data | $X_1                                                                    |
    +-----------------+----------------------+-------------------------------------------------------------------------+
    
    
    network_version
    ***************
    
    +------------------------------------------------+----------+------------------------------------+
    | Name                                           | Size     | Contents                           |
    +================================================+==========+====================================+
    | # bytes in field "distributed_db_version.name" | 4 bytes  | unsigned 30-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | chain_name                                     | Variable | bytes                              |
    +------------------------------------------------+----------+------------------------------------+
    | distributed_db_version                         | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    | p2p_version                                    | 2 bytes  | unsigned 16-bit big-endian integer |
    +------------------------------------------------+----------+------------------------------------+
    
    
    X_2 (Determined from data, 8-bit tag)
    *************************************
    
    None (tag 0)
    ============
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Some (tag 1)
    ============
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | Tag                   | 1 byte   | unsigned 8-bit integer             |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | commit_hash           | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | commit_date           | Variable | bytes                              |
    +-----------------------+----------+------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--workers--block_validator :

**GET /workers/block_validator**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--block_validatordescr', 'GET_--workers--block_validator')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--block_validatoroutput.json', 'GET_--workers--block_validator')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--block_validatoroutput.bin', 'GET_--workers--block_validator')">Binary output</button>
    </div><div id="GET_--workers--block_validatordescr" class="GET_--workers--block_validator tabcontent">
            <p>
            Introspect the state of the block_validator worker.</p>
            </div>
  <div id="GET_--workers--block_validatoroutput.json" class="GET_--workers--block_validator tabcontent">
    <pre>
    { "status":
        { /* Launching */
          "phase": "launching",
          "since": $timestamp.system }
        || { /* Running */
             "phase": "running",
             "since": $timestamp.system }
        || { /* Closing */
             "phase": "closing",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Closed */
             "phase": "closed",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Crashed */
             "phase": "crashed",
             "birth": $timestamp.system,
             "since": $timestamp.system,
             "errors": $error },
      "pending_requests":
        [ { "pushed": $timestamp.system,
            "request":
              { /* validation */
                "block": $block_hash,
                "chain_id": $Chain_id,
                "peer"?: $Crypto_box.Public_key_hash }
              || { /* preapplication */
                   "chain_id": $Chain_id,
                   "level": integer ∈ [-2^31-1, 2^31] } } ... ],
      "current_request"?:
        { "pushed": $timestamp.system,
          "treated": $timestamp.system,
          "request":
            { /* validation */
              "block": $block_hash,
              "chain_id": $Chain_id,
              "peer"?: $Crypto_box.Public_key_hash }
            || { /* preapplication */
                 "chain_id": $Chain_id,
                 "level": integer ∈ [-2^31-1, 2^31] } } }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--block_validatoroutput.bin" class="GET_--workers--block_validator tabcontent">
    <pre>
    +---------------------------------------+----------------------+-------------------------------------+
    | Name                                  | Size                 | Contents                            |
    +=======================================+======================+=====================================+
    | status                                | Determined from data | $X_0                                |
    +---------------------------------------+----------------------+-------------------------------------+
    | # bytes in next field                 | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------------+----------------------+-------------------------------------+
    | pending_requests                      | Variable             | sequence of $X_1                    |
    +---------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "current_request" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------+----------------------+-------------------------------------+
    | current_request                       | Determined from data | $X_3                                |
    +---------------------------------------+----------------------+-------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2 (Determined from data, 8-bit tag)
    *************************************
    
    validation (tag 0)
    ==================
    
    +----------------------------+----------+-------------------------------------+
    | Name                       | Size     | Contents                            |
    +============================+==========+=====================================+
    | Tag                        | 1 byte   | unsigned 8-bit integer              |
    +----------------------------+----------+-------------------------------------+
    | block                      | 32 bytes | bytes                               |
    +----------------------------+----------+-------------------------------------+
    | chain_id                   | 4 bytes  | bytes                               |
    +----------------------------+----------+-------------------------------------+
    | ? presence of field "peer" | 1 byte   | boolean (0 for false, 255 for true) |
    +----------------------------+----------+-------------------------------------+
    | peer                       | 16 bytes | bytes                               |
    +----------------------------+----------+-------------------------------------+
    
    
    preapplication (tag 1)
    ======================
    
    +----------+---------+----------------------------------+
    | Name     | Size    | Contents                         |
    +==========+=========+==================================+
    | Tag      | 1 byte  | unsigned 8-bit integer           |
    +----------+---------+----------------------------------+
    | chain_id | 4 bytes | bytes                            |
    +----------+---------+----------------------------------+
    | level    | 4 bytes | signed 32-bit big-endian integer |
    +----------+---------+----------------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | pushed                | 8 bytes              | signed 64-bit big-endian integer   |
    +-----------------------+----------------------+------------------------------------+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | request               | Determined from data | $X_2                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    X_3
    ***
    
    +---------+----------------------+----------------------------------+
    | Name    | Size                 | Contents                         |
    +=========+======================+==================================+
    | pushed  | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | treated | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | request | Determined from data | $X_2                             |
    +---------+----------------------+----------------------------------+
    
    </pre>
    </div>
  


.. _GET_--workers--chain_validators :

**GET /workers/chain_validators**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--chain_validatorsdescr', 'GET_--workers--chain_validators')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validatorsoutput.json', 'GET_--workers--chain_validators')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validatorsoutput.bin', 'GET_--workers--chain_validators')">Binary output</button>
    </div><div id="GET_--workers--chain_validatorsdescr" class="GET_--workers--chain_validators tabcontent">
            <p>
            Lists the chain validator workers and their status.</p>
            </div>
  <div id="GET_--workers--chain_validatorsoutput.json" class="GET_--workers--chain_validators tabcontent">
    <pre>
    [ { "chain_id": $Chain_id,
        "status":
          { /* Launching */
            "phase": "launching",
            "since": $timestamp.system }
          || { /* Running */
               "phase": "running",
               "since": $timestamp.system }
          || { /* Closing */
               "phase": "closing",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Closed */
               "phase": "closed",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Crashed */
               "phase": "crashed",
               "birth": $timestamp.system,
               "since": $timestamp.system,
               "errors": $error },
        "information":
          { "instances": integer ∈ [-2^30, 2^30],
            "status":
              { /* Launching */
                "phase": "launching",
                "since": $timestamp.system }
              || { /* Running */
                   "phase": "running",
                   "since": $timestamp.system }
              || { /* Closing */
                   "phase": "closing",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Closed */
                   "phase": "closed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Crashed */
                   "phase": "crashed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system,
                   "errors": $error },
            "queue_length": integer ∈ [-2^30, 2^30] },
        "pipelines": integer ∈ [-2^15, 2^15-1] } ... ]
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--chain_validatorsoutput.bin" class="GET_--workers--chain_validators tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2
    ***
    
    +--------------+----------------------+-------------------------------------------------------------------------+
    | Name         | Size                 | Contents                                                                |
    +==============+======================+=========================================================================+
    | instances    | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | status       | Determined from data | $X_1                                                                    |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | queue_length | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-------------+----------------------+----------------------------------+
    | Name        | Size                 | Contents                         |
    +=============+======================+==================================+
    | chain_id    | 4 bytes              | bytes                            |
    +-------------+----------------------+----------------------------------+
    | status      | Determined from data | $X_1                             |
    +-------------+----------------------+----------------------------------+
    | information | Determined from data | $X_2                             |
    +-------------+----------------------+----------------------------------+
    | pipelines   | 2 bytes              | signed 16-bit big-endian integer |
    +-------------+----------------------+----------------------------------+
    
    </pre>
    </div>
  

.. _GET_--workers--chain_validators--chain_id :

**GET /workers/chain_validators/<chain_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--chain_validators--chain_iddescr', 'GET_--workers--chain_validators--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_idoutput.json', 'GET_--workers--chain_validators--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_idoutput.bin', 'GET_--workers--chain_validators--chain_id')">Binary output</button>
    </div><div id="GET_--workers--chain_validators--chain_iddescr" class="GET_--workers--chain_validators--chain_id tabcontent">
            <p>
            Introspect the state of a chain validator worker.</p>
            </div>
  <div id="GET_--workers--chain_validators--chain_idoutput.json" class="GET_--workers--chain_validators--chain_id tabcontent">
    <pre>
    { "status":
        { /* Launching */
          "phase": "launching",
          "since": $timestamp.system }
        || { /* Running */
             "phase": "running",
             "since": $timestamp.system }
        || { /* Closing */
             "phase": "closing",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Closed */
             "phase": "closed",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Crashed */
             "phase": "crashed",
             "birth": $timestamp.system,
             "since": $timestamp.system,
             "errors": $error },
      "pending_requests":
        [ { "pushed": $timestamp.system,
            "request":
              { /* Hash */
                "hash": $block_hash }
              || { /* Peer_id */
                   "peer_id": $Crypto_box.Public_key_hash } } ... ],
      "current_request"?:
        { "pushed": $timestamp.system,
          "treated": $timestamp.system,
          "request":
            { /* Hash */
              "hash": $block_hash }
            || { /* Peer_id */
                 "peer_id": $Crypto_box.Public_key_hash } } }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--chain_validators--chain_idoutput.bin" class="GET_--workers--chain_validators--chain_id tabcontent">
    <pre>
    +---------------------------------------+----------------------+-------------------------------------+
    | Name                                  | Size                 | Contents                            |
    +=======================================+======================+=====================================+
    | status                                | Determined from data | $X_0                                |
    +---------------------------------------+----------------------+-------------------------------------+
    | # bytes in next field                 | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------------+----------------------+-------------------------------------+
    | pending_requests                      | Variable             | sequence of $X_1                    |
    +---------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "current_request" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------+----------------------+-------------------------------------+
    | current_request                       | Determined from data | $X_3                                |
    +---------------------------------------+----------------------+-------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2 (Determined from data, 8-bit tag)
    *************************************
    
    Hash (tag 0)
    ============
    
    +------+----------+------------------------+
    | Name | Size     | Contents               |
    +======+==========+========================+
    | Tag  | 1 byte   | unsigned 8-bit integer |
    +------+----------+------------------------+
    | hash | 32 bytes | bytes                  |
    +------+----------+------------------------+
    
    
    Peer_id (tag 1)
    ===============
    
    +---------+----------+------------------------+
    | Name    | Size     | Contents               |
    +=========+==========+========================+
    | Tag     | 1 byte   | unsigned 8-bit integer |
    +---------+----------+------------------------+
    | peer_id | 16 bytes | bytes                  |
    +---------+----------+------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | pushed                | 8 bytes              | signed 64-bit big-endian integer   |
    +-----------------------+----------------------+------------------------------------+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | request               | Determined from data | $X_2                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    X_3
    ***
    
    +---------+----------------------+----------------------------------+
    | Name    | Size                 | Contents                         |
    +=========+======================+==================================+
    | pushed  | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | treated | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | request | Determined from data | $X_2                             |
    +---------+----------------------+----------------------------------+
    
    </pre>
    </div>
  

.. _GET_--workers--chain_validators--chain_id--ddb :

**GET /workers/chain_validators/<chain_id>/ddb**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--ddbdescr', 'GET_--workers--chain_validators--chain_id--ddb')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--ddboutput.json', 'GET_--workers--chain_validators--chain_id--ddb')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--ddboutput.bin', 'GET_--workers--chain_validators--chain_id--ddb')">Binary output</button>
    </div><div id="GET_--workers--chain_validators--chain_id--ddbdescr" class="GET_--workers--chain_validators--chain_id--ddb tabcontent">
            <p>
            Introspect the state of the DDB attached to a chain validator worker.</p>
            </div>
  <div id="GET_--workers--chain_validators--chain_id--ddboutput.json" class="GET_--workers--chain_validators--chain_id--ddb tabcontent">
    <pre>
    { "p2p_readers": integer ∈ [-2^30, 2^30],
      "active_chains": integer ∈ [-2^30, 2^30],
      "operation_db":
        { "table_length": integer ∈ [-2^30, 2^30],
          "scheduler_length": integer ∈ [-2^30, 2^30] },
      "operations_db":
        { "table_length": integer ∈ [-2^30, 2^30],
          "scheduler_length": integer ∈ [-2^30, 2^30] },
      "block_header_db":
        { "table_length": integer ∈ [-2^30, 2^30],
          "scheduler_length": integer ∈ [-2^30, 2^30] },
      "active_connections": integer ∈ [-2^30, 2^30],
      "active_peers": integer ∈ [-2^30, 2^30] }</pre>
    </div>
  <div id="GET_--workers--chain_validators--chain_id--ddboutput.bin" class="GET_--workers--chain_validators--chain_id--ddb tabcontent">
    <pre>
    +--------------------+---------+-------------------------------------------------------------------------+
    | Name               | Size    | Contents                                                                |
    +====================+=========+=========================================================================+
    | p2p_readers        | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------+---------+-------------------------------------------------------------------------+
    | active_chains      | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------+---------+-------------------------------------------------------------------------+
    | operation_db       | 8 bytes | $X_0                                                                    |
    +--------------------+---------+-------------------------------------------------------------------------+
    | operations_db      | 8 bytes | $X_0                                                                    |
    +--------------------+---------+-------------------------------------------------------------------------+
    | block_header_db    | 8 bytes | $X_0                                                                    |
    +--------------------+---------+-------------------------------------------------------------------------+
    | active_connections | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------+---------+-------------------------------------------------------------------------+
    | active_peers       | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------------+---------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +------------------+---------+-------------------------------------------------------------------------+
    | Name             | Size    | Contents                                                                |
    +==================+=========+=========================================================================+
    | table_length     | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +------------------+---------+-------------------------------------------------------------------------+
    | scheduler_length | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +------------------+---------+-------------------------------------------------------------------------+
    
    </pre>
    </div>
  


.. _GET_--workers--chain_validators--chain_id--peers_validators :

**GET /workers/chain_validators/<chain_id>/peers_validators**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validatorsdescr', 'GET_--workers--chain_validators--chain_id--peers_validators')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validatorsoutput.json', 'GET_--workers--chain_validators--chain_id--peers_validators')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validatorsoutput.bin', 'GET_--workers--chain_validators--chain_id--peers_validators')">Binary output</button>
    </div><div id="GET_--workers--chain_validators--chain_id--peers_validatorsdescr" class="GET_--workers--chain_validators--chain_id--peers_validators tabcontent">
            <p>
            Lists the peer validator workers and their status.</p>
            </div>
  <div id="GET_--workers--chain_validators--chain_id--peers_validatorsoutput.json" class="GET_--workers--chain_validators--chain_id--peers_validators tabcontent">
    <pre>
    [ { "peer_id": $Crypto_box.Public_key_hash,
        "status":
          { /* Launching */
            "phase": "launching",
            "since": $timestamp.system }
          || { /* Running */
               "phase": "running",
               "since": $timestamp.system }
          || { /* Closing */
               "phase": "closing",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Closed */
               "phase": "closed",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Crashed */
               "phase": "crashed",
               "birth": $timestamp.system,
               "since": $timestamp.system,
               "errors": $error },
        "information":
          { "instances": integer ∈ [-2^30, 2^30],
            "status":
              { /* Launching */
                "phase": "launching",
                "since": $timestamp.system }
              || { /* Running */
                   "phase": "running",
                   "since": $timestamp.system }
              || { /* Closing */
                   "phase": "closing",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Closed */
                   "phase": "closed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Crashed */
                   "phase": "crashed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system,
                   "errors": $error },
            "queue_length": integer ∈ [-2^30, 2^30] },
        "pipelines":
          { "fetched_headers": integer ∈ [-2^30, 2^30],
            "fetched_blocks": integer ∈ [-2^30, 2^30] } } ... ]
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--chain_validators--chain_id--peers_validatorsoutput.bin" class="GET_--workers--chain_validators--chain_id--peers_validators tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2
    ***
    
    +--------------+----------------------+-------------------------------------------------------------------------+
    | Name         | Size                 | Contents                                                                |
    +==============+======================+=========================================================================+
    | instances    | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | status       | Determined from data | $X_1                                                                    |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | queue_length | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    
    
    X_4
    ***
    
    +-----------------+---------+-------------------------------------------------------------------------+
    | Name            | Size    | Contents                                                                |
    +=================+=========+=========================================================================+
    | fetched_headers | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    | fetched_blocks  | 4 bytes | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +-----------------+---------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-------------+----------------------+----------+
    | Name        | Size                 | Contents |
    +=============+======================+==========+
    | peer_id     | 16 bytes             | bytes    |
    +-------------+----------------------+----------+
    | status      | Determined from data | $X_1     |
    +-------------+----------------------+----------+
    | information | Determined from data | $X_2     |
    +-------------+----------------------+----------+
    | pipelines   | 8 bytes              | $X_4     |
    +-------------+----------------------+----------+
    
    </pre>
    </div>
  

.. _GET_--workers--chain_validators--chain_id--peers_validators--peer_id :

**GET /workers/chain_validators/<chain_id>/peers_validators/<peer_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validators--peer_iddescr', 'GET_--workers--chain_validators--chain_id--peers_validators--peer_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validators--peer_idoutput.json', 'GET_--workers--chain_validators--chain_id--peers_validators--peer_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--chain_validators--chain_id--peers_validators--peer_idoutput.bin', 'GET_--workers--chain_validators--chain_id--peers_validators--peer_id')">Binary output</button>
    </div><div id="GET_--workers--chain_validators--chain_id--peers_validators--peer_iddescr" class="GET_--workers--chain_validators--chain_id--peers_validators--peer_id tabcontent">
            <p>
            Introspect the state of a peer validator worker.</p>
            </div>
  <div id="GET_--workers--chain_validators--chain_id--peers_validators--peer_idoutput.json" class="GET_--workers--chain_validators--chain_id--peers_validators--peer_id tabcontent">
    <pre>
    { "status":
        { /* Launching */
          "phase": "launching",
          "since": $timestamp.system }
        || { /* Running */
             "phase": "running",
             "since": $timestamp.system }
        || { /* Closing */
             "phase": "closing",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Closed */
             "phase": "closed",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Crashed */
             "phase": "crashed",
             "birth": $timestamp.system,
             "since": $timestamp.system,
             "errors": $error },
      "pending_requests":
        [ { "pushed": $timestamp.system,
            "request":
              { /* New_head */
                "request": "new_head",
                "block": $block_hash }
              || { /* New_branch */
                   "request": "new_branch",
                   "block": $block_hash,
                   "locators": integer ∈ [-2^30, 2^30] } } ... ],
      "current_request"?:
        { "pushed": $timestamp.system,
          "treated": $timestamp.system,
          "request":
            { /* New_head */
              "request": "new_head",
              "block": $block_hash }
            || { /* New_branch */
                 "request": "new_branch",
                 "block": $block_hash,
                 "locators": integer ∈ [-2^30, 2^30] } } }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--chain_validators--chain_id--peers_validators--peer_idoutput.bin" class="GET_--workers--chain_validators--chain_id--peers_validators--peer_id tabcontent">
    <pre>
    +---------------------------------------+----------------------+-------------------------------------+
    | Name                                  | Size                 | Contents                            |
    +=======================================+======================+=====================================+
    | status                                | Determined from data | $X_0                                |
    +---------------------------------------+----------------------+-------------------------------------+
    | # bytes in next field                 | 4 bytes              | unsigned 30-bit big-endian integer  |
    +---------------------------------------+----------------------+-------------------------------------+
    | pending_requests                      | Variable             | sequence of $X_1                    |
    +---------------------------------------+----------------------+-------------------------------------+
    | ? presence of field "current_request" | 1 byte               | boolean (0 for false, 255 for true) |
    +---------------------------------------+----------------------+-------------------------------------+
    | current_request                       | Determined from data | $X_3                                |
    +---------------------------------------+----------------------+-------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2 (Determined from data, 8-bit tag)
    *************************************
    
    New_head (tag 0)
    ================
    
    +-------+----------+------------------------+
    | Name  | Size     | Contents               |
    +=======+==========+========================+
    | Tag   | 1 byte   | unsigned 8-bit integer |
    +-------+----------+------------------------+
    | block | 32 bytes | bytes                  |
    +-------+----------+------------------------+
    
    
    New_branch (tag 1)
    ==================
    
    +----------+----------+-------------------------------------------------------------------------+
    | Name     | Size     | Contents                                                                |
    +==========+==========+=========================================================================+
    | Tag      | 1 byte   | unsigned 8-bit integer                                                  |
    +----------+----------+-------------------------------------------------------------------------+
    | block    | 32 bytes | bytes                                                                   |
    +----------+----------+-------------------------------------------------------------------------+
    | locators | 4 bytes  | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +----------+----------+-------------------------------------------------------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | pushed                | 8 bytes              | signed 64-bit big-endian integer   |
    +-----------------------+----------------------+------------------------------------+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | request               | Determined from data | $X_2                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    X_3
    ***
    
    +---------+----------------------+----------------------------------+
    | Name    | Size                 | Contents                         |
    +=========+======================+==================================+
    | pushed  | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | treated | 8 bytes              | signed 64-bit big-endian integer |
    +---------+----------------------+----------------------------------+
    | request | Determined from data | $X_2                             |
    +---------+----------------------+----------------------------------+
    
    </pre>
    </div>
  


.. _GET_--workers--prevalidators :

**GET /workers/prevalidators**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--prevalidatorsdescr', 'GET_--workers--prevalidators')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--prevalidatorsoutput.json', 'GET_--workers--prevalidators')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--prevalidatorsoutput.bin', 'GET_--workers--prevalidators')">Binary output</button>
    </div><div id="GET_--workers--prevalidatorsdescr" class="GET_--workers--prevalidators tabcontent">
            <p>
            Lists the Prevalidator workers and their status.</p>
            </div>
  <div id="GET_--workers--prevalidatorsoutput.json" class="GET_--workers--prevalidators tabcontent">
    <pre>
    [ { "chain_id": $Chain_id,
        "status":
          { /* Launching */
            "phase": "launching",
            "since": $timestamp.system }
          || { /* Running */
               "phase": "running",
               "since": $timestamp.system }
          || { /* Closing */
               "phase": "closing",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Closed */
               "phase": "closed",
               "birth": $timestamp.system,
               "since": $timestamp.system }
          || { /* Crashed */
               "phase": "crashed",
               "birth": $timestamp.system,
               "since": $timestamp.system,
               "errors": $error },
        "information":
          { "instances": integer ∈ [-2^30, 2^30],
            "status":
              { /* Launching */
                "phase": "launching",
                "since": $timestamp.system }
              || { /* Running */
                   "phase": "running",
                   "since": $timestamp.system }
              || { /* Closing */
                   "phase": "closing",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Closed */
                   "phase": "closed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system }
              || { /* Crashed */
                   "phase": "crashed",
                   "birth": $timestamp.system,
                   "since": $timestamp.system,
                   "errors": $error },
            "queue_length": integer ∈ [-2^30, 2^30] },
        "pipelines": integer ∈ [-2^15, 2^15-1] } ... ]
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--prevalidatorsoutput.bin" class="GET_--workers--prevalidators tabcontent">
    <pre>
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of $X_0                   |
    +-----------------------+----------+------------------------------------+
    
    
    X_1 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    X_2
    ***
    
    +--------------+----------------------+-------------------------------------------------------------------------+
    | Name         | Size                 | Contents                                                                |
    +==============+======================+=========================================================================+
    | instances    | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | status       | Determined from data | $X_1                                                                    |
    +--------------+----------------------+-------------------------------------------------------------------------+
    | queue_length | 4 bytes              | signed 31-bit big-endian integer in the range -1073741824 to 1073741823 |
    +--------------+----------------------+-------------------------------------------------------------------------+
    
    
    X_0
    ***
    
    +-------------+----------------------+----------------------------------+
    | Name        | Size                 | Contents                         |
    +=============+======================+==================================+
    | chain_id    | 4 bytes              | bytes                            |
    +-------------+----------------------+----------------------------------+
    | status      | Determined from data | $X_1                             |
    +-------------+----------------------+----------------------------------+
    | information | Determined from data | $X_2                             |
    +-------------+----------------------+----------------------------------+
    | pipelines   | 2 bytes              | signed 16-bit big-endian integer |
    +-------------+----------------------+----------------------------------+
    
    </pre>
    </div>
  

.. _GET_--workers--prevalidators--chain_id :

**GET /workers/prevalidators/<chain_id>**

.. raw:: html
  
  <div class="tab"><button class="tablinks defaultOpen" onclick="showTab(this, 'GET_--workers--prevalidators--chain_iddescr', 'GET_--workers--prevalidators--chain_id')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--prevalidators--chain_idoutput.json', 'GET_--workers--prevalidators--chain_id')">Json output</button>
    <button class="tablinks" onclick="showTab(this, 'GET_--workers--prevalidators--chain_idoutput.bin', 'GET_--workers--prevalidators--chain_id')">Binary output</button>
    </div><div id="GET_--workers--prevalidators--chain_iddescr" class="GET_--workers--prevalidators--chain_id tabcontent">
            <p>
            Introspect the state of prevalidator workers.</p>
            </div>
  <div id="GET_--workers--prevalidators--chain_idoutput.json" class="GET_--workers--prevalidators--chain_id tabcontent">
    <pre>
    { "status":
        { /* Launching */
          "phase": "launching",
          "since": $timestamp.system }
        || { /* Running */
             "phase": "running",
             "since": $timestamp.system }
        || { /* Closing */
             "phase": "closing",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Closed */
             "phase": "closed",
             "birth": $timestamp.system,
             "since": $timestamp.system }
        || { /* Crashed */
             "phase": "crashed",
             "birth": $timestamp.system,
             "since": $timestamp.system,
             "errors": $error },
      "pending_requests":
        [ { "pushed": $timestamp.system,
            "request":
              { /* Flush */
                "request": "flush",
                "block": $block_hash,
                "event": $chain_update }
              || { /* Notify */
                   "request": "notify",
                   "peer": $Crypto_box.Public_key_hash,
                   "mempool": $mempool }
              || { /* Inject */
                   "request": "inject",
                   "operation": $operation,
                   "force": boolean }
              || { /* Arrived */
                   "request": "arrived",
                   "operation_hash": $Operation_hash,
                   "operation": $operation }
              || { /* Advertise */
                   "request": "advertise" }
              || { /* Leftover */
                   "request": "leftover" }
              || { /* Ban */
                   "request": "ban",
                   "operation_hash": $Operation_hash } } ... ],
      "current_request"?:
        { "pushed": $timestamp.system,
          "treated": $timestamp.system,
          "request":
            { /* Flush */
              "request": "flush",
              "block": $block_hash,
              "event": $chain_update }
            || { /* Notify */
                 "request": "notify",
                 "peer": $Crypto_box.Public_key_hash,
                 "mempool": $mempool }
            || { /* Inject */
                 "request": "inject",
                 "operation": $operation,
                 "force": boolean }
            || { /* Arrived */
                 "request": "arrived",
                 "operation_hash": $Operation_hash,
                 "operation": $operation }
            || { /* Advertise */
                 "request": "advertise" }
            || { /* Leftover */
                 "request": "leftover" }
            || { /* Ban */
                 "request": "ban",
                 "operation_hash": $Operation_hash } } }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $chain_update:
      /* If 'ignored', the new validated block is ignored since the current
         head fitness is better. If 'branch', we have set our head to a new
         validated block which is not the direct successor of the previous
         head. If 'increment', the new validated head is the direct successor
         of the previous head. */
      "branch" | "ignored" | "increment"
    $error:
      /* An error trace. The full list of errors is available with the global
         RPC `GET errors` */
      any
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $mempool:
      /* A batch of operation. This format is used to gossip operations between
         peers. */
      { "known_valid": [ $Operation_hash ... ],
        "pending": [ $Operation_hash ... ] }
    $operation:
      /* An operation. The shell_header part indicates a block an operation is
         meant to apply on top of. The proto part is protocol-specific and
         appears as a binary blob. */
      { "branch": $block_hash,
        "data": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer: subsecond-level
         precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>
  <div id="GET_--workers--prevalidators--chain_idoutput.bin" class="GET_--workers--prevalidators--chain_id tabcontent">
    <pre>
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | status                | Determined from data | $X_0                               |
    +-----------------------+----------------------+------------------------------------+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | pending_requests      | Variable             | sequence of $X_1                   |
    +-----------------------+----------------------+------------------------------------+
    | current_request       | Variable             | $X_4                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    X_0 (Determined from data, 8-bit tag)
    *************************************
    
    Launching (tag 0)
    =================
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Running (tag 1)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closing (tag 2)
    ===============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Closed (tag 3)
    ==============
    
    +-------+---------+----------------------------------+
    | Name  | Size    | Contents                         |
    +=======+=========+==================================+
    | Tag   | 1 byte  | unsigned 8-bit integer           |
    +-------+---------+----------------------------------+
    | birth | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    | since | 8 bytes | signed 64-bit big-endian integer |
    +-------+---------+----------------------------------+
    
    
    Crashed (tag 4)
    ===============
    
    +--------------------------+----------+------------------------------------+
    | Name                     | Size     | Contents                           |
    +==========================+==========+====================================+
    | Tag                      | 1 byte   | unsigned 8-bit integer             |
    +--------------------------+----------+------------------------------------+
    | birth                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | since                    | 8 bytes  | signed 64-bit big-endian integer   |
    +--------------------------+----------+------------------------------------+
    | # bytes in field "error" | 4 bytes  | unsigned 30-bit big-endian integer |
    +--------------------------+----------+------------------------------------+
    | errors                   | Variable | bytes                              |
    +--------------------------+----------+------------------------------------+
    
    
    operation
    *********
    
    +--------+----------+----------+
    | Name   | Size     | Contents |
    +========+==========+==========+
    | branch | 32 bytes | bytes    |
    +--------+----------+----------+
    | data   | Variable | bytes    |
    +--------+----------+----------+
    
    
    X_2
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | Unnamed field 0       | Variable | sequence of bytes                  |
    +-----------------------+----------+------------------------------------+
    
    
    mempool
    *******
    
    +-----------------------+----------------------+------------------------------------+
    | Name                  | Size                 | Contents                           |
    +=======================+======================+====================================+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | known_valid           | Variable             | sequence of bytes                  |
    +-----------------------+----------------------+------------------------------------+
    | # bytes in next field | 4 bytes              | unsigned 30-bit big-endian integer |
    +-----------------------+----------------------+------------------------------------+
    | pending               | Determined from data | $X_2                               |
    +-----------------------+----------------------+------------------------------------+
    
    
    chain_update (Enumeration: unsigned 8-bit integer):
    ***************************************************
    
    +-------------+----------------+
    | Case number | Encoded string |
    +=============+================+
    | 0           | ignored        |
    +-------------+----------------+
    | 1           | branch         |
    +-------------+----------------+
    | 2           | increment      |
    +-------------+----------------+
    
    
    X_3 (Variable, 8-bit tag)
    *************************
    
    Flush (tag 0)
    =============
    
    +-------+----------+-------------------------------------------------------------------+
    | Name  | Size     | Contents                                                          |
    +=======+==========+===================================================================+
    | Tag   | 1 byte   | unsigned 8-bit integer                                            |
    +-------+----------+-------------------------------------------------------------------+
    | block | 32 bytes | bytes                                                             |
    +-------+----------+-------------------------------------------------------------------+
    | event | 1 byte   | unsigned 8-bit integer encoding an enumeration (see chain_update) |
    +-------+----------+-------------------------------------------------------------------+
    
    
    Notify (tag 1)
    ==============
    
    +---------+----------------------+------------------------+
    | Name    | Size                 | Contents               |
    +=========+======================+========================+
    | Tag     | 1 byte               | unsigned 8-bit integer |
    +---------+----------------------+------------------------+
    | peer    | 16 bytes             | bytes                  |
    +---------+----------------------+------------------------+
    | mempool | Determined from data | $mempool               |
    +---------+----------------------+------------------------+
    
    
    Inject (tag 2)
    ==============
    
    +-----------+----------+-------------------------------------+
    | Name      | Size     | Contents                            |
    +===========+==========+=====================================+
    | Tag       | 1 byte   | unsigned 8-bit integer              |
    +-----------+----------+-------------------------------------+
    | operation | Variable | $operation                          |
    +-----------+----------+-------------------------------------+
    | force     | 1 byte   | boolean (0 for false, 255 for true) |
    +-----------+----------+-------------------------------------+
    
    
    Arrived (tag 3)
    ===============
    
    +----------------+----------+------------------------+
    | Name           | Size     | Contents               |
    +================+==========+========================+
    | Tag            | 1 byte   | unsigned 8-bit integer |
    +----------------+----------+------------------------+
    | operation_hash | 32 bytes | bytes                  |
    +----------------+----------+------------------------+
    | operation      | Variable | $operation             |
    +----------------+----------+------------------------+
    
    
    Advertise (tag 4)
    =================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Leftover (tag 5)
    ================
    
    +------+--------+------------------------+
    | Name | Size   | Contents               |
    +======+========+========================+
    | Tag  | 1 byte | unsigned 8-bit integer |
    +------+--------+------------------------+
    
    
    Ban (tag 6)
    ===========
    
    +----------------+----------+------------------------+
    | Name           | Size     | Contents               |
    +================+==========+========================+
    | Tag            | 1 byte   | unsigned 8-bit integer |
    +----------------+----------+------------------------+
    | operation_hash | 32 bytes | bytes                  |
    +----------------+----------+------------------------+
    
    
    X_1
    ***
    
    +-----------------------+----------+------------------------------------+
    | Name                  | Size     | Contents                           |
    +=======================+==========+====================================+
    | pushed                | 8 bytes  | signed 64-bit big-endian integer   |
    +-----------------------+----------+------------------------------------+
    | # bytes in next field | 4 bytes  | unsigned 30-bit big-endian integer |
    +-----------------------+----------+------------------------------------+
    | request               | Variable | $X_3                               |
    +-----------------------+----------+------------------------------------+
    
    
    X_4
    ***
    
    +---------+----------+----------------------------------+
    | Name    | Size     | Contents                         |
    +=========+==========+==================================+
    | pushed  | 8 bytes  | signed 64-bit big-endian integer |
    +---------+----------+----------------------------------+
    | treated | 8 bytes  | signed 64-bit big-endian integer |
    +---------+----------+----------------------------------+
    | request | Variable | $X_3                             |
    +---------+----------+----------------------------------+
    
    </pre>
    </div>
  



