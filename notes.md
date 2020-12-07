Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_deploy.js
===========

   Deploying 'HandleRouter'
   ------------------------

Error:  *** Deployment Failed ***

"HandleRouter" -- Invalid number of parameters for "undefined". Got 2 expected 1!.

    at /home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:364:1
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at Migration._deploy (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:68:1)
    at Migration._load (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:55:1)
    at Migration.run (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:171:1)
    at Object.runMigrations (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.run (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
    at runMigrations (/home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:269:1)
    at /home/lucascullen/.nvm/versions/node/v12.16.1/lib/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:231:1
Truffle v5.1.46 (core: 5.1.46)
Node v12.16.1
lucascullen@SubZero:~/GitHub/dltx/uniswap-v2-periphery$ truffle deploy --network ropsten

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_deploy.js
===========

   Deploying 'HandleRouter'
   ------------------------
   > transaction hash:    0xe86bb5dcca1a0a1ffb4b356d6a88ec9899ddbf1ed3d2db4bbd70769cabcb9e3f
   > Blocks: 1            Seconds: 41
   > contract address:    0x2Ec22d2A7a7399f60A553a71BB0A22BA8B61f48D
   > block number:        9210645
   > block timestamp:     1607295872
   > account:             0xC29082511fEBc2185986d341ee8be3c9B2c66b66
   > balance:             6.191118338141613331
   > gas used:            2079126 (0x1fb996)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04158252 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9210647)
   > confirmation number: 2 (block: 9210648)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04158252 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.04158252 ETH


## Remove OP_CODE CREATE2

Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_deploy.js
===========

   Replacing 'HandleRouter'
   ------------------------
   > transaction hash:    0x31cfaeb21d30c4e01c7ab618bff30b7de3e3604954b89a0a864776fbdc224411
   > Blocks: 0            Seconds: 9
   > contract address:    0x4C297C43fF3A4466e5a493db55952B4Af5572010
   > block number:        9210757
   > block timestamp:     1607297109
   > account:             0xC29082511fEBc2185986d341ee8be3c9B2c66b66
   > balance:             6.148771265881706888
   > gas used:            2111058 (0x203652)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04222116 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9210758)
   > confirmation number: 2 (block: 9210759)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04222116 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.04222116 ETH


## Change CREATE_2

Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_deploy.js
===========

   Replacing 'HandleRouter'
   ------------------------
   > transaction hash:    0x8b29524a149baab7d2844411ffa0eb654d5308e92a8341c92582b269ea4c75d6
   > Blocks: 2            Seconds: 29
   > contract address:    c
   > block number:        9211053
   > block timestamp:     1607301057
   > account:             0xC29082511fEBc2185986d341ee8be3c9B2c66b66
   > balance:             6.023133208333396584
   > gas used:            2079126 (0x1fb996)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04158252 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9211055)
   > confirmation number: 2 (block: 9211056)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04158252 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.04158252 ETH