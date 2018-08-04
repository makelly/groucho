// script-interpreter.js - Interpret and run event fabrication script

const fs = require('fs');
const path = require('path');
const jsonSchema = require('jsonschema');

// Constants
const FILE_ENCODING = 'utf8';

const DATA_FOLDER = 'data';
const TEMPLATES_FOLDER = 'templates';
const SCRIPTS_FOLDER = 'scripts';
const CONFIG_FOLDER = 'config';

const PUBLISH_XML = 'xml';
const PUBLISH_JSON = 'json';

const CHANNEL_SINK = 'sink';
const CHANNEL_FILE = 'file';
const CHANNEL_INTERSYSTEMS = 'intersystems';
const CHANNEL_MESH = 'mesh';

const INDEX_LOOPBACK = 'loopback';

const PUBLISH_SCHEMA = 'publishscript.schema.json';

// Class to interpret and run scripts
class ScriptInterpreter {

  // Constructor
  constructor() {
    // Empty
  }

  // Count script files
  static countScripts() {
    return fs.readdirSync(path.join(__dirname, '../..', SCRIPTS_FOLDER)).length;
  }

  // Count template files
  static countTemplates() {
    return fs.readdirSync(path.join(__dirname, '../..', TEMPLATES_FOLDER)).length;
  }

  // Count data files
  static countData() {
    return fs.readdirSync(path.join(__dirname, '../..', DATA_FOLDER)).length;
  }

  // Check script exists
  static existsScript(scriptFile) {
    return fs.existsSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, scriptFile));
  }

  // Validate publish script
  // If there is a validate error will return a string otherwise returns nothing
  validatePublishScript(script) {
    let v = new jsonSchema.Validator();
    let schema = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, PUBLISH_SCHEMA), FILE_ENCODING));
    try {
      v.validate(script, schema, {'throwError': true});
    } catch(e) {
      return e.message;
    }

    return;
  }

  // Parse publish script, assumes it has already been validated
  // Checks additional aspects of the script
  // If there is a validate error will return a string otherwise returns nothing
  parsePublishScript(script) {
    // Check name values are unique in data[]
    for (let i = 0; i < script.data.length; i++) {
      for (let j = i + 1; j < script.data.length; j++) {
        if (script.data[j].name == script.data[i].name) {
          return ' duplicate names in data';
        }
      }
    }

    // Check all names referenced from other parts of the script are defined
    // templates
    let found = false;
    for (let i = 0; i < script.templates.length; i++) {
      found = false;
      for (let j = 0; j < script.data.length; j++) {
        if (script.templates[i].eventData == script.data[j].name) {
          found = true;
          break;
        }
      }
      if (!found) {
        return ' templates eventData "' + script.templates[i].eventData + '" not found in data';
      }
    }
    // #PUBLISH
    found = false;
    for (let i = 0; i < script.data.length; i++) {
      if (script.PUBLISH.FOR_EACH_PATIENT == script.data[i].name) {
        found = true;
        break;
      }
    }
    if (!found) {
      return ' FOR_EACH_PATIENT "' + script.PUBLISH.FOR_EACH_PATIENT + '" not found in data';
    }
    found = false;
    for (let i = 0; i < script.data.length; i++) {
      if (script.PUBLISH.FOR_EACH_PROVIDER == script.data[i].name) {
        found = true;
        break;
      }
    }
    if (!found) {
      return ' FOR_EACH_PROVIDER "' + script.PUBLISH.FOR_EACH_PROVIDER + '" not found in data';
    }
    found = false;
    for (let i = 0; i < script.data.length; i++) {
      if (script.PUBLISH.FOR_EACH_ENCOUNTER == script.data[i].name) {
        found = true;
        break;
      }
    }
    if (!found) {
      return ' FOR_EACH_ENCOUNTER "' + script.PUBLISH.FOR_EACH_ENCOUNTER + '" not found in data';
    }

    // Check all files exist
    // Data
    for (let i = 0; i < script.data.length; i++) {
      for (let j = 0; j < script.data[i].list.length; j++) {
        if (!fs.existsSync(path.join(__dirname, '../..', DATA_FOLDER, script.data[i].list[j]))) {
          return ' data file "' + script.data[i].list[j] + '" not found';
        }
      }
    }
    // Templates
    for (let i = 0; i < script.templates.length; i++) {
      if (!fs.existsSync(path.join(__dirname, '../..', TEMPLATES_FOLDER, script.templates[i].template))) {
        return ' template file "' + script.templates[i].template + '" not found';
      }
    }

    return;
  }

  // Run publish script
  runPublishScript(script, channel, verbose) {
    // Load script and check it is JSON
    verbose ? console.log('Loading script') : null;
    let scriptObj;
    try {
      scriptObj = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, script), FILE_ENCODING));
    } catch(e) {
      console.log('Error: Invalid script, not JSON');
      return;
    }

    // Validate script
    verbose ? console.log('Validating script - stage 1') : null;
    let error = this.validatePublishScript(scriptObj);
    if (error != undefined) {
      console.log('Error: Invalid script, ' + error);
      return;
    }

    // Parse script
    verbose ? console.log('Validating script - stage 2') : null;
    error = this.parsePublishScript(scriptObj);
    if (error != undefined) {
      console.log('Error: Invalid script, ' + error);
      return;
    }
  }

  // Ready to run it
  // single publisher 
  //  for provider?
  //  for each patient
  //    for each encounter
  //      for each template (event type)
  //        for each event data

}

// Module exports
module.exports = {
  ScriptInterpreter,
  FILE_ENCODING,
  DATA_FOLDER,
  TEMPLATES_FOLDER,
  SCRIPTS_FOLDER,
  CONFIG_FOLDER,
  PUBLISH_XML,
  PUBLISH_JSON,
  CHANNEL_SINK,
  CHANNEL_FILE,
  CHANNEL_INTERSYSTEMS,
  CHANNEL_MESH,
  INDEX_LOOPBACK
}
