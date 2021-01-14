const HandleRouter = artifacts.require('HandleRouterSimple')

module.exports = async (deployer, network, accounts) => {
  let factory = '0x00'

  if (network === 'kovan') {
    factory = '0x96485389Ff0Ff6048f17BBaCce1E38074ee06838' // Kovan
  }

  if (network === 'development') {
    factory = '0x00008e5Cf47395f484B558F2f244CA2f22444349' // Development
  }

  if (network === 'ropsten') {
    factory = '0xE320FE924bA03d14Bd9C49Ff61abA08465b3B099' // Ropsten
  }

  //const weth = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'

  await deployer.deploy(HandleRouter, factory)

  // test liquidity
  if (network === 'kovan') {
    const router = await HandleRouter.deployed();

    const aud = '0xabaf0c048Cb12d8D8f253e861ACe9d3303044F88';
    const jpy = '0x2457D44852CD8A271a26682CA3C3eC1159c9189E';

    const pair = await router.pairFor(aud, jpy);
    console.log(pair);

    const reserves = await router.getReserves(aud, jpy);
    console.log(reserves);
  }
}
