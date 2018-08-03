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
    return fs.existsSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, scriptFile))
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
