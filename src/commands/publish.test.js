// publish.test.js - Publish tests

const expect = require('expect');
const publish = require('./publish.js');

const TEST_SCRIPT = 'good.publish.json';
const TEST_CHANNEL = 'sink';


describe('Class PublishCommand tests', () => {

  it('should throw error for new PublishCommand(script, channel, verbose) with undefined script argument', () => {
    expect(() => {new publish.PublishCommand(undefined, undefined, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid script argument', () => {
    expect(() => {new publish.PublishCommand('garbage', undefined, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid channel argument', () => {
    expect(() => {new publish.PublishCommand(TEST_SCRIPT, 'garbage', undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with undefined verbose argument', () => {
    expect(() => {new publish.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, undefined);}).toThrow();
  });

  it('should throw error for new PublishCommand(script, channel, verbose) with invalid verbose argument', () => {
    expect(() => {new publish.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, 'garbage');}).toThrow();
  });

  it('should new PublishCommand(script, channel, verbose) with verbose = true', () => {
    let pc = new publish.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, true);

    expect(pc).toExist();
  });

  it('should new PublishCommand(script, channel, verbose) with verbose = false', () => {
    let pc = new publish.PublishCommand(TEST_SCRIPT, TEST_CHANNEL, false);

    expect(pc).toExist();
  });

});
