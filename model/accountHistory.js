'use strict'
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    //转账id
    _id: String,
    //账户名称
    account_name: String,
    //币种名称

    transaction_id: String,

    block_num: Number,

    contract_actions: [
        {
            contract: String,
            action: String,
            data: {
                from: String,
                to: String,
                quantity: String,
                memo: String
            }
        }
    ],
    timestamp: String,
    pending: Boolean,


})

module.exports = mongoose.model('accountHistory', schema)