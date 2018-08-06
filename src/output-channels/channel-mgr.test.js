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

  it('should throw error for publish(event, format, channel, eventID) with undefined event argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish(undefined, 'xml', 'sink', 'id');}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID) with undefined format argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', undefined, 'sink', 'id');}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID) with invalid format argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'Anything', 'sink', 'id');}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID) with undefined channel argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', undefined, 'id');}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID) with invalid channel argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'anything', 'id');}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID) with undefined eventID argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', undefined);}).toThrow();
  });

  // There is no test publish(data, format, eventID) with valid arguments as dont want to actually output to MESH
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
