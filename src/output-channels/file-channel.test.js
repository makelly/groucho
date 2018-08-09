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

  it('should throw error for publish(data, format, eventID, eventType) with undefined data argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish(undefined, 'xml', 'id', 'CH001');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID, eventType) with undefined format argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', undefined, 'id', 'CH001');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID, eventtype) with invalid format argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', 'Anything', 'id', 'CH001');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID, eventType) with undefined eventID argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', 'Anything', undefined, 'CH001');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID, eventType) with undefined eventType argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', 'xml', 'id', undefined);}).toThrow();
  });

  it('should throw error for publish(data, format, eventID, eventType) with invalid eventType argument', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new channel.FileChannel(config);

    expect(() => {file.publish('Anything', 'xml', 'id', 'garbage');}).toThrow();
  })

});
