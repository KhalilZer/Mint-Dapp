require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
const dotenv=require("dotenv");

dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    
      goerly:{
        url:process.env.URL,
        accounts:[process.env.PRIVATE_KEY],
        gas: 2100000,
      gasPrice: 8000000000
      },
      
  },
  etherscan: {
        apiKey:process.env.ETHERSCAN_KYE

      }
};
