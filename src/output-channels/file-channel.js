// file-channel.js - file output channel

// Class to save event as a file
class FileChannel {

  // constructor
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
      case 'json':
      case 'xml':
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
