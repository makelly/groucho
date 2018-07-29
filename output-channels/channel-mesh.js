// channel-mesh.js - MESH output channel

const _ = require('lodash');

// Class to send event using MESH
class MeshChannel {
  // constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // should validate and throw an error if there are any problems
    // TBD
    try {

    } catch(e) {
      throw new Error(e.message);
    }
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
  MeshChannel
}
