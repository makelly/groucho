// healthshare-channel.test.js - InterSystems HealthShare channel tests

const expect = require('expect');
const channel = require('./healthshare-channel.js');

const testConfig = {url: 'https://127.0.0.1',
  authentication: 'basic',
  basic: {
    username: 'USERNAME',
    password: 'PASSWORD'}
  };

describe('Class HealthShareChannel tests', () => {

  it('should throw error for new HealthShareChannel(config) with undefined config argument', () => {
    expect(() => {new channel.HealthShareChannel(undefined);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.url argument', () => {
    let config = {};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with invalid config.url argument', () => {
    let config = {url: 'some text'};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.authentication argument', () => {
    let config = {url: 'https://127.0.0.1'};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with invalid config.authentication argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'garbage'};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.basic argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'basic'};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.basic.username argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'basic',
                  basic: {
                    }
                  };

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.basic.password argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'basic',
                  basic: {
                    username: 'USERNAME'}
                  };

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should new HealthShareChannel(config) with basic authentication', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'basic',
                  basic: {
                    username: 'USERNAME',
                    password: 'PASSWORD'}
                  };

    let hs = new channel.HealthShareChannel(config);

    expect(hs).toExist();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.oauth2 argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'oauth2'};

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with missing config.oauth2.url argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'oauth2',
                  oauth2: {
                    }
                  };

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should throw error for new HealthShareChannel(config) with invalid config.oauth2.url argument', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'oauth2',
                  oauth2: {
                    url: 'grbage'}
                  };

    expect(() => {new channel.HealthShareChannel(config);}).toThrow();
  });

  it('should new HealthShareChannel(config) with oauth2 authentication', () => {
    let config = {url: 'https://127.0.0.1',
                  authentication: 'oauth2',
                  oauth2: {
                    url: 'https://127.0.0.1'}
                  };

    let hs = new channel.HealthShareChannel(config);

    expect(hs).toExist();
  });

  // No test for HealthShareChannel.publish()

});
