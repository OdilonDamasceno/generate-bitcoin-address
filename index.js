var CryptoJS = require('cryptojs').Crypto;
var Address = require('./generate_bitcoin_address');
var publicKey = require('./generate_publicKey');
var WIF = require('./generate_wif');
var privateKey = require('./generate_private_key');

console.log('Your private key is: ' + CryptoJS.util.bytesToHex(privateKey));
console.log('Your BTC address is: ' + Address);
console.log('----------------------------------------------------------------');
console.log('Your WIF is: ' + WIF);
console.log('Your public key is: ' + publicKey);