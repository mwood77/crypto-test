# Some kind of blockchain madness (etherium)

## Reqs
```
npm i
```
#### Things used
1. Truffle (framework)
1. gnache (gnache cli) - a local eth blockchain used for dev/testing
1. @openzeppelin/contracts - scaffolding / reusable 'contracts'
1. chai - unit testing
1. an account at [Alchemy](https://alchemy.com/?r=8a998da78c2ea302) _(referal link)_

## Running it
1. write some contracts and put them in `~/contracts/...`
1. compile the contracts
    ```
    npx truffle compile
    ```
1. start up the blockchain
    ```
    npx ganache-cli --deterministic (static ip address)
    ```
1. configure truffle to interact with your blockchain (`truffle-config.js` and `~/migrations/2_deploy.js`)
1. deploy the compiled contracts
    ```
    npx truffle migrate --network development
    ```

## Interact with your deployed contracts (Locally)
> Do everything, or some of it, in [Running it](#runnint-it)

> Follow the steps here: https://docs.openzeppelin.com/learn/deploying-and-interacting#interacting-from-the-console

1. `npx truffle console --network development`
1. now type in js-like code into your console (terrible)

### Alternative (best way)
1. add a script to `~/scripts/newfilehere.js`
1. run this script, while you blockchain is alive: `npx truffle exec --network development ./scripts/your_js_file`
    ```
    npx truffle exec --network development ./scripts/index.js
    ```

## Interact with your deployed contracts (Live - Ropsten)
> [A great tutorial](https://docs.openzeppelin.com/learn/connecting-to-public-test-networks#accessing-a-testnet-node)


1. connect to goerli test net
    ```
    npx truffle console --network goerli
    ```
1. list your goerli accounts;
    ```
    truffle(goerli)> accounts
    ```
1. check the balance of an account(s)
    ```
    await web3.eth.getBalance(accounts[n])
    ```
1. Get `wei`: https://goerlifaucet.com/ (alchemy account needed)

1. Check the balance again, to make sure you recieved some ETH.

1. Deploy your contract to Goerli
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