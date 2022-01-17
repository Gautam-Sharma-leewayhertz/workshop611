//for deploy a demo.sol
const demo = artifacts.require("demo");

module.exports = function (deployer) {
  deployer.deploy(demo);
};
