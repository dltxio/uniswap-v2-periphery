const HandleRouter = artifacts.require('HandleRouter')

module.exports = async (deployer, network, accounts) => {
  if (network === 'development') {
    const router = await HandleRouter.deployed()

    const address = await router.pairFor(
      '0xbEE597Ad7674a9E92bc284515d35Fd20E2b81371',
      '0x7FB799BeCD588f2f6395DCc17f54C1fF350D2464'
    )
    console.log(address)

    await router.addLiquidity(
      '0xbEE597Ad7674a9E92bc284515d35Fd20E2b81371',
      '0x7FB799BeCD588f2f6395DCc17f54C1fF350D2464',
      10,
      10,
      5,
      5,
      accounts[1],
      1893456000
    )
  }
}
