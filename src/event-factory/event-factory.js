// event-factory.js - Fabricate events

const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const constants = require('../lib/constants.js');
const uuidModule = require('../lib/uuid.js');

const EVENTID = 'bundle';

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

  // Check valid event type value
  static isValidEventType(name) {
    switch (name) {
      case constants.EVENT_CH001:
      case constants.EVENT_CH002:
      case constants.EVENT_CH003:
      case constants.EVENT_CH004:
      case constants.EVENT_CH005:
      case constants.EVENT_CH006:
      case constants.EVENT_CH007:
      case constants.EVENT_CH008:
      case constants.EVENT_CH009:
      case constants.EVENT_CH010:
      case constants.EVENT_CH011:
      case constants.EVENT_CH012:
      case constants.EVENT_CH013:
      case constants.EVENT_CH014:
      case constants.EVENT_CH015:
      case constants.EVENT_CH016:
      case constants.EVENT_CH017:
      case constants.EVENT_CH018:
      case constants.EVENT_CH019:
      case constants.EVENT_CH020:
      case constants.EVENT_CH021:
      case constants.EVENT_CH022:
      case constants.EVENT_CH023:
      case constants.EVENT_CH024:
      case constants.EVENT_CH025:
      case constants.EVENT_CH026:
      case constants.EVENT_CH027:
      case constants.EVENT_CH028:
      case constants.EVENT_CH029:
      case constants.EVENT_CH030:
      case constants.EVENT_CH031:
      case constants.EVENT_CH032:
      case constants.EVENT_CH033:
      case constants.EVENT_CH034:
      case constants.EVENT_CH035:
      case constants.EVENT_PDS001:
      case constants.EVENT_PDS002:
      case constants.EVENT_PDS003:
      case constants.EVENT_PDS004:
      case constants.EVENT_FM001:
      case constants.EVENT_FM002:
        return true;
        break;

      default:
        return false;
    }
  }

  // Build the event
  static build(templateFileName, data) {
    try {
      let uuid = new uuidModule.UUID();

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
  DataBuilder,
  EventBuilder
}
