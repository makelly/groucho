// inventory.js - find and list inventory assets

const fs = require('fs');
const path = require('path');
const logSymbols = require('log-symbols');
const colors = require('colors');

const channelMgr = require('../output-channels/channel-mgr.js');

// Class to implement the inventory command
class InventoryCommand {

  // constructor
  constructor() {
  }

  // Do the command
  do() {
    const pad2 = '  ';
    const pad7 = '       ';

    console.log('Check inventory...');
    console.log();

    // Check we have all the expected config files
    console.log('Configuration files in /config:');
    // Channels
    let result = channelMgr.ChannelConfigChecker.check();
    for (let i = 0; i < result.length; i++) {
      if (result[i][0]) {
        console.log(pad2 + logSymbols.success.green + pad2 + result[i][1]);
      } else {
        console.log(pad2 + logSymbols.error.red + pad2 + result[i][1]);
        console.log(pad7 + 'Missing file.'.red);
      }
    }
  }

}

// Export modules
module.exports = {
  InventoryCommand
}
