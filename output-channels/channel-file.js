// channel-file.js - file output channel

// Class to save event as a file
class FileChannel {
  // constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // should validate and throw an error if there are any problems
    // TBD
  }

  // Publish event
  publish(data, format) {
    // Check arguments
    if (data == undefined) {
      throw new Error('Data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('Format argument undefined.')
    }
    switch (format) {
      case 'json':
      case 'xml':
        break;
      default:
        throw new Error('Format argument invalid');
    }
    // To Do
  }
}

// Export modules
module.exports = {
  FileChannel
}
