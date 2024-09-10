HACD 挖掘
挖矿和竞价 HACD



HACD（区块钻石）是 Hacash 网络上另一种异质 、不可分割的货币。其详细介绍可参看：[什么是区块钻石](https://github.com/hacash/doc-chinese/blob/main/whitepaper.md#5-%E5%8C%BA%E5%9D%97%E9%92%BB%E7%9F%B3) 和 [钻石采掘算法](https://github.com/hacash/doc-chinese/blob/main/whitepaper.md#3-%E9%92%BB%E7%9F%B3%E9%87%87%E6%8E%98) 。

## 获得 HAC

先导提示：[HACD](/HACD) 的挖矿，需要使用 Hacash 网络中的另一个货币 [HAC](/HAC) 竞价，参与链上拍卖成功才能得到最终确认。可以通过挖矿和购买获取 HAC：

<pre class="links">
HAC 挖矿
/mining-HAC

购买 HAC
/get#HAC
</pre>

## 运行全节点

HACD 仅支持全节点方式挖矿。在开始 HACD 挖掘之前，需要运行全节点并且同步完所有区块数据。

<pre class="links">
运行全节点
/run-full-node
</pre>


首先需要按照 [Hacash配置说明](https://github.com/hacash/doc/blob/main/build/config_description.md) 配置好全节点，修改配置文件 `hacash.config.ini` 中 `[diamondminer]` 项下的若干参数：

<pre class="log cnf">
<b>[diamondminer]</b>
<i>enable</i> = <s>true</s>
<i>reward</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>bid_password</i> = <s>pass123456</s>
<i>bid_min</i> = <s>5:246</s>
<i>bid_max</i> = <s>19:248</s>
<i>bid_step</i> = <s>2:248</s>
</pre>

其中 `enable` 表示是否开启 HACD（钻石）挖矿和自动竞价。 `reward` 为挖到的 HACD 的所属地址，`bid_password` 为出具竞价的账户密码或私钥（可以与reward地址不同），`bid_min` 表示挖出钻石的第一次报价，然后每隔几十毫秒，程序自动检查一次当前最高报价的钻石出价，如果报价高于我的报价，则通过参数 `bid_step = 2:247` 为报价步进值，自动出具高于最高钻石报价的价格，以始终保持自己挖出的钻石报价最高。参数 `bid_max = 10:248` 为我将为每一枚钻石出具的竞价上限，表示如果其他人竞价超过这个价格，我将停止竞价，而不会报出比这个数值更高的价格。

如果一个区块内同时挖出多枚钻石，则竞价最高的钻石将被打包进区块被全网确认生效，同时期的其他钻石将被视为无效并丢弃，大家重新再次从头开始挖掘下一枚钻石。必须确保账户内至少拥有 `bid_min` 设置的余额，挖掘出的钻石才有可能被打包生效）。竞价费的 90% 将被销毁，剩下 10% 将作为奖励发送给打包这枚钻石的区块矿工。

还需要打开全节点的 API 服务（ enable 设置为 true 且删除行前的分号 ）：

<pre class="log cnf">
<b>[server]</b>
<i>enable</i> = <s>true</s>
<i>listen</i> = <s>8081</s>
</pre>


## 开始挖矿

然后，在 [Hacash软件发布中心](https://github.com/hacash/rust/releases) 下载对应的操作系统的 `diaworker` (diamond miner worker) 程序，并按照 [Hacash配置说明](https://github.com/hacash/doc/blob/main/build/config_description.md) 修改好挖矿程序的配置 `diaworker.config.ini` ：

<pre class="log cnf">
<i>connect</i> = <s>127.0.0.1:8081</s>
<i>supervene</i> = <s>4</s>
</pre>

其中，`connect` 表示要连接的全节点 API 服务的 IP 和端口， `supervene` 表示采用多线程并行挖矿，设置的数量不高于 CPU 的核心数或虚拟线程数，与挖HAC币的 `supervene` 参数意义相同；可以同时在多台设备上运行挖矿程序，连接到同一个全节点，算力可以累加。

通过命令行或双击运行 `hacash_diaworker` 程序，可以看到以下打印：

<pre class="cmd">
<b>./hacash_ubuntu_diaworker  diaworker.config.ini</b>
[Config] Load: /root/rust/diaworker.config.ini 2024-09-10 16:30:27.
[Config] query diamond miner bid address: 1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9, reward address: 1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9
[Start] Create #4 diamond miner worker thread.
[09-10 16:30:27] req next number 98765 to mining ... 
5632981 1376580, 0000000HYNTYY0IZ 0000000NUEWWNUKX, 58.86Kc/s.       
</pre>

以上打印最后展示的 `58.86Kc/s` 表示挖矿机器的实时算力。接下来等待钻石的挖出，并且自动提交到主网，进行自动竞价。按照当前算力大小预估，普通家用电脑将在 1 ～ 2 天的时间挖出一枚钻石，而 256 核心的服务器使用的超级 CPU 将在半小时内挖出 1 到 3 枚钻石。


<p class="note">【特别注意】自动竞价并不保证绝对能让你获得钻石，比如出现一下这些情况：<br/>
　　1. 在周期的末尾很晚才挖出钻石，来不及第一次报价，其他当前最高报价的钻石就已经打包进区块；<br/>
　　2. 刚好在监测自动报价的间隙，别人的钻石被打包进区块；<br/> 
　　3. 网络同步卡顿导致你的程序没有获取到别人的报价。<br/>
如果你想要最大可能获得钻石，请尽量优化以下内容：<br/>
　　1. 升级到更稳定（链路更优质但不需要带宽更大）的网络；<br/>
　　2. 尽量出具更高的首次报价和竞价步进值，以便于在很少的几次报价之后就超越别人设置的竞价最高值，从而打败别人。<br/>
　　3. 请不要设置过于小的报价步进值（`bid_step` 参数），过于小的手续费更改将低于系统可以识别的精度，从而不能改变你的竞价排序。<br/>
</p>