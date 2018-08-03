// script-interpreter.js - Interpret and run event fabrication script

const fs = require('fs');
const path = require('path');

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

// Class to interpret and run scripts
class ScriptInterpreter {

  // Constructor
  constructor() {

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

  // Validate and parse publish
  parsePublishScript(script) {
    // Ignore name, description, version
    // MUST have publisher
    if (script.publisher == undefined) {
      return 'Error: Invalid script, "publisher" not defined.';
    }
    // MUST be a string
    if (!(typeof script.publisher == 'string')) {
      return 'Error: Invalid script, "publisher" value invalid, must be a string.';
    }
    // publisher data file MUST exist
    if (!fs.existsSync(path.join(__dirname, '../..', DATA_FOLDER, script.publisher))) {
      return 'Error: Invalid script, "publisher" data file ' + script.publisher + ' not found.';
    }
    // Store publisher
    this.publisher = script.publisher;
    // MUST have data
    if (script.data == undefined) {
      return 'Error: Invalid script, "data" not defined.';
    }
    // MUST be an array
    if (!Array.isArray(script.data)) {
      return 'Error: Invalid script, "data" value invalid, must be an array.';
    }
    // Check data not empty
    if (script.data.length == 0) {
            return 'Error: Invalid script, "data" array empty.';
    }
    // Check every object in data
    for (let i = 0; i < script.data.length; i++) {
      let d = script.data[i];
    }

    return;
  }

  // Run publish script
  runPublishScript(script, channel, verbose) {
    verbose ? console.log('Loading script') : null;
    var scrip;
    try {
      scrip = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, script), FILE_ENCODING));
    } catch(e) {
      // Not valid JSON
      console.log('Error: Invalid script, not JSON.');
      return;
    }
    verbose ? console.log('Parsing script') : null;
    var error = this.parsePublishScript(scrip);
    if (error != undefined) {
      console.log(error);
      return;
    }
  }

}

// Export modules
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
