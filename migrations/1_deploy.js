const HandleRouter = artifacts.require('HandleRouterSimple')

module.exports = async (deployer, network, accounts) => {
  let factory = '0x00'

  if (network === 'kovan') {
    factory = '0x57f3A5B59CF338a9aED9D14b01E9344CfDD3E121' // Kovan
  }

  if (network === 'development') {
    factory = '0x00008e5Cf47395f484B558F2f244CA2f22444349' // Development
  }

  if (network === 'ropsten') {
    factory = '0xE320FE924bA03d14Bd9C49Ff61abA08465b3B099' // Ropsten
  }

  //const weth = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'

  await deployer.deploy(HandleRouter, factory)
}
