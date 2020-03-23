var express = require('express');
var CryptoJS = require('cryptojs').Crypto;
var bitcoin = require('./generate_bitcoin_address.js');
var privateKey = require('./generate_private_key.js');
const app = express();

app.get('/', (req,res)=>{
    res.send({
        address: bitcoin,
        privateKey: CryptoJS.util.bytesToHex(privateKey),
    })
});

app.listen(3333);