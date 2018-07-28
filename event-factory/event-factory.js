// event-factory.js - fabricate events

const _ = require('lodash');
const uuidv4 = require('uuid/v4');

// Class to create and manage UUIDs
class UUID {
  constructor() {
    this.map = new Map();
  }

  // Get uuid for specific key
  // If not in map then create it
  getUUID(key) {
    var uuid = this.map.get(key);
    if (uuid == undefined) {
      uuid = uuidv4();
      this.map.set(key, uuid);
    }
    return uuid;
  }

  // Clear map
  clear() {
    this.map.clear();
  }

  // Get size
  getSize() {
    return this.map.size;
  }
}

module.exports = {
  UUID
}
