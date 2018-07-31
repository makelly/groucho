// mesh-channel.js - MESH output channel

const axios = require('axios');

// Class to send event using MESH
class MeshChannel {
  // constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    // Validate
    if (config == undefined) {
      throw new Error('MeshChannel.constructor(config) - config argument undefined.')
    }
    if (config.url == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.url undefined.');
    }
    if (config.sendersMailboxID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.sendersMailboxID undefined.');
    }
    if (config.recipientMailboxID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.recipientMailboxID undefined.');
    }
    if (config.workflowID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.workflowID undefined.');
    }
    if (config.userID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.userID undefined.');
    }
    if (config.password == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.password undefined.');
    }

    try {

    } catch(e) {
      throw new Error(e.message);
    }
  }

  // Make Authorisation Token
  makeToken(mailboxID) {
    let token = 'NHSMESH ' + mailboxID.toUpperCase();

    return token;
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
