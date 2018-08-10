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
  publish(data, format, eventID, eventType) {
    // Do nothing

    return OK;
  }

}

// Module exports
module.exports = {
  SinkChannel
}
