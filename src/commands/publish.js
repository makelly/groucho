// publish.js - Publish events

const scriptModule = require('../script-interpreter/script-interpreter.js');
const channelModule = require('../output-channels/channel-mgr');

// Class to implement the publish command
class PublishCommand {

  // Constructor
  constructor(script, channel, verbose) {
    // Validate arguments
    if (script == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script argument undefined.');
    }
    if (!scriptModule.ScriptInterpreter.existsScript(script)) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script not found.');
    }
    if (channel == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - channel argument undefined.');
    }
    if (!channelModule.ChannelManager.isValidChannelName(channel)) {
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
    // Run the script
    let scriptInterpreter = new scriptModule.ScriptInterpreter();
    scriptInterpreter.runPublishScript(this.script, this.channel, this.verbose);
  }

}

// Module exports
module.exports = {
  PublishCommand
}
