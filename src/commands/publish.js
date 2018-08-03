// publish.js - Publish events

const scrip = require('../script-interpreter/script-interpreter.js');
const cMgr = require('../output-channels/channel-mgr');

// Class to implement the publish command
class PublishCommand {

  // Constructor
  constructor(script, channel, verbose) {
    // Validate arguments
    if (script == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script argument undefined.');
    }
    if (!scrip.ScriptInterpreter.existsScript(script)) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script not found.');
    }
    if (channel == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - channel argument undefined.');
    }
    if (!cMgr.ChannelManager.isValidChannelName(channel)) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - channel argument invalid.');
    }
    if (verbose == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - verbose argument undefined.')
    }
    if (typeof verbose != 'boolean') {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - verbose argument invalid.');
    }

    // Store arguments
    this.script = script;
    this.channel = channel;
    this.verbose = verbose;
  }

  // Do the command
  do() {
    console.log('Not implemented yet!');
  }

}

// Export modules
module.exports = {
  PublishCommand
}
