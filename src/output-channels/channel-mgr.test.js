// channel-mgr.test.js - channel manager tests

const expect = require('expect');

const manager = require('./channel-mgr.js');

describe('Class ChannelManager tests', () => {

  it('should create ChannelManager object', () => {
    expect(() => {new manager.ChannelManager();}).toNotThrow();
  });

});

describe('Class ChannelConfig tests', () => {

  it('should create ChannelConfig object', () => {
    expect(() => {new manager.ChannelConfig();}).toNotThrow();
  });

});

describe('Class ChannelConfigChecker tests', () => {

  it('should create ChannelConfigChecker object', () => {
    expect(() => {new manager.ChannelConfigChecker();}).toNotThrow();
  });

  it('should check', () => {
    expect(() => {manager.ChannelConfigChecker.check();}).toNotThrow();
  });

})
