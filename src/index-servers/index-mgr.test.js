// index-mgr.test.js - Index manager tests

const expect = require('expect');
const index = require('./index-mgr.js');

describe('Class IndexManager tests', () => {

  it('should new IndexManager()', () => {
    let i = new index.IndexManager();

    expect(i).toExist();
  });

  it('should isValidIndexName(name) == true', () => {
    let v = index.IndexManager.isValidIndexName('loopback');

    expect(v).toBe(true);
  });

  it('should isValidIndexName(name) == false', () => {
    let v = index.IndexManager.isValidIndexName('garbage');
    
    expect(v).toBe(false);
  });

});

describe('Class IndexConfig tests', () => {

  it('should new IndexConfig()', () => {
    expect(() => {new index.IndexConfig();}).toNotThrow();
  });

});

describe('Class IndexConfigChecker tests', () => {

  it('should new IndexConfigChecker()', () => {
    expect(() => {new index.IndexConfigChecker();}).toNotThrow();
  });

  it('should check()', () => {
    expect(() => {index.IndexConfigChecker.check();}).toNotThrow();
  });

})
