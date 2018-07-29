// channel-config.test.js - channel configuration tests

const expect = require('expect');

const config = require('./channel-config.js');

describe('Class ChannelConfig tests', () => {
  it('should create ChannelConfig class instance', () => {
    expect(() => {new config.ChannelConfig();}).toNotThrow();
  });

/*  it('should publish for undefined event argument', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish(undefined);}).toNotThrow();
  });

  it('should publish', () => {
    let sink = new channel.SinkChannel();

    expect(() => {sink.publish('Anything');}).toNotThrow();
  }); */
});
