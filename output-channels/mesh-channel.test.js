// mesh-channel.test.js - mesh channel tests

const expect = require('expect');

const channel = require('./mesh-channel.js');

const testConfig = {url: 'https://127.0.0.1',
  senderMailboxID: 'SENDER',
  recipientMailboxID: 'RECIPIENT',
  workflowID: 'WFID',
  senderMailboxPassword: 'PASSWORD',
  sharedKey: 'HMAC-SHA256'};

describe('Class MeshChannel tests', () => {

  it('should throw error for create MeshChannel object undefined config argument', () => {
    expect(() => {new channel.MeshChannel(undefined);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.url argument', () => {
    let config = {};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object invalid config.url argument', () => {
    let config = {url: 'some text'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.senderMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.recipientMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.workflowID argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.senderMailboxPassword argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.sharedKey argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    senderMailboxPassword: 'PASSWORD'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should create MeshChannel object', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(mesh).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish('Anything', 'Anything');}).toThrow();
  });

  it('should makeToken()', () => {
    let mesh = new channel.MeshChannel(testConfig);
    let token = mesh.makeToken();
    console.log('Token ', token);
    token = mesh.makeToken();
    console.log('Token ', token);
    token = mesh.makeToken();
    console.log('Token ', token);
    expect(token).toExist();
  });

});
