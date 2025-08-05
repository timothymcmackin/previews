RPC Errors
##########

.. raw:: html
  
  <script>function showTab(elt, tab, ref) {var i, tabcontent, tablinks;tabcontent = document.getElementsByClassName(ref);for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = 'none';}tablinks = elt.parentNode.children;for (i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(' active', '');}document.getElementById(tab).style.display = 'block';elt.className += ' active';}document.addEventListener('DOMContentLoaded', function(){var a = document.getElementsByClassName('defaultOpen');for (i = 0; i < a.length; i++) { a[i].click() }})</script><style>.tab {overflow: hidden;border: 1px solid #ccc;background-color: #f1f1f1;}.tab button {background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding: 5px 10px;}.tab button:hover {background-color: #ddd;}.tab button.active {background-color: #ccc;}.tabcontent {display: none;padding: 6px 12px;border: 1px solid #ccc;border-top: none;margin-bottom: 20px;}pre {font-size: 12px}</style>
  
  
This document references possible errors that can come from RPC calls. It is generated from the OCaml source code (master branch).

Protocol Alpha
**************

**Badly formed constant expression**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref2descr', 'ref2')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref2schema', 'ref2')">JSON Schema</button>
    
    </div>
    <div id="ref2descr" class="ref2 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Found a badly formed constant expression. The 'constant' primitive must always be followed by a string of the hash of the expression it points to.</p><p><i>Id</i> : proto.alpha.Badly_formed_constant_expression<br/><i>Category</i> : temporary</p>
      </div><div id="ref2schema" class="ref2 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Badly formed constant expression
         Found a badly formed constant expression. The 'constant' primitive
         must always be followed by a string of the hash of the expression it
         points to. */
      "kind": "branch",
      "id": "proto.alpha.Badly_formed_constant_expression" }</pre>
    </div>



**Smart_rollup_inbox_history: Key already bound to a different value.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref3descr', 'ref3')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref3schema', 'ref3')">JSON Schema</button>
    
    </div>
    <div id="ref3descr" class="ref3 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Smart_rollup_inbox_history: Remember called with a key that is already bound to a different
        value.</p><p><i>Id</i> : proto.alpha.Bounded_history_repr.Smart_rollup_inbox_history.key_bound_to_different_value<br/><i>Category</i> : temporary</p>
      </div><div id="ref3schema" class="ref3 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Smart_rollup_inbox_history: Key already bound to a different value.
         Smart_rollup_inbox_history: Remember called with a key that is
         already bound to a different
                 value. */
      "kind": "temporary",
      "id":
        "proto.alpha.Bounded_history_repr.Smart_rollup_inbox_history.key_bound_to_different_value",
      "key": $smart_rollup_inbox_hash,
      "existing_value":
        { "index": $positive_bignum,
          "content":
            { "hash": $smart_rollup_merkelized_payload_hashes_hash,
              "level": integer ∈ [0, 2^31] },
          "back_pointers": [ $smart_rollup_inbox_hash ... ] },
      "given_value":
        { "index": $positive_bignum,
          "content":
            { "hash": $smart_rollup_merkelized_payload_hashes_hash,
              "level": integer ∈ [0, 2^31] },
          "back_pointers": [ $smart_rollup_inbox_hash ... ] } }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $smart_rollup_inbox_hash:
      /* The hash of an inbox of a smart rollup (Base58Check-encoded) */
      $unistring
    $smart_rollup_merkelized_payload_hashes_hash:
      /* The hash of the Merkelized payload hashes of a smart rollup inbox
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Smart_rollup_level_inbox_history: Key already bound to a different value.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref4descr', 'ref4')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref4schema', 'ref4')">JSON Schema</button>
    
    </div>
    <div id="ref4descr" class="ref4 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Smart_rollup_level_inbox_history: Remember called with a key that is already bound to a different
        value.</p><p><i>Id</i> : proto.alpha.Bounded_history_repr.Smart_rollup_level_inbox_history.key_bound_to_different_value<br/><i>Category</i> : temporary</p>
      </div><div id="ref4schema" class="ref4 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Smart_rollup_level_inbox_history: Key already bound to a different
         value.
         Smart_rollup_level_inbox_history: Remember called with a key that is
         already bound to a different
                 value. */
      "kind": "temporary",
      "id":
        "proto.alpha.Bounded_history_repr.Smart_rollup_level_inbox_history.key_bound_to_different_value",
      "key": $smart_rollup_merkelized_payload_hashes_hash,
      "existing_value":
        { "index": $positive_bignum,
          "content": $Smart_rollup_serialized_message_hash,
          "back_pointers":
            [ $smart_rollup_merkelized_payload_hashes_hash ... ],
          "payload": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ },
      "given_value":
        { "index": $positive_bignum,
          "content": $Smart_rollup_serialized_message_hash,
          "back_pointers":
            [ $smart_rollup_merkelized_payload_hashes_hash ... ],
          "payload": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ } }
    $Smart_rollup_serialized_message_hash:
      /* The hash of a serialized message of the smart rollup inbox.
         (Base58Check-encoded) */
      $unistring
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $smart_rollup_merkelized_payload_hashes_hash:
      /* The hash of the Merkelized payload hashes of a smart rollup inbox
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**dal_slots_cache: Key already bound to a different value.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref5descr', 'ref5')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref5schema', 'ref5')">JSON Schema</button>
    
    </div>
    <div id="ref5descr" class="ref5 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>dal_slots_cache: Remember called with a key that is already bound to a different
        value.</p><p><i>Id</i> : proto.alpha.Bounded_history_repr.dal_slots_cache.key_bound_to_different_value<br/><i>Category</i> : temporary</p>
      </div><div id="ref5schema" class="ref5 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* dal_slots_cache: Key already bound to a different value.
         dal_slots_cache: Remember called with a key that is already bound to
         a different
                 value. */
      "kind": "temporary",
      "id":
        "proto.alpha.Bounded_history_repr.dal_slots_cache.key_bound_to_different_value",
      "key": $dal_skip_list_pointer,
      "existing_value":
        { /* dal_skip_list_legacy */
          "kind": "dal_skip_list_legacy",
          "skip_list": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
        || { /* dal_skip_list */
             "kind": "dal_skip_list",
             "skip_list":
               { "index": $positive_bignum,
                 "content":
                   { /* unpublished */
                     "kind": "unpublished",
                     "level": integer ∈ [0, 2^31],
                     "index": integer ∈ [0, 255] }
                   || /* published */
                   { /* v0 */
                     "kind": "published",
                     "publisher": $alpha.contract_id,
                     "is_proto_attested": boolean,
                     "attested_shards": integer ∈ [0, 2^16-1],
                     "total_shards": integer ∈ [0, 2^16-1],
                     "version": "0",
                     "level": integer ∈ [0, 2^31],
                     "index": integer ∈ [0, 255],
                     "commitment": $DAL_commitment },
                 "back_pointers": [ $dal_skip_list_pointer ... ] } },
      "given_value":
        { /* dal_skip_list_legacy */
          "kind": "dal_skip_list_legacy",
          "skip_list": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
        || { /* dal_skip_list */
             "kind": "dal_skip_list",
             "skip_list":
               { "index": $positive_bignum,
                 "content":
                   { /* unpublished */
                     "kind": "unpublished",
                     "level": integer ∈ [0, 2^31],
                     "index": integer ∈ [0, 255] }
                   || /* published */
                   { /* v0 */
                     "kind": "published",
                     "publisher": $alpha.contract_id,
                     "is_proto_attested": boolean,
                     "attested_shards": integer ∈ [0, 2^16-1],
                     "total_shards": integer ∈ [0, 2^16-1],
                     "version": "0",
                     "level": integer ∈ [0, 2^31],
                     "index": integer ∈ [0, 255],
                     "commitment": $DAL_commitment },
                 "back_pointers": [ $dal_skip_list_pointer ... ] } } }
    $DAL_commitment:
      /* Commitment representation for the DAL (Base58Check-encoded) */
      $unistring
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $dal_skip_list_pointer:
      /* A hash that represents the skip list pointers (Base58Check-encoded) */
      $unistring
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The attester is not part of the DAL committee for this level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref6descr', 'ref6')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref6schema', 'ref6')">JSON Schema</button>
    
    </div>
    <div id="ref6descr" class="ref6 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The attester is not part of the DAL committee for this level</p><p><i>Id</i> : proto.alpha.Dal_data_availibility_attester_not_in_committee<br/><i>Category</i> : temporary</p>
      </div><div id="ref6schema" class="ref6 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The attester is not part of the DAL committee for this level
         The attester is not part of the DAL committee for this level */
      "kind": "permanent",
      "id": "proto.alpha.Dal_data_availibility_attester_not_in_committee",
      "attester": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot": integer ∈ [0, 2^16-1] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Add an element in slots skip list that violates ordering**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref7descr', 'ref7')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref7schema', 'ref7')">JSON Schema</button>
    
    </div>
    <div id="ref7descr" class="ref7 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempting to add an element on top of the Dal confirmed slots skip list that violates the ordering.</p><p><i>Id</i> : proto.alpha.Dal_slot_repr.add_element_in_slots_skip_list_violates_ordering<br/><i>Category</i> : temporary</p>
      </div><div id="ref7schema" class="ref7 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Add an element in slots skip list that violates ordering
         Attempting to add an element on top of the Dal confirmed slots skip
         list that violates the ordering. */
      "kind": "temporary",
      "id":
        "proto.alpha.Dal_slot_repr.add_element_in_slots_skip_list_violates_ordering",
      ... }</pre>
    </div>



**Dal invalid proof deserialization**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref8descr', 'ref8')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref8schema', 'ref8')">JSON Schema</button>
    
    </div>
    <div id="ref8descr" class="ref8 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error occured during dal proof deserialization</p><p><i>Id</i> : proto.alpha.Dal_slot_repr.invalid_proof_deserialization<br/><i>Category</i> : temporary</p>
      </div><div id="ref8schema" class="ref8 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Dal invalid proof deserialization
         Error occured during dal proof deserialization */
      "kind": "permanent",
      "id": "proto.alpha.Dal_slot_repr.invalid_proof_deserialization",
      ... }</pre>
    </div>



**Dal invalid proof serialization**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref9descr', 'ref9')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref9schema', 'ref9')">JSON Schema</button>
    
    </div>
    <div id="ref9descr" class="ref9 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error occured during dal proof serialization</p><p><i>Id</i> : proto.alpha.Dal_slot_repr.invalid_proof_serialization<br/><i>Category</i> : temporary</p>
      </div><div id="ref9schema" class="ref9 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Dal invalid proof serialization
         Error occured during dal proof serialization */
      "kind": "permanent",
      "id": "proto.alpha.Dal_slot_repr.invalid_proof_serialization",
      ... }</pre>
    </div>



**Tried to play a dissecting when the final move started**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref10descr', 'ref10')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref10schema', 'ref10')">JSON Schema</button>
    
    </div>
    <div id="ref10descr" class="ref10 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to play a dissecting when the final move started</p><p><i>Id</i> : proto.alpha.Dissecting_during_final_move<br/><i>Category</i> : temporary</p>
      </div><div id="ref10schema" class="ref10 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Tried to play a dissecting when the final move started
         Tried to play a dissecting when the final move started */
      "kind": "temporary",
      "id": "proto.alpha.Dissecting_during_final_move" }</pre>
    </div>



**Dissection choice not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref11descr', 'ref11')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref11schema', 'ref11')">JSON Schema</button>
    
    </div>
    <div id="ref11descr" class="ref11 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Dissection choice not found</p><p><i>Id</i> : proto.alpha.Dissection_choice_not_found<br/><i>Category</i> : temporary</p>
      </div><div id="ref11schema" class="ref11 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Dissection choice not found
         Dissection choice not found */
      "kind": "temporary",
      "id": "proto.alpha.Dissection_choice_not_found",
      "choice": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**The distance for a proof should be equal to 1**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref12descr', 'ref12')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref12schema', 'ref12')">JSON Schema</button>
    
    </div>
    <div id="ref12descr" class="ref12 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The distance for a proof should be equal to 1</p><p><i>Id</i> : proto.alpha.Dissection_unexpected_section_size<br/><i>Category</i> : temporary</p>
      </div><div id="ref12schema" class="ref12 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The distance for a proof should be equal to 1
         The distance for a proof should be equal to 1 */
      "kind": "permanent",
      "id": "proto.alpha.Dissection_unexpected_section_size",
      "n": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Expected binary proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref13descr', 'ref13')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref13schema', 'ref13')">JSON Schema</button>
    
    </div>
    <div id="ref13descr" class="ref13 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An invalid proof has been submitted</p><p><i>Id</i> : proto.alpha.Expected_binary_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref13schema" class="ref13 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Expected binary proof
         An invalid proof has been submitted */
      "kind": "permanent",
      "id": "proto.alpha.Expected_binary_proof" }</pre>
    </div>



**Expression already registered**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref14descr', 'ref14')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref14schema', 'ref14')">JSON Schema</button>
    
    </div>
    <div id="ref14descr" class="ref14 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to register an expression as global constant that has already been registered.</p><p><i>Id</i> : proto.alpha.Expression_already_registered<br/><i>Category</i> : temporary</p>
      </div><div id="ref14schema" class="ref14 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Expression already registered
         Attempted to register an expression as global constant that has
         already been registered. */
      "kind": "branch",
      "id": "proto.alpha.Expression_already_registered" }</pre>
    </div>



**Expression too deep**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref15descr', 'ref15')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref15schema', 'ref15')">JSON Schema</button>
    
    </div>
    <div id="ref15descr" class="ref15 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to register an expression that, after fully expanding all referenced global constants, would result in too many levels of nesting.</p><p><i>Id</i> : proto.alpha.Expression_too_deep<br/><i>Category</i> : temporary</p>
      </div><div id="ref15schema" class="ref15 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Expression too deep
         Attempted to register an expression that, after fully expanding all
         referenced global constants, would result in too many levels of
         nesting. */
      "kind": "branch",
      "id": "proto.alpha.Expression_too_deep" }</pre>
    </div>



**Expression too large**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref16descr', 'ref16')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref16schema', 'ref16')">JSON Schema</button>
    
    </div>
    <div id="ref16descr" class="ref16 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Encountered an expression that, after expanding all constants, is larger than the expression size limit.</p><p><i>Id</i> : proto.alpha.Expression_too_large<br/><i>Category</i> : temporary</p>
      </div><div id="ref16schema" class="ref16 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Expression too large
         Encountered an expression that, after expanding all constants, is
         larger than the expression size limit. */
      "kind": "branch",
      "id": "proto.alpha.Expression_too_large" }</pre>
    </div>



**Failed to get script for contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref17descr', 'ref17')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref17schema', 'ref17')">JSON Schema</button>
    
    </div>
    <div id="ref17descr" class="ref17 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to get script for contract when scanning operations for tickets</p><p><i>Id</i> : proto.alpha.Failed_to_get_script<br/><i>Category</i> : temporary</p>
      </div><div id="ref17schema" class="ref17 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to get script for contract
         Failed to get script for contract when scanning operations for
         tickets */
      "kind": "permanent",
      "id": "proto.alpha.Failed_to_get_script",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to hash node**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref18descr', 'ref18')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref18schema', 'ref18')">JSON Schema</button>
    
    </div>
    <div id="ref18descr" class="ref18 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to hash node for a key in the ticket-balance table</p><p><i>Id</i> : proto.alpha.Failed_to_hash_node<br/><i>Category</i> : temporary</p>
      </div><div id="ref18schema" class="ref18 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to hash node
         Failed to hash node for a key in the ticket-balance table */
      "kind": "branch",
      "id": "proto.alpha.Failed_to_hash_node" }</pre>
    </div>



**Failed to load big-map value type**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref19descr', 'ref19')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref19schema', 'ref19')">JSON Schema</button>
    
    </div>
    <div id="ref19descr" class="ref19 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to load big-map value type when computing ticket diffs.</p><p><i>Id</i> : proto.alpha.Failed_to_load_big_map_value_type<br/><i>Category</i> : temporary</p>
      </div><div id="ref19schema" class="ref19 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to load big-map value type
         Failed to load big-map value type when computing ticket diffs. */
      "kind": "permanent",
      "id": "proto.alpha.Failed_to_load_big_map_value_type",
      "big_map_id": $alpha.big_map_id }
    $alpha.big_map_id:
      /* Big map identifier
         A big map identifier */
      $bignum
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string</pre>
    </div>



**Merkle_list_invalid_position**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref20descr', 'ref20')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref20schema', 'ref20')">JSON Schema</button>
    
    </div>
    <div id="ref20descr" class="ref20 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Merkle_list_invalid_position</p><p><i>Id</i> : proto.alpha.Merkle_list_invalid_position<br/><i>Category</i> : temporary</p>
      </div><div id="ref20schema" class="ref20 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Merkle_list_invalid_position
         Merkle_list_invalid_position */
      "kind": "temporary",
      "id": "proto.alpha.Merkle_list_invalid_position" }</pre>
    </div>



**Negative ticket balance**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref21descr', 'ref21')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref21schema', 'ref21')">JSON Schema</button>
    
    </div>
    <div id="ref21descr" class="ref21 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to set a negative ticket balance value</p><p><i>Id</i> : proto.alpha.Negative_ticket_balance<br/><i>Category</i> : temporary</p>
      </div><div id="ref21schema" class="ref21 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative ticket balance
         Attempted to set a negative ticket balance value */
      "kind": "permanent",
      "id": "proto.alpha.Negative_ticket_balance",
      "key": $script_expr,
      "balance": $bignum }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $script_expr:
      /* A script expression ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Tried to look up nonexistent global**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref22descr', 'ref22')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref22schema', 'ref22')">JSON Schema</button>
    
    </div>
    <div id="ref22descr" class="ref22 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No registered global was found at the given hash in storage.</p><p><i>Id</i> : proto.alpha.Nonexistent_global<br/><i>Category</i> : temporary</p>
      </div><div id="ref22schema" class="ref22 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Tried to look up nonexistent global
         No registered global was found at the given hash in storage. */
      "kind": "branch",
      "id": "proto.alpha.Nonexistent_global" }</pre>
    </div>



**The start state hash of the proof is invalid**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref23descr', 'ref23')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref23schema', 'ref23')">JSON Schema</button>
    
    </div>
    <div id="ref23descr" class="ref23 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The start state hash of the proof is invalid</p><p><i>Id</i> : proto.alpha.Proof_start_state_hash_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref23schema" class="ref23 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The start state hash of the proof is invalid
         The start state hash of the proof is invalid */
      "kind": "temporary",
      "id": "proto.alpha.Proof_start_state_hash_mismatch",
      "start_state_hash":
        $smart_rollup_state_hash /* Some */ || null /* None */,
      "start_proof": $smart_rollup_state_hash }
    $smart_rollup_state_hash:
      /* The hash of the VM state of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to refute the stop state hash with the proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref24descr', 'ref24')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref24schema', 'ref24')">JSON Schema</button>
    
    </div>
    <div id="ref24descr" class="ref24 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to refute the stop state hash with the proof</p><p><i>Id</i> : proto.alpha.Proof_stop_state_hash_failed_to_refute<br/><i>Category</i> : temporary</p>
      </div><div id="ref24schema" class="ref24 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to refute the stop state hash with the proof
         Failed to refute the stop state hash with the proof */
      "kind": "temporary",
      "id": "proto.alpha.Proof_stop_state_hash_failed_to_refute",
      "stop_state_hash":
        $smart_rollup_state_hash /* Some */ || null /* None */,
      "stop_proof": $smart_rollup_state_hash /* Some */ || null /* None */ }
    $smart_rollup_state_hash:
      /* The hash of the VM state of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to validate the stop state hash with the proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref25descr', 'ref25')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref25schema', 'ref25')">JSON Schema</button>
    
    </div>
    <div id="ref25descr" class="ref25 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to validate the stop state hash with the proof</p><p><i>Id</i> : proto.alpha.Proof_stop_state_hash_failed_to_validate<br/><i>Category</i> : temporary</p>
      </div><div id="ref25schema" class="ref25 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to validate the stop state hash with the proof
         Failed to validate the stop state hash with the proof */
      "kind": "temporary",
      "id": "proto.alpha.Proof_stop_state_hash_failed_to_validate",
      "stop_state_hash":
        $smart_rollup_state_hash /* Some */ || null /* None */,
      "stop_proof": $smart_rollup_state_hash /* Some */ || null /* None */ }
    $smart_rollup_state_hash:
      /* The hash of the VM state of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unsupported non empty overlay**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref26descr', 'ref26')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref26schema', 'ref26')">JSON Schema</button>
    
    </div>
    <div id="ref26descr" class="ref26 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unsupported big-map value with non-empty overlay</p><p><i>Id</i> : proto.alpha.Unsupported_non_empty_overlay<br/><i>Category</i> : temporary</p>
      </div><div id="ref26schema" class="ref26 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported non empty overlay
         Unsupported big-map value with non-empty overlay */
      "kind": "branch",
      "id": "proto.alpha.Unsupported_non_empty_overlay" }</pre>
    </div>



**Unsupported type operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref27descr', 'ref27')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref27schema', 'ref27')">JSON Schema</button>
    
    </div>
    <div id="ref27descr" class="ref27 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Types embedding operations are not supported</p><p><i>Id</i> : proto.alpha.Unsupported_type_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref27schema" class="ref27 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported type operation
         Types embedding operations are not supported */
      "kind": "branch",
      "id": "proto.alpha.Unsupported_type_operation" }</pre>
    </div>



**Ticket balance used storage underflow**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref28descr', 'ref28')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref28schema', 'ref28')">JSON Schema</button>
    
    </div>
    <div id="ref28descr" class="ref28 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to free more bytes than allocated for the tickets balance</p><p><i>Id</i> : proto.alpha.Used_storage_underflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref28schema" class="ref28 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ticket balance used storage underflow
         Attempt to free more bytes than allocated for the tickets balance */
      "kind": "permanent",
      "id": "proto.alpha.Used_storage_underflow" }</pre>
    </div>



**Missing shell_header during finalisation of a block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref29descr', 'ref29')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref29schema', 'ref29')">JSON Schema</button>
    
    </div>
    <div id="ref29descr" class="ref29 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>During finalisation of a block header in Application mode or Full construction mode, a shell header should be provided so that a cache nonce can be computed.</p><p><i>Id</i> : proto.alpha.apply.missing_shell_header<br/><i>Category</i> : temporary</p>
      </div><div id="ref29schema" class="ref29 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing shell_header during finalisation of a block
         During finalisation of a block header in Application mode or Full
         construction mode, a shell header should be provided so that a cache
         nonce can be computed. */
      "kind": "permanent",
      "id": "proto.alpha.apply.missing_shell_header",
      ... }</pre>
    </div>



**Insufficient attestation power**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref30descr', 'ref30')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref30schema', 'ref30')">JSON Schema</button>
    
    </div>
    <div id="ref30descr" class="ref30 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The attestation power is insufficient to satisfy the consensus threshold.</p><p><i>Id</i> : proto.alpha.baking.insufficient_attestation_power<br/><i>Category</i> : temporary</p>
      </div><div id="ref30schema" class="ref30 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Insufficient attestation power
         The attestation power is insufficient to satisfy the consensus
         threshold. */
      "kind": "permanent",
      "id": "proto.alpha.baking.insufficient_attestation_power",
      "attestation_power": integer ∈ [-2^30, 2^30],
      "consensus_threshold": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Invalid argument**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref31descr', 'ref31')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref31schema', 'ref31')">JSON Schema</button>
    
    </div>
    <div id="ref31descr" class="ref31 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A bitset function was provided an invalid input</p><p><i>Id</i> : proto.alpha.bitfield_invalid_input<br/><i>Category</i> : temporary</p>
      </div><div id="ref31schema" class="ref31 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid argument
         A bitset function was provided an invalid input */
      "kind": "permanent",
      "id": "proto.alpha.bitfield_invalid_input",
      "function_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Multiple revelations were included in a manager operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref32descr', 'ref32')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref32schema', 'ref32')">JSON Schema</button>
    
    </div>
    <div id="ref32descr" class="ref32 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A manager operation should not contain more than one revelation</p><p><i>Id</i> : proto.alpha.block.multiple_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref32schema" class="ref32 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Multiple revelations were included in a manager operation
         A manager operation should not contain more than one revelation */
      "kind": "permanent",
      "id": "proto.alpha.block.multiple_revelation" }</pre>
    </div>



**Invalid block signature**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref33descr', 'ref33')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref33schema', 'ref33')">JSON Schema</button>
    
    </div>
    <div id="ref33descr" class="ref33 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A block was not signed with the expected private key.</p><p><i>Id</i> : proto.alpha.block_header.invalid_block_signature<br/><i>Category</i> : temporary</p>
      </div><div id="ref33schema" class="ref33 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid block signature
         A block was not signed with the expected private key. */
      "kind": "permanent",
      "id": "proto.alpha.block_header.invalid_block_signature",
      "block": $block_hash,
      "expected": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid commitment in block header**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref34descr', 'ref34')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref34schema', 'ref34')">JSON Schema</button>
    
    </div>
    <div id="ref34descr" class="ref34 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block header has invalid commitment.</p><p><i>Id</i> : proto.alpha.block_header.invalid_commitment<br/><i>Category</i> : temporary</p>
      </div><div id="ref34schema" class="ref34 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid commitment in block header
         The block header has invalid commitment. */
      "kind": "permanent",
      "id": "proto.alpha.block_header.invalid_commitment",
      "expected": boolean }</pre>
    </div>



**Invalid payload round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref35descr', 'ref35')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref35schema', 'ref35')">JSON Schema</button>
    
    </div>
    <div id="ref35descr" class="ref35 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given payload round is invalid.</p><p><i>Id</i> : proto.alpha.block_header.invalid_payload_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref35schema" class="ref35 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid payload round
         The given payload round is invalid. */
      "kind": "permanent",
      "id": "proto.alpha.block_header.invalid_payload_round",
      "payload_round": integer ∈ [-2^31-1, 2^31],
      "round": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Insufficient block proof-of-work stamp**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref36descr', 'ref36')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref36schema', 'ref36')">JSON Schema</button>
    
    </div>
    <div id="ref36descr" class="ref36 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block's proof-of-work stamp is insufficient</p><p><i>Id</i> : proto.alpha.block_header.invalid_stamp<br/><i>Category</i> : temporary</p>
      </div><div id="ref36schema" class="ref36 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Insufficient block proof-of-work stamp
         The block's proof-of-work stamp is insufficient */
      "kind": "permanent",
      "id": "proto.alpha.block_header.invalid_stamp" }</pre>
    </div>



**Wrong timestamp**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref37descr', 'ref37')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref37schema', 'ref37')">JSON Schema</button>
    
    </div>
    <div id="ref37descr" class="ref37 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Block timestamp not the expected one.</p><p><i>Id</i> : proto.alpha.block_header.wrong_timestamp<br/><i>Category</i> : temporary</p>
      </div><div id="ref37schema" class="ref37 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong timestamp
         Block timestamp not the expected one. */
      "kind": "permanent",
      "id": "proto.alpha.block_header.wrong_timestamp",
      "block_timestamp": $timestamp.protocol,
      "expected_timestamp": $timestamp.protocol }
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



**Forbidden delegation from unrevealed public key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref38descr', 'ref38')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref38schema', 'ref38')">JSON Schema</button>
    
    </div>
    <div id="ref38descr" class="ref38 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to delegate from an unrevealed public key</p><p><i>Id</i> : proto.alpha.bootstrap.unrevealed_public_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref38schema" class="ref38 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Forbidden delegation from unrevealed public key
         Tried to delegate from an unrevealed public key */
      "kind": "permanent",
      "id": "proto.alpha.bootstrap.unrevealed_public_key",
      "delegator": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot retrieve predecessor level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref39descr', 'ref39')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref39schema', 'ref39')">JSON Schema</button>
    
    </div>
    <div id="ref39descr" class="ref39 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot retrieve predecessor level.</p><p><i>Id</i> : proto.alpha.cannot_retrieve_predecessor_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref39schema" class="ref39 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot retrieve predecessor level
         Cannot retrieve predecessor level. */
      "kind": "temporary",
      "id": "proto.alpha.cannot_retrieve_predecessor_level" }</pre>
    </div>



**Invalid protocol constants**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref40descr', 'ref40')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref40schema', 'ref40')">JSON Schema</button>
    
    </div>
    <div id="ref40descr" class="ref40 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided protocol constants are not coherent.</p><p><i>Id</i> : proto.alpha.constants.invalid_protocol_constants<br/><i>Category</i> : temporary</p>
      </div><div id="ref40schema" class="ref40 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid protocol constants
         The provided protocol constants are not coherent. */
      "kind": "permanent",
      "id": "proto.alpha.constants.invalid_protocol_constants",
      "reason": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to decode parameter**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref41descr', 'ref41')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref41schema', 'ref41')">JSON Schema</button>
    
    </div>
    <div id="ref41descr" class="ref41 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected JSON object.</p><p><i>Id</i> : proto.alpha.context.failed_to_decode_parameter<br/><i>Category</i> : temporary</p>
      </div><div id="ref41schema" class="ref41 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to decode parameter
         Unexpected JSON object. */
      "kind": "temporary",
      "id": "proto.alpha.context.failed_to_decode_parameter",
      "contents": any,
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to parse parameter**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref42descr', 'ref42')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref42schema', 'ref42')">JSON Schema</button>
    
    </div>
    <div id="ref42descr" class="ref42 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The protocol parameters are not valid JSON.</p><p><i>Id</i> : proto.alpha.context.failed_to_parse_parameter<br/><i>Category</i> : temporary</p>
      </div><div id="ref42schema" class="ref42 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to parse parameter
         The protocol parameters are not valid JSON. */
      "kind": "temporary",
      "id": "proto.alpha.context.failed_to_parse_parameter",
      "contents": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }</pre>
    </div>



**Storage error (fatal internal error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref43descr', 'ref43')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref43schema', 'ref43')">JSON Schema</button>
    
    </div>
    <div id="ref43descr" class="ref43 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An error that should never happen unless something has been deleted or corrupted in the database.</p><p><i>Id</i> : proto.alpha.context.storage_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref43schema" class="ref43 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Storage error (fatal internal error)
       An error that should never happen unless something has been deleted or
       corrupted in the database. */
    { /* Incompatible_protocol_version */
      "kind": "permanent",
      "id": "proto.alpha.context.storage_error",
      "incompatible_protocol_version": $unistring }
    || { /* Missing_key */
         "kind": "permanent",
         "id": "proto.alpha.context.storage_error",
         "missing_key": [ $unistring ... ],
         "function": "set" | "get" | "copy" | "del" }
    || { /* Existing_key */
         "kind": "permanent",
         "id": "proto.alpha.context.storage_error",
         "existing_key": [ $unistring ... ] }
    || { /* Corrupted_data */
         "kind": "permanent",
         "id": "proto.alpha.context.storage_error",
         "corrupted_data": [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Balance too low**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref44descr', 'ref44')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref44schema', 'ref44')">JSON Schema</button>
    
    </div>
    <div id="ref44descr" class="ref44 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An operation tried to spend more tokens than the contract has</p><p><i>Id</i> : proto.alpha.contract.balance_too_low<br/><i>Category</i> : temporary</p>
      </div><div id="ref44schema" class="ref44 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Balance too low
         An operation tried to spend more tokens than the contract has */
      "kind": "temporary",
      "id": "proto.alpha.contract.balance_too_low",
      "contract": $alpha.contract_id,
      "balance": $alpha.mutez,
      "amount": $alpha.mutez }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot pay storage fee**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref45descr', 'ref45')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref45schema', 'ref45')">JSON Schema</button>
    
    </div>
    <div id="ref45descr" class="ref45 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The storage fee is higher than the contract balance</p><p><i>Id</i> : proto.alpha.contract.cannot_pay_storage_fee<br/><i>Category</i> : temporary</p>
      </div><div id="ref45schema" class="ref45 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot pay storage fee
         The storage fee is higher than the contract balance */
      "kind": "temporary",
      "id": "proto.alpha.contract.cannot_pay_storage_fee" }</pre>
    </div>



**Invalid counter (not yet reached) in a manager operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref46descr', 'ref46')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref46schema', 'ref46')">JSON Schema</button>
    
    </div>
    <div id="ref46descr" class="ref46 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An operation assumed a contract counter in the future</p><p><i>Id</i> : proto.alpha.contract.counter_in_the_future<br/><i>Category</i> : temporary</p>
      </div><div id="ref46schema" class="ref46 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid counter (not yet reached) in a manager operation
         An operation assumed a contract counter in the future */
      "kind": "temporary",
      "id": "proto.alpha.contract.counter_in_the_future",
      "contract": $alpha.contract_id,
      "expected": $bignum,
      "found": $bignum }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid counter (already used) in a manager operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref47descr', 'ref47')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref47schema', 'ref47')">JSON Schema</button>
    
    </div>
    <div id="ref47descr" class="ref47 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An operation assumed a contract counter in the past</p><p><i>Id</i> : proto.alpha.contract.counter_in_the_past<br/><i>Category</i> : temporary</p>
      </div><div id="ref47schema" class="ref47 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid counter (already used) in a manager operation
         An operation assumed a contract counter in the past */
      "kind": "branch",
      "id": "proto.alpha.contract.counter_in_the_past",
      "contract": $alpha.contract_id,
      "expected": $bignum,
      "found": $bignum }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty transaction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref48descr', 'ref48')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref48schema', 'ref48')">JSON Schema</button>
    
    </div>
    <div id="ref48descr" class="ref48 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Forbidden to credit 0ꜩ to a contract without code.</p><p><i>Id</i> : proto.alpha.contract.empty_transaction<br/><i>Category</i> : temporary</p>
      </div><div id="ref48schema" class="ref48 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty transaction
         Forbidden to credit 0ꜩ to a contract without code. */
      "kind": "branch",
      "id": "proto.alpha.contract.empty_transaction",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Contract storage failure**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref49descr', 'ref49')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref49schema', 'ref49')">JSON Schema</button>
    
    </div>
    <div id="ref49descr" class="ref49 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected contract storage error</p><p><i>Id</i> : proto.alpha.contract.failure<br/><i>Category</i> : temporary</p>
      </div><div id="ref49schema" class="ref49 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Contract storage failure
         Unexpected contract storage error */
      "kind": "permanent",
      "id": "proto.alpha.contract.failure",
      "message": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid contract notation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref50descr', 'ref50')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref50schema', 'ref50')">JSON Schema</button>
    
    </div>
    <div id="ref50descr" class="ref50 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A malformed contract notation was given to an RPC or in a script.</p><p><i>Id</i> : proto.alpha.contract.invalid_contract_notation<br/><i>Category</i> : temporary</p>
      </div><div id="ref50schema" class="ref50 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid contract notation
         A malformed contract notation was given to an RPC or in a script. */
      "kind": "permanent",
      "id": "proto.alpha.contract.invalid_contract_notation",
      "notation": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent public key hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref51descr', 'ref51')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref51schema', 'ref51')">JSON Schema</button>
    
    </div>
    <div id="ref51descr" class="ref51 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A revealed manager public key is inconsistent with the announced hash</p><p><i>Id</i> : proto.alpha.contract.manager.inconsistent_hash<br/><i>Category</i> : temporary</p>
      </div><div id="ref51schema" class="ref51 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent public key hash
         A revealed manager public key is inconsistent with the announced
         hash */
      "kind": "permanent",
      "id": "proto.alpha.contract.manager.inconsistent_hash",
      "public_key": $Signature.Public_key,
      "expected_hash": $Signature.Public_key_hash,
      "provided_hash": $Signature.Public_key_hash }
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent public key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref52descr', 'ref52')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref52schema', 'ref52')">JSON Schema</button>
    
    </div>
    <div id="ref52descr" class="ref52 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A provided manager public key is different with the public key stored in the contract</p><p><i>Id</i> : proto.alpha.contract.manager.inconsistent_public_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref52schema" class="ref52 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent public key
         A provided manager public key is different with the public key
         stored in the contract */
      "kind": "permanent",
      "id": "proto.alpha.contract.manager.inconsistent_public_key",
      "public_key": $Signature.Public_key,
      "expected_public_key": $Signature.Public_key }
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref53descr', 'ref53')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref53schema', 'ref53')">JSON Schema</button>
    
    </div>
    <div id="ref53descr" class="ref53 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A contract cannot be delegated to an unregistered delegate</p><p><i>Id</i> : proto.alpha.contract.manager.unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref53schema" class="ref53 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unregistered delegate
         A contract cannot be delegated to an unregistered delegate */
      "kind": "permanent",
      "id": "proto.alpha.contract.manager.unregistered_delegate",
      "hash": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing manager contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref54descr', 'ref54')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref54schema', 'ref54')">JSON Schema</button>
    
    </div>
    <div id="ref54descr" class="ref54 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The manager contract is missing from the storage</p><p><i>Id</i> : proto.alpha.contract.missing_manager_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref54schema" class="ref54 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing manager contract
         The manager contract is missing from the storage */
      "kind": "branch",
      "id": "proto.alpha.contract.missing_manager_contract",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Negative storage input**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref55descr', 'ref55')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref55schema', 'ref55')">JSON Schema</button>
    
    </div>
    <div id="ref55descr" class="ref55 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The storage amount asked for an operation is null or negative</p><p><i>Id</i> : proto.alpha.contract.negative_storage_input<br/><i>Category</i> : temporary</p>
      </div><div id="ref55schema" class="ref55 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative storage input
         The storage amount asked for an operation is null or negative */
      "kind": "temporary",
      "id": "proto.alpha.contract.negative_storage_input" }</pre>
    </div>



**Unexpected non-empty transaction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref56descr', 'ref56')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref56schema', 'ref56')">JSON Schema</button>
    
    </div>
    <div id="ref56descr" class="ref56 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This address cannot initiate non-empty transactions</p><p><i>Id</i> : proto.alpha.contract.non_empty_transaction_from_source<br/><i>Category</i> : temporary</p>
      </div><div id="ref56schema" class="ref56 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected non-empty transaction
         This address cannot initiate non-empty transactions */
      "kind": "branch",
      "id": "proto.alpha.contract.non_empty_transaction_from_source",
      "source": $alpha.transaction_destination }
    $alpha.transaction_destination:
      /* A destination of a transaction
         A destination notation compatible with the contract notation as
         given to an RPC or inside scripts. Can be a base58 implicit contract
         hash, a base58 originated contract hash, a base58 originated
         transaction rollup, or a base58 originated smart rollup. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Non existing contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref57descr', 'ref57')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref57schema', 'ref57')">JSON Schema</button>
    
    </div>
    <div id="ref57descr" class="ref57 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A contract handle is not present in the context (either it never was or it has been destroyed)</p><p><i>Id</i> : proto.alpha.contract.non_existing_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref57schema" class="ref57 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Non existing contract
         A contract handle is not present in the context (either it never was
         or it has been destroyed) */
      "kind": "temporary",
      "id": "proto.alpha.contract.non_existing_contract",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Manager operation already revealed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref58descr', 'ref58')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref58schema', 'ref58')">JSON Schema</button>
    
    </div>
    <div id="ref58descr" class="ref58 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>One tried to reveal twice a manager public key</p><p><i>Id</i> : proto.alpha.contract.previously_revealed_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref58schema" class="ref58 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Manager operation already revealed
         One tried to reveal twice a manager public key */
      "kind": "branch",
      "id": "proto.alpha.contract.previously_revealed_key",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Manager operation precedes key revelation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref59descr', 'ref59')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref59schema', 'ref59')">JSON Schema</button>
    
    </div>
    <div id="ref59descr" class="ref59 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>One tried to apply a manager operation without revealing the manager public key</p><p><i>Id</i> : proto.alpha.contract.unrevealed_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref59schema" class="ref59 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Manager operation precedes key revelation
         One tried to apply a manager operation without revealing the manager
         public key */
      "kind": "branch",
      "id": "proto.alpha.contract.unrevealed_key",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Contract not originated**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref60descr', 'ref60')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref60schema', 'ref60')">JSON Schema</button>
    
    </div>
    <div id="ref60descr" class="ref60 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Non originated contract detected in ticket update.</p><p><i>Id</i> : proto.alpha.contract_not_originated<br/><i>Category</i> : temporary</p>
      </div><div id="ref60schema" class="ref60 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Contract not originated
         Non originated contract detected in ticket update. */
      "kind": "permanent",
      "id": "proto.alpha.contract_not_originated",
      ... }</pre>
    </div>



**DAL attestation exceeded the limit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref61descr', 'ref61')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref61schema', 'ref61')">JSON Schema</button>
    
    </div>
    <div id="ref61descr" class="ref61 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The attestation for data availability is a too big</p><p><i>Id</i> : proto.alpha.dal_attestation_size_limit_exceeded<br/><i>Category</i> : temporary</p>
      </div><div id="ref61schema" class="ref61 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL attestation exceeded the limit
         The attestation for data availability is a too big */
      "kind": "permanent",
      "id": "proto.alpha.dal_attestation_size_limit_exceeded",
      "maximum_size": integer ∈ [-2^30, 2^30],
      "got": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**DAL cryptobox error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref62descr', 'ref62')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref62schema', 'ref62')">JSON Schema</button>
    
    </div>
    <div id="ref62descr" class="ref62 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error occurred while initialising the cryptobox</p><p><i>Id</i> : proto.alpha.dal_cryptobox_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref62schema" class="ref62 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL cryptobox error
         Error occurred while initialising the cryptobox */
      "kind": "permanent",
      "id": "proto.alpha.dal_cryptobox_error",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid Dal page index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref63descr', 'ref63')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref63schema', 'ref63')">JSON Schema</button>
    
    </div>
    <div id="ref63descr" class="ref63 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given index is out of range of representable page indices</p><p><i>Id</i> : proto.alpha.dal_page_index_repr.index.invalid_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref63schema" class="ref63 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid Dal page index
         The given index is out of range of representable page indices */
      "kind": "permanent",
      "id": "proto.alpha.dal_page_index_repr.index.invalid_index",
      "given": integer ∈ [-2^30, 2^30],
      "min": integer ∈ [-2^30, 2^30],
      "max": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**DAL publish slot header duplicate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref64descr', 'ref64')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref64schema', 'ref64')">JSON Schema</button>
    
    </div>
    <div id="ref64descr" class="ref64 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A slot header for this slot was already proposed</p><p><i>Id</i> : proto.alpha.dal_publish_commitment_duplicate<br/><i>Category</i> : temporary</p>
      </div><div id="ref64schema" class="ref64 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL publish slot header duplicate
         A slot header for this slot was already proposed */
      "kind": "permanent",
      "id": "proto.alpha.dal_publish_commitment_duplicate",
      "proposed":
        { /* v0 */
          "version": "0",
          "level": integer ∈ [0, 2^31],
          "index": integer ∈ [0, 255],
          "commitment": $DAL_commitment } }
    $DAL_commitment:
      /* Commitment representation for the DAL (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**DAL slot header invalid index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref65descr', 'ref65')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref65schema', 'ref65')">JSON Schema</button>
    
    </div>
    <div id="ref65descr" class="ref65 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Bad index for slot header</p><p><i>Id</i> : proto.alpha.dal_publish_commitment_invalid_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref65schema" class="ref65 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL slot header invalid index
         Bad index for slot header */
      "kind": "permanent",
      "id": "proto.alpha.dal_publish_commitment_invalid_index",
      "given": integer ∈ [0, 255],
      "got": integer ∈ [0, 255] }</pre>
    </div>



**DAL publish slot header invalid proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref66descr', 'ref66')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref66schema', 'ref66')">JSON Schema</button>
    
    </div>
    <div id="ref66descr" class="ref66 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The slot header's commitment proof does not check</p><p><i>Id</i> : proto.alpha.dal_publish_commitment_invalid_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref66schema" class="ref66 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL publish slot header invalid proof
         The slot header's commitment proof does not check */
      "kind": "permanent",
      "id": "proto.alpha.dal_publish_commitment_invalid_proof",
      "commitment": $DAL_commitment,
      "commitment_proof": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
    $DAL_commitment:
      /* Commitment representation for the DAL (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**DAL slot header with low fees**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref67descr', 'ref67')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref67schema', 'ref67')">JSON Schema</button>
    
    </div>
    <div id="ref67descr" class="ref67 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Slot header with too low fees</p><p><i>Id</i> : proto.alpha.dal_publish_commitment_with_low_fees<br/><i>Category</i> : temporary</p>
      </div><div id="ref67schema" class="ref67 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL slot header with low fees
         Slot header with too low fees */
      "kind": "permanent",
      "id": "proto.alpha.dal_publish_commitment_with_low_fees",
      "proposed": $alpha.mutez }
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Dal register invalid slot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref68descr', 'ref68')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref68schema', 'ref68')">JSON Schema</button>
    
    </div>
    <div id="ref68descr" class="ref68 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to register a slot which is invalid (the index is out of bounds).</p><p><i>Id</i> : proto.alpha.dal_register_invalid_slot<br/><i>Category</i> : temporary</p>
      </div><div id="ref68schema" class="ref68 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Dal register invalid slot
         Attempt to register a slot which is invalid (the index is out of
         bounds). */
      "kind": "permanent",
      "id": "proto.alpha.dal_register_invalid_slot",
      "length": integer ∈ [-2^30, 2^30],
      "slot_header":
        { /* v0 */
          "version": "0",
          "level": integer ∈ [0, 2^31],
          "index": integer ∈ [0, 255],
          "commitment": $DAL_commitment } }
    $DAL_commitment:
      /* Commitment representation for the DAL (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**DAL slot index negative or above hard limit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref69descr', 'ref69')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref69schema', 'ref69')">JSON Schema</button>
    
    </div>
    <div id="ref69descr" class="ref69 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Slot index above hard limit</p><p><i>Id</i> : proto.alpha.dal_slot_index_negative_orabove_hard_limit<br/><i>Category</i> : temporary</p>
      </div><div id="ref69schema" class="ref69 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL slot index negative or above hard limit
         Slot index above hard limit */
      "kind": "permanent",
      "id": "proto.alpha.dal_slot_index_negative_orabove_hard_limit",
      "given": $int64,
      "limit": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>



**Invalid Dal slot index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref70descr', 'ref70')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref70schema', 'ref70')">JSON Schema</button>
    
    </div>
    <div id="ref70descr" class="ref70 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given index is out of range of representable slot indices</p><p><i>Id</i> : proto.alpha.dal_slot_index_repr.index.invalid_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref70schema" class="ref70 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid Dal slot index
         The given index is out of range of representable slot indices */
      "kind": "permanent",
      "id": "proto.alpha.dal_slot_index_repr.index.invalid_index",
      "given": integer ∈ [-2^30, 2^30],
      "min": integer ∈ [-2^30, 2^30],
      "max": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**DAL shard proof error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref71descr', 'ref71')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref71schema', 'ref71')">JSON Schema</button>
    
    </div>
    <div id="ref71descr" class="ref71 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An error occurred while validating the DAL shard proof.</p><p><i>Id</i> : proto.alpha.dal_slot_repr.shard_with_proof.dal_shard_proof_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref71schema" class="ref71 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL shard proof error
         An error occurred while validating the DAL shard proof. */
      "kind": "permanent",
      "id":
        "proto.alpha.dal_slot_repr.shard_with_proof.dal_shard_proof_error",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**encoding error in Dal.share_is_trap**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref72descr', 'ref72')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref72schema', 'ref72')">JSON Schema</button>
    
    </div>
    <div id="ref72descr" class="ref72 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An encoding error occurred while checking whether a shard is a trap.</p><p><i>Id</i> : proto.alpha.dal_slot_repr.shard_with_proof.share_is_trap_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref72schema" class="ref72 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* encoding error in Dal.share_is_trap
         An encoding error occurred while checking whether a shard is a trap. */
      "kind": "permanent",
      "id": "proto.alpha.dal_slot_repr.shard_with_proof.share_is_trap_error",
      ... }</pre>
    </div>



**DAL page proof error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref73descr', 'ref73')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref73schema', 'ref73')">JSON Schema</button>
    
    </div>
    <div id="ref73descr" class="ref73 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error occurred during DAL page proof production or validation</p><p><i>Id</i> : proto.alpha.dal_slot_repr.slots_history.dal_proof_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref73schema" class="ref73 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL page proof error
         Error occurred during DAL page proof production or validation */
      "kind": "permanent",
      "id": "proto.alpha.dal_slot_repr.slots_history.dal_proof_error",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected page size**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref74descr', 'ref74')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref74schema', 'ref74')">JSON Schema</button>
    
    </div>
    <div id="ref74descr" class="ref74 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The size of the given page content doesn't match the expected one.</p><p><i>Id</i> : proto.alpha.dal_slot_repr.slots_history.unexpected_page_size<br/><i>Category</i> : temporary</p>
      </div><div id="ref74schema" class="ref74 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected page size
         The size of the given page content doesn't match the expected one. */
      "kind": "permanent",
      "id": "proto.alpha.dal_slot_repr.slots_history.unexpected_page_size",
      "expected_size": integer ∈ [-2^15, 2^15-1],
      "page_size": integer ∈ [-2^15, 2^15-1] }</pre>
    </div>



**Delegate already active**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref75descr', 'ref75')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref75schema', 'ref75')">JSON Schema</button>
    
    </div>
    <div id="ref75descr" class="ref75 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Useless delegate reactivation</p><p><i>Id</i> : proto.alpha.delegate.already_active<br/><i>Category</i> : temporary</p>
      </div><div id="ref75schema" class="ref75 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Delegate already active
         Useless delegate reactivation */
      "kind": "temporary",
      "id": "proto.alpha.delegate.already_active" }</pre>
    </div>



**Active consensus key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref76descr', 'ref76')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref76schema', 'ref76')">JSON Schema</button>
    
    </div>
    <div id="ref76descr" class="ref76 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate consensus key is already used</p><p><i>Id</i> : proto.alpha.delegate.consensus_key.active<br/><i>Category</i> : temporary</p>
      </div><div id="ref76schema" class="ref76 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Active consensus key
         The delegate consensus key is already used */
      "kind": "permanent",
      "id": "proto.alpha.delegate.consensus_key.active",
      "consensus_pkh": $Signature.Public_key_hash,
      "kind": boolean }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Consensus key cannot be another delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref77descr', 'ref77')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref77schema', 'ref77')">JSON Schema</button>
    
    </div>
    <div id="ref77descr" class="ref77 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus key cannot be another delegate</p><p><i>Id</i> : proto.alpha.delegate.consensus_key.another_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref77schema" class="ref77 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus key cannot be another delegate
         Consensus key cannot be another delegate */
      "kind": "permanent",
      "id": "proto.alpha.delegate.consensus_key.another_delegate",
      "consensus_pkh": $Signature.Public_key_hash,
      "kind": boolean }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid key for consensus key update**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref78descr', 'ref78')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref78schema', 'ref78')">JSON Schema</button>
    
    </div>
    <div id="ref78descr" class="ref78 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to update the consensus key with the active key</p><p><i>Id</i> : proto.alpha.delegate.consensus_key.invalid_noop<br/><i>Category</i> : temporary</p>
      </div><div id="ref78schema" class="ref78 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid key for consensus key update
         Tried to update the consensus key with the active key */
      "kind": "permanent",
      "id": "proto.alpha.delegate.consensus_key.invalid_noop",
      "cycle": integer ∈ [-2^31-1, 2^31],
      "kind": boolean }</pre>
    </div>



**Consensus key cannot be a tz4**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref79descr', 'ref79')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref79schema', 'ref79')">JSON Schema</button>
    
    </div>
    <div id="ref79descr" class="ref79 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus key cannot be a tz4 (BLS public key).</p><p><i>Id</i> : proto.alpha.delegate.consensus_key.tz4<br/><i>Category</i> : temporary</p>
      </div><div id="ref79schema" class="ref79 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus key cannot be a tz4
         Consensus key cannot be a tz4 (BLS public key). */
      "kind": "permanent",
      "id": "proto.alpha.delegate.consensus_key.tz4",
      "delegate_pk": $Bls12_381.Public_key,
      "kind": boolean }
    $Bls12_381.Public_key:
      /* A Bls12_381 public key (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty delegate account**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref80descr', 'ref80')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref80schema', 'ref80')">JSON Schema</button>
    
    </div>
    <div id="ref80descr" class="ref80 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot register a delegate when its implicit account is empty</p><p><i>Id</i> : proto.alpha.delegate.empty_delegate_account<br/><i>Category</i> : temporary</p>
      </div><div id="ref80schema" class="ref80 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty delegate account
         Cannot register a delegate when its implicit account is empty */
      "kind": "permanent",
      "id": "proto.alpha.delegate.empty_delegate_account",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Forbidden delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref81descr', 'ref81')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref81schema', 'ref81')">JSON Schema</button>
    
    </div>
    <div id="ref81descr" class="ref81 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Delegates are forbidden to be tz4 (BLS) accounts.</p><p><i>Id</i> : proto.alpha.delegate.forbidden_tz4<br/><i>Category</i> : temporary</p>
      </div><div id="ref81schema" class="ref81 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Forbidden delegate
         Delegates are forbidden to be tz4 (BLS) accounts. */
      "kind": "branch",
      "id": "proto.alpha.delegate.forbidden_tz4",
      "delegate": $Bls12_381.Public_key_hash }
    $Bls12_381.Public_key_hash:
      /* A Bls12_381 public key hash (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Forbidden delegate deletion**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref82descr', 'ref82')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref82schema', 'ref82')">JSON Schema</button>
    
    </div>
    <div id="ref82descr" class="ref82 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to unregister a delegate</p><p><i>Id</i> : proto.alpha.delegate.no_deletion<br/><i>Category</i> : temporary</p>
      </div><div id="ref82schema" class="ref82 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Forbidden delegate deletion
         Tried to unregister a delegate */
      "kind": "permanent",
      "id": "proto.alpha.delegate.no_deletion",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Not a registered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref83descr', 'ref83')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref83schema', 'ref83')">JSON Schema</button>
    
    </div>
    <div id="ref83descr" class="ref83 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided public key hash is not the address of a registered delegate.</p><p><i>Id</i> : proto.alpha.delegate.not_registered<br/><i>Category</i> : temporary</p>
      </div><div id="ref83schema" class="ref83 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not a registered delegate
         The provided public key hash is not the address of a registered
         delegate. */
      "kind": "temporary",
      "id": "proto.alpha.delegate.not_registered",
      "pkh": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Stake distribution not set**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref84descr', 'ref84')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref84schema', 'ref84')">JSON Schema</button>
    
    </div>
    <div id="ref84descr" class="ref84 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The stake distribution for the current cycle is not set.</p><p><i>Id</i> : proto.alpha.delegate.stake_distribution_not_set<br/><i>Category</i> : temporary</p>
      </div><div id="ref84schema" class="ref84 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Stake distribution not set
         The stake distribution for the current cycle is not set. */
      "kind": "permanent",
      "id": "proto.alpha.delegate.stake_distribution_not_set" }</pre>
    </div>



**Unchanged delegated**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref85descr', 'ref85')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref85schema', 'ref85')">JSON Schema</button>
    
    </div>
    <div id="ref85descr" class="ref85 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Contract already delegated to the given delegate</p><p><i>Id</i> : proto.alpha.delegate.unchanged<br/><i>Category</i> : temporary</p>
      </div><div id="ref85schema" class="ref85 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unchanged delegated
         Contract already delegated to the given delegate */
      "kind": "temporary",
      "id": "proto.alpha.delegate.unchanged" }</pre>
    </div>



**Balance request for an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref86descr', 'ref86')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref86schema', 'ref86')">JSON Schema</button>
    
    </div>
    <div id="ref86descr" class="ref86 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The account whose balance was requested is not a delegate.</p><p><i>Id</i> : proto.alpha.delegate_service.balance_rpc_on_non_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref86schema" class="ref86 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Balance request for an unregistered delegate
         The account whose balance was requested is not a delegate. */
      "kind": "temporary",
      "id": "proto.alpha.delegate_service.balance_rpc_on_non_delegate",
      "pkh": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Destination decoding failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref87descr', 'ref87')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref87schema', 'ref87')">JSON Schema</button>
    
    </div>
    <div id="ref87descr" class="ref87 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to read a valid destination from a b58check_encoding data</p><p><i>Id</i> : proto.alpha.destination_repr.invalid_b58check<br/><i>Category</i> : temporary</p>
      </div><div id="ref87schema" class="ref87 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Destination decoding failed
         Failed to read a valid destination from a b58check_encoding data */
      "kind": "permanent",
      "id": "proto.alpha.destination_repr.invalid_b58check",
      "input": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid bitfield’s position**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref88descr', 'ref88')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref88schema', 'ref88')">JSON Schema</button>
    
    </div>
    <div id="ref88descr" class="ref88 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Bitfields do not accept negative positions</p><p><i>Id</i> : proto.alpha.env.bitfield_invalid_position<br/><i>Category</i> : temporary</p>
      </div><div id="ref88schema" class="ref88 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid bitfield’s position
         Bitfields do not accept negative positions */
      "kind": "permanent",
      "id": "proto.alpha.env.bitfield_invalid_position",
      "position": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Exception**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref89descr', 'ref89')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref89schema', 'ref89')">JSON Schema</button>
    
    </div>
    <div id="ref89descr" class="ref89 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Exception safely wrapped in an error</p><p><i>Id</i> : proto.alpha.failure<br/><i>Category</i> : temporary</p>
      </div><div id="ref89schema" class="ref89 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Exception
         Exception safely wrapped in an error */
      "kind": "temporary",
      "id": "proto.alpha.failure",
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Partial spending of frozen bonds**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref90descr', 'ref90')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref90schema', 'ref90')">JSON Schema</button>
    
    </div>
    <div id="ref90descr" class="ref90 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Frozen bonds must be spent at once.</p><p><i>Id</i> : proto.alpha.frozen_bonds.must_be_spent_at_once<br/><i>Category</i> : temporary</p>
      </div><div id="ref90schema" class="ref90 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Partial spending of frozen bonds
         Frozen bonds must be spent at once. */
      "kind": "permanent",
      "id": "proto.alpha.frozen_bonds.must_be_spent_at_once",
      "contract": $alpha.contract_id,
      "bond_id": $alpha.bond_id }
    $alpha.bond_id:
      { /* Smart_rollup_bond_id */
        "smart_rollup": $smart_rollup_address }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $smart_rollup_address:
      /* A smart rollup address (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Gas quota exceeded for the block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref91descr', 'ref91')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref91schema', 'ref91')">JSON Schema</button>
    
    </div>
    <div id="ref91descr" class="ref91 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The sum of gas consumed by all the operations in the block exceeds the hard gas limit per block</p><p><i>Id</i> : proto.alpha.gas_exhausted.block<br/><i>Category</i> : temporary</p>
      </div><div id="ref91schema" class="ref91 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Gas quota exceeded for the block
         The sum of gas consumed by all the operations in the block exceeds
         the hard gas limit per block */
      "kind": "temporary",
      "id": "proto.alpha.gas_exhausted.block" }</pre>
    </div>



**Gas quota exceeded for the operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref92descr', 'ref92')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref92schema', 'ref92')">JSON Schema</button>
    
    </div>
    <div id="ref92descr" class="ref92 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A script or one of its callee took more time than the operation said it would</p><p><i>Id</i> : proto.alpha.gas_exhausted.operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref92schema" class="ref92 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Gas quota exceeded for the operation
         A script or one of its callee took more time than the operation said
         it would */
      "kind": "temporary",
      "id": "proto.alpha.gas_exhausted.operation" }</pre>
    </div>



**Gas limit out of protocol hard bounds**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref93descr', 'ref93')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref93schema', 'ref93')">JSON Schema</button>
    
    </div>
    <div id="ref93descr" class="ref93 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A transaction tried to exceed the hard limit on gas</p><p><i>Id</i> : proto.alpha.gas_limit_too_high<br/><i>Category</i> : temporary</p>
      </div><div id="ref93schema" class="ref93 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Gas limit out of protocol hard bounds
         A transaction tried to exceed the hard limit on gas */
      "kind": "permanent",
      "id": "proto.alpha.gas_limit_too_high" }</pre>
    </div>



**An entrypoint type is incompatible with TZIP-4 view type.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref94descr', 'ref94')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref94schema', 'ref94')">JSON Schema</button>
    
    </div>
    <div id="ref94descr" class="ref94 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An entrypoint type is incompatible with TZIP-4 view type.</p><p><i>Id</i> : proto.alpha.illformedViewType<br/><i>Category</i> : temporary</p>
      </div><div id="ref94schema" class="ref94 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* An entrypoint type is incompatible with TZIP-4 view type.
         An entrypoint type is incompatible with TZIP-4 view type. */
      "kind": "permanent",
      "id": "proto.alpha.illformedViewType",
      "entrypoint": $unistring,
      "type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty implicit contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref95descr', 'ref95')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref95schema', 'ref95')">JSON Schema</button>
    
    </div>
    <div id="ref95descr" class="ref95 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No manager operations are allowed on an empty implicit contract. This account has zero balance. Fund it before using.</p><p><i>Id</i> : proto.alpha.implicit.empty_implicit_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref95schema" class="ref95 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty implicit contract
         No manager operations are allowed on an empty implicit contract.
         This account has zero balance. Fund it before using. */
      "kind": "branch",
      "id": "proto.alpha.implicit.empty_implicit_contract",
      "implicit": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty implicit delegated contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref96descr', 'ref96')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref96schema', 'ref96')">JSON Schema</button>
    
    </div>
    <div id="ref96descr" class="ref96 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Emptying an implicit delegated account is not allowed.</p><p><i>Id</i> : proto.alpha.implicit.empty_implicit_delegated_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref96schema" class="ref96 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty implicit delegated contract
         Emptying an implicit delegated account is not allowed. */
      "kind": "branch",
      "id": "proto.alpha.implicit.empty_implicit_delegated_contract",
      "implicit": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Index of values cannot be negative**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref97descr', 'ref97')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref97schema', 'ref97')">JSON Schema</button>
    
    </div>
    <div id="ref97descr" class="ref97 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A negative integer cannot be used as an index for a value.</p><p><i>Id</i> : proto.alpha.indexable.index_cannot_be_negative<br/><i>Category</i> : temporary</p>
      </div><div id="ref97schema" class="ref97 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Index of values cannot be negative
         A negative integer cannot be used as an index for a value. */
      "kind": "permanent",
      "id": "proto.alpha.indexable.index_cannot_be_negative",
      "wrong_index": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Internal error: trying to add zero messages**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref98descr', 'ref98')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref98schema', 'ref98')">JSON Schema</button>
    
    </div>
    <div id="ref98descr" class="ref98 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Message adding functions must be called with a positive number of messages</p><p><i>Id</i> : proto.alpha.internal.smart_rollup_add_zero_messages<br/><i>Category</i> : temporary</p>
      </div><div id="ref98schema" class="ref98 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Internal error: trying to add zero messages
         Message adding functions must be called with a positive number of
         messages */
      "kind": "permanent",
      "id": "proto.alpha.internal.smart_rollup_add_zero_messages" }</pre>
    </div>



**Internal error: error occurred during proof production or validation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref99descr', 'ref99')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref99schema', 'ref99')">JSON Schema</button>
    
    </div>
    <div id="ref99descr" class="ref99 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An inbox proof error.</p><p><i>Id</i> : proto.alpha.internal.smart_rollup_inbox_proof_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref99schema" class="ref99 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Internal error: error occurred during proof production or validation
         An inbox proof error. */
      "kind": "permanent",
      "id": "proto.alpha.internal.smart_rollup_inbox_proof_error",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Internal error: error occurred during proof production or validation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref100descr', 'ref100')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref100schema', 'ref100')">JSON Schema</button>
    
    </div>
    <div id="ref100descr" class="ref100 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A merkelized payload hashes proof error.</p><p><i>Id</i> : proto.alpha.internal.smart_rollup_merklized_payload_hashes_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref100schema" class="ref100 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Internal error: error occurred during proof production or validation
         A merkelized payload hashes proof error. */
      "kind": "permanent",
      "id":
        "proto.alpha.internal.smart_rollup_merklized_payload_hashes_proof",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Internal operation replay**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref101descr', 'ref101')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref101schema', 'ref101')">JSON Schema</button>
    
    </div>
    <div id="ref101descr" class="ref101 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An internal operation was emitted twice by a script</p><p><i>Id</i> : proto.alpha.internal_operation_replay<br/><i>Category</i> : temporary</p>
      </div><div id="ref101schema" class="ref101 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Internal operation replay
       An internal operation was emitted twice by a script */
    { /* Transaction */
      "kind": "permanent",
      "id": "proto.alpha.internal_operation_replay",
      "source": $alpha.transaction_destination,
      "nonce": integer ∈ [0, 2^16-1],
      "kind": "transaction",
      "amount": $alpha.mutez,
      "destination": $alpha.transaction_destination,
      "parameters"?: { "entrypoint": $alpha.entrypoint,
                       "value": any } }
    || { /* Origination */
         "kind": "permanent",
         "id": "proto.alpha.internal_operation_replay",
         "source": $alpha.transaction_destination,
         "nonce": integer ∈ [0, 2^16-1],
         "kind": "origination",
         "balance": $alpha.mutez,
         "delegate"?: $Signature.Public_key_hash,
         "script": $alpha.scripted.contracts }
    || { /* Delegation */
         "kind": "permanent",
         "id": "proto.alpha.internal_operation_replay",
         "source": $alpha.transaction_destination,
         "nonce": integer ∈ [0, 2^16-1],
         "kind": "delegation",
         "delegate"?: $Signature.Public_key_hash }
    || { /* Event */
         "kind": "permanent",
         "id": "proto.alpha.internal_operation_replay",
         "source": $alpha.transaction_destination,
         "nonce": integer ∈ [0, 2^16-1],
         "kind": "event",
         "type": $micheline.alpha.michelson_v1.expression,
         "tag"?: $alpha.entrypoint,
         "payload"?: $micheline.alpha.michelson_v1.expression }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $alpha.entrypoint:
      /* entrypoint
         Named entrypoint to a Michelson smart contract */
      "default"
      || "root"
      || "do"
      || "set_delegate"
      || "remove_delegate"
      || "deposit"
      || "stake"
      || "unstake"
      || "finalize_unstake"
      || "set_delegate_parameters"
      || $unistring
      /* named */
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $alpha.mutez: $positive_bignum
    $alpha.scripted.contracts: { "code": any,
                                 "storage": any }
    $alpha.transaction_destination:
      /* A destination of a transaction
         A destination notation compatible with the contract notation as
         given to an RPC or inside scripts. Can be a base58 implicit contract
         hash, a base58 originated contract hash, a base58 originated
         transaction rollup, or a base58 originated smart rollup. */
      $unistring
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref102descr', 'ref102')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref102schema', 'ref102')">JSON Schema</button>
    
    </div>
    <div id="ref102descr" class="ref102 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Negative multiple of periods are not allowed.</p><p><i>Id</i> : proto.alpha.invalid_arg<br/><i>Category</i> : temporary</p>
      </div><div id="ref102schema" class="ref102 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid arg
         Negative multiple of periods are not allowed. */
      "kind": "permanent",
      "id": "proto.alpha.invalid_arg" }</pre>
    </div>



**Invalid binary format**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref103descr', 'ref103')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref103schema', 'ref103')">JSON Schema</button>
    
    </div>
    <div id="ref103descr" class="ref103 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Could not deserialize some piece of data from its binary representation</p><p><i>Id</i> : proto.alpha.invalid_binary_format<br/><i>Category</i> : temporary</p>
      </div><div id="ref103schema" class="ref103 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid binary format
         Could not deserialize some piece of data from its binary
         representation */
      "kind": "permanent",
      "id": "proto.alpha.invalid_binary_format" }</pre>
    </div>



**Invalid fitness**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref104descr', 'ref104')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref104schema', 'ref104')">JSON Schema</button>
    
    </div>
    <div id="ref104descr" class="ref104 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Fitness representation should be exactly 4 times 4 bytes long.</p><p><i>Id</i> : proto.alpha.invalid_fitness<br/><i>Category</i> : temporary</p>
      </div><div id="ref104schema" class="ref104 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid fitness
         Fitness representation should be exactly 4 times 4 bytes long. */
      "kind": "permanent",
      "id": "proto.alpha.invalid_fitness" }</pre>
    </div>



**Invalid ticket transfer**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref105descr', 'ref105')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref105schema', 'ref105')">JSON Schema</button>
    
    </div>
    <div id="ref105descr" class="ref105 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid ticket transfer detected in ticket balance update.</p><p><i>Id</i> : proto.alpha.invalid_ticket_transfer<br/><i>Category</i> : temporary</p>
      </div><div id="ref105schema" class="ref105 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid ticket transfer
         Invalid ticket transfer detected in ticket balance update. */
      "kind": "permanent",
      "id": "proto.alpha.invalid_ticket_transfer",
      "ticketer": $unistring,
      "amount": $bignum }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Level not in Alpha family**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref106descr', 'ref106')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref106schema', 'ref106')">JSON Schema</button>
    
    </div>
    <div id="ref106descr" class="ref106 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Level not in Alpha family</p><p><i>Id</i> : proto.alpha.level_not_in_alpha<br/><i>Category</i> : temporary</p>
      </div><div id="ref106schema" class="ref106 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Level not in Alpha family
         Level not in Alpha family */
      "kind": "permanent",
      "id": "proto.alpha.level_not_in_alpha",
      "level": integer ∈ [0, 2^31] }</pre>
    </div>



**level offset too high**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref107descr', 'ref107')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref107schema', 'ref107')">JSON Schema</button>
    
    </div>
    <div id="ref107descr" class="ref107 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block's level offset is too high.</p><p><i>Id</i> : proto.alpha.level_offset_too_high<br/><i>Category</i> : temporary</p>
      </div><div id="ref107schema" class="ref107 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* level offset too high
         The block's level offset is too high. */
      "kind": "permanent",
      "id": "proto.alpha.level_offset_too_high",
      "level_offset_too_high": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>



**Invalid cycle eras**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref108descr', 'ref108')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref108schema', 'ref108')">JSON Schema</button>
    
    </div>
    <div id="ref108descr" class="ref108 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The cycles eras are not valid: empty list or non-decreasing first levels or first cycles.</p><p><i>Id</i> : proto.alpha.level_repr.invalid_cycle_eras<br/><i>Category</i> : temporary</p>
      </div><div id="ref108schema" class="ref108 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid cycle eras
         The cycles eras are not valid: empty list or non-decreasing first
         levels or first cycles. */
      "kind": "temporary",
      "id": "proto.alpha.level_repr.invalid_cycle_eras" }</pre>
    </div>



**Locked round not smaller than round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref109descr', 'ref109')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref109schema', 'ref109')">JSON Schema</button>
    
    </div>
    <div id="ref109descr" class="ref109 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The round is smaller than or equal to the locked round.</p><p><i>Id</i> : proto.alpha.locked_round_not_less_than_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref109schema" class="ref109 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Locked round not smaller than round
         The round is smaller than or equal to the locked round. */
      "kind": "permanent",
      "id": "proto.alpha.locked_round_not_less_than_round",
      "round": integer ∈ [-2^31-1, 2^31],
      "locked_round": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**cannot_apply_in_partial_validation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref110descr', 'ref110')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref110schema', 'ref110')">JSON Schema</button>
    
    </div>
    <div id="ref110descr" class="ref110 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot instantiate an application state using the 'Partial_validation' mode.</p><p><i>Id</i> : proto.alpha.main.begin_application.cannot_apply_in_partial_validation<br/><i>Category</i> : temporary</p>
      </div><div id="ref110schema" class="ref110 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* cannot_apply_in_partial_validation
         Cannot instantiate an application state using the
         'Partial_validation' mode. */
      "kind": "permanent",
      "id":
        "proto.alpha.main.begin_application.cannot_apply_in_partial_validation" }</pre>
    </div>



**Malformed period**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref111descr', 'ref111')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref111schema', 'ref111')">JSON Schema</button>
    
    </div>
    <div id="ref111descr" class="ref111 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Period is negative.</p><p><i>Id</i> : proto.alpha.malformed_period<br/><i>Category</i> : temporary</p>
      </div><div id="ref111schema" class="ref111 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Malformed period
         Period is negative. */
      "kind": "permanent",
      "id": "proto.alpha.malformed_period",
      "malformed_period": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>



**Contract supplied an invalid parameter**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref112descr', 'ref112')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref112schema', 'ref112')">JSON Schema</button>
    
    </div>
    <div id="ref112descr" class="ref112 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Either no parameter was supplied to a contract with a non-unit parameter type, a non-unit parameter was passed to an account, or a parameter was supplied of the wrong type</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_contract_parameter<br/><i>Category</i> : temporary</p>
      </div><div id="ref112schema" class="ref112 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Contract supplied an invalid parameter
         Either no parameter was supplied to a contract with a non-unit
         parameter type, a non-unit parameter was passed to an account, or a
         parameter was supplied of the wrong type */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_contract_parameter",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**0 passed to DUP n**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref113descr', 'ref113')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref113schema', 'ref113')">JSON Schema</button>
    
    </div>
    <div id="ref113descr" class="ref113 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>DUP expects an argument of at least 1 (passed 0)</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_dupn_argument<br/><i>Category</i> : temporary</p>
      </div><div id="ref113schema" class="ref113 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* 0 passed to DUP n
         DUP expects an argument of at least 1 (passed 0) */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_dupn_argument",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Stack too short when typing DUP n**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref114descr', 'ref114')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref114schema', 'ref114')">JSON Schema</button>
    
    </div>
    <div id="ref114descr" class="ref114 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Stack present when typing DUP n was too short</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_dupn_stack<br/><i>Category</i> : temporary</p>
      </div><div id="ref114schema" class="ref114 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Stack too short when typing DUP n
         Stack present when typing DUP n was too short */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_dupn_stack",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**0 or 1 passed to PAIR**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref115descr', 'ref115')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref115schema', 'ref115')">JSON Schema</button>
    
    </div>
    <div id="ref115descr" class="ref115 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>PAIR expects an argument of at least 2</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_pair_argument<br/><i>Category</i> : temporary</p>
      </div><div id="ref115schema" class="ref115 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* 0 or 1 passed to PAIR
         PAIR expects an argument of at least 2 */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_pair_argument",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Bad return**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref116descr', 'ref116')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref116schema', 'ref116')">JSON Schema</button>
    
    </div>
    <div id="ref116descr" class="ref116 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected stack at the end of a lambda or script.</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_return<br/><i>Category</i> : temporary</p>
      </div><div id="ref116schema" class="ref116 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad return
         Unexpected stack at the end of a lambda or script. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_return",
      "location": $micheline.location,
      "expected_return_type": $micheline.alpha.michelson_v1.expression,
      "wrong_stack_type": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad stack**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref117descr', 'ref117')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref117schema', 'ref117')">JSON Schema</button>
    
    </div>
    <div id="ref117descr" class="ref117 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The stack has an unexpected length or contents.</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_stack<br/><i>Category</i> : temporary</p>
      </div><div id="ref117schema" class="ref117 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad stack
         The stack has an unexpected length or contents. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_stack",
      "location": $micheline.location,
      "primitive_name": $alpha.michelson.v1.primitives,
      "relevant_stack_portion": integer ∈ [-2^15, 2^15-1],
      "wrong_stack_type": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad stack item**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref118descr', 'ref118')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref118schema', 'ref118')">JSON Schema</button>
    
    </div>
    <div id="ref118descr" class="ref118 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The type of a stack item is unexpected (this error is always accompanied by a more precise one).</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_stack_item<br/><i>Category</i> : temporary</p>
      </div><div id="ref118schema" class="ref118 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad stack item
         The type of a stack item is unexpected (this error is always
         accompanied by a more precise one). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_stack_item",
      "item_level": integer ∈ [-2^15, 2^15-1] }</pre>
    </div>



**0 or 1 passed to UNPAIR**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref119descr', 'ref119')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref119schema', 'ref119')">JSON Schema</button>
    
    </div>
    <div id="ref119descr" class="ref119 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>UNPAIR expects an argument of at least 2</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_unpair_argument<br/><i>Category</i> : temporary</p>
      </div><div id="ref119schema" class="ref119 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* 0 or 1 passed to UNPAIR
         UNPAIR expects an argument of at least 2 */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_unpair_argument",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Bad view name**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref120descr', 'ref120')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref120schema', 'ref120')">JSON Schema</button>
    
    </div>
    <div id="ref120descr" class="ref120 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a view declaration, the view name must be a string</p><p><i>Id</i> : proto.alpha.michelson_v1.bad_view_name<br/><i>Category</i> : temporary</p>
      </div><div id="ref120schema" class="ref120 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad view name
         In a view declaration, the view name must be a string */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.bad_view_name",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Not enough gas to serialize argument of FAILWITH**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref121descr', 'ref121')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref121schema', 'ref121')">JSON Schema</button>
    
    </div>
    <div id="ref121descr" class="ref121 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Argument of FAILWITH was too big to be serialized with the provided gas</p><p><i>Id</i> : proto.alpha.michelson_v1.cannot_serialize_failure<br/><i>Category</i> : temporary</p>
      </div><div id="ref121schema" class="ref121 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough gas to serialize argument of FAILWITH
         Argument of FAILWITH was too big to be serialized with the provided
         gas */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.cannot_serialize_failure" }</pre>
    </div>



**Not enough gas to serialize execution trace**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref122descr', 'ref122')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref122schema', 'ref122')">JSON Schema</button>
    
    </div>
    <div id="ref122descr" class="ref122 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Execution trace with stacks was to big to be serialized with the provided gas</p><p><i>Id</i> : proto.alpha.michelson_v1.cannot_serialize_log<br/><i>Category</i> : temporary</p>
      </div><div id="ref122schema" class="ref122 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough gas to serialize execution trace
         Execution trace with stacks was to big to be serialized with the
         provided gas */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.cannot_serialize_log" }</pre>
    </div>



**Not enough gas to serialize execution storage**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref123descr', 'ref123')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref123schema', 'ref123')">JSON Schema</button>
    
    </div>
    <div id="ref123descr" class="ref123 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The returned storage was too big to be serialized with the provided gas</p><p><i>Id</i> : proto.alpha.michelson_v1.cannot_serialize_storage<br/><i>Category</i> : temporary</p>
      </div><div id="ref123schema" class="ref123 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough gas to serialize execution storage
         The returned storage was too big to be serialized with the provided
         gas */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.cannot_serialize_storage" }</pre>
    </div>



**Comparable type expected**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref124descr', 'ref124')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref124schema', 'ref124')">JSON Schema</button>
    
    </div>
    <div id="ref124descr" class="ref124 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A non comparable type was used in a place where only comparable types are accepted.</p><p><i>Id</i> : proto.alpha.michelson_v1.comparable_type_expected<br/><i>Category</i> : temporary</p>
      </div><div id="ref124schema" class="ref124 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Comparable type expected
         A non comparable type was used in a place where only comparable
         types are accepted. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.comparable_type_expected",
      "location": $micheline.location,
      "wrong_type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Script is using a deprecated instruction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref125descr', 'ref125')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref125schema', 'ref125')">JSON Schema</button>
    
    </div>
    <div id="ref125descr" class="ref125 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A deprecated instruction usage is disallowed in newly created contracts</p><p><i>Id</i> : proto.alpha.michelson_v1.deprecated_instruction<br/><i>Category</i> : temporary</p>
      </div><div id="ref125schema" class="ref125 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script is using a deprecated instruction
         A deprecated instruction usage is disallowed in newly created
         contracts */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.deprecated_instruction",
      "prim": $alpha.michelson.v1.primitives }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"</pre>
    </div>



**Duplicate entrypoint (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref126descr', 'ref126')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref126schema', 'ref126')">JSON Schema</button>
    
    </div>
    <div id="ref126descr" class="ref126 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Two entrypoints have the same name.</p><p><i>Id</i> : proto.alpha.michelson_v1.duplicate_entrypoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref126schema" class="ref126 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Duplicate entrypoint (type error)
         Two entrypoints have the same name. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.duplicate_entrypoint",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Duplicate map keys**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref127descr', 'ref127')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref127schema', 'ref127')">JSON Schema</button>
    
    </div>
    <div id="ref127descr" class="ref127 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Map literals cannot contain duplicated keys</p><p><i>Id</i> : proto.alpha.michelson_v1.duplicate_map_keys<br/><i>Category</i> : temporary</p>
      </div><div id="ref127schema" class="ref127 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Duplicate map keys
         Map literals cannot contain duplicated keys */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.duplicate_map_keys",
      "location": $micheline.location,
      "item": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Script has a duplicated field (parse error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref128descr', 'ref128')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref128schema', 'ref128')">JSON Schema</button>
    
    </div>
    <div id="ref128descr" class="ref128 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When parsing script, a field was found more than once</p><p><i>Id</i> : proto.alpha.michelson_v1.duplicate_script_field<br/><i>Category</i> : temporary</p>
      </div><div id="ref128schema" class="ref128 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script has a duplicated field (parse error)
         When parsing script, a field was found more than once */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.duplicate_script_field",
      "loc": $micheline.location,
      "prim": $alpha.michelson.v1.primitives }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Sets literals cannot contain duplicate elements**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref129descr', 'ref129')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref129schema', 'ref129')">JSON Schema</button>
    
    </div>
    <div id="ref129descr" class="ref129 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Set literals cannot contain duplicate elements, but a duplicate was found while parsing.</p><p><i>Id</i> : proto.alpha.michelson_v1.duplicate_set_values_in_literal<br/><i>Category</i> : temporary</p>
      </div><div id="ref129schema" class="ref129 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Sets literals cannot contain duplicate elements
         Set literals cannot contain duplicate elements, but a duplicate was
         found while parsing. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.duplicate_set_values_in_literal",
      "location": $micheline.location,
      "value": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Duplicated view name**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref130descr', 'ref130')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref130schema', 'ref130')">JSON Schema</button>
    
    </div>
    <div id="ref130descr" class="ref130 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The name of view in toplevel should be unique.</p><p><i>Id</i> : proto.alpha.michelson_v1.duplicated_view_name<br/><i>Category</i> : temporary</p>
      </div><div id="ref130schema" class="ref130 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Duplicated view name
         The name of view in toplevel should be unique. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.duplicated_view_name",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Entrypoint name too long (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref131descr', 'ref131')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref131schema', 'ref131')">JSON Schema</button>
    
    </div>
    <div id="ref131descr" class="ref131 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An entrypoint name exceeds the maximum length of 31 characters.</p><p><i>Id</i> : proto.alpha.michelson_v1.entrypoint_name_too_long<br/><i>Category</i> : temporary</p>
      </div><div id="ref131schema" class="ref131 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Entrypoint name too long (type error)
         An entrypoint name exceeds the maximum length of 31 characters. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.entrypoint_name_too_long",
      "name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**FAIL not in tail position**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref132descr', 'ref132')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref132schema', 'ref132')">JSON Schema</button>
    
    </div>
    <div id="ref132descr" class="ref132 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>There is non trivial garbage code after a FAIL instruction.</p><p><i>Id</i> : proto.alpha.michelson_v1.fail_not_in_tail_position<br/><i>Category</i> : temporary</p>
      </div><div id="ref132schema" class="ref132 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* FAIL not in tail position
         There is non trivial garbage code after a FAIL instruction. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.fail_not_in_tail_position",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Forbidden instruction in context**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref133descr', 'ref133')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref133schema', 'ref133')">JSON Schema</button>
    
    </div>
    <div id="ref133descr" class="ref133 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An instruction was encountered in a context where it is forbidden.</p><p><i>Id</i> : proto.alpha.michelson_v1.forbidden_instr_in_context<br/><i>Category</i> : temporary</p>
      </div><div id="ref133schema" class="ref133 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Forbidden instruction in context
         An instruction was encountered in a context where it is forbidden. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.forbidden_instr_in_context",
      "location": $micheline.location,
      "context": $alpha.michelson_v1.context_desc,
      "forbidden_instruction": $alpha.michelson.v1.primitives }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $alpha.michelson_v1.context_desc: "View" | "Lambda"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Zero ticket amount is not allowed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref134descr', 'ref134')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref134schema', 'ref134')">JSON Schema</button>
    
    </div>
    <div id="ref134descr" class="ref134 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>It is not allowed to use a zero amount ticket in this operation.</p><p><i>Id</i> : proto.alpha.michelson_v1.forbidden_zero_amount_ticket<br/><i>Category</i> : temporary</p>
      </div><div id="ref134schema" class="ref134 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zero ticket amount is not allowed
         It is not allowed to use a zero amount ticket in this operation. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.forbidden_zero_amount_ticket" }</pre>
    </div>



**Ill formed type**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref135descr', 'ref135')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref135schema', 'ref135')">JSON Schema</button>
    
    </div>
    <div id="ref135descr" class="ref135 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The toplevel error thrown when trying to parse a type expression (always followed by more precise errors).</p><p><i>Id</i> : proto.alpha.michelson_v1.ill_formed_type<br/><i>Category</i> : temporary</p>
      </div><div id="ref135schema" class="ref135 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill formed type
         The toplevel error thrown when trying to parse a type expression
         (always followed by more precise errors). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.ill_formed_type",
      "identifier"?: $unistring,
      "ill_formed_expression": $micheline.alpha.michelson_v1.expression,
      "location": $micheline.location }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ill typed contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref136descr', 'ref136')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref136schema', 'ref136')">JSON Schema</button>
    
    </div>
    <div id="ref136descr" class="ref136 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The toplevel error thrown when trying to typecheck a contract code against given input, output and storage types (always followed by more precise errors).</p><p><i>Id</i> : proto.alpha.michelson_v1.ill_typed_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref136schema" class="ref136 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill typed contract
         The toplevel error thrown when trying to typecheck a contract code
         against given input, output and storage types (always followed by
         more precise errors). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.ill_typed_contract",
      "ill_typed_code": $micheline.alpha.michelson_v1.expression,
      "type_map":
        [ { "location": $micheline.location,
            "stack_before": [ $micheline.alpha.michelson_v1.expression ... ],
            "stack_after": [ $micheline.alpha.michelson_v1.expression ... ] } ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ill typed data**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref137descr', 'ref137')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref137schema', 'ref137')">JSON Schema</button>
    
    </div>
    <div id="ref137descr" class="ref137 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The toplevel error thrown when trying to typecheck a data expression against a given type (always followed by more precise errors).</p><p><i>Id</i> : proto.alpha.michelson_v1.ill_typed_data<br/><i>Category</i> : temporary</p>
      </div><div id="ref137schema" class="ref137 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill typed data
         The toplevel error thrown when trying to typecheck a data expression
         against a given type (always followed by more precise errors). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.ill_typed_data",
      "identifier"?: $unistring,
      "expected_type": $micheline.alpha.michelson_v1.expression,
      "ill_typed_expression": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ill typed view**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref138descr', 'ref138')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref138schema', 'ref138')">JSON Schema</button>
    
    </div>
    <div id="ref138descr" class="ref138 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The return of a view block did not match the expected type</p><p><i>Id</i> : proto.alpha.michelson_v1.ill_typed_view<br/><i>Category</i> : temporary</p>
      </div><div id="ref138schema" class="ref138 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill typed view
         The return of a view block did not match the expected type */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.ill_typed_view",
      "loc": $micheline.location,
      "resulted_view_stack": [ $micheline.alpha.michelson_v1.expression ... ],
      "expected_view_stack": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent memo sizes**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref139descr', 'ref139')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref139schema', 'ref139')">JSON Schema</button>
    
    </div>
    <div id="ref139descr" class="ref139 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Memo sizes of two sapling states or transactions do not match</p><p><i>Id</i> : proto.alpha.michelson_v1.inconsistent_memo_sizes<br/><i>Category</i> : temporary</p>
      </div><div id="ref139schema" class="ref139 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent memo sizes
         Memo sizes of two sapling states or transactions do not match */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.inconsistent_memo_sizes",
      "first_memo_size": integer ∈ [0, 2^16-1],
      "other_memo_size": integer ∈ [0, 2^16-1] }</pre>
    </div>



**Inconsistent stack lengths**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref140descr', 'ref140')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref140schema', 'ref140')">JSON Schema</button>
    
    </div>
    <div id="ref140descr" class="ref140 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A stack was of an unexpected length (this error is always in the context of a located error).</p><p><i>Id</i> : proto.alpha.michelson_v1.inconsistent_stack_lengths<br/><i>Category</i> : temporary</p>
      </div><div id="ref140schema" class="ref140 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent stack lengths
         A stack was of an unexpected length (this error is always in the
         context of a located error). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.inconsistent_stack_lengths" }</pre>
    </div>



**Inconsistent type sizes**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref141descr', 'ref141')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref141schema', 'ref141')">JSON Schema</button>
    
    </div>
    <div id="ref141descr" class="ref141 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Two types were expected to be equal but they have different sizes.</p><p><i>Id</i> : proto.alpha.michelson_v1.inconsistent_type_sizes<br/><i>Category</i> : temporary</p>
      </div><div id="ref141schema" class="ref141 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent type sizes
         Two types were expected to be equal but they have different sizes. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.inconsistent_type_sizes",
      "first_type_size": integer ∈ [-2^30, 2^30],
      "other_type_size": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Inconsistent types**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref142descr', 'ref142')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref142schema', 'ref142')">JSON Schema</button>
    
    </div>
    <div id="ref142descr" class="ref142 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This is the basic type clash error, that appears in several places where the equality of two types have to be proven, it is always accompanied with another error that provides more context.</p><p><i>Id</i> : proto.alpha.michelson_v1.inconsistent_types<br/><i>Category</i> : temporary</p>
      </div><div id="ref142schema" class="ref142 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent types
         This is the basic type clash error, that appears in several places
         where the equality of two types have to be proven, it is always
         accompanied with another error that provides more context. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.inconsistent_types",
      "loc": $micheline.location,
      "first_type": $micheline.alpha.michelson_v1.expression,
      "other_type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid arity**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref143descr', 'ref143')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref143schema', 'ref143')">JSON Schema</button>
    
    </div>
    <div id="ref143descr" class="ref143 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive was applied to an unsupported number of arguments.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_arity<br/><i>Category</i> : temporary</p>
      </div><div id="ref143schema" class="ref143 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid arity
         In a script or data expression, a primitive was applied to an
         unsupported number of arguments. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_arity",
      "location": $micheline.location,
      "primitive_name": $alpha.michelson.v1.primitives,
      "expected_arity": integer ∈ [-128, 127],
      "wrong_arity": integer ∈ [-128, 127] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid big_map**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref144descr', 'ref144')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref144schema', 'ref144')">JSON Schema</button>
    
    </div>
    <div id="ref144descr" class="ref144 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A script or data expression references a big_map that does not exist or assumes a wrong type for an existing big_map.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_big_map<br/><i>Category</i> : temporary</p>
      </div><div id="ref144schema" class="ref144 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid big_map
         A script or data expression references a big_map that does not exist
         or assumes a wrong type for an existing big_map. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_big_map",
      "location": $micheline.location,
      "big_map": $alpha.big_map_id }
    $alpha.big_map_id:
      /* Big map identifier
         A big map identifier */
      $bignum
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid constant**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref145descr', 'ref145')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref145schema', 'ref145')">JSON Schema</button>
    
    </div>
    <div id="ref145descr" class="ref145 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A data expression was invalid for its expected type.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_constant<br/><i>Category</i> : temporary</p>
      </div><div id="ref145schema" class="ref145 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid constant
         A data expression was invalid for its expected type. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_constant",
      "location": $micheline.location,
      "expected_type": $micheline.alpha.michelson_v1.expression,
      "wrong_expression": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref146descr', 'ref146')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref146schema', 'ref146')">JSON Schema</button>
    
    </div>
    <div id="ref146descr" class="ref146 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A script or data expression references a contract that does not exist or assumes a wrong type for an existing contract.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref146schema" class="ref146 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid contract
         A script or data expression references a contract that does not
         exist or assumes a wrong type for an existing contract. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_contract",
      "location": $micheline.location,
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid expression kind**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref147descr', 'ref147')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref147schema', 'ref147')">JSON Schema</button>
    
    </div>
    <div id="ref147descr" class="ref147 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, an expression was of the wrong kind (for instance a string where only a primitive applications can appear).</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_expression_kind<br/><i>Category</i> : temporary</p>
      </div><div id="ref147schema" class="ref147 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid expression kind
         In a script or data expression, an expression was of the wrong kind
         (for instance a string where only a primitive applications can
         appear). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_expression_kind",
      "location": $micheline.location,
      "expected_kinds": [ $alpha.expressionKind ... ],
      "wrong_kind": $alpha.expressionKind }
    $alpha.expressionKind:
      /* Expression kind
         One of the four possible kinds of expression (integer, string,
         primitive application or sequence). */
      "string" | "integer" | "sequence" | "primitiveApplication" | "bytes"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**ITER body returned wrong stack type**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref148descr', 'ref148')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref148schema', 'ref148')">JSON Schema</button>
    
    </div>
    <div id="ref148descr" class="ref148 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The body of an ITER instruction must result in the same stack type as before the ITER.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_iter_body<br/><i>Category</i> : temporary</p>
      </div><div id="ref148schema" class="ref148 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* ITER body returned wrong stack type
         The body of an ITER instruction must result in the same stack type
         as before the ITER. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_iter_body",
      "loc": $micheline.location,
      "bef_stack": [ $micheline.alpha.michelson_v1.expression ... ],
      "aft_stack": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**FAIL instruction occurred as body of map block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref149descr', 'ref149')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref149schema', 'ref149')">JSON Schema</button>
    
    </div>
    <div id="ref149descr" class="ref149 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>FAIL cannot be the only instruction in the body. The proper type of the return list cannot be inferred.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_map_block_fail<br/><i>Category</i> : temporary</p>
      </div><div id="ref149schema" class="ref149 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* FAIL instruction occurred as body of map block
         FAIL cannot be the only instruction in the body. The proper type of
         the return list cannot be inferred. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_map_block_fail",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid map body**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref150descr', 'ref150')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref150schema', 'ref150')">JSON Schema</button>
    
    </div>
    <div id="ref150descr" class="ref150 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The body of a map block did not match the expected type</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_map_body<br/><i>Category</i> : temporary</p>
      </div><div id="ref150schema" class="ref150 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid map body
         The body of a map block did not match the expected type */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_map_body",
      "loc": $micheline.location,
      "body_type": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid expression for type never**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref151descr', 'ref151')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref151schema', 'ref151')">JSON Schema</button>
    
    </div>
    <div id="ref151descr" class="ref151 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, an expression was provided but a value of type never was expected. No expression can have type never.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_never_expr<br/><i>Category</i> : temporary</p>
      </div><div id="ref151schema" class="ref151 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid expression for type never
         In a script or data expression, an expression was provided but a
         value of type never was expected. No expression can have type never. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_never_expr",
      "location": $micheline.location,
      ... }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref152descr', 'ref152')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref152schema', 'ref152')">JSON Schema</button>
    
    </div>
    <div id="ref152descr" class="ref152 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive was unknown.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_primitive<br/><i>Category</i> : temporary</p>
      </div><div id="ref152schema" class="ref152 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid primitive
         In a script or data expression, a primitive was unknown. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_primitive",
      "location": $micheline.location,
      "expected_primitive_names"?: [ $alpha.michelson.v1.primitives ... ],
      "wrong_primitive_name": $alpha.michelson.v1.primitives }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid primitive name**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref153descr', 'ref153')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref153schema', 'ref153')">JSON Schema</button>
    
    </div>
    <div id="ref153descr" class="ref153 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive name is unknown or has a wrong case.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_primitive_name<br/><i>Category</i> : temporary</p>
      </div><div id="ref153schema" class="ref153 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid primitive name
         In a script or data expression, a primitive name is unknown or has a
         wrong case. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_primitive_name",
      "expression": $micheline.alpha.generic.expression,
      "location": $micheline.location }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.generic.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.generic.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha.generic.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid primitive name case**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref154descr', 'ref154')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref154schema', 'ref154')">JSON Schema</button>
    
    </div>
    <div id="ref154descr" class="ref154 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive name is neither uppercase, lowercase or capitalized.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_primitive_name_case<br/><i>Category</i> : temporary</p>
      </div><div id="ref154schema" class="ref154 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid primitive name case
         In a script or data expression, a primitive name is neither
         uppercase, lowercase or capitalized. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_primitive_name_case",
      "wrong_primitive_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid primitive namespace**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref155descr', 'ref155')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref155schema', 'ref155')">JSON Schema</button>
    
    </div>
    <div id="ref155descr" class="ref155 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive was of the wrong namespace.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_primitive_namespace<br/><i>Category</i> : temporary</p>
      </div><div id="ref155schema" class="ref155 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid primitive namespace
         In a script or data expression, a primitive was of the wrong
         namespace. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_primitive_namespace",
      "location": $micheline.location,
      "primitive_name": $alpha.michelson.v1.primitives,
      "expected_namespace": $alpha.primitiveNamespace,
      "wrong_namespace": $alpha.primitiveNamespace }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $alpha.primitiveNamespace:
      /* Primitive namespace
         One of the five possible namespaces of primitive (data constructor,
         type name, instruction, keyword, or constant hash). */
      "constant" | "type" | "constant_hash" | "keyword" | "instruction"
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid sequence arity**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref156descr', 'ref156')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref156schema', 'ref156')">JSON Schema</button>
    
    </div>
    <div id="ref156descr" class="ref156 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a sequence was used with a number of elements too small.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_seq_arity<br/><i>Category</i> : temporary</p>
      </div><div id="ref156schema" class="ref156 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid sequence arity
         In a script or data expression, a sequence was used with a number of
         elements too small. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_seq_arity",
      "location": $micheline.location,
      "minimal_expected_arity": integer ∈ [-128, 127],
      "wrong_arity": integer ∈ [-128, 127] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Invalid constant (parse error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref157descr', 'ref157')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref157schema', 'ref157')">JSON Schema</button>
    
    </div>
    <div id="ref157descr" class="ref157 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A compile-time constant was invalid for its expected form.</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_syntactic_constant<br/><i>Category</i> : temporary</p>
      </div><div id="ref157schema" class="ref157 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid constant (parse error)
         A compile-time constant was invalid for its expected form. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_syntactic_constant",
      "location": $micheline.location,
      "expected_form": $unistring,
      "wrong_expression": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid ticket amount**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref158descr', 'ref158')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref158schema', 'ref158')">JSON Schema</button>
    
    </div>
    <div id="ref158descr" class="ref158 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Ticket amount to be deposited in a transaction rollup should be strictly positive and fit in a signed 64-bit integer</p><p><i>Id</i> : proto.alpha.michelson_v1.invalid_tx_rollup_ticket_amount<br/><i>Category</i> : temporary</p>
      </div><div id="ref158schema" class="ref158 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid ticket amount
         Ticket amount to be deposited in a transaction rollup should be
         strictly positive and fit in a signed 64-bit integer */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.invalid_tx_rollup_ticket_amount",
      "requested_value": $bignum }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string</pre>
    </div>



**Script is missing a field (parse error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref159descr', 'ref159')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref159schema', 'ref159')">JSON Schema</button>
    
    </div>
    <div id="ref159descr" class="ref159 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When parsing script, a field was expected, but not provided</p><p><i>Id</i> : proto.alpha.michelson_v1.missing_script_field<br/><i>Category</i> : temporary</p>
      </div><div id="ref159schema" class="ref159 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script is missing a field (parse error)
         When parsing script, a field was expected, but not provided */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.missing_script_field",
      "prim": $alpha.michelson.v1.primitives }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"</pre>
    </div>



**No such entrypoint (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref160descr', 'ref160')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref160schema', 'ref160')">JSON Schema</button>
    
    </div>
    <div id="ref160descr" class="ref160 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An entrypoint was not found when calling a contract.</p><p><i>Id</i> : proto.alpha.michelson_v1.no_such_entrypoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref160schema" class="ref160 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No such entrypoint (type error)
         An entrypoint was not found when calling a contract. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.no_such_entrypoint",
      "entrypoint": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Non-dupable type duplication attempt**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref161descr', 'ref161')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref161schema', 'ref161')">JSON Schema</button>
    
    </div>
    <div id="ref161descr" class="ref161 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>DUP was used on a non-dupable type (e.g. tickets).</p><p><i>Id</i> : proto.alpha.michelson_v1.non_dupable_type<br/><i>Category</i> : temporary</p>
      </div><div id="ref161schema" class="ref161 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Non-dupable type duplication attempt
         DUP was used on a non-dupable type (e.g. tickets). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.non_dupable_type",
      "loc": $micheline.location,
      "type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Non printable character in a Michelson string**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref162descr', 'ref162')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref162schema', 'ref162')">JSON Schema</button>
    
    </div>
    <div id="ref162descr" class="ref162 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Michelson strings are only allowed to contain printable characters (either the newline character or characters in the [32, 126] ASCII range).</p><p><i>Id</i> : proto.alpha.michelson_v1.non_printable_character<br/><i>Category</i> : temporary</p>
      </div><div id="ref162schema" class="ref162 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Non printable character in a Michelson string
         Michelson strings are only allowed to contain printable characters
         (either the newline character or characters in the [32, 126] ASCII
         range). */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.non_printable_character",
      "position": integer ∈ [-2^30, 2^30],
      "string": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Script runtime error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref163descr', 'ref163')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref163schema', 'ref163')">JSON Schema</button>
    
    </div>
    <div id="ref163descr" class="ref163 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Toplevel error for all runtime script errors</p><p><i>Id</i> : proto.alpha.michelson_v1.runtime_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref163schema" class="ref163 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script runtime error
         Toplevel error for all runtime script errors */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.runtime_error",
      "contract_handle": $alpha.contract_id.originated,
      "contract_code": "Deprecated" }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Sc rollup are disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref164descr', 'ref164')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref164schema', 'ref164')">JSON Schema</button>
    
    </div>
    <div id="ref164descr" class="ref164 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot use smart rollup features as they are disabled.</p><p><i>Id</i> : proto.alpha.michelson_v1.sc_rollup_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref164schema" class="ref164 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Sc rollup are disabled
         Cannot use smart rollup features as they are disabled. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.sc_rollup_disabled",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Script failed (overflow error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref165descr', 'ref165')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref165schema', 'ref165')">JSON Schema</button>
    
    </div>
    <div id="ref165descr" class="ref165 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While interpreting a Michelson script, an overflow was detected</p><p><i>Id</i> : proto.alpha.michelson_v1.script_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref165schema" class="ref165 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script failed (overflow error)
         While interpreting a Michelson script, an overflow was detected */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.script_overflow",
      "location": $micheline.location,
      "trace"?:
        [ { "location": $micheline.location,
            "gas": $bignum,
            "stack": [ $micheline.alpha.michelson_v1.expression ... ] } ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Script failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref166descr', 'ref166')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref166schema', 'ref166')">JSON Schema</button>
    
    </div>
    <div id="ref166descr" class="ref166 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A FAILWITH instruction was reached</p><p><i>Id</i> : proto.alpha.michelson_v1.script_rejected<br/><i>Category</i> : temporary</p>
      </div><div id="ref166schema" class="ref166 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Script failed
         A FAILWITH instruction was reached */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.script_rejected",
      "location": $micheline.location,
      "with": $micheline.alpha.michelson_v1.expression,
      "trace"?:
        [ { "location": $micheline.location,
            "gas": $bignum,
            "stack": [ $micheline.alpha.michelson_v1.expression ... ] } ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad deposit parameter**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref167descr', 'ref167')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref167schema', 'ref167')">JSON Schema</button>
    
    </div>
    <div id="ref167descr" class="ref167 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The parameter to the deposit entrypoint of a transaction rollup should be a pair of a ticket and the address of a recipient transaction rollup.</p><p><i>Id</i> : proto.alpha.michelson_v1.tx_rollup_bad_deposit_parameter<br/><i>Category</i> : temporary</p>
      </div><div id="ref167schema" class="ref167 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad deposit parameter
         The parameter to the deposit entrypoint of a transaction rollup
         should be a pair of a ticket and the address of a recipient
         transaction rollup. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.tx_rollup_bad_deposit_parameter",
      "location": $micheline.location,
      "parameter": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Stack item type too large**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref168descr', 'ref168')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref168schema', 'ref168')">JSON Schema</button>
    
    </div>
    <div id="ref168descr" class="ref168 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An instruction generated a type larger than the limit.</p><p><i>Id</i> : proto.alpha.michelson_v1.type_too_large<br/><i>Category</i> : temporary</p>
      </div><div id="ref168schema" class="ref168 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Stack item type too large
         An instruction generated a type larger than the limit. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.type_too_large",
      "loc": $micheline.location,
      "maximum_type_size": integer ∈ [0, 2^16-1] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Too many recursive calls during typechecking**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref169descr', 'ref169')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref169schema', 'ref169')">JSON Schema</button>
    
    </div>
    <div id="ref169descr" class="ref169 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Too many recursive calls were needed for typechecking</p><p><i>Id</i> : proto.alpha.michelson_v1.typechecking_too_many_recursive_calls<br/><i>Category</i> : temporary</p>
      </div><div id="ref169schema" class="ref169 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too many recursive calls during typechecking
         Too many recursive calls were needed for typechecking */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.typechecking_too_many_recursive_calls" }</pre>
    </div>



**Undefined binop**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref170descr', 'ref170')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref170schema', 'ref170')">JSON Schema</button>
    
    </div>
    <div id="ref170descr" class="ref170 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A binary operation is called on operands of types over which it is not defined.</p><p><i>Id</i> : proto.alpha.michelson_v1.undefined_binop<br/><i>Category</i> : temporary</p>
      </div><div id="ref170schema" class="ref170 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Undefined binop
         A binary operation is called on operands of types over which it is
         not defined. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.undefined_binop",
      "location": $micheline.location,
      "operator_name": $alpha.michelson.v1.primitives,
      "wrong_left_operand_type": $micheline.alpha.michelson_v1.expression,
      "wrong_right_operand_type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Undefined unop**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref171descr', 'ref171')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref171schema', 'ref171')">JSON Schema</button>
    
    </div>
    <div id="ref171descr" class="ref171 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A unary operation is called on an operand of type over which it is not defined.</p><p><i>Id</i> : proto.alpha.michelson_v1.undefined_unop<br/><i>Category</i> : temporary</p>
      </div><div id="ref171schema" class="ref171 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Undefined unop
         A unary operation is called on an operand of type over which it is
         not defined. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.undefined_unop",
      "location": $micheline.location,
      "operator_name": $alpha.michelson.v1.primitives,
      "wrong_operand_type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**An annotation was encountered where no annotation is expected**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref172descr', 'ref172')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref172schema', 'ref172')">JSON Schema</button>
    
    </div>
    <div id="ref172descr" class="ref172 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A node in the syntax tree was improperly annotated</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_annotation<br/><i>Category</i> : temporary</p>
      </div><div id="ref172schema" class="ref172 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* An annotation was encountered where no annotation is expected
         A node in the syntax tree was improperly annotated */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_annotation",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Contract in unauthorized position (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref173descr', 'ref173')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref173schema', 'ref173')">JSON Schema</button>
    
    </div>
    <div id="ref173descr" class="ref173 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When parsing script, a contract type was found in the storage or parameter field.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_contract<br/><i>Category</i> : temporary</p>
      </div><div id="ref173schema" class="ref173 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Contract in unauthorized position (type error)
         When parsing script, a contract type was found in the storage or
         parameter field. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_contract",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**The annotation 'default' was encountered where an entrypoint is expected**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref174descr', 'ref174')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref174schema', 'ref174')">JSON Schema</button>
    
    </div>
    <div id="ref174descr" class="ref174 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A node in the syntax tree was improperly annotated. An annotation used to designate an entrypoint cannot be exactly 'default'.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_default_entrypoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref174schema" class="ref174 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The annotation 'default' was encountered where an entrypoint is
         expected
         A node in the syntax tree was improperly annotated. An annotation
         used to designate an entrypoint cannot be exactly 'default'. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_default_entrypoint",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Unexpected forged value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref175descr', 'ref175')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref175schema', 'ref175')">JSON Schema</button>
    
    </div>
    <div id="ref175descr" class="ref175 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A forged value was encountered but disallowed for that position.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_forged_value<br/><i>Category</i> : temporary</p>
      </div><div id="ref175schema" class="ref175 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected forged value
         A forged value was encountered but disallowed for that position. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_forged_value",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Unexpected implicit account parameters type**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref176descr', 'ref176')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref176schema', 'ref176')">JSON Schema</button>
    
    </div>
    <div id="ref176descr" class="ref176 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An implicit account can only accept either a unit or a ticket value as a call parameter.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_implicit_account_parameters_type<br/><i>Category</i> : temporary</p>
      </div><div id="ref176schema" class="ref176 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected implicit account parameters type
         An implicit account can only accept either a unit or a ticket value
         as a call parameter. */
      "kind": "permanent",
      "id":
        "proto.alpha.michelson_v1.unexpected_implicit_account_parameters_type",
      "loc": $micheline.location,
      "type": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Lazy storage in unauthorized position (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref177descr', 'ref177')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref177schema', 'ref177')">JSON Schema</button>
    
    </div>
    <div id="ref177descr" class="ref177 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When parsing script, a big_map or sapling_state type was found in a position where it could end up stored inside a big_map, which is forbidden for now.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_lazy_storage<br/><i>Category</i> : temporary</p>
      </div><div id="ref177schema" class="ref177 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Lazy storage in unauthorized position (type error)
         When parsing script, a big_map or sapling_state type was found in a
         position where it could end up stored inside a big_map, which is
         forbidden for now. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_lazy_storage",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Operation in unauthorized position (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref178descr', 'ref178')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref178schema', 'ref178')">JSON Schema</button>
    
    </div>
    <div id="ref178descr" class="ref178 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When parsing script, an operation type was found in the storage or parameter field.</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref178schema" class="ref178 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation in unauthorized position (type error)
         When parsing script, an operation type was found in the storage or
         parameter field. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_operation",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Ticket in unauthorized position (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref179descr', 'ref179')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref179schema', 'ref179')">JSON Schema</button>
    
    </div>
    <div id="ref179descr" class="ref179 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A ticket type has been found</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_ticket<br/><i>Category</i> : temporary</p>
      </div><div id="ref179schema" class="ref179 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ticket in unauthorized position (type error)
         A ticket type has been found */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_ticket",
      "loc": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Unexpected ticket owner**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref180descr', 'ref180')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref180schema', 'ref180')">JSON Schema</button>
    
    </div>
    <div id="ref180descr" class="ref180 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Ticket can only be created by a smart contract</p><p><i>Id</i> : proto.alpha.michelson_v1.unexpected_ticket_owner<br/><i>Category</i> : temporary</p>
      </div><div id="ref180schema" class="ref180 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected ticket owner
         Ticket can only be created by a smart contract */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unexpected_ticket_owner",
      "ticketer": $alpha.transaction_destination }
    $alpha.transaction_destination:
      /* A destination of a transaction
         A destination notation compatible with the contract notation as
         given to an RPC or inside scripts. Can be a base58 implicit contract
         hash, a base58 originated contract hash, a base58 originated
         transaction rollup, or a base58 originated smart rollup. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Annotations of the same kind were found spread apart**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref181descr', 'ref181')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref181schema', 'ref181')">JSON Schema</button>
    
    </div>
    <div id="ref181descr" class="ref181 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Annotations of the same kind must be grouped</p><p><i>Id</i> : proto.alpha.michelson_v1.ungrouped_annotations<br/><i>Category</i> : temporary</p>
      </div><div id="ref181schema" class="ref181 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Annotations of the same kind were found spread apart
         Annotations of the same kind must be grouped */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.ungrouped_annotations",
      "location": $micheline.location }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]</pre>
    </div>



**Unknown primitive name**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref182descr', 'ref182')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref182schema', 'ref182')">JSON Schema</button>
    
    </div>
    <div id="ref182descr" class="ref182 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>In a script or data expression, a primitive was unknown.</p><p><i>Id</i> : proto.alpha.michelson_v1.unknown_primitive_name<br/><i>Category</i> : temporary</p>
      </div><div id="ref182schema" class="ref182 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown primitive name
         In a script or data expression, a primitive was unknown. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unknown_primitive_name",
      "wrong_primitive_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unmatched branches**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref183descr', 'ref183')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref183schema', 'ref183')">JSON Schema</button>
    
    </div>
    <div id="ref183descr" class="ref183 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>At the join point at the end of two code branches the stacks have inconsistent lengths or contents.</p><p><i>Id</i> : proto.alpha.michelson_v1.unmatched_branches<br/><i>Category</i> : temporary</p>
      </div><div id="ref183schema" class="ref183 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unmatched branches
         At the join point at the end of two code branches the stacks have
         inconsistent lengths or contents. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unmatched_branches",
      "location": $micheline.location,
      "first_stack_type": [ $micheline.alpha.michelson_v1.expression ... ],
      "other_stack_type": [ $micheline.alpha.michelson_v1.expression ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid map key order**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref184descr', 'ref184')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref184schema', 'ref184')">JSON Schema</button>
    
    </div>
    <div id="ref184descr" class="ref184 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Map keys must be in strictly increasing order</p><p><i>Id</i> : proto.alpha.michelson_v1.unordered_map_literal<br/><i>Category</i> : temporary</p>
      </div><div id="ref184schema" class="ref184 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid map key order
         Map keys must be in strictly increasing order */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unordered_map_literal",
      "location": $micheline.location,
      "item": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid set value order**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref185descr', 'ref185')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref185schema', 'ref185')">JSON Schema</button>
    
    </div>
    <div id="ref185descr" class="ref185 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Set values must be in strictly increasing order</p><p><i>Id</i> : proto.alpha.michelson_v1.unordered_set_literal<br/><i>Category</i> : temporary</p>
      </div><div id="ref185schema" class="ref185 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid set value order
         Set values must be in strictly increasing order */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unordered_set_literal",
      "location": $micheline.location,
      "value": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Too many recursive calls during unparsing**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref186descr', 'ref186')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref186schema', 'ref186')">JSON Schema</button>
    
    </div>
    <div id="ref186descr" class="ref186 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Too many recursive calls were needed for unparsing</p><p><i>Id</i> : proto.alpha.michelson_v1.unparsing_stack_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref186schema" class="ref186 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too many recursive calls during unparsing
         Too many recursive calls were needed for unparsing */
      "kind": "temporary",
      "id": "proto.alpha.michelson_v1.unparsing_stack_overflow" }</pre>
    </div>



**Unreachable entrypoint (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref187descr', 'ref187')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref187schema', 'ref187')">JSON Schema</button>
    
    </div>
    <div id="ref187descr" class="ref187 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An entrypoint in the contract is not reachable.</p><p><i>Id</i> : proto.alpha.michelson_v1.unreachable_entrypoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref187schema" class="ref187 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unreachable entrypoint (type error)
         An entrypoint in the contract is not reachable. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.unreachable_entrypoint",
      "path": [ $alpha.michelson.v1.primitives ... ] }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"</pre>
    </div>



**View name too long (type error)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref188descr', 'ref188')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref188schema', 'ref188')">JSON Schema</button>
    
    </div>
    <div id="ref188descr" class="ref188 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A view name exceeds the maximum length of 31 characters.</p><p><i>Id</i> : proto.alpha.michelson_v1.view_name_too_long<br/><i>Category</i> : temporary</p>
      </div><div id="ref188schema" class="ref188 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* View name too long (type error)
         A view name exceeds the maximum length of 31 characters. */
      "kind": "permanent",
      "id": "proto.alpha.michelson_v1.view_name_too_long",
      "name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Negative sum of level and offset**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref189descr', 'ref189')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref189schema', 'ref189')">JSON Schema</button>
    
    </div>
    <div id="ref189descr" class="ref189 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Negative sum of level and offset</p><p><i>Id</i> : proto.alpha.negative_level_and_offset_sum<br/><i>Category</i> : temporary</p>
      </div><div id="ref189schema" class="ref189 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative sum of level and offset
         Negative sum of level and offset */
      "kind": "permanent",
      "id": "proto.alpha.negative_level_and_offset_sum",
      "level": integer ∈ [-2^31-1, 2^31],
      "offset": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**The specified level offset is negative**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref190descr', 'ref190')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref190schema', 'ref190')">JSON Schema</button>
    
    </div>
    <div id="ref190descr" class="ref190 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The specified level offset is negative</p><p><i>Id</i> : proto.alpha.negative_level_offset<br/><i>Category</i> : temporary</p>
      </div><div id="ref190schema" class="ref190 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The specified level offset is negative
         The specified level offset is negative */
      "kind": "permanent",
      "id": "proto.alpha.negative_level_offset",
      ... }</pre>
    </div>



**Negative round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref191descr', 'ref191')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref191schema', 'ref191')">JSON Schema</button>
    
    </div>
    <div id="ref191descr" class="ref191 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Round cannot be built out of negative integers.</p><p><i>Id</i> : proto.alpha.negative_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref191schema" class="ref191 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative round
         Round cannot be built out of negative integers. */
      "kind": "permanent",
      "id": "proto.alpha.negative_round",
      "Negative_round": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>



**Already revealed nonce**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref192descr', 'ref192')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref192schema', 'ref192')">JSON Schema</button>
    
    </div>
    <div id="ref192descr" class="ref192 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Duplicated revelation for a nonce.</p><p><i>Id</i> : proto.alpha.nonce.already_revealed<br/><i>Category</i> : temporary</p>
      </div><div id="ref192schema" class="ref192 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Already revealed nonce
         Duplicated revelation for a nonce. */
      "kind": "branch",
      "id": "proto.alpha.nonce.already_revealed",
      ... }</pre>
    </div>



**Inconsistent nonce**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref193descr', 'ref193')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref193schema', 'ref193')">JSON Schema</button>
    
    </div>
    <div id="ref193descr" class="ref193 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided nonce is inconsistent with the committed nonce hash.</p><p><i>Id</i> : proto.alpha.nonce.inconsistent<br/><i>Category</i> : temporary</p>
      </div><div id="ref193schema" class="ref193 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent nonce
         The provided nonce is inconsistent with the committed nonce hash. */
      "kind": "branch",
      "id": "proto.alpha.nonce.inconsistent",
      ... }</pre>
    </div>



**Too early nonce revelation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref194descr', 'ref194')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref194schema', 'ref194')">JSON Schema</button>
    
    </div>
    <div id="ref194descr" class="ref194 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Nonce revelation happens before cycle end</p><p><i>Id</i> : proto.alpha.nonce.too_early_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref194schema" class="ref194 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too early nonce revelation
         Nonce revelation happens before cycle end */
      "kind": "temporary",
      "id": "proto.alpha.nonce.too_early_revelation",
      ... }</pre>
    </div>



**Too late nonce revelation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref195descr', 'ref195')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref195schema', 'ref195')">JSON Schema</button>
    
    </div>
    <div id="ref195descr" class="ref195 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Nonce revelation happens too late</p><p><i>Id</i> : proto.alpha.nonce.too_late_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref195schema" class="ref195 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too late nonce revelation
         Nonce revelation happens too late */
      "kind": "branch",
      "id": "proto.alpha.nonce.too_late_revelation",
      ... }</pre>
    </div>



**The Arith PVM is disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref196descr', 'ref196')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref196schema', 'ref196')">JSON Schema</button>
    
    </div>
    <div id="ref196descr" class="ref196 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Arith PVM is disabled in this network.</p><p><i>Id</i> : proto.alpha.operation.arith_pvm_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref196schema" class="ref196 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The Arith PVM is disabled
         Arith PVM is disabled in this network. */
      "kind": "permanent",
      "id": "proto.alpha.operation.arith_pvm_disabled",
      ... }</pre>
    </div>



**Ballot from an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref197descr', 'ref197')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref197schema', 'ref197')">JSON Schema</button>
    
    </div>
    <div id="ref197descr" class="ref197 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot cast a ballot for an unregistered delegate.</p><p><i>Id</i> : proto.alpha.operation.ballot_from_unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref197schema" class="ref197 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ballot from an unregistered delegate
         Cannot cast a ballot for an unregistered delegate. */
      "kind": "permanent",
      "id": "proto.alpha.operation.ballot_from_unregistered_delegate",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot parse operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref198descr', 'ref198')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref198schema', 'ref198')">JSON Schema</button>
    
    </div>
    <div id="ref198descr" class="ref198 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation is ill-formed or for another protocol version</p><p><i>Id</i> : proto.alpha.operation.cannot_parse<br/><i>Category</i> : temporary</p>
      </div><div id="ref198schema" class="ref198 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot parse operation
         The operation is ill-formed or for another protocol version */
      "kind": "branch",
      "id": "proto.alpha.operation.cannot_parse",
      ... }</pre>
    </div>



**Cannot stake with unfinalizable unstake requests to another delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref199descr', 'ref199')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref199schema', 'ref199')">JSON Schema</button>
    
    </div>
    <div id="ref199descr" class="ref199 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A contract tries to stake to its delegate while having unstake requests to a previous delegate that cannot be finalized yet. Try again in a later cycle (no more than consensus_rights_delay + max_slashing_period).</p><p><i>Id</i> : proto.alpha.operation.cannot_stake_with_unfinalizable_unstake_requests_to_another_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref199schema" class="ref199 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot stake with unfinalizable unstake requests to another delegate
         A contract tries to stake to its delegate while having unstake
         requests to a previous delegate that cannot be finalized yet. Try
         again in a later cycle (no more than consensus_rights_delay +
         max_slashing_period). */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.cannot_stake_with_unfinalizable_unstake_requests_to_another_delegate",
      ... }</pre>
    </div>



**Cannot unstake with unfinalizable unstake requests to another delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref200descr', 'ref200')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref200schema', 'ref200')">JSON Schema</button>
    
    </div>
    <div id="ref200descr" class="ref200 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot unstake with unfinalizable unstake requests to another delegate</p><p><i>Id</i> : proto.alpha.operation.cannot_unstake_with_unfinalizable_unstake_requests_to_another_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref200schema" class="ref200 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot unstake with unfinalizable unstake requests to another
         delegate
         Cannot unstake with unfinalizable unstake requests to another
         delegate */
      "kind": "permanent",
      "id":
        "proto.alpha.operation.cannot_unstake_with_unfinalizable_unstake_requests_to_another_delegate",
      ... }</pre>
    </div>



**Invalid list of operation contents.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref201descr', 'ref201')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref201schema', 'ref201')">JSON Schema</button>
    
    </div>
    <div id="ref201descr" class="ref201 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An operation contents list has an unexpected shape; it should be either a single operation or a non-empty list of manager operations</p><p><i>Id</i> : proto.alpha.operation.contents_list_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref201schema" class="ref201 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid list of operation contents.
         An operation contents list has an unexpected shape; it should be
         either a single operation or a non-empty list of manager operations */
      "kind": "permanent",
      "id": "proto.alpha.operation.contents_list_error",
      "message": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }</pre>
    </div>



**DAL is disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref202descr', 'ref202')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref202schema', 'ref202')">JSON Schema</button>
    
    </div>
    <div id="ref202descr" class="ref202 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Data-availability layer will be enabled in a future proposal.</p><p><i>Id</i> : proto.alpha.operation.dal_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref202schema" class="ref202 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL is disabled
         Data-availability layer will be enabled in a future proposal. */
      "kind": "permanent",
      "id": "proto.alpha.operation.dal_disabled",
      ... }</pre>
    </div>



**DAL incentives are disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref203descr', 'ref203')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref203schema', 'ref203')">JSON Schema</button>
    
    </div>
    <div id="ref203descr" class="ref203 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Incentives for the DAL are not yet enabled.</p><p><i>Id</i> : proto.alpha.operation.dal_incentives_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref203schema" class="ref203 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* DAL incentives are disabled
         Incentives for the DAL are not yet enabled. */
      "kind": "permanent",
      "id": "proto.alpha.operation.dal_incentives_disabled",
      ... }</pre>
    </div>



**Double inclusion of consensus operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref204descr', 'ref204')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref204schema', 'ref204')">JSON Schema</button>
    
    </div>
    <div id="ref204descr" class="ref204 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>double inclusion of consensus operation</p><p><i>Id</i> : proto.alpha.operation.double_inclusion_of_consensus_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref204schema" class="ref204 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Double inclusion of consensus operation
         double inclusion of consensus operation */
      "kind": "branch",
      "id": "proto.alpha.operation.double_inclusion_of_consensus_operation" }</pre>
    </div>



**Drain delegate key on an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref205descr', 'ref205')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref205schema', 'ref205')">JSON Schema</button>
    
    </div>
    <div id="ref205descr" class="ref205 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot drain an unregistered delegate.</p><p><i>Id</i> : proto.alpha.operation.drain_delegate_key_on_unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref205schema" class="ref205 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Drain delegate key on an unregistered delegate
         Cannot drain an unregistered delegate. */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.drain_delegate_key_on_unregistered_delegate",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Error while taking the fees of a manager operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref206descr', 'ref206')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref206schema', 'ref206')">JSON Schema</button>
    
    </div>
    <div id="ref206descr" class="ref206 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>There was an error while taking the fees, which should not happen and means that the operation's validation was faulty.</p><p><i>Id</i> : proto.alpha.operation.error_while_taking_fees<br/><i>Category</i> : temporary</p>
      </div><div id="ref206schema" class="ref206 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Error while taking the fees of a manager operation
         There was an error while taking the fees, which should not happen
         and means that the operation's validation was faulty. */
      "kind": "permanent",
      "id": "proto.alpha.operation.error_while_taking_fees",
      ... }</pre>
    </div>



**Faulty validation (wrong slot for consensus operation)**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref207descr', 'ref207')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref207schema', 'ref207')">JSON Schema</button>
    
    </div>
    <div id="ref207descr" class="ref207 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The consensus operation uses an invalid slot. This error should not happen: the operation validation should have failed earlier.</p><p><i>Id</i> : proto.alpha.operation.faulty_validation_wrong_slot<br/><i>Category</i> : temporary</p>
      </div><div id="ref207schema" class="ref207 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Faulty validation (wrong slot for consensus operation)
         The consensus operation uses an invalid slot. This error should not
         happen: the operation validation should have failed earlier. */
      "kind": "permanent",
      "id": "proto.alpha.operation.faulty_validation_wrong_slot" }</pre>
    </div>



**Drain delegate with an inactive consensus key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref208descr', 'ref208')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref208schema', 'ref208')">JSON Schema</button>
    
    </div>
    <div id="ref208descr" class="ref208 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot drain with an inactive consensus key.</p><p><i>Id</i> : proto.alpha.operation.invalid_drain.inactive_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref208schema" class="ref208 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Drain delegate with an inactive consensus key
         Cannot drain with an inactive consensus key. */
      "kind": "temporary",
      "id": "proto.alpha.operation.invalid_drain.inactive_key",
      "delegate": $Signature.Public_key_hash,
      "consensus_key": $Signature.Public_key_hash,
      "active_consensus_key": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Drain delegate without enough balance for allocation burn or drain fees**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref209descr', 'ref209')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref209schema', 'ref209')">JSON Schema</button>
    
    </div>
    <div id="ref209descr" class="ref209 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot drain without enough allocation burn and drain fees.</p><p><i>Id</i> : proto.alpha.operation.invalid_drain.insufficient_funds_for_burn_or_fees<br/><i>Category</i> : temporary</p>
      </div><div id="ref209schema" class="ref209 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Drain delegate without enough balance for allocation burn or drain
         fees
         Cannot drain without enough allocation burn and drain fees. */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.invalid_drain.insufficient_funds_for_burn_or_fees",
      "delegate": $Signature.Public_key_hash,
      "destination": $Signature.Public_key_hash,
      "min_amount": $alpha.mutez }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Drain a delegate without consensus key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref210descr', 'ref210')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref210schema', 'ref210')">JSON Schema</button>
    
    </div>
    <div id="ref210descr" class="ref210 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot drain a delegate without consensus key.</p><p><i>Id</i> : proto.alpha.operation.invalid_drain.no_consensus_key<br/><i>Category</i> : temporary</p>
      </div><div id="ref210schema" class="ref210 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Drain a delegate without consensus key
         Cannot drain a delegate without consensus key. */
      "kind": "temporary",
      "id": "proto.alpha.operation.invalid_drain.no_consensus_key",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid drain delegate: noop**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref211descr', 'ref211')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref211schema', 'ref211')">JSON Schema</button>
    
    </div>
    <div id="ref211descr" class="ref211 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot drain a delegate to itself.</p><p><i>Id</i> : proto.alpha.operation.invalid_drain.noop<br/><i>Category</i> : temporary</p>
      </div><div id="ref211schema" class="ref211 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid drain delegate: noop
         Cannot drain a delegate to itself. */
      "kind": "temporary",
      "id": "proto.alpha.operation.invalid_drain.noop",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid operation signature**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref212descr', 'ref212')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref212schema', 'ref212')">JSON Schema</button>
    
    </div>
    <div id="ref212descr" class="ref212 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation signature is ill-formed or has been made with the wrong public key</p><p><i>Id</i> : proto.alpha.operation.invalid_signature<br/><i>Category</i> : temporary</p>
      </div><div id="ref212schema" class="ref212 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid operation signature
         The operation signature is ill-formed or has been made with the
         wrong public key */
      "kind": "permanent",
      "id": "proto.alpha.operation.invalid_signature",
      ... }</pre>
    </div>



**Missing operation signature**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref213descr', 'ref213')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref213schema', 'ref213')">JSON Schema</button>
    
    </div>
    <div id="ref213descr" class="ref213 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation is of a kind that must be signed, but the signature is missing</p><p><i>Id</i> : proto.alpha.operation.missing_signature<br/><i>Category</i> : temporary</p>
      </div><div id="ref213schema" class="ref213 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing operation signature
         The operation is of a kind that must be signed, but the signature is
         missing */
      "kind": "permanent",
      "id": "proto.alpha.operation.missing_signature",
      ... }</pre>
    </div>



**Proposals from an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref214descr', 'ref214')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref214schema', 'ref214')">JSON Schema</button>
    
    </div>
    <div id="ref214descr" class="ref214 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot submit proposals with an unregistered delegate.</p><p><i>Id</i> : proto.alpha.operation.proposals_from_unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref214schema" class="ref214 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proposals from an unregistered delegate
         Cannot submit proposals with an unregistered delegate. */
      "kind": "permanent",
      "id": "proto.alpha.operation.proposals_from_unregistered_delegate",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The RISCV PVM is disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref215descr', 'ref215')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref215schema', 'ref215')">JSON Schema</button>
    
    </div>
    <div id="ref215descr" class="ref215 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>RISCV PVM is disabled in this network.</p><p><i>Id</i> : proto.alpha.operation.riscv_pvm_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref215schema" class="ref215 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The RISCV PVM is disabled
         RISCV PVM is disabled in this network. */
      "kind": "permanent",
      "id": "proto.alpha.operation.riscv_pvm_disabled",
      ... }</pre>
    </div>



**Only the default entrypoint is allowed for rollups**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref216descr', 'ref216')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref216schema', 'ref216')">JSON Schema</button>
    
    </div>
    <div id="ref216descr" class="ref216 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rollups only support transactions to the default entrypoint.</p><p><i>Id</i> : proto.alpha.operation.rollup_invalid_entrypoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref216schema" class="ref216 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Only the default entrypoint is allowed for rollups
         Rollups only support transactions to the default entrypoint. */
      "kind": "permanent",
      "id": "proto.alpha.operation.rollup_invalid_entrypoint",
      ... }</pre>
    </div>



**Transaction amount to a rollup must be zero**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref217descr', 'ref217')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref217schema', 'ref217')">JSON Schema</button>
    
    </div>
    <div id="ref217descr" class="ref217 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Because rollups are outside of the delegation mechanism of Tezos, they cannot own Tez, and therefore transactions targeting a rollup must have its amount field set to zero.</p><p><i>Id</i> : proto.alpha.operation.rollup_invalid_transaction_amount<br/><i>Category</i> : temporary</p>
      </div><div id="ref217schema" class="ref217 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Transaction amount to a rollup must be zero
         Because rollups are outside of the delegation mechanism of Tezos,
         they cannot own Tez, and therefore transactions targeting a rollup
         must have its amount field set to zero. */
      "kind": "permanent",
      "id": "proto.alpha.operation.rollup_invalid_transaction_amount",
      ... }</pre>
    </div>



**Set deposits limit on an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref218descr', 'ref218')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref218schema', 'ref218')">JSON Schema</button>
    
    </div>
    <div id="ref218descr" class="ref218 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot set deposits limit on an unregistered delegate.</p><p><i>Id</i> : proto.alpha.operation.set_deposits_limit_on_unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref218schema" class="ref218 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Set deposits limit on an unregistered delegate
         Cannot set deposits limit on an unregistered delegate. */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.set_deposits_limit_on_unregistered_delegate",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Set deposits limit when automated staking off**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref219descr', 'ref219')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref219schema', 'ref219')">JSON Schema</button>
    
    </div>
    <div id="ref219descr" class="ref219 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot set deposits limit when automated staking is off or Adaptive Issuance is active.</p><p><i>Id</i> : proto.alpha.operation.set_deposits_limit_when_automated_staking_off<br/><i>Category</i> : temporary</p>
      </div><div id="ref219schema" class="ref219 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Set deposits limit when automated staking off
         Cannot set deposits limit when automated staking is off or Adaptive
         Issuance is active. */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.set_deposits_limit_when_automated_staking_off",
      ... }</pre>
    </div>



**Update consensus key on an unregistered delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref220descr', 'ref220')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref220schema', 'ref220')">JSON Schema</button>
    
    </div>
    <div id="ref220descr" class="ref220 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot update consensus key for an unregistered delegate.</p><p><i>Id</i> : proto.alpha.operation.update_consensus_key_on_unregistered_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref220schema" class="ref220 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Update consensus key on an unregistered delegate
         Cannot update consensus key for an unregistered delegate. */
      "kind": "temporary",
      "id":
        "proto.alpha.operation.update_consensus_key_on_unregistered_delegate",
      "delegate": $Signature.Public_key_hash,
      "kind": boolean }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Zk_rollup: attempted a deposit through an external op**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref221descr', 'ref221')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref221schema', 'ref221')">JSON Schema</button>
    
    </div>
    <div id="ref221descr" class="ref221 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup: attempted a deposit through an external op</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_deposit_as_external<br/><i>Category</i> : temporary</p>
      </div><div id="ref221schema" class="ref221 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup: attempted a deposit through an external op
         Zk_rollup: attempted a deposit through an external op */
      "kind": "temporary",
      "id": "proto.alpha.operation.zk_rollup_deposit_as_external" }</pre>
    </div>



**ZK rollups are disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref222descr', 'ref222')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref222schema', 'ref222')">JSON Schema</button>
    
    </div>
    <div id="ref222descr" class="ref222 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>ZK rollups will be enabled in a future proposal.</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref222schema" class="ref222 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* ZK rollups are disabled
         ZK rollups will be enabled in a future proposal. */
      "kind": "permanent",
      "id": "proto.alpha.operation.zk_rollup_disabled",
      ... }</pre>
    </div>



**Zk_rollup_update: failed verification**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref223descr', 'ref223')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref223schema', 'ref223')">JSON Schema</button>
    
    </div>
    <div id="ref223descr" class="ref223 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup_update: failed verification</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_failed_verification<br/><i>Category</i> : temporary</p>
      </div><div id="ref223schema" class="ref223 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup_update: failed verification
         Zk_rollup_update: failed verification */
      "kind": "temporary",
      "id": "proto.alpha.operation.zk_rollup_failed_verification" }</pre>
    </div>



**Zk_rollup_update: inconsistent state update**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref224descr', 'ref224')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref224schema', 'ref224')">JSON Schema</button>
    
    </div>
    <div id="ref224descr" class="ref224 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup_update: new state is of incorrect size</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_inconsistent_state_update<br/><i>Category</i> : temporary</p>
      </div><div id="ref224schema" class="ref224 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup_update: inconsistent state update
         Zk_rollup_update: new state is of incorrect size */
      "kind": "permanent",
      "id": "proto.alpha.operation.zk_rollup_inconsistent_state_update" }</pre>
    </div>



**Zk_rollup_update: invalid circuit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref225descr', 'ref225')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref225schema', 'ref225')">JSON Schema</button>
    
    </div>
    <div id="ref225descr" class="ref225 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup_update: invalid circuit</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_invalid_circuit<br/><i>Category</i> : temporary</p>
      </div><div id="ref225schema" class="ref225 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup_update: invalid circuit
         Zk_rollup_update: invalid circuit */
      "kind": "permanent",
      "id": "proto.alpha.operation.zk_rollup_invalid_circuit" }</pre>
    </div>



**Zk_rollup: attempted a deposit with an invalid amount**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref226descr', 'ref226')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref226schema', 'ref226')">JSON Schema</button>
    
    </div>
    <div id="ref226descr" class="ref226 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup: attempted a deposit with an invalid amount</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_invalid_deposit_amount<br/><i>Category</i> : temporary</p>
      </div><div id="ref226schema" class="ref226 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup: attempted a deposit with an invalid amount
         Zk_rollup: attempted a deposit with an invalid amount */
      "kind": "temporary",
      "id": "proto.alpha.operation.zk_rollup_invalid_deposit_amount" }</pre>
    </div>



**Zk_rollup: attempted a deposit with an invalid ticket**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref227descr', 'ref227')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref227schema', 'ref227')">JSON Schema</button>
    
    </div>
    <div id="ref227descr" class="ref227 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup: attempted a deposit with an invalid ticket</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_invalid_deposit_ticket<br/><i>Category</i> : temporary</p>
      </div><div id="ref227schema" class="ref227 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup: attempted a deposit with an invalid ticket
         Zk_rollup: attempted a deposit with an invalid ticket */
      "kind": "temporary",
      "id": "proto.alpha.operation.zk_rollup_invalid_deposit_ticket" }</pre>
    </div>



**ZK rollups negative number of operations**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref228descr', 'ref228')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref228schema', 'ref228')">JSON Schema</button>
    
    </div>
    <div id="ref228descr" class="ref228 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The value of [nb_ops] should never be negative.</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_negative_nb_ops<br/><i>Category</i> : temporary</p>
      </div><div id="ref228schema" class="ref228 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* ZK rollups negative number of operations
         The value of [nb_ops] should never be negative. */
      "kind": "permanent",
      "id": "proto.alpha.operation.zk_rollup_negative_nb_ops",
      ... }</pre>
    </div>



**Zk_rollup_update: update with fewer pending ops than allowed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref229descr', 'ref229')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref229schema', 'ref229')">JSON Schema</button>
    
    </div>
    <div id="ref229descr" class="ref229 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup_update: update with fewer pending ops than allowed</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_pending_bound<br/><i>Category</i> : temporary</p>
      </div><div id="ref229schema" class="ref229 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup_update: update with fewer pending ops than allowed
         Zk_rollup_update: update with fewer pending ops than allowed */
      "kind": "temporary",
      "id": "proto.alpha.operation.zk_rollup_pending_bound" }</pre>
    </div>



**Zk_rollup: attempted a deposit with invalid parameters**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref230descr', 'ref230')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref230schema', 'ref230')">JSON Schema</button>
    
    </div>
    <div id="ref230descr" class="ref230 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Zk_rollup: attempted a deposit with invalid parameters</p><p><i>Id</i> : proto.alpha.operation.zk_rollup_wrong_deposit_parameters<br/><i>Category</i> : temporary</p>
      </div><div id="ref230schema" class="ref230 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Zk_rollup: attempted a deposit with invalid parameters
         Zk_rollup: attempted a deposit with invalid parameters */
      "kind": "permanent",
      "id": "proto.alpha.operation.zk_rollup_wrong_deposit_parameters" }</pre>
    </div>



**Cannot stake on fully slashed delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref231descr', 'ref231')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref231schema', 'ref231')">JSON Schema</button>
    
    </div>
    <div id="ref231descr" class="ref231 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate has been fully slashed, so its external stakers can no longer stake. This restriction is permanent. If they wish to be able to stake again, the stakers must change delegates.</p><p><i>Id</i> : proto.alpha.operations.cannot_stake_on_fully_slashed_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref231schema" class="ref231 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot stake on fully slashed delegate
         The delegate has been fully slashed, so its external stakers can no
         longer stake. This restriction is permanent. If they wish to be able
         to stake again, the stakers must change delegates. */
      "kind": "permanent",
      "id": "proto.alpha.operations.cannot_stake_on_fully_slashed_delegate" }</pre>
    </div>



**Invalid non-zero transaction amount**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref232descr', 'ref232')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref232schema', 'ref232')">JSON Schema</button>
    
    </div>
    <div id="ref232descr" class="ref232 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A transaction expected a zero-amount but got non-zero.</p><p><i>Id</i> : proto.alpha.operations.invalid_nonzero_transaction_amount<br/><i>Category</i> : temporary</p>
      </div><div id="ref232schema" class="ref232 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid non-zero transaction amount
         A transaction expected a zero-amount but got non-zero. */
      "kind": "permanent",
      "id": "proto.alpha.operations.invalid_nonzero_transaction_amount",
      "amount": $alpha.mutez }
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Invalid destination for a pseudo-transaction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref233descr', 'ref233')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref233schema', 'ref233')">JSON Schema</button>
    
    </div>
    <div id="ref233descr" class="ref233 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A pseudo-transaction destination must equal its sender.</p><p><i>Id</i> : proto.alpha.operations.invalid_self_transaction_destination<br/><i>Category</i> : temporary</p>
      </div><div id="ref233schema" class="ref233 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid destination for a pseudo-transaction
         A pseudo-transaction destination must equal its sender. */
      "kind": "permanent",
      "id": "proto.alpha.operations.invalid_self_transaction_destination",
      ... }</pre>
    </div>



**Invalid sender for an internal operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref234descr', 'ref234')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref234schema', 'ref234')">JSON Schema</button>
    
    </div>
    <div id="ref234descr" class="ref234 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid sender for an internal operation restricted to implicit and originated accounts.</p><p><i>Id</i> : proto.alpha.operations.invalid_sender<br/><i>Category</i> : temporary</p>
      </div><div id="ref234schema" class="ref234 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid sender for an internal operation
         Invalid sender for an internal operation restricted to implicit and
         originated accounts. */
      "kind": "permanent",
      "id": "proto.alpha.operations.invalid_sender",
      "contract": $alpha.transaction_destination }
    $alpha.transaction_destination:
      /* A destination of a transaction
         A destination notation compatible with the contract notation as
         given to an RPC or inside scripts. Can be a base58 implicit contract
         hash, a base58 originated contract hash, a base58 originated
         transaction rollup, or a base58 originated smart rollup. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid parameters for staking parameters**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref235descr', 'ref235')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref235schema', 'ref235')">JSON Schema</button>
    
    </div>
    <div id="ref235descr" class="ref235 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The staking parameters are invalid.</p><p><i>Id</i> : proto.alpha.operations.invalid_staking_parameters<br/><i>Category</i> : temporary</p>
      </div><div id="ref235schema" class="ref235 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid parameters for staking parameters
         The staking parameters are invalid. */
      "kind": "permanent",
      "id": "proto.alpha.operations.invalid_staking_parameters" }</pre>
    </div>



**Invalid staking parameters sender**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref236descr', 'ref236')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref236schema', 'ref236')">JSON Schema</button>
    
    </div>
    <div id="ref236descr" class="ref236 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The staking parameters can only be set by delegates.</p><p><i>Id</i> : proto.alpha.operations.invalid_staking_parameters_sender<br/><i>Category</i> : temporary</p>
      </div><div id="ref236schema" class="ref236 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid staking parameters sender
         The staking parameters can only be set by delegates. */
      "kind": "permanent",
      "id": "proto.alpha.operations.invalid_staking_parameters_sender" }</pre>
    </div>



**Invalid transfer to smart rollup**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref237descr', 'ref237')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref237schema', 'ref237')">JSON Schema</button>
    
    </div>
    <div id="ref237descr" class="ref237 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid transfer to smart rollup from implicit account</p><p><i>Id</i> : proto.alpha.operations.invalid_transfer_to_smart_rollup_from_implicit_account<br/><i>Category</i> : temporary</p>
      </div><div id="ref237schema" class="ref237 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid transfer to smart rollup
         Invalid transfer to smart rollup from implicit account */
      "kind": "permanent",
      "id":
        "proto.alpha.operations.invalid_transfer_to_smart_rollup_from_implicit_account" }</pre>
    </div>



**(Un)staking without any delegate set**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref238descr', 'ref238')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref238schema', 'ref238')">JSON Schema</button>
    
    </div>
    <div id="ref238descr" class="ref238 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>(Un)Stake operations are only allowed when delegate is set.</p><p><i>Id</i> : proto.alpha.operations.stake_modification_with_no_delegate_set<br/><i>Category</i> : temporary</p>
      </div><div id="ref238schema" class="ref238 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* (Un)staking without any delegate set
         (Un)Stake operations are only allowed when delegate is set. */
      "kind": "permanent",
      "id": "proto.alpha.operations.stake_modification_with_no_delegate_set",
      ... }</pre>
    </div>



**Staking for a delegator while external staking is disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref239descr', 'ref239')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref239schema', 'ref239')">JSON Schema</button>
    
    </div>
    <div id="ref239descr" class="ref239 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>As long as external staking is not enabled, staking operations are only allowed from delegates.</p><p><i>Id</i> : proto.alpha.operations.staking_for_delegator_while_external_staking_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref239schema" class="ref239 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Staking for a delegator while external staking is disabled
         As long as external staking is not enabled, staking operations are
         only allowed from delegates. */
      "kind": "permanent",
      "id":
        "proto.alpha.operations.staking_for_delegator_while_external_staking_disabled",
      ... }</pre>
    </div>



**Staking to delegate that does not accept external staking**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref240descr', 'ref240')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref240schema', 'ref240')">JSON Schema</button>
    
    </div>
    <div id="ref240descr" class="ref240 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate currently does not accept staking operations from sources other than itself: its `limit_of_staking_over_baking` parameter is set to 0.</p><p><i>Id</i> : proto.alpha.operations.staking_to_delegate_that_refuses_external_staking<br/><i>Category</i> : temporary</p>
      </div><div id="ref240schema" class="ref240 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Staking to delegate that does not accept external staking
         The delegate currently does not accept staking operations from
         sources other than itself: its `limit_of_staking_over_baking`
         parameter is set to 0. */
      "kind": "permanent",
      "id":
        "proto.alpha.operations.staking_to_delegate_that_refuses_external_staking",
      ... }</pre>
    </div>



**Aggregate denunciation not implemented**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref241descr', 'ref241')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref241schema', 'ref241')">JSON Schema</button>
    
    </div>
    <div id="ref241descr" class="ref241 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Denunciation of aggregate operations is not yet implemented</p><p><i>Id</i> : proto.alpha.operations.validation.aggregate_denunciation_not_implemented<br/><i>Category</i> : temporary</p>
      </div><div id="ref241schema" class="ref241 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Aggregate denunciation not implemented
         Denunciation of aggregate operations is not yet implemented */
      "kind": "permanent",
      "id":
        "proto.alpha.operations.validation.aggregate_denunciation_not_implemented" }</pre>
    </div>



**Out of bound issuance bonus**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref242descr', 'ref242')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref242schema', 'ref242')">JSON Schema</button>
    
    </div>
    <div id="ref242descr" class="ref242 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Computed issuance bonus is out of bound</p><p><i>Id</i> : proto.alpha.out_of_bound_issuance_bonus<br/><i>Category</i> : temporary</p>
      </div><div id="ref242schema" class="ref242 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Out of bound issuance bonus
         Computed issuance bonus is out of bound */
      "kind": "permanent",
      "id": "proto.alpha.out_of_bound_issuance_bonus",
      ... }</pre>
    </div>



**Outdated fitness**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref243descr', 'ref243')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref243schema', 'ref243')">JSON Schema</button>
    
    </div>
    <div id="ref243descr" class="ref243 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Outdated fitness: referring to a previous version</p><p><i>Id</i> : proto.alpha.outdated_fitness<br/><i>Category</i> : temporary</p>
      </div><div id="ref243schema" class="ref243 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Outdated fitness
         Outdated fitness: referring to a previous version */
      "kind": "permanent",
      "id": "proto.alpha.outdated_fitness" }</pre>
    </div>



**Period overflow**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref244descr', 'ref244')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref244schema', 'ref244')">JSON Schema</button>
    
    </div>
    <div id="ref244descr" class="ref244 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Last operation generated an integer overflow.</p><p><i>Id</i> : proto.alpha.period_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref244schema" class="ref244 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Period overflow
         Last operation generated an integer overflow. */
      "kind": "permanent",
      "id": "proto.alpha.period_overflow" }</pre>
    </div>



**Consensus operation in far future**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref245descr', 'ref245')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref245schema', 'ref245')">JSON Schema</button>
    
    </div>
    <div id="ref245descr" class="ref245 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation too far in the future are not accepted.</p><p><i>Id</i> : proto.alpha.prefilter.Consensus_operation_in_far_future<br/><i>Category</i> : temporary</p>
      </div><div id="ref245schema" class="ref245 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation in far future
         Consensus operation too far in the future are not accepted. */
      "kind": "branch",
      "id": "proto.alpha.prefilter.Consensus_operation_in_far_future",
      ... }</pre>
    </div>



**Operation fees are too low**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref246descr', 'ref246')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref246schema', 'ref246')">JSON Schema</button>
    
    </div>
    <div id="ref246descr" class="ref246 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Operation fees are too low</p><p><i>Id</i> : proto.alpha.prefilter.fees_too_low<br/><i>Category</i> : temporary</p>
      </div><div id="ref246schema" class="ref246 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation fees are too low
         Operation fees are too low */
      "kind": "permanent",
      "id": "proto.alpha.prefilter.fees_too_low",
      ... }</pre>
    </div>



**Wrong operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref247descr', 'ref247')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref247schema', 'ref247')">JSON Schema</button>
    
    </div>
    <div id="ref247descr" class="ref247 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failing_noop operations are not accepted in the mempool.</p><p><i>Id</i> : proto.alpha.prefilter.wrong_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref247schema" class="ref247 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong operation
         Failing_noop operations are not accepted in the mempool. */
      "kind": "temporary",
      "id": "proto.alpha.prefilter.wrong_operation",
      ... }</pre>
    </div>



**The published slot headers bucket not initialized in the context**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref248descr', 'ref248')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref248schema', 'ref248')">JSON Schema</button>
    
    </div>
    <div id="ref248descr" class="ref248 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The published slot headers bucket is not initialized in the context</p><p><i>Id</i> : proto.alpha.published_slot_headers_not_initialized<br/><i>Category</i> : temporary</p>
      </div><div id="ref248schema" class="ref248 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The published slot headers bucket not initialized in the context
         The published slot headers bucket is not initialized in the context */
      "kind": "permanent",
      "id": "proto.alpha.published_slot_headers_not_initialized",
      "level": integer ∈ [0, 2^31] }</pre>
    </div>



**Slot map not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref249descr', 'ref249')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref249schema', 'ref249')">JSON Schema</button>
    
    </div>
    <div id="ref249descr" class="ref249 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Pre-computed map by first slot not found.</p><p><i>Id</i> : proto.alpha.raw_context.consensus.slot_map_not_found<br/><i>Category</i> : temporary</p>
      </div><div id="ref249schema" class="ref249 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Slot map not found
         Pre-computed map by first slot not found. */
      "kind": "permanent",
      "id": "proto.alpha.raw_context.consensus.slot_map_not_found",
      "loc": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Error while generating rollup address**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref250descr', 'ref250')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref250schema', 'ref250')">JSON Schema</button>
    
    </div>
    <div id="ref250descr" class="ref250 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error while generating rollup address</p><p><i>Id</i> : proto.alpha.rollup.error_zk_rollup_address_generation<br/><i>Category</i> : temporary</p>
      </div><div id="ref250schema" class="ref250 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Error while generating rollup address
         Error while generating rollup address */
      "kind": "permanent",
      "id": "proto.alpha.rollup.error_zk_rollup_address_generation",
      ... }</pre>
    </div>



**Round_of_timestamp for past timestamp**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref251descr', 'ref251')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref251schema', 'ref251')">JSON Schema</button>
    
    </div>
    <div id="ref251descr" class="ref251 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Provided timestamp is before the expected level start.</p><p><i>Id</i> : proto.alpha.round_of_past_timestamp<br/><i>Category</i> : temporary</p>
      </div><div id="ref251schema" class="ref251 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Round_of_timestamp for past timestamp
         Provided timestamp is before the expected level start. */
      "kind": "permanent",
      "id": "proto.alpha.round_of_past_timestamp",
      "provided_timestamp": $timestamp.protocol,
      "predecessor_timestamp": $timestamp.protocol,
      "predecessor_round": integer ∈ [-2^31-1, 2^31] }
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



**Round overflow**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref252descr', 'ref252')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref252schema', 'ref252')">JSON Schema</button>
    
    </div>
    <div id="ref252descr" class="ref252 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Round cannot be built out of integer greater than maximum int32 value.</p><p><i>Id</i> : proto.alpha.round_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref252schema" class="ref252 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Round overflow
         Round cannot be built out of integer greater than maximum int32
         value. */
      "kind": "permanent",
      "id": "proto.alpha.round_overflow",
      "Round_overflow": $int64 }
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string</pre>
    </div>



**round too high**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref253descr', 'ref253')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref253schema', 'ref253')">JSON Schema</button>
    
    </div>
    <div id="ref253descr" class="ref253 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>block round too high.</p><p><i>Id</i> : proto.alpha.round_too_high<br/><i>Category</i> : temporary</p>
      </div><div id="ref253schema" class="ref253 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* round too high
         block round too high. */
      "kind": "permanent",
      "id": "proto.alpha.round_too_high",
      "level_offset_too_high": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Run operation does not support consensus operations**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref254descr', 'ref254')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref254schema', 'ref254')">JSON Schema</button>
    
    </div>
    <div id="ref254descr" class="ref254 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The run_operation RPC does not support consensus operations.</p><p><i>Id</i> : proto.alpha.run_operation_does_not_support_consensus_operations<br/><i>Category</i> : temporary</p>
      </div><div id="ref254schema" class="ref254 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Run operation does not support consensus operations
         The run_operation RPC does not support consensus operations. */
      "kind": "permanent",
      "id": "proto.alpha.run_operation_does_not_support_consensus_operations" }</pre>
    </div>



**Sampler already set**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref255descr', 'ref255')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref255schema', 'ref255')">JSON Schema</button>
    
    </div>
    <div id="ref255descr" class="ref255 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Internal error: Raw_context.set_sampler_for_cycle was called twice for a given cycle</p><p><i>Id</i> : proto.alpha.sampler_already_set<br/><i>Category</i> : temporary</p>
      </div><div id="ref255schema" class="ref255 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Sampler already set
         Internal error: Raw_context.set_sampler_for_cycle was called twice
         for a given cycle */
      "kind": "permanent",
      "id": "proto.alpha.sampler_already_set",
      "cycle": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Unknown seed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref256descr', 'ref256')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref256schema', 'ref256')">JSON Schema</button>
    
    </div>
    <div id="ref256descr" class="ref256 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The requested seed is not available</p><p><i>Id</i> : proto.alpha.seed.unknown_seed<br/><i>Category</i> : temporary</p>
      </div><div id="ref256schema" class="ref256 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown seed
         The requested seed is not available */
      "kind": "permanent",
      "id": "proto.alpha.seed.unknown_seed",
      "oldest": integer ∈ [-2^31-1, 2^31],
      "requested": integer ∈ [-2^31-1, 2^31],
      "latest": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**invalid slot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref257descr', 'ref257')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref257schema', 'ref257')">JSON Schema</button>
    
    </div>
    <div id="ref257descr" class="ref257 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid slot</p><p><i>Id</i> : proto.alpha.slot.invalid_slot<br/><i>Category</i> : temporary</p>
      </div><div id="ref257schema" class="ref257 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* invalid slot
         Invalid slot */
      "kind": "permanent",
      "id": "proto.alpha.slot.invalid_slot",
      "bad_slot": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Tried to add zero messages to a smart rollup**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref258descr', 'ref258')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref258schema', 'ref258')">JSON Schema</button>
    
    </div>
    <div id="ref258descr" class="ref258 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to add zero messages to a smart rollup</p><p><i>Id</i> : proto.alpha.smart_rollup_add_zero_messages<br/><i>Category</i> : temporary</p>
      </div><div id="ref258schema" class="ref258 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Tried to add zero messages to a smart rollup
         Tried to add zero messages to a smart rollup */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_add_zero_messages",
      ... }</pre>
    </div>



**Error while generating a smart rollup address**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref259descr', 'ref259')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref259schema', 'ref259')">JSON Schema</button>
    
    </div>
    <div id="ref259descr" class="ref259 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error while generating a smart rollup address</p><p><i>Id</i> : proto.alpha.smart_rollup_address_generation<br/><i>Category</i> : temporary</p>
      </div><div id="ref259schema" class="ref259 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Error while generating a smart rollup address
         Error while generating a smart rollup address */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_address_generation" }</pre>
    </div>



**Invalid claim about outbox**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref260descr', 'ref260')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref260schema', 'ref260')">JSON Schema</button>
    
    </div>
    <div id="ref260descr" class="ref260 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid claim about outbox</p><p><i>Id</i> : proto.alpha.smart_rollup_arith_invalid_claim_about_outbox<br/><i>Category</i> : temporary</p>
      </div><div id="ref260schema" class="ref260 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid claim about outbox
         Invalid claim about outbox */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_arith_invalid_claim_about_outbox",
      ... }</pre>
    </div>



**Output proof production failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref261descr', 'ref261')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref261schema', 'ref261')">JSON Schema</button>
    
    </div>
    <div id="ref261descr" class="ref261 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Output proof production failed</p><p><i>Id</i> : proto.alpha.smart_rollup_arith_output_proof_production_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref261schema" class="ref261 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Output proof production failed
         Output proof production failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_arith_output_proof_production_failed",
      ... }</pre>
    </div>



**Proof production failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref262descr', 'ref262')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref262schema', 'ref262')">JSON Schema</button>
    
    </div>
    <div id="ref262descr" class="ref262 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof production failed</p><p><i>Id</i> : proto.alpha.smart_rollup_arith_proof_production_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref262schema" class="ref262 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof production failed
         Proof production failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_arith_proof_production_failed",
      ... }</pre>
    </div>



**Could not serialize commitment.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref263descr', 'ref263')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref263schema', 'ref263')">JSON Schema</button>
    
    </div>
    <div id="ref263descr" class="ref263 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unable to hash the commitment serialization.</p><p><i>Id</i> : proto.alpha.smart_rollup_bad_commitment_serialization<br/><i>Category</i> : temporary</p>
      </div><div id="ref263schema" class="ref263 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Could not serialize commitment.
         Unable to hash the commitment serialization. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_bad_commitment_serialization" }</pre>
    </div>



**Committing to a bad inbox level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref264descr', 'ref264')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref264schema', 'ref264')">JSON Schema</button>
    
    </div>
    <div id="ref264descr" class="ref264 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to commit to a bad inbox level.</p><p><i>Id</i> : proto.alpha.smart_rollup_bad_inbox_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref264schema" class="ref264 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Committing to a bad inbox level
         Attempted to commit to a bad inbox level. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_bad_inbox_level",
      "expected": integer ∈ [0, 2^31],
      "provided": integer ∈ [0, 2^31] }</pre>
    </div>



**Commitment disputed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref265descr', 'ref265')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref265schema', 'ref265')">JSON Schema</button>
    
    </div>
    <div id="ref265descr" class="ref265 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to cement a disputed commitment.</p><p><i>Id</i> : proto.alpha.smart_rollup_commitment_disputed<br/><i>Category</i> : temporary</p>
      </div><div id="ref265schema" class="ref265 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Commitment disputed
         Attempted to cement a disputed commitment. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_commitment_disputed" }</pre>
    </div>



**Commitment from future**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref266descr', 'ref266')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref266schema', 'ref266')">JSON Schema</button>
    
    </div>
    <div id="ref266descr" class="ref266 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Commitment inbox level is greater or equal than current level</p><p><i>Id</i> : proto.alpha.smart_rollup_commitment_from_future<br/><i>Category</i> : temporary</p>
      </div><div id="ref266schema" class="ref266 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Commitment from future
         Commitment inbox level is greater or equal than current level */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_commitment_from_future",
      "current_level": integer ∈ [0, 2^31],
      "inbox_level": integer ∈ [0, 2^31] }</pre>
    </div>



**Commitment past curfew.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref267descr', 'ref267')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref267schema', 'ref267')">JSON Schema</button>
    
    </div>
    <div id="ref267descr" class="ref267 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A commitment exists for this inbox level for longer than the curfew period.</p><p><i>Id</i> : proto.alpha.smart_rollup_commitment_past_curfew<br/><i>Category</i> : temporary</p>
      </div><div id="ref267schema" class="ref267 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Commitment past curfew.
         A commitment exists for this inbox level for longer than the curfew
         period. */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_commitment_past_curfew" }</pre>
    </div>



**Published commitment is too old**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref268descr', 'ref268')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref268schema', 'ref268')">JSON Schema</button>
    
    </div>
    <div id="ref268descr" class="ref268 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Published commitment is too old</p><p><i>Id</i> : proto.alpha.smart_rollup_commitment_too_old<br/><i>Category</i> : temporary</p>
      </div><div id="ref268schema" class="ref268 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Published commitment is too old
         Published commitment is too old */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_commitment_too_old",
      "last_cemented_inbox_level": integer ∈ [0, 2^31],
      "commitment_inbox_level": integer ∈ [0, 2^31] }</pre>
    </div>



**Commitment too recent**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref269descr', 'ref269')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref269schema', 'ref269')">JSON Schema</button>
    
    </div>
    <div id="ref269descr" class="ref269 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to cement a commitment before its refutation deadline.</p><p><i>Id</i> : proto.alpha.smart_rollup_commitment_too_recent<br/><i>Category</i> : temporary</p>
      </div><div id="ref269schema" class="ref269 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Commitment too recent
         Attempted to cement a commitment before its refutation deadline. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_commitment_too_recent",
      "current_level": integer ∈ [0, 2^31],
      "min_level": integer ∈ [0, 2^31] }</pre>
    </div>



**Mismatch in the edge ticks of the dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref270descr', 'ref270')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref270schema', 'ref270')">JSON Schema</button>
    
    </div>
    <div id="ref270descr" class="ref270 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Mismatch in the edge ticks of the dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_edge_ticks_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref270schema" class="ref270 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Mismatch in the edge ticks of the dissection
         Mismatch in the edge ticks of the dissection */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_dissection_edge_ticks_mismatch",
      "dissection_start_tick": $positive_bignum,
      "dissection_stop_tick": $positive_bignum,
      "chunk_start_tick": $positive_bignum,
      "chunk_stop_tick": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Ticks should only increase in dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref271descr', 'ref271')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref271schema', 'ref271')">JSON Schema</button>
    
    </div>
    <div id="ref271descr" class="ref271 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Ticks should only increase in dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_invalid_distribution<br/><i>Category</i> : temporary</p>
      </div><div id="ref271schema" class="ref271 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ticks should only increase in dissection
         Ticks should only increase in dissection */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_dissection_invalid_distribution",
      "section_max_size": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Invalid number of sections in the dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref272descr', 'ref272')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref272schema', 'ref272')">JSON Schema</button>
    
    </div>
    <div id="ref272descr" class="ref272 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid number of sections in the dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_invalid_number_of_sections<br/><i>Category</i> : temporary</p>
      </div><div id="ref272schema" class="ref272 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid number of sections in the dissection
         Invalid number of sections in the dissection */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_dissection_invalid_number_of_sections",
      "value": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Cannot recover from a blocked state in a dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref273descr', 'ref273')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref273schema', 'ref273')">JSON Schema</button>
    
    </div>
    <div id="ref273descr" class="ref273 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot recover from a blocked state in a dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_invalid_successive_states_shape<br/><i>Category</i> : temporary</p>
      </div><div id="ref273schema" class="ref273 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot recover from a blocked state in a dissection
         Cannot recover from a blocked state in a dissection */
      "kind": "permanent",
      "id":
        "proto.alpha.smart_rollup_dissection_invalid_successive_states_shape" }</pre>
    </div>



**Mismatch in the number of sections in the dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref274descr', 'ref274')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref274schema', 'ref274')">JSON Schema</button>
    
    </div>
    <div id="ref274descr" class="ref274 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Mismatch in the number of sections in the dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_number_of_sections_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref274schema" class="ref274 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Mismatch in the number of sections in the dissection
         Mismatch in the number of sections in the dissection */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_dissection_number_of_sections_mismatch",
      "expected": $positive_bignum,
      "given": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Mismatch in the start hash of the dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref275descr', 'ref275')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref275schema', 'ref275')">JSON Schema</button>
    
    </div>
    <div id="ref275descr" class="ref275 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Mismatch in the start hash of the dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_start_hash_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref275schema" class="ref275 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Mismatch in the start hash of the dissection
         Mismatch in the start hash of the dissection */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_dissection_start_hash_mismatch",
      "expected": $smart_rollup_state_hash /* Some */ || null /* None */,
      "given": $smart_rollup_state_hash /* Some */ || null /* None */ }
    $smart_rollup_state_hash:
      /* The hash of the VM state of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Mismatch in the stop hash of the dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref276descr', 'ref276')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref276schema', 'ref276')">JSON Schema</button>
    
    </div>
    <div id="ref276descr" class="ref276 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Mismatch in the stop hash of the dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_stop_hash_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref276schema" class="ref276 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Mismatch in the stop hash of the dissection
         Mismatch in the stop hash of the dissection */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_dissection_stop_hash_mismatch",
      "hash": $smart_rollup_state_hash /* Some */ || null /* None */ }
    $smart_rollup_state_hash:
      /* The hash of the VM state of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ticks should only increase in dissection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref277descr', 'ref277')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref277schema', 'ref277')">JSON Schema</button>
    
    </div>
    <div id="ref277descr" class="ref277 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Ticks should only increase in dissection</p><p><i>Id</i> : proto.alpha.smart_rollup_dissection_ticks_not_increasing<br/><i>Category</i> : temporary</p>
      </div><div id="ref277schema" class="ref277 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ticks should only increase in dissection
         Ticks should only increase in dissection */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_dissection_ticks_not_increasing" }</pre>
    </div>



**Smart rollup does not exist**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref278descr', 'ref278')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref278schema', 'ref278')">JSON Schema</button>
    
    </div>
    <div id="ref278descr" class="ref278 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to use a smart rollup that has not been originated.</p><p><i>Id</i> : proto.alpha.smart_rollup_does_not_exist<br/><i>Category</i> : temporary</p>
      </div><div id="ref278schema" class="ref278 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Smart rollup does not exist
         Attempted to use a smart rollup that has not been originated. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_does_not_exist",
      "rollup": $smart_rollup_address }
    $smart_rollup_address:
      /* A smart rollup address (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The commitment was published twice by the operator**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref279descr', 'ref279')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref279schema', 'ref279')">JSON Schema</button>
    
    </div>
    <div id="ref279descr" class="ref279 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No commitment to cement</p><p><i>Id</i> : proto.alpha.smart_rollup_double_publish<br/><i>Category</i> : temporary</p>
      </div><div id="ref279schema" class="ref279 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The commitment was published twice by the operator
         No commitment to cement */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_double_publish",
      "commitment_hash": $smart_rollup_commitment_hash }
    $smart_rollup_commitment_hash:
      /* The hash of a commitment of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**No commitment to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref280descr', 'ref280')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref280schema', 'ref280')">JSON Schema</button>
    
    </div>
    <div id="ref280descr" class="ref280 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No commitment to cement</p><p><i>Id</i> : proto.alpha.smart_rollup_duplicated_key_in_whitelist<br/><i>Category</i> : temporary</p>
      </div><div id="ref280schema" class="ref280 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No commitment to cement
         No commitment to cement */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_duplicated_key_in_whitelist" }</pre>
    </div>



**Invalid whitelist: whitelist cannot be empty**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref281descr', 'ref281')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref281schema', 'ref281')">JSON Schema</button>
    
    </div>
    <div id="ref281descr" class="ref281 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Smart rollup whitelist cannot be empty</p><p><i>Id</i> : proto.alpha.smart_rollup_empty_whitelist<br/><i>Category</i> : temporary</p>
      </div><div id="ref281schema" class="ref281 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid whitelist: whitelist cannot be empty
         Smart rollup whitelist cannot be empty */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_empty_whitelist" }</pre>
    </div>



**Refutation game already started**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref282descr', 'ref282')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref282schema', 'ref282')">JSON Schema</button>
    
    </div>
    <div id="ref282descr" class="ref282 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Refutation game already started, must play with is_opening_move = false.</p><p><i>Id</i> : proto.alpha.smart_rollup_game_already_started<br/><i>Category</i> : temporary</p>
      </div><div id="ref282schema" class="ref282 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Refutation game already started
         Refutation game already started, must play with is_opening_move =
         false. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_game_already_started",
      ... }</pre>
    </div>



**Inbox level reached messages limit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref283descr', 'ref283')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref283schema', 'ref283')">JSON Schema</button>
    
    </div>
    <div id="ref283descr" class="ref283 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>There can be only 1000000 messages in an inbox level, the limit has been reached.</p><p><i>Id</i> : proto.alpha.smart_rollup_inbox_level_reached_message_limit<br/><i>Category</i> : temporary</p>
      </div><div id="ref283schema" class="ref283 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inbox level reached messages limit
         There can be only 1000000 messages in an inbox level, the limit has
         been reached. */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_inbox_level_reached_message_limit" }</pre>
    </div>



**Failed to decode a smart rollup management protocol inbox message value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref284descr', 'ref284')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref284schema', 'ref284')">JSON Schema</button>
    
    </div>
    <div id="ref284descr" class="ref284 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to decode a smart rollup management protocol inbox message value</p><p><i>Id</i> : proto.alpha.smart_rollup_inbox_message_decoding<br/><i>Category</i> : temporary</p>
      </div><div id="ref284schema" class="ref284 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to decode a smart rollup management protocol inbox message
         value
         Failed to decode a smart rollup management protocol inbox message
         value */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_inbox_message_decoding",
      ... }</pre>
    </div>



**Failed to encode a rollup management protocol inbox message value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref285descr', 'ref285')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref285schema', 'ref285')">JSON Schema</button>
    
    </div>
    <div id="ref285descr" class="ref285 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to encode a rollup management protocol inbox message value</p><p><i>Id</i> : proto.alpha.smart_rollup_inbox_message_encoding<br/><i>Category</i> : temporary</p>
      </div><div id="ref285schema" class="ref285 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to encode a rollup management protocol inbox message value
         Failed to encode a rollup management protocol inbox message value */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_inbox_message_encoding",
      ... }</pre>
    </div>



**Invalid last-cemented-commitment**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref286descr', 'ref286')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref286schema', 'ref286')">JSON Schema</button>
    
    </div>
    <div id="ref286descr" class="ref286 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid last-cemented-commitment</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_last_cemented_commitment<br/><i>Category</i> : temporary</p>
      </div><div id="ref286schema" class="ref286 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid last-cemented-commitment
         Invalid last-cemented-commitment */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_invalid_last_cemented_commitment" }</pre>
    </div>



**Invalid outbox level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref287descr', 'ref287')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref287schema', 'ref287')">JSON Schema</button>
    
    </div>
    <div id="ref287descr" class="ref287 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid outbox level</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_outbox_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref287schema" class="ref287 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid outbox level
         Invalid outbox level */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_invalid_outbox_level" }</pre>
    </div>



**Invalid rollup outbox message index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref288descr', 'ref288')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref288schema', 'ref288')">JSON Schema</button>
    
    </div>
    <div id="ref288descr" class="ref288 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid rollup outbox message index</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_outbox_message_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref288schema" class="ref288 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid rollup outbox message index
         Invalid rollup outbox message index */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_invalid_outbox_message_index" }</pre>
    </div>



**Invalid output proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref289descr', 'ref289')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref289schema', 'ref289')">JSON Schema</button>
    
    </div>
    <div id="ref289descr" class="ref289 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid output proof</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_output_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref289schema" class="ref289 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid output proof
         Invalid output proof */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_invalid_output_proof" }</pre>
    </div>



**Invalid parameters type**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref290descr', 'ref290')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref290schema', 'ref290')">JSON Schema</button>
    
    </div>
    <div id="ref290descr" class="ref290 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid parameters type for smart rollup</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_parameters_type<br/><i>Category</i> : temporary</p>
      </div><div id="ref290schema" class="ref290 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid parameters type
         Invalid parameters type for smart rollup */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_invalid_parameters_type",
      ... }</pre>
    </div>



**Invalid serialized inbox proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref291descr', 'ref291')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref291schema', 'ref291')">JSON Schema</button>
    
    </div>
    <div id="ref291descr" class="ref291 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The serialized inbox proof can not be de-serialized</p><p><i>Id</i> : proto.alpha.smart_rollup_invalid_serialized_inbox_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref291schema" class="ref291 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid serialized inbox proof
         The serialized inbox proof can not be de-serialized */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_invalid_serialized_inbox_proof",
      ... }</pre>
    </div>



**Invalid destination**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref292descr', 'ref292')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref292schema', 'ref292')">JSON Schema</button>
    
    </div>
    <div id="ref292descr" class="ref292 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid destination</p><p><i>Id</i> : proto.alpha.smart_rollup_management_protocol_invalid_destination<br/><i>Category</i> : temporary</p>
      </div><div id="ref292schema" class="ref292 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid destination
         Invalid destination */
      "kind": "permanent",
      "id":
        "proto.alpha.smart_rollup_management_protocol_invalid_destination",
      ... }</pre>
    </div>



**Maximum number of messages reached for commitment period**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref293descr', 'ref293')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref293schema', 'ref293')">JSON Schema</button>
    
    </div>
    <div id="ref293descr" class="ref293 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Maximum number of messages reached for commitment period</p><p><i>Id</i> : proto.alpha.smart_rollup_max_number_of_messages_reached_for_commitment_period<br/><i>Category</i> : temporary</p>
      </div><div id="ref293schema" class="ref293 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Maximum number of messages reached for commitment period
         Maximum number of messages reached for commitment period */
      "kind": "temporary",
      "id":
        "proto.alpha.smart_rollup_max_number_of_messages_reached_for_commitment_period",
      ... }</pre>
    </div>



**Maximal number of parallel games reached**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref294descr', 'ref294')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref294schema', 'ref294')">JSON Schema</button>
    
    </div>
    <div id="ref294descr" class="ref294 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Maximal number of parallel games reached</p><p><i>Id</i> : proto.alpha.smart_rollup_maximal_number_of_parallel_games_reached<br/><i>Category</i> : temporary</p>
      </div><div id="ref294schema" class="ref294 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Maximal number of parallel games reached
         Maximal number of parallel games reached */
      "kind": "temporary",
      "id":
        "proto.alpha.smart_rollup_maximal_number_of_parallel_games_reached",
      "staker": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**No commitment to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref295descr', 'ref295')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref295schema', 'ref295')">JSON Schema</button>
    
    </div>
    <div id="ref295descr" class="ref295 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No commitment to cement</p><p><i>Id</i> : proto.alpha.smart_rollup_no_commitment_to_cement<br/><i>Category</i> : temporary</p>
      </div><div id="ref295schema" class="ref295 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No commitment to cement
         No commitment to cement */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_no_commitment_to_cement",
      "inbox_level": integer ∈ [0, 2^31] }</pre>
    </div>



**No conflict**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref296descr', 'ref296')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref296schema', 'ref296')">JSON Schema</button>
    
    </div>
    <div id="ref296descr" class="ref296 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No conflict.</p><p><i>Id</i> : proto.alpha.smart_rollup_no_conflict<br/><i>Category</i> : temporary</p>
      </div><div id="ref296schema" class="ref296 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No conflict
         No conflict. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_no_conflict" }</pre>
    </div>



**Refutation game does not exist**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref297descr', 'ref297')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref297schema', 'ref297')">JSON Schema</button>
    
    </div>
    <div id="ref297descr" class="ref297 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Refutation game does not exist</p><p><i>Id</i> : proto.alpha.smart_rollup_no_game<br/><i>Category</i> : temporary</p>
      </div><div id="ref297schema" class="ref297 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Refutation game does not exist
         Refutation game does not exist */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_no_game",
      ... }</pre>
    </div>



**No stakers**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref298descr', 'ref298')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref298schema', 'ref298')">JSON Schema</button>
    
    </div>
    <div id="ref298descr" class="ref298 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No stakers for the targeted smart rollup.</p><p><i>Id</i> : proto.alpha.smart_rollup_no_stakers<br/><i>Category</i> : temporary</p>
      </div><div id="ref298schema" class="ref298 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No stakers
         No stakers for the targeted smart rollup. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_no_stakers" }</pre>
    </div>



**No valid commitment to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref299descr', 'ref299')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref299schema', 'ref299')">JSON Schema</button>
    
    </div>
    <div id="ref299descr" class="ref299 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to cement a commitment but there is no valid commitment to cement.</p><p><i>Id</i> : proto.alpha.smart_rollup_no_valid_commitment_to_cement<br/><i>Category</i> : temporary</p>
      </div><div id="ref299schema" class="ref299 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No valid commitment to cement
         Attempted to cement a commitment but there is no valid commitment to
         cement. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_no_valid_commitment_to_cement" }</pre>
    </div>



**Unknown staker**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref300descr', 'ref300')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref300schema', 'ref300')">JSON Schema</button>
    
    </div>
    <div id="ref300descr" class="ref300 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This implicit account is not a staker of this smart rollup.</p><p><i>Id</i> : proto.alpha.smart_rollup_not_staked<br/><i>Category</i> : temporary</p>
      </div><div id="ref300schema" class="ref300 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown staker
         This implicit account is not a staker of this smart rollup. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_not_staked" }</pre>
    </div>



**Smart rollup not staked on LCC or its ancestor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref301descr', 'ref301')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref301schema', 'ref301')">JSON Schema</button>
    
    </div>
    <div id="ref301descr" class="ref301 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to withdraw while not staked on the last cemented commitment or its ancestor.</p><p><i>Id</i> : proto.alpha.smart_rollup_not_staked_on_lcc_or_ancestor<br/><i>Category</i> : temporary</p>
      </div><div id="ref301schema" class="ref301 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Smart rollup not staked on LCC or its ancestor
         Attempted to withdraw while not staked on the last cemented
         commitment or its ancestor. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_not_staked_on_lcc_or_ancestor" }</pre>
    </div>



**Conflicting commitments do not have a common ancestor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref302descr', 'ref302')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref302schema', 'ref302')">JSON Schema</button>
    
    </div>
    <div id="ref302descr" class="ref302 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Conflicting commitments do not have a common ancestor</p><p><i>Id</i> : proto.alpha.smart_rollup_not_valid_commitments_conflict<br/><i>Category</i> : temporary</p>
      </div><div id="ref302schema" class="ref302 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting commitments do not have a common ancestor
         Conflicting commitments do not have a common ancestor */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_not_valid_commitments_conflict",
      "commitment": $smart_rollup_commitment_hash,
      "player": $Signature.Public_key_hash,
      "opponent_commitment": $smart_rollup_commitment_hash,
      "opponent": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $smart_rollup_commitment_hash:
      /* The hash of a commitment of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Outbox level expired**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref303descr', 'ref303')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref303schema', 'ref303')">JSON Schema</button>
    
    </div>
    <div id="ref303descr" class="ref303 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Outbox level expired</p><p><i>Id</i> : proto.alpha.smart_rollup_outbox_level_expired<br/><i>Category</i> : temporary</p>
      </div><div id="ref303schema" class="ref303 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Outbox level expired
         Outbox level expired */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_outbox_level_expired" }</pre>
    </div>



**Outbox message already applied**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref304descr', 'ref304')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref304schema', 'ref304')">JSON Schema</button>
    
    </div>
    <div id="ref304descr" class="ref304 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Outbox message already applied</p><p><i>Id</i> : proto.alpha.smart_rollup_outbox_message_already_applied<br/><i>Category</i> : temporary</p>
      </div><div id="ref304schema" class="ref304 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Outbox message already applied
         Outbox message already applied */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_outbox_message_already_applied" }</pre>
    </div>



**Failed to decode a rollup management protocol outbox message value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref305descr', 'ref305')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref305schema', 'ref305')">JSON Schema</button>
    
    </div>
    <div id="ref305descr" class="ref305 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to decode a rollup management protocol outbox message value</p><p><i>Id</i> : proto.alpha.smart_rollup_outbox_message_repr.error_decoding_outbox_message<br/><i>Category</i> : temporary</p>
      </div><div id="ref305schema" class="ref305 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to decode a rollup management protocol outbox message value
         Failed to decode a rollup management protocol outbox message value */
      "kind": "permanent",
      "id":
        "proto.alpha.smart_rollup_outbox_message_repr.error_decoding_outbox_message",
      ... }</pre>
    </div>



**Failed to encode a rollup management protocol outbox message value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref306descr', 'ref306')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref306schema', 'ref306')">JSON Schema</button>
    
    </div>
    <div id="ref306descr" class="ref306 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to encode a rollup management protocol outbox message value</p><p><i>Id</i> : proto.alpha.smart_rollup_outbox_message_repr.error_encoding_outbox_message<br/><i>Category</i> : temporary</p>
      </div><div id="ref306schema" class="ref306 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to encode a rollup management protocol outbox message value
         Failed to encode a rollup management protocol outbox message value */
      "kind": "permanent",
      "id":
        "proto.alpha.smart_rollup_outbox_message_repr.error_encoding_outbox_message",
      ... }</pre>
    </div>



**Outdated whitelist update**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref307descr', 'ref307')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref307schema', 'ref307')">JSON Schema</button>
    
    </div>
    <div id="ref307descr" class="ref307 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Outdated whitelist update</p><p><i>Id</i> : proto.alpha.smart_rollup_outdated_whitelist_update<br/><i>Category</i> : temporary</p>
      </div><div id="ref307schema" class="ref307 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Outdated whitelist update
       Outdated whitelist update */
    { /* outdated_message_index */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_outdated_whitelist_update",
      "message_index": $positive_bignum,
      "last_whitelist_update":
        { "message_index": $positive_bignum,
          "outbox_level": integer ∈ [0, 2^31] } }
    || { /* outdated_outbox_level */
         "kind": "permanent",
         "id": "proto.alpha.smart_rollup_outdated_whitelist_update",
         "outbox_level": integer ∈ [0, 2^31],
         "last_whitelist_update":
           { "message_index": $positive_bignum,
             "outbox_level": integer ∈ [0, 2^31] } }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Parent is not the last cemented commitment**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref308descr', 'ref308')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref308schema', 'ref308')">JSON Schema</button>
    
    </div>
    <div id="ref308descr" class="ref308 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Parent is not the last cemented commitment.</p><p><i>Id</i> : proto.alpha.smart_rollup_parent_not_lcc<br/><i>Category</i> : temporary</p>
      </div><div id="ref308schema" class="ref308 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Parent is not the last cemented commitment
         Parent is not the last cemented commitment. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_parent_not_lcc" }</pre>
    </div>



**Invalid proof**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref309descr', 'ref309')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref309schema', 'ref309')">JSON Schema</button>
    
    </div>
    <div id="ref309descr" class="ref309 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An invalid proof has been submitted</p><p><i>Id</i> : proto.alpha.smart_rollup_proof_check<br/><i>Category</i> : temporary</p>
      </div><div id="ref309schema" class="ref309 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid proof
         An invalid proof has been submitted */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_proof_check",
      "reason": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Can not remove a staker**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref310descr', 'ref310')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref310schema', 'ref310')">JSON Schema</button>
    
    </div>
    <div id="ref310descr" class="ref310 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Can not remove a staker committed on cemented.</p><p><i>Id</i> : proto.alpha.smart_rollup_remove_lcc_or_ancestor<br/><i>Category</i> : temporary</p>
      </div><div id="ref310schema" class="ref310 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Can not remove a staker
         Can not remove a staker committed on cemented. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_remove_lcc_or_ancestor" }</pre>
    </div>



**Output proof verification failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref311descr', 'ref311')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref311schema', 'ref311')">JSON Schema</button>
    
    </div>
    <div id="ref311descr" class="ref311 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Output proof verification failed</p><p><i>Id</i> : proto.alpha.smart_rollup_riscv_output_proof_verification_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref311schema" class="ref311 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Output proof verification failed
         Output proof verification failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_riscv_output_proof_verification_failed",
      ... }</pre>
    </div>



**Proof production failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref312descr', 'ref312')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref312schema', 'ref312')">JSON Schema</button>
    
    </div>
    <div id="ref312descr" class="ref312 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof production failed</p><p><i>Id</i> : proto.alpha.smart_rollup_riscv_proof_production_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref312schema" class="ref312 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof production failed
         Proof production failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_riscv_proof_production_failed",
      ... }</pre>
    </div>



**Proof verification failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref313descr', 'ref313')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref313schema', 'ref313')">JSON Schema</button>
    
    </div>
    <div id="ref313descr" class="ref313 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof verification failed</p><p><i>Id</i> : proto.alpha.smart_rollup_riscv_proof_verification_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref313schema" class="ref313 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof verification failed
         Proof verification failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_riscv_proof_verification_failed",
      ... }</pre>
    </div>



**No commitment to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref314descr', 'ref314')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref314schema', 'ref314')">JSON Schema</button>
    
    </div>
    <div id="ref314descr" class="ref314 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No commitment to cement</p><p><i>Id</i> : proto.alpha.smart_rollup_rollup_is_public<br/><i>Category</i> : temporary</p>
      </div><div id="ref314schema" class="ref314 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No commitment to cement
         No commitment to cement */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_rollup_is_public" }</pre>
    </div>



**Staker tried to double stake.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref315descr', 'ref315')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref315schema', 'ref315')">JSON Schema</button>
    
    </div>
    <div id="ref315descr" class="ref315 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Staker tried to double stake.</p><p><i>Id</i> : proto.alpha.smart_rollup_staker_double_stake<br/><i>Category</i> : temporary</p>
      </div><div id="ref315schema" class="ref315 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Staker tried to double stake.
         Staker tried to double stake. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_staker_double_stake" }</pre>
    </div>



**Staker does not have enough funds to make a deposit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref316descr', 'ref316')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref316schema', 'ref316')">JSON Schema</button>
    
    </div>
    <div id="ref316descr" class="ref316 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Staker doesn't have enough funds to make a smart rollup deposit.</p><p><i>Id</i> : proto.alpha.smart_rollup_staker_funds_too_low<br/><i>Category</i> : temporary</p>
      </div><div id="ref316schema" class="ref316 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Staker does not have enough funds to make a deposit
         Staker doesn't have enough funds to make a smart rollup deposit. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_staker_funds_too_low",
      "staker": $Signature.Public_key_hash,
      "smart_rollup": $smart_rollup_address,
      "staker_balance": $alpha.mutez,
      "min_expected_balance": $alpha.mutez }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string
    $smart_rollup_address:
      /* A smart rollup address (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Staker is already playing a game**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref317descr', 'ref317')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref317schema', 'ref317')">JSON Schema</button>
    
    </div>
    <div id="ref317descr" class="ref317 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to start a game where one staker is already busy</p><p><i>Id</i> : proto.alpha.smart_rollup_staker_in_game<br/><i>Category</i> : temporary</p>
      </div><div id="ref317schema" class="ref317 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Staker is already playing a game
       Attempted to start a game where one staker is already busy */
    { /* Refuter */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_staker_in_game",
      "refuter": $Signature.Public_key_hash }
    || { /* Defender */
         "kind": "temporary",
         "id": "proto.alpha.smart_rollup_staker_in_game",
         "defender": $Signature.Public_key_hash }
    || { /* Both */
         "kind": "temporary",
         "id": "proto.alpha.smart_rollup_staker_in_game",
         "refuter": $Signature.Public_key_hash,
         "defender": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**No commitment to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref318descr', 'ref318')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref318schema', 'ref318')">JSON Schema</button>
    
    </div>
    <div id="ref318descr" class="ref318 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No commitment to cement</p><p><i>Id</i> : proto.alpha.smart_rollup_staker_not_in_whitelist<br/><i>Category</i> : temporary</p>
      </div><div id="ref318schema" class="ref318 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No commitment to cement
         No commitment to cement */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_staker_not_in_whitelist" }</pre>
    </div>



**Attempt to timeout game too early**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref319descr', 'ref319')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref319schema', 'ref319')">JSON Schema</button>
    
    </div>
    <div id="ref319descr" class="ref319 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to timeout game too early</p><p><i>Id</i> : proto.alpha.smart_rollup_timeout_level_not_reached<br/><i>Category</i> : temporary</p>
      </div><div id="ref319schema" class="ref319 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Attempt to timeout game too early
         Attempt to timeout game too early */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_timeout_level_not_reached",
      "level_timeout": integer ∈ [-2^31-1, 2^31],
      "staker": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Commitment too far ahead**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref320descr', 'ref320')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref320schema', 'ref320')">JSON Schema</button>
    
    </div>
    <div id="ref320descr" class="ref320 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Commitment is too far ahead of the last cemented commitment.</p><p><i>Id</i> : proto.alpha.smart_rollup_too_far_ahead<br/><i>Category</i> : temporary</p>
      </div><div id="ref320schema" class="ref320 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Commitment too far ahead
         Commitment is too far ahead of the last cemented commitment. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_too_far_ahead" }</pre>
    </div>



**Unknown commitment**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref321descr', 'ref321')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref321schema', 'ref321')">JSON Schema</button>
    
    </div>
    <div id="ref321descr" class="ref321 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unknown commitment.</p><p><i>Id</i> : proto.alpha.smart_rollup_unknown_commitment<br/><i>Category</i> : temporary</p>
      </div><div id="ref321schema" class="ref321 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown commitment
         Unknown commitment. */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_unknown_commitment",
      "commitment": $smart_rollup_commitment_hash }
    $smart_rollup_commitment_hash:
      /* The hash of a commitment of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid claim about outbox**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref322descr', 'ref322')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref322schema', 'ref322')">JSON Schema</button>
    
    </div>
    <div id="ref322descr" class="ref322 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid claim about outbox</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_invalid_claim_about_outbox<br/><i>Category</i> : temporary</p>
      </div><div id="ref322schema" class="ref322 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid claim about outbox
         Invalid claim about outbox */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_invalid_claim_about_outbox",
      ... }</pre>
    </div>



**Invalid dissection distribution: not all ticks are a multiplier of the maximum number of ticks of a snapshot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref323descr', 'ref323')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref323schema', 'ref323')">JSON Schema</button>
    
    </div>
    <div id="ref323descr" class="ref323 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid dissection distribution: not all ticks are a multiplier of the maximum number of ticks of a snapshot</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_invalid_dissection_distribution<br/><i>Category</i> : temporary</p>
      </div><div id="ref323schema" class="ref323 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid dissection distribution: not all ticks are a multiplier of
         the maximum number of ticks of a snapshot
         Invalid dissection distribution: not all ticks are a multiplier of
         the maximum number of ticks of a snapshot */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_invalid_dissection_distribution",
      ... }</pre>
    </div>



**Output proof production failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref324descr', 'ref324')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref324schema', 'ref324')">JSON Schema</button>
    
    </div>
    <div id="ref324descr" class="ref324 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Output proof production failed</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_output_proof_production_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref324schema" class="ref324 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Output proof production failed
         Output proof production failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_output_proof_production_failed",
      ... }</pre>
    </div>



**Output proof verification failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref325descr', 'ref325')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref325schema', 'ref325')">JSON Schema</button>
    
    </div>
    <div id="ref325descr" class="ref325 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Output proof verification failed</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_output_proof_verification_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref325schema" class="ref325 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Output proof verification failed
         Output proof verification failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_output_proof_verification_failed",
      ... }</pre>
    </div>



**Proof production failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref326descr', 'ref326')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref326schema', 'ref326')">JSON Schema</button>
    
    </div>
    <div id="ref326descr" class="ref326 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof production failed</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_proof_production_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref326schema" class="ref326 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof production failed
         Proof production failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_proof_production_failed",
      ... }</pre>
    </div>



**Proof verification failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref327descr', 'ref327')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref327schema', 'ref327')">JSON Schema</button>
    
    </div>
    <div id="ref327descr" class="ref327 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof verification failed</p><p><i>Id</i> : proto.alpha.smart_rollup_wasm_proof_verification_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref327schema" class="ref327 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof verification failed
         Proof verification failed */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wasm_proof_verification_failed",
      ... }</pre>
    </div>



**Invalid whitelist: must be None when the feature is deactivated**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref328descr', 'ref328')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref328schema', 'ref328')">JSON Schema</button>
    
    </div>
    <div id="ref328descr" class="ref328 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The whitelist must be None when the feature is deactivated.</p><p><i>Id</i> : proto.alpha.smart_rollup_whitelist_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref328schema" class="ref328 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid whitelist: must be None when the feature is deactivated
         The whitelist must be None when the feature is deactivated. */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_whitelist_disabled" }</pre>
    </div>



**Given commitment is not staked by given staker**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref329descr', 'ref329')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref329schema', 'ref329')">JSON Schema</button>
    
    </div>
    <div id="ref329descr" class="ref329 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Given commitment is not staked by given staker</p><p><i>Id</i> : proto.alpha.smart_rollup_wrong_staker_for_conflict_commitment<br/><i>Category</i> : temporary</p>
      </div><div id="ref329schema" class="ref329 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Given commitment is not staked by given staker
         Given commitment is not staked by given staker */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_wrong_staker_for_conflict_commitment",
      "player": $Signature.Public_key_hash,
      "commitment": $smart_rollup_commitment_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $smart_rollup_commitment_hash:
      /* The hash of a commitment of a smart rollup (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Attempt to play move but not staker's turn**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref330descr', 'ref330')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref330schema', 'ref330')">JSON Schema</button>
    
    </div>
    <div id="ref330descr" class="ref330 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to play move but not staker's turn</p><p><i>Id</i> : proto.alpha.smart_rollup_wrong_turn<br/><i>Category</i> : temporary</p>
      </div><div id="ref330schema" class="ref330 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Attempt to play move but not staker's turn
         Attempt to play move but not staker's turn */
      "kind": "temporary",
      "id": "proto.alpha.smart_rollup_wrong_turn",
      ... }</pre>
    </div>



**Tried to publish a 0 tick commitment**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref331descr', 'ref331')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref331schema', 'ref331')">JSON Schema</button>
    
    </div>
    <div id="ref331descr" class="ref331 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to publish a 0 tick commitment</p><p><i>Id</i> : proto.alpha.smart_rollup_zero_tick_commitment<br/><i>Category</i> : temporary</p>
      </div><div id="ref331schema" class="ref331 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Tried to publish a 0 tick commitment
         Tried to publish a 0 tick commitment */
      "kind": "permanent",
      "id": "proto.alpha.smart_rollup_zero_tick_commitment" }</pre>
    </div>



**Stake already set**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref332descr', 'ref332')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref332schema', 'ref332')">JSON Schema</button>
    
    </div>
    <div id="ref332descr" class="ref332 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Internal error: Raw_context.set_stake_info_for_cycle was called twice for a given cycle</p><p><i>Id</i> : proto.alpha.stake_info_already_set<br/><i>Category</i> : temporary</p>
      </div><div id="ref332schema" class="ref332 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Stake already set
         Internal error: Raw_context.set_stake_info_for_cycle was called
         twice for a given cycle */
      "kind": "permanent",
      "id": "proto.alpha.stake_info_already_set",
      "cycle": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Storage quota exceeded for the operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref333descr', 'ref333')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref333schema', 'ref333')">JSON Schema</button>
    
    </div>
    <div id="ref333descr" class="ref333 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A script or one of its callee wrote more bytes than the operation said it would</p><p><i>Id</i> : proto.alpha.storage_exhausted.operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref333schema" class="ref333 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Storage quota exceeded for the operation
         A script or one of its callee wrote more bytes than the operation
         said it would */
      "kind": "temporary",
      "id": "proto.alpha.storage_exhausted.operation" }</pre>
    </div>



**Storage limit out of protocol hard bounds**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref334descr', 'ref334')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref334schema', 'ref334')">JSON Schema</button>
    
    </div>
    <div id="ref334descr" class="ref334 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A transaction tried to exceed the hard limit on storage</p><p><i>Id</i> : proto.alpha.storage_limit_too_high<br/><i>Category</i> : temporary</p>
      </div><div id="ref334schema" class="ref334 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Storage limit out of protocol hard bounds
         A transaction tried to exceed the hard limit on storage */
      "kind": "permanent",
      "id": "proto.alpha.storage_limit_too_high" }</pre>
    </div>



**Overflowing tez addition**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref335descr', 'ref335')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref335schema', 'ref335')">JSON Schema</button>
    
    </div>
    <div id="ref335descr" class="ref335 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An addition of two tez amounts overflowed</p><p><i>Id</i> : proto.alpha.tez.addition_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref335schema" class="ref335 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Overflowing tez addition
         An addition of two tez amounts overflowed */
      "kind": "temporary",
      "id": "proto.alpha.tez.addition_overflow",
      "amounts": [ $alpha.mutez, $alpha.mutez ] }
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Invalid tez divisor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref336descr', 'ref336')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref336schema', 'ref336')">JSON Schema</button>
    
    </div>
    <div id="ref336descr" class="ref336 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Multiplication of a tez amount by a non positive integer</p><p><i>Id</i> : proto.alpha.tez.invalid_divisor<br/><i>Category</i> : temporary</p>
      </div><div id="ref336schema" class="ref336 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid tez divisor
         Multiplication of a tez amount by a non positive integer */
      "kind": "temporary",
      "id": "proto.alpha.tez.invalid_divisor",
      "amount": $alpha.mutez,
      "divisor": $bignum }
    $alpha.mutez: $positive_bignum
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Overflowing tez multiplication**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref337descr', 'ref337')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref337schema', 'ref337')">JSON Schema</button>
    
    </div>
    <div id="ref337descr" class="ref337 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multiplication of a tez amount by an integer overflowed</p><p><i>Id</i> : proto.alpha.tez.multiplication_overflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref337schema" class="ref337 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Overflowing tez multiplication
         A multiplication of a tez amount by an integer overflowed */
      "kind": "temporary",
      "id": "proto.alpha.tez.multiplication_overflow",
      "amount": $alpha.mutez,
      "multiplicator": $bignum }
    $alpha.mutez: $positive_bignum
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Negative tez multiplicator**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref338descr', 'ref338')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref338schema', 'ref338')">JSON Schema</button>
    
    </div>
    <div id="ref338descr" class="ref338 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Multiplication of a tez amount by a negative integer</p><p><i>Id</i> : proto.alpha.tez.negative_multiplicator<br/><i>Category</i> : temporary</p>
      </div><div id="ref338schema" class="ref338 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative tez multiplicator
         Multiplication of a tez amount by a negative integer */
      "kind": "temporary",
      "id": "proto.alpha.tez.negative_multiplicator",
      "amount": $alpha.mutez,
      "multiplicator": $bignum }
    $alpha.mutez: $positive_bignum
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Underflowing tez subtraction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref339descr', 'ref339')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref339schema', 'ref339')">JSON Schema</button>
    
    </div>
    <div id="ref339descr" class="ref339 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A subtraction of two tez amounts underflowed (i.e., would have led to a negative amount)</p><p><i>Id</i> : proto.alpha.tez.subtraction_underflow<br/><i>Category</i> : temporary</p>
      </div><div id="ref339schema" class="ref339 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Underflowing tez subtraction
         A subtraction of two tez amounts underflowed (i.e., would have led
         to a negative amount) */
      "kind": "temporary",
      "id": "proto.alpha.tez.subtraction_underflow",
      "amounts": [ $alpha.mutez, $alpha.mutez ] }
    $alpha.mutez: $positive_bignum
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Timestamp add**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref340descr', 'ref340')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref340schema', 'ref340')">JSON Schema</button>
    
    </div>
    <div id="ref340descr" class="ref340 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Overflow when adding timestamps.</p><p><i>Id</i> : proto.alpha.timestamp_add<br/><i>Category</i> : temporary</p>
      </div><div id="ref340schema" class="ref340 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Timestamp add
         Overflow when adding timestamps. */
      "kind": "permanent",
      "id": "proto.alpha.timestamp_add" }</pre>
    </div>



**Timestamp sub**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref341descr', 'ref341')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref341schema', 'ref341')">JSON Schema</button>
    
    </div>
    <div id="ref341descr" class="ref341 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Subtracting timestamps resulted in negative period.</p><p><i>Id</i> : proto.alpha.timestamp_sub<br/><i>Category</i> : temporary</p>
      </div><div id="ref341schema" class="ref341 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Timestamp sub
         Subtracting timestamps resulted in negative period. */
      "kind": "permanent",
      "id": "proto.alpha.timestamp_sub" }</pre>
    </div>



**Too many internal operations**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref342descr', 'ref342')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref342schema', 'ref342')">JSON Schema</button>
    
    </div>
    <div id="ref342descr" class="ref342 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A transaction exceeded the hard limit of internal operations it can emit</p><p><i>Id</i> : proto.alpha.too_many_internal_operations<br/><i>Category</i> : temporary</p>
      </div><div id="ref342schema" class="ref342 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too many internal operations
         A transaction exceeded the hard limit of internal operations it can
         emit */
      "kind": "permanent",
      "id": "proto.alpha.too_many_internal_operations" }</pre>
    </div>



**Ill timed access to the origination nonce**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref343descr', 'ref343')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref343schema', 'ref343')">JSON Schema</button>
    
    </div>
    <div id="ref343descr" class="ref343 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An origination was attempted out of the scope of a manager operation</p><p><i>Id</i> : proto.alpha.undefined_operation_nonce<br/><i>Category</i> : temporary</p>
      </div><div id="ref343schema" class="ref343 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill timed access to the origination nonce
         An origination was attempted out of the scope of a manager operation */
      "kind": "permanent",
      "id": "proto.alpha.undefined_operation_nonce" }</pre>
    </div>



**Undetermined issuance coeff for cycle**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref344descr', 'ref344')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref344schema', 'ref344')">JSON Schema</button>
    
    </div>
    <div id="ref344descr" class="ref344 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Issuance coefficient is only determined for the current cycle and the next [consensus_rights_delay] cycles to come. Requested cycle is not in this window.</p><p><i>Id</i> : proto.alpha.undetermined_issuance_coeff_for_cycle<br/><i>Category</i> : temporary</p>
      </div><div id="ref344schema" class="ref344 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Undetermined issuance coeff for cycle
         Issuance coefficient is only determined for the current cycle and
         the next [consensus_rights_delay] cycles to come. Requested cycle is
         not in this window. */
      "kind": "permanent",
      "id": "proto.alpha.undetermined_issuance_coeff_for_cycle",
      "Undetermined_issuance_coeff_for_cycle": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Unexpected level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref345descr', 'ref345')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref345schema', 'ref345')">JSON Schema</button>
    
    </div>
    <div id="ref345descr" class="ref345 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Level must be non-negative.</p><p><i>Id</i> : proto.alpha.unexpected_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref345schema" class="ref345 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected level
         Level must be non-negative. */
      "kind": "permanent",
      "id": "proto.alpha.unexpected_level",
      "level": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Unexpected nonce length**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref346descr', 'ref346')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref346schema', 'ref346')">JSON Schema</button>
    
    </div>
    <div id="ref346descr" class="ref346 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Nonce length is incorrect.</p><p><i>Id</i> : proto.alpha.unexpected_nonce_length<br/><i>Category</i> : temporary</p>
      </div><div id="ref346schema" class="ref346 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected nonce length
         Nonce length is incorrect. */
      "kind": "permanent",
      "id": "proto.alpha.unexpected_nonce_length" }</pre>
    </div>



**Aggregate operations disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref347descr', 'ref347')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref347schema', 'ref347')">JSON Schema</button>
    
    </div>
    <div id="ref347descr" class="ref347 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Aggregate operations are disabled by the corresponding feature flag</p><p><i>Id</i> : proto.alpha.validate.aggregate_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref347schema" class="ref347 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Aggregate operations disabled
         Aggregate operations are disabled by the corresponding feature flag */
      "kind": "permanent",
      "id": "proto.alpha.validate.aggregate_disabled" }</pre>
    </div>



**Aggregate operations not implemented**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref348descr', 'ref348')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref348schema', 'ref348')">JSON Schema</button>
    
    </div>
    <div id="ref348descr" class="ref348 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Aggregate operations are not implemented yet</p><p><i>Id</i> : proto.alpha.validate.aggregate_not_implemented<br/><i>Category</i> : temporary</p>
      </div><div id="ref348schema" class="ref348 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Aggregate operations not implemented
         Aggregate operations are not implemented yet */
      "kind": "permanent",
      "id": "proto.alpha.validate.aggregate_not_implemented" }</pre>
    </div>



**Aggregate operation not allowed in mempool**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref349descr', 'ref349')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref349schema', 'ref349')">JSON Schema</button>
    
    </div>
    <div id="ref349descr" class="ref349 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Aggregate operations are not allowed in a mempool</p><p><i>Id</i> : proto.alpha.validate.aggregate_operation_not_allowed_in_mempool<br/><i>Category</i> : temporary</p>
      </div><div id="ref349schema" class="ref349 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Aggregate operation not allowed in mempool
         Aggregate operations are not allowed in a mempool */
      "kind": "permanent",
      "id": "proto.alpha.validate.aggregate_operation_not_allowed_in_mempool" }</pre>
    </div>



**Inconsistent validation passes in block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref350descr', 'ref350')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref350schema', 'ref350')">JSON Schema</button>
    
    </div>
    <div id="ref350descr" class="ref350 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Validation of operation should be ordered by their validation passes in a block.</p><p><i>Id</i> : proto.alpha.validate.block.inconsistent_validation_passes_in_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref350schema" class="ref350 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent validation passes in block
         Validation of operation should be ordered by their validation passes
         in a block. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.block.inconsistent_validation_passes_in_block",
      "expected": integer ∈ [-2^30, 2^30],
      "provided": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Insufficient locked round evidence**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref351descr', 'ref351')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref351schema', 'ref351')">JSON Schema</button>
    
    </div>
    <div id="ref351descr" class="ref351 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Insufficient locked round evidence.</p><p><i>Id</i> : proto.alpha.validate.block.insufficient_locked_round_evidence<br/><i>Category</i> : temporary</p>
      </div><div id="ref351schema" class="ref351 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Insufficient locked round evidence
         Insufficient locked round evidence. */
      "kind": "permanent",
      "id": "proto.alpha.validate.block.insufficient_locked_round_evidence",
      "total_attesting_power": integer ∈ [-2^30, 2^30],
      "consensus_threshold": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Invalid double baking evidence**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref352descr', 'ref352')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref352schema', 'ref352')">JSON Schema</button>
    
    </div>
    <div id="ref352descr" class="ref352 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A double-baking evidence is inconsistent (two distinct levels)</p><p><i>Id</i> : proto.alpha.validate.block.invalid_double_baking_evidence<br/><i>Category</i> : temporary</p>
      </div><div id="ref352schema" class="ref352 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid double baking evidence
         A double-baking evidence is inconsistent (two distinct levels) */
      "kind": "permanent",
      "id": "proto.alpha.validate.block.invalid_double_baking_evidence",
      "hash1": $block_hash,
      "level1": integer ∈ [0, 2^31],
      "round1": integer ∈ [-2^31-1, 2^31],
      "hash2": $block_hash,
      "level2": integer ∈ [0, 2^31],
      "round2": integer ∈ [-2^31-1, 2^31] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid payload hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref353descr', 'ref353')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref353schema', 'ref353')">JSON Schema</button>
    
    </div>
    <div id="ref353descr" class="ref353 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid payload hash.</p><p><i>Id</i> : proto.alpha.validate.block.invalid_payload_hash<br/><i>Category</i> : temporary</p>
      </div><div id="ref353schema" class="ref353 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid payload hash
         Invalid payload hash. */
      "kind": "permanent",
      "id": "proto.alpha.validate.block.invalid_payload_hash",
      "expected": $value_hash,
      "provided": $value_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }
    $value_hash:
      /* Hash of a consensus value (Base58Check-encoded) */
      $unistring</pre>
    </div>



**Locked round after block round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref354descr', 'ref354')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref354schema', 'ref354')">JSON Schema</button>
    
    </div>
    <div id="ref354descr" class="ref354 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Locked round after block round.</p><p><i>Id</i> : proto.alpha.validate.block.locked_round_after_block_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref354schema" class="ref354 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Locked round after block round
         Locked round after block round. */
      "kind": "permanent",
      "id": "proto.alpha.validate.block.locked_round_after_block_round",
      "locked_round": integer ∈ [-2^31-1, 2^31],
      "round": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Not enough attestations**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref355descr', 'ref355')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref355schema', 'ref355')">JSON Schema</button>
    
    </div>
    <div id="ref355descr" class="ref355 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block being validated does not include the required minimum number of attestations.</p><p><i>Id</i> : proto.alpha.validate.block.not_enough_attestations<br/><i>Category</i> : temporary</p>
      </div><div id="ref355schema" class="ref355 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough attestations
         The block being validated does not include the required minimum
         number of attestations. */
      "kind": "permanent",
      "id": "proto.alpha.validate.block.not_enough_attestations",
      "required": integer ∈ [-2^30, 2^30],
      "provided": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Consensus operation for future level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref356descr', 'ref356')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref356schema', 'ref356')">JSON Schema</button>
    
    </div>
    <div id="ref356descr" class="ref356 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation for future level.</p><p><i>Id</i> : proto.alpha.validate.consensus_operation_for_future_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref356schema" class="ref356 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation for future level
         Consensus operation for future level. */
      "kind": "temporary",
      "id": "proto.alpha.validate.consensus_operation_for_future_level",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "expected": integer ∈ [0, 2^31],
      "provided": integer ∈ [0, 2^31] }</pre>
    </div>



**Consensus operation for future round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref357descr', 'ref357')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref357schema', 'ref357')">JSON Schema</button>
    
    </div>
    <div id="ref357descr" class="ref357 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation for future round.</p><p><i>Id</i> : proto.alpha.validate.consensus_operation_for_future_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref357schema" class="ref357 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation for future round
         Consensus operation for future round. */
      "kind": "temporary",
      "id": "proto.alpha.validate.consensus_operation_for_future_round",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "expected_max": integer ∈ [-2^31-1, 2^31],
      "provided": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Consensus operation for old level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref358descr', 'ref358')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref358schema', 'ref358')">JSON Schema</button>
    
    </div>
    <div id="ref358descr" class="ref358 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation for old level.</p><p><i>Id</i> : proto.alpha.validate.consensus_operation_for_old_level<br/><i>Category</i> : temporary</p>
      </div><div id="ref358schema" class="ref358 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation for old level
         Consensus operation for old level. */
      "kind": "outdated",
      "id": "proto.alpha.validate.consensus_operation_for_old_level",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "expected": integer ∈ [0, 2^31],
      "provided": integer ∈ [0, 2^31] }</pre>
    </div>



**Consensus operation for old round**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref359descr', 'ref359')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref359schema', 'ref359')">JSON Schema</button>
    
    </div>
    <div id="ref359descr" class="ref359 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation for old round.</p><p><i>Id</i> : proto.alpha.validate.consensus_operation_for_old_round<br/><i>Category</i> : temporary</p>
      </div><div id="ref359schema" class="ref359 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation for old round
         Consensus operation for old round. */
      "kind": "branch",
      "id": "proto.alpha.validate.consensus_operation_for_old_round",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "expected_min": integer ∈ [-2^31-1, 2^31],
      "provided": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Consensus operation not allowed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref360descr', 'ref360')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref360schema', 'ref360')">JSON Schema</button>
    
    </div>
    <div id="ref360descr" class="ref360 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Consensus operation not allowed.</p><p><i>Id</i> : proto.alpha.validate.consensus_operation_not_allowed<br/><i>Category</i> : temporary</p>
      </div><div id="ref360schema" class="ref360 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Consensus operation not allowed
         Consensus operation not allowed. */
      "kind": "branch",
      "id": "proto.alpha.validate.consensus_operation_not_allowed" }</pre>
    </div>



**Double inclusion of consensus operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref361descr', 'ref361')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref361schema', 'ref361')">JSON Schema</button>
    
    </div>
    <div id="ref361descr" class="ref361 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Double inclusion of consensus operation.</p><p><i>Id</i> : proto.alpha.validate.double_inclusion_of_consensus_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref361schema" class="ref361 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Double inclusion of consensus operation
         Double inclusion of consensus operation. */
      "kind": "branch",
      "id": "proto.alpha.validate.double_inclusion_of_consensus_operation",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty aggregation committee**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref362descr', 'ref362')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref362schema', 'ref362')">JSON Schema</button>
    
    </div>
    <div id="ref362descr" class="ref362 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The aggregation committee is empty</p><p><i>Id</i> : proto.alpha.validate.empty_aggregation_committee<br/><i>Category</i> : temporary</p>
      </div><div id="ref362schema" class="ref362 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty aggregation committee
         The aggregation committee is empty */
      "kind": "permanent",
      "id": "proto.alpha.validate.empty_aggregation_committee" }</pre>
    </div>



**Missing companion key for DAL attestation with BLS**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref363descr', 'ref363')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref363schema', 'ref363')">JSON Schema</button>
    
    </div>
    <div id="ref363descr" class="ref363 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The consensus key is a BLS key but is missing a companion key, so it cannot issue a DAL attestation</p><p><i>Id</i> : proto.alpha.validate.missing_companion_key_for_bls_dal<br/><i>Category</i> : temporary</p>
      </div><div id="ref363schema" class="ref363 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing companion key for DAL attestation with BLS
         The consensus key is a BLS key but is missing a companion key, so it
         cannot issue a DAL attestation */
      "kind": "permanent",
      "id": "proto.alpha.validate.missing_companion_key_for_bls_dal",
      "consensus_key":
        { "delegate": $Signature.Public_key_hash,
          "consensus_pkh": $Signature.Public_key_hash } }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Non BLS key in aggregate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref364descr', 'ref364')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref364schema', 'ref364')">JSON Schema</button>
    
    </div>
    <div id="ref364descr" class="ref364 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Non Bls key in a consensus aggregate operation</p><p><i>Id</i> : proto.alpha.validate.non_bls_key_in_aggregate<br/><i>Category</i> : temporary</p>
      </div><div id="ref364schema" class="ref364 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Non BLS key in aggregate
         Non Bls key in a consensus aggregate operation */
      "kind": "permanent",
      "id": "proto.alpha.validate.non_bls_key_in_aggregate" }</pre>
    </div>



**Accusation validity error: cannot get slot headers**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref365descr', 'ref365')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref365schema', 'ref365')">JSON Schema</button>
    
    </div>
    <div id="ref365descr" class="ref365 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Accusation validity internal error: unable to retrieve the required DAL slot headers.</p><p><i>Id</i> : proto.alpha.validate.operation.accusation_validity_error_cannot_get_slot_headers<br/><i>Category</i> : temporary</p>
      </div><div id="ref365schema" class="ref365 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Accusation validity error: cannot get slot headers
         Accusation validity internal error: unable to retrieve the required
         DAL slot headers. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.accusation_validity_error_cannot_get_slot_headers",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Accusation validity internal error: levels mismatch**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref366descr', 'ref366')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref366schema', 'ref366')">JSON Schema</button>
    
    </div>
    <div id="ref366descr" class="ref366 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Accusation validity internal error: mismatch between published levels in storage and evidence.</p><p><i>Id</i> : proto.alpha.validate.operation.accusation_validity_error_levels_mismatch<br/><i>Category</i> : temporary</p>
      </div><div id="ref366schema" class="ref366 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Accusation validity internal error: levels mismatch
         Accusation validity internal error: mismatch between published
         levels in storage and evidence. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.accusation_validity_error_levels_mismatch",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255],
      "accusation_published_level": integer ∈ [0, 2^31],
      "store_published_level": integer ∈ [0, 2^31] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Already denounced for DAL entrapement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref367descr', 'ref367')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref367schema', 'ref367')">JSON Schema</button>
    
    </div>
    <div id="ref367descr" class="ref367 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The same DAL denunciation has already been validated.</p><p><i>Id</i> : proto.alpha.validate.operation.already_dal_denounced<br/><i>Category</i> : temporary</p>
      </div><div id="ref367schema" class="ref367 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Already denounced for DAL entrapement
         The same DAL denunciation has already been validated. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.already_dal_denounced",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Already denounced**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref368descr', 'ref368')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref368schema', 'ref368')">JSON Schema</button>
    
    </div>
    <div id="ref368descr" class="ref368 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The same denunciation has already been validated.</p><p><i>Id</i> : proto.alpha.validate.operation.already_denounced<br/><i>Category</i> : temporary</p>
      </div><div id="ref368schema" class="ref368 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Already denounced
         The same denunciation has already been validated. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.already_denounced",
      "denunciation_kind": "attestation" | "block" | "preattestation",
      "delegate": $Signature.Public_key_hash,
      "level":
        { "level":
            integer ∈ [0, 2^31]
            /* The level of the block relative to genesis. This is also the
               Shell's notion of level. */,
          "level_position":
            integer ∈ [-2^31-1, 2^31]
            /* The level of the block relative to the successor of the
               genesis block. More precisely, it is the position of the block
               relative to the block that starts the "Alpha family" of
               protocols, which includes all protocols except Genesis (that
               is, from 001 onwards). */,
          "cycle":
            integer ∈ [-2^31-1, 2^31]
            /* The current cycle's number. Note that cycles are a
               protocol-specific notion. As a result, the cycle number starts
               at 0 with the first block of the Alpha family of protocols. */,
          "cycle_position":
            integer ∈ [-2^31-1, 2^31]
            /* The current level of the block relative to the first block of
               the current cycle. */,
          "expected_commitment":
            boolean
            /* Tells whether the baker of this block has to commit a seed
               nonce hash. */ } }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Already proposed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref369descr', 'ref369')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref369schema', 'ref369')">JSON Schema</button>
    
    </div>
    <div id="ref369descr" class="ref369 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate has already submitted one of the operation's proposals.</p><p><i>Id</i> : proto.alpha.validate.operation.already_proposed<br/><i>Category</i> : temporary</p>
      </div><div id="ref369schema" class="ref369 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Already proposed
         The delegate has already submitted one of the operation's proposals. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.already_proposed",
      "proposal": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Already submitted a ballot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref370descr', 'ref370')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref370schema', 'ref370')">JSON Schema</button>
    
    </div>
    <div id="ref370descr" class="ref370 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate has already submitted a ballot for the current voting period.</p><p><i>Id</i> : proto.alpha.validate.operation.already_submitted_a_ballot<br/><i>Category</i> : temporary</p>
      </div><div id="ref370schema" class="ref370 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Already submitted a ballot
         The delegate has already submitted a ballot for the current voting
         period. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.already_submitted_a_ballot" }</pre>
    </div>



**Ballot for wrong proposal**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref371descr', 'ref371')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref371schema', 'ref371')">JSON Schema</button>
    
    </div>
    <div id="ref371descr" class="ref371 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Ballot provided for a proposal that is not the current one.</p><p><i>Id</i> : proto.alpha.validate.operation.ballot_for_wrong_proposal<br/><i>Category</i> : temporary</p>
      </div><div id="ref371schema" class="ref371 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ballot for wrong proposal
         Ballot provided for a proposal that is not the current one. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.ballot_for_wrong_proposal",
      "current_proposal": $Protocol_hash,
      "ballot_proposal": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref372descr', 'ref372')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref372schema', 'ref372')">JSON Schema</button>
    
    </div>
    <div id="ref372descr" class="ref372 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A denunciation operation is inconsistent (two distinct delegates)</p><p><i>Id</i> : proto.alpha.validate.operation.block.inconsistent_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref372schema" class="ref372 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent denunciation
         A denunciation operation is inconsistent (two distinct delegates) */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.block.inconsistent_denunciation",
      "kind": "attestation" | "block" | "preattestation",
      "delegate1": $Signature.Public_key_hash,
      "delegate2": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid DAL shard index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref373descr', 'ref373')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref373schema', 'ref373')">JSON Schema</button>
    
    </div>
    <div id="ref373descr" class="ref373 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given shard index is out of range of representable shard indices</p><p><i>Id</i> : proto.alpha.validate.operation.block.invalid_dal_shard_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref373schema" class="ref373 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid DAL shard index
         The given shard index is out of range of representable shard indices */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.block.invalid_dal_shard_index",
      "given": integer ∈ [-2^30, 2^30],
      "min": integer ∈ [-2^30, 2^30],
      "max": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Invalid denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref374descr', 'ref374')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref374schema', 'ref374')">JSON Schema</button>
    
    </div>
    <div id="ref374descr" class="ref374 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A denunciation is malformed</p><p><i>Id</i> : proto.alpha.validate.operation.block.invalid_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref374schema" class="ref374 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid denunciation
         A denunciation is malformed */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.block.invalid_denunciation",
      "kind": "attestation" | "block" | "preattestation" }</pre>
    </div>



**Outdated DAL denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref375descr', 'ref375')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref375schema', 'ref375')">JSON Schema</button>
    
    </div>
    <div id="ref375descr" class="ref375 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A DAL denunciation is outdated.</p><p><i>Id</i> : proto.alpha.validate.operation.block.outdated_dal_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref375schema" class="ref375 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Outdated DAL denunciation
         A DAL denunciation is outdated. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.block.outdated_dal_denunciation",
      "level": integer ∈ [0, 2^31],
      "last": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Outdated denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref376descr', 'ref376')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref376schema', 'ref376')">JSON Schema</button>
    
    </div>
    <div id="ref376descr" class="ref376 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A denunciation is outdated.</p><p><i>Id</i> : proto.alpha.validate.operation.block.outdated_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref376schema" class="ref376 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Outdated denunciation
         A denunciation is outdated. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.block.outdated_denunciation",
      "kind": "attestation" | "block" | "preattestation",
      "level": integer ∈ [0, 2^31],
      "last": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Too early DAL denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref377descr', 'ref377')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref377schema', 'ref377')">JSON Schema</button>
    
    </div>
    <div id="ref377descr" class="ref377 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A DAL denunciation is for a future level</p><p><i>Id</i> : proto.alpha.validate.operation.block.too_early_dal_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref377schema" class="ref377 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too early DAL denunciation
         A DAL denunciation is for a future level */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.block.too_early_dal_denunciation",
      "level": integer ∈ [0, 2^31],
      "current": integer ∈ [0, 2^31] }</pre>
    </div>



**Too early denunciation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref378descr', 'ref378')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref378schema', 'ref378')">JSON Schema</button>
    
    </div>
    <div id="ref378descr" class="ref378 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A denunciation is for a future level</p><p><i>Id</i> : proto.alpha.validate.operation.block.too_early_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref378schema" class="ref378 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too early denunciation
         A denunciation is for a future level */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.block.too_early_denunciation",
      "kind": "attestation" | "block" | "preattestation",
      "level": integer ∈ [0, 2^31],
      "current": integer ∈ [0, 2^31] }</pre>
    </div>



**Conflict too many proposals**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref379descr', 'ref379')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref379schema', 'ref379')">JSON Schema</button>
    
    </div>
    <div id="ref379descr" class="ref379 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate exceeded the maximum number of allowed proposals due to, among others, previous Proposals operations in the current block/mempool.</p><p><i>Id</i> : proto.alpha.validate.operation.conflict_too_many_proposals<br/><i>Category</i> : temporary</p>
      </div><div id="ref379schema" class="ref379 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflict too many proposals
         The delegate exceeded the maximum number of allowed proposals due
         to, among others, previous Proposals operations in the current
         block/mempool. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.conflict_too_many_proposals",
      "previous_count": integer ∈ [-128, 127],
      "operation_count": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Account already activated in current validation_state**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref380descr', 'ref380')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref380schema', 'ref380')">JSON Schema</button>
    
    </div>
    <div id="ref380descr" class="ref380 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The account has already been activated by a previous operation in the current validation state.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_activation<br/><i>Category</i> : temporary</p>
      </div><div id="ref380schema" class="ref380 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Account already activated in current validation_state
         The account has already been activated by a previous operation in
         the current validation state. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_activation",
      "edpkh": $Ed25519.Public_key_hash,
      "conflict": $alpha.operation_conflict }
    $Ed25519.Public_key_hash:
      /* An Ed25519 public key hash (Base58Check-encoded) */
      $unistring
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting ballot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref381descr', 'ref381')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref381schema', 'ref381')">JSON Schema</button>
    
    </div>
    <div id="ref381descr" class="ref381 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate has already submitted a ballot in a previously validated operation of the current block or mempool.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_ballot<br/><i>Category</i> : temporary</p>
      </div><div id="ref381schema" class="ref381 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting ballot
         The delegate has already submitted a ballot in a previously
         validated operation of the current block or mempool. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.conflicting_ballot",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting DAL entrapment in the current validation state).**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref382descr', 'ref382')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref382schema', 'ref382')">JSON Schema</button>
    
    </div>
    <div id="ref382descr" class="ref382 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A DAL entrapment evidence for the same level and a larger DAL attestation has already been validated for the current validation state.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_dal_entrapment<br/><i>Category</i> : temporary</p>
      </div><div id="ref382schema" class="ref382 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting DAL entrapment in the current validation state).
         A DAL entrapment evidence for the same level and a larger DAL
         attestation has already been validated for the current validation
         state. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_dal_entrapment",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting denunciation in current validation state**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref383descr', 'ref383')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref383schema', 'ref383')">JSON Schema</button>
    
    </div>
    <div id="ref383descr" class="ref383 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The same denunciation has already been validated in the current validation state.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_denunciation<br/><i>Category</i> : temporary</p>
      </div><div id="ref383schema" class="ref383 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting denunciation in current validation state
         The same denunciation has already been validated in the current
         validation state. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_denunciation",
      "denunciation_kind": "attestation" | "block" | "preattestation",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting drain in the current validation state).**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref384descr', 'ref384')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref384schema', 'ref384')">JSON Schema</button>
    
    </div>
    <div id="ref384descr" class="ref384 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A manager operation or another drain operation is in conflict.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_drain<br/><i>Category</i> : temporary</p>
      </div><div id="ref384schema" class="ref384 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting drain in the current validation state).
         A manager operation or another drain operation is in conflict. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_drain",
      "delegate": $Signature.Public_key_hash,
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting nonce revelation in the current validation state).**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref385descr', 'ref385')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref385schema', 'ref385')">JSON Schema</button>
    
    </div>
    <div id="ref385descr" class="ref385 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A revelation for the same nonce has already been validated for the current validation state.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_nonce_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref385schema" class="ref385 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting nonce revelation in the current validation state).
         A revelation for the same nonce has already been validated for the
         current validation state. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_nonce_revelation",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting proposals**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref386descr', 'ref386')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref386schema', 'ref386')">JSON Schema</button>
    
    </div>
    <div id="ref386descr" class="ref386 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The current block/mempool already contains a testnest dictator proposals operation, so it cannot have any other voting operation.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_proposals<br/><i>Category</i> : temporary</p>
      </div><div id="ref386schema" class="ref386 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting proposals
         The current block/mempool already contains a testnest dictator
         proposals operation, so it cannot have any other voting operation. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.conflicting_proposals",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Conflicting vdf revelation in the current validation state).**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref387descr', 'ref387')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref387schema', 'ref387')">JSON Schema</button>
    
    </div>
    <div id="ref387descr" class="ref387 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A revelation for the same vdf has already been validated for the current validation state.</p><p><i>Id</i> : proto.alpha.validate.operation.conflicting_vdf_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref387schema" class="ref387 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Conflicting vdf revelation in the current validation state).
         A revelation for the same vdf has already been validated for the
         current validation state. */
      "kind": "branch",
      "id": "proto.alpha.validate.operation.conflicting_vdf_revelation",
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Empty proposals**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref388descr', 'ref388')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref388schema', 'ref388')">JSON Schema</button>
    
    </div>
    <div id="ref388descr" class="ref388 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proposal list cannot be empty.</p><p><i>Id</i> : proto.alpha.validate.operation.empty_proposals<br/><i>Category</i> : temporary</p>
      </div><div id="ref388schema" class="ref388 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Empty proposals
         Proposal list cannot be empty. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.empty_proposals" }</pre>
    </div>



**Failing_noop error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref389descr', 'ref389')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref389schema', 'ref389')">JSON Schema</button>
    
    </div>
    <div id="ref389descr" class="ref389 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A failing_noop operation can never be validated.</p><p><i>Id</i> : proto.alpha.validate.operation.failing_noop_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref389schema" class="ref389 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failing_noop error
         A failing_noop operation can never be validated. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.failing_noop_error" }</pre>
    </div>



**Not enough gas for initial deserialization of script expressions**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref390descr', 'ref390')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref390schema', 'ref390')">JSON Schema</button>
    
    </div>
    <div id="ref390descr" class="ref390 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Gas limit was not high enough to deserialize the transaction parameters or origination script code or initial storage etc., making the operation impossible to parse within the provided gas bounds.</p><p><i>Id</i> : proto.alpha.validate.operation.gas_quota_exceeded_init_deserialize<br/><i>Category</i> : temporary</p>
      </div><div id="ref390schema" class="ref390 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough gas for initial deserialization of script expressions
         Gas limit was not high enough to deserialize the transaction
         parameters or origination script code or initial storage etc.,
         making the operation impossible to parse within the provided gas
         bounds. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.gas_quota_exceeded_init_deserialize" }</pre>
    </div>



**Inconsistent counters in operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref391descr', 'ref391')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref391schema', 'ref391')">JSON Schema</button>
    
    </div>
    <div id="ref391descr" class="ref391 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent counters in operation batch. Counters must be increasing and consecutive.</p><p><i>Id</i> : proto.alpha.validate.operation.inconsistent_counters<br/><i>Category</i> : temporary</p>
      </div><div id="ref391schema" class="ref391 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent counters in operation
         Inconsistent counters in operation batch. Counters must be
         increasing and consecutive. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.inconsistent_counters",
      "source": $Signature.Public_key_hash,
      "previous_counter": $bignum,
      "wrong_counter": $bignum }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent sources in operation batch**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref392descr', 'ref392')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref392schema', 'ref392')">JSON Schema</button>
    
    </div>
    <div id="ref392descr" class="ref392 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent sources in operation batch. All operations in a batch must have the same source.</p><p><i>Id</i> : proto.alpha.validate.operation.inconsistent_sources<br/><i>Category</i> : temporary</p>
      </div><div id="ref392schema" class="ref392 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent sources in operation batch
         Inconsistent sources in operation batch. All operations in a batch
         must have the same source. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.inconsistent_sources",
      "first_source": $Signature.Public_key_hash,
      "unexpected_source": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Incorrect proof of possession for tz4 key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref393descr', 'ref393')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref393schema', 'ref393')">JSON Schema</button>
    
    </div>
    <div id="ref393descr" class="ref393 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Incorrect proof of possession for tz4 key.</p><p><i>Id</i> : proto.alpha.validate.operation.incorrect_bls_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref393schema" class="ref393 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Incorrect proof of possession for tz4 key
         Incorrect proof of possession for tz4 key. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.incorrect_bls_proof",
      "kind": "consensus_pk" | "manager_pk" | "companion_pk",
      "public_key": $Signature.Public_key,
      "proof": $Bls12_381_signature }
    $Bls12_381_signature:
      /* A Bls12_381 signature (Base58Check-encoded) */
      $unistring
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Incorrect reveal position**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref394descr', 'ref394')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref394schema', 'ref394')">JSON Schema</button>
    
    </div>
    <div id="ref394descr" class="ref394 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Incorrect reveal operation position in batch: only allowed in first position.</p><p><i>Id</i> : proto.alpha.validate.operation.incorrect_reveal_position<br/><i>Category</i> : temporary</p>
      </div><div id="ref394schema" class="ref394 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Incorrect reveal position
         Incorrect reveal operation position in batch: only allowed in first
         position. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.incorrect_reveal_position" }</pre>
    </div>



**Not enough gas for initial manager cost**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref395descr', 'ref395')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref395schema', 'ref395')">JSON Schema</button>
    
    </div>
    <div id="ref395descr" class="ref395 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Gas limit is too low to cover the initial cost of manager operations: a minimum of 100 gas units is required.</p><p><i>Id</i> : proto.alpha.validate.operation.insufficient_gas_for_manager<br/><i>Category</i> : temporary</p>
      </div><div id="ref395schema" class="ref395 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough gas for initial manager cost
         Gas limit is too low to cover the initial cost of manager
         operations: a minimum of 100 gas units is required. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.insufficient_gas_for_manager" }</pre>
    </div>



**Invalid DAL denunciation: inconsistent consensus slot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref396descr', 'ref396')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref396schema', 'ref396')">JSON Schema</button>
    
    </div>
    <div id="ref396descr" class="ref396 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The denounced attestation must be either a standalone attestation for the denounced consensus slot, or an attestations aggregate whose committee includes the denounced consensus slot.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_inconsistent_consensus_slot<br/><i>Category</i> : temporary</p>
      </div><div id="ref396schema" class="ref396 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid DAL denunciation: inconsistent consensus slot
         The denounced attestation must be either a standalone attestation
         for the denounced consensus slot, or an attestations aggregate whose
         committee includes the denounced consensus slot. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_inconsistent_consensus_slot" }</pre>
    </div>



**Invalid accusation: no DAL content**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref397descr', 'ref397')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref397schema', 'ref397')">JSON Schema</button>
    
    </div>
    <div id="ref397descr" class="ref397 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid accusation: the attestation operation has no DAL content for the denounced consensus slot.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_no_dal_content<br/><i>Category</i> : temporary</p>
      </div><div id="ref397schema" class="ref397 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid accusation: no DAL content
         Invalid accusation: the attestation operation has no DAL content for
         the denounced consensus slot. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_no_dal_content",
      "TB_slot": integer ∈ [0, 2^16-1],
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255] }</pre>
    </div>



**Invalid DAL denunciation of preattestation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref398descr', 'ref398')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref398schema', 'ref398')">JSON Schema</button>
    
    </div>
    <div id="ref398descr" class="ref398 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>DAL denunciations cannot target preattestations, since they have no DAL content.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_of_preattestation<br/><i>Category</i> : temporary</p>
      </div><div id="ref398schema" class="ref398 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid DAL denunciation of preattestation
         DAL denunciations cannot target preattestations, since they have no
         DAL content. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_of_preattestation" }</pre>
    </div>



**Invalid accusation: the provided shard is not a trap**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref399descr', 'ref399')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref399schema', 'ref399')">JSON Schema</button>
    
    </div>
    <div id="ref399descr" class="ref399 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid accusation: the provided shard is not a trap.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_shard_is_not_trap<br/><i>Category</i> : temporary</p>
      </div><div id="ref399schema" class="ref399 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid accusation: the provided shard is not a trap
         Invalid accusation: the provided shard is not a trap. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_shard_is_not_trap",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255],
      "shard_index": integer ∈ [-2^30, 2^30] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid accusation: the delegate did not attest the DAL slot**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref400descr', 'ref400')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref400schema', 'ref400')">JSON Schema</button>
    
    </div>
    <div id="ref400descr" class="ref400 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid accusation: the delegate did not attest the DAL slot.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_slot_not_attested<br/><i>Category</i> : temporary</p>
      </div><div id="ref400schema" class="ref400 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid accusation: the delegate did not attest the DAL slot
         Invalid accusation: the delegate did not attest the DAL slot. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_slot_not_attested",
      "TB_slot": integer ∈ [0, 2^16-1],
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255] }</pre>
    </div>



**Invalid accusation: DAL slot not published**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref401descr', 'ref401')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref401schema', 'ref401')">JSON Schema</button>
    
    </div>
    <div id="ref401descr" class="ref401 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid accusation: the DAL slot was not published.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_slot_not_published<br/><i>Category</i> : temporary</p>
      </div><div id="ref401schema" class="ref401 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid accusation: DAL slot not published
         Invalid accusation: the DAL slot was not published. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_slot_not_published",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255] }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid accusation: the provided shard is not assigned to the attester**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref402descr', 'ref402')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref402schema', 'ref402')">JSON Schema</button>
    
    </div>
    <div id="ref402descr" class="ref402 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid accusation: the provided shard is not assigned to the attester.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_accusation_wrong_shard_owner<br/><i>Category</i> : temporary</p>
      </div><div id="ref402schema" class="ref402 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid accusation: the provided shard is not assigned to the
         attester
         Invalid accusation: the provided shard is not assigned to the
         attester. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.invalid_accusation_wrong_shard_owner",
      "delegate": $Signature.Public_key_hash,
      "level": integer ∈ [0, 2^31],
      "slot_index": integer ∈ [0, 255],
      "shard_index": integer ∈ [-2^30, 2^30],
      "shard_owner": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid activation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref403descr', 'ref403')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref403schema', 'ref403')">JSON Schema</button>
    
    </div>
    <div id="ref403descr" class="ref403 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given key and secret do not correspond to any existing preallocated contract.</p><p><i>Id</i> : proto.alpha.validate.operation.invalid_activation<br/><i>Category</i> : temporary</p>
      </div><div id="ref403schema" class="ref403 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid activation
         The given key and secret do not correspond to any existing
         preallocated contract. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.invalid_activation",
      "pkh": $Ed25519.Public_key_hash }
    $Ed25519.Public_key_hash:
      /* An Ed25519 public key hash (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Manager restriction**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref404descr', 'ref404')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref404schema', 'ref404')">JSON Schema</button>
    
    </div>
    <div id="ref404descr" class="ref404 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An operation with the same manager has already been validated in the current block.</p><p><i>Id</i> : proto.alpha.validate.operation.manager_restriction<br/><i>Category</i> : temporary</p>
      </div><div id="ref404schema" class="ref404 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Manager restriction
         An operation with the same manager has already been validated in the
         current block. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.manager_restriction",
      "source": $Signature.Public_key_hash,
      "conflict": $alpha.operation_conflict }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $alpha.operation_conflict:
      /* Conflict error
         Conflict between two operations */
      { "existing": $Operation_hash,
        "new_operation": $Operation_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Proof of possession is required for tz4 key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref405descr', 'ref405')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref405schema', 'ref405')">JSON Schema</button>
    
    </div>
    <div id="ref405descr" class="ref405 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Revealing tz4 public keys and updating consensus and companion keys with tz4 require a proof of possession.</p><p><i>Id</i> : proto.alpha.validate.operation.missing_bls_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref405schema" class="ref405 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof of possession is required for tz4 key
         Revealing tz4 public keys and updating consensus and companion keys
         with tz4 require a proof of possession. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.missing_bls_proof",
      "kind": "consensus_pk" | "manager_pk" | "companion_pk",
      "source": $Signature.Public_key_hash,
      "public_key": $Signature.Public_key }
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Proposals contain duplicate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref406descr', 'ref406')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref406schema', 'ref406')">JSON Schema</button>
    
    </div>
    <div id="ref406descr" class="ref406 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The list of proposals contains a duplicate element.</p><p><i>Id</i> : proto.alpha.validate.operation.proposals_contain_duplicate<br/><i>Category</i> : temporary</p>
      </div><div id="ref406schema" class="ref406 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proposals contain duplicate
         The list of proposals contains a duplicate element. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.proposals_contain_duplicate",
      "proposal": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Source not in vote listings**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref407descr', 'ref407')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref407schema', 'ref407')">JSON Schema</button>
    
    </div>
    <div id="ref407descr" class="ref407 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate is not in the vote listings.</p><p><i>Id</i> : proto.alpha.validate.operation.source_not_in_vote_listings<br/><i>Category</i> : temporary</p>
      </div><div id="ref407schema" class="ref407 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Source not in vote listings
         The delegate is not in the vote listings. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.source_not_in_vote_listings" }</pre>
    </div>



**Testnet dictator multiple proposals**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref408descr', 'ref408')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref408schema', 'ref408')">JSON Schema</button>
    
    </div>
    <div id="ref408descr" class="ref408 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A testnet dictator cannot submit more than one proposal at a time.</p><p><i>Id</i> : proto.alpha.validate.operation.testnet_dictator_multiple_proposals<br/><i>Category</i> : temporary</p>
      </div><div id="ref408schema" class="ref408 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Testnet dictator multiple proposals
         A testnet dictator cannot submit more than one proposal at a time. */
      "kind": "permanent",
      "id":
        "proto.alpha.validate.operation.testnet_dictator_multiple_proposals" }</pre>
    </div>



**Proof of possession is only required for tz4 keys**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref409descr', 'ref409')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref409schema', 'ref409')">JSON Schema</button>
    
    </div>
    <div id="ref409descr" class="ref409 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Proof of possession is only required for tz4 keys</p><p><i>Id</i> : proto.alpha.validate.operation.unused_bls_proof<br/><i>Category</i> : temporary</p>
      </div><div id="ref409schema" class="ref409 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Proof of possession is only required for tz4 keys
         Proof of possession is only required for tz4 keys */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.unused_bls_proof",
      "kind": "consensus_pk" | "manager_pk" | "companion_pk",
      "source": $Signature.Public_key_hash,
      "public_key": $Signature.Public_key }
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**update companion key without a tz4 key**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref410descr', 'ref410')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref410schema', 'ref410')">JSON Schema</button>
    
    </div>
    <div id="ref410descr" class="ref410 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Update to a tz4 companion key without providing a tz4 key</p><p><i>Id</i> : proto.alpha.validate.operation.update_companion_key_not_tz4<br/><i>Category</i> : temporary</p>
      </div><div id="ref410schema" class="ref410 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* update companion key without a tz4 key
         Update to a tz4 companion key without providing a tz4 key */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.update_companion_key_not_tz4",
      "source": $Signature.Public_key_hash,
      "public_key": $Signature.Public_key }
    $Signature.Public_key:
      /* A Ed25519, Secp256k1, or P256 public key (Base58Check-encoded) */
      $unistring
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong voting period index**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref411descr', 'ref411')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref411schema', 'ref411')">JSON Schema</button>
    
    </div>
    <div id="ref411descr" class="ref411 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The voting operation contains a voting period index different from the current one.</p><p><i>Id</i> : proto.alpha.validate.operation.wrong_voting_period_index<br/><i>Category</i> : temporary</p>
      </div><div id="ref411schema" class="ref411 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong voting period index
         The voting operation contains a voting period index different from
         the current one. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.wrong_voting_period_index",
      "current_index": integer ∈ [-2^31-1, 2^31],
      "provided_index": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Wrong voting period kind**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref412descr', 'ref412')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref412schema', 'ref412')">JSON Schema</button>
    
    </div>
    <div id="ref412descr" class="ref412 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The voting operation is incompatible the current voting period kind.</p><p><i>Id</i> : proto.alpha.validate.operation.wrong_voting_period_kind<br/><i>Category</i> : temporary</p>
      </div><div id="ref412schema" class="ref412 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong voting period kind
         The voting operation is incompatible the current voting period kind. */
      "kind": "temporary",
      "id": "proto.alpha.validate.operation.wrong_voting_period_kind",
      "current":
        "proposal"
        || "exploration"
        || "cooldown"
        || "promotion"
        || "adoption",
      "expected":
        [ "proposal"
          || "exploration"
          || "cooldown"
          || "promotion"
          || "adoption" ... ] }</pre>
    </div>



**ZK rollups are disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref413descr', 'ref413')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref413schema', 'ref413')">JSON Schema</button>
    
    </div>
    <div id="ref413descr" class="ref413 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>ZK rollups will be enabled in a future proposal.</p><p><i>Id</i> : proto.alpha.validate.operation.zk_rollup_disabled<br/><i>Category</i> : temporary</p>
      </div><div id="ref413schema" class="ref413 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* ZK rollups are disabled
         ZK rollups will be enabled in a future proposal. */
      "kind": "permanent",
      "id": "proto.alpha.validate.operation.zk_rollup_disabled",
      ... }</pre>
    </div>



**Preattestation round too high**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref414descr', 'ref414')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref414schema', 'ref414')">JSON Schema</button>
    
    </div>
    <div id="ref414descr" class="ref414 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Preattestation round too high.</p><p><i>Id</i> : proto.alpha.validate.preattestation_round_too_high<br/><i>Category</i> : temporary</p>
      </div><div id="ref414schema" class="ref414 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Preattestation round too high
         Preattestation round too high. */
      "kind": "permanent",
      "id": "proto.alpha.validate.preattestation_round_too_high",
      "block_round": integer ∈ [-2^31-1, 2^31],
      "provided": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Public key aggregation failure**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref415descr', 'ref415')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref415schema', 'ref415')">JSON Schema</button>
    
    </div>
    <div id="ref415descr" class="ref415 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Public key aggregation failed</p><p><i>Id</i> : proto.alpha.validate.public_key_aggregation_failure<br/><i>Category</i> : temporary</p>
      </div><div id="ref415schema" class="ref415 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Public key aggregation failure
         Public key aggregation failed */
      "kind": "permanent",
      "id": "proto.alpha.validate.public_key_aggregation_failure" }</pre>
    </div>



**Temporarily forbidden delegate**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref416descr', 'ref416')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref416schema', 'ref416')">JSON Schema</button>
    
    </div>
    <div id="ref416descr" class="ref416 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The delegate has committed too many misbehaviours.</p><p><i>Id</i> : proto.alpha.validate.temporarily_forbidden_delegate<br/><i>Category</i> : temporary</p>
      </div><div id="ref416schema" class="ref416 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Temporarily forbidden delegate
         The delegate has committed too many misbehaviours. */
      "kind": "permanent",
      "id": "proto.alpha.validate.temporarily_forbidden_delegate",
      "delegate": $Signature.Public_key_hash }
    $Signature.Public_key_hash:
      /* A Ed25519, Secp256k1, P256, or BLS public key hash
         (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unaggregated eligible attestation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref417descr', 'ref417')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref417schema', 'ref417')">JSON Schema</button>
    
    </div>
    <div id="ref417descr" class="ref417 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An eligible attestation was found unaggregated</p><p><i>Id</i> : proto.alpha.validate.unaggregated_eligible_attestation<br/><i>Category</i> : temporary</p>
      </div><div id="ref417schema" class="ref417 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unaggregated eligible attestation
         An eligible attestation was found unaggregated */
      "kind": "permanent",
      "id": "proto.alpha.validate.unaggregated_eligible_attestation",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "hash": $Operation_hash }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected attestation in block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref418descr', 'ref418')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref418schema', 'ref418')">JSON Schema</button>
    
    </div>
    <div id="ref418descr" class="ref418 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected attestation in block.</p><p><i>Id</i> : proto.alpha.validate.unexpected_attestation_in_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref418schema" class="ref418 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected attestation in block
         Unexpected attestation in block. */
      "kind": "permanent",
      "id": "proto.alpha.validate.unexpected_attestation_in_block" }</pre>
    </div>



**Unexpected preattestation in block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref419descr', 'ref419')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref419schema', 'ref419')">JSON Schema</button>
    
    </div>
    <div id="ref419descr" class="ref419 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected preattestation in block.</p><p><i>Id</i> : proto.alpha.validate.unexpected_preattestation_in_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref419schema" class="ref419 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected preattestation in block
         Unexpected preattestation in block. */
      "kind": "permanent",
      "id": "proto.alpha.validate.unexpected_preattestation_in_block" }</pre>
    </div>



**Wrong payload hash for consensus operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref420descr', 'ref420')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref420schema', 'ref420')">JSON Schema</button>
    
    </div>
    <div id="ref420descr" class="ref420 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Wrong payload hash for consensus operation.</p><p><i>Id</i> : proto.alpha.validate.wrong_payload_hash_for_consensus_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref420schema" class="ref420 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong payload hash for consensus operation
         Wrong payload hash for consensus operation. */
      "kind": "branch",
      "id": "proto.alpha.validate.wrong_payload_hash_for_consensus_operation",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate",
      "expected": $value_hash,
      "provided": $value_hash }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }
    $value_hash:
      /* Hash of a consensus value (Base58Check-encoded) */
      $unistring</pre>
    </div>



**Wrong slot for consensus operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref421descr', 'ref421')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref421schema', 'ref421')">JSON Schema</button>
    
    </div>
    <div id="ref421descr" class="ref421 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Wrong slot used for a preattestation or attestation.</p><p><i>Id</i> : proto.alpha.validate.wrong_slot_for_consensus_operation<br/><i>Category</i> : temporary</p>
      </div><div id="ref421schema" class="ref421 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong slot for consensus operation
         Wrong slot used for a preattestation or attestation. */
      "kind": "permanent",
      "id": "proto.alpha.validate.wrong_slot_for_consensus_operation",
      "kind":
        "Attestation"
        | "Preattestation"
        | "Preattestations_aggregate"
        | "Attestations_aggregate" }</pre>
    </div>



**Previously revealed VDF**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref422descr', 'ref422')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref422schema', 'ref422')">JSON Schema</button>
    
    </div>
    <div id="ref422descr" class="ref422 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Duplicate VDF revelation in cycle</p><p><i>Id</i> : proto.alpha.vdf.previously_revealed<br/><i>Category</i> : temporary</p>
      </div><div id="ref422schema" class="ref422 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Previously revealed VDF
         Duplicate VDF revelation in cycle */
      "kind": "branch",
      "id": "proto.alpha.vdf.previously_revealed",
      ... }</pre>
    </div>



**Too early VDF revelation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref423descr', 'ref423')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref423schema', 'ref423')">JSON Schema</button>
    
    </div>
    <div id="ref423descr" class="ref423 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>VDF revelation before the end of the nonce revelation period</p><p><i>Id</i> : proto.alpha.vdf.too_early_revelation<br/><i>Category</i> : temporary</p>
      </div><div id="ref423schema" class="ref423 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too early VDF revelation
         VDF revelation before the end of the nonce revelation period */
      "kind": "temporary",
      "id": "proto.alpha.vdf.too_early_revelation",
      ... }</pre>
    </div>



**Unverified VDF**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref424descr', 'ref424')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref424schema', 'ref424')">JSON Schema</button>
    
    </div>
    <div id="ref424descr" class="ref424 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>VDF verification failed</p><p><i>Id</i> : proto.alpha.vdf.unverified_result<br/><i>Category</i> : temporary</p>
      </div><div id="ref424schema" class="ref424 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unverified VDF
         VDF verification failed */
      "kind": "branch",
      "id": "proto.alpha.vdf.unverified_result",
      ... }</pre>
    </div>



**View callback origination failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref425descr', 'ref425')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref425schema', 'ref425')">JSON Schema</button>
    
    </div>
    <div id="ref425descr" class="ref425 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>View callback origination failed</p><p><i>Id</i> : proto.alpha.viewCallbackOriginationFailed<br/><i>Category</i> : temporary</p>
      </div><div id="ref425schema" class="ref425 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* View callback origination failed
         View callback origination failed */
      "kind": "permanent",
      "id": "proto.alpha.viewCallbackOriginationFailed",
      ... }</pre>
    </div>



**A view never returned a transaction to the given callback contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref426descr', 'ref426')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref426schema', 'ref426')">JSON Schema</button>
    
    </div>
    <div id="ref426descr" class="ref426 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A view never initiated a transaction to the given callback contract.</p><p><i>Id</i> : proto.alpha.viewNeverReturns<br/><i>Category</i> : temporary</p>
      </div><div id="ref426schema" class="ref426 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* A view never returned a transaction to the given callback contract
         A view never initiated a transaction to the given callback contract. */
      "kind": "permanent",
      "id": "proto.alpha.viewNeverReturns",
      "entrypoint": $unistring,
      "callback": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**A view could not be found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref427descr', 'ref427')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref427schema', 'ref427')">JSON Schema</button>
    
    </div>
    <div id="ref427descr" class="ref427 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The contract does not have a view of the given name.</p><p><i>Id</i> : proto.alpha.viewNotFound<br/><i>Category</i> : temporary</p>
      </div><div id="ref427schema" class="ref427 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* A view could not be found
         The contract does not have a view of the given name. */
      "kind": "permanent",
      "id": "proto.alpha.viewNotFound",
      "contract": $alpha.contract_id.originated,
      "view": $unistring }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**A view returned an unexpected list of operations**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref428descr', 'ref428')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref428schema', 'ref428')">JSON Schema</button>
    
    </div>
    <div id="ref428descr" class="ref428 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A view initiated a list of operations while the TZIP-4 standard expects only a transaction to the given callback contract.</p><p><i>Id</i> : proto.alpha.viewUnexpectedReturn<br/><i>Category</i> : temporary</p>
      </div><div id="ref428schema" class="ref428 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* A view returned an unexpected list of operations
         A view initiated a list of operations while the TZIP-4 standard
         expects only a transaction to the given callback contract. */
      "kind": "permanent",
      "id": "proto.alpha.viewUnexpectedReturn",
      "entrypoint": $unistring,
      "callback": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Viewed contract has no script**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref429descr', 'ref429')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref429schema', 'ref429')">JSON Schema</button>
    
    </div>
    <div id="ref429descr" class="ref429 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A view was called on a contract with no script.</p><p><i>Id</i> : proto.alpha.viewedContractHasNoScript<br/><i>Category</i> : temporary</p>
      </div><div id="ref429schema" class="ref429 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Viewed contract has no script
         A view was called on a contract with no script. */
      "kind": "permanent",
      "id": "proto.alpha.viewedContractHasNoScript",
      ... }</pre>
    </div>



**A VIEW instruction returned an unexpected value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref430descr', 'ref430')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref430schema', 'ref430')">JSON Schema</button>
    
    </div>
    <div id="ref430descr" class="ref430 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A VIEW instruction returned an unexpected value.</p><p><i>Id</i> : proto.alpha.viewerUnexpectedStorage<br/><i>Category</i> : temporary</p>
      </div><div id="ref430schema" class="ref430 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* A VIEW instruction returned an unexpected value
         A VIEW instruction returned an unexpected value. */
      "kind": "permanent",
      "id": "proto.alpha.viewerUnexpectedStorage",
      ... }</pre>
    </div>



**Wrong fitness**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref431descr', 'ref431')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref431schema', 'ref431')">JSON Schema</button>
    
    </div>
    <div id="ref431descr" class="ref431 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Wrong fitness.</p><p><i>Id</i> : proto.alpha.wrong_fitness<br/><i>Category</i> : temporary</p>
      </div><div id="ref431schema" class="ref431 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong fitness
         Wrong fitness. */
      "kind": "permanent",
      "id": "proto.alpha.wrong_fitness" }</pre>
    </div>



**ZK Rollup does not exist**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref432descr', 'ref432')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref432schema', 'ref432')">JSON Schema</button>
    
    </div>
    <div id="ref432descr" class="ref432 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted to use a ZK rollup that has not been originated.</p><p><i>Id</i> : proto.alpha.zk_rollup_does_not_exist<br/><i>Category</i> : temporary</p>
      </div><div id="ref432schema" class="ref432 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* ZK Rollup does not exist
         Attempted to use a ZK rollup that has not been originated. */
      "kind": "temporary",
      "id": "proto.alpha.zk_rollup_does_not_exist",
      "rollup": $Zk_rollup_hash }
    $Zk_rollup_hash:
      /* A zk rollup address (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid op code in append**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref433descr', 'ref433')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref433schema', 'ref433')">JSON Schema</button>
    
    </div>
    <div id="ref433descr" class="ref433 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid op code in append</p><p><i>Id</i> : proto.alpha.zk_rollup_invalid_op code<br/><i>Category</i> : temporary</p>
      </div><div id="ref433schema" class="ref433 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid op code in append
         Invalid op code in append */
      "kind": "permanent",
      "id": "proto.alpha.zk_rollup_invalid_op code",
      "op_code": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Negative length for pending list prefix**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref434descr', 'ref434')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref434schema', 'ref434')">JSON Schema</button>
    
    </div>
    <div id="ref434descr" class="ref434 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Negative length for pending list prefix</p><p><i>Id</i> : proto.alpha.zk_rollup_negative_length<br/><i>Category</i> : temporary</p>
      </div><div id="ref434schema" class="ref434 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Negative length for pending list prefix
         Negative length for pending list prefix */
      "kind": "permanent",
      "id": "proto.alpha.zk_rollup_negative_length",
      ... }</pre>
    </div>



**Pending list is too short**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref435descr', 'ref435')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref435schema', 'ref435')">JSON Schema</button>
    
    </div>
    <div id="ref435descr" class="ref435 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Pending list is too short</p><p><i>Id</i> : proto.alpha.zk_rollup_pending_list_too_short<br/><i>Category</i> : temporary</p>
      </div><div id="ref435schema" class="ref435 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Pending list is too short
         Pending list is too short */
      "kind": "temporary",
      "id": "proto.alpha.zk_rollup_pending_list_too_short",
      ... }</pre>
    </div>



**The payload of the deposited ticket exceeded the size limit**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref436descr', 'ref436')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref436schema', 'ref436')">JSON Schema</button>
    
    </div>
    <div id="ref436descr" class="ref436 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The payload of the deposited ticket exceeded the size limit</p><p><i>Id</i> : proto.alpha.zk_rollup_ticket_payload_size_limit_exceeded<br/><i>Category</i> : temporary</p>
      </div><div id="ref436schema" class="ref436 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The payload of the deposited ticket exceeded the size limit
         The payload of the deposited ticket exceeded the size limit */
      "kind": "permanent",
      "id": "proto.alpha.zk_rollup_ticket_payload_size_limit_exceeded",
      "payload_size": $positive_bignum,
      "limit": integer ∈ [-2^30, 2^30] }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



Shell
*****

**Invalid block locator**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref437descr', 'ref437')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref437schema', 'ref437')">JSON Schema</button>
    
    </div>
    <div id="ref437descr" class="ref437 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Block locator is invalid.</p><p><i>Id</i> : node.bootstrap_pipeline.invalid_locator<br/><i>Category</i> : permanent</p>
      </div><div id="ref437schema" class="ref437 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid block locator
         Block locator is invalid. */
      "kind": "permanent",
      "id": "node.bootstrap_pipeline.invalid_locator",
      "id": $Crypto_box.Public_key_hash,
      "locator": $block_locator }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
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
    $block_locator:
      /* A sparse block locator à la Bitcoin */
      { "current_head": $block_header,
        "history": [ $block_hash ... ] }
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte
         sequences. They are compared as follows: shortest lists are smaller;
         lists of the same length are compared according to the
         lexicographical order. */
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



**Too short locator**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref438descr', 'ref438')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref438schema', 'ref438')">JSON Schema</button>
    
    </div>
    <div id="ref438descr" class="ref438 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Block locator is too short.</p><p><i>Id</i> : node.bootstrap_pipeline.too_short_locator<br/><i>Category</i> : permanent</p>
      </div><div id="ref438schema" class="ref438 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too short locator
         Block locator is too short. */
      "kind": "permanent",
      "id": "node.bootstrap_pipeline.too_short_locator",
      "id": $Crypto_box.Public_key_hash,
      "locator": $block_locator }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
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
    $block_locator:
      /* A sparse block locator à la Bitcoin */
      { "current_head": $block_header,
        "history": [ $block_hash ... ] }
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte
         sequences. They are compared as follows: shortest lists are smaller;
         lists of the same length are compared according to the
         lexicographical order. */
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



**No trusted setup found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref439descr', 'ref439')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref439schema', 'ref439')">JSON Schema</button>
    
    </div>
    <div id="ref439descr" class="ref439 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>No trusted setup found in the explored paths</p><p><i>Id</i> : node.config.trusted_setup_not_found<br/><i>Category</i> : permanent</p>
      </div><div id="ref439schema" class="ref439 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* No trusted setup found
         No trusted setup found in the explored paths */
      "kind": "permanent",
      "id": "node.config.trusted_setup_not_found",
      "paths": [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Operation fees are too low to be considered in full mempool**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref440descr', 'ref440')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref440schema', 'ref440')">JSON Schema</button>
    
    </div>
    <div id="ref440descr" class="ref440 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Operation fees are too low to be considered in full mempool</p><p><i>Id</i> : node.mempool.rejected_by_full_mempool<br/><i>Category</i> : temporary</p>
      </div><div id="ref440schema" class="ref440 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation fees are too low to be considered in full mempool
         Operation fees are too low to be considered in full mempool */
      "kind": "temporary",
      "id": "node.mempool.rejected_by_full_mempool",
      "operation_hash": $Operation_hash,
      "needed_fee_in_mutez"?: $int64 }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Operation removed from full mempool because its fees are too low**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref441descr', 'ref441')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref441schema', 'ref441')">JSON Schema</button>
    
    </div>
    <div id="ref441descr" class="ref441 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Operation removed from full mempool because its fees are too low</p><p><i>Id</i> : node.mempool.removed_from_full_mempool<br/><i>Category</i> : temporary</p>
      </div><div id="ref441schema" class="ref441 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation removed from full mempool because its fees are too low
         Operation removed from full mempool because its fees are too low */
      "kind": "temporary",
      "id": "node.mempool.removed_from_full_mempool",
      "operation_hash": $Operation_hash }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Peer discovery disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref442descr', 'ref442')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref442schema', 'ref442')">JSON Schema</button>
    
    </div>
    <div id="ref442descr" class="ref442 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The peer discovery is disabled, sending advertise messages is forbidden.</p><p><i>Id</i> : node.p2p_conn.peer_discovery_disabled<br/><i>Category</i> : permanent</p>
      </div><div id="ref442schema" class="ref442 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Peer discovery disabled
         The peer discovery is disabled, sending advertise messages is
         forbidden. */
      "kind": "permanent",
      "id": "node.p2p_conn.peer_discovery_disabled" }</pre>
    </div>



**Unexpected peer identity**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref443descr', 'ref443')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref443schema', 'ref443')">JSON Schema</button>
    
    </div>
    <div id="ref443descr" class="ref443 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Peer announced an identity which does not match the one specified on the command-line.</p><p><i>Id</i> : node.p2p_connect_handler.identity_check_failure<br/><i>Category</i> : permanent</p>
      </div><div id="ref443schema" class="ref443 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected peer identity
         Peer announced an identity which does not match the one specified on
         the command-line. */
      "kind": "permanent",
      "id": "node.p2p_connect_handler.identity_check_failure",
      "point": $p2p_point.id,
      "expected_peer_id": $Crypto_box.Public_key_hash,
      "received_peer_id": $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $p2p_point.id:
      /* Identifier for a peer point */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Connection closed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref444descr', 'ref444')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref444schema', 'ref444')">JSON Schema</button>
    
    </div>
    <div id="ref444descr" class="ref444 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>IO error: connection with a peer is closed.</p><p><i>Id</i> : node.p2p_io_scheduler.connection_closed<br/><i>Category</i> : permanent</p>
      </div><div id="ref444schema" class="ref444 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Connection closed
         IO error: connection with a peer is closed. */
      "kind": "permanent",
      "id": "node.p2p_io_scheduler.connection_closed" }</pre>
    </div>



**Connection error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref445descr', 'ref445')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref445schema', 'ref445')">JSON Schema</button>
    
    </div>
    <div id="ref445descr" class="ref445 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>IO error: connection error while reading from a peer.</p><p><i>Id</i> : node.p2p_io_scheduler.connection_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref445schema" class="ref445 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Connection error
         IO error: connection error while reading from a peer. */
      "kind": "permanent",
      "id": "node.p2p_io_scheduler.connection_error" }</pre>
    </div>



**Maintenance disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref446descr', 'ref446')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref446schema', 'ref446')">JSON Schema</button>
    
    </div>
    <div id="ref446descr" class="ref446 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to trigger the maintenance failed as the maintenance is disabled.</p><p><i>Id</i> : node.p2p_maintenance.disabled<br/><i>Category</i> : permanent</p>
      </div><div id="ref446schema" class="ref446 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Maintenance disabled
         Attempt to trigger the maintenance failed as the maintenance is
         disabled. */
      "kind": "permanent",
      "id": "node.p2p_maintenance.disabled" }</pre>
    </div>



**Connected**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref447descr', 'ref447')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref447schema', 'ref447')">JSON Schema</button>
    
    </div>
    <div id="ref447descr" class="ref447 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Fail to connect with a peer: a connection is already established.</p><p><i>Id</i> : node.p2p_pool.connected<br/><i>Category</i> : permanent</p>
      </div><div id="ref447schema" class="ref447 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Connected
         Fail to connect with a peer: a connection is already established. */
      "kind": "permanent",
      "id": "node.p2p_pool.connected" }</pre>
    </div>



**TCP connection failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref448descr', 'ref448')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref448schema', 'ref448')">JSON Schema</button>
    
    </div>
    <div id="ref448descr" class="ref448 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>TCP connection failed (refused or no route to host).</p><p><i>Id</i> : node.p2p_pool.connection_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref448schema" class="ref448 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* TCP connection failed
         TCP connection failed (refused or no route to host). */
      "kind": "permanent",
      "id": "node.p2p_pool.connection_failed" }</pre>
    </div>



**P2P layer disabled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref449descr', 'ref449')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref449schema', 'ref449')">JSON Schema</button>
    
    </div>
    <div id="ref449descr" class="ref449 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The P2P layer on this node is not active.</p><p><i>Id</i> : node.p2p_pool.disabled<br/><i>Category</i> : permanent</p>
      </div><div id="ref449schema" class="ref449 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* P2P layer disabled
         The P2P layer on this node is not active. */
      "kind": "permanent",
      "id": "node.p2p_pool.disabled" }</pre>
    </div>



**Peer Banned**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref450descr', 'ref450')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref450schema', 'ref450')">JSON Schema</button>
    
    </div>
    <div id="ref450descr" class="ref450 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The peer identity you tried to connect is banned.</p><p><i>Id</i> : node.p2p_pool.peer_banned<br/><i>Category</i> : permanent</p>
      </div><div id="ref450schema" class="ref450 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Peer Banned
         The peer identity you tried to connect is banned. */
      "kind": "permanent",
      "id": "node.p2p_pool.peer_banned",
      "peer": $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Pending connection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref451descr', 'ref451')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref451schema', 'ref451')">JSON Schema</button>
    
    </div>
    <div id="ref451descr" class="ref451 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Fail to connect with a peer: a connection is already pending.</p><p><i>Id</i> : node.p2p_pool.pending_connection<br/><i>Category</i> : permanent</p>
      </div><div id="ref451schema" class="ref451 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Pending connection
         Fail to connect with a peer: a connection is already pending. */
      "kind": "permanent",
      "id": "node.p2p_pool.pending_connection" }</pre>
    </div>



**Point Banned**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref452descr', 'ref452')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref452schema', 'ref452')">JSON Schema</button>
    
    </div>
    <div id="ref452descr" class="ref452 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The address you tried to connect is banned.</p><p><i>Id</i> : node.p2p_pool.point_banned<br/><i>Category</i> : permanent</p>
      </div><div id="ref452schema" class="ref452 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Point Banned
         The address you tried to connect is banned. */
      "kind": "permanent",
      "id": "node.p2p_pool.point_banned",
      "point": $p2p_point.id }
    $p2p_point.id:
      /* Identifier for a peer point */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Private mode**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref453descr', 'ref453')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref453schema', 'ref453')">JSON Schema</button>
    
    </div>
    <div id="ref453descr" class="ref453 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Node is in private mode.</p><p><i>Id</i> : node.p2p_pool.private_mode<br/><i>Category</i> : permanent</p>
      </div><div id="ref453schema" class="ref453 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Private mode
         Node is in private mode. */
      "kind": "permanent",
      "id": "node.p2p_pool.private_mode" }</pre>
    </div>



**Rejected peer**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref454descr', 'ref454')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref454schema', 'ref454')">JSON Schema</button>
    
    </div>
    <div id="ref454descr" class="ref454 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Connection to peer was rejected by us.</p><p><i>Id</i> : node.p2p_pool.rejected<br/><i>Category</i> : permanent</p>
      </div><div id="ref454schema" class="ref454 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Rejected peer
         Connection to peer was rejected by us. */
      "kind": "permanent",
      "id": "node.p2p_pool.rejected",
      "peer_id": $Crypto_box.Public_key_hash,
      "motive": integer ∈ [-2^15, 2^15-1] }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Too many connections**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref455descr', 'ref455')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref455schema', 'ref455')">JSON Schema</button>
    
    </div>
    <div id="ref455descr" class="ref455 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Too many connections.</p><p><i>Id</i> : node.p2p_pool.too_many_connections<br/><i>Category</i> : permanent</p>
      </div><div id="ref455schema" class="ref455 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too many connections
         Too many connections. */
      "kind": "permanent",
      "id": "node.p2p_pool.too_many_connections" }</pre>
    </div>



**Decipher error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref456descr', 'ref456')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref456schema', 'ref456')">JSON Schema</button>
    
    </div>
    <div id="ref456descr" class="ref456 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An error occurred while deciphering.</p><p><i>Id</i> : node.p2p_socket.decipher_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref456schema" class="ref456 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Decipher error
         An error occurred while deciphering. */
      "kind": "permanent",
      "id": "node.p2p_socket.decipher_error" }</pre>
    </div>



**Invalid authentication**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref457descr', 'ref457')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref457schema', 'ref457')">JSON Schema</button>
    
    </div>
    <div id="ref457descr" class="ref457 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rejected peer connection: invalid authentication.</p><p><i>Id</i> : node.p2p_socket.invalid_auth<br/><i>Category</i> : permanent</p>
      </div><div id="ref457schema" class="ref457 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid authentication
         Rejected peer connection: invalid authentication. */
      "kind": "permanent",
      "id": "node.p2p_socket.invalid_auth" }</pre>
    </div>



**Invalid chunks size**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref458descr', 'ref458')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref458schema', 'ref458')">JSON Schema</button>
    
    </div>
    <div id="ref458descr" class="ref458 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Size of chunks is not valid.</p><p><i>Id</i> : node.p2p_socket.invalid_chunks_size<br/><i>Category</i> : permanent</p>
      </div><div id="ref458schema" class="ref458 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid chunks size
         Size of chunks is not valid. */
      "kind": "permanent",
      "id": "node.p2p_socket.invalid_chunks_size",
      "value": integer ∈ [-2^30, 2^30],
      "min": integer ∈ [-2^30, 2^30],
      "max": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Invalid incoming ciphertext size**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref459descr', 'ref459')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref459schema', 'ref459')">JSON Schema</button>
    
    </div>
    <div id="ref459descr" class="ref459 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The announced size for the incoming ciphertext is invalid.</p><p><i>Id</i> : node.p2p_socket.invalid_incoming_ciphertext_size<br/><i>Category</i> : permanent</p>
      </div><div id="ref459schema" class="ref459 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid incoming ciphertext size
         The announced size for the incoming ciphertext is invalid. */
      "kind": "permanent",
      "id": "node.p2p_socket.invalid_incoming_ciphertext_size" }</pre>
    </div>



**Invalid message size**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref460descr', 'ref460')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref460schema', 'ref460')">JSON Schema</button>
    
    </div>
    <div id="ref460descr" class="ref460 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The size of the message to be written is invalid.</p><p><i>Id</i> : node.p2p_socket.invalid_message_size<br/><i>Category</i> : permanent</p>
      </div><div id="ref460schema" class="ref460 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid message size
         The size of the message to be written is invalid. */
      "kind": "permanent",
      "id": "node.p2p_socket.invalid_message_size" }</pre>
    </div>



**Myself**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref461descr', 'ref461')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref461schema', 'ref461')">JSON Schema</button>
    
    </div>
    <div id="ref461descr" class="ref461 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Remote peer is actually yourself.</p><p><i>Id</i> : node.p2p_socket.myself<br/><i>Category</i> : permanent</p>
      </div><div id="ref461schema" class="ref461 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Myself
         Remote peer is actually yourself. */
      "kind": "permanent",
      "id": "node.p2p_socket.myself",
      "connection_id": $p2p_connection.id }
    $p2p_address:
      /* An address for locating peers. */
      $unistring
    $p2p_connection.id:
      /* The identifier for a p2p connection. It includes an address and a
         port number. */
      { "addr": $p2p_address,
        "port"?: integer ∈ [0, 2^16-1] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Not enough proof of work**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref462descr', 'ref462')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref462schema', 'ref462')">JSON Schema</button>
    
    </div>
    <div id="ref462descr" class="ref462 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Remote peer cannot be authenticated: not enough proof of work.</p><p><i>Id</i> : node.p2p_socket.not_enough_proof_of_work<br/><i>Category</i> : permanent</p>
      </div><div id="ref462schema" class="ref462 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough proof of work
         Remote peer cannot be authenticated: not enough proof of work. */
      "kind": "permanent",
      "id": "node.p2p_socket.not_enough_proof_of_work",
      "peer_id": $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Rejected socket connection by Nack**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref463descr', 'ref463')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref463schema', 'ref463')">JSON Schema</button>
    
    </div>
    <div id="ref463descr" class="ref463 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rejected peer connection: The peer rejected the socket connection by Nack with a list of alternative peers.</p><p><i>Id</i> : node.p2p_socket.rejected_by_nack<br/><i>Category</i> : permanent</p>
      </div><div id="ref463schema" class="ref463 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Rejected socket connection by Nack
         Rejected peer connection: The peer rejected the socket connection by
         Nack with a list of alternative peers. */
      "kind": "permanent",
      "id": "node.p2p_socket.rejected_by_nack",
      "motive": integer ∈ [-2^15, 2^15-1],
      "alternative_points"?: [ $p2p_point.id ... ] }
    $p2p_point.id:
      /* Identifier for a peer point */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Rejected socket connection - no common network protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref464descr', 'ref464')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref464schema', 'ref464')">JSON Schema</button>
    
    </div>
    <div id="ref464descr" class="ref464 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rejected peer connection: rejected socket connection as we have no common network protocol with the peer.</p><p><i>Id</i> : node.p2p_socket.rejected_no_common_protocol<br/><i>Category</i> : permanent</p>
      </div><div id="ref464schema" class="ref464 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Rejected socket connection - no common network protocol
         Rejected peer connection: rejected socket connection as we have no
         common network protocol with the peer. */
      "kind": "permanent",
      "id": "node.p2p_socket.rejected_no_common_protocol",
      "announced_version": $network_version }
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



**Rejected socket connection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref465descr', 'ref465')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref465schema', 'ref465')">JSON Schema</button>
    
    </div>
    <div id="ref465descr" class="ref465 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rejected peer connection: rejected socket connection.</p><p><i>Id</i> : node.p2p_socket.rejected_socket_connection<br/><i>Category</i> : permanent</p>
      </div><div id="ref465schema" class="ref465 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Rejected socket connection
         Rejected peer connection: rejected socket connection. */
      "kind": "permanent",
      "id": "node.p2p_socket.rejected_socket_connection" }</pre>
    </div>



**Rejecting socket connection**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref466descr', 'ref466')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref466schema', 'ref466')">JSON Schema</button>
    
    </div>
    <div id="ref466descr" class="ref466 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Rejecting peer connection with motive.</p><p><i>Id</i> : node.p2p_socket.rejecting_incoming<br/><i>Category</i> : permanent</p>
      </div><div id="ref466schema" class="ref466 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Rejecting socket connection
         Rejecting peer connection with motive. */
      "kind": "permanent",
      "id": "node.p2p_socket.rejecting_incoming",
      "motive": integer ∈ [-2^15, 2^15-1] }</pre>
    </div>



**Known invalid**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref467descr', 'ref467')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref467schema', 'ref467')">JSON Schema</button>
    
    </div>
    <div id="ref467descr" class="ref467 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Known invalid block found in the peer's chain</p><p><i>Id</i> : node.peer_validator.known_invalid<br/><i>Category</i> : permanent</p>
      </div><div id="ref467schema" class="ref467 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Known invalid
         Known invalid block found in the peer's chain */
      "kind": "permanent",
      "id": "node.peer_validator.known_invalid" }</pre>
    </div>



**Unknown ancestor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref468descr', 'ref468')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref468schema', 'ref468')">JSON Schema</button>
    
    </div>
    <div id="ref468descr" class="ref468 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unknown ancestor block found in the peer's chain</p><p><i>Id</i> : node.peer_validator.unknown_ancestor<br/><i>Category</i> : permanent</p>
      </div><div id="ref468schema" class="ref468 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown ancestor
         Unknown ancestor block found in the peer's chain */
      "kind": "permanent",
      "id": "node.peer_validator.unknown_ancestor" }</pre>
    </div>



**Future block header**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref469descr', 'ref469')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref469schema', 'ref469')">JSON Schema</button>
    
    </div>
    <div id="ref469descr" class="ref469 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block was annotated with a time too far in the future.</p><p><i>Id</i> : node.prevalidation.future_block_header<br/><i>Category</i> : temporary</p>
      </div><div id="ref469schema" class="ref469 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Future block header
         The block was annotated with a time too far in the future. */
      "kind": "temporary",
      "id": "node.prevalidation.future_block_header",
      "block": $block_hash,
      "block_time": $timestamp.protocol,
      "time": $timestamp.system }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $timestamp.protocol:
      /* A timestamp as seen by the protocol: second-level precision, epoch
         based. */
      $unistring
    $timestamp.rfc:
      /* RFC 3339 formatted timestamp
         A date in RFC 3339 notation. */
      $unistring
    $timestamp.system:
      /* A timestamp as seen by the underlying, local computer:
         subsecond-level precision, epoch or rfc3339 based. */
      $timestamp.rfc /* RFC encoding */ || $int64 /* Second since epoch */
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Oversized operation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref470descr', 'ref470')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref470schema', 'ref470')">JSON Schema</button>
    
    </div>
    <div id="ref470descr" class="ref470 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation size is bigger than allowed.</p><p><i>Id</i> : node.prevalidation.oversized_operation<br/><i>Category</i> : permanent</p>
      </div><div id="ref470schema" class="ref470 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Oversized operation
         The operation size is bigger than allowed. */
      "kind": "permanent",
      "id": "node.prevalidation.oversized_operation",
      "size": integer ∈ [-2^30, 2^30],
      "max_size": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Parsing error in prevalidation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref471descr', 'ref471')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref471schema', 'ref471')">JSON Schema</button>
    
    </div>
    <div id="ref471descr" class="ref471 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Raised when an operation has not been parsed correctly during prevalidation.</p><p><i>Id</i> : node.prevalidation.parse_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref471schema" class="ref471 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Parsing error in prevalidation
         Raised when an operation has not been parsed correctly during
         prevalidation. */
      "kind": "permanent",
      "id": "node.prevalidation.parse_error" }</pre>
    </div>



**Too many pending operations in prevalidation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref472descr', 'ref472')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref472schema', 'ref472')">JSON Schema</button>
    
    </div>
    <div id="ref472descr" class="ref472 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The prevalidation context is full.</p><p><i>Id</i> : node.prevalidation.too_many_operations<br/><i>Category</i> : temporary</p>
      </div><div id="ref472schema" class="ref472 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Too many pending operations in prevalidation
         The prevalidation context is full. */
      "kind": "temporary",
      "id": "node.prevalidation.too_many_operations" }</pre>
    </div>



**Cannot load protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref473descr', 'ref473')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref473schema', 'ref473')">JSON Schema</button>
    
    </div>
    <div id="ref473descr" class="ref473 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot load protocol from disk</p><p><i>Id</i> : node.protocol_validator.cannot_load_protocol<br/><i>Category</i> : permanent</p>
      </div><div id="ref473schema" class="ref473 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot load protocol
         Cannot load protocol from disk */
      "kind": "permanent",
      "id": "node.protocol_validator.cannot_load_protocol",
      "protocol": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref474descr', 'ref474')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref474schema', 'ref474')">JSON Schema</button>
    
    </div>
    <div id="ref474descr" class="ref474 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid protocol.</p><p><i>Id</i> : node.protocol_validator.invalid_protocol<br/><i>Category</i> : permanent</p>
      </div><div id="ref474schema" class="ref474 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Invalid protocol
       Invalid protocol. */
    { /* Compilation failed */
      "kind": "permanent",
      "id": "node.protocol_validator.invalid_protocol",
      "invalid_protocol": $Protocol_hash,
      "error": "compilation_failed" }
    || { /* Dynlinking failed */
         "kind": "permanent",
         "id": "node.protocol_validator.invalid_protocol",
         "invalid_protocol": $Protocol_hash,
         "error": "dynlinking_failed" }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad data directory**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref475descr', 'ref475')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref475schema', 'ref475')">JSON Schema</button>
    
    </div>
    <div id="ref475descr" class="ref475 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The data directory could not be read. This could be because it was generated with an old version of the octez-node program. Deleting and regenerating this directory may fix the problem.</p><p><i>Id</i> : node.state.bad_data_dir<br/><i>Category</i> : permanent</p>
      </div><div id="ref475schema" class="ref475 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad data directory
         The data directory could not be read. This could be because it was
         generated with an old version of the octez-node program. Deleting
         and regenerating this directory may fix the problem. */
      "kind": "permanent",
      "id": "node.state.bad_data_dir" }</pre>
    </div>



**Inconsistent commit hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref476descr', 'ref476')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref476schema', 'ref476')">JSON Schema</button>
    
    </div>
    <div id="ref476descr" class="ref476 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When committing the context of a block, the announced context hash was not the one computed at commit time.</p><p><i>Id</i> : node.state.block.inconsistent_context_hash<br/><i>Category</i> : permanent</p>
      </div><div id="ref476schema" class="ref476 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent commit hash
         When committing the context of a block, the announced context hash
         was not the one computed at commit time. */
      "kind": "permanent",
      "id": "node.state.block.inconsistent_context_hash",
      "wrong_context_hash": $Context_hash,
      "expected_context_hash": $Context_hash }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing block metadata hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref477descr', 'ref477')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref477schema', 'ref477')">JSON Schema</button>
    
    </div>
    <div id="ref477descr" class="ref477 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A block was expected to commit to a block metadata hash, however none was given.</p><p><i>Id</i> : node.state.block.missing_block_metadata_hash<br/><i>Category</i> : permanent</p>
      </div><div id="ref477schema" class="ref477 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing block metadata hash
         A block was expected to commit to a block metadata hash, however
         none was given. */
      "kind": "permanent",
      "id": "node.state.block.missing_block_metadata_hash",
      "block": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing operation metadata hashes**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref478descr', 'ref478')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref478schema', 'ref478')">JSON Schema</button>
    
    </div>
    <div id="ref478descr" class="ref478 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A block was expected to commit to operation metadata hashes, however none were given.</p><p><i>Id</i> : node.state.block.missing_operation_metadata_hashes<br/><i>Category</i> : permanent</p>
      </div><div id="ref478schema" class="ref478 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing operation metadata hashes
         A block was expected to commit to operation metadata hashes, however
         none were given. */
      "kind": "permanent",
      "id": "node.state.block.missing_operation_metadata_hashes",
      "block": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Block not invalid**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref479descr', 'ref479')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref479schema', 'ref479')">JSON Schema</button>
    
    </div>
    <div id="ref479descr" class="ref479 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The invalid block to be unmarked was not actually invalid.</p><p><i>Id</i> : node.state.block_not_invalid<br/><i>Category</i> : permanent</p>
      </div><div id="ref479schema" class="ref479 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Block not invalid
         The invalid block to be unmarked was not actually invalid. */
      "kind": "permanent",
      "id": "node.state.block_not_invalid",
      "block": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unknown chain**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref480descr', 'ref480')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref480schema', 'ref480')">JSON Schema</button>
    
    </div>
    <div id="ref480descr" class="ref480 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The chain identifier could not be found in the chain identifiers table.</p><p><i>Id</i> : node.state.unknown_chain<br/><i>Category</i> : permanent</p>
      </div><div id="ref480schema" class="ref480 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown chain
         The chain identifier could not be found in the chain identifiers
         table. */
      "kind": "permanent",
      "id": "node.state.unknown_chain",
      "chain": $Chain_id }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Block incompatible with the current checkpoint.**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref481descr', 'ref481')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref481schema', 'ref481')">JSON Schema</button>
    
    </div>
    <div id="ref481descr" class="ref481 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The block belongs to a branch that is not compatible with the current checkpoint.</p><p><i>Id</i> : node.validator.checkpoint_error<br/><i>Category</i> : branch</p>
      </div><div id="ref481schema" class="ref481 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Block incompatible with the current checkpoint.
         The block belongs to a branch that is not compatible with the
         current checkpoint. */
      "kind": "branch",
      "id": "node.validator.checkpoint_error",
      "block": $block_hash,
      "peer"?: $Crypto_box.Public_key_hash }
    $Crypto_box.Public_key_hash:
      /* A Cryptobox public key ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inactive chain**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref482descr', 'ref482')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref482schema', 'ref482')">JSON Schema</button>
    
    </div>
    <div id="ref482descr" class="ref482 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempted validation of a block from an inactive chain.</p><p><i>Id</i> : node.validator.inactive_chain<br/><i>Category</i> : branch</p>
      </div><div id="ref482schema" class="ref482 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inactive chain
         Attempted validation of a block from an inactive chain. */
      "kind": "branch",
      "id": "node.validator.inactive_chain",
      "inactive_chain": $Chain_id }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot process request while shutting down**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref483descr', 'ref483')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref483schema', 'ref483')">JSON Schema</button>
    
    </div>
    <div id="ref483descr" class="ref483 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot process request while the node is shutting down.</p><p><i>Id</i> : validator.cannot_process_request_while_shutting_down<br/><i>Category</i> : temporary</p>
      </div><div id="ref483schema" class="ref483 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot process request while shutting down
         Cannot process request while the node is shutting down. */
      "kind": "temporary",
      "id": "validator.cannot_process_request_while_shutting_down" }</pre>
    </div>



**Invalid merkle tree**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref484descr', 'ref484')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref484schema', 'ref484')">JSON Schema</button>
    
    </div>
    <div id="ref484descr" class="ref484 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided list of operations is inconsistent with the block header.</p><p><i>Id</i> : validator.inconsistent_operations_hash<br/><i>Category</i> : temporary</p>
      </div><div id="ref484schema" class="ref484 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid merkle tree
         The provided list of operations is inconsistent with the block
         header. */
      "kind": "temporary",
      "id": "validator.inconsistent_operations_hash",
      "block": $block_hash,
      "expected": $Operation_list_list_hash,
      "found": $Operation_list_list_hash }
    $Operation_list_list_hash:
      /* A list of list of operations (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref485descr', 'ref485')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref485schema', 'ref485')">JSON Schema</button>
    
    </div>
    <div id="ref485descr" class="ref485 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid block.</p><p><i>Id</i> : validator.invalid_block<br/><i>Category</i> : permanent</p>
      </div><div id="ref485schema" class="ref485 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid block
         Invalid block. */
      "kind": "permanent",
      "id": "validator.invalid_block",
      "invalid_block": $block_hash,
      "error":
        { /* Cannot_parse_operation */
          "error": "cannot_parse_operation",
          "operation": $Operation_hash }
        || { /* Invalid_fitness */
             "error": "invalid_fitness",
             "expected": $fitness,
             "found": $fitness }
        || { /* Non_increasing_timestamp */
             "error": "non_increasing_timestamp" }
        || { /* Non_increasing_fitness */
             "error": "non_increasing_fitness" }
        || { /* Invalid_level */
             "error": "invalid_level",
             "expected": integer ∈ [-2^31-1, 2^31],
             "found": integer ∈ [-2^31-1, 2^31] }
        || { /* Invalid_proto_level */
             "error": "invalid_proto_level",
             "expected": integer ∈ [0, 255],
             "found": integer ∈ [0, 255] }
        || { /* Replayed_operation */
             "error": "replayed_operation",
             "operation": $Operation_hash }
        || { /* Outdated_operation */
             "error": "outdated_operation",
             "operation": $Operation_hash,
             "originating_block": $block_hash }
        || { /* Expired_chain */
             "error": "expired_chain",
             "chain_id": $Chain_id,
             "expiration": $timestamp.protocol,
             "timestamp": $timestamp.protocol }
        || { /* Unexpected_number_of_validation_passes */
             "error": "unexpected_number_of_passes",
             "found": integer ∈ [0, 255] }
        || { /* Too_many_operations */
             "error": "too_many_operations",
             "validation_pass": integer ∈ [0, 255],
             "found": integer ∈ [0, 2^16-1],
             "max": integer ∈ [0, 2^16-1] }
        || { /* Oversized_operation */
             "error": "oversized_operation",
             "operation": $Operation_hash,
             "found": integer ∈ [-2^30, 2^30],
             "max": integer ∈ [-2^30, 2^30] }
        || { /* Unallowed_pass */
             "error": "invalid_pass",
             "operation": $Operation_hash,
             "pass": integer ∈ [0, 255],
             "allowed_pass":
               integer ∈ [0, 255] /* Some */ || null /* None */ }
        || { /* Cannot_parse_block_header */
             "error": "cannot_parse_bock_header" }
        || { /* Economic_protocol_error */
             "error": "economic_protocol_error" }
        || { /* Invalid_protocol_environment_transition */
             "error": "invalid_protocol_environment_transition",
             "before": $protocol.environment_version,
             "after": $protocol.environment_version } }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $fitness:
      /* Block fitness
         The fitness, or score, of a block, that allow the Tezos to decide
         which chain is the best. A fitness value is a list of byte
         sequences. They are compared as follows: shortest lists are smaller;
         lists of the same length are compared according to the
         lexicographical order. */
      [ /^([a-zA-Z0-9][a-zA-Z0-9])*$/ ... ]
    $protocol.environment_version: integer ∈ [0, 2^16-1]
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



**Missing test protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref486descr', 'ref486')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref486schema', 'ref486')">JSON Schema</button>
    
    </div>
    <div id="ref486descr" class="ref486 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Missing test protocol when forking the test chain</p><p><i>Id</i> : validator.missing_test_protocol<br/><i>Category</i> : temporary</p>
      </div><div id="ref486schema" class="ref486 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing test protocol
         Missing test protocol when forking the test chain */
      "kind": "temporary",
      "id": "validator.missing_test_protocol",
      "test_protocol": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref487descr', 'ref487')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref487schema', 'ref487')">JSON Schema</button>
    
    </div>
    <div id="ref487descr" class="ref487 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The protocol required for validating a block is missing.</p><p><i>Id</i> : validator.unavailable_protocol<br/><i>Category</i> : temporary</p>
      </div><div id="ref487schema" class="ref487 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing protocol
         The protocol required for validating a block is missing. */
      "kind": "temporary",
      "id": "validator.unavailable_protocol",
      "block": $block_hash,
      "missing_protocol": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Validation process failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref488descr', 'ref488')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref488schema', 'ref488')">JSON Schema</button>
    
    </div>
    <div id="ref488descr" class="ref488 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to validate block using external validation process.</p><p><i>Id</i> : validator.validation_process_failed<br/><i>Category</i> : temporary</p>
      </div><div id="ref488schema" class="ref488 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Validation process failed
         Failed to validate block using external validation process. */
      "kind": "temporary",
      "id": "validator.validation_process_failed",
      "error":
        { /* Missing_handshake */
          "constant": "missing_handshake" }
        || { /* Inconsistent_handshake */
             "inconsistent_handshake": $unistring }
        || { /* Protocol_dynlink_failure */
             "protocol_dynlink_failure": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



Michelson parsing/macros
************************

**Micheline parser error: annotation exceeds max length**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref489descr', 'ref489')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref489schema', 'ref489')">JSON Schema</button>
    
    </div>
    <div id="ref489descr" class="ref489 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an annotation exceeded the maximum length (255).</p><p><i>Id</i> : micheline.parse_error.annotation_exceeds_max_length<br/><i>Category</i> : permanent</p>
      </div><div id="ref489schema" class="ref489 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: annotation exceeds max length
         While parsing a piece of Micheline source, an annotation exceeded
         the maximum length (255). */
      "kind": "permanent",
      "id": "micheline.parse_error.annotation_exceeds_max_length",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } } }</pre>
    </div>



**Micheline parser error: empty_expression**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref490descr', 'ref490')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref490schema', 'ref490')">JSON Schema</button>
    
    </div>
    <div id="ref490descr" class="ref490 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Tried to interpret an empty piece or Micheline source as a single expression.</p><p><i>Id</i> : micheline.parse_error.empty_expression<br/><i>Category</i> : permanent</p>
      </div><div id="ref490schema" class="ref490 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: empty_expression
         Tried to interpret an empty piece or Micheline source as a single
         expression. */
      "kind": "permanent",
      "id": "micheline.parse_error.empty_expression" }</pre>
    </div>



**Micheline parser error: extra token**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref491descr', 'ref491')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref491schema', 'ref491')">JSON Schema</button>
    
    </div>
    <div id="ref491descr" class="ref491 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an extra semi colon or parenthesis was encountered.</p><p><i>Id</i> : micheline.parse_error.extra_token<br/><i>Category</i> : permanent</p>
      </div><div id="ref491schema" class="ref491 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: extra token
         While parsing a piece of Micheline source, an extra semi colon or
         parenthesis was encountered. */
      "kind": "permanent",
      "id": "micheline.parse_error.extra_token",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } },
      "token":
        { /* String */
          "string": $unistring }
        || { /* Int */
             "int": $unistring }
        || { /* Annot */
             "annot": $unistring }
        || { /* Comment */
             "comment": $unistring,
             "end_of_line"?: boolean }
        || { /* Punctuation */
             "punctuation": "(" | ";" | "}" | "{" | ")" }
        || { /* Bytes */
             "bytes": $unistring }
        || { /* Ident */
             "ident": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: invalid hex bytes**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref492descr', 'ref492')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref492schema', 'ref492')">JSON Schema</button>
    
    </div>
    <div id="ref492descr" class="ref492 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a byte sequence (0x...) was not valid as a hex byte.</p><p><i>Id</i> : micheline.parse_error.invalid_hex_bytes<br/><i>Category</i> : permanent</p>
      </div><div id="ref492schema" class="ref492 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: invalid hex bytes
         While parsing a piece of Micheline source, a byte sequence (0x...)
         was not valid as a hex byte. */
      "kind": "permanent",
      "id": "micheline.parse_error.invalid_hex_bytes",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } } }</pre>
    </div>



**Micheline parser error: invalid UTF-8 sequence**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref493descr', 'ref493')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref493schema', 'ref493')">JSON Schema</button>
    
    </div>
    <div id="ref493descr" class="ref493 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a sequence of bytes that is not valid UTF-8 was encountered.</p><p><i>Id</i> : micheline.parse_error.invalid_utf8_sequence<br/><i>Category</i> : permanent</p>
      </div><div id="ref493schema" class="ref493 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: invalid UTF-8 sequence
         While parsing a piece of Micheline source, a sequence of bytes that
         is not valid UTF-8 was encountered. */
      "kind": "permanent",
      "id": "micheline.parse_error.invalid_utf8_sequence",
      "point":
        { "line": integer ∈ [0, 2^16-1],
          "column": integer ∈ [0, 2^16-1],
          "point": integer ∈ [0, 2^16-1],
          "byte": integer ∈ [0, 2^16-1] },
      "sequence": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: misaligned node**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref494descr', 'ref494')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref494schema', 'ref494')">JSON Schema</button>
    
    </div>
    <div id="ref494descr" class="ref494 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an expression was not aligned with its siblings of the same mother application or sequence.</p><p><i>Id</i> : micheline.parse_error.misaligned_node<br/><i>Category</i> : permanent</p>
      </div><div id="ref494schema" class="ref494 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: misaligned node
         While parsing a piece of Micheline source, an expression was not
         aligned with its siblings of the same mother application or
         sequence. */
      "kind": "permanent",
      "id": "micheline.parse_error.misaligned_node",
      "expression":
        { "expression": $micheline.generic.expression,
          "locations":
            [ { "start":
                  { "line": integer ∈ [0, 2^16-1],
                    "column": integer ∈ [0, 2^16-1],
                    "point": integer ∈ [0, 2^16-1],
                    "byte": integer ∈ [0, 2^16-1] },
                "stop":
                  { "line": integer ∈ [0, 2^16-1],
                    "column": integer ∈ [0, 2^16-1],
                    "point": integer ∈ [0, 2^16-1],
                    "byte": integer ∈ [0, 2^16-1] } } ... ] } }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.generic.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.generic.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.generic.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: missing break after number**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref495descr', 'ref495')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref495schema', 'ref495')">JSON Schema</button>
    
    </div>
    <div id="ref495descr" class="ref495 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a number was not visually separated from its follower token, leading to misreadability.</p><p><i>Id</i> : micheline.parse_error.missing_break_after_number<br/><i>Category</i> : permanent</p>
      </div><div id="ref495schema" class="ref495 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: missing break after number
         While parsing a piece of Micheline source, a number was not visually
         separated from its follower token, leading to misreadability. */
      "kind": "permanent",
      "id": "micheline.parse_error.missing_break_after_number",
      "point":
        { "line": integer ∈ [0, 2^16-1],
          "column": integer ∈ [0, 2^16-1],
          "point": integer ∈ [0, 2^16-1],
          "byte": integer ∈ [0, 2^16-1] } }</pre>
    </div>



**Micheline parser error: unclosed token**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref496descr', 'ref496')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref496schema', 'ref496')">JSON Schema</button>
    
    </div>
    <div id="ref496descr" class="ref496 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a parenthesis or a brace was unclosed.</p><p><i>Id</i> : micheline.parse_error.unclosed_token<br/><i>Category</i> : permanent</p>
      </div><div id="ref496schema" class="ref496 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unclosed token
         While parsing a piece of Micheline source, a parenthesis or a brace
         was unclosed. */
      "kind": "permanent",
      "id": "micheline.parse_error.unclosed_token",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } },
      "token":
        { /* String */
          "string": $unistring }
        || { /* Int */
             "int": $unistring }
        || { /* Annot */
             "annot": $unistring }
        || { /* Comment */
             "comment": $unistring,
             "end_of_line"?: boolean }
        || { /* Punctuation */
             "punctuation": "(" | ";" | "}" | "{" | ")" }
        || { /* Bytes */
             "bytes": $unistring }
        || { /* Ident */
             "ident": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: undefined escape sequence**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref497descr', 'ref497')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref497schema', 'ref497')">JSON Schema</button>
    
    </div>
    <div id="ref497descr" class="ref497 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an unexpected escape sequence was encountered in a string.</p><p><i>Id</i> : micheline.parse_error.undefined_escape_sequence<br/><i>Category</i> : permanent</p>
      </div><div id="ref497schema" class="ref497 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: undefined escape sequence
         While parsing a piece of Micheline source, an unexpected escape
         sequence was encountered in a string. */
      "kind": "permanent",
      "id": "micheline.parse_error.undefined_escape_sequence",
      "point":
        { "line": integer ∈ [0, 2^16-1],
          "column": integer ∈ [0, 2^16-1],
          "point": integer ∈ [0, 2^16-1],
          "byte": integer ∈ [0, 2^16-1] },
      "sequence": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: unexpected character**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref498descr', 'ref498')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref498schema', 'ref498')">JSON Schema</button>
    
    </div>
    <div id="ref498descr" class="ref498 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an unexpected character was encountered.</p><p><i>Id</i> : micheline.parse_error.unexpected_character<br/><i>Category</i> : permanent</p>
      </div><div id="ref498schema" class="ref498 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unexpected character
         While parsing a piece of Micheline source, an unexpected character
         was encountered. */
      "kind": "permanent",
      "id": "micheline.parse_error.unexpected_character",
      "point":
        { "line": integer ∈ [0, 2^16-1],
          "column": integer ∈ [0, 2^16-1],
          "point": integer ∈ [0, 2^16-1],
          "byte": integer ∈ [0, 2^16-1] },
      "character": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: unexpected token**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref499descr', 'ref499')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref499schema', 'ref499')">JSON Schema</button>
    
    </div>
    <div id="ref499descr" class="ref499 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an unexpected token was encountered.</p><p><i>Id</i> : micheline.parse_error.unexpected_token<br/><i>Category</i> : permanent</p>
      </div><div id="ref499schema" class="ref499 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unexpected token
         While parsing a piece of Micheline source, an unexpected token was
         encountered. */
      "kind": "permanent",
      "id": "micheline.parse_error.unexpected_token",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } },
      "token":
        { /* String */
          "string": $unistring }
        || { /* Int */
             "int": $unistring }
        || { /* Annot */
             "annot": $unistring }
        || { /* Comment */
             "comment": $unistring,
             "end_of_line"?: boolean }
        || { /* Punctuation */
             "punctuation": "(" | ";" | "}" | "{" | ")" }
        || { /* Bytes */
             "bytes": $unistring }
        || { /* Ident */
             "ident": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Micheline parser error: unterminated comment**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref500descr', 'ref500')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref500schema', 'ref500')">JSON Schema</button>
    
    </div>
    <div id="ref500descr" class="ref500 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a commentX was not terminated.</p><p><i>Id</i> : micheline.parse_error.unterminated_comment<br/><i>Category</i> : permanent</p>
      </div><div id="ref500schema" class="ref500 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unterminated comment
         While parsing a piece of Micheline source, a commentX was not
         terminated. */
      "kind": "permanent",
      "id": "micheline.parse_error.unterminated_comment",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } } }</pre>
    </div>



**Micheline parser error: unterminated integer**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref501descr', 'ref501')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref501schema', 'ref501')">JSON Schema</button>
    
    </div>
    <div id="ref501descr" class="ref501 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, an integer was not terminated.</p><p><i>Id</i> : micheline.parse_error.unterminated_integer<br/><i>Category</i> : permanent</p>
      </div><div id="ref501schema" class="ref501 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unterminated integer
         While parsing a piece of Micheline source, an integer was not
         terminated. */
      "kind": "permanent",
      "id": "micheline.parse_error.unterminated_integer",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } } }</pre>
    </div>



**Micheline parser error: unterminated string**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref502descr', 'ref502')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref502schema', 'ref502')">JSON Schema</button>
    
    </div>
    <div id="ref502descr" class="ref502 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While parsing a piece of Micheline source, a string was not terminated.</p><p><i>Id</i> : micheline.parse_error.unterminated_string<br/><i>Category</i> : permanent</p>
      </div><div id="ref502schema" class="ref502 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Micheline parser error: unterminated string
         While parsing a piece of Micheline source, a string was not
         terminated. */
      "kind": "permanent",
      "id": "micheline.parse_error.unterminated_string",
      "location":
        { "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } } }</pre>
    </div>



Client
******

**<Untitled>**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref503descr', 'ref503')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref503schema', 'ref503')">JSON Schema</button>
    
    </div>
    <div id="ref503descr" class="ref503 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p></p><p><i>Id</i> : rpc_client.request_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref503schema" class="ref503 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* 
          */
      "kind": "permanent",
      "id": "rpc_client.request_failed",
      "meth": $unistring,
      "uri": $unistring,
      "error":
        { /* Empty_answer */
          "kind": "empty_answer" }
        || { /* Connection_failed */
             "kind": "connection_failed",
             "message": $unistring }
        || { /* Bad_request */
             "kind": "bad_request",
             "message": $unistring }
        || { /* Method_not_allowed */
             "kind": "method_not_allowed",
             "allowed": [ $unistring ... ] }
        || { /* Unsupported_media_type */
             "kind": "unsupported_media_type",
             "content_type"?: $unistring }
        || { /* Not_acceptable */
             "kind": "not_acceptable",
             "proposed": $unistring,
             "acceptable": $unistring }
        || { /* Unexpected_status_code */
             "kind": "unexpected_status_code",
             "code": integer ∈ [0, 2^16-1],
             "content": $unistring,
             "media_type"?: $unistring }
        || { /* Unexpected_content_type */
             "kind": "unexpected_content_type",
             "received": $unistring,
             "acceptable": [ $unistring ... ],
             "body": $unistring }
        || { /* Unexpected_content */
             "kind": "unexpected_content",
             "content": $unistring,
             "media_type": $unistring,
             "error": $unistring }
        || { /* OCaml_exception */
             "kind": "ocaml_exception",
             "content": $unistring }
        || any
        /* Unauthorized URI */
        || { /* Too many redirects */
             "kind": "too_many_redirects",
             "content": $unistring }
        || { /* Redirect without location */
             "kind": "redirect_without_location",
             "content": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



Miscellaneous
*************

**Applying non validated block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref504descr', 'ref504')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref504schema', 'ref504')">JSON Schema</button>
    
    </div>
    <div id="ref504descr" class="ref504 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Applying non validated block</p><p><i>Id</i> : Block_validator_process.applying_non_validated_block<br/><i>Category</i> : permanent</p>
      </div><div id="ref504schema" class="ref504 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Applying non validated block
         Applying non validated block */
      "kind": "permanent",
      "id": "Block_validator_process.applying_non_validated_block",
      "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Fail during checkout context**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref505descr', 'ref505')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref505schema', 'ref505')">JSON Schema</button>
    
    </div>
    <div id="ref505descr" class="ref505 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The context checkout failed using a given hash</p><p><i>Id</i> : Block_validator_process.failed_to_checkout_context<br/><i>Category</i> : permanent</p>
      </div><div id="ref505schema" class="ref505 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Fail during checkout context
         The context checkout failed using a given hash */
      "kind": "permanent",
      "id": "Block_validator_process.failed_to_checkout_context",
      "hash": $Context_hash }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**RPC returned an empty list of errors**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref506descr', 'ref506')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref506schema', 'ref506')">JSON Schema</button>
    
    </div>
    <div id="ref506descr" class="ref506 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The RPC returned with an error code but no associated error.</p><p><i>Id</i> : RPC.Empty_error_list<br/><i>Category</i> : branch</p>
      </div><div id="ref506schema" class="ref506 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* RPC returned an empty list of errors
         The RPC returned with an error code but no associated error. */
      "kind": "branch",
      "id": "RPC.Empty_error_list" }</pre>
    </div>



**RPC fails with an unparsable error message**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref507descr', 'ref507')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref507schema', 'ref507')">JSON Schema</button>
    
    </div>
    <div id="ref507descr" class="ref507 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The RPC returned with an error code, and the associated body was not a valid error trace. It is likely that the answer does not comes directly from a compatible node.</p><p><i>Id</i> : RPC.Unexpected_error_encoding<br/><i>Category</i> : branch</p>
      </div><div id="ref507schema" class="ref507 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* RPC fails with an unparsable error message
         The RPC returned with an error code, and the associated body was not
         a valid error trace. It is likely that the answer does not comes
         directly from a compatible node. */
      "kind": "branch",
      "id": "RPC.Unexpected_error_encoding",
      "unparsable message": any }</pre>
    </div>



**RPC lookup failed because of deleted data**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref508descr', 'ref508')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref508schema', 'ref508')">JSON Schema</button>
    
    </div>
    <div id="ref508descr" class="ref508 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>RPC lookup failed. Block has been pruned and requested data deleted.</p><p><i>Id</i> : RPC_context.Gone<br/><i>Category</i> : branch</p>
      </div><div id="ref508schema" class="ref508 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* RPC lookup failed because of deleted data
         RPC lookup failed. Block has been pruned and requested data deleted. */
      "kind": "branch",
      "id": "RPC_context.Gone",
      "method": $unistring,
      "uri": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**RPC lookup failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref509descr', 'ref509')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref509schema', 'ref509')">JSON Schema</button>
    
    </div>
    <div id="ref509descr" class="ref509 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>RPC lookup failed. No RPC exists at the URL or the RPC tried to access non-existent data.</p><p><i>Id</i> : RPC_context.Not_found<br/><i>Category</i> : branch</p>
      </div><div id="ref509schema" class="ref509 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* RPC lookup failed
         RPC lookup failed. No RPC exists at the URL or the RPC tried to
         access non-existent data. */
      "kind": "branch",
      "id": "RPC_context.Not_found",
      "method": $unistring,
      "uri": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unknown RPC version**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref510descr', 'ref510')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref510schema', 'ref510')">JSON Schema</button>
    
    </div>
    <div id="ref510descr" class="ref510 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The RPC was called with a bad version number.</p><p><i>Id</i> : RPC_error.bad_version<br/><i>Category</i> : permanent</p>
      </div><div id="ref510schema" class="ref510 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown RPC version
         The RPC was called with a bad version number. */
      "kind": "permanent",
      "id": "RPC_error.bad_version",
      "given": integer ∈ [-128, 127],
      "supported": [ integer ∈ [-128, 127] ... ] }</pre>
    </div>



**Failed to validate block because of a system error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref511descr', 'ref511')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref511schema', 'ref511')">JSON Schema</button>
    
    </div>
    <div id="ref511descr" class="ref511 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The validator failed because of a system error</p><p><i>Id</i> : Validator_process.system_error_while_validating<br/><i>Category</i> : temporary</p>
      </div><div id="ref511schema" class="ref511 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to validate block because of a system error
         The validator failed because of a system error */
      "kind": "temporary",
      "id": "Validator_process.system_error_while_validating",
      "errno": $unistring,
      "function": $unistring,
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Asynchronous injection failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref512descr', 'ref512')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref512schema', 'ref512')">JSON Schema</button>
    
    </div>
    <div id="ref512descr" class="ref512 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The asynchronous injection failed.</p><p><i>Id</i> : async_injection_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref512schema" class="ref512 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Asynchronous injection failed
         The asynchronous injection failed. */
      "kind": "permanent",
      "id": "async_injection_failed",
      ... }</pre>
    </div>



**Invalid argument**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref513descr', 'ref513')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref513schema', 'ref513')">JSON Schema</button>
    
    </div>
    <div id="ref513descr" class="ref513 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A bitset function was provided an invalid input</p><p><i>Id</i> : bitfield_invalid_input<br/><i>Category</i> : permanent</p>
      </div><div id="ref513schema" class="ref513 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid argument
         A bitset function was provided an invalid input */
      "kind": "permanent",
      "id": "bitfield_invalid_input",
      "function_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid bitfield’s position**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref514descr', 'ref514')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref514schema', 'ref514')">JSON Schema</button>
    
    </div>
    <div id="ref514descr" class="ref514 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Bitfields do not accept negative positions</p><p><i>Id</i> : bitfield_invalid_position<br/><i>Category</i> : permanent</p>
      </div><div id="ref514schema" class="ref514 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid bitfield’s position
         Bitfields do not accept negative positions */
      "kind": "permanent",
      "id": "bitfield_invalid_position",
      "position": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Invalid bitfield’s position range**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref515descr', 'ref515')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref515schema', 'ref515')">JSON Schema</button>
    
    </div>
    <div id="ref515descr" class="ref515 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Bitfields do not accept non-positive length nor negative positions</p><p><i>Id</i> : bitfield_invalid_range<br/><i>Category</i> : permanent</p>
      </div><div id="ref515schema" class="ref515 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid bitfield’s position range
         Bitfields do not accept non-positive length nor negative positions */
      "kind": "permanent",
      "id": "bitfield_invalid_range",
      "position": integer ∈ [-2^30, 2^30],
      "length": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Cannot serialize metadata**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref516descr', 'ref516')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref516schema', 'ref516')">JSON Schema</button>
    
    </div>
    <div id="ref516descr" class="ref516 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unable to serialize metadata</p><p><i>Id</i> : block_validation.cannot_serialize_metadata<br/><i>Category</i> : permanent</p>
      </div><div id="ref516schema" class="ref516 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot serialize metadata
         Unable to serialize metadata */
      "kind": "permanent",
      "id": "block_validation.cannot_serialize_metadata" }</pre>
    </div>



**Unsupported context hash version**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref517descr', 'ref517')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref517schema', 'ref517')">JSON Schema</button>
    
    </div>
    <div id="ref517descr" class="ref517 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unsupported context hash version.</p><p><i>Id</i> : brassaia.context_hash.unsupported_version<br/><i>Category</i> : permanent</p>
      </div><div id="ref517schema" class="ref517 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported context hash version
         Unsupported context hash version. */
      "kind": "permanent",
      "id": "brassaia.context_hash.unsupported_version",
      "version": $context_hash_version }
    $context_hash_version:
      /* A version number for the context hash computation */
      integer ∈ [0, 2^16-1]</pre>
    </div>



**Canceled**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref518descr', 'ref518')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref518schema', 'ref518')">JSON Schema</button>
    
    </div>
    <div id="ref518descr" class="ref518 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A promise was unexpectedly canceled</p><p><i>Id</i> : canceled<br/><i>Category</i> : temporary</p>
      </div><div id="ref518schema" class="ref518 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Canceled
         A promise was unexpectedly canceled */
      "kind": "temporary",
      "id": "canceled",
      ... }</pre>
    </div>



**Cannot connect to node socket**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref519descr', 'ref519')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref519schema', 'ref519')">JSON Schema</button>
    
    </div>
    <div id="ref519descr" class="ref519 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>External validator failed to connect to the node's socket</p><p><i>Id</i> : cannot_connect_to_node_socket<br/><i>Category</i> : temporary</p>
      </div><div id="ref519schema" class="ref519 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot connect to node socket
         External validator failed to connect to the node's socket */
      "kind": "temporary",
      "id": "cannot_connect_to_node_socket",
      ... }</pre>
    </div>



**Invalid key uri**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref520descr', 'ref520')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref520schema', 'ref520')">JSON Schema</button>
    
    </div>
    <div id="ref520descr" class="ref520 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A key has been provided with an invalid uri.</p><p><i>Id</i> : cli.key.invalid_uri<br/><i>Category</i> : permanent</p>
      </div><div id="ref520schema" class="ref520 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid key uri
         A key has been provided with an invalid uri. */
      "kind": "permanent",
      "id": "cli.key.invalid_uri",
      "value": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Signer output mismatch**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref521descr', 'ref521')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref521schema', 'ref521')">JSON Schema</button>
    
    </div>
    <div id="ref521descr" class="ref521 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The signer produced an invalid output</p><p><i>Id</i> : cli.signer_output_mismatch<br/><i>Category</i> : permanent</p>
      </div><div id="ref521schema" class="ref521 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Signer output mismatch
         The signer produced an invalid output */
      "kind": "permanent",
      "id": "cli.signer_output_mismatch",
      "output": "Proof of possession" | "Signature",
      "locator": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexisting scheme**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref522descr', 'ref522')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref522schema', 'ref522')">JSON Schema</button>
    
    </div>
    <div id="ref522descr" class="ref522 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The requested scheme does not exist</p><p><i>Id</i> : cli.unexisting_scheme<br/><i>Category</i> : permanent</p>
      </div><div id="ref522schema" class="ref522 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexisting scheme
         The requested scheme does not exist */
      "kind": "permanent",
      "id": "cli.unexisting_scheme",
      "uri": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unregistered key scheme**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref523descr', 'ref523')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref523schema', 'ref523')">JSON Schema</button>
    
    </div>
    <div id="ref523descr" class="ref523 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A key has been provided with an unregistered scheme (no corresponding plugin)</p><p><i>Id</i> : cli.unregistered_key_scheme<br/><i>Category</i> : permanent</p>
      </div><div id="ref523schema" class="ref523 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unregistered key scheme
         A key has been provided with an unregistered scheme (no
         corresponding plugin) */
      "kind": "permanent",
      "id": "cli.unregistered_key_scheme",
      "value": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong key scheme**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref524descr', 'ref524')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref524schema', 'ref524')">JSON Schema</button>
    
    </div>
    <div id="ref524descr" class="ref524 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A certain scheme type has been requested but another one was found</p><p><i>Id</i> : cli.wrong_key_scheme<br/><i>Category</i> : permanent</p>
      </div><div id="ref524schema" class="ref524 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong key scheme
         A certain scheme type has been requested but another one was found */
      "kind": "permanent",
      "id": "cli.wrong_key_scheme",
      "expected": $unistring,
      "found": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Deserialized counter does not match the stored one**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref525descr', 'ref525')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref525schema', 'ref525')">JSON Schema</button>
    
    </div>
    <div id="ref525descr" class="ref525 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The byte sequence references a multisig counter that does not match the one currently stored in the given multisig contract</p><p><i>Id</i> : client.alpha.Bad deserialized counter<br/><i>Category</i> : permanent</p>
      </div><div id="ref525schema" class="ref525 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Deserialized counter does not match the stored one
         The byte sequence references a multisig counter that does not match
         the one currently stored in the given multisig contract */
      "kind": "permanent",
      "id": "client.alpha.Bad deserialized counter",
      "received_expected":
        [ integer ∈ [-2^30, 2^30], integer ∈ [-2^30, 2^30] ] }</pre>
    </div>



**Forbidden negative int**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref526descr', 'ref526')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref526schema', 'ref526')">JSON Schema</button>
    
    </div>
    <div id="ref526descr" class="ref526 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>invalid number, must a non negative natural </p><p><i>Id</i> : client.alpha.ForbiddenNegativeInt<br/><i>Category</i> : permanent</p>
      </div><div id="ref526schema" class="ref526 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Forbidden negative int
         invalid number, must a non negative natural  */
      "kind": "permanent",
      "id": "client.alpha.ForbiddenNegativeInt",
      "invalid_natural": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid address for smart contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref527descr', 'ref527')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref527schema', 'ref527')">JSON Schema</button>
    
    </div>
    <div id="ref527descr" class="ref527 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid input, expected a smart contract address in base58 check notation (KT1...)</p><p><i>Id</i> : client.alpha.InvalidAddressForSmartContract<br/><i>Category</i> : permanent</p>
      </div><div id="ref527schema" class="ref527 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid address for smart contract
         Invalid input, expected a smart contract address in base58 check
         notation (KT1...) */
      "kind": "permanent",
      "id": "client.alpha.InvalidAddressForSmartContract",
      "invalid_address": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The expression is not a valid multisig action**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref528descr', 'ref528')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref528schema', 'ref528')">JSON Schema</button>
    
    </div>
    <div id="ref528descr" class="ref528 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When trying to deserialise an action from a sequence of bytes, we got an expression that does not correspond to a known multisig action</p><p><i>Id</i> : client.alpha.actionDeserialisation<br/><i>Category</i> : permanent</p>
      </div><div id="ref528schema" class="ref528 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The expression is not a valid multisig action
         When trying to deserialise an action from a sequence of bytes, we
         got an expression that does not correspond to a known multisig
         action */
      "kind": "permanent",
      "id": "client.alpha.actionDeserialisation",
      "expr": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The argument is not for an FA1.2 parameter**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref529descr', 'ref529')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref529schema', 'ref529')">JSON Schema</button>
    
    </div>
    <div id="ref529descr" class="ref529 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The argument's type does not correspond to that of the corresponding FA1.2 entrypoint.</p><p><i>Id</i> : client.alpha.actionUnwrappingError<br/><i>Category</i> : permanent</p>
      </div><div id="ref529schema" class="ref529 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The argument is not for an FA1.2 parameter
         The argument's type does not correspond to that of the corresponding
         FA1.2 entrypoint. */
      "kind": "permanent",
      "id": "client.alpha.actionUnwrappingError",
      "entrypoint": $unistring,
      "expr": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The byte sequence is not for the given multisig contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref530descr', 'ref530')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref530schema', 'ref530')">JSON Schema</button>
    
    </div>
    <div id="ref530descr" class="ref530 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When trying to deserialise an action from a sequence of bytes, we got an action for another multisig contract</p><p><i>Id</i> : client.alpha.badDeserializedContract<br/><i>Category</i> : permanent</p>
      </div><div id="ref530schema" class="ref530 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The byte sequence is not for the given multisig contract
         When trying to deserialise an action from a sequence of bytes, we
         got an action for another multisig contract */
      "kind": "permanent",
      "id": "client.alpha.badDeserializedContract",
      "received_expected":
        [ $alpha.contract_id.originated, $alpha.contract_id.originated ] }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad -max-priority arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref531descr', 'ref531')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref531schema', 'ref531')">JSON Schema</button>
    
    </div>
    <div id="ref531descr" class="ref531 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>invalid priority in -max-priority</p><p><i>Id</i> : client.alpha.badMaxPriorityArg<br/><i>Category</i> : permanent</p>
      </div><div id="ref531schema" class="ref531 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad -max-priority arg
         invalid priority in -max-priority */
      "kind": "permanent",
      "id": "client.alpha.badMaxPriorityArg",
      "parameter": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad -max-waiting-time arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref532descr', 'ref532')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref532schema', 'ref532')">JSON Schema</button>
    
    </div>
    <div id="ref532descr" class="ref532 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>invalid duration in -max-waiting-time</p><p><i>Id</i> : client.alpha.badMaxWaitingTimeArg<br/><i>Category</i> : permanent</p>
      </div><div id="ref532schema" class="ref532 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad -max-waiting-time arg
         invalid duration in -max-waiting-time */
      "kind": "permanent",
      "id": "client.alpha.badMaxWaitingTimeArg",
      "parameter": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad -minimal-fees arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref533descr', 'ref533')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref533schema', 'ref533')">JSON Schema</button>
    
    </div>
    <div id="ref533descr" class="ref533 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>invalid fee threshold in -fee-threshold</p><p><i>Id</i> : client.alpha.badMinimalFeesArg<br/><i>Category</i> : permanent</p>
      </div><div id="ref533schema" class="ref533 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad -minimal-fees arg
         invalid fee threshold in -fee-threshold */
      "kind": "permanent",
      "id": "client.alpha.badMinimalFeesArg",
      "parameter": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad -preserved-levels arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref534descr', 'ref534')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref534schema', 'ref534')">JSON Schema</button>
    
    </div>
    <div id="ref534descr" class="ref534 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>invalid number of levels in -preserved-levels</p><p><i>Id</i> : client.alpha.badPreservedLevelsArg<br/><i>Category</i> : permanent</p>
      </div><div id="ref534schema" class="ref534 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad -preserved-levels arg
         invalid number of levels in -preserved-levels */
      "kind": "permanent",
      "id": "client.alpha.badPreservedLevelsArg",
      "parameter": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad Tez Arg**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref535descr', 'ref535')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref535schema', 'ref535')">JSON Schema</button>
    
    </div>
    <div id="ref535descr" class="ref535 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid ꜩ notation in parameter.</p><p><i>Id</i> : client.alpha.badTezArg<br/><i>Category</i> : permanent</p>
      </div><div id="ref535schema" class="ref535 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad Tez Arg
         Invalid ꜩ notation in parameter. */
      "kind": "permanent",
      "id": "client.alpha.badTezArg",
      "parameter": $unistring,
      "literal": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The byte sequence is not a valid multisig action**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref536descr', 'ref536')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref536schema', 'ref536')">JSON Schema</button>
    
    </div>
    <div id="ref536descr" class="ref536 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>When trying to deserialise an action from a sequence of bytes, we got an error</p><p><i>Id</i> : client.alpha.bytesDeserialisation<br/><i>Category</i> : permanent</p>
      </div><div id="ref536schema" class="ref536 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The byte sequence is not a valid multisig action
         When trying to deserialise an action from a sequence of bytes, we
         got an error */
      "kind": "permanent",
      "id": "client.alpha.bytesDeserialisation",
      "expr": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }</pre>
    </div>



**The given contract is not a multisig contract because it has no script**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref537descr', 'ref537')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref537schema', 'ref537')">JSON Schema</button>
    
    </div>
    <div id="ref537descr" class="ref537 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multisig command has referenced a scriptless smart contract instead of a multisig smart contract.</p><p><i>Id</i> : client.alpha.contractHasNoScript<br/><i>Category</i> : permanent</p>
      </div><div id="ref537schema" class="ref537 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract is not a multisig contract because it has no
         script
         A multisig command has referenced a scriptless smart contract
         instead of a multisig smart contract. */
      "kind": "permanent",
      "id": "client.alpha.contractHasNoScript",
      "contract": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The given contract is not a multisig contract because it has no storage**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref538descr', 'ref538')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref538schema', 'ref538')">JSON Schema</button>
    
    </div>
    <div id="ref538descr" class="ref538 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multisig command has referenced a smart contract without storage instead of a multisig smart contract.</p><p><i>Id</i> : client.alpha.contractHasNoStorage<br/><i>Category</i> : permanent</p>
      </div><div id="ref538schema" class="ref538 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract is not a multisig contract because it has no
         storage
         A multisig command has referenced a smart contract without storage
         instead of a multisig smart contract. */
      "kind": "permanent",
      "id": "client.alpha.contractHasNoStorage",
      "contract": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The storage of the given contract is not of the shape expected for a multisig contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref539descr', 'ref539')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref539schema', 'ref539')">JSON Schema</button>
    
    </div>
    <div id="ref539descr" class="ref539 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multisig command has referenced a smart contract whose storage is of a different shape than the expected one.</p><p><i>Id</i> : client.alpha.contractHasUnexpectedStorage<br/><i>Category</i> : permanent</p>
      </div><div id="ref539schema" class="ref539 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The storage of the given contract is not of the shape expected for a
         multisig contract
         A multisig command has referenced a smart contract whose storage is
         of a different shape than the expected one. */
      "kind": "permanent",
      "id": "client.alpha.contractHasUnexpectedStorage",
      "contract": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The given contract has no code**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref540descr', 'ref540')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref540schema', 'ref540')">JSON Schema</button>
    
    </div>
    <div id="ref540descr" class="ref540 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Attempt to get the code of a contract failed because it has nocode. No scriptless contract should remain.</p><p><i>Id</i> : client.alpha.contractWithoutCode<br/><i>Category</i> : permanent</p>
      </div><div id="ref540schema" class="ref540 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract has no code
         Attempt to get the code of a contract failed because it has nocode.
         No scriptless contract should remain. */
      "kind": "permanent",
      "id": "client.alpha.contractWithoutCode",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The given contract does not implement the FA1.2 interface**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref541descr', 'ref541')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref541schema', 'ref541')">JSON Schema</button>
    
    </div>
    <div id="ref541descr" class="ref541 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 command has referenced a smart contract whose script does not implement at least one FA1.2 entrypoint, or with an incompatible type. See TZIP-7 (https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md) for documentation on FA1.2.</p><p><i>Id</i> : client.alpha.entrypointMismatch<br/><i>Category</i> : permanent</p>
      </div><div id="ref541schema" class="ref541 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract does not implement the FA1.2 interface
         An FA1.2 command has referenced a smart contract whose script does
         not implement at least one FA1.2 entrypoint, or with an incompatible
         type. See TZIP-7
         (https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md)
         for documentation on FA1.2. */
      "kind": "permanent",
      "id": "client.alpha.entrypointMismatch",
      "name": $unistring,
      "type":
        [ $micheline.alpha.michelson_v1.expression,
          $micheline.alpha.michelson_v1.expression ]
        /* Some */
        || null
        /* None */ }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The given contract is not a smart contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref542descr', 'ref542')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref542schema', 'ref542')">JSON Schema</button>
    
    </div>
    <div id="ref542descr" class="ref542 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 command has referenced a scriptless contract.</p><p><i>Id</i> : client.alpha.fa12ContractHasNoScript<br/><i>Category</i> : permanent</p>
      </div><div id="ref542schema" class="ref542 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract is not a smart contract
         An FA1.2 command has referenced a scriptless contract. */
      "kind": "permanent",
      "id": "client.alpha.fa12ContractHasNoScript",
      "contract": $alpha.contract_id.originated }
    $alpha.contract_id.originated:
      /* A contract handle -- originated account
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The given contract has no storage**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref543descr', 'ref543')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref543schema', 'ref543')">JSON Schema</button>
    
    </div>
    <div id="ref543descr" class="ref543 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 command made a call on a contract that has no storage.</p><p><i>Id</i> : client.alpha.fa12ContractHasNoStorage<br/><i>Category</i> : permanent</p>
      </div><div id="ref543schema" class="ref543 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract has no storage
         An FA1.2 command made a call on a contract that has no storage. */
      "kind": "permanent",
      "id": "client.alpha.fa12ContractHasNoStorage",
      "contract": $alpha.contract_id }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected error during FA1.2 contract interpretation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref544descr', 'ref544')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref544schema', 'ref544')">JSON Schema</button>
    
    </div>
    <div id="ref544descr" class="ref544 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An unexpected Michelson error was reached during the interpretation of an FA1.2 contract.</p><p><i>Id</i> : client.alpha.fa12UnexpectedError<br/><i>Category</i> : permanent</p>
      </div><div id="ref544schema" class="ref544 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected error during FA1.2 contract interpretation
         An unexpected Michelson error was reached during the interpretation
         of an FA1.2 contract. */
      "kind": "permanent",
      "id": "client.alpha.fa12UnexpectedError",
      "location": $micheline.location,
      "value": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ill-typed argument in multi-signed transfer**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref545descr', 'ref545')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref545schema', 'ref545')">JSON Schema</button>
    
    </div>
    <div id="ref545descr" class="ref545 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided argument for a transfer from a multisig contract is ill-typed</p><p><i>Id</i> : client.alpha.illTypedArgumentForMultisig<br/><i>Category</i> : permanent</p>
      </div><div id="ref545schema" class="ref545 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill-typed argument in multi-signed transfer
         The provided argument for a transfer from a multisig contract is
         ill-typed */
      "kind": "permanent",
      "id": "client.alpha.illTypedArgumentForMultisig",
      "destination": $alpha.contract_id,
      "entrypoint": $unistring,
      "parameter_ty": $micheline.alpha.michelson_v1.expression,
      "parameter": $micheline.alpha.michelson_v1.expression }
    $alpha.contract_id:
      /* A contract handle
         A contract notation as given to an RPC or inside scripts. Can be a
         base58 implicit contract hash or a base58 originated contract hash. */
      $unistring
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Ill-typed lambda for multi-signed transfer**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref546descr', 'ref546')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref546schema', 'ref546')">JSON Schema</button>
    
    </div>
    <div id="ref546descr" class="ref546 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The provided lambda for a transfer from a multisig contract is ill-typed</p><p><i>Id</i> : client.alpha.illTypedLambdaForMultisig<br/><i>Category</i> : permanent</p>
      </div><div id="ref546schema" class="ref546 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Ill-typed lambda for multi-signed transfer
         The provided lambda for a transfer from a multisig contract is
         ill-typed */
      "kind": "permanent",
      "id": "client.alpha.illTypedLambdaForMultisig",
      "lam": $micheline.alpha.michelson_v1.expression,
      "exp": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The following signature did not match a public key in the given multisig contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref547descr', 'ref547')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref547schema', 'ref547')">JSON Schema</button>
    
    </div>
    <div id="ref547descr" class="ref547 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A signature was given for a multisig contract that matched none of the public keys of the contract signers</p><p><i>Id</i> : client.alpha.invalidSignature<br/><i>Category</i> : permanent</p>
      </div><div id="ref547schema" class="ref547 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The following signature did not match a public key in the given
         multisig contract
         A signature was given for a multisig contract that matched none of
         the public keys of the contract signers */
      "kind": "permanent",
      "id": "client.alpha.invalidSignature",
      "invalid_signature": $Signature.V2 }
    $Signature.V2:
      /* A Ed25519, Secp256k1, P256 or BLS signature (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong number of arguments to macro**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref548descr', 'ref548')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref548schema', 'ref548')">JSON Schema</button>
    
    </div>
    <div id="ref548descr" class="ref548 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A wrong number of arguments was provided to a macro</p><p><i>Id</i> : client.alpha.michelson.macros.bas_arity<br/><i>Category</i> : permanent</p>
      </div><div id="ref548schema" class="ref548 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong number of arguments to macro
         A wrong number of arguments was provided to a macro */
      "kind": "permanent",
      "id": "client.alpha.michelson.macros.bas_arity",
      "macro_name": $unistring,
      "given_number_of_arguments": integer ∈ [0, 2^16-1],
      "expected_number_of_arguments": integer ∈ [0, 2^16-1] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Macro expects a sequence**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref549descr', 'ref549')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref549schema', 'ref549')">JSON Schema</button>
    
    </div>
    <div id="ref549descr" class="ref549 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An macro expects a sequence, but a sequence was not provided</p><p><i>Id</i> : client.alpha.michelson.macros.sequence_expected<br/><i>Category</i> : permanent</p>
      </div><div id="ref549schema" class="ref549 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Macro expects a sequence
         An macro expects a sequence, but a sequence was not provided */
      "kind": "permanent",
      "id": "client.alpha.michelson.macros.sequence_expected",
      "macro_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected annotation**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref550descr', 'ref550')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref550schema', 'ref550')">JSON Schema</button>
    
    </div>
    <div id="ref550descr" class="ref550 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A macro had an annotation, but no annotation was permitted on this macro.</p><p><i>Id</i> : client.alpha.michelson.macros.unexpected_annotation<br/><i>Category</i> : permanent</p>
      </div><div id="ref550schema" class="ref550 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected annotation
         A macro had an annotation, but no annotation was permitted on this
         macro. */
      "kind": "permanent",
      "id": "client.alpha.michelson.macros.unexpected_annotation",
      "macro_name": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong stack**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref551descr', 'ref551')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref551schema', 'ref551')">JSON Schema</button>
    
    </div>
    <div id="ref551descr" class="ref551 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse a typed stack.</p><p><i>Id</i> : client.alpha.michelson.stack.wrong_stack<br/><i>Category</i> : permanent</p>
      </div><div id="ref551schema" class="ref551 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong stack
         Failed to parse a typed stack. */
      "kind": "permanent",
      "id": "client.alpha.michelson.stack.wrong_stack",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong stack item**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref552descr', 'ref552')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref552schema', 'ref552')">JSON Schema</button>
    
    </div>
    <div id="ref552descr" class="ref552 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse an item in a typed stack.</p><p><i>Id</i> : client.alpha.michelson.stack.wrong_stack_item<br/><i>Category</i> : permanent</p>
      </div><div id="ref552schema" class="ref552 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong stack item
         Failed to parse an item in a typed stack. */
      "kind": "permanent",
      "id": "client.alpha.michelson.stack.wrong_stack_item",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong description of a list of extra big maps**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref553descr', 'ref553')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref553schema', 'ref553')">JSON Schema</button>
    
    </div>
    <div id="ref553descr" class="ref553 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse a description of extra big maps.</p><p><i>Id</i> : client.alpha.michelson.wrong_extra_big_maps<br/><i>Category</i> : permanent</p>
      </div><div id="ref553schema" class="ref553 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong description of a list of extra big maps
         Failed to parse a description of extra big maps. */
      "kind": "permanent",
      "id": "client.alpha.michelson.wrong_extra_big_maps",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong description of an extra big map**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref554descr', 'ref554')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref554schema', 'ref554')">JSON Schema</button>
    
    </div>
    <div id="ref554descr" class="ref554 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse an item in a description of extra big maps.</p><p><i>Id</i> : client.alpha.michelson.wrong_extra_big_maps_item<br/><i>Category</i> : permanent</p>
      </div><div id="ref554schema" class="ref554 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong description of an extra big map
         Failed to parse an item in a description of extra big maps. */
      "kind": "permanent",
      "id": "client.alpha.michelson.wrong_extra_big_maps_item",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong description of a list of other contracts**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref555descr', 'ref555')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref555schema', 'ref555')">JSON Schema</button>
    
    </div>
    <div id="ref555descr" class="ref555 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse a description of other contracts.</p><p><i>Id</i> : client.alpha.michelson.wrong_other_contracts<br/><i>Category</i> : permanent</p>
      </div><div id="ref555schema" class="ref555 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong description of a list of other contracts
         Failed to parse a description of other contracts. */
      "kind": "permanent",
      "id": "client.alpha.michelson.wrong_other_contracts",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong description of an other contract**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref556descr', 'ref556')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref556schema', 'ref556')">JSON Schema</button>
    
    </div>
    <div id="ref556descr" class="ref556 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to parse an item in a description of other contracts.</p><p><i>Id</i> : client.alpha.michelson.wrong_other_contracts_item<br/><i>Category</i> : permanent</p>
      </div><div id="ref556schema" class="ref556 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong description of an other contract
         Failed to parse an item in a description of other contracts. */
      "kind": "permanent",
      "id": "client.alpha.michelson.wrong_other_contracts_item",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Given threshold is not positive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref557descr', 'ref557')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref557schema', 'ref557')">JSON Schema</button>
    
    </div>
    <div id="ref557descr" class="ref557 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multisig threshold should be a positive number</p><p><i>Id</i> : client.alpha.nonPositiveThreshold<br/><i>Category</i> : permanent</p>
      </div><div id="ref557schema" class="ref557 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Given threshold is not positive
         A multisig threshold should be a positive number */
      "kind": "permanent",
      "id": "client.alpha.nonPositiveThreshold",
      "threshold": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**The given contract is not one of the supported contracts**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref558descr', 'ref558')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref558schema', 'ref558')">JSON Schema</button>
    
    </div>
    <div id="ref558descr" class="ref558 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A multisig command has referenced a smart contract whose script is not one of the known multisig contract scripts.</p><p><i>Id</i> : client.alpha.notASupportedMultisigContract<br/><i>Category</i> : permanent</p>
      </div><div id="ref558schema" class="ref558 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The given contract is not one of the supported contracts
         A multisig command has referenced a smart contract whose script is
         not one of the known multisig contract scripts. */
      "kind": "permanent",
      "id": "client.alpha.notASupportedMultisigContract",
      "hash": $script_expr }
    $script_expr:
      /* A script expression ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The entrypoint is not viewable**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref559descr', 'ref559')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref559schema', 'ref559')">JSON Schema</button>
    
    </div>
    <div id="ref559descr" class="ref559 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A transaction made a call on an entrypoint expecting it to implement the 'view' type.</p><p><i>Id</i> : client.alpha.notAViewableEntrypoint<br/><i>Category</i> : permanent</p>
      </div><div id="ref559schema" class="ref559 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The entrypoint is not viewable
         A transaction made a call on an entrypoint expecting it to implement
         the 'view' type. */
      "kind": "permanent",
      "id": "client.alpha.notAViewableEntrypoint",
      "entrypoint": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The expression is not for an entrypoint**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref560descr', 'ref560')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref560schema', 'ref560')">JSON Schema</button>
    
    </div>
    <div id="ref560descr" class="ref560 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The parameter value of the contract call refers to a non-existing entrypoint.</p><p><i>Id</i> : client.alpha.notAnEntrypoint<br/><i>Category</i> : permanent</p>
      </div><div id="ref560schema" class="ref560 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The expression is not for an entrypoint
         The parameter value of the contract call refers to a non-existing
         entrypoint. */
      "kind": "permanent",
      "id": "client.alpha.notAnEntrypoint",
      "param": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The sender does not have enough allowance**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref561descr', 'ref561')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref561schema', 'ref561')">JSON Schema</button>
    
    </div>
    <div id="ref561descr" class="ref561 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 transfer failed because the receiver does not have enough allowance to ask for a transfer from the sender.</p><p><i>Id</i> : client.alpha.notEnoughAllowance<br/><i>Category</i> : permanent</p>
      </div><div id="ref561schema" class="ref561 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The sender does not have enough allowance
         An FA1.2 transfer failed because the receiver does not have enough
         allowance to ask for a transfer from the sender. */
      "kind": "permanent",
      "id": "client.alpha.notEnoughAllowance",
      "present": $positive_bignum,
      "required": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**The sender does not have enough balance**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref562descr', 'ref562')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref562schema', 'ref562')">JSON Schema</button>
    
    </div>
    <div id="ref562descr" class="ref562 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 transfer failed because the sender does not have enough balance.</p><p><i>Id</i> : client.alpha.notEnoughBalance<br/><i>Category</i> : permanent</p>
      </div><div id="ref562schema" class="ref562 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The sender does not have enough balance
         An FA1.2 transfer failed because the sender does not have enough
         balance. */
      "kind": "permanent",
      "id": "client.alpha.notEnoughBalance",
      "present": $positive_bignum,
      "required": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Not enough signatures were provided for this multisig action**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref563descr', 'ref563')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref563schema', 'ref563')">JSON Schema</button>
    
    </div>
    <div id="ref563descr" class="ref563 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>To run an action on a multisig contract, you should provide at least as many signatures as indicated by the threshold stored in the multisig contract.</p><p><i>Id</i> : client.alpha.notEnoughSignatures<br/><i>Category</i> : permanent</p>
      </div><div id="ref563schema" class="ref563 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Not enough signatures were provided for this multisig action
         To run an action on a multisig contract, you should provide at least
         as many signatures as indicated by the threshold stored in the
         multisig contract. */
      "kind": "permanent",
      "id": "client.alpha.notEnoughSignatures",
      "threshold_nsigs":
        [ integer ∈ [-2^30, 2^30], integer ∈ [-2^30, 2^30] ] }</pre>
    </div>



**Given threshold is too high**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref564descr', 'ref564')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref564schema', 'ref564')">JSON Schema</button>
    
    </div>
    <div id="ref564descr" class="ref564 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given threshold is higher than the number of keys, this would lead to a frozen multisig contract</p><p><i>Id</i> : client.alpha.thresholdTooHigh<br/><i>Category</i> : permanent</p>
      </div><div id="ref564schema" class="ref564 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Given threshold is too high
         The given threshold is higher than the number of keys, this would
         lead to a frozen multisig contract */
      "kind": "permanent",
      "id": "client.alpha.thresholdTooHigh",
      "received_expected":
        [ integer ∈ [-2^30, 2^30], integer ∈ [-2^30, 2^30] ] }</pre>
    </div>



**Duplicated TZT toplevel primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref565descr', 'ref565')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref565schema', 'ref565')">JSON Schema</button>
    
    </div>
    <div id="ref565descr" class="ref565 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A toplevel TZT primitive was used several times.</p><p><i>Id</i> : client.alpha.tzt.duplicated_toplevel<br/><i>Category</i> : permanent</p>
      </div><div id="ref565schema" class="ref565 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Duplicated TZT toplevel primitive
         A toplevel TZT primitive was used several times. */
      "kind": "permanent",
      "id": "client.alpha.tzt.duplicated_toplevel",
      "prim": $unistring,
      "node":
        { "parser_location":
            { /* Some */
              "start":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] },
              "stop":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] } }
            || null
            /* None */,
          "canonical_location": $micheline.location,
          "node": $micheline.alpha_client.expression } }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid format for a TZT toplevel primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref566descr', 'ref566')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref566schema', 'ref566')">JSON Schema</button>
    
    </div>
    <div id="ref566descr" class="ref566 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid format for a TZT toplevel primitive</p><p><i>Id</i> : client.alpha.tzt.invalid_format<br/><i>Category</i> : permanent</p>
      </div><div id="ref566schema" class="ref566 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid format for a TZT toplevel primitive
         Invalid format for a TZT toplevel primitive */
      "kind": "permanent",
      "id": "client.alpha.tzt.invalid_format",
      "prim": $unistring,
      "node":
        { "parser_location":
            { /* Some */
              "start":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] },
              "stop":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] } }
            || null
            /* None */,
          "canonical_location": $micheline.location,
          "node": $micheline.alpha_client.expression } }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid format for TZT toplevel entry**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref567descr', 'ref567')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref567schema', 'ref567')">JSON Schema</button>
    
    </div>
    <div id="ref567descr" class="ref567 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid format for a TZT toplevel entry</p><p><i>Id</i> : client.alpha.tzt.invalid_toplevel<br/><i>Category</i> : permanent</p>
      </div><div id="ref567schema" class="ref567 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid format for TZT toplevel entry
         Invalid format for a TZT toplevel entry */
      "kind": "permanent",
      "id": "client.alpha.tzt.invalid_toplevel",
      "parser_location":
        { /* Some */
          "start":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] },
          "stop":
            { "line": integer ∈ [0, 2^16-1],
              "column": integer ∈ [0, 2^16-1],
              "point": integer ∈ [0, 2^16-1],
              "byte": integer ∈ [0, 2^16-1] } }
        || null
        /* None */,
      "canonical_location": $micheline.location,
      "node": $micheline.alpha_client.expression }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing TZT mandatory toplevel primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref568descr', 'ref568')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref568schema', 'ref568')">JSON Schema</button>
    
    </div>
    <div id="ref568descr" class="ref568 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A mandatory toplevel TZT primitive was missing.</p><p><i>Id</i> : client.alpha.tzt.missing_mandatory<br/><i>Category</i> : permanent</p>
      </div><div id="ref568schema" class="ref568 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing TZT mandatory toplevel primitive
         A mandatory toplevel TZT primitive was missing. */
      "kind": "permanent",
      "id": "client.alpha.tzt.missing_mandatory",
      "prim": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unknown TZT toplevel primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref569descr', 'ref569')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref569schema', 'ref569')">JSON Schema</button>
    
    </div>
    <div id="ref569descr" class="ref569 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A toplevel TZT primitive was unknown.</p><p><i>Id</i> : client.alpha.tzt.unknown_toplevel<br/><i>Category</i> : permanent</p>
      </div><div id="ref569schema" class="ref569 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unknown TZT toplevel primitive
         A toplevel TZT primitive was unknown. */
      "kind": "permanent",
      "id": "client.alpha.tzt.unknown_toplevel",
      "prim": $unistring,
      "node":
        { "parser_location":
            { /* Some */
              "start":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] },
              "stop":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] } }
            || null
            /* None */,
          "canonical_location": $micheline.location,
          "node": $micheline.alpha_client.expression } }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong arity for a TZT toplevel primitive**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref570descr', 'ref570')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref570schema', 'ref570')">JSON Schema</button>
    
    </div>
    <div id="ref570descr" class="ref570 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A known toplevel TZT primitive was used with a bad arity.</p><p><i>Id</i> : client.alpha.tzt.wrong_toplevel_arity<br/><i>Category</i> : permanent</p>
      </div><div id="ref570schema" class="ref570 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong arity for a TZT toplevel primitive
         A known toplevel TZT primitive was used with a bad arity. */
      "kind": "permanent",
      "id": "client.alpha.tzt.wrong_toplevel_arity",
      "prim": $unistring,
      "node":
        { "parser_location":
            { /* Some */
              "start":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] },
              "stop":
                { "line": integer ∈ [0, 2^16-1],
                  "column": integer ∈ [0, 2^16-1],
                  "point": integer ∈ [0, 2^16-1],
                  "byte": integer ∈ [0, 2^16-1] } }
            || null
            /* None */,
          "canonical_location": $micheline.location,
          "node": $micheline.alpha_client.expression },
      "arity": integer ∈ [-2^15, 2^15-1] }
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha_client.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha_client.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $unistring,
           "args"?: [ $micheline.alpha_client.expression ... ],
           "annots"?: [ $unistring ... ] }
    $micheline.location:
      /* Canonical location in a Micheline expression
         The location of a node in a Micheline expression tree in prefix
         order, with zero being the root and adding one for every basic node,
         sequence and primitive application. */
      integer ∈ [-2^30, 2^30]
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**The allowance change is unsafe**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref571descr', 'ref571')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref571schema', 'ref571')">JSON Schema</button>
    
    </div>
    <div id="ref571descr" class="ref571 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An FA1.2 non-zero allowance change failed because the current allowance is non-zero. For more explanation on why such allowance change is unsafe, please look at TZIP-7 (https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md#approve).</p><p><i>Id</i> : client.alpha.unsafeAllowanceChange<br/><i>Category</i> : permanent</p>
      </div><div id="ref571schema" class="ref571 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* The allowance change is unsafe
         An FA1.2 non-zero allowance change failed because the current
         allowance is non-zero. For more explanation on why such allowance
         change is unsafe, please look at TZIP-7
         (https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md#approve). */
      "kind": "permanent",
      "id": "client.alpha.unsafeAllowanceChange",
      "previous": $positive_bignum }
    $positive_bignum:
      /* Positive big number
         Decimal representation of a positive big number */
      string</pre>
    </div>



**Unsupported multisig feature: generic call**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref572descr', 'ref572')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref572schema', 'ref572')">JSON Schema</button>
    
    </div>
    <div id="ref572descr" class="ref572 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This multisig contract does not feature calling contracts with arguments</p><p><i>Id</i> : client.alpha.unsupportedGenericMultisigFeature<br/><i>Category</i> : permanent</p>
      </div><div id="ref572schema" class="ref572 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported multisig feature: generic call
         This multisig contract does not feature calling contracts with
         arguments */
      "kind": "permanent",
      "id": "client.alpha.unsupportedGenericMultisigFeature",
      "arg": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unsupported multisig feature: generic call to non-unit entrypoint**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref573descr', 'ref573')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref573schema', 'ref573')">JSON Schema</button>
    
    </div>
    <div id="ref573descr" class="ref573 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This multisig contract does not feature calling contracts with arguments</p><p><i>Id</i> : client.alpha.unsupportedGenericMultisigFeatureTy<br/><i>Category</i> : permanent</p>
      </div><div id="ref573schema" class="ref573 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported multisig feature: generic call to non-unit entrypoint
         This multisig contract does not feature calling contracts with
         arguments */
      "kind": "permanent",
      "id": "client.alpha.unsupportedGenericMultisigFeatureTy",
      "ty": $micheline.alpha.michelson_v1.expression }
    $alpha.michelson.v1.primitives:
      "SHA256"
      | "PUSH"
      | "GET_AND_UPDATE"
      | "RENAME"
      | "False"
      | "CAST"
      | "ISNAT"
      | "address"
      | "PACK"
      | "EMIT"
      | "mutez"
      | "bls12_381_g1"
      | "Pair"
      | "IF_CONS"
      | "bool"
      | "bytes"
      | "storage"
      | "OR"
      | "view"
      | "UNPACK"
      | "ADD"
      | "DIP"
      | "map"
      | "MEM"
      | "BYTES"
      | "SENDER"
      | "ADDRESS"
      | "CDR"
      | "SAPLING_EMPTY_STATE"
      | "or"
      | "LOOP"
      | "contract"
      | "unit"
      | "SHA512"
      | "CREATE_ACCOUNT"
      | "BLAKE2B"
      | "READ_TICKET"
      | "LE"
      | "chain_id"
      | "timestamp"
      | "operation"
      | "set"
      | "CHAIN_ID"
      | "chest"
      | "SELF_ADDRESS"
      | "SOURCE"
      | "IMPLICIT_ACCOUNT"
      | "key"
      | "AMOUNT"
      | "CHECK_SIGNATURE"
      | "sapling_transaction_deprecated"
      | "LSR"
      | "EQ"
      | "Elt"
      | "OPEN_CHEST"
      | "NIL"
      | "CREATE_CONTRACT"
      | "LSL"
      | "TRANSFER_TOKENS"
      | "JOIN_TICKETS"
      | "SWAP"
      | "Some"
      | "parameter"
      | "pair"
      | "bls12_381_g2"
      | "VIEW"
      | "None"
      | "SLICE"
      | "int"
      | "ABS"
      | "lambda"
      | "DUG"
      | "list"
      | "CAR"
      | "GET"
      | "HASH_KEY"
      | "CONCAT"
      | "LEVEL"
      | "SAPLING_VERIFY_UPDATE"
      | "TOTAL_VOTING_POWER"
      | "Lambda_rec"
      | "SIZE"
      | "nat"
      | "STEPS_TO_QUOTA"
      | "IF_NONE"
      | "UNPAIR"
      | "CONS"
      | "Unit"
      | "CONTRACT"
      | "MUL"
      | "UPDATE"
      | "EXEC"
      | "PAIR"
      | "SPLIT_TICKET"
      | "RIGHT"
      | "key_hash"
      | "AND"
      | "NEG"
      | "option"
      | "BALANCE"
      | "SET_DELEGATE"
      | "NEVER"
      | "MIN_BLOCK_TIME"
      | "INT"
      | "chest_key"
      | "ITER"
      | "True"
      | "Right"
      | "Ticket"
      | "GT"
      | "DIG"
      | "tx_rollup_l2_address"
      | "SUB"
      | "EDIV"
      | "MAP"
      | "IF_LEFT"
      | "big_map"
      | "VOTING_POWER"
      | "LAMBDA_REC"
      | "Left"
      | "ticket"
      | "TICKET_DEPRECATED"
      | "bls12_381_fr"
      | "never"
      | "DUP"
      | "LEFT"
      | "constant"
      | "signature"
      | "SHA3"
      | "LAMBDA"
      | "NOT"
      | "KECCAK"
      | "NOW"
      | "NAT"
      | "GE"
      | "string"
      | "sapling_transaction"
      | "NEQ"
      | "IF"
      | "FAILWITH"
      | "NONE"
      | "SUB_MUTEZ"
      | "XOR"
      | "LOOP_LEFT"
      | "PAIRING_CHECK"
      | "DROP"
      | "EMPTY_BIG_MAP"
      | "UNIT"
      | "sapling_state"
      | "TICKET"
      | "EMPTY_MAP"
      | "APPLY"
      | "LT"
      | "SOME"
      | "IS_IMPLICIT_ACCOUNT"
      | "COMPARE"
      | "EMPTY_SET"
      | "SELF"
      | "code"
    $bignum:
      /* Big number
         Decimal representation of a big number */
      string
    $micheline.alpha.michelson_v1.expression:
      { /* Int */
        "int": $bignum }
      || { /* String */
           "string": $unistring }
      || { /* Bytes */
           "bytes": /^([a-zA-Z0-9][a-zA-Z0-9])*$/ }
      || [ $micheline.alpha.michelson_v1.expression ... ]
      /* Sequence */
      || { /* Prim__generic
              Generic primitive (any number of args with or without
              annotations) */
           "prim": $alpha.michelson.v1.primitives,
           "args"?: [ $micheline.alpha.michelson_v1.expression ... ],
           "annots"?: [ $unistring ... ] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unsupported multisig feature: running lambda**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref574descr', 'ref574')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref574schema', 'ref574')">JSON Schema</button>
    
    </div>
    <div id="ref574descr" class="ref574 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This multisig contract does not feature running lambdas</p><p><i>Id</i> : client.alpha.unsupportedGenericMultisigLambda<br/><i>Category</i> : permanent</p>
      </div><div id="ref574schema" class="ref574 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported multisig feature: running lambda
         This multisig contract does not feature running lambdas */
      "kind": "permanent",
      "id": "client.alpha.unsupportedGenericMultisigLambda",
      "lam": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot switch history mode**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref575descr', 'ref575')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref575schema', 'ref575')">JSON Schema</button>
    
    </div>
    <div id="ref575descr" class="ref575 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot switch history mode.</p><p><i>Id</i> : config_file.cannot_switch_history_mode<br/><i>Category</i> : permanent</p>
      </div><div id="ref575schema" class="ref575 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot switch history mode
         Cannot switch history mode. */
      "kind": "permanent",
      "id": "config_file.cannot_switch_history_mode",
      "previous_mode": $history_mode,
      "next_mode": $history_mode }
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
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || { /* rolling
              Rolling mode only retains the most recent cycles by
              periodically discarding older blocks to reduce the storage
              size. */
           "rolling":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || "full"
      || "rolling"</pre>
    </div>



**Unsupported context hash version**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref576descr', 'ref576')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref576schema', 'ref576')">JSON Schema</button>
    
    </div>
    <div id="ref576descr" class="ref576 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unsupported context hash version.</p><p><i>Id</i> : context_hash.unsupported_version<br/><i>Category</i> : permanent</p>
      </div><div id="ref576schema" class="ref576 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unsupported context hash version
         Unsupported context hash version. */
      "kind": "permanent",
      "id": "context_hash.unsupported_version",
      "version": $context_hash_version }
    $context_hash_version:
      /* A version number for the context hash computation */
      integer ∈ [0, 2^16-1]</pre>
    </div>



**Invalid_precomputation_hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref577descr', 'ref577')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref577schema', 'ref577')">JSON Schema</button>
    
    </div>
    <div id="ref577descr" class="ref577 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unexpected precomputation hash</p><p><i>Id</i> : dal.node.invalid_precomputation_hash<br/><i>Category</i> : permanent</p>
      </div><div id="ref577schema" class="ref577 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid_precomputation_hash
         Unexpected precomputation hash */
      "kind": "permanent",
      "id": "dal.node.invalid_precomputation_hash",
      "given": $unistring,
      "expected": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Trusted setup loading failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref578descr', 'ref578')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref578schema', 'ref578')">JSON Schema</button>
    
    </div>
    <div id="ref578descr" class="ref578 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Trusted setup failed to load</p><p><i>Id</i> : dal.node.trusted_setup_loading_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref578schema" class="ref578 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Trusted setup loading failed
         Trusted setup failed to load */
      "kind": "permanent",
      "id": "dal.node.trusted_setup_loading_failed",
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Download failed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref579descr', 'ref579')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref579schema', 'ref579')">JSON Schema</button>
    
    </div>
    <div id="ref579descr" class="ref579 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Download failed</p><p><i>Id</i> : dal_node.download_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref579schema" class="ref579 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Download failed
         Download failed */
      "kind": "permanent",
      "id": "dal_node.download_error",
      "error_code": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**SHA256 of downloaded file is not the expected one**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref580descr', 'ref580')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref580schema', 'ref580')">JSON Schema</button>
    
    </div>
    <div id="ref580descr" class="ref580 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>SHA256 of downloaded file is not the expected one</p><p><i>Id</i> : dal_node.mismatched_sha<br/><i>Category</i> : permanent</p>
      </div><div id="ref580schema" class="ref580 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* SHA256 of downloaded file is not the expected one
         SHA256 of downloaded file is not the expected one */
      "kind": "permanent",
      "id": "dal_node.mismatched_sha",
      "expected_sha": $unistring,
      "computed_sha": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Decoding error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref581descr', 'ref581')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref581schema', 'ref581')">JSON Schema</button>
    
    </div>
    <div id="ref581descr" class="ref581 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error while decoding a value</p><p><i>Id</i> : decoding_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref581schema" class="ref581 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Decoding error
         Error while decoding a value */
      "kind": "permanent",
      "id": "decoding_error",
      "error":
        { /* Not enough data */
           }
        || { /* Extra bytes */
              }
        || { /* No case matched */
              }
        || integer ∈ [-2^30, 2^30]
        /* Unexpected tag */
        || { /* Invalid int */
             "min": integer ∈ [-2^30, 2^30],
             "v": integer ∈ [-2^30, 2^30],
             "max": integer ∈ [-2^30, 2^30] }
        || { /* Invalid float */
             "min": number,
             "v": number,
             "max": number }
        || { /* Trailing zero */
              }
        || { /* Size limit exceeded */
              }
        || { /* List too long */
              }
        || { /* Array too long */
              }
        || $unistring
        /* Exception raised in user function */
        || $unistring
        /* User invariant guard */ }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cycle too far in future**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref582descr', 'ref582')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref582schema', 'ref582')">JSON Schema</button>
    
    </div>
    <div id="ref582descr" class="ref582 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Requested cycle is too far in the future: its baking rights have not been determined yet.</p><p><i>Id</i> : delegators_contribution.cycle_too_far_in_future<br/><i>Category</i> : temporary</p>
      </div><div id="ref582schema" class="ref582 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cycle too far in future
         Requested cycle is too far in the future: its baking rights have not
         been determined yet. */
      "kind": "temporary",
      "id": "delegators_contribution.cycle_too_far_in_future",
      ... }</pre>
    </div>



**Cycle too far in past**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref583descr', 'ref583')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref583schema', 'ref583')">JSON Schema</button>
    
    </div>
    <div id="ref583descr" class="ref583 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The data needed for the computation is too far in the past: the node no longer has the data (block or context) required to compute the delegators' contribution. Either you are in rolling mode and didn't keep enough cycles, or you recently imported a fresh snapshot, which is missing the relevant contexts</p><p><i>Id</i> : delegators_contribution.cycle_too_far_in_past<br/><i>Category</i> : temporary</p>
      </div><div id="ref583schema" class="ref583 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cycle too far in past
         The data needed for the computation is too far in the past: the node
         no longer has the data (block or context) required to compute the
         delegators' contribution. Either you are in rolling mode and didn't
         keep enough cycles, or you recently imported a fresh snapshot, which
         is missing the relevant contexts */
      "kind": "temporary",
      "id": "delegators_contribution.cycle_too_far_in_past",
      ... }</pre>
    </div>



**Protocol not supported by delegators_contribution**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref584descr', 'ref584')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref584schema', 'ref584')">JSON Schema</button>
    
    </div>
    <div id="ref584descr" class="ref584 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>This RPC call involves a protocol that does not support delegators_contribution.</p><p><i>Id</i> : delegators_contribution.protocol_not_supported<br/><i>Category</i> : temporary</p>
      </div><div id="ref584schema" class="ref584 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Protocol not supported by delegators_contribution
         This RPC call involves a protocol that does not support
         delegators_contribution. */
      "kind": "temporary",
      "id": "delegators_contribution.protocol_not_supported",
      "protocol_hash": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Encoding error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref585descr', 'ref585')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref585schema', 'ref585')">JSON Schema</button>
    
    </div>
    <div id="ref585descr" class="ref585 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error while encoding a value for a socket</p><p><i>Id</i> : encoding_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref585schema" class="ref585 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Encoding error
         Error while encoding a value for a socket */
      "kind": "permanent",
      "id": "encoding_error",
      "error":
        { /* Size limit exceeded */
           }
        || { /* No case matched */
              }
        || { /* Invalid int */
             "min": integer ∈ [-2^30, 2^30],
             "v": integer ∈ [-2^30, 2^30],
             "max": integer ∈ [-2^30, 2^30] }
        || { /* Invalid float */
             "min": number,
             "v": number,
             "max": number }
        || { /* Invalid bytes length */
             "expected": integer ∈ [-2^30, 2^30],
             "found": integer ∈ [-2^30, 2^30] }
        || { /* Invalid string length */
             "expected": integer ∈ [-2^30, 2^30],
             "found": integer ∈ [-2^30, 2^30] }
        || { /* Invalid natural */
              }
        || { /* List too long or too short */
              }
        || { /* Array too long or too short */
              }
        || $unistring
        /* Exception raised in user function */ }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot create socket**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref586descr', 'ref586')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref586schema', 'ref586')">JSON Schema</button>
    
    </div>
    <div id="ref586descr" class="ref586 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot create socket for external process.</p><p><i>Id</i> : external_process.cannot_create_socket<br/><i>Category</i> : temporary</p>
      </div><div id="ref586schema" class="ref586 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot create socket
         Cannot create socket for external process. */
      "kind": "temporary",
      "id": "external_process.cannot_create_socket",
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Socket path too long**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref587descr', 'ref587')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref587schema', 'ref587')">JSON Schema</button>
    
    </div>
    <div id="ref587descr" class="ref587 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Socket path too long.</p><p><i>Id</i> : external_process.socket_path_too_long<br/><i>Category</i> : temporary</p>
      </div><div id="ref587schema" class="ref587 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Socket path too long
         Socket path too long. */
      "kind": "temporary",
      "id": "external_process.socket_path_too_long",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong permission for socket path**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref588descr', 'ref588')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref588schema', 'ref588')">JSON Schema</button>
    
    </div>
    <div id="ref588descr" class="ref588 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Wrong permission for socket path.</p><p><i>Id</i> : external_process.socket_path_wrong_permission<br/><i>Category</i> : temporary</p>
      </div><div id="ref588schema" class="ref588 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong permission for socket path
         Wrong permission for socket path. */
      "kind": "temporary",
      "id": "external_process.socket_path_wrong_permission",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Exception**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref589descr', 'ref589')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref589schema', 'ref589')">JSON Schema</button>
    
    </div>
    <div id="ref589descr" class="ref589 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Exception safely wrapped in an error</p><p><i>Id</i> : failure<br/><i>Category</i> : temporary</p>
      </div><div id="ref589schema" class="ref589 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Exception
         Exception safely wrapped in an error */
      "kind": "temporary",
      "id": "failure",
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Injection operation error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref590descr', 'ref590')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref590schema', 'ref590')">JSON Schema</button>
    
    </div>
    <div id="ref590descr" class="ref590 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The injection of this operation failed. The error trace are the following errors in this list.</p><p><i>Id</i> : injection_operation_error_case<br/><i>Category</i> : permanent</p>
      </div><div id="ref590schema" class="ref590 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Injection operation error
         The injection of this operation failed. The error trace are the
         following errors in this list. */
      "kind": "permanent",
      "id": "injection_operation_error_case",
      "oph": $Operation_hash }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Injection operation succeed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref591descr', 'ref591')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref591schema', 'ref591')">JSON Schema</button>
    
    </div>
    <div id="ref591descr" class="ref591 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The injection of this operation succeed among a list of injections containing at least one error.</p><p><i>Id</i> : injection_operation_succeed_case<br/><i>Category</i> : permanent</p>
      </div><div id="ref591schema" class="ref591 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Injection operation succeed
         The injection of this operation succeed among a list of injections
         containing at least one error. */
      "kind": "permanent",
      "id": "injection_operation_succeed_case",
      "oph": $Operation_hash }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Injection operations error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref592descr', 'ref592')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref592schema', 'ref592')">JSON Schema</button>
    
    </div>
    <div id="ref592descr" class="ref592 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>While injecting several operations at once, one or several injections failed.</p><p><i>Id</i> : injection_operations_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref592schema" class="ref592 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Injection operations error
         While injecting several operations at once, one or several
         injections failed. */
      "kind": "permanent",
      "id": "injection_operations_error",
      ... }</pre>
    </div>



**Internal Event Sink: Wrong Activation URI**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref593descr', 'ref593')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref593schema', 'ref593')">JSON Schema</button>
    
    </div>
    <div id="ref593descr" class="ref593 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Activation of an Internal Event SINK with an URI failed</p><p><i>Id</i> : internal-event-activation-error<br/><i>Category</i> : permanent</p>
      </div><div id="ref593schema" class="ref593 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    /* Internal Event Sink: Wrong Activation URI
       Activation of an Internal Event SINK with an URI failed */
    { /* missing-uri-scheme */
      "kind": "permanent",
      "id": "internal-event-activation-error",
      "missing-uri-scheme": { "uri": $unistring } }
    || { /* non-registered-uri-scheme */
         "kind": "permanent",
         "id": "internal-event-activation-error",
         "non-registered-uri-scheme": { "uri": $unistring } }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**IO error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref594descr', 'ref594')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref594schema', 'ref594')">JSON Schema</button>
    
    </div>
    <div id="ref594descr" class="ref594 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>IO error</p><p><i>Id</i> : io_error<br/><i>Category</i> : permanent</p>
      </div><div id="ref594schema" class="ref594 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* IO error
         IO error */
      "kind": "permanent",
      "id": "io_error",
      "action": "open" | "close" | "Rename" | "Unlink" | "lock",
      "unix_code":
        { /* E2BIG */
          "unix-error": "E2BIG" }
        || { /* EACCES */
             "unix-error": "EACCES" }
        || { /* EAGAIN */
             "unix-error": "EAGAIN" }
        || { /* EBADF */
             "unix-error": "EBADF" }
        || { /* EBUSY */
             "unix-error": "EBUSY" }
        || { /* ECHILD */
             "unix-error": "ECHILD" }
        || { /* EDEADLK */
             "unix-error": "EDEADLK" }
        || { /* EDOM */
             "unix-error": "EDOM" }
        || { /* EEXIST */
             "unix-error": "EEXIST" }
        || { /* EFAULT */
             "unix-error": "EFAULT" }
        || { /* EFBIG */
             "unix-error": "EFBIG" }
        || { /* EINTR */
             "unix-error": "EINTR" }
        || { /* EINVAL */
             "unix-error": "EINVAL" }
        || { /* EIO */
             "unix-error": "EIO" }
        || { /* EISDIR */
             "unix-error": "EISDIR" }
        || { /* EMFILE */
             "unix-error": "EMFILE" }
        || { /* EMLINK */
             "unix-error": "EMLINK" }
        || { /* ENAMETOOLONG */
             "unix-error": "ENAMETOOLONG" }
        || { /* ENFILE */
             "unix-error": "ENFILE" }
        || { /* ENODEV */
             "unix-error": "ENODEV" }
        || { /* ENOENT */
             "unix-error": "ENOENT" }
        || { /* ENOEXEC */
             "unix-error": "ENOEXEC" }
        || { /* ENOLCK */
             "unix-error": "ENOLCK" }
        || { /* ENOMEM */
             "unix-error": "ENOMEM" }
        || { /* ENOSPC */
             "unix-error": "ENOSPC" }
        || { /* ENOSYS */
             "unix-error": "ENOSYS" }
        || { /* ENOTDIR */
             "unix-error": "ENOTDIR" }
        || { /* ENOTEMPTY */
             "unix-error": "ENOTEMPTY" }
        || { /* ENOTTY */
             "unix-error": "ENOTTY" }
        || { /* ENXIO */
             "unix-error": "ENXIO" }
        || { /* EPERM */
             "unix-error": "EPERM" }
        || { /* EPIPE */
             "unix-error": "EPIPE" }
        || { /* ERANGE */
             "unix-error": "ERANGE" }
        || { /* EROFS */
             "unix-error": "EROFS" }
        || { /* ESPIPE */
             "unix-error": "ESPIPE" }
        || { /* ESRCH */
             "unix-error": "ESRCH" }
        || { /* EXDEV */
             "unix-error": "EXDEV" }
        || { /* EWOULDBLOCK */
             "unix-error": "EWOULDBLOCK" }
        || { /* EINPROGRESS */
             "unix-error": "EINPROGRESS" }
        || { /* EALREADY */
             "unix-error": "EALREADY" }
        || { /* ENOTSOCK */
             "unix-error": "ENOTSOCK" }
        || { /* EDESTADDRREQ */
             "unix-error": "EDESTADDRREQ" }
        || { /* EMSGSIZE */
             "unix-error": "EMSGSIZE" }
        || { /* EPROTOTYPE */
             "unix-error": "EPROTOTYPE" }
        || { /* ENOPROTOOPT */
             "unix-error": "ENOPROTOOPT" }
        || { /* EPROTONOSUPPORT */
             "unix-error": "EPROTONOSUPPORT" }
        || { /* ESOCKTNOSUPPORT */
             "unix-error": "ESOCKTNOSUPPORT" }
        || { /* EOPNOTSUPP */
             "unix-error": "EOPNOTSUPP" }
        || { /* EPFNOSUPPORT */
             "unix-error": "EPFNOSUPPORT" }
        || { /* EAFNOSUPPORT */
             "unix-error": "EAFNOSUPPORT" }
        || { /* EADDRINUSE */
             "unix-error": "EADDRINUSE" }
        || { /* EADDRNOTAVAIL */
             "unix-error": "EADDRNOTAVAIL" }
        || { /* ENETDOWN */
             "unix-error": "ENETDOWN" }
        || { /* ENETUNREACH */
             "unix-error": "ENETUNREACH" }
        || { /* ENETRESET */
             "unix-error": "ENETRESET" }
        || { /* ECONNABORTED */
             "unix-error": "ECONNABORTED" }
        || { /* ECONNRESET */
             "unix-error": "ECONNRESET" }
        || { /* ENOBUFS */
             "unix-error": "ENOBUFS" }
        || { /* EISCONN */
             "unix-error": "EISCONN" }
        || { /* ENOTCONN */
             "unix-error": "ENOTCONN" }
        || { /* ESHUTDOWN */
             "unix-error": "ESHUTDOWN" }
        || { /* ETOOMANYREFS */
             "unix-error": "ETOOMANYREFS" }
        || { /* ETIMEDOUT */
             "unix-error": "ETIMEDOUT" }
        || { /* ECONNREFUSED */
             "unix-error": "ECONNREFUSED" }
        || { /* EHOSTDOWN */
             "unix-error": "EHOSTDOWN" }
        || { /* EHOSTUNREACH */
             "unix-error": "EHOSTUNREACH" }
        || { /* ELOOP */
             "unix-error": "ELOOP" }
        || { /* EOVERFLOW */
             "unix-error": "EOVERFLOW" }
        || { /* EUNKNOWNERR */
             "unix-error": { "EUNKNOWNERR": integer ∈ [-2^30, 2^30] } },
      "caller": $unistring,
      "arg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Json decoding error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref595descr', 'ref595')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref595schema', 'ref595')">JSON Schema</button>
    
    </div>
    <div id="ref595descr" class="ref595 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The input string is not a valid JSON value</p><p><i>Id</i> : json_decoding_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref595schema" class="ref595 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Json decoding error
         The input string is not a valid JSON value */
      "kind": "temporary",
      "id": "json_decoding_error",
      "input": $unistring,
      "error": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Operation conflict**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref596descr', 'ref596')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref596schema', 'ref596')">JSON Schema</button>
    
    </div>
    <div id="ref596descr" class="ref596 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation cannot be added because the mempool already contains a conflicting operation.</p><p><i>Id</i> : prevalidation.operation_conflict<br/><i>Category</i> : temporary</p>
      </div><div id="ref596schema" class="ref596 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation conflict
         The operation cannot be added because the mempool already contains a
         conflicting operation. */
      "kind": "temporary",
      "id": "prevalidation.operation_conflict",
      "new_hash": $Operation_hash,
      "needed_fee_in_mutez"?: $int64 }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $int64:
      /* 64 bit integers
         Decimal representation of 64 bit integers */
      string
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Operation replacement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref597descr', 'ref597')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref597schema', 'ref597')">JSON Schema</button>
    
    </div>
    <div id="ref597descr" class="ref597 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operation has been replaced.</p><p><i>Id</i> : prevalidation.operation_replacement<br/><i>Category</i> : temporary</p>
      </div><div id="ref597schema" class="ref597 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Operation replacement
         The operation has been replaced. */
      "kind": "temporary",
      "id": "prevalidation.operation_replacement",
      "old_hash": $Operation_hash,
      "new_hash": $Operation_hash }
    $Operation_hash:
      /* A Tezos operation ID (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent operation hashes**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref598descr', 'ref598')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref598schema', 'ref598')">JSON Schema</button>
    
    </div>
    <div id="ref598descr" class="ref598 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The operations given do not match their hashes.</p><p><i>Id</i> : snapshots.inconsistent_operation_hashes<br/><i>Category</i> : permanent</p>
      </div><div id="ref598schema" class="ref598 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent operation hashes
         The operations given do not match their hashes. */
      "kind": "permanent",
      "id": "snapshots.inconsistent_operation_hashes",
      "expected_operation_hashes": $Operation_list_list_hash,
      "received_operation_hashes": $Operation_list_list_hash }
    $Operation_list_list_hash:
      /* A list of list of operations (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected size of decoded value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref599descr', 'ref599')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref599schema', 'ref599')">JSON Schema</button>
    
    </div>
    <div id="ref599descr" class="ref599 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A decoded value comes from a buffer of unexpected size.</p><p><i>Id</i> : socket.unexpected_size_of_decoded_value<br/><i>Category</i> : permanent</p>
      </div><div id="ref599schema" class="ref599 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected size of decoded value
         A decoded value comes from a buffer of unexpected size. */
      "kind": "permanent",
      "id": "socket.unexpected_size_of_decoded_value" }</pre>
    </div>



**Cannod load stored data**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref600descr', 'ref600')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref600schema', 'ref600')">JSON Schema</button>
    
    </div>
    <div id="ref600descr" class="ref600 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to load stored data</p><p><i>Id</i> : stdlib_unix.cannot_load_stored_data<br/><i>Category</i> : permanent</p>
      </div><div id="ref600schema" class="ref600 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannod load stored data
         Failed to load stored data */
      "kind": "permanent",
      "id": "stdlib_unix.cannot_load_stored_data",
      "path": $unistring,
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Key value stored was closed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref601descr', 'ref601')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref601schema', 'ref601')">JSON Schema</button>
    
    </div>
    <div id="ref601descr" class="ref601 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Action performed while the store is closed</p><p><i>Id</i> : stdlib_unix.closed<br/><i>Category</i> : permanent</p>
      </div><div id="ref601schema" class="ref601 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Key value stored was closed
         Action performed while the store is closed */
      "kind": "permanent",
      "id": "stdlib_unix.closed",
      "action": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**key value store data is corrupted**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref602descr', 'ref602')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref602schema', 'ref602')">JSON Schema</button>
    
    </div>
    <div id="ref602descr" class="ref602 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A data of the key value store was corrupted</p><p><i>Id</i> : stdlib_unix.corrupted_data<br/><i>Category</i> : permanent</p>
      </div><div id="ref602schema" class="ref602 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* key value store data is corrupted
         A data of the key value store was corrupted */
      "kind": "permanent",
      "id": "stdlib_unix.corrupted_data",
      "action": $unistring,
      "filepath": $unistring,
      "index": integer ∈ [-2^30, 2^30] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**key value store failed to decode the data**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref603descr', 'ref603')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref603schema', 'ref603')">JSON Schema</button>
    
    </div>
    <div id="ref603descr" class="ref603 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A failure was triggered while decoding the data</p><p><i>Id</i> : stdlib_unix.decoding_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref603schema" class="ref603 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* key value store failed to decode the data
         A failure was triggered while decoding the data */
      "kind": "permanent",
      "id": "stdlib_unix.decoding_failed",
      "filepath": $unistring,
      "index": integer ∈ [-2^30, 2^30] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**key value store failed to encode the data**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref604descr', 'ref604')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref604schema', 'ref604')">JSON Schema</button>
    
    </div>
    <div id="ref604descr" class="ref604 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A failure was triggered while encoding the data</p><p><i>Id</i> : stdlib_unix.encoding_failed<br/><i>Category</i> : permanent</p>
      </div><div id="ref604schema" class="ref604 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* key value store failed to encode the data
         A failure was triggered while encoding the data */
      "kind": "permanent",
      "id": "stdlib_unix.encoding_failed",
      "filepath": $unistring,
      "index": integer ∈ [-2^30, 2^30] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing stored data from KVS**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref605descr', 'ref605')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref605schema', 'ref605')">JSON Schema</button>
    
    </div>
    <div id="ref605descr" class="ref605 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to load stored data from KVS</p><p><i>Id</i> : stdlib_unix.missing_kvs_data<br/><i>Category</i> : permanent</p>
      </div><div id="ref605schema" class="ref605 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing stored data from KVS
         Failed to load stored data from KVS */
      "kind": "permanent",
      "id": "stdlib_unix.missing_kvs_data",
      "filepath": $unistring,
      "index": integer ∈ [-2^30, 2^30] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Wrong encoded value size**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref606descr', 'ref606')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref606schema', 'ref606')">JSON Schema</button>
    
    </div>
    <div id="ref606descr" class="ref606 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Try to write a value that does not match the expected size</p><p><i>Id</i> : stdlib_unix.wrong_encoded_value_size<br/><i>Category</i> : permanent</p>
      </div><div id="ref606schema" class="ref606 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong encoded value size
         Try to write a value that does not match the expected size */
      "kind": "permanent",
      "id": "stdlib_unix.wrong_encoded_value_size",
      "file": $unistring,
      "index": integer ∈ [-2^30, 2^30],
      "expected_size ": integer ∈ [-2^30, 2^30],
      "got_size": integer ∈ [-2^30, 2^30] }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Bad head invariant**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref607descr', 'ref607')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref607schema', 'ref607')">JSON Schema</button>
    
    </div>
    <div id="ref607descr" class="ref607 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Bad invariant during Store.set_head</p><p><i>Id</i> : store.bad_head_invariant<br/><i>Category</i> : permanent</p>
      </div><div id="ref607schema" class="ref607 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad head invariant
         Bad invariant during Store.set_head */
      "kind": "permanent",
      "id": "store.bad_head_invariant" }</pre>
    </div>



**Bad level**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref608descr', 'ref608')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref608schema', 'ref608')">JSON Schema</button>
    
    </div>
    <div id="ref608descr" class="ref608 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Read a block at level past our current head.</p><p><i>Id</i> : store.bad_level<br/><i>Category</i> : permanent</p>
      </div><div id="ref608schema" class="ref608 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad level
         Read a block at level past our current head. */
      "kind": "permanent",
      "id": "store.bad_level",
      "head_level": integer ∈ [-2^31-1, 2^31],
      "given_level": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Bad ordering invariant**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref609descr', 'ref609')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref609schema', 'ref609')">JSON Schema</button>
    
    </div>
    <div id="ref609descr" class="ref609 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The ordering invariant does not hold</p><p><i>Id</i> : store.bad_ordering_invariant<br/><i>Category</i> : permanent</p>
      </div><div id="ref609schema" class="ref609 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Bad ordering invariant
         The ordering invariant does not hold */
      "kind": "permanent",
      "id": "store.bad_ordering_invariant",
      "genesis": integer ∈ [-2^31-1, 2^31],
      "caboose": integer ∈ [-2^31-1, 2^31],
      "savepoint": integer ∈ [-2^31-1, 2^31],
      "cementing_highwatermark":
        integer ∈ [-2^31-1, 2^31] /* Some */ || null /* None */,
      "checkpoint": integer ∈ [-2^31-1, 2^31],
      "head": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Block not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref610descr', 'ref610')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref610schema', 'ref610')">JSON Schema</button>
    
    </div>
    <div id="ref610descr" class="ref610 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Block not found</p><p><i>Id</i> : store.block_not_found<br/><i>Category</i> : permanent</p>
      </div><div id="ref610schema" class="ref610 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Block not found
         Block not found */
      "kind": "permanent",
      "id": "store.block_not_found",
      "block_not_found": [ $block_hash, integer ∈ [-2^30, 2^30] ] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot cement blocks**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref611descr', 'ref611')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref611schema', 'ref611')">JSON Schema</button>
    
    </div>
    <div id="ref611descr" class="ref611 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot cement blocks</p><p><i>Id</i> : store.cannot_cement_blocks<br/><i>Category</i> : temporary</p>
      </div><div id="ref611schema" class="ref611 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot cement blocks
         Cannot cement blocks */
      "kind": "temporary",
      "id": "store.cannot_cement_blocks",
      "reason": "higher_cemented" | "empty" }</pre>
    </div>



**Cannot cement blocks metadata**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref612descr', 'ref612')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref612schema', 'ref612')">JSON Schema</button>
    
    </div>
    <div id="ref612descr" class="ref612 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot cement blocks metadata</p><p><i>Id</i> : store.cannot_cement_blocks_metadata<br/><i>Category</i> : temporary</p>
      </div><div id="ref612schema" class="ref612 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot cement blocks metadata
         Cannot cement blocks metadata */
      "kind": "temporary",
      "id": "store.cannot_cement_blocks_metadata",
      "reason": "not_cemented" | "empty" }</pre>
    </div>



**Cannot checkout context**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref613descr', 'ref613')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref613schema', 'ref613')">JSON Schema</button>
    
    </div>
    <div id="ref613descr" class="ref613 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to checkout context</p><p><i>Id</i> : store.cannot_checkout_context<br/><i>Category</i> : temporary</p>
      </div><div id="ref613schema" class="ref613 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot checkout context
         Failed to checkout context */
      "kind": "temporary",
      "id": "store.cannot_checkout_context",
      "block_hash": $block_hash,
      "context_hash": $Context_hash }
    $Context_hash:
      /* A hash of context (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot encode block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref614descr', 'ref614')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref614schema', 'ref614')">JSON Schema</button>
    
    </div>
    <div id="ref614descr" class="ref614 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to encode block</p><p><i>Id</i> : store.cannot_encode_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref614schema" class="ref614 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot encode block
         Failed to encode block */
      "kind": "temporary",
      "id": "store.cannot_encode_block",
      "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot find chain dir**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref615descr', 'ref615')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref615schema', 'ref615')">JSON Schema</button>
    
    </div>
    <div id="ref615descr" class="ref615 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot find chain dir while upgrading storage</p><p><i>Id</i> : store.cannot_find_chain_dir<br/><i>Category</i> : permanent</p>
      </div><div id="ref615schema" class="ref615 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot find chain dir
         Cannot find chain dir while upgrading storage */
      "kind": "permanent",
      "id": "store.cannot_find_chain_dir",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot find protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref616descr', 'ref616')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref616schema', 'ref616')">JSON Schema</button>
    
    </div>
    <div id="ref616descr" class="ref616 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot find protocol</p><p><i>Id</i> : store.cannot_find_protocol<br/><i>Category</i> : temporary</p>
      </div><div id="ref616schema" class="ref616 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot find protocol
         Cannot find protocol */
      "kind": "temporary",
      "id": "store.cannot_find_protocol",
      "protocol_level": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Cannot fork testchain**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref617descr', 'ref617')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref617schema', 'ref617')">JSON Schema</button>
    
    </div>
    <div id="ref617descr" class="ref617 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to fork testchain</p><p><i>Id</i> : store.cannot_fork_testchain<br/><i>Category</i> : temporary</p>
      </div><div id="ref617schema" class="ref617 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot fork testchain
         Failed to fork testchain */
      "kind": "temporary",
      "id": "store.cannot_fork_testchain",
      "chain_id": $Chain_id }
    $Chain_id:
      /* Network identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot instanciate temporary floating store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref618descr', 'ref618')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref618schema', 'ref618')">JSON Schema</button>
    
    </div>
    <div id="ref618descr" class="ref618 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot instanciate temporary floating store</p><p><i>Id</i> : store.cannot_instanciate_temporary_floating_store<br/><i>Category</i> : temporary</p>
      </div><div id="ref618schema" class="ref618 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot instanciate temporary floating store
         Cannot instanciate temporary floating store */
      "kind": "temporary",
      "id": "store.cannot_instanciate_temporary_floating_store" }</pre>
    </div>



**Cannot load degraded store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref619descr', 'ref619')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref619schema', 'ref619')">JSON Schema</button>
    
    </div>
    <div id="ref619descr" class="ref619 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot load a degraded block store.</p><p><i>Id</i> : store.cannot_load_degraded_store<br/><i>Category</i> : permanent</p>
      </div><div id="ref619schema" class="ref619 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot load degraded store
         Cannot load a degraded block store. */
      "kind": "permanent",
      "id": "store.cannot_load_degraded_store" }</pre>
    </div>



**Cannot load testchain**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref620descr', 'ref620')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref620schema', 'ref620')">JSON Schema</button>
    
    </div>
    <div id="ref620descr" class="ref620 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to load the testchain</p><p><i>Id</i> : store.cannot_load_testchain<br/><i>Category</i> : temporary</p>
      </div><div id="ref620schema" class="ref620 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot load testchain
         Failed to load the testchain */
      "kind": "temporary",
      "id": "store.cannot_load_testchain",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot merge store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref621descr', 'ref621')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref621schema', 'ref621')">JSON Schema</button>
    
    </div>
    <div id="ref621descr" class="ref621 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot merge the store.</p><p><i>Id</i> : store.cannot_merge_store<br/><i>Category</i> : permanent</p>
      </div><div id="ref621schema" class="ref621 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot merge store
         Cannot merge the store. */
      "kind": "permanent",
      "id": "store.cannot_merge_store",
      "status": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot retrieve savepoint**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref622descr', 'ref622')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref622schema', 'ref622')">JSON Schema</button>
    
    </div>
    <div id="ref622descr" class="ref622 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to retrieve savepoint</p><p><i>Id</i> : store.cannot_retrieve_savepoint<br/><i>Category</i> : temporary</p>
      </div><div id="ref622schema" class="ref622 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot retrieve savepoint
         Failed to retrieve savepoint */
      "kind": "temporary",
      "id": "store.cannot_retrieve_savepoint",
      "level": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Cannot set target**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref623descr', 'ref623')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref623schema', 'ref623')">JSON Schema</button>
    
    </div>
    <div id="ref623descr" class="ref623 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given block to be set as target is invalid.</p><p><i>Id</i> : store.cannot_set_target<br/><i>Category</i> : temporary</p>
      </div><div id="ref623schema" class="ref623 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot set target
         The given block to be set as target is invalid. */
      "kind": "temporary",
      "id": "store.cannot_set_target",
      "given_target": [ $block_hash, integer ∈ [-2^31-1, 2^31] ] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot store block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref624descr', 'ref624')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref624schema', 'ref624')">JSON Schema</button>
    
    </div>
    <div id="ref624descr" class="ref624 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to store block</p><p><i>Id</i> : store.cannot_store_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref624schema" class="ref624 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot store block
         Failed to store block */
      "kind": "temporary",
      "id": "store.cannot_store_block",
      "hash": $block_hash,
      "err":
        { /* Invalid operations length */
          "validation_passes": integer ∈ [-2^30, 2^30],
          "operations": integer ∈ [-2^30, 2^30] }
        || { /* Invalid operations data length */
             "validation_passes": integer ∈ [-2^30, 2^30],
             "operations_data": integer ∈ [-2^30, 2^30] }
        || { /* Inconsistent operations length */
             "operations_lengths": $unistring,
             "operations_data_lengths": $unistring } }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Cannot update floating store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref625descr', 'ref625')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref625schema', 'ref625')">JSON Schema</button>
    
    </div>
    <div id="ref625descr" class="ref625 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot update floating store</p><p><i>Id</i> : store.cannot_update_floating_store<br/><i>Category</i> : temporary</p>
      </div><div id="ref625schema" class="ref625 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot update floating store
         Cannot update floating store */
      "kind": "temporary",
      "id": "store.cannot_update_floating_store" }</pre>
    </div>



**Cannot write in readonly**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref626descr', 'ref626')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref626schema', 'ref626')">JSON Schema</button>
    
    </div>
    <div id="ref626descr" class="ref626 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot write data in store when in readonly</p><p><i>Id</i> : store.cannot_write_in_readonly<br/><i>Category</i> : permanent</p>
      </div><div id="ref626schema" class="ref626 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Cannot write in readonly
         Cannot write data in store when in readonly */
      "kind": "permanent",
      "id": "store.cannot_write_in_readonly" }</pre>
    </div>



**Corrupted store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref627descr', 'ref627')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref627schema', 'ref627')">JSON Schema</button>
    
    </div>
    <div id="ref627descr" class="ref627 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The store is corrupted</p><p><i>Id</i> : store.corrupted_store<br/><i>Category</i> : permanent</p>
      </div><div id="ref627schema" class="ref627 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Corrupted store
         The store is corrupted */
      "kind": "permanent",
      "id": "store.corrupted_store",
      "kind":
        { /* Inferred_head */
          "hash": $block_hash,
          "level": integer ∈ [-2^31-1, 2^31] }
        || { /* Cannot_find_floating_savepoint */
              }
        || { /* Cannot_find_savepoint_candidate */
              }
        || { /* Cannot_find_floating_caboose */
              }
        || { /* Cannot_find_caboose_candidate */
              }
        || { /* Cannot_find_block_with_metadata */
              }
        || { /* Cannot_find_activation_block */
             "proto_level": integer ∈ [-2^30, 2^30] }
        || { /* Missing_genesis */
              } }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Fail to get live blocks**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref628descr', 'ref628')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref628schema', 'ref628')">JSON Schema</button>
    
    </div>
    <div id="ref628descr" class="ref628 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unable to compute live blocks from a given block.</p><p><i>Id</i> : store.failed_to_get_live_blocks<br/><i>Category</i> : permanent</p>
      </div><div id="ref628schema" class="ref628 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Fail to get live blocks
         Unable to compute live blocks from a given block. */
      "kind": "permanent",
      "id": "store.failed_to_get_live_blocks",
      "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Failed to init cemented block store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref629descr', 'ref629')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref629schema', 'ref629')">JSON Schema</button>
    
    </div>
    <div id="ref629descr" class="ref629 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to initialize the cemented block store</p><p><i>Id</i> : store.failed_to_init_cemented_block_store<br/><i>Category</i> : temporary</p>
      </div><div id="ref629schema" class="ref629 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Failed to init cemented block store
         Failed to initialize the cemented block store */
      "kind": "temporary",
      "id": "store.failed_to_init_cemented_block_store",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Fork testchain not allowed**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref630descr', 'ref630')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref630schema', 'ref630')">JSON Schema</button>
    
    </div>
    <div id="ref630descr" class="ref630 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Forking the test chain is not allowed</p><p><i>Id</i> : store.fork_testchain_not_allowed<br/><i>Category</i> : temporary</p>
      </div><div id="ref630schema" class="ref630 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Fork testchain not allowed
         Forking the test chain is not allowed */
      "kind": "temporary",
      "id": "store.fork_testchain_not_allowed" }</pre>
    </div>



**Inconsistent block hash**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref631descr', 'ref631')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref631schema', 'ref631')">JSON Schema</button>
    
    </div>
    <div id="ref631descr" class="ref631 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent block hash found</p><p><i>Id</i> : store.inconsistent_block_hash<br/><i>Category</i> : temporary</p>
      </div><div id="ref631schema" class="ref631 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent block hash
         Inconsistent block hash found */
      "kind": "temporary",
      "id": "store.inconsistent_block_hash",
      "level": integer ∈ [-2^31-1, 2^31],
      "expected_hash": $block_hash,
      "computed_hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent block predecessor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref632descr', 'ref632')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref632schema', 'ref632')">JSON Schema</button>
    
    </div>
    <div id="ref632descr" class="ref632 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent block predecessor</p><p><i>Id</i> : store.inconsistent_block_predecessor<br/><i>Category</i> : temporary</p>
      </div><div id="ref632schema" class="ref632 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent block predecessor
         Inconsistent block predecessor */
      "kind": "temporary",
      "id": "store.inconsistent_block_predecessor",
      "block_hash": $block_hash,
      "level": integer ∈ [-2^31-1, 2^31],
      "expected_hash": $block_hash,
      "computed_hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent cemented file**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref633descr', 'ref633')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref633schema', 'ref633')">JSON Schema</button>
    
    </div>
    <div id="ref633descr" class="ref633 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to read a cemented file</p><p><i>Id</i> : store.inconsistent_cemented_file<br/><i>Category</i> : temporary</p>
      </div><div id="ref633schema" class="ref633 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent cemented file
         Failed to read a cemented file */
      "kind": "temporary",
      "id": "store.inconsistent_cemented_file",
      "path": $unistring,
      "trace": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent cemented store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref634descr', 'ref634')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref634schema', 'ref634')">JSON Schema</button>
    
    </div>
    <div id="ref634descr" class="ref634 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to check indexes consistency</p><p><i>Id</i> : store.inconsistent_cemented_store<br/><i>Category</i> : temporary</p>
      </div><div id="ref634schema" class="ref634 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent cemented store
         Failed to check indexes consistency */
      "kind": "temporary",
      "id": "store.inconsistent_cemented_store",
      "inconsistent_cemented_file":
        { /* Missing cycle */
          "low_cycle": $unistring,
          "high_cycle": $unistring }
        || { /* Inconsistent_cycle_start */
             "cycle_start": integer ∈ [-2^31-1, 2^31],
             "expected_cycle_start": integer ∈ [-2^31-1, 2^31] }
        || { /* Bad offset */
             "level": integer ∈ [-2^30, 2^30],
             "cycle": $unistring }
        || { /* Unexpected level */
             "block_hash": $block_hash,
             "expected": integer ∈ [-2^31-1, 2^31],
             "got": integer ∈ [-2^31-1, 2^31] }
        || { /* Corrupted index */
             "block_hash": $block_hash }
        || { /* Inconsistent highest cemented level */
             "highest_cemented_level": integer ∈ [-2^31-1, 2^31],
             "cementing_highwatermark": integer ∈ [-2^31-1, 2^31] } }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent cementing highwatermark**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref635descr', 'ref635')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref635schema', 'ref635')">JSON Schema</button>
    
    </div>
    <div id="ref635descr" class="ref635 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The stored cementing highwatermark is inconsistent with the store.</p><p><i>Id</i> : store.inconsistent_cementing_highwatermark<br/><i>Category</i> : permanent</p>
      </div><div id="ref635schema" class="ref635 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent cementing highwatermark
         The stored cementing highwatermark is inconsistent with the store. */
      "kind": "permanent",
      "id": "store.inconsistent_cementing_highwatermark",
      "highest_cemented_level": integer ∈ [-2^31-1, 2^31],
      "cementing_highwatermark": integer ∈ [-2^31-1, 2^31] }</pre>
    </div>



**Inconsistent chain store**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref636descr', 'ref636')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref636schema', 'ref636')">JSON Schema</button>
    
    </div>
    <div id="ref636descr" class="ref636 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to load chain store</p><p><i>Id</i> : store.inconsistent_chain_store<br/><i>Category</i> : temporary</p>
      </div><div id="ref636schema" class="ref636 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent chain store
         Failed to load chain store */
      "kind": "temporary",
      "id": "store.inconsistent_chain_store" }</pre>
    </div>



**Inconsistent genesis**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref637descr', 'ref637')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref637schema', 'ref637')">JSON Schema</button>
    
    </div>
    <div id="ref637descr" class="ref637 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given genesis block is inconsistent with the store.</p><p><i>Id</i> : store.inconsistent_genesis<br/><i>Category</i> : permanent</p>
      </div><div id="ref637schema" class="ref637 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent genesis
         The given genesis block is inconsistent with the store. */
      "kind": "permanent",
      "id": "store.inconsistent_genesis",
      "expected": $block_hash,
      "got": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent history mode**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref638descr', 'ref638')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref638schema', 'ref638')">JSON Schema</button>
    
    </div>
    <div id="ref638descr" class="ref638 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The history mode does not correspond to the store.</p><p><i>Id</i> : store.inconsistent_history_mode<br/><i>Category</i> : permanent</p>
      </div><div id="ref638schema" class="ref638 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent history mode
         The history mode does not correspond to the store. */
      "kind": "permanent",
      "id": "store.inconsistent_history_mode",
      "history_mode": $history_mode }
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
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || { /* rolling
              Rolling mode only retains the most recent cycles by
              periodically discarding older blocks to reduce the storage
              size. */
           "rolling":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || "full"
      || "rolling"</pre>
    </div>



**Inconsistent protocol commit info**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref639descr', 'ref639')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref639schema', 'ref639')">JSON Schema</button>
    
    </div>
    <div id="ref639descr" class="ref639 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent protocol commit info while restoring snapshot</p><p><i>Id</i> : store.inconsistent_protocol_commit_info<br/><i>Category</i> : temporary</p>
      </div><div id="ref639schema" class="ref639 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent protocol commit info
         Inconsistent protocol commit info while restoring snapshot */
      "kind": "temporary",
      "id": "store.inconsistent_protocol_commit_info",
      "block_hash": $block_hash,
      "protocol_hash": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Inconsistent store state**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref640descr', 'ref640')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref640schema', 'ref640')">JSON Schema</button>
    
    </div>
    <div id="ref640descr" class="ref640 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Inconsistent store state</p><p><i>Id</i> : store.inconsistent_store_state<br/><i>Category</i> : temporary</p>
      </div><div id="ref640schema" class="ref640 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Inconsistent store state
         Inconsistent store state */
      "kind": "temporary",
      "id": "store.inconsistent_store_state",
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Invalid blocks to cement**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref641descr', 'ref641')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref641schema', 'ref641')">JSON Schema</button>
    
    </div>
    <div id="ref641descr" class="ref641 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Invalid block list to cement</p><p><i>Id</i> : store.invalid_blocks_to_cement<br/><i>Category</i> : temporary</p>
      </div><div id="ref641schema" class="ref641 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid blocks to cement
         Invalid block list to cement */
      "kind": "temporary",
      "id": "store.invalid_blocks_to_cement" }</pre>
    </div>



**Invalid genesis marking**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref642descr', 'ref642')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref642schema', 'ref642')">JSON Schema</button>
    
    </div>
    <div id="ref642descr" class="ref642 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Cannot mark genesis as invalid</p><p><i>Id</i> : store.invalid_genesis_marking<br/><i>Category</i> : temporary</p>
      </div><div id="ref642schema" class="ref642 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid genesis marking
         Cannot mark genesis as invalid */
      "kind": "temporary",
      "id": "store.invalid_genesis_marking" }</pre>
    </div>



**Invalid head switch**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref643descr', 'ref643')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref643schema', 'ref643')">JSON Schema</button>
    
    </div>
    <div id="ref643descr" class="ref643 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The given head is not consistent with the current store's savepoint</p><p><i>Id</i> : store.invalid_head_switch<br/><i>Category</i> : permanent</p>
      </div><div id="ref643schema" class="ref643 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Invalid head switch
         The given head is not consistent with the current store's savepoint */
      "kind": "permanent",
      "id": "store.invalid_head_switch",
      "minimum_allowed_level": integer ∈ [-2^31-1, 2^31],
      "given_head": [ $block_hash, integer ∈ [-2^31-1, 2^31] ] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Merge already running**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref644descr', 'ref644')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref644schema', 'ref644')">JSON Schema</button>
    
    </div>
    <div id="ref644descr" class="ref644 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The store's merge is already running</p><p><i>Id</i> : store.merge_already_running<br/><i>Category</i> : temporary</p>
      </div><div id="ref644schema" class="ref644 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Merge already running
         The store's merge is already running */
      "kind": "temporary",
      "id": "store.merge_already_running" }</pre>
    </div>



**Merge error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref645descr', 'ref645')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref645schema', 'ref645')">JSON Schema</button>
    
    </div>
    <div id="ref645descr" class="ref645 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Error while merging the store</p><p><i>Id</i> : store.merge_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref645schema" class="ref645 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Merge error
         Error while merging the store */
      "kind": "temporary",
      "id": "store.merge_error" }</pre>
    </div>



**Block metadata not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref646descr', 'ref646')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref646schema', 'ref646')">JSON Schema</button>
    
    </div>
    <div id="ref646descr" class="ref646 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Block metadata not found</p><p><i>Id</i> : store.metadata_not_found<br/><i>Category</i> : permanent</p>
      </div><div id="ref646schema" class="ref646 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Block metadata not found
         Block metadata not found */
      "kind": "permanent",
      "id": "store.metadata_not_found",
      "block_metadata_not_found": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing activation block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref647descr', 'ref647')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref647schema', 'ref647')">JSON Schema</button>
    
    </div>
    <div id="ref647descr" class="ref647 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Missing activation block while restoring snapshot</p><p><i>Id</i> : store.missing_activation_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref647schema" class="ref647 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing activation block
         Missing activation block while restoring snapshot */
      "kind": "temporary",
      "id": "store.missing_activation_block",
      "block_hash": $block_hash,
      "protocol_hash": $Protocol_hash,
      "history_mode": $history_mode }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
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
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || { /* rolling
              Rolling mode only retains the most recent cycles by
              periodically discarding older blocks to reduce the storage
              size. */
           "rolling":
             { "additional_cycles":
                 integer ∈ [0, 1000.000000]
                 /* additional cycles
                    Number of additional cycles preserved below the
                    savepoint. By default: 1 additional cycles will be
                    stored. */ } }
      || "full"
      || "rolling"
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing commit info**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref648descr', 'ref648')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref648schema', 'ref648')">JSON Schema</button>
    
    </div>
    <div id="ref648descr" class="ref648 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to retreive commit info</p><p><i>Id</i> : store.missing_commit_info<br/><i>Category</i> : temporary</p>
      </div><div id="ref648schema" class="ref648 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing commit info
         Failed to retreive commit info */
      "kind": "temporary",
      "id": "store.missing_commit_info",
      "trace": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Missing last preserved block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref649descr', 'ref649')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref649schema', 'ref649')">JSON Schema</button>
    
    </div>
    <div id="ref649descr" class="ref649 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Current head's last preserved block (or its associated metadata) cannot be found in the store.</p><p><i>Id</i> : store.missing_last_preserved_block<br/><i>Category</i> : temporary</p>
      </div><div id="ref649schema" class="ref649 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Missing last preserved block
         Current head's last preserved block (or its associated metadata)
         cannot be found in the store. */
      "kind": "temporary",
      "id": "store.missing_last_preserved_block" }</pre>
    </div>



**Protocol not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref650descr', 'ref650')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref650schema', 'ref650')">JSON Schema</button>
    
    </div>
    <div id="ref650descr" class="ref650 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Protocol not found</p><p><i>Id</i> : store.protocol_not_found<br/><i>Category</i> : permanent</p>
      </div><div id="ref650schema" class="ref650 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Protocol not found
         Protocol not found */
      "kind": "permanent",
      "id": "store.protocol_not_found",
      "protocol_level": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Resulting context hash not found**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref651descr', 'ref651')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref651schema', 'ref651')">JSON Schema</button>
    
    </div>
    <div id="ref651descr" class="ref651 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Resulting context hash not found</p><p><i>Id</i> : store.resulting_context_hash_not_found<br/><i>Category</i> : permanent</p>
      </div><div id="ref651schema" class="ref651 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Resulting context hash not found
         Resulting context hash not found */
      "kind": "permanent",
      "id": "store.resulting_context_hash_not_found",
      "block_not_found": [ $block_hash, integer ∈ [-2^31-1, 2^31] ] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**target mismatch**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref652descr', 'ref652')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref652schema', 'ref652')">JSON Schema</button>
    
    </div>
    <div id="ref652descr" class="ref652 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Target is reached but it is not a head's ancestor.</p><p><i>Id</i> : store.target_mismatch<br/><i>Category</i> : permanent</p>
      </div><div id="ref652schema" class="ref652 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* target mismatch
         Target is reached but it is not a head's ancestor. */
      "kind": "permanent",
      "id": "store.target_mismatch" }</pre>
    </div>



**Temporary cemented file exists**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref653descr', 'ref653')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref653schema', 'ref653')">JSON Schema</button>
    
    </div>
    <div id="ref653descr" class="ref653 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>The temporary cemented file already exists</p><p><i>Id</i> : store.temporary_cemented_file_exists<br/><i>Category</i> : temporary</p>
      </div><div id="ref653schema" class="ref653 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Temporary cemented file exists
         The temporary cemented file already exists */
      "kind": "temporary",
      "id": "store.temporary_cemented_file_exists",
      "path": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected missing activaiton block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref654descr', 'ref654')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref654schema', 'ref654')">JSON Schema</button>
    
    </div>
    <div id="ref654descr" class="ref654 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An activation block is unexpectedly missing from the store.</p><p><i>Id</i> : store.unexpected_missing_activation_block<br/><i>Category</i> : permanent</p>
      </div><div id="ref654schema" class="ref654 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected missing activaiton block
         An activation block is unexpectedly missing from the store. */
      "kind": "permanent",
      "id": "store.unexpected_missing_activation_block",
      "block": $block_hash,
      "protocol": $Protocol_hash }
    $Protocol_hash:
      /* A Tezos protocol ID (Base58Check-encoded) */
      $unistring
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected missing block**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref655descr', 'ref655')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref655schema', 'ref655')">JSON Schema</button>
    
    </div>
    <div id="ref655descr" class="ref655 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A block is unexpectedly missing from the store.</p><p><i>Id</i> : store.unexpected_missing_block<br/><i>Category</i> : permanent</p>
      </div><div id="ref655schema" class="ref655 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected missing block
         A block is unexpectedly missing from the store. */
      "kind": "permanent",
      "id": "store.unexpected_missing_block",
      "missing_block": $unistring,
      "level": integer ∈ [-2^31-1, 2^31],
      "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected missing block metadata**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref656descr', 'ref656')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref656schema', 'ref656')">JSON Schema</button>
    
    </div>
    <div id="ref656descr" class="ref656 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A block's metadata is unexpectedly missing from the store.</p><p><i>Id</i> : store.unexpected_missing_block_metadata<br/><i>Category</i> : permanent</p>
      </div><div id="ref656schema" class="ref656 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected missing block metadata
         A block's metadata is unexpectedly missing from the store. */
      "kind": "permanent",
      "id": "store.unexpected_missing_block_metadata",
      "missing_block_metadata": $unistring,
      "level": integer ∈ [-2^31-1, 2^31],
      "hash": $block_hash }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected missing protocol**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref657descr', 'ref657')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref657schema', 'ref657')">JSON Schema</button>
    
    </div>
    <div id="ref657descr" class="ref657 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>A protocol is unexpectedly missing from the store.</p><p><i>Id</i> : store.unexpected_missing_protocol<br/><i>Category</i> : permanent</p>
      </div><div id="ref657schema" class="ref657 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected missing protocol
         A protocol is unexpectedly missing from the store. */
      "kind": "permanent",
      "id": "store.unexpected_missing_protocol",
      "protocol_level": integer ∈ [-2^30, 2^30] }</pre>
    </div>



**Wrong floating kind swap**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref658descr', 'ref658')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref658schema', 'ref658')">JSON Schema</button>
    
    </div>
    <div id="ref658descr" class="ref658 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Try to swap wrong floating store kind</p><p><i>Id</i> : store.wrong_floating_kind_swap<br/><i>Category</i> : temporary</p>
      </div><div id="ref658schema" class="ref658 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong floating kind swap
         Try to swap wrong floating store kind */
      "kind": "temporary",
      "id": "store.wrong_floating_kind_swap" }</pre>
    </div>



**Wrong predecessor**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref659descr', 'ref659')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref659schema', 'ref659')">JSON Schema</button>
    
    </div>
    <div id="ref659descr" class="ref659 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Failed to get block's predecessor</p><p><i>Id</i> : store.wrong_predecessor<br/><i>Category</i> : temporary</p>
      </div><div id="ref659schema" class="ref659 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Wrong predecessor
         Failed to get block's predecessor */
      "kind": "temporary",
      "id": "store.wrong_predecessor",
      "hash": $block_hash,
      "offset": integer ∈ [-2^30, 2^30] }
    $block_hash:
      /* A block identifier (Base58Check-encoded) */
      $unistring
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unexpected size of encoded value**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref660descr', 'ref660')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref660schema', 'ref660')">JSON Schema</button>
    
    </div>
    <div id="ref660descr" class="ref660 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An encoded value is not of the expected size.</p><p><i>Id</i> : unexpected_size_of_encoded_value<br/><i>Category</i> : permanent</p>
      </div><div id="ref660schema" class="ref660 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unexpected size of encoded value
         An encoded value is not of the expected size. */
      "kind": "permanent",
      "id": "unexpected_size_of_encoded_value" }</pre>
    </div>



**Unix System_info failure**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref661descr', 'ref661')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref661schema', 'ref661')">JSON Schema</button>
    
    </div>
    <div id="ref661descr" class="ref661 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Unix System_info failure</p><p><i>Id</i> : unix.system_info<br/><i>Category</i> : temporary</p>
      </div><div id="ref661schema" class="ref661 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unix System_info failure
         Unix System_info failure */
      "kind": "temporary",
      "id": "unix.system_info",
      "failure": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Unix error**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref662descr', 'ref662')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref662schema', 'ref662')">JSON Schema</button>
    
    </div>
    <div id="ref662descr" class="ref662 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>An unhandled unix exception</p><p><i>Id</i> : unix_error<br/><i>Category</i> : temporary</p>
      </div><div id="ref662schema" class="ref662 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Unix error
         An unhandled unix exception */
      "kind": "temporary",
      "id": "unix_error",
      "msg": $unistring }
    $unistring:
      /* Universal string representation
         Either a plain UTF8 string, or a sequence of bytes for strings that
         contain invalid byte sequences. */
      string || { "invalid_utf8_string": [ integer ∈ [0, 255] ... ] }</pre>
    </div>



**Timeout**

.. raw:: html
  
  <div class="tab">
    <button class="tablinks defaultOpen" onclick="showTab(this, 'ref663descr', 'ref663')">Description</button>
    <button class="tablinks" onclick="showTab(this, 'ref663schema', 'ref663')">JSON Schema</button>
    
    </div>
    <div id="ref663descr" class="ref663 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
      <p>Timeout</p><p><i>Id</i> : utils.Timeout<br/><i>Category</i> : temporary</p>
      </div><div id="ref663schema" class="ref663 tabcontent" style="min-height:100px; max-height:200px; overflow:auto" >
    <pre>
    { /* Timeout
         Timeout */
      "kind": "temporary",
      "id": "utils.Timeout",
      ... }</pre>
    </div>



