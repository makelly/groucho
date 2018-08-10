// mesh-channel.js - MESH output channel

const validUrl = require('valid-url');
const uuidv4 = require('uuid/v4');
const dateFormat = require('dateformat');
const crypto = require('crypto');
const axios = require('axios');
const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory');
const abstract = require('./channel.js');

const MAX_NONCE_COUNT = 1000;
const OK = 'OK';

// Class to send event using MESH
class MeshChannel extends abstract.Channel{

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    super(config);
    // Validate
    if (config == undefined) {
      throw new Error('MeshChannel.constructor(config) - config argument undefined.')
    }
    if (config.url == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.url undefined.');
    }
    if (!validUrl.isUri(config.url)) {
      throw new Error('MeshChannel.constructor(config) - config.url invalid.');
    }
    if (config.senderMailboxID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.senderMailboxID undefined.');
    }
    if (config.recipientMailboxID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.recipientMailboxID undefined.');
    }
    if (config.workflowID == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.workflowID undefined.');
    }
    if (config.senderMailboxPassword == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.senderMailboxPassword undefined.');
    }
    if (config.sharedKey == undefined) {
      throw new Error('MeshChannel.constructor(config) - config.sharedKey undefined.');
    }

    // Store config values
    this.config = config;
    // Create nonce
    this.nonce = uuidv4();
    // Set nonce count to 1
    this.nonceCount = 1;
  }

  // Make Authorization Token
  makeToken() {
    // Check if nonceCount has reached MAX
    if (this.nonceCount == MAX_NONCE_COUNT) {
      // Create new nonce
      this.nonce = uuidv4();
      // Reset nonceCount to 1
      this.nonceCount = 1;
    }
    // Get current date and time
    let timeStamp = Date.now();
    // Create the HMAC-SHA256 Hash Code
    let hmac = crypto.createHmac('sha256', this.config.sharedKey);
    hmac.update(this.config.senderMailboxID.toUpperCase() + ':' + this.nonce + ':' + this.nonceCount.toString().padStart(3, '0') + ':' + this.config.senderMailboxPassword + ':' + dateFormat(timeStamp, 'yyyymmddHHMM'));
    // Create token
    let token = 'NHSMESH ' + this.config.senderMailboxID.toUpperCase() + ':' + this.nonce + ':' + this.nonceCount.toString().padStart(3, '0') + ':' + dateFormat(timeStamp, 'yyyymmddHHMM') + ':' + hmac.digest('hex');
    // Increment the nonceCount
    this.nonceCount++;
    // Return token
    return token;
  }

  // Publish event
  publish(data, format, eventID, eventType) {
    // Check arguments
    if (data == undefined) {
      throw new Error('MeshChannel.publish(data, format, eventID, eventType) - data argument undefined.');
    }
    if (format == undefined) {
      throw new Error('MeshChannel.publish(data, format, eventID, eventType) - format argument undefined.')
    }
    switch (format) {
      case constants.PUBLISH_XML:
      case constants.PUBLISH_JSON:
        break;
      default:
        throw new Error(`MeshChannel.publish(data, format, eventID, eventType) - format argument invalid. Value = ${format} expected xml | json .`);
    }
    if (eventID == undefined) {
      throw new Error('MeshChannel.publish(data, format, eventID, eventType) - eventID argument undefined.')
    }
    if (eventType == undefined) {
      throw new Error('MeshChannel.publish(data, format, eventID, eventType) - eventType argument undefined.')
    }
    if (!factory.EventBuilder.isValidEventType(eventType)) {
      throw new Error('MeshChannel.publish(data, format, eventID, eventType) - invalid eventType argument.')
    }

    // Create the HTTP request configuration
    let httpConfig = {};
    httpConfig.headers = {};
    // Content-Type
    httpConfig.headers = {'Content-Type': 'application/octet-stream',
                          'Authorization': this.makeToken(),
                          'Mex-From': this.config.senderMailboxID,
                          'Mex-To': this.config.recipientMailboxID,
                          'Mex-WorkflowID': this.config.workflowID,
                          'Mex-FileName': eventID,
                          'Mex-MessageType': 'DATA',
                          'Mex-Version': '1.0'};

    return OK;
  }

}

// Module exports
module.exports = {
  MeshChannel
}
