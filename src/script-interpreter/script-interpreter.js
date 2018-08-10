// script-interpreter.js - Interpret and run event fabrication script

const fs = require('fs');
const path = require('path');
const jsonSchema = require('jsonschema');
const colors = require('colors');
const constants = require('../lib/constants.js');
const factory = require('../event-factory/event-factory.js');
const channelMgr = require('../output-channels/channel-mgr.js');

// Function to display event publication result
function printResult(eventNumber, result) {
  console.log('Event number ' + eventNumber.toString().padStart(5).green + ' published to channel with result ' + result.yellow);
}

// Class to interpret and run scripts
class ScriptInterpreter {

  // Constructor
  constructor() {
    // Empty
  }

  // Count script files
  static countScripts() {
    return fs.readdirSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER)).length;
  }

  // Count template files
  static countTemplates() {
    return fs.readdirSync(path.join(__dirname, '../..', constants.TEMPLATES_FOLDER)).length;
  }

  // Count data files
  static countData() {
    return fs.readdirSync(path.join(__dirname, '../..', constants.DATA_FOLDER)).length;
  }

  // Check script exists
  static existsScript(scriptFile) {
    return fs.existsSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, scriptFile));
  }

  // Validate publish script
  // If there is a validate error will return a string otherwise returns nothing
  validatePublishScript(script) {
    let v = new jsonSchema.Validator();
    let schema = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, constants.PUBLISH_SCHEMA), constants.FILE_ENCODING));
    try {
      v.validate(script, schema, {'throwError': true});
    } catch(e) {
      return e.message;
    }

    return;
  }

  // Check publish script, assumes it has already been validated
  // Checks additional aspects of the script
  // If there is a validate error will return a string otherwise returns nothing
  checkPublishScript(script) {
    // Check name values are unique in data[]
    for (let i = 0; i < script.data.length; i++) {
      for (let j = i + 1; j < script.data.length; j++) {
        if (script.data[j].name == script.data[i].name) {
          return ' duplicate names in data';
        }
      }
    }

    // Check all names referenced from other parts of the script are defined
    // events
    let found = false;
    for (let i = 0; i < script.events.length; i++) {
      found = false;
      for (let j = 0; j < script.data.length; j++) {
        if (script.events[i].data == script.data[j].name) {
          found = true;
          break;
        }
      }
      if (!found) {
        return ' events eventData "' + script.events[i].data + '" not found in data';
      }
    }
    // PUBLISH
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

    // Check event types are valid
    for (let i = 0; i < script.events.length; i++) {
      if (!factory.EventBuilder.isValidEventType(script.events[i].type)) {
        return ' event type "' + script.events[i].type + '" invalid';
      }
    }
    // Check all files exist
    // Data
    for (let i = 0; i < script.data.length; i++) {
      for (let j = 0; j < script.data[i].list.length; j++) {
        if (!fs.existsSync(path.join(__dirname, '../..', constants.DATA_FOLDER, script.data[i].list[j]))) {
          return ' data file "' + script.data[i].list[j] + '" not found';
        }
      }
    }
    // Events
    for (let i = 0; i < script.events.length; i++) {
      if (!fs.existsSync(path.join(__dirname, '../..', constants.TEMPLATES_FOLDER, script.events[i].template))) {
        return ' template file "' + script.events[i].template + '" not found';
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
      scriptObj = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, script), constants.FILE_ENCODING));
    } catch(e) {
      console.log('Error: Invalid script, not JSON');
      return;
    }

    // Validate script
    verbose ? console.log('Validating script') : null;
    let error = this.validatePublishScript(scriptObj);
    if (error != undefined) {
      console.log('Error: Invalid script, ' + error);
      return;
    }

    // Check script
    verbose ? console.log('Checking script') : null;
    error = this.checkPublishScript(scriptObj);
    if (error != undefined) {
      console.log('Error: Invalid script, ' + error);
      return;
    }

    // Ready to run
    verbose ? console.log('Start run script...') : null;
    let mgr = new channelMgr.ChannelManager();
    let eventCount = 1;
    // find the providers list
    let providers = scriptObj.data.find((obj) => { return obj.name == scriptObj.PUBLISH.FOR_EACH_PROVIDER; });
    // find the encounters list
    let encounters = scriptObj.data.find((obj) => { return obj.name == scriptObj.PUBLISH.FOR_EACH_ENCOUNTER; });
    // Find the patient list
    let patients = scriptObj.data.find((obj) => { return obj.name == scriptObj.PUBLISH.FOR_EACH_PATIENT; });

    // For each service provider
    for (let sp = 0; sp < providers.list.length; ++sp) {
      // The associated encounter is the one at the same index value in the encounters
      // If there are less encounters than providers, the last encounter is used
      let enc = sp < encounters.list.length ? sp : encounters.list.length - 1;
      // For each patient
      for (let p = 0; p < patients.list.length; ++p) {
        // For each event type
        for (let eType = 0; eType < scriptObj.events.length; ++eType) {
          // Find the event data list
          let data = scriptObj.data.find((obj) => { return obj.name == scriptObj.events[eType].data; });
          // For each event data file
          for (let eObj = 0; eObj < data.list.length; ++eObj) {
            // Build the template data
            let templateData = factory.DataBuilder.build(scriptObj.publisher, providers.list[sp], encounters.list[enc], patients.list[p], data.list[eObj]);
            // Build the event
            let event = factory.EventBuilder.build(scriptObj.events[eType].template, templateData);
            verbose ? console.log('Event number ' + eventCount.toString().padStart(5).green + ' built with eventID = ' + event.eventID.green) : null;
            // Publish the event
            let response = mgr.publish(event.event, scriptObj.events[eType].format, channel, event.eventID, scriptObj.events[eType].type, eventCount, printResult);
            ++eventCount;
          }
        }
      }
    }
    verbose ? console.log('End run script...') : null;
  }

}

// Module exports
module.exports = {
  ScriptInterpreter,
  printResult
}
