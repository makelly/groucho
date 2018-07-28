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
    try {
      // Get the data
      const publisherData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', publisher), 'utf8'));
      const providerData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', provider), 'utf8'));
      const encounterData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', encounter), 'utf8'));
      const patientData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', patient), 'utf8'));
      const eventData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', event), 'utf8'));

      // Build the data context
      let data = {
        publisher: {},
        provider: {},
        encounter: {},
        patient: {},
        event: {}
      };
      data.publisher = publisherData;
      data.provider = providerData;
      data.encounter = encounterData;
      data.patient = patientData;
      data.event = eventData;
    } catch(e) {
      throw e.message;
    };
    return data;
  }
}

module.exports = {
  UUID,
  DataBuilder
}
