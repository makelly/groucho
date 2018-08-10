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

});
