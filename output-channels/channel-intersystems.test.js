// channel-intersystems.test.js - InterSystems channel tests

const expect = require('expect');

const channel = require('./channel-intersystems.js');

describe('Class InterSystemsChannel tests', () => {
  it('should create InterSystemsChannel class instance', () => {
    let api = new channel.InterSystemsChannel();

    expect(api).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let api = new channel.InterSystemsChannel();

    expect(() => {api.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let api = new channel.InterSystemsChannel();

    expect(() => {api.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let api = new channel.InterSystemsChannel();

    expect(() => {api.publish('Anything', 'Anything');}).toThrow();
  });
});
