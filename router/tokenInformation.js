let router = require('express').Router();
let eos = require('../config/eosjs');

//获取代币信息
router.get("/", async (req, res) => {
    callback = (err, res) => {
        err ? console.error(err) : console.log(res)
    }
    eos.getCurrencyStats({code: "eosio.token", symbol: "EOS"}, callback) //用上面出现的callback，下同


});

module.exports = router

