// event-factory.test.js - Event factory tests

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

  it('should new UUID()', () => {
    let uuid = new factory.UUID();

    expect(uuid).toExist();
  });

  it('should getUUID(key) create new uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toExist();
  });

  it('should getUUID(key) retrieve existing uuid', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');

    expect(uuid.getUUID('test')).toExist();
  });

  it('should getUUID(key) retrieved uuid == stored uuid', () => {
    let uuid = new factory.UUID();
    let obj = uuid.getUUID('test');

    expect(obj).toBe(uuid.getUUID('test'));
  });

  it('should getSize() == 0', () => {
    let uuid = new factory.UUID();

    expect(uuid.getSize()).toBe(0);
  });

  it('should getSize() == 3', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.getUUID('test1');
    uuid.getUUID('test2');

    expect(uuid.getSize()).toBe(3);
  });

  it('should clear()', () => {
    let uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.clear();

    expect(uuid.getSize()).toBe(0);
  });

});

describe('Class DataBuilder tests', () => {

  it('should new DataBuilder()', () => {
    let db = new factory.DataBuilder();

    expect(db).toExist();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with undefined publisherFileName argument', () => {
    expect(() => {factory.DataBuilder.build(undefined, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with missing publisher data file', () => {
    expect(() => {factory.DataBuilder.build(missingFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with undefined providerFileName argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, undefined, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with missing provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with undefined encounterFileName argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, undefined, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with missing encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with undefined patientFileName argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, undefined, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with missing patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with undefined eventFileName argument', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, undefined);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with missing event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with invalid publisher data file', () => {
    expect(() => {factory.DataBuilder.build(invalidFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with invalid provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, invalidFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with invalid encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, invalidFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with invalid patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, invalidFile, missingFile);}).toThrow();
  });

  it('should throw error for build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName) with invalid event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, invalidFile);}).toThrow();
  });

  it('should build(publisherFileName, providerFileName, encounterFileName, patientFileName, eventFileName)', () => {
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);

    expect(data).toExist();
  });

});

describe('Class EventBuilder tests', () => {

  it('should new EventBuilder()', () => {
    let eb = new factory.EventBuilder();
    
    expect(eb).toExist();
  });

  it('should throw error for build(templateFileName, data) with undefined templateFileName argument', () => {
    expect(() => {factory.EventBuilder.build(undefined, undefined);}).toThrow();
  });

  it('should throw error for build(templateFileName, data) with missing template file', () => {
    expect(() => {factory.EventBuilder.build(missingFile, undefined);}).toThrow();
  });

  it('should not throw error for build(templateFileName, data) with undefined data argument', () => {
    expect(() => {factory.EventBuilder.build(jsonTemplateFile, undefined);}).toNotThrow();
  });

  it('should not throw error for build(templateFileName, data) with random data', () => {
    expect(() => {factory.EventBuilder.build(jsonTemplateFile, 'Some random text');}).toNotThrow();
  });

  it('should build(templateFileName, data) for json event', () => {
    // Build data context
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);
    // Build event
    let result = factory.EventBuilder.build(jsonTemplateFile, data);
    // Save to temp file for inspection
    fs.writeFileSync(path.join(__dirname, '../..', 'temp', jsonOutputFile), result);

    expect(result).toExist();
  });

  it('should build(templateFileName, data) for xml event', () => {
    // Build data context
    let data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);
    // Build event
    let result = factory.EventBuilder.build(xmlTemplateFile, data);
    // Save to temp file for insepction
    fs.writeFileSync(path.join(__dirname, '../..', 'temp', xmlOutputFile), result);

    expect(result).toExist();
  });

});