var CryptoJS = require('cryptojs').Crypto;
var ec = require('eccrypto');
var privateKey = require('./generate_private_key.js');

var publicKey = ec.getPublic(Buffer.from(CryptoJS.util.hexToBytes(privateKey)));

module.exports = publicKey;