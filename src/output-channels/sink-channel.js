// sink-channel.js - Sink output channel

const abstract = require('./channel.js');

const OK = 'OK';

// Class to discard event sent to it
class SinkChannel extends abstract.Channel {

  // Constructor
  constructor(config) {
    // Empty
    super(config);
  }

  // Publish event
  publish(data, format, eventID, eventType, eventNumber, callback) {
    // No validation of arguments as will always be called by ChannelManager

    callback(eventNumber, OK, '');
  }

}

// Module exports
module.exports = {
  SinkChannel
}
