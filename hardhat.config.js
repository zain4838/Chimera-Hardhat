require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const mnemonic =
  "canvas pepper wheel ride lake clever board job float sheriff dial warrior";

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    bscnet: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic },
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};