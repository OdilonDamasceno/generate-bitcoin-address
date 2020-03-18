var CryptoJs = require('cryptojs').Crypto;

var chavePrivada = CryptoJs.util.randomBytes(32);

var chavePrivadaHex = CryptoJs.util.bytesToHex(chavePrivada).toUpperCase();

console.log(chavePrivadaHex);