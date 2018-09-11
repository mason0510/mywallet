Eos = require('eosjs')

/*config = {
    keyProvider: ['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'], // 配置私钥字符串
    httpEndpoint: 'http://47.75.91.111:8888', //DEV开发链url与端口
    chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f", // 通过cleos get info可以获取chainId
    mockTransactions: () => null, // 如果要广播，需要设为null
    transactionHeaders: (expireInSeconds, callback) => {
        callback(null/!*error*!/, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    },
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    authorization: null // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
}*/

/*eos = Eos({
    //keyProvider: ['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'], // 配置私钥字符串
    httpEndpoint: 'mainnet httpEndpoint', //DEV开发链url与端口
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906", // 通过cleos get info可以获取chainId
    mockTransactions: () => null, // 如果要广播，需要设为null
    transactionHeaders: (expireInSeconds, callback) => {
        callback(null/!*error*!/, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    },
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    authorization: null // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
})*/
eos = Eos({
    //httpEndpoint: 'http://47.75.91.111',
    httpEndpoint: 'https://mainnet.eoscannon.io',


   // keyProvider: ['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3','5K1pjpYSdryw8KQTB9DkBu2nQ2qmwbTVmjKFUw59CQHSvMTFo36','5Jr2KjQhVHusnmKu32FaaL2CeXs32dR6QT95M7fqSawBFPBAto7'],
    //chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
    //chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    mockTransactions: () => null, // 如果要广播，需要设为null
    /*transactionHeaders: (expireInSeconds, callback) => {
        callback(null/!*error*!/, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    },*/
    expireInSeconds:60,
    broadcast: true,
    debug: false,
    sign: true,
    /*authorization: [{
        actor: 'eosio.token',
        permission: 'active'
    }],*/ // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
})


module.exports = eos