// sink-channel.test.js - Sink channel tests

const expect = require('expect');
const channel = require('./sink-channel.js');

describe('Class SinkChannel tests', () => {

  it('should new SinkChannel()', () => {
    let sink = new channel.SinkChannel({});

    expect(sink).toExist();
  });

  it('should publish(data, format, eventID, eventType, eventNumber, callback)', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', 'Anything', 'id', 'CH001', 1, (eventNumber, result, description) => {});}).toNotThrow();
  });

});
