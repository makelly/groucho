// sink-channel.test.js - Sink channel tests

const expect = require('expect');
const channel = require('./sink-channel.js');

describe('Class SinkChannel tests', () => {

  it('should new SinkChannel()', () => {
    let sink = new channel.SinkChannel();

    expect(sink).toExist();
  });

  it('should not throw error for publish(data, format, eventID) with undefined data argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish(undefined, 'xml', 'id');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID) with undefined format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', undefined, 'id');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID) with invalid format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything', 'id');}).toNotThrow();
  });

  it('should not throw error for publish(data, format, eventID) with undefined eventID argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything', undefined);}).toNotThrow();
  });

  it('should publish(data, format, eventID)', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything', 'id');}).toNotThrow();
  });

});
