const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;

  const exchangeContract = await ethers.getContractFactory("Exchange");

  const deployedExchangeContract = await exchangeContract.deploy(cryptoDevTokenAddress);

  await deployedExchangeContract.deployed();

  console.log("Exchange Contract Address: ", deployedExchangeContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
