var CryptoJS = require('cryptojs').Crypto;
var bs58 = require('bs58');
var privateKey = require('./generate_private_key');

// WIF is represented for a sequence of |1 byte|     32 bytes     | 4 bytes (checksum) |
// the first byte is the version
var version = '80';

// the next 32 bytes is your privateKey

var privateKeyVersion = version + CryptoJS.util.bytesToHex(privateKey);
// and the checksum is the validator
// And how the checksum is created?
// basically is the first 4 bytes of a Hash of hash of last 33 bytes
var firstHash = CryptoJS.SHA256(CryptoJS.util.hexToBytes(privateKeyVersion));
var secondHash = CryptoJS.SHA256(CryptoJS.util.hexToBytes(firstHash));
var checksum = secondHash.substr(0,8);

var WIF = privateKeyVersion+checksum;

// On the bitcoin network is used the base 58 for represent your address 
var finalWIF = bs58.encode(CryptoJS.util.hexToBytes(WIF));

module.exports = finalWIF;