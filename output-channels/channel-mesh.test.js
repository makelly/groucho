// channel-mesh.test.js - mesh channel tests

const expect = require('expect');

const channel = require('./channel-mesh.js');

describe('Class MeshChannel tests', () => {
  it('should throw error for create MeshChannel object undefined config argument', () => {
    expect(() => {new channel.MeshChannel(undefined);}).toThrow();
  });

/*  it('should throw error for create FileChannel object missing config.fullPath argument', () => {
    let config = {missing: 'missing'};

    expect(() => {new channel.FileChannel(config);}).toThrow();
  }); */

  it('should create MeshChannel object', () => {
    let config = {};
    let mesh = new channel.MeshChannel(config);

    expect(mesh).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let config = {};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let config = {};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let config = {};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish('Anything', 'Anything');}).toThrow();
  });
});
