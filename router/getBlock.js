let router = require('express').Router();
let eos = require('../config/eosjs');

//获取某一个区块高度上的信息
router.get("/", async (req, res) => {
    callback = (err, res) => {
        err ? console.error(err) : console.log(res)
    }
    eos.getBlock(200, callback)


});

module.exports = router

