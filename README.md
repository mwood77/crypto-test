# Some kind of blockchain madness (ethereum)

## Reqs
### Install dependencies
```
npm i
```
### Things used
1. Truffle (framework)
1. Gnache CLI - a local eth blockchain used for dev/testing
1. `@openzeppelin/contracts` - scaffolding / reusable 'contracts'
1. Chai - unit testing
1. an account at [Alchemy](https://alchemy.com/?r=8a998da78c2ea302) _(referal link)_

## Running it
1. Write some solidity contracts and put them in `~/contracts/...`
1. Compile the contracts
    ```
    npx truffle compile
    ```
1. Start up your local blockchain instance
    ```
    npx ganache-cli --deterministic (static ip address)
    ```
1. Configure truffle to interact with your blockchain (
    - look in `truffle-config.js` and `~/migrations/2_deploy.js`
1. Deploy the compiled contracts
    ```
    npx truffle migrate --network development
    ```

## Interact with your locally deployed contracts
> Follow the steps here: https://docs.openzeppelin.com/learn/deploying-and-interacting#interacting-from-the-console

> Do everything, or some of the steps in [Running it](#runnint-it)

### Use the CLI
1. `npx truffle console --network development`
1. Now type js-like code into your console _(terrible)_

### Alternative Method (best way)
1. Add a script to `~/scripts/newfilehere.js`
1. Run this script, while your blockchain is alive: `npx truffle exec --network development ./scripts/your_js_file`
    ```
    npx truffle exec --network development ./scripts/index.js
    ```

## Interact with your testnet deployed contracts (Live - goerli network)
> [A great tutorial](https://docs.openzeppelin.com/learn/connecting-to-public-test-networks#accessing-a-testnet-node)


1. Connect to goerli testnet
    ```
    npx truffle console --network goerli
    ```
1. List your goerli accounts;
    ```
    truffle(goerli)> accounts
    ```
1. Check the balance of an account(s)
    ```
    await web3.eth.getBalance(accounts[n])
    ```
1. Get `wei`: https://goerlifaucet.com/ (alchemy account needed)

1. Check the balance again to make sure you recieved some ETH

1. Deploy your contract to goerli
    ```
    npx truffle migrate --network goerli
    ```
1. Interact with your contract
    ```
    npx truffle exec --network goerli ./scripts/index.js
    ```

## Testing

### Unit tests
1.  ```
    npx truffle test
    ```

## Deploying to Mainnet
> [read this article](https://docs.openzeppelin.com/learn/preparing-for-mainnet)
