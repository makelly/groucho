// script-interpreter.test.js - Script interpreter tests

const expect = require('expect');
const fs = require('fs');
const path = require('path');
const scriptModule = require('./script-interpreter.js');
const constants = require('../lib/constants.js');

describe('Class ScriptInterpreter tests', () => {

  it('should new ScriptInterpreter()', () => {
    let s = new scriptModule.ScriptInterpreter();

    expect(s).toExist();
  });

  it('should countScripts()', () => {
    expect(() => {scriptModule.ScriptInterpreter.countScripts();}).toNotThrow();
  });

  it('should countTemplates()', () => {
    expect(() => {scriptModule.ScriptInterpreter.countTemplates();}).toNotThrow();
  });

  it('should countData()', () => {
    expect(() => {scriptModule.ScriptInterpreter.countData();}).toNotThrow();
  });

  it('should existsScript(scriptFile) == true', () => {
    expect(scriptModule.ScriptInterpreter.existsScript('good.publish.json')).toBe(true);
  });

  it('should existsScript(scriptFile) == false', () => {
    expect(scriptModule.ScriptInterpreter.existsScript('garbage')).toBe(false);
  });

  it('should validatePublishScript(script) return error string for bad script', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.validatePublishScript(script);

    expect(error).toExist();
  });

  it('should validatePublishScript(script)', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'good.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.validatePublishScript(script);

    expect(error).toNotExist();
  });

  it('should checkPublishScript(script) return error string for duplicate name in data[]', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad2.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for undefined name reference in events[]', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad3.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for undefined name reference in FOR_EACH_PATIENT', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad4.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for undefined name reference in FOR_EACH_PROVIDER', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad5.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for undefined name reference in FOR_EACH_ENCOUNTER', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad6.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for file not found in data[]', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad7.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for file not found in events[]', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad8.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script) return error string for invalid event in events[]', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'bad9.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toExist();
  });

  it('should checkPublishScript(script)', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', constants.SCRIPTS_FOLDER, 'good.publish.json'), constants.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.checkPublishScript(script);

    expect(error).toNotExist();
  });

  // TODO - test validatePointScript

  // No test for ScriptInterpreter.runPublishScript()
  // No test for ScriptInterpreter.runPointScript()
  // No test for PrintPublishScript()

});
