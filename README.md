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

Template files live in the directory `/templates`.

Template files use the following naming convention: `<event name and version if required>.template.<json | xml>`

The following Handlebars markup elements are used:

| Element | Description |
-------------------------
| `{{getUUID 'key'}}` | This will generate a new UUID and associate it with a key. If this is called again within the same key in the same template the UUID associated with the key will be returned. |

Examples: `physicalExamination.template.json   physicalExamination.template.xml`

Under construction!

## Data
The data needed to be inserted into templates is organised

Under construction!

## Output channels
Under construction!

## Configuration
Under construction!

## Logging
Under construction!
