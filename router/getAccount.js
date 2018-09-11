let router = require('express').Router();
let eos = require('../config/eosjs');
//获取账户余额信息
router.get('/currencyBalance/:account', (req, res) => {
    // console.log(eos);
    //默认返回的json对象
    callback = (err, result) => {
        if (err)
            console.error(err)
        else {
            let sValue = JSON.stringify(result)
            let value = sValue.substring(2, sValue.length - 6)
            res.send({
                value: value,
                ctype: "EOS"
            })
        }

    }
    //console.log(req.params.account);
    //eos.filter
    //eos.get_actions

    eos.getCurrencyBalance({
        code: "eosio.token",
        account: req.params.account,
        symbol: "EOS"
    }, callback)


    /* else if(req.params==null){
         res.send(obj)
     }*/
    /*.then(result => {
        let sValue = JSON.stringify(result)
        let value = sValue.substring(2, sValue.length - 6)
        res.send({
            value: value,
            ctype: "EOS"
        })
    })*/


});
//获取账户名称

router.get("/name", async (req, res) => {
    callback = (err, res) => {
        err ? console.error(err) : console.log(res)
    }

    eos.getAccount({account_name: "eosio"}, callback) //获取eoshackathon账户的信息


});


module.exports = router

//以上相当于命令
//cleos get currency balance eosio.token eosio DEV
//curl http://127.0.0.1:3000/getAccountBalance?account=mbtpub