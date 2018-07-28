// event-factory.test.js - event factory tests

const expect = require('expect');
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const utils = require('./event-factory.js');


it('handlebars experiment', () => {
  const res = true;

  // Register helpers
  var uuid;

  hbs.registerHelper('publishDate', () => {
    const date = new Date();

    return date.toISOString();
  });

  hbs.registerHelper('getUUID', (create) => {
    if (create) {
      uuid = uuidv4();
    }
    return uuid;
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
