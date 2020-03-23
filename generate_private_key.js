var CryptoJs = require('cryptojs').Crypto;

// The private key is represented for a random numbers of 32 bytes (or 256 bits)
var privateKey = CryptoJs.util.randomBytes(32);

// Here we change the numbers to hexadecimal numbers
var privateKeyHex = CryptoJs.util.bytesToHex(privateKey).toUpperCase();

module.exports = privateKeyHex;