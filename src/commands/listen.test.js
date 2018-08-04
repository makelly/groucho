// listen.test.js - Listen tests

const expect = require('expect');
const listen = require('./listen.js');

describe('Class ListenCommand tests', () => {

  it('should throw error for new ListenCommand(verbose) with undefined verbose argument', () => {
    expect(() => {new listen.ListenCommand(undefined);}).toThrow();
  });

  it('should throw error for new ListenCommand(verbose) with invalid verbose argument', () => {
    expect(() => {new listen.ListenCommand('garbage');}).toThrow();
  });

  it('should new ListenCommand(verbose) with verbose = true', () => {
    let lc = new listen.ListenCommand(true);

    expect(lc).toExist();
  });

  it('should new ListenCommand(verbose) with verbose = false', () => {
    let lc = new listen.ListenCommand(false);

    expect(lc).toExist();
  });

});
