// intersystems-channel.test.js - InterSystems channel tests

const expect = require('expect');
const channel = require('./intersystems-channel.js');

describe('Class InterSystemsChannel tests', () => {

  it('should throw error for new InterSystemsChannel(config) with undefined config argument', () => {
    expect(() => {new channel.InterSystemsChannel(undefined);}).toThrow();
  });

/*
  it('should throw error for create FileChannel object missing config.fullPath argument', () => {
    let config = {missing: 'missing'};

    expect(() => {new channel.FileChannel(config);}).toThrow();
  }); */

  it('should new InterSystemsChannel(config)', () => {
    let config = {};
    let isys = new channel.InterSystemsChannel(config);

    expect(isys).toExist();
  });

  it('should throw error for publish(data, format) with undefined data argument', () => {
    let config = {};
    let isys = new channel.InterSystemsChannel(config);

    expect(() => {isys.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish(data, format) with undefined format argument', () => {
    let config = {};
    let isys = new channel.InterSystemsChannel(config);

    expect(() => {isys.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish(data, format) with invalid format argument', () => {
    let config = {};
    let isys = new channel.InterSystemsChannel(config);

    expect(() => {isys.publish('Anything', 'Anything');}).toThrow();
  });

});
