require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind hole half arctic bottom gas'; 
let testAccounts = [
"0xa9aec602eeece3df2b654f4c0f374e7879c9c6aa1887eb8719d231bf2efe99d7",
"0x140a08646b28aa38058e75f21ea67755ef0c5751daad119cd75156c547ad5856",
"0xd30e3796e7d8b0df2c491d03c623f0fae92613582e0fff8d6d90f7cf5c78ab12",
"0x7641f64c73af6cf868aef29beba41e2ed5dce86a3ef477c60f39b1904668e352",
"0x6cd26a4ab6dda2dd50c6f790b024170a8b636c88f563c3f8abb6557eb4e31aa2",
"0x97cc14b2fd76e4c1ccedad5ae46cfb883675e28f527de895d7cd1d3b46ea19c8",
"0x0804294b967afefeb6a82d0608993ebf5d43b937b1cc14cdc7c9b1f264575b90",
"0x81b2d8fbcaef915ba0ce18c3a845b0526fa6e76e6bf756761f5ccd4add3ab716",
"0xce743030895e2690a2ce7edd60ff27983e1ceec15e27dab24a3fc2f726e96073",
"0x354e1f356f6d8ea72a4368af08365d8e0240b4a7ed92714b4b0f64a372c6b80b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

