// script-interpreter.test.js - Script interpreter tests

const expect = require('expect');
const fs = require('fs');
const path = require('path');

const scrip = require('./script-interpreter.js');

const FILE_ENCODING = scrip.FILE_ENCODING;
const SCRIPTS_FOLDER = scrip.SCRIPTS_FOLDER;

describe('Class ScriptInterpreter tests', () => {

  it('should new ScriptInterpreter()', () => {
    let s = new scrip.ScriptInterpreter();

    expect(s).toExist();
  });

  it('should countScripts()', () => {
    expect(() => {scrip.ScriptInterpreter.countScripts();}).toNotThrow();
  });

  it('should countTemplates()', () => {
    expect(() => {scrip.ScriptInterpreter.countTemplates();}).toNotThrow();
  });

  it('should countData()', () => {
    expect(() => {scrip.ScriptInterpreter.countData();}).toNotThrow();
  });

  it('should existsScript(scriptFile) == true', () => {
    expect(scrip.ScriptInterpreter.existsScript('test.script01.json')).toBe(true);
  });

  it('should existsScript(scriptFile) == false', () => {
    expect(scrip.ScriptInterpreter.existsScript('grabage')).toBe(false);
  });

  it('should parsePublishScript(script) return error string for missing script.publisher', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script02.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);

    expect(error).toExist();
  });

  it('should parsePublishScript(script) return error string for invalid script.publisher', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script03.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);

    expect(error).toExist();
  });

  it('should parsePublishScript(script) return error string for script.publisher file not found', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script04.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);

    expect(error).toExist();
  });

  it('should parsePublishScript(script) return error string for script.data missing', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script05.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);

    expect(error).toExist();
  });

  it('should parsePublishScript(script) return error string for invalid script.data', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script06.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);

    expect(error).toExist();
  });

  it('should parsePublishScript(script) return error string for empty script.data', () => {
    let script = JSON.parse(fs.readFileSync(path.join(__dirname, '../..', SCRIPTS_FOLDER, 'test.script07.json'), FILE_ENCODING));
    let s = new scrip.ScriptInterpreter();
    let error = s.parsePublishScript(script);
    
    expect(error).toExist();
  })

});
