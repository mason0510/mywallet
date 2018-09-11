let router = require('express').Router();
let eos = require('../config/eosjs');

var eosioProductPub = 'EOS67n7r7TgUw9M6MdayVExnMzAMGP3mnUwtU7EEH5aGbqScjZSvk';

//生成新的账号
router.get("/:name", async (req, res) => {
    let name = req.params.name;
    console.log(name);
    if (name) {
        eos.newaccount({
            creator: 'eosio',
            name: name,
            owner: eosioProductPub,
            active: eosioProductPub,
            recovery: 'eosio'
        }).then(result => {
            res.send(result);

        })
    }

    /*eos.transaction(tr => {
        tr.newaccount({
            creator: 'eosio',
            name: 'myaccount',
            owner: pubkey,
            active: pubkey
        })

        tr.buyrambytes({
            payer: 'eosio',
            receiver: 'myaccount',
            bytes: 8192
        })

        tr.delegatebw({
            from: 'eosio',
            receiver: 'myaccount',
            stake_net_quantity: '10.0000 SYS',//net
            stake_cpu_quantity: '10.0000 SYS',//cpu
            transfer: 0
        })
    })*/



});


module.exports = router