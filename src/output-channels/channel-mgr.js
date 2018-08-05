// channel-mgr.js - Channel manager

const fs = require('fs');
const path = require('path');
const sinkOut = require('./sink-channel.js');
const fileOut = require('./file-channel.js');
const intersystemsOut = require('./intersystems-channel.js');
const meshOut = require('./mesh-channel.js');
const constants = require('../lib/constants.js');

const FILE_FILENAME = 'file-channel.json';
const INTERSYSTEMS_FILENAME = 'intersystems-channel.json';
const MESH_FILENAME = 'mesh-channel.json';

// Class to check existance of configuration files
class ChannelConfigChecker {

  // Constructor
  constructor() {
  }

  // Check expected config files exist
  static check() {
    let result = [];
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, FILE_FILENAME)), FILE_FILENAME]);
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, INTERSYSTEMS_FILENAME)), INTERSYSTEMS_FILENAME]);
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, MESH_FILENAME)), MESH_FILENAME]);

    return result;
  }

}

// Class to load channel configuration information
class ChannelConfig {

  // Constructor
  constructor() {
    try {
      // Get the config files for each channel
      this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, FILE_FILENAME), constants.FILE_ENCODING));
      this.intersystems = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, INTERSYSTEMS_FILENAME), constants.FILE_ENCODING));
      this.mesh = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, MESH_FILENAME), constants.FILE_ENCODING));
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
      throw new Error('ChannelConfig.constructor() - ' + e.message);
    }
  }

  // check valid channel value
  static isValidChannelName(name) {
    switch (name) {
      case constants.CHANNEL_SINK:
      case constants.CHANNEL_FILE:
      case constants.CHANNEL_INTERSYSTEMS:
      case constants.CHANNEL_MESH:
        return true;
        break;

      default:
        return false;
    }
  }

  // publish event
  publish(event, format, channel) {
    switch (channel) {
      case constants.CHANNEL_SINK:
        this.sink.publish(event, format);
        break;

      case constants.CHANNEL_FILE:
        this.file.publish(event, format);
        break;

      case constants.CHANNEL_INTERSYSTEMS:
        this.intersystems.publish(event, format);
        break;

      case constants.CHANNEL_MESH:
        this.mesh.publish(event, format);
        break;

      default:
        throw new Error('ChannelManager.publish(event, format, channel) - invalid channel "' + channel + '"')
    }
  }

}

// Module exports
module.exports = {
  ChannelConfigChecker,
  ChannelConfig,
  ChannelManager
}
