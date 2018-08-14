// UUID.test.js - UUID tests

const expect = require('expect');
const factory = require('./uuid.js');

describe('Class UUID tests', () => {

  it('should new UUID()', () => {
    let uuid = new factory.UUID();

    expect(uuid).toExist();
  });

  it('should getUUID(key) create new uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toExist();
  });

  it('should getUUID(key) retrieve existing uuid', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');

    expect(uuid.getUUID('test')).toExist();
  });

  it('should getUUID(key) retrieved uuid == stored uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toBe(uuid.getUUID('test'));
  });

  it('should getSize() == 0', () => {
    let uuid = new factory.UUID();

    expect(uuid.getSize()).toBe(0);
  });

  it('should getSize() == 3', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.getUUID('test1');
    uuid.getUUID('test2');

    expect(uuid.getSize()).toBe(3);
  });

  it('should clear()', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.clear();

    expect(uuid.getSize()).toBe(0);
  });

});
