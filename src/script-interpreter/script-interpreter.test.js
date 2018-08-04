// script-interpreter.test.js - Script interpreter tests

const expect = require('expect');
const fs = require('fs');
const path = require('path');
const scriptModule = require('./script-interpreter.js');

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
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', scriptModule.SCRIPTS_FOLDER, 'bad.publish.json'), scriptModule.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.validatePublishScript(script);

    expect(error).toExist();
  });

  it('should validatePublishScript(script)', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', scriptModule.SCRIPTS_FOLDER, 'good.publish.json'), scriptModule.FILE_ENCODING));
    let s = new scriptModule.ScriptInterpreter();
    let error = s.validatePublishScript(script);

    expect(error).toNotExist();
  });
});
