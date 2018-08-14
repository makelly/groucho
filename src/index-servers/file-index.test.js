// file-index.test.js - File index tests

const expect = require('expect');
const path = require('path');
const index = require('./file-index.js');

describe('Class FileIndex tests', () => {

  it('should throw error for new FileIndex(config) with undefined config argument', () => {
    expect(() => {new index.FileIndex(undefined);}).toThrow();
  });

  it('should throw error for new FileIndex(config) with missing config.fullPath argument', () => {
    let config = {missing: 'missing'};

    expect(() => {new index.FileIndex(config);}).toThrow();
  });

  it('should new FileIndex(config)', () => {
    let config = {fullPath: path.join(__dirname, '..', 'temp')};
    let file = new index.FileIndex(config);

    expect(file).toExist();
  });

  // No test for FileIndex.create()
  // No test for FileIndex.remove()

});
