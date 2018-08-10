// file-channel.js - File output channel

const tmp = require('tmp');
const fs = require('fs');
const path = require('path');

const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory');
const abstract = require('./channel.js');

const OK = 'OK';

// Class to save event as a file
class FileChannel extends abstract.Channel {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    super(config);
    // Validate
    if (config == undefined) {
      throw new Error('FileChannel.constructor(config) - config argument undefined.')
    }
    if (config.fullPath == undefined) {
      throw new Error('FileChannel.constructor(config) - config.fullPath undefined.');
    }

    // Store config
    this.config = config;
  }

  // Publish event
  publish(data, format, eventID, eventType, eventNumber, callback) {
    // No validation of arguments as will always be called by ChannelManager

    // Check if directory exists
    if (!fs.existsSync(this.config.fullPath)) {
      // Doesn't so create it
      try {
        fs.mkdirSync(this.config.fullPath);
      } catch(e) {
        throw new Error('FileChannel.publish(data, format, eventID) - mkdir ' + e.message);
      }
    }

    // Create file name
    let args = {};
    args.dir = this.config.fullPath;
    args.template = 'evt-' + eventType + '-XXXXXX.';
    let fname = tmp.tmpNameSync(args) + format;
    // Write file
    try {
      fs.writeFileSync(path.join(this.config.fullPath, fname), data);
    } catch(e) {
      throw new Error('FileChannel.publish(data, format, eventID) - write file ' + e.message);
    }

    callback(eventNumber, OK);
  }

}

// Module exports
module.exports = {
  FileChannel
}
