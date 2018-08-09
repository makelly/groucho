// file-channel.js - File output channel

const tmp = require('tmp');
const fs = require('fs');
const path = require('path');

const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory');

const OK = 'OK';

// Class to save event as a file
class FileChannel {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
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
  publish(data, format, eventID, eventType) {
    // Check arguments
    if (data == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID, eventType) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID, eventType) - format argument undefined.')
    }
    switch (format) {
      case constants.PUBLISH_XML:
      case constants.PUBLISH_JSON:
        break;
      default:
        throw new Error(`FileChannel.publish(data, format, eventID, eventType) - format argument invalid. Value = ${format} expected xml | json .`);
    }
    if (eventID == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID, eventType) - eventID argument undefined.')
    }
    if (eventType == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID, eventType) - eventType argument undefined.')
    }
    if (!factory.EventBuilder.isValidEventType(eventType)) {
      throw new Error('FileChannel.publish(data, format, eventID, eventType) - invalid eventType argument.')
    }

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

    return OK;
  }

}

// Module exports
module.exports = {
  FileChannel
}
