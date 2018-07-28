# Groucho
A command line tool to test generating and sending (publishing) FHIR events to a receiver, such as an Events Management Service (EMS).

Under construction!

## Installation
This is a Node.js application, therefore you need to first install Node.

Under construction!

## Running
Under construction!

## Scripts
Under construction!

## Templates
A template file is a FHIR event message bundle, in XML or JSON format, that has elements marked up that will be replaced by data values. The [Handlebars templating language](http://handlebarsjs.com/), which is an extension to the well known Mustache templating language, is used to markup elements.

Template files live in the directory `/templates`

Template files use the following naming convention: `<event name and version if required>.template.<json | xml>`

Examples: `physicalExamination.template.json   physicalExamination.template.xml`

The following Handlebars expressions are used in all templates:

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
| `{{getUUID 'key'}}` | This will generate a new UUID and associate it with a key. If this is called again with the same key in the same template the UUID associated with the key will be returned. Note key values are case sensitive. |


Under construction!

## Data
The data needed to be inserted into templates is organised into separate json files. Data files are defined for:
* Publisher - the organisation who is publishing the event.
* Provider - the health care provider who is the source, origin, of the event. In most situations publisher and provider will be the same, but can be different.
* Encounter - the health care encounter associated with the event. This will include the type of health care service and delivery location.
* Patient - the patient associated with the event.
* Event - the actual event specific data.  

Data files live in the directory `/data`

Data files use the following naming convention:

| Type of Data | Naming Convention | Example |
|-----------------|-----------------------|---------------------|
| Publisher | `<name and version if required>.publisher.data.json` | `LGI.publisher.data.json` |
| Provider |  `<name and version if required>.provider.data.json` | `LGI.provider.data.json` |
| Encounter |  `<name and version if required>.encounter.data.json` | `LGIMonday.encounter.data.json` |
| Patient |  `<name and version if required>.patient.data.json` | `GMarx.patient.data.json` |
| Event |  `<name and version if required>.event.data.json` | `physicalExamination.event.data.json` |

Under construction!

## Output channels
Under construction!

## Configuration
Under construction!

## Logging
Under construction!
