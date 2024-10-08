let cn = s => s//.replace(/\s+/ig, '')
    , cm = s => cn(s).split(',')
    , cf = s => cn(s).split('/')
    , cb = s => cn(s).split('\n')
    ;
module.exports = {

    support: {
        donate: "Donate HAC to Support Hacash.org:",
    },

    intro: `A Crypto Sound Money with 3 PoW Coins and 3 Scalability Layers for Open Finance and DApp Infrastructure`,
    // intro: 'A Peer-to-Peer Network for Money, Payment, Store of Value, DeFi, and DApp Infrastructure',

    desc: cf(`is Crypto Sound Money/is the Community Driven/follows Bitcoin's Vision/includes 3 PoW Coins/has the first PoW NFT/can absorb Bitcoin/use Human-readable DeFi Contracts/prevents 51% Attacks/supports Scalability Techniques`),

    tnv: {
        ttls: cf('Get Started/Learn/Features/Resources'),
        start: cf('Wallet/Buy Hacash/Explorer/Individual/Miner/Business/Developer/Artist/Run a full node'),
        learn: cf(`HAC/HACD/BTC/Layer 1/Layer 2/Layer 3/Whitepaper/HAC Unit/Beginner's Manual`),
        feature: cf('Proof of work/Flatcoin/OpFi Infra/Bitcoin/Cypherpunk'),
        resource: cf('Development/Resource/Community/Ecosystem/Github '),     
        resource: cf('Development/Community/Ecosystem/Resource/Download/Github '),        

    },

    ftr: {
        lstif: "List support",
        dvdct: "Exchanges, Wallet Dev Doc",
        lgdsi: "Logo Design Source",
        tlik: 'Links',
        tcmn: 'Community',
        tres: "Resources",
    }


}

