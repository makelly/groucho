// channel-file.test.js - file channel tests

const expect = require('expect');

const channel = require('./channel-file.js');

describe('Class FileChannel tests', () => {
  it('should create FileChannel class instance', () => {
    let file = new channel.FileChannel();

    expect(file).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let file = new channel.FileChannel();

    expect(() => {file.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let file = new channel.FileChannel();

    expect(() => {file.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let file = new channel.FileChannel();

    expect(() => {file.publish('Anything', 'Anything');}).toThrow();
  });
});
