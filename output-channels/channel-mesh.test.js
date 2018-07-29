// channel-mesh.test.js - mesh channel tests

const expect = require('expect');

const channel = require('./channel-mesh.js');

describe('Class MeshChannel tests', () => {
  it('should create MeshChannel class instance', () => {
    let mesh = new channel.MeshChannel();

    expect(mesh).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let mesh = new channel.MeshChannel();

    expect(() => {mesh.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let mesh = new channel.MeshChannel();

    expect(() => {mesh.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let mesh = new channel.MeshChannel();

    expect(() => {mesh.publish('Anything', 'Anything');}).toThrow();
  });
});
