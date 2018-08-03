// inventory.test.js - Inventory tests

const expect = require('expect');

const inv = require('./inventory.js');

describe('Class InventoryCommand tests', () => {

  it('should new InventoryCommand()', () => {
    let i = new inv.InventoryCommand();

    expect(i).toExist();
  });

});
