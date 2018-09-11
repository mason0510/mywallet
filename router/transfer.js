let router = require('express').Router();
let eos = require('../config/eosjs');

//转账操作
router.get("/:fromaccount/:toaccout/:quantity/:memo", async (req, res) => {
    let fromaccount = req.params.fromaccount;
    let toaccount = req.params.toaccout;
    let quantity = req.params.quantity;
    let memo = req.params.memo;
    console.log(fromaccount);
    console.log(toaccount);

    callback = (err, result) => {
        if (err)
            console.error(err)
        else
            res.send(result)
    }
    eos.transaction(
        {
            // ...headers,
            /*  headers:{
                  ref_block_num
                  ref_block_prefix
                  expiration
              },*/
            actions: [
                {
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: [{
                        actor: fromaccount,
                        permission: 'active'
                    }],
                    data: {
                        from: fromaccount,
                        to: toaccount,
                        quantity: quantity + ' EOS',
                        memo: memo
                    }
                }
            ]
        },
        callback
        // options -- example: {broadcast: false}
    )
});

//获取transction  eos.getTransaction({id: "xxxx"}, callback)


module.exports = router

