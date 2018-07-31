// mesh-channel.test.js - mesh channel tests

const expect = require('expect');

const channel = require('./mesh-channel.js');

describe('Class MeshChannel tests', () => {
  it('should throw error for create MeshChannel object undefined config argument', () => {
    expect(() => {new channel.MeshChannel(undefined);}).toThrow();
  });

  it('should throw error for create MeshChannel object missing config.url argument', () => {
    let config = {};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should throw error for create MeshChannel object missing config.sendersMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should throw error for create MeshChannel object missing config.recipientMailboxID argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should throw error for create MeshChannel object missing config.workflowID argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should throw error for create MeshChannel object missing config.userID argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should throw error for create MeshChannel object missing config.password argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID'};

    expect(() => {new channel.MeshChannel(config);}).toThrow();
  })

  it('should create MeshChannel object', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID',
    password: 'PASSWORD'};

    let mesh = new channel.MeshChannel(config);

    expect(mesh).toExist();
  });

  it('should throw error for publish() undefined data argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID',
    password: 'PASSWORD'};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish(undefined, 'xml');}).toThrow();
  });

  it('should throw error for publish() undefined format argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID',
    password: 'PASSWORD'};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish('Anything', undefined);}).toThrow();
  });

  it('should throw error for publish() invalid format argument', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID',
    password: 'PASSWORD'};
    let mesh = new channel.MeshChannel(config);

    expect(() => {mesh.publish('Anything', 'Anything');}).toThrow();
  });

  it('should makeToken()', () => {
    let config = {url: 'https://127.0.0.1',
    sendersMailboxID: 'SENDER',
    recipientMailboxID: 'RECIPIENT',
    workflowID: 'WFID',
    userID: 'UID',
    password: 'PASSWORD'};
    let mesh = new channel.MeshChannel(config);
    let token = mesh.makeToken("MAILID");

    expect(token).toExist();
  });

});
