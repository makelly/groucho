// channel-mgr.test.js - Channel manager tests

const expect = require('expect');

const manager = require('./channel-mgr.js');

function callback() {
  // Empty
};

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

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined event argument', () => {
    let cm = new manager.ChannelManager();
    
    expect(() => {cm.publish(undefined, 'xml', 'sink', 'id', 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined format argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', undefined, 'sink', 'id', 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with invalid format argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'Anything', 'sink', 'id', 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined channel argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', undefined, 'id', 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with invalid channel argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'anything', 'id', 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined eventID argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', undefined, 'CH001', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined eventType argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', undefined, 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with invalid eventType argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', 'garbage', 1, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined eventNumber argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', 'CH001', undefined, callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with invalid eventNumber argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', 'CH001', 'garbage', callback);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with undefined callback argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', 'CH001', 1, undefined);}).toThrow();
  });

  it('should throw error for publish(event, format, channel, eventID, eventType, eventNumber, callback) with invalid callback argument', () => {
    let cm = new manager.ChannelManager();

    expect(() => {cm.publish('Anything', 'xml', 'sink', 'id', 'CH001', 1, 'garbage');}).toThrow();
  });

  // There is no test publish(data, format, eventID) with valid arguments as dont want to actually output to channel manager
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
