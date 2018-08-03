// point.test.js - Point tests

const expect = require('expect');

const ptr = require('./point.js');

const TEST_SCRIPT = 'test.script01.json';
const TEST_INDEX = 'loopback';

describe('Class PointCommand tests', () => {

  it('should throw error for new PointCommand(script, index, verbose) with undefined script argument', () => {
    expect(() => {new ptr.PointCommand(undefined, undefined, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid script argument', () => {
    expect(() => {new ptr.PointCommand('garbage', undefined, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid index argument', () => {
    expect(() => {new ptr.PointCommand(TEST_SCRIPT, 'garbage', undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with undefined verbose argument', () => {
    expect(() => {new ptr.PointCommand(TEST_SCRIPT, TEST_INDEX, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid verbose argument', () => {
    expect(() => {new ptr.PointCommand(TEST_SCRIPT, TEST_INDEX, 'garbage');}).toThrow();
  });

  it('should new PointCmdCommand(script, index, verbose) with verbose = true', () => {
    let p = new ptr.PointCommand(TEST_SCRIPT, TEST_INDEX, true);

    expect(p).toExist();
  });

  it('should new PointCommand(script, index, verbose) with verbose = false', () => {
    let p = new ptr.PointCommand(TEST_SCRIPT, TEST_INDEX, false);

    expect(p).toExist();
  });

});
