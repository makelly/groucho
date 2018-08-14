// point.test.js - Point tests

const expect = require('expect');
const point = require('./point.js');

const TEST_SCRIPT = 'good.point.json';
const TEST_INDEX = 'loopback';

describe('Class PointCommand tests', () => {

  it('should throw error for new PointCommand(script, index, verbose) with undefined script argument', () => {
    expect(() => {new point.PointCommand(undefined, undefined, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid script argument', () => {
    expect(() => {new point.PointCommand('garbage', undefined, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid index argument', () => {
    expect(() => {new point.PointCommand(TEST_SCRIPT, 'garbage', undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with undefined verbose argument', () => {
    expect(() => {new point.PointCommand(TEST_SCRIPT, TEST_INDEX, undefined);}).toThrow();
  });

  it('should throw error for new PointCommand(script, index, verbose) with invalid verbose argument', () => {
    expect(() => {new point.PointCommand(TEST_SCRIPT, TEST_INDEX, 'garbage');}).toThrow();
  });

  it('should new PointCmdCommand(script, index, verbose) with verbose = true', () => {
    let pc = new point.PointCommand(TEST_SCRIPT, TEST_INDEX, true);

    expect(pc).toExist();
  });

  it('should new PointCommand(script, index, verbose) with verbose = false', () => {
    let pc = new point.PointCommand(TEST_SCRIPT, TEST_INDEX, false);

    expect(pc).toExist();
  });

  // No test for PointCommand.do()

});
