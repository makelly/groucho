// index-mgr.js - Index manager

const fs = require('fs');
const path = require('path');
const scriptModule = require('../script-interpreter/script-interpreter.js');

// Class to check existance of configuration files
class IndexConfigChecker {

  // Constructor
  constructor() {
    // Empty
  }

  // Check expected config files exist
  static check() {
    var result = [];
    //result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, fileFileName)), fileFileName]);
    //result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, intersystemsFileName)), intersystemsFileName]);
    //result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, meshFileName)), meshFileName]);

    return result;
  }

}

// Class to load index configuration information
class IndexConfig {

  // Constructor
  constructor() {
    try {
      // Get the config files for each index
      //this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, fileFileName), FILE_ENCODING));
      //this.intersystems = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, intersystemsFileName), FILE_ENCODING));
      //this.mesh = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, meshFileName), FILE_ENCODING));
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
      //this.sink = new sinkOut.SinkChannel();
      //this.file = new fileOut.FileChannel(cfg.file);
      //this.intersystems = new intersystemsOut.InterSystemsChannel(cfg.intersystems);
      //this.mesh = new meshOut.MeshChannel(cfg.mesh);
    } catch(e) {
      throw new Error('Constructor error - ' + e.message);
    }
  }

  // check valid index name
  static isValidIndexName(name) {
    switch (name) {
      case scriptModule.INDEX_LOOPBACK:
        return true;
        break;

      default:
        return false;
    }
  }

}

// Module exports
module.exports = {
  IndexConfigChecker,
  IndexConfig,
  IndexManager
}
