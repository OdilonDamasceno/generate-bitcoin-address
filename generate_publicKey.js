var CryptoJS = require('cryptojs').Crypto;
var ec = require('eccrypto');
var privateKey = require('./generate_private_key.js');

// How the public key is generate.
// The public key is generated stating from encryptation type
// eliptics curves. More precisely a secp256k1 curve
var publicKey = ec.getPublic(Buffer.from(CryptoJS.util.hexToBytes(privateKey)));

module.exports = publicKey;