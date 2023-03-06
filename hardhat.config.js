require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/9c72329be5d64f81810d287de01e8edd`,
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [
        "4bbecad8791f17193934f9ba8a2773ab2c7a5d9db534dc1c9179798bb4070a1d",
      ],
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/9c72329be5d64f81810d287de01e8edd`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [
        "4bbecad8791f17193934f9ba8a2773ab2c7a5d9db534dc1c9179798bb4070a1d",
      ],
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
