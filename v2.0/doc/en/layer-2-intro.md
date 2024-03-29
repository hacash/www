Channel Network
Hacash layer 2 Payment and Settlement Network


## What is Channel Chain Payment Network

The channel chain payment settlement network is Hacash's layer 2 expansion network (see the whitepaper for details: 
 [Hacash Whitepaper]([:=lang.links.wp:]) ),Payments through the channel chain can be made in real time without any wait, without transaction processing capacity bottlenecks and with extremely low fees. In short, the expansion mode has no waiting time for confirmation and no TPS upper limit. In addition to hardware performance such as computing power and bandwidth size, there are no protocol level confirmation time limits and transaction capacity constraints. In layman's terms, channel chain payments make payment and receipt as simple, fast, efficient and secure as sending an email with the support of a layer of blockchain security. The channel chain network supports payments in both HAC and Hacash-BTC currencies.

## Compare with Lightning Network

The channel chain network is a kind of "state channel" technology, similar to the Bitcoin Lightning network technology principle, with "both parties lock funds -> multiple payments under the chain -> on-chain settlement or arbitration" as the core logic. However, the channel chain has a very significant technological improvement in many aspects such as security and decentralization:

- Synchronous Payments More Secure

The security of synchronous payment is more guaranteed, your payment will either succeed completely or fail completely, there will be no intermediate state.  The asynchronous payment method of the Lightning network may cause a wrong transaction where you pay your node service provider, but he does not give your money to your target payee, and there is an incomplete payment state.

- More Decentralized

Due to its technical characteristics such as synchronous payment, the channel chain network will have a higher degree of decentralization than the lightning network. The asynchronous payment characteristics of lightning network may lead to the oligopoly of node service providers in the market or even a complete monopoly. Decentralization no longer exists.

- Architecture More Mature

Hacash's readable financial contracts are more flexible and mature than Bitcoin's UTXO transaction structure, and are more powerful in terms of scalability and ease of financial operation. This brings more possibilities to the channel chain payment technology, which can meet more abundant payment needs.

- Reconciliation Credentials More Streamlined

Due to the limitations of UTXO technology, the Lightning network needs to back up every voucher generated by all historical payments to ensure that the channel balance is secure, which brings great inconvenience and space consumption. The channel chain network only needs to save the reconciliation data of the last payment, and the history can be discarded directly.


## Quick Start

The goal of the channel chain network is to replace the current centralized clearing system of the banking industry and become the universal protocol for daily payments in the world, supporting BTC and HAC, and can support other tokens.

From the discussion of Hacash's white paper, it can be understood that the channel chain system will form a large-scale commercial service merchant role. However, unlike the traditional banking and financial industry, the channel chain system prevents the evil of the service provider from the technical and protocol level, and they cannot take away the money that belongs to you. There are two main ways to participate in the channel chain:

<pre class="links big">
Individual: Use Channel Chain Wallet
/layer-2-wallet

Company: Setup Payment Service Node
/layer-2-node
</pre>


