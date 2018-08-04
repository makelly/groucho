// inventory.js - Find and list inventory assets

const logSymbols = require('log-symbols');
const colors = require('colors');
const channelModule = require('../output-channels/channel-mgr.js');
const scriptModule = require('../script-interpreter/script-interpreter.js');

// Class to implement the inventory command
class InventoryCommand {

  // Constructor
  constructor() {
    // Empty
  }

  // Do the command
  do() {
    // Constants to add spaces to console.log()
    const space2 = '  ';
    const space7 = '       ';

    console.log('Checking inventory...');

    // Check we have all the expected config files
    console.log('Configuration files in /config:');
    // Channels
    let result = channelModule.ChannelConfigChecker.check();
    for (let i = 0; i < result.length; i++) {
      if (result[i][0]) {
        console.log(space2 + logSymbols.success.green + space2 + result[i][1]);
      } else {
        console.log(space2 + logSymbols.error.red + space2 + result[i][1]);
        console.log(space7 + 'Missing file.'.red);
      }
    }
    // Other configuration files go here
    // TBD

    // Count number of files in /data
    console.log('Number of files in /' + scriptModule.DATA_FOLDER + ': ' + scriptModule.ScriptInterpreter.countData());
    // Count number of files in /templates
    console.log('Number of files in /' + scriptModule.TEMPLATES_FOLDER + ': ' + scriptModule.ScriptInterpreter.countTemplates());
    // Count number of files in /scripts
    console.log('Number of files in /' + scriptModule.SCRIPTS_FOLDER + ': ' + scriptModule.ScriptInterpreter.countScripts());
  }

}

// Module exports
module.exports = {
  InventoryCommand
}
