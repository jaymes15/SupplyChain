const itemManager = artifacts.require("./itemManager.sol");

contract("itemManage", accounts =>{

    it("should be able to add an Item", async function(){
        const itemManagerInstance = await itemManager.deployed();

        const itemName = "test 1";
        const itemPrice = 500;

        const result = await itemManagerInstance.createItem(itemName, itemPrice, {
            from: accounts[0]
        });
        console.log(result.logs[0].args);

        assert.equal(result.logs[0].args.__itemIndex, 0, "it's not the first item");

        const item = await itemManagerInstance.items(0);

        assert.equal(item._identifier, itemName, "The identifier was dfferent");
       
    });
});