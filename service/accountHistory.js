let accountHistory = require('../model/accountHistory');


//查询用户最新信息
async function getAccountHistoryInfo() {
    let res = await accountHistory.find({}).sort({block_num:-1}).limit(1);//block_num:1表示升序排列 ，-1表示降序排列
   // console.log(res);
    /*if (!res) {
        throw Error(`用户名为${username}的用户不存在`)
    }*/
    return res;
}

async function insertAccountTranscation(transcation) {
    return await accountHistory.create(transcation)
}


module.exports = {
    getAccountHistoryInfo,
    insertAccountTranscation,

}