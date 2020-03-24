var CryptoJS = require('cryptojs').Crypto;
var bs58 = require('bs58');
var bitcoin = require('bitcoinjs-lib');
var publicKey = require('./generate_publicKey.js');

var version = '00';

var publicKeyCompressedHexBytes = CryptoJS.util.hexToBytes(publicKey.publicKeyCompressedHex);

var publicKeyCompressedHexSHA256 = CryptoJS.SHA256(publicKeyCompressedHexBytes);

var hash160 = bitcoin.crypto.ripemd160(new Buffer.from(CryptoJS.util.hexToBytes(publicKeyCompressedHexSHA256)));

var hashBytes = Array.prototype.slice.call(hash160, 0);

hashBytes.unshift(CryptoJS.util.hexToBytes(version));

var firstHash = CryptoJS.SHA256(hashBytes);

var secHash = CryptoJS.SHA256(CryptoJS.util.hexToBytes(firstHash));

var checksum = secHash.substr(0,8);

var address = version + CryptoJS.util.bytesToHex(hash160) + checksum;

var finalAddressCompressed = bs58.encode(CryptoJS.util.hexToBytes(address));

module.exports = finalAddressCompressed;