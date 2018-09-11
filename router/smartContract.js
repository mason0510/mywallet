let router = require('express').Router();
let eos = require('../config/eosjs');

//获取某一个区块高度上的信息
router.get("/code", async (req, res) => {
    callback = (err, res) => {
        err ? console.error(err) : console.log(res)
    }
    eos.getCode({account_name: "eosio.token"}, callback)


});

router.get("/Abi", async (req, res) => {
    callback = (err, res) => {
        err ? console.error(err) : console.log(res)
    }
    eos.getAbi({account_name: "eosio.token"}, callback)


});
module.exports = router

