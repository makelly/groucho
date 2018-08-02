// publish.test.js - publish tests

const expect = require('expect');

const pub = require('./publish.js');

describe('Class PublishCommand tests', () => {

  it('should throw error for create PublishCommand object undefined verbose argument', () => {
    expect(() => {new pub.PublishCommand(undefined);}).toThrow();
  });

  it('should throw error for create PublishCommand object invalid verbose argument', () => {
    expect(() => {new pub.PublishCommand('wrong');}).toThrow();
  });

  it('should create PublishCommand object with verbose = true', () => {
    let p = new pub.PublishCommand(true);

    expect(p).toExist();
  });

  it('should create PublishCommand object with verbose = false', () => {
    let p = new pub.PublishCommand(false);

    expect(p).toExist();
  });

});
