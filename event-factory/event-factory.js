// event-factory.js - fabricate events

const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');

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

// Class to build the data conext needed for a template
class DataBuilder {
  constructor () {

  }

  // Build the data context
  static build(publisher, provider, encounter, patient, event) {
    const data = {
      publisher: {},
      provider: {},
      encounter: {},
      patient: {},
      event: {}
    };

    try {
      // Get and build the data context
      data.publisher = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', publisher), 'utf8'));
      data.provider = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', provider), 'utf8'));
      data.encounter = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', encounter), 'utf8'));
      data.patient = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', patient), 'utf8'));
      data.event = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', event), 'utf8'));
    } catch(e) {
      throw new Error(e.message);
    };

    return data;
  }
}

module.exports = {
  UUID,
  DataBuilder
}
