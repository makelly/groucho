// sink-channel.js - Sink output channel

const OK = 'OK';

// Class to discard event sent to it
class SinkChannel {

  // Constructor
  constructor() {
    // Empty
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
