// event-factory.test.js - event factory tests

const expect = require('expect');
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const factory = require('./event-factory.js');

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



    // Get the data
    const publisherData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'test.publisher.data.json'), 'utf8'));
    const providerData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'test.provider.data.json'), 'utf8'));
    const encounterData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'test.encounter.data.json'), 'utf8'));
    const patientData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'test.patient.data.json'), 'utf8'));
    const eventData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'test.event.data.json'), 'utf8'));

    let data = {
      publisher: {},
      provider: {},
      encounter: {},
      patient: {},
      event: {}
    };
    data.publisher = publisherData;
    data.provider = providerData;
    data.encounter = encounterData;
    data.patient = patientData;
    data.event = eventData;

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
