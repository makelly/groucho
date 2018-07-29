// intersystems-channel.js - InterSystems output channel

// Class to send event using InterSystems API
class InterSystemsChannel {
  // constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // Validate
    if (config == undefined) {
      throw new Error('InterSystemsChannel.constructor(config) - config argument undefined.')
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
      throw new Error('InterSystemsChannel.publish(data, format) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('InterSystemsChannel.publish(data, format) - format argument undefined.')
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
  InterSystemsChannel
}
