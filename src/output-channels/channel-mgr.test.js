// channel-mgr.test.js - Channel manager tests

const expect = require('expect');

const manager = require('./channel-mgr.js');

describe('Class ChannelManager tests', () => {

  it('should new ChannelManager()', () => {
    expect(() => {new manager.ChannelManager();}).toNotThrow();
  });

  it('should isValidChannelName(name) == true', () => {
    let v = manager.ChannelManager.isValidChannelName('mesh');
    expect(v).toBe(true);
  });

  it('should isValidChannelName(name) == false', () => {
    let v = manager.ChannelManager.isValidChannelName('garbage');
    expect(v).toBe(false);
  });

});

describe('Class ChannelConfig tests', () => {

  it('should new ChannelConfig()', () => {
    expect(() => {new manager.ChannelConfig();}).toNotThrow();
  });

});

describe('Class ChannelConfigChecker tests', () => {

  it('should new ChannelConfigChecker()', () => {
    expect(() => {new manager.ChannelConfigChecker();}).toNotThrow();
  });

  it('should check()', () => {
    expect(() => {manager.ChannelConfigChecker.check();}).toNotThrow();
  });

})
