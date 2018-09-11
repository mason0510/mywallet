let router = require('express').Router();
let eos = require('../config/eosjs');


router.get("/", async (req, res) => {

    //res.send('helloworld')
    /*let result = await eos.getInfo({})
    res.send(result)*/
    //console.log(eos.getInfo({}));
    /* eos.getInfo({}).then(result => {
         console.log(result)
     })*/
    /* const result = await eos.getInfo((error, info) => {
         console.log(info);
         res.send(info)
     });*/
    eos.getInfo({}).then(result => {
        console.log(result)
       // Deci
        res.send(result)
    })
    //console.log(result);
    //eos.getInfo((error, result) => { console.log(error, result) });

});


module.exports = router

/*

eos.getInfo({}).then(result => {
    console.log(result)
})*/
