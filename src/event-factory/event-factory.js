// event-factory.js - Fabricate events

const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');

const scrip = require('../script-interpreter/script-interpreter.js');

const DATA_FOLDER = scrip.DATA_FOLDER;
const TEMPLATES_FOLDER = scrip.TEMPLATES_FOLDER;
const FILE_ENCODING = scrip.FILE_ENCODING;

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
    let data = {
      publisher: {},
      provider: {},
      encounter: {},
      patient: {},
      event: {}
    };

    try {
      // Get and build the data context
      data.publisher = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', DATA_FOLDER, publisherFileName), FILE_ENCODING));
      data.provider = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', DATA_FOLDER, providerFileName), FILE_ENCODING));
      data.encounter = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', DATA_FOLDER, encounterFileName), FILE_ENCODING));
      data.patient = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', DATA_FOLDER, patientFileName), FILE_ENCODING));
      data.event = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', DATA_FOLDER, eventFileName), FILE_ENCODING));
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
      let source = fs.readFileSync(path.join(__dirname, '../..', TEMPLATES_FOLDER, templateFileName), FILE_ENCODING);
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
