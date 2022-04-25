// Select the contract that we want to use
const Register05 = artifacts.require('Register05');

module.exports = function (deployer) {
    deployer.deploy(Register05);
};
