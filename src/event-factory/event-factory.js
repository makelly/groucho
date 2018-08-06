// event-factory.js - Fabricate events

const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const constants = require('../lib/constants.js');

const EVENTID = 'bundle';

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
    // Empty
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
      data.publisher = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.DATA_FOLDER, publisherFileName), constants.FILE_ENCODING));
      data.provider = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.DATA_FOLDER, providerFileName), constants.FILE_ENCODING));
      data.encounter = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.DATA_FOLDER, encounterFileName), constants.FILE_ENCODING));
      data.patient = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.DATA_FOLDER, patientFileName), constants.FILE_ENCODING));
      data.event = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.DATA_FOLDER, eventFileName), constants.FILE_ENCODING));
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
    // Empty
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
      let source = fs.readFileSync(path.join(__dirname, '../..', constants.TEMPLATES_FOLDER, templateFileName), constants.FILE_ENCODING);
      // Compile the template
      let template = hbs.compile(source);
      // Render template
      let result = {};
      result.event = template(data);
      // Get eventID
      result.eventID = uuid.getUUID(EVENTID);
      // Return result
      return result;
    } catch(e) {
      // Throw error
      throw new Error(e.message);
    }
  }

}

// Module exports
module.exports = {
  UUID,
  DataBuilder,
  EventBuilder
}
