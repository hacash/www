Developer Guide
Hacash development related instructions and various tools, interface documentation links




This page provides preliminary guidance and document links for various developers related to Hacash, and explains some important considerations related to development work. In addition, all code and documentation will be submitted to [Github](https://github.com/hacash/miner) and fully open source. If the documentation does not contain the information you need, you can find all the content in the open source code library.


## Exchange or Wallet

Exchange or Wallet access assets HAC, HACD or BTC on Hacash blockchain, scan transaction or block data to create new transfer transactions. Please read the RPC API interface documentation. 

<pre class="links">
Commit Tx Must Read
https://github.com/hacash/doc/blob/main/server/memtxpool_operation_important_note.md

Fullnode API Doc
https://github.com/hacash/doc/blob/main/server/fullnode_api_doc.md

HACD additional note for exchanges
https://github.com/hacash/doc/blob/main/server/hacd_explain_for_exchange.md

Fullnode Download
https://github.com/hacash/fullnode/releases

Run Full Node
/run-full-node
</pre>


## Mining or MinerPool

To run the open source mining pool provided by the Hacash community, please check [set up a mining pool](/mining-pool). If you need to develop mining pools or custom mining tools, or understand the details of mining output, please refer to the following three documents:

<pre class="links">
X16RS Mining Algorithm Doc
https://github.com/hacash/doc/blob/main/tech/x16rs_algorithm_description.md

HAC & HACD Mining Fairness Doc
https://github.com/hacash/doc/blob/main/tech/HAC_HACD_mining_fairness_description.md

Hacash Mining Tech Development
https://github.com/hacash/doc/blob/main/tech/mining_tech_development_description.md
</pre>


## Applications and Tools

If you want to develop some tools that serve Hacash, studying existing tools such as Hacash's open source wallet and block browser will be a good way to start. These existing tools may not have been documented in the development and use of some interfaces. The following are the code links, API code links, and interface documents for existing tools:

<pre class="links">
Fullnode API Doc
https://github.com/hacash/doc/blob/main/server/fullnode_api_doc.md

All API Routes
https://github.com/hacash/fullnode/blob/main/src/server/api/routes.rs

Wallet Code
https://github.com/hacash/wallet

Explorer Code
https://github.com/hacash/explorer
</pre>


## Blockchain Core

To participate in the development of the core layer of blockchain, certain conditions need to be met, which are detailed in [HIP-12](https://github.com/hacash/doc/blob/main/HIP/development/HIP-12_Hacash_development_workflow_and_code_permission.pdf) . Each addition or change to the core layer of the Hacash main network requires an HIP document as the evaluation basis. We need to compile and deploy the entire Hacash node, and here is also a simple guide.
<pre class="links">
HIP-12
https://github.com/hacash/doc/blob/main/HIP/development/HIP-12_Hacash_development_workflow_and_code_permission.pdf

HIP Table
https://github.com/hacash/doc/blob/main/HIP/HIP-table.md

Build Doc
https://github.com/hacash/doc/blob/main/build/build_compilation.md
</pre>


## Developer Community

The preliminary communication and discussion of development work are usually conducted on [Discord](https://discord.gg/evtt4bDfKu) , and then formal specification documents are formed on [Github](https://github.com/hacash). Click on the link below to join the development discussion, bring up new development work, or ask certain development questions.

<pre class="links">
Discord Development Group
https://discord.com/channels/757976908653920299/802807729584209920

Github Doc Home
https://github.com/hacash/paper
</pre>