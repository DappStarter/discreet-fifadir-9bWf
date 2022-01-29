require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain snake grid arctic bottom torch'; 
let testAccounts = [
"0x66fa64999cbe4b9ccdfa93d53636b273c002f78ba76c8208469f7c74621ff259",
"0xd48e840c97343407d2e0f79e54457b6b73039f9eb83093f312e55c0f53083478",
"0xccb00eded6ce15cc4ae19645837de6d4bcd25a2282c75d8d499fa1b2bf20eaca",
"0xa9aaec78206ecec1017cd3d4ade3fdf353f56f815ab24bc982199c4e89d1d32c",
"0x7115e2ca6724205354e42954d255f216d43bcdeb39c4470d44a8318153cfb68f",
"0x9271d0cccdf3fb3d70f10c4cd21f873e3b2bdc48cb91505050da5ae9278e520e",
"0xdca9ddd629e5814d938053806df5b25fba3d69d978d741fa2649ae956a14edc0",
"0x5d8f85b44fd71b02b82b22b24b5136e92ccf176394675364558cca5ea721560e",
"0xbf9560023e694fbe17dcf8f4ad25d82de0e4f3a6fcf12fcf49c7c523701b8c92",
"0x9c3e6cb7a2ddfb4a1b7419912259a3e084041ca2e41a3110e2eec1699af70894"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

