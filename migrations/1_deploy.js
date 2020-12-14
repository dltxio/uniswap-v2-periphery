const HandleRouter = artifacts.require('HandleRouterSimple')

module.exports = async deployer => {
  const factory = '0xE320FE924bA03d14Bd9C49Ff61abA08465b3B099' // Ropsten
  // const weth = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'

  await deployer.deploy(HandleRouter, factory)
}
