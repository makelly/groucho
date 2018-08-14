// nrls-index.js - NRLS index

const abstract = require('./index.js');

const OK = 'OK';

class NrlsIndex extends abstract.Index {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    super(config);
    // Validate
    if (config == undefined) {
      throw new Error('NrlsIndex.constructor(config) - config argument undefined.')
    }

    // Store config values
    this.config = config;
  }

  // create record pointer
  create(pointer, pointerNumber, callback) {
    // No validation of arguments as will always be called by IndexManager
    // Does nothing
    callback(pointerNumber, OK, '');
  }

  // remove existing record pointer
  remove(pointer, pointerNumber, callback) {
    // No validation of arguments as will always be called by IndexManager
    // Does nothing
    callback(pointerNumber, OK, '');
  }

}

// Module exports
module.exports = {
  NrlsIndex
}
