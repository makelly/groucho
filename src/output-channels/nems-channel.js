// nems-channel.js - NEMS output channel

const abstract = require('./channel.js');

const OK = 'OK';

// Class to discard event sent to it
class NemsChannel extends abstract.Channel {

  // Constructor
  constructor(config) {
    // Empty
    super(config);

    // TODO
  }

  // Publish event
  publish(data, format, eventID, eventType, eventNumber, callback) {
    // No validation of arguments as will always be called by ChannelManager
    // TODO
    callback(eventNumber, OK, '');
  }

}

// Module exports
module.exports = {
  NemsChannel
}
