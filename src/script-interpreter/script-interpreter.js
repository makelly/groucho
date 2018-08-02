// script-interpreter.js - interpret and run event fabrication script

const fs = require('fs');
const path = require('path');

const scriptFolder = 'scripts';
const templateFolder = 'templates';
const dataFolder = 'data';

// Class to interpret and run scripts
class ScriptInterpreter {

  // Constructor
  constructor() {

  }

  // Count script files
  static countScripts() {
    return fs.readdirSync(path.join(__dirname, '../..', scriptFolder)).length;
  }

  // Count template files
  static countTemplates() {
    return fs.readdirSync(path.join(__dirname, '../..', templateFolder)).length;
  }

  // Count data files
  static countData() {
    return fs.readdirSync(path.join(__dirname, '../..', dataFolder)).length;
  }

  // Check script exists
  static existsScript(scriptFile) {
    return fs.existsSync(path.join(__dirname, '../..', scriptFolder, scriptFile))
  }

}

// Export modules
module.exports = {
  ScriptInterpreter
}
