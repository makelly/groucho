// file-index.js - File index

const abstract = require('./index.js');

const OK = 'OK';

class FileIndex extends abstract.Index {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    super(config);
    // Validate
    if (config == undefined) {
      throw new Error('FileIndex.constructor(config) - config argument undefined.')
    }
    if (config.fullPath == undefined) {
      throw new Error('FileIndex.constructor(config) - config.fullPath undefined.');
    }

    // Store config
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
  FileIndex
}
