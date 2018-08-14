// index-mgr.js - Index manager

const fs = require('fs');
const path = require('path');
const loopbackIndex = require('./loopback-index.js');
const fileIndex = require('./file-index.js');
const nrlsIndex = require('./nrls-index.js');
const scriptModule = require('../script-interpreter/script-interpreter.js');
const constants = require('../lib/constants.js');

const FILE_FILENAME = 'file-index.json';
const NRLS_FILENAME = 'nrls-index.json';

// Class to check existance of configuration files
class IndexConfigChecker {

  // Constructor
  constructor() {
    // Empty
  }

  // Check expected config files exist
  static check() {
    let result = [];
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, FILE_FILENAME)), FILE_FILENAME]);
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, NRLS_FILENAME)), NRLS_FILENAME]);

    return result;
  }

}

// Class to load index configuration information
class IndexConfig {

  // Constructor
  constructor() {
    try {
      // Get the config files for each index
      this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, FILE_FILENAME), constants.FILE_ENCODING));
      this.nrls = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, NRLS_FILENAME), constants.FILE_ENCODING));
    } catch(e) {
      throw new Error('Constructor error - ' + e.message);
    }
  }

}

// Class to manage pointers via different indexes
class IndexManager {

  // Constructor
  constructor() {
    try {
      // Get index config information
      let cfg = new IndexConfig();

      // Create instances of all indexes, passing in config information
      this.loopback = new loopbackIndex.LoopbackIndex();
      this.file = new fileIndex.FileIndex(cfg.file);
      this.nrls = new nrlsIndex.NrlsIndex(cfg.nrls);
    } catch(e) {
      throw new Error('Constructor error - ' + e.message);
    }
  }

  // check valid index name
  static isValidIndexName(name) {
    switch (name) {
      case constants.INDEX_LOOPBACK:
      case constants.INDEX_FILE:
      case constants.INDEX_NRLS:
        return true;
        break;

      default:
        return false;
    }
  }

  // create pointer in index
  create(pointer, index, pointerNumber, callback) {
    // Check arguments
    if (pointer == undefined) {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - pointer argument undefined.');
    }
    if (index == undefined) {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - index argument undefined.')
    }
    if (!IndexManager.isValidIndexName(index)) {
        throw new Error(`IndexManager.create(pointer, index, pointerNumber, callback) - index argument invalid.`);
    }
    if (pointerNumber == undefined) {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - pointerNumber argument undefined.')
    }
    if (typeof(pointerNumber) != 'number') {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - pointerNumber argument invalid.')
    }
    if (callback == undefined) {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - callback argument undefined.')
    }
    if (typeof(callback) != 'function') {
      throw new Error('IndexManager.create(pointer, index, pointerNumber, callback) - callback argument invalid.')
    }

    // Call index
    let response = '';

    switch (index) {
      case constants.INDEX_LOOPBACK:
        this.loopback.create(pointer, pointerNumber, callback);
        break;

      case constants.INDEX_FILE:
        this.file.create(pointer, pointerNumber, callback);
        break;

      case constants.INDEX_NRLS:
        this.nrls.create(pointer, pointerNumber, callback);
        break;
    }
  }

}

// Module exports
module.exports = {
  IndexConfigChecker,
  IndexConfig,
  IndexManager
}
