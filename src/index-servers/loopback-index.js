// loopback-index.js - Loopback index

const abstract = require('./index.js');

const OK = 'OK';

class LoopbackIndex extends abstract.Index {

  // Constructor
  constructor(config) {
    // Empty
    super(config);
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
  LoopbackIndex
}
