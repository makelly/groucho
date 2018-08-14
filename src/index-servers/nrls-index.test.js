// nrls-index.test.js - NRLS index tests

const expect = require('expect');
const index = require('./nrls-index.js');

describe('Class NrlsIndex tests', () => {

  it('should throw error for new NrlsIndex(config) with undefined config argument', () => {
    expect(() => {new index.NrlsIndex(undefined);}).toThrow();
  });

  // TODO more new tests
  
//  it('should throw error for new NrlsIndex(config) with missing config.fullPath argument', () => {
//    let config = {missing: 'missing'};
//
//    expect(() => {new index.NrlsIndex(config);}).toThrow();
//  });

//  it('should new FileIndex(config)', () => {
//    let config = {fullPath: path.join(__dirname, '..', 'temp')};
//    let file = new index.FileIndex(config);
//
//    expect(file).toExist();
//  });

  // No test for NrlsIndex.create()
  // No test for NrlsIndex.remove()

});
