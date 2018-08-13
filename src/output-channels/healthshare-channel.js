// healthshare-channel.js - InterSystems HealthShare output channel

const axios = require('axios');
const validUrl = require('valid-url');
const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory.js');
const abstract = require('./channel.js');

const BASIC = 'basic';
const OAUTH2 = 'oauth2';
const OK = 'OK';
const FAIL = 'FAIL ';
const PROMISE = 'PROMISE';

// Class to send event using InterSystems HealthShare EMS API
class HealthShareChannel extends abstract.Channel {

  // Constructor
  constructor(config) {
    // config is a json object that defines the configuration values
    super(config);
    // Validate
    if (config == undefined) {
      throw new Error('HealthShareChannel.constructor(config) - config argument undefined.')
    }
    if (config.url == undefined) {
      throw new Error('HealthShareChannel.constructor(config) - config.url undefined.');
    }
    if (!validUrl.isUri(config.url)) {
      throw new Error('HealthShareChannel.constructor(config) - config.url invalid.');
    }
    if (config.authentication == undefined) {
      throw new Error('HealthShareChannel.constructor(config) - config.authentication undefined.');
    }
    switch (config.authentication) {
      case BASIC:
      case OAUTH2:
        break;

      default:
        throw new Error('HealthShareChannel.constructor(config) - config.authentication invalid.');
    }
    if (config.authentication == BASIC) {
      if (config.basic == undefined) {
        throw new Error('HealthShareChannel.constructor(config) - config.basic undefined.');
      }
      if (config.basic.username == undefined) {
        throw new Error('HealthShareChannel.constructor(config) - config.basic.username undefined.');
      }
      if (config.basic.password == undefined) {
        throw new Error('HealthShareChannel.constructor(config) - config.basic.password undefined.');
      }
    } else {
      if (config.oauth2 == undefined) {
        throw new Error('HealthShareChannel.constructor(config) - config.oauth2 undefined.');
      }
      if (config.oauth2.url == undefined) {
        throw new Error('HealthShareChannel.constructor(config) - config.oauth2.url undefined.');
      }
      if (!validUrl.isUri(config.oauth2.url)) {
        throw new Error('HealthShareChannel.constructor(config) - config.oauth2.url invalid.');
      }
    }

    // Store config values
    this.config = config;
  }

  // Publish event
  publish(data, format, eventID, eventType, eventNumber, callback) {
    // No validation of arguments as will always be called by ChannelManager

    // Create url to call
    let url = new URL('ems/fhir/Bundle/' + eventID, this.config.url);

    // Create the HTTP request configuration
    let httpConfig = {};
    httpConfig.headers = {};
    if (format == constants.PUBLISH_XML) {
      // Content-Type
      httpConfig.headers = {'Content-Type': 'application/xml+fhir'};
    } else {
      httpConfig.headers = {'Content-Type': 'application/json+fhir'};
    }
    if (this.config.authentication == BASIC) {
      // Set basic authentication
      httpConfig.auth = {};
      httpConfig.auth.username = this.config.basic.username;
      httpConfig.auth.password = this.config.basic.password;

      // Call the EMS
      axios.put(url.href, data, httpConfig).then((response) => {
        // Check response status
        if (response.status == 200) {
          // OK
          callback(eventNumber, OK);
        } else {
          // Something has gone wrong
          callback(eventNumber, FAIL + response.data);
        }
      }).catch((e) => {
          callback(eventNumber, FAIL + e.message);
      });
    } else {
      // OAUTH2 - Not implemented yet
      callback(eventNumber, FAIL + ' oauth2 not implemented yet');
    }
  }

}

// Module exports
module.exports = {
  HealthShareChannel
}
