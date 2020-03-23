var CryptoJs = require('cryptojs').Crypto;

var privateKey = CryptoJs.util.randomBytes(32);

var privateKeyHex = CryptoJs.util.bytesToHex(privateKey).toUpperCase();

console.log(privateKeyHex);

