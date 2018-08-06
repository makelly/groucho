// healthshare-channel.js - InterSystems HealthShare output channel

const axios = require('axios');
const constants = require('../lib/constants.js');

const OK = 'OK';

// Class to send event using InterSystems HealthShare EMS API
class HealthShareChannel {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // Validate
    if (config == undefined) {
      throw new Error('HealthShareChannel.constructor(config) - config argument undefined.')
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
      throw new Error('healthshareOutChannel.publish(data, format, eventID) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('HealthShareChannel.publish(data, format, eventID) - format argument undefined.')
    }
    switch (format) {
      case constants.PUBLISH_XML:
      case constants.PUBLISH_JSON:
        break;
      default:
        throw new Error(`HealthShareChannel.publish(data, format, eventID) - format argument invalid. Value = ${format} expected xml | json .`);
    }
    if (eventID == undefined) {
      throw new Error('HealthShareChannel.publish(data, format, eventID) - eventID argument undefined.')
    }

    // To Do

    return OK;
  }

}

// Module exports
module.exports = {
  HealthShareChannel
}
