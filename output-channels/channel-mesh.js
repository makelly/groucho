// channel-mesh.js - MESH output channel

// Class to send event using MESH
class MeshChannel {
  // constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // Validate
    if (config == undefined) {
      throw new Error('MeshChannel.constructor(config) - config argument undefined.')
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
      throw new Error('MeshChannel.publish(data, format) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('MeshChannel.publish(data, format) - format argument undefined.')
    }
    switch (format) {
      case 'json':
      case 'xml':
        break;
      default:
        throw new Error(`InterSystemsChannel.publish(data, format) - format argument invalid. Value = ${format} expected xml | json .`);
    }

    // To Do
  }
}

// Export modules
module.exports = {
  MeshChannel
}
