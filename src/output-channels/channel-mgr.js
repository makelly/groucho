// channel-mgr.js - channel manager

const fs = require('fs');
const path = require('path');

const sinkOut = require('./sink-channel.js');
const fileOut = require('./file-channel.js');
const intersystemsOut = require('./intersystems-channel.js');
const meshOut = require('./mesh-channel.js');

const folder = 'config';
const fileEncoding = 'utf8';
const fileFileName = 'file-channel.json';
const intersystemsFileName = 'intersystems-channel.json';
const meshFileName = 'mesh-channel.json';

const sinkValue = 'sink';
const fileValue = 'file';
const intersystemsValue = 'intersystems';
const meshValue = 'mesh';

// Class to check existance of configuration files
class ChannelConfigChecker {

  // Constructor
  constructor() {
  }

  // Check expected config files exist
  static check() {
    var result = [];
    result.push([fs.existsSync(path.join(__dirname, '../..', folder, fileFileName)), fileFileName]);
    result.push([fs.existsSync(path.join(__dirname, '../..', folder, intersystemsFileName)), intersystemsFileName]);
    result.push([fs.existsSync(path.join(__dirname, '../..', folder, meshFileName)), meshFileName]);

    return result;
  }

}

// Class to load channel configuration information
class ChannelConfig {

  // Constructor
  constructor() {
    try {
      // Get the config files for each channel
      this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', folder, fileFileName), fileEncoding));
      this.intersystems = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', folder, intersystemsFileName), fileEncoding));
      this.mesh = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', folder, meshFileName), fileEncoding));
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
  static isValid(value) {
    switch (channelName) {
      case sinkValue:
      case fileValue:
      case intersystemsValue:
      case meshValue:
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
