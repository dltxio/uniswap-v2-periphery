const HandleRouter = artifacts.require('HandleRouter')

module.exports = async (deployer) => {
  await deployer.deploy(
    HandleRouter,
    '0xEA4EEA1fF38b08794564F97349C66531f02d333C',
    '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5' //weth
  )
}
