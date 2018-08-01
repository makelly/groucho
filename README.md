# Groucho
- [ ] UNDER CONSTRUCTION :construction:

Groucho is a command line tool to test generating and sending (publishing) FHIR events to a receiver, such as an Events Management Service (EMS).

## Installation
- [ ] UNDER CONSTRUCTION :construction:

This is a Node.js application, therefore you need to first install Node.


## Running
- [ ] UNDER CONSTRUCTION :construction:

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
