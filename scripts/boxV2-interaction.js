module.exports = async function main (callback) {
    try {

        // retrieve accounts from local node
        const accounts = await web3.eth.getAccounts();
        console.log('accounts are\n=>', accounts);

        // setup truffle contract, representing our deployed 'Box' contract instance
        const Box = artifacts.require('Box');
        const BoxV2 = artifacts.require('BoxV2');   // require newly upgraded version of 'Box' class
        
        const box = await Box.deployed();
        const boxV2_ = await BoxV2.at(box.address); // get new upgraded instance of BoxV2

        // call the retrieve method inside the Box class
        const value = await box.retrieve();
        console.log('box value is:\n =>', value.toString());
        
        // call method unique to BoxV2
        await boxV2_.increment();
        
        // get new value (value + n)
        // where n = the number of times .increment() has been invoked
        const valueBoxV2 = await boxV2_.retrieve();
        console.log('boxV2 value is:\n =>', valueBoxV2.toString());
        
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
}