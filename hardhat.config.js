require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1,
    },

    mainnet: {
      // Infura web3 project ID
        url: `https://polygon-mainnet.infura.io/v3/bbd25bb78c3442b9bcae882104805b4a`,
        accounts: [privateKey],
    },
    mumbai: {
      // Infura web3 project ID
        url: "https://polygon-mumbai.infura.io/v3/bbd25bb78c3442b9bcae882104805b4a",
        accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
