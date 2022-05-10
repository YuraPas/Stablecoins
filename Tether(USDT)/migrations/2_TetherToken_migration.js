const TetherToken = artifacts.require("TetherToken");

module.exports = function (deployer) {
  deployer.deploy(TetherToken, "Tether", "USDT");
};
