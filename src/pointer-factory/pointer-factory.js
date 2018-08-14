// pointer-factory.js - Fabricate record pointers

const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const constants = require('../lib/constants.js');
const uuidModule = require('../lib/uuid.js');

// Class to build a pointer
class PointerBuilder {

  // Constructor
  constructor () {
    // Empty
  }

  // Build the pointer
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
  PointerBuilder
}
