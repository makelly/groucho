// file-channel.test.js - File channel tests

const expect = require('expect');
const path = require('path');

const channel = require('./file-channel.js');

describe('Class FileChannel tests', () => {

  it('should throw error for new FileChannel(config) with undefined config argument', () => {
    expect(() => {new channel.FileChannel(undefined);}).toThrow();
  });

  it('should throw error for new FileChannel(config) with missing config.fullPath argument', () => {
    let config = {missing: 'missing'};

    expect(() => {new channel.FileChannel(config);}).toThrow();
  });

  it('should new FileChannel(config)', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(file).toExist();
  });

  it('should throw error for publish(data, format) with undefined data argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish(data, format) with undefined format argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish(data, format) with invalid format argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', 'Anything');}).toThrow();
  });

});
