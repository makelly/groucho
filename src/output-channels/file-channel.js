// file-channel.js - File output channel

const scrip = require('../script-interpreter/script-interpreter.js');

const PUBLISH_XML = scrip.PUBLISH_XML;
const PUBLISH_JSON = scrip.PUBLISH_JSON;

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

    } catch(e) {
      throw new Error(e.message);
    }
  }

  // Publish event
  publish(data, format) {
    // Check arguments
    if (data == undefined) {
      throw new Error('FileChannel.publish(data, format) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('FileChannel.publish(data, format) - format argument undefined.')
    }
    switch (format) {
      case PUBLISH_XML:
      case PUBLISH_JSON:
        break;
      default:
        throw new Error(`FileChannel.publish(data, format) - format argument invalid. Value = ${format} expected xml | json .`);
    }
    // To Do

    // evt-<datetime>-<rnd>.<xml | json>
  }

}

// Export modules
module.exports = {
  FileChannel
}
