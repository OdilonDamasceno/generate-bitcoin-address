var CryptoJS = require('cryptojs').Crypto;
var Address = require('./src/generate_bitcoin_address');
var {publicKeyHex} = require('./src/generate_publicKey');
var WIF = require('./src/generate_wif');
var privateKey = require('./src/generate_private_key');
var compressedAddress = require('./src/generate_bitcoin_address_compressed');

console.log('Your private key is: ' + CryptoJS.util.bytesToHex(privateKey));
console.log('Your BTC address is: ' + Address);
console.log('Your compressed BTC address is:', compressedAddress);
console.log('----------------------------------------------------------------');
console.log('Your WIF is: ' + WIF);
console.log('Your public key is: ' + publicKeyHex);