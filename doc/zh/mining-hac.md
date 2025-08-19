HAC 挖矿
加入矿池、使用GPU、Solo等多种方式参与挖掘






在首次开始挖矿之前，需要 [创建钱包地址](https://wallet.hacash.org?lang=[:=lang.useset:])，用于收取 HAC 的挖矿奖励。


<a name="fullnode"></a>

## 搭配全节点挖矿

开始全节点挖矿之前，需要 [运行全节点](/run-full-node)，并等待所有区块数据同步完成。

修改配置来开启挖矿。`hacash.config.ini` 文件是Hacash全节点程序必备的配置文件，包含各种配置。需要修改配置文件中`[miner]` 项下的三个参数：

<pre class="log cnf">
<b>[miner]</b>
<i>enable</i> = <s>true</s>
<i>reward</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>message</i> = <s>unknown</s>
</pre>

其中，删除 `enable = true` 前面的分号 `;` 表示开启挖矿（分号 `;` 表示注释这一项，使其不生效，其他项配置比如 HACD 挖矿同理）。

`reward` 参数的字符串值，是 Hacash 的账户地址，这里用来收取挖矿产生的货币奖励。此地址必须通过钱包生成，有特定的格式，可以使用 [在线钱包](https://wallet.hacash.org?lang=[:=lang.useset:])，通过严格保密并做好备份的密码，或者随机创建的私钥来生成账户地址。`message` 为区块播报者标识，一般仅矿池需要设置。

然后，开启全节点的 API 服务的配置，以便挖矿终端能够连接到全节点，获取最新的挖矿数据和区块信息：

<pre class="log cnf">
<b>[server]</b>
<i>enable</i> = <s>true</s>
<i>listen</i> = <s>8081</s>
</pre>

<p class="note">注意：需要等待区块同步完成之后，再修改配置，然后重启全节点，挖矿配置才能生效</p>

## 开始挖矿

然后，在 [Hacash软件发布中心](https://github.com/hacash/fullnode/releases) 下载对应的操作系统的 `poworker` (HAC PoW miner worker) 程序，并按照 [Hacash配置说明](https://github.com/hacash/doc/tree/main/build/config_description.md) 修改好挖矿程序的配置 `poworker.config.ini` ：

<pre class="log cnf">
<i>connect</i> = <s>127.0.0.1:8081</s>
<i>supervene</i> = <s>4</s>
</pre>

其中，`connect` 表示要连接的全节点 API 服务的 IP 和端口，`supervene` 参数表示同时启用多少个线程挖矿，一般来说与你的电脑的 CPU 核心数量一致，能发挥最大的计算能力。比如你的电脑 CPU 核心数量为 2 核， 则将 `supervene = 8` 改为 `supervene = 2`，如果为 4 核心则改为 `supervene = 4`，以此类推。这时计算机 CPU 的利用率为 100%。 一般建议留出一个核心用于其它计算：4核心则设置为3，8核心则设置为7。也可以根据你的情况自由设置，数值越小，CPU 利用率越低。此值不支持小数，最小为1，也不建议设置成比电脑 CPU 核心数量更大的值。

如果在内网有多台机器同时挖矿，可以多台设备运行连接到同一个全节点，建立算力集群。

通过命令行或双击运行 `hacash_poworker` 程序，可以看到以下打印：

<pre class="cmd">
<b>./hacash_ubuntu_poworker  poworker.config.ini</b>
[Config] Load: /root/rust/rust/poworker.config.ini 2024-09-10 20:44:23.
[Start] Create #4 block miner worker thread.
[09-10 20:44:23] req height 715 target 0000687b33 to mining ... 
1470588 1470588, 0000064cde 0000064cde, ≈288.0000HAC/day 100.000000%, 490.20Kc/s. 

████████████████ [MINING SUCCESS] Find a block height 715,
██ hash 0000064cdee0e8ab50f7212e8b92149b9fbb828965832fe73404a0c824ba098f to submit.
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔      
</pre>

以上打印最后展示的 `490.20Kc/s` 表示挖矿机器的实时算力。当打印出下面的 `[MINING SUCCESS]` 消息时，表示成功挖出一个区块。


更多资料：

<pre class="links">
Hacash 挖矿技术开发说明
https://github.com/hacash/doc-chinese/tree/main/tech/mining_tech_development_description.md
</pre>
