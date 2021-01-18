const HandleRouter = artifacts.require('HandleRouterSimple')
const Factory = artifacts.require('./Interfaces/IUniswapV2Factory')
const Token = artifacts.require('./Interfaces/IERC20')

module.exports = async (deployer, network, accounts) => {
  let factory_address = '0x00'

  if (network === 'kovan') {
    factory_address = '0x9FF4B21B4d0a3A9E43ECDFaC9DDA70c3ebD87F5a' // Kovan
  }

  if (network === 'development') {
    factory_address = '0x9FF4B21B4d0a3A9E43ECDFaC9DDA70c3ebD87F5a' // Development
  }

  if (network === 'ropsten') {
    factory_address = '0xE320FE924bA03d14Bd9C49Ff61abA08465b3B099' // Ropsten
  }

  //const weth = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'

  await deployer.deploy(HandleRouter, factory_address)
  const router = await HandleRouter.deployed()
  const _factory = await router.factory()
  //console.log(_factory);

  const factory = await Factory.at(_factory)
  console.log(factory.address)

  let aud = '0x00'
  let jpy = '0x00'

  // test liquidity
  if (network === 'kovan') {
    aud = '0xabaf0c048Cb12d8D8f253e861ACe9d3303044F88'
    jpy = '0x2457D44852CD8A271a26682CA3C3eC1159c9189E'
  }

  if (network === 'development') {
    aud = '0x3098cE2de41ddceF66B5b0CD1957b0b8812D12c4'
    jpy = '0xde4F997e17830F1c5fDC03e10183cc74051d119e'
  }

  const pair = await factory.getPair(aud, jpy);
  console.log("pair")
  console.log(pair);

  const liquidity = await router.addLiquidity(
    aud,
    jpy,
    pair,
    10,
    10,
    5,
    5,
    accounts[1],
    1893456000
  )
}
