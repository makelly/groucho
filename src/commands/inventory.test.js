// inventory.test.js - Inventory tests

const expect = require('expect');
const inventory = require('./inventory.js');

describe('Class InventoryCommand tests', () => {

  it('should new InventoryCommand()', () => {
    let i = new inventory.InventoryCommand();

    expect(i).toExist();
  });

  // No test for InventoryCommand.do()

});
