let router = require('express').Router();
let eos = require('../config/eosjs');
let request = require('request');
let account = require('../service/accountHistory');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/runoob";
let value = 0;
//获取某一个区块高度上的信息
router.get("/", (req, res) => {

    /* async function main() {
         const actions = (await eos.getActions('zbeoscharge1')).actions
         value = actions.map(a => a.action_trace)
         console.log(value)
         res.send(value)

     }*/

    /* main().catch(error => {
         console.error(error)
         process.exit(1)
     })*/
    function historyTranscation() {
        request('https://explorer.eoseco.com/api/accountTraces?name=zbeoscharge1&page=1',async function (error, response, body) {
            if (!error && response.statusCode == 200) {

                value = JSON.parse(body)
                console.log(value.length);

                /*for (let i = 0; i < value.length; i++) {
                    await account.insertAccountTranscation(value[i])
                }*/
               /* let first =  await account.getAccountHistoryInfo()
                console.log(first);*/
               let first =  await account.getAccountHistoryInfo()
                console.log(first.toString());
                if(first.toString()===""){
                    for (let i = 0; i < value.length; i++) {
                        await account.insertAccountTranscation(value[i])
                    }
                }
                //console.log(typeof first);
                first =  await account.getAccountHistoryInfo()
                //console.log(first);
                //console.log(first);
                let i =0
                   while(value[i]._id>first._id){
                       console.log(value[i]);
                       await account.insertAccountTranscation(value[i])
                       i++;
                   }



                /*MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("runoob");
                    for (let i = 0; i < value.length; i++) {
                        let first = dbo.collection("site").find().sort({block_num: 1}).limit(3).toArray(
                            function (err, result) {
                                if (err) throw err;
                                console.log(result);
                                db.close();
                            }
                        )

                        // console.log(first);
                        /!*dbo.collection("site").insertone(value[i], function(err, res) {
                            if (err) throw err;
                            console.log("文档插入成功");
                            db.close();
                        });*!/
                    }


                });*/

                //console.log(value.length);
                /*res.header("Content-Type", "application/json;charset=utf-8");
                //console.log(value);
                res.send(value)*/
            }
        })
    }


    setInterval(historyTranscation, 1000);


});

module.exports = router