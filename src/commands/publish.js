// publish.js - publish events

const scriptInt = require('../script-interpreter/script-interpreter.js');

// Class to implement the publish command
class PublishCommand {

  // constructor
  constructor(script, channel, verbose) {
    // Validate arguments
    if (script == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script argument undefined.');
    }
    if (!scriptInt.ScriptInterpreter.existsScript(script)) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - script not found.');
    }
    if (channel == undefined) {
      throw new Error('PublishCommand.constructor(script, channel, verbose) - channel argument undefined.');
    }
//    if (!)
    if (verbose == undefined) {
      throw new Error('PublishCommand.constructor(verbose) - verbose argument undefined.')
    }
    if (typeof verbose != 'boolean') {
      throw new Error('PublishCommand.constructor(verbose) - verbose argument invalid.');
    }

    // Store arguments
    this.verbose = verbose;
  }

  // Do the command
  do() {
    console.log('Not implemented yet!');
    console.log(`verbose = ${this.verbose}`);
  }

}

// Export modules
module.exports = {
  PublishCommand
}
