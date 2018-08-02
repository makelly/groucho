# Groucho
Groucho is a command-line tool to test:
* Fabricating and sending (publishing) FHIR events to a receiver, such as an Events Management Service (EMS)
* Creating, updating and deleting record pointers in a Record Location Service (RLS)
* Listening for requests from clients to return FHIR records and serving the responses

## Installation
This is a Node application, therefore you need to first install [Node](https://nodejs.org/en/) on your computer.

Next clone or download the application code into a directory.

From the command-line move to the directory and run:

`npm install`

To confirm that the application has been installed correctly run the tests:

`npm test`

## Usage
### Help
Shows the available commands and associated options.

`node app.js --help`

### Version
Shows the application version.

`node app.js --version`

### Assets
Shows information about the assets available to be used.

`node app.js assets`

### Publish
Fabricate and publish events, as defined by a script, to a channel.

`node app.js publish --script="events.json" --channel=sink`

### Point
Create, update and delete record pointers, as defined by a script, to an index.

`node app.js publish --script="pointers.json" --index=sink`

### Listen
Listen for incoming requests for FHIR records.

`node app.js listen`

The application will listen indefinitely until you terminate it.

## Scripts
- [ ] UNDER CONSTRUCTION :construction:

## Templates
A template file is a FHIR event message bundle, in XML or JSON format, that has elements marked up that will be replaced by data values. The [Handlebars templating language](http://handlebarsjs.com/), which is an extension to the well known Mustache templating language, is used to markup elements.

Template files live in the directory `/templates`

A list of templates is provided [here](docs/TEMPLATES.md).

Details of the Handlebars expressions used is provided [here](docs/HANDLEBARS.md).

## Data
A data file holds the data values that are inserted into a template, in JSON format.

Data files live in the directory `/data`

A list of data files is provided [here](docs/DATA.md).

## Output Channels
Groucho supports multiple output channels through which events can be published. Each output channel is configured by editing values in an associated configuration file. Configuration files are defined using JSON.

Configuration files live in the directory `/config`

| Channel | Description | Configuration |
|---------|-------------| --------------|
| Sink | Discards event. Useful for testing. | None needed |
| File | Write event to a file in a designated directory. | [here](docs/FILE-CHANNEL.md) |
| InterSystems | Send event, via an API, to an instance of an InterSystems EMS. | [here](docs/INTERSYSTEMS-CHANNEL.md) |
| MESH | Send event via the Message Exchange for Social Care and Health (MESH) messaging service. | [here](docs/MESH-CHANNEL.md) |

## Logging
- [ ] UNDER CONSTRUCTION :construction:
