const HandleRouter = artifacts.require('HandleRouterSimple')

module.exports = async (deployer) => {
  const factory = '0x0075138782759B49c760832329eee046fddAD920'
  await deployer.deploy(
    HandleRouter,
    factory
    //'0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5' //weth
  )
}
