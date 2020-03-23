var express = require('express');
var CryptoJS = require('cryptojs').Crypto;
var bitcoin = require('./src/generate_bitcoin_address.js');
var privateKey = require('./src/generate_private_key.js');
var publicKey = require('./src/generate_publicKey');
var WIF = require('./src/generate_wif');
const app = express();

app.get('/', (req, res) => {
    res.send({
        address: bitcoin,
        privateKey: CryptoJS.util.bytesToHex(privateKey),
        publicKey: publicKey,
        wif: WIF,
    })
});

app.listen(3333);