// listen.test.js - Listen tests

const expect = require('expect');

const lis = require('./listen.js');

describe('Class ListenCommand tests', () => {

  it('should throw error for create ListenCommand object undefined verbose argument', () => {
    expect(() => {new lis.ListenCommand(undefined);}).toThrow();
  });

  it('should throw error for create ListenCommand object invalid verbose argument', () => {
    expect(() => {new lis.ListenCommand('wrong');}).toThrow();
  });

  it('should create ListenCommand object with verbose = true', () => {
    let l = new lis.ListenCommand(true);

    expect(l).toExist();
  });

  it('should create ListenCommand object with verbose = false', () => {
    let l = new lis.ListenCommand(false);

    expect(l).toExist();
  });

});
