// event-factory.test.js - event factory tests

const expect = require('expect');
const hbs = require('handlebars');
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

describe('Class UUID tests', () => {
  it('should create UUID class instance', () => {
    const uuid = new factory.UUID();

    expect(uuid).toExist();
  });

  it('should create new uuid object', () => {
    const uuid = new factory.UUID();
    const obj = uuid.getUUID('test');

    expect(obj).toExist();
  });

  it('should retrieve existing uuid object', () => {
    const uuid = new factory.UUID();
    uuid.getUUID('test');

    expect(uuid.getUUID('test')).toExist();
  });

  it('should be the same, created and stored uuid object', () => {
    const uuid = new factory.UUID();
    const obj = uuid.getUUID('test');

    expect(obj).toBe(uuid.getUUID('test'));
  });

  it('should clear all uuid objects', () => {
    const uuid = new factory.UUID();
    uuid.getUUID('test');
    uuid.clear();

    expect(uuid.getSize()).toBe(0);
  });
});

describe('Class DataBuilder tests', () => {
  it('should create DataBuilder class instance', () => {
    const db = new factory.DataBuilder();

    expect(db).toExist();
  });

  it('should throw error for missing publisher data file', () => {
    expect(() => {factory.DataBuilder.build(missingFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for missing provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for missing encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for missing patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for missing event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, missingFile);}).toThrow();
  });

  it('should return build', () => {
    const data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);

    expect(data).toExist();
  })

  it('should throw error for invalid publisher data file', () => {
    expect(() => {factory.DataBuilder.build(invalidFile, missingFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for invalid provider data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, invalidFile, missingFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for invalid encounter data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, invalidFile, missingFile, missingFile);}).toThrow();
  });

  it('should throw error for invalid patient data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, invalidFile, missingFile);}).toThrow();
  });

  it('should throw error for invalid event data file', () => {
    expect(() => {factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, invalidFile);}).toThrow();
  });
});

describe('Handlebars playing', () => {
  it('handlebars experiment', () => {
    const res = true;

    // Register helpers
    var uuid = new factory.UUID();

    hbs.registerHelper('publishDate', () => {
      const date = new Date();

      return date.toISOString();
    });

    hbs.registerHelper('getUUID', (key) => {
      return uuid.getUUID(key);
    });


    try {
      const data = factory.DataBuilder.build(publisherFile, providerFile, encounterFile, patientFile, eventFile);
      console.log(JSON.stringify(data, null, 2));

      // Get the JSON template source file
      let source = fs.readFileSync(path.join(__dirname, '..', 'templates', 'test.template.json'), 'utf8');
      // Compile the template
      let template = hbs.compile(source);
      // Render template
      let result = template(data);
      // Save rendered template
      fs.writeFileSync(path.join(__dirname, '..', 'temp', 'testresult.json'), result);

      // Get the XML template source file
      source = fs.readFileSync(path.join(__dirname, '..', 'templates', 'test.template.xml'), 'utf8');
      // Compile the template
      template = hbs.compile(source);
      // Render template
      result = template(data);
      // Save rendered template
      fs.writeFileSync(path.join(__dirname, '..', 'temp', 'testresult.xml'), result);

      //return JSON.parse(notesString);
    } catch(e) {
      console.log(e);
      res = false;
    };

    expect(res).toBeTruthy();
  });
});
