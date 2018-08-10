// sink-channel.test.js - Sink channel tests

const expect = require('expect');
const channel = require('./sink-channel.js');

describe('Class SinkChannel tests', () => {

  it('should new SinkChannel()', () => {
    let sink = new channel.SinkChannel({});

    expect(sink).toExist();
  });

  it('should not throw error for publish(data, format, eventID, eventType) with undefined data argument', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish(undefined, 'xml', 'id', 'CH001');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID, eventType) with undefined format argument', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', undefined, 'id', 'CH001');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID, eventType) with invalid format argument', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', 'Anything', 'id','CH001');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID, eventType) with undefined eventID argument', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', 'Anything', undefined, 'CH001');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID, eventType) with undefined eventType argument', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', 'Anything', 'Anything', undefined);}).toNotThrow();
  });

  it('should publish(data, format, eventID, eventType)', () => {
    let sink = new channel.SinkChannel({});

    expect(() => {sink.publish('Anything', 'Anything', 'id', 'CH001');}).toNotThrow();
  });

});
