module.exports = async function main (callback) {
    try {

        // retrieve accounts from local node
        const accounts = await web3.eth.getAccounts();
        console.log('accounts are\n=>', accounts);

        // setup truffle contract, representing our deployed 'Box' contract instance
        const Box = artifacts.require('Box');
        const box = await Box.deployed();

        // call the retrieve method inside the Box class
        const value = await box.retrieve();
        console.log('box value is:\n =>', value.toString());

        // send a transaction to store() a new value in the Box contract
        await box.store(23);

        // get updated value
        console.log('box value is:\n =>', value.toString());

        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
}