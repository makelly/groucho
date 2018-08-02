// event-factory.test.js - event factory tests

const expect = require('expect');
const fs = require('fs');
const path = require('path');

const factory = require('./event-factory.js');

const missingFile = 'missing';
const invalidFile = 'invalid.data.json';
const publisherFile = 'test.publisher.data.json';
const providerFile = 'test.provider.data.json';
const encounterFile = 'test.encounter.data.json';
const patientFile = 'test.patient.data.json';
const eventFile = 'test.event.data.json';
const jsonTemplateFile = 'test.template.json';
const xmlTemplateFile = 'test.template.xml';
const jsonOutputFile = 'testresult.json';
const xmlOutputFile = 'testresult.xml';

describe('Class UUID tests', () => {

  it('should create UUID object', () => {
    let uuid = new factory.UUID();

    expect(uuid).toExist();
  });

  it('should getUUID() create new uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toExist();
  });

  it('should getUUID() retrieve existing uuid', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');

    expect(uuid.getUUID('test')).toExist();
  });

  it('should getUUID() be the same; created and stored uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toBe(uuid.getUUID('test'));
  });

  it('should clear() clear all uuids', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.clear();

    expect(uuid.getSize()).toBe(0);
  });

});

describe('Class DataBuilder tests', () => {

  it('should create DataBuilder object', () => {
    let db = new factory.DataBuilder();

    expect(db).toExist();
  });

  it('should throw error for build() undefined publisher data file argument', () => {
    expect(() => {factory.DataBuilder.build(undefined, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() missing publisher data file', () => {
    expect(() => {factory.DataBuilder.build(missingFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() undefined provider data file argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, undefined, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() missing provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() undefined encounter data file argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, undefined, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() missing encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() undefined patient data file argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, undefined, missingFile);}).toThrow();
  });

  it('should throw error for build() missing patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() undefined event data file argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, undefined);}).toThrow();
  });

  it('should throw error for build() missing event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, missingFile);}).toThrow();
  });

  it('should build()', () => {
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);

    expect(data).toExist();
  });

  it('should throw error for build() invalid publisher data file', () => {
    expect(() => {factory.DataBuilder.build(invalidFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() invalid provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, invalidFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() invalid encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, invalidFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build() invalid patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, invalidFile, missingFile);}).toThrow();
  });

  it('should throw error for build() invalid event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, invalidFile);}).toThrow();
  });

});

describe('Class EventBuilder tests', () => {

  it('should create EventBuilder object', () => {
    let db = new factory.EventBuilder();

    expect(db).toExist();
  });

  it('should throw error for build() undefined template file argument', () => {
    expect(() => {factory.EventBuilder.build(undefined, undefined);}).toThrow();
  });

  it('should throw error for build() missing template file', () => {
    expect(() => {factory.EventBuilder.build(missingFile, undefined);}).toThrow();
  });

  it('should not throw error for build() undefined data argument', () => {
    expect(() => {factory.EventBuilder.build(jsonTemplateFile, undefined);}).toNotThrow();
  });

  it('should not throw error for build() random data', () => {
    expect(() => {factory.EventBuilder.build(jsonTemplateFile, 'Some random text');}).toNotThrow();
  });

  it('should build() json event', () => {
    // Build data context
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);
    // Build event
    let result = factory.EventBuilder.build(jsonTemplateFile, data);
    // Save to temp file for inspection
    fs.writeFileSync(path.join(__dirname, '../..', 'temp', jsonOutputFile), result);

    expect(result).toExist();
  });

  it('should build() xml event', () => {
    // Build data context
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);
    // Build event
    let result = factory.EventBuilder.build(xmlTemplateFile, data);
    // Save to temp file for insepction
    fs.writeFileSync(path.join(__dirname, '../..', 'temp', xmlOutputFile), result);

    expect(result).toExist();
  });

});
