// channel-mgr.js - Channel manager

const fs = require('fs');
const path = require('path');

const sinkOut = require('./sink-channel.js');
const fileOut = require('./file-channel.js');
const intersystemsOut = require('./intersystems-channel.js');
const meshOut = require('./mesh-channel.js');
const scrip = require('../script-interpreter/script-interpreter.js');

const CONFIG_FOLDER = scrip.CONFIG_FOLDER;
const FILE_ENCODING = scrip.FILE_ENCODING;
const CHANNEL_SINK = scrip.CHANNEL_SINK;
const CHANNEL_FILE = scrip.CHANNEL_FILE;
const CHANNEL_INTERSYSTEMS = scrip.CHANNEL_INTERSYSTEMS;
const CHANNEL_MESH = scrip.CHANNEL_MESH;

const fileFileName = 'file-channel.json';
const intersystemsFileName = 'intersystems-channel.json';
const meshFileName = 'mesh-channel.json';

// Class to check existance of configuration files
class ChannelConfigChecker {

  // Constructor
  constructor() {
  }

  // Check expected config files exist
  static check() {
    var result = [];
    result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, fileFileName)), fileFileName]);
    result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, intersystemsFileName)), intersystemsFileName]);
    result.push([fs.existsSync(path.join(__dirname, '../..', CONFIG_FOLDER, meshFileName)), meshFileName]);

    return result;
  }

}

// Class to load channel configuration information
class ChannelConfig {

  // Constructor
  constructor() {
    try {
      // Get the config files for each channel
      this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, fileFileName), FILE_ENCODING));
      this.intersystems = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, intersystemsFileName), FILE_ENCODING));
      this.mesh = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', CONFIG_FOLDER, meshFileName), FILE_ENCODING));
    } catch(e) {
      throw new Error('Constructor error - ' + e.message);
    }
  }

}

// Class to manage publishing events via different output channels
class ChannelManager {

  // constructor
  constructor() {
    try {
      // Get channel config information
      let cfg = new ChannelConfig();

      // Create instances of all output channels, passing in config information
      this.sink = new sinkOut.SinkChannel();
      this.file = new fileOut.FileChannel(cfg.file);
      this.intersystems = new intersystemsOut.InterSystemsChannel(cfg.intersystems);
      this.mesh = new meshOut.MeshChannel(cfg.mesh);
    } catch(e) {
      throw new Error('Constructor error - ' + e.message);
    }
  }

  // check valid channel value
  static isValidChannelName(name) {
    switch (name) {
      case CHANNEL_SINK:
      case CHANNEL_FILE:
      case CHANNEL_INTERSYSTEMS:
      case CHANNEL_MESH:
        return true;
        break;

      default:
        return false
    }
  }

}

// Export modules
module.exports = {
  ChannelConfigChecker,
  ChannelConfig,
  ChannelManager
}
