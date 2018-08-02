// sink-channel.test.js - sink channel tests

const expect = require('expect');

const channel = require('./sink-channel.js');

describe('Class SinkChannel tests', () => {

  it('should create SinkChannel object', () => {
    let sink = new channel.SinkChannel();

    expect(sink).toExist();
  });

  it('should not throw error for publish() undefined data argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish(undefined, 'xml');}).toNotThrow();
  });

  it('should not throw error for publish() undefined format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', undefined);}).toNotThrow();
  });

  it('should not throw error for publish() invalid format argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything');}).toNotThrow();
  });

  it('should publish()', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything', 'Anything');}).toNotThrow();
  });

});
