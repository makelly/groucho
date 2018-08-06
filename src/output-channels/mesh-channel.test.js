// mesh-channel.test.js - MESH channel tests

const expect = require('expect');
const channel = require('./mesh-channel.js');

const testConfig = {url: 'https://127.0.0.1',
  senderMailboxID: 'SENDER',
  recipientMailboxID: 'RECIPIENT',
  workflowID: 'WFID',
  senderMailboxPassword: 'PASSWORD',
  sharedKey: 'HMAC-SHA256'};

describe('Class MeshChannel tests', () => {

  it('should throw error for new MeshChannel(config) with undefined config argument', () => {
    expect(() => {new channel.MeshChannel(undefined);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.url argument', () => {
    let config = {};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with invalid config.url argument', () => {
    let config = {url: 'some text'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.senderMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.recipientMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.workflowID argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.senderMailboxPassword argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should throw error for new MeshChannel(config) with missing config.sharedKey argument', () => {
    let config = {url: 'https://127.0.0.1',
    senderMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    senderMailboxPassword: 'PASSWORD'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  });

  it('should new MeshChannel(config)', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(mesh).toExist();
  });

  it('should throw error for publish(data, format, eventID) with undefined data argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish(undefined, 'xml', 'id');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID) with undefined format argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish('Anything', undefined, 'id');}).toThrow();
  });

  it('should throw error for publish(data, format) with invalid format argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish('Anything', 'Anything', 'id');}).toThrow();
  });

  it('should throw error for publish(data, format, eventID) with undefined EventID argument', () => {
    let mesh = new channel.MeshChannel(testConfig);

    expect(() => {mesh.publish('Anything', 'xml', undefined);}).toThrow();
  });

  // There is no test publish(data, format, eventID) with valid arguments as dont want to actually output to MESH

  it('should makeToken()', () => {
    let mesh = new channel.MeshChannel(testConfig);
    let token = mesh.makeToken();

    expect(token).toExist();
  });

});
