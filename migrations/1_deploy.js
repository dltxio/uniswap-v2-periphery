const HandleRouter = artifacts.require('HandleRouter')

module.exports = async deployer => {
  const factory = '0x69033344ba467D6FB53708C46a6aEa39CBed7BDc'
  const weth = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'

  await deployer.deploy(HandleRouter, factory, weth)
}
