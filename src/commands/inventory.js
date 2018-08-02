// inventory.js - find and list inventory assets

const logSymbols = require('log-symbols');
const colors = require('colors');

const channelMgr = require('../output-channels/channel-mgr.js');
const scriptInt = require('../script-interpreter/script-interpreter.js');

// Class to implement the inventory command
class InventoryCommand {

  // constructor
  constructor() {
  }

  // Do the command
  do() {
    const pad2 = '  ';
    const pad7 = '       ';

    console.log('Checking inventory...');

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
    // Other configuration files go here
    // TBD

    // Count number of files in /data
    console.log('Number of files in /data:' + scriptInt.ScriptInterpreter.countData());
    // Count number of files in /templates
    console.log('Number of files in /templates:' + scriptInt.ScriptInterpreter.countTemplates());
    // Count number of files in /scripts
    console.log('Number of files in /scripts:' + scriptInt.ScriptInterpreter.countScripts());
  }

}

// Export modules
module.exports = {
  InventoryCommand
}
