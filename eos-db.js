'use strict'
let mongoose = require('mongoose');
//let config = require('./config');
mongoose.connect('mongodb://127.0.0.1/runoob')

let db = mongoose.connection;
db.on('error', err=>{
    console.log(err.toString());
});
db.once('open', ()=>{
    console.log('mongodb connect successfully!');
})


