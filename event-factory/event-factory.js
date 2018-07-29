// event-factory.js - fabricate events

const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');

// Class to create and manage UUIDs
class UUID {
  // Constructor
  constructor() {
    this.map = new Map();
  }

  // Get uuid for specific key
  // If not in map then create it
  getUUID(key) {
    let uuid = this.map.get(key);
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
  // Constructor
  constructor () {
  }

  // Build the data context
  static build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) {
    const folder = 'data';
    const fileEncoding = 'utf8';
    let data = {
      publisher: {},
      provider: {},
      encounter: {},
      patient: {},
      event: {}
    };

    try {
      // Get and build the data context
      data.publisher = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, publisherFileName), fileEncoding));
      data.provider = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, providerFileName), fileEncoding));
      data.encounter = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, encounterFileName), fileEncoding));
      data.patient = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, patientFileName), fileEncoding));
      data.event = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, eventFileName), fileEncoding));
      // Return data
      return data;
    } catch(e) {
      // Throw error
      throw new Error(e.message);
    }
  }
}

// Class to build event based on template and data context
class EventBuilder {
  // Constructor
  constructor() {
  }

  // Build the event
  static build(templateFileName, data) {
    const folder = 'templates';
    const fileEncoding = 'utf8';

    try {
      let uuid = new UUID();

      // Register handlebars helpers
      hbs.registerHelper('publishDate', () => {
        let date = new Date();

        return date.toISOString();
      });

      hbs.registerHelper('getUUID', (key) => {
        return uuid.getUUID(key);
      });

      // Get the JSON template source file
      let source = fs.readFileSync(path.join(__dirname, '..', folder, templateFileName), fileEncoding);
      // Compile the template
      let template = hbs.compile(source);
      // Render template
      let result = template(data);
      // Return event
      return result;
    } catch(e) {
      // Throw error
      throw new Error(e.message);
    }
  }
}

// Export modules
module.exports = {
  UUID,
  DataBuilder,
  EventBuilder
}
