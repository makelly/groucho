// sink-channel.test.js - Sink channel tests

const expect = require('expect');
const channel = require('./sink-channel.js');

describe('Class SinkChannel tests', () => {

  it('should new SinkChannel()', () => {
    let sink = new channel.SinkChannel();

    expect(sink).toExist();
  });

  it('should not throw error for publish(data, format) with undefined data argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish(undefined, 'xml');}).toNotThrow();
  });

  it('should not throw error for publish(data, format) with undefined format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', undefined);}).toNotThrow();
  });

  it('should not throw error for publish(data, format) with invalid format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything');}).toNotThrow();
  });

  it('should publish(data, format)', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything');}).toNotThrow();
  });

});
