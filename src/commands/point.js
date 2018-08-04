// point.js - Manage pointers

const scriptModule = require('../script-interpreter/script-interpreter.js');
const indexModule = require('../index-servers/index-mgr.js');

// Class to implement the point command
class PointCommand {

  // Constructor
  constructor(script, index, verbose) {
    // Validate arguments
    if (script == undefined) {
      throw new Error('PointCommand.constructor(script, index, verbose) - script argument undefined.');
    }
    if (!scriptModule.ScriptInterpreter.existsScript(script)) {
      throw new Error('PointCommand.constructor(script, index, verbose) - script not found.');
    }
    if (index == undefined) {
      throw new Error('PointCommand.constructor(script, index, verbose) - index argument undefined.');
    }
    if (!indexModule.IndexManager.isValidIndexName(index)) {
      throw new Error('PointCommand.constructor(script, index, verbose) - index argument invalid.');
    }
    if (verbose == undefined) {
      throw new Error('PointCommand.constructor(script, index, verbose) - verbose argument undefined.')
    }
    if (typeof verbose != 'boolean') {
      throw new Error('PointCommand.constructor(script, index, verbose) - verbose argument invalid.');
    }

    // Store arguments
    this.script = script;
    this.index = index;
    this.verbose = verbose;
  }

  // Do the command
  do() {
    console.log('Not implemented yet!');
  }

}

// Module exports
module.exports = {
  PointCommand
}
