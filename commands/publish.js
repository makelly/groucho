// publish.js - publish events

// Class to implement the publish command
class PublishCommand {
  // constructor
  constructor(verbose) {
    // Validate arguments
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
