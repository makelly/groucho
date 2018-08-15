// nems-channel.test.js - NEMS channel tests

const expect = require('expect');
const channel = require('./nems-channel.js');

describe('Class NemsChannel tests', () => {

  it('should new NemsChannel()', () => {
    let nems = new channel.NemsChannel({});

    expect(nems).toExist();
  });

  it('should publish(data, format, eventID, eventType, eventNumber, callback)', () => {
    let nems = new channel.NemsChannel({});

    expect(() => {nems.publish('Anything', 'Anything', 'id', 'CH001', 1, (eventNumber, result, description) => {});}).toNotThrow();
  });

});
