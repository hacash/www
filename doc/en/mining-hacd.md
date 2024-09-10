HACD Mining
Mining and bidding HACD



HACD (Block Diamond) is another heterogeneous, indivisible currency on the Hacash network, detail introduction can be found on [HACD.art](https://HACD.art). Mining HACD requires some conditions

## Get HAC

Note：Mining [HACD](/HACD) need use Hacash's another  coin [HAC](/HAC) to bidding, Participation in the on-chain auction can only be confirmed. HAC can be obtained by mining and purchasing:

<pre class="links">
HAC Mining
/mining-HAC

Buy HAC
/get#HAC
</pre>

## Run Full Node

HACD supports only full-node mining. Before you can start HACD mining, you need to run the full node and synchronize all the block data.

<pre class="links">
Run Full Node
/run-full-node
</pre>


## Start Mining

First of all, you need to configure the full node according to the [Hacash Config Instruction](https://github.com/hacash/doc/blob/main/build/config_description.md), and modify some parameters under the `[diamondminer]` item in the configuration file `hacash.config.ini`:

<pre class="log cnf">
<b>[diamondminer]</b>
<i>enable</i> = <s>true</s>
<i>reward</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>bid_password</i> = <s>pass123456</s>
<i>bid_min</i> = <s>5:246</s>
<i>bid_max</i> = <s>19:248</s>
<i>bid_step</i> = <s>2:248</s>
</pre>

where `enable` indicates whether HACD (diamond) mining and automatic bidding are enabled. `reward` is the address of the mined HACD, `bid_password` is the account password or private key that bid (can be different from the reward address), `bid_min` represents the first offer of the mined diamond, and then every tens of milliseconds, the program automatically checks the current highest bid for the diamond, if the price is higher than my bid, then the parameter `bid_step = 2:247` is the step value of the offer, Automatically issue a price higher than the highest diamond quote to always keep your own diamond quote highest. The parameter `bid_max = 10:248` is the maximum bid I will issue for each diamond, which means that if someone else bids more than that, I will stop bidding and will not quote a higher price than that.

If multiple diamonds are mined in a block at the same time, the diamond with the highest bid will be packed into the block and confirmed by the whole network, and the other diamonds in the same period will be considered invalid and discarded, and everyone will start again to dig the next diamond from scratch. You must ensure that you have at least a balance in your account set by `bid_min` in order for the excavated diamonds to be able to be packaged for validity). 90% of the bidding fee will be burned, and the remaining 10% will be sent as a reward to the block miner who packed the diamond.

You'll also need to open the full node's API service (enable set to true and remove the semicolon before the row):

<pre class="log cnf">
<b>[server]</b>
<i>enable</i> = <s>true</s>
<i>listen</i> = <s>8081</s>
</pre>

Then, download the `diaworker` (diamond miner worker) program for the corresponding operating system in the [Hacash Software Release](https://github.com/hacash/rust/releases) and follow the instructions in [Hacash Config Instruction]( https://github.com/hacash/doc/blob/main/build/config_description.md) Modify the configuration of the mining program `diaworker.config.ini` :

<pre class="log cnf">
<i>connect</i> = <s>127.0.0.1:8081</s>
<i>supervene</i> = <s>4</s>
</pre>

Among them, `connect` indicates the IP and port of the full node API service to be connected, and `supervene` indicates the use of multi-threaded parallel mining, and the number of cores or virtual threads set is not higher than the number of cores or virtual threads of the CPU, which has the same meaning as the `supervene` parameter of mining HAC coins. Mining programs can be run on multiple devices at the same time, connected to the same full node, and the computing power can be accumulated.

Run the `hacash_diaworker` program from the command line or by double-clicking, and you can see the following prints:

<pre class="cmd">
<b>./hacash_ubuntu_diaworker  diaworker.config.ini</b>
[Config] Load: /root/rust/diaworker.config.ini 2024-09-10 16:30:27.
[Config] query diamond miner bid address: 1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9, reward address: 1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9
[Start] Create #4 diamond miner worker thread.
[09-10 16:30:27] req next number 98765 to mining ... 
5632981 1376580, 0000000HYNTYY0IZ 0000000NUEWWNUKX, 58.86Kc/s.       
</pre>

The `58.86Kc/s` shown at the end of the above print represents the real-time computing power of the mining machine. Next, wait for the diamond to be mined and automatically submitted to the mainnet for automatic bidding. According to the current computing power estimate, the average home computer will dig up a diamond in 1 ~ 2 days, while the super CPU used by a 256-core server will mine 1 to 3 diamonds in half an hour.


<p class="note">[Special note] Automatic bidding does not guarantee that you will get the HACD, such as the following situations:<br/>
　　1. HACD are mined too late at the end of the cycle to make the first bid, and other HACD with the highest current bid are already packed into the block;<br/>
　　2. In the ten-second interval between automatic quotes, someone else's HACD are packed;<br/> 
　　3. Network synchronization delays cause your program to not get other people's quotes;<br/>
If you want to maximize your chances of getting HACD, try to optimize the following:<br/>
　　1. Upgrade to a more stable network (better links but no bandwidth required);<br/>
　　2. Try to issue a higher first bid and bid step value, so that after a few bids to exceed the maximum value set by others, so as to beat others;<br/>
　　3. Please do not set the bid step value too small (`bid_step` parameter), too small fee changes will be less accurate than the system can recognize, and will not change your bid order;<br/>
</p>
