// file-channel.js - File output channel

const constants = require('../lib/constants.js');

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

    try {
      // TBD
    } catch(e) {
      throw new Error(e.message);
    }
  }

  // Publish event
  publish(data, format, eventID) {
    // Check arguments
    if (data == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID) - format argument undefined.')
    }
    switch (format) {
      case constants.PUBLISH_XML:
      case constants.PUBLISH_JSON:
        break;
      default:
        throw new Error(`FileChannel.publish(data, format, eventID) - format argument invalid. Value = ${format} expected xml | json .`);
    }
    if (eventID == undefined) {
      throw new Error('FileChannel.publish(data, format, eventID) - eventID argument undefined.')
    }
    // To Do

    // evt-<datetime>-<rnd>.<xml | json>
    return OK;
  }

}

// Module exports
module.exports = {
  FileChannel
}
