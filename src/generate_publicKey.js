var CryptoJS = require('cryptojs').Crypto;
var privateKey = require('./generate_private_key.js');
var secp256k1 = require('secp256k1');

// How the public key is generated.
// The public key is generated stating from encryptation type
// eliptics curves. More precisely a secp256k1 curve

var publicKey = secp256k1.publicKeyCreate(Uint8Array.from(privateKey),false);

var publicKeyHex = CryptoJS.util.bytesToHex(publicKey);

module.exports = publicKeyHex;