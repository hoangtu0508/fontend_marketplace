require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/wGxzQ5oV3wMC_Xd0AgARQUa18nbd2TT8",
      accounts: [`0x${"59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"}`],
    },
  },
};
