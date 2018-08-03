// publish.test.js - Publish tests

const expect = require('expect');

const pub = require('./publish.js');

const TEST_SCRIPT = 'test.script01.json';
const TEST_CHANNEL = 'sink';


describe('Class PublishCommand tests', () => {

  it('should throw error for new PublishCommand(script, channel, verbose) with undefined script argument', () => {
    expect(() => {new pub.PublishCommand(undefined, undefined, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid script argument', () => {
    expect(() => {new pub.PublishCommand('garbage', undefined, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid channel argument', () => {
    expect(() => {new pub.PublishCommand(TEST_SCRIPT, 'garbage', undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with undefined verbose argument', () => {
    expect(() => {new pub.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid verbose argument', () => {
    expect(() => {new pub.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, 'garbage');}).toThrow();
  });

  it('should new PublishCommand(script, channel, verbose) with verbose = true', () => {
    let p = new pub.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, true);

    expect(p).toExist();
  });

  it('should new PublishCommand(script, channel, verbose) with verbose = false', () => {
    let p = new pub.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, false);

    expect(p).toExist();
  });

});
