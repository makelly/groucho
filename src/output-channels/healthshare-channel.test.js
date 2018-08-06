// healthshare-channel.test.js - InterSystems HealthShare channel tests

const expect = require('expect');
const channel = require('./healthshare-channel.js');

describe('Class HealthShareChannel tests', () => {

  it('should throw error for new HealthShareChannel(config) with undefined config argument', () => {
    expect(() => {new channel.HealthShareChannel(undefined);}).toThrow();
  });

  it('should new HealthShareChannel(config)', () => {
    let config = {};
    let hs = new channel.HealthShareChannel(config);

    expect(hs).toExist();
  });

  it('should throw error for publish(data, format, eventID) with undefined data argument', () => {
    let config = {};
    let hs = new channel.HealthShareChannel(config);

    expect(() => {hs.publish(undefined, 'xml', 'id');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID) with undefined format argument', () => {
    let config = {};
    let hs = new channel.HealthShareChannel(config);

    expect(() => {hs.publish('Anything', undefined, 'id');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID) with invalid format argument', () => {
    let config = {};
    let hs = new channel.HealthShareChannel(config);

    expect(() => {hs.publish('Anything', 'Anything', undefined);}).toThrow();
  });

  it('should throw error for publish(data, format, eventID) with undefined eventID argument', () => {
    let config = {};
    let hs = new channel.HealthShareChannel(config);

    expect(() => {hs.publish('Anything', 'xml', undefined);}).toThrow();
  });

});
