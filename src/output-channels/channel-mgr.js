// channel-mgr.js - Channel manager

const fs = require('fs');
const path = require('path');
const sinkOut = require('./sink-channel.js');
const fileOut = require('./file-channel.js');
const healthshareOut = require('./healthshare-channel.js');
const meshOut = require('./mesh-channel.js');
const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory.js');

const FILE_FILENAME = 'file-channel.json';
const HEALTHSHARE_FILENAME = 'healthshare-channel.json';
const MESH_FILENAME = 'mesh-channel.json';

// Class to check existance of configuration files
class ChannelConfigChecker {

  // Constructor
  constructor() {
    // Empty
  }

  // Check expected config files exist
  static check() {
    let result = [];
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, FILE_FILENAME)), FILE_FILENAME]);
    result.push([fs.existsSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, HEALTHSHARE_FILENAME)), HEALTHSHARE_FILENAME]);
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
      this.healthshare = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.CONFIG_FOLDER, HEALTHSHARE_FILENAME), constants.FILE_ENCODING));
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
      this.sink = new sinkOut.SinkChannel({});
      this.file = new fileOut.FileChannel(cfg.file);
      this.healthshare = new healthshareOut.HealthShareChannel(cfg.healthshare);
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
      case constants.CHANNEL_HEALTHSHARE:
      case constants.CHANNEL_MESH:
        return true;
        break;

      default:
        return false;
    }
  }

  // publish event
  publish(event, format, channel, eventID, eventType, eventNumber, callback) {
    // Check arguments
    if (event == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - event argument undefined.');
    }
    if (format == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - format argument undefined.')
    }
    switch (format) {
      case constants.PUBLISH_XML:
      case constants.PUBLISH_JSON:
        break;
      default:
        throw new Error(`ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - format argument invalid.`);
    }
    if (channel == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - channel argument undefined.')
    }
    if (!ChannelManager.isValidChannelName(channel)) {
        throw new Error(`ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - channel argument invalid.`);
    }
    if (eventID == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - eventID argument undefined.')
    }
    if (eventType == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - eventType argument undefined.')
    }
    if (!factory.EventBuilder.isValidEventType(eventType)) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - invalid eventType argument.')
    }
    if (eventNumber == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - eventNumber argument undefined.')
    }
    if (typeof(eventNumber) != 'number') {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - eventNumber argument invalid.')
    }
    if (callback == undefined) {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - callback argument undefined.')
    }
    if (typeof(callback) != 'function') {
      throw new Error('ChannelManager.publish(event, format, channel, eventID, eventType, eventNumber, callback) - callback argument invalid.')
    }

    // Call channel
    let response = '';

    switch (channel) {
      case constants.CHANNEL_SINK:
        this.sink.publish(event, format, eventID, eventType, eventNumber, callback);
        break;

      case constants.CHANNEL_FILE:
        this.file.publish(event, format, eventID, eventType, eventNumber, callback);
        break;

      case constants.CHANNEL_HEALTHSHARE:
        this.healthshare.publish(event, format, eventID, eventType, eventNumber, callback);
        break;

      case constants.CHANNEL_MESH:
        this.mesh.publish(event, format, eventID, eventType, eventNumber, callback);
        break;
    }
  }

}

// Module exports
module.exports = {
  ChannelConfigChecker,
  ChannelConfig,
  ChannelManager
}
