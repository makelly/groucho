// channel-mgr.test.js - channel manager tests

const expect = require('expect');

const manager = require('./channel-mgr.js');

describe('Class ChannelManager tests', () => {
  it('should create ChannelManager class instance', () => {
    let mgr = new manager.ChannelManager();

    expect(mgr).toExist();
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
