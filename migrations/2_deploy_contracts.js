var CCDAO = artifacts.require("../contracts/CCDAO.sol");

 module.exports = function(deployer) {
  deployer.deploy(CCDAO, 'CCDAOToken', 'CCDAO', '10000000000000000000000');
 };