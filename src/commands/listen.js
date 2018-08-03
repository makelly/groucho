// listen.js - listen for requests

// Class to implement the listen command
class ListenCommand {

  // Constructor
  constructor(verbose) {
    // Validate arguments
    if (verbose == undefined) {
      throw new Error('ListenCommand.constructor(verbose) - verbose argument undefined.')
    }
    if (typeof verbose != 'boolean') {
      throw new Error('ListenCommand.constructor(verbose) - verbose argument invalid.');
    }

    // Store arguments
    this.verbose = verbose;
  }

  // Do the command
  do() {
    console.log('Not implemented yet!');
  }

}

// Export modules
module.exports = {
  ListenCommand
}
