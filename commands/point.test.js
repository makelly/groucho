// point.test.js - Point tests

const expect = require('expect');

const ptr = require('./point.js');

describe('Class PointCommand tests', () => {

  it('should throw error for create PointCommand object undefined verbose argument', () => {
    expect(() => {new ptr.PointCommand(undefined);}).toThrow();
  });

  it('should throw error for create PointCommand object invalid verbose argument', () => {
    expect(() => {new ptr.PointCommand('wrong');}).toThrow();
  });

  it('should create pointCmdCommand object with verbose = true', () => {
    let p = new ptr.PointCommand(true);

    expect(p).toExist();
  });

  it('should create PointCommand object with verbose = false', () => {
    let p = new ptr.PointCommand(false);

    expect(p).toExist();
  });

});
