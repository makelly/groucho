// script-interpreter.test.js - Script interpreter tests

const expect = require('expect');

const scrip = require('./script-interpreter.js');

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
    expect(scrip.ScriptInterpreter.existsScript('test.json')).toBe(true);
  });

  it('should existsScript(scriptFile) == false', () => {
    expect(scrip.ScriptInterpreter.existsScript('grabage')).toBe(false);
  });

});
