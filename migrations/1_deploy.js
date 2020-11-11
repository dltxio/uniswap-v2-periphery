const HandleRouter = artifacts.require('HandleRouter')

module.exports = async deployer => {
  await deployer.deploy(
    HandleRouter,
    '0x9d839c337df3394e6D7982601762D43B97c5fBB7',
    '0xc778417e063141139fce010982780140aa0cd5ab'
  )
}
