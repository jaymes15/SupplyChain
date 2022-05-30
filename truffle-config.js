const path = require("path");
require('dotenv').config({path: __dirname + '/.env'});;

const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraRinkebyURL = process.env['RINKEBY_NETWORK'];
const mnemonic = process.env['ACC_MNEMONIC'];

console.log(`MMMMM ${mnemonic}`);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraRinkebyURL),
      network_id: 4,
      gas: 5500000,        
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }

};
