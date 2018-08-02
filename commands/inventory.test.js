// inventory.test.js - inventory tests

const expect = require('expect');

const inv = require('./inventory.js');

describe('Class InventoryCommand tests', () => {

  it('should create InventoryCommand object', () => {
    let i = new inv.InventoryCommand();

    expect(i).toExist();
  });

});
