// point.js - manage pointers

// Class to implement the point command
class PointCommand {
  // constructor
  constructor(verbose) {
    // Validate arguments
    if (verbose == undefined) {
      throw new Error('PointCommand.constructor(verbose) - verbose argument undefined.')
    }
    if (typeof verbose != 'boolean') {
      throw new Error('PointCommand.constructor(verbose) - verbose argument invalid.');
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
  PointCommand
}
