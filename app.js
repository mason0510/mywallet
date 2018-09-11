require('./eos-db')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//let http = require('http')


/*app.use('/', function(req, res){
    res.send('hello world');
});*/
// 注册body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//注册路由
app.use("/getAccount",require('./router/getAccount'));
app.use("/newAccount",require('./router/newAccount'));
app.use("/getInfo",require('./router/getInfo'));
app.use("/getBlock",require('./router/getBlock'));
app.use("/tokenInformation",require('./router/tokenInformation'));
app.use("/transfer",require('./router/transfer'));
app.use("/smartContract",require('./router/smartContract'));
app.use("/eosHistorytx",require('./router/eosHistorytx'));
app.listen(3000);