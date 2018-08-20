# Groucho
Groucho is a command-line tool to test:
* Fabricating and sending (publishing) FHIR events to a receiver, such as an Events Management Service (EMS)
* Creating, updating and deleting record pointers in a Record Location Service (RLS)
* Listening for requests from clients to return FHIR records and serving the responses

*"A child of five would understand this. Send someone to fetch a child of five."* Groucho Marx.

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

**`node groucho.js --help`**

### Version
Shows the application version.

**`node groucho.js --version`**

### Inventory
Shows information about the assets available.

**`node groucho.js inventory`**

Example:
```
Checking inventory...
Configuration files in /config:
  √  file-channel.json
  √  healthshare-channel.json
  √  mesh-channel.json
  √  nems-channel.json
  √  file-index.json
  √  nrls-index.json
Number of files in /data: 17
Number of files in /templates: 85
Number of files in /scripts: 14
```
### Publish
Fabricate and publish events, as defined by a script, to a channel.

**`node groucho.js publish --script=<script file> --channel=<channel name> [--verbose]`**

The script is defined by **`<script file>`**. It must be located in the script directory `/scripts`. The output channel is
defined by **`<channel name>`**. It must be one of:
+ **`sink`**
+ **`file`**
+ **`healthshare`**
+ **`mesh`**
+ **`nems`**

If **`--verbose`** is set, then progress messages will be displayed.

Example:

`node groucho.js publish --script=good.publish.json --channel=sink --verbose`

### Point
Create, update and delete record pointers, as defined by a script, to an index.

**`node groucho.js point --script=<script file> --index=<index name> [--verbose]`**

The script is defined by **`<script file>`**. It must be located in the script directory `/scripts`. The record index is
defined by **`<index name>`**. It must be one of:
+ **`loopback`**
+ **`file`**
+ **`nrls`**

If **`--verbose`** is set, then progress messages will be displayed.

Example:

`node groucho.js point --script=good.index.json --index=loopback --verbose`

### Listen
Listen for incoming requests for FHIR records. The application will listen indefinitely until you terminate it by `CTRL C`.

**`node groucho.js listen [--verbose]`**

If **`--verbose`** is set, then progress messages will be displayed.

Example:

`node groucho.js listen --verbose`

## Scripts
A script file contains a set of commands to fabricate events or pointers.

Script files live in the directory `/scripts`

Publish script files use the following naming convention: `<name>.<version if required>.publish.json`

Point script files use the following naming convention: `<name>.<version if required>.point.json`

Examples: `good.publish.json   good.point.json`

A list of scripts is provided in [`/scripts/inventory.txt`](scripts/inventory.txt)

How to create scripts is described [here](docs/CREATE-SCRIPTS.md).

## Templates
A template file is a FHIR event message bundle or a record pointer, in XML or JSON format, that has elements marked up that will be replaced by data values. The [Handlebars templating language](http://handlebarsjs.com/), which is an extension to the well known Mustache templating language, is used to markup elements.

Template files live in the directory `/templates`

Template files use the following naming convention: `<event name>.<version if required>.template.<json | xml>`

Examples: `physicalExamination.beta.template.json   physicalExamination.beta.template.xml`

A list of templates is provided in [`/templates/inventory.txt`](templates/inventory.txt)

Details of the Handlebars expressions used is provided [here](docs/HANDLEBARS.md).

## Data
A data file holds the data values, in JSOM format, that are inserted into a template.

Data files live in the directory `/data`

Data files use the following naming convention:

| Type of Data | Naming Convention | Example |
|-----------------|-----------------------|---------------------|
| Publisher | `<name>.<version if required>.publisher.data.json` | `LGI.publisher.data.json` |
| Provider |  `<name>.<version if required>.provider.data.json` | `LGI.provider.data.json` |
| Encounter |  `<name>.<version if required>.encounter.data.json` | `LGIMonday.encounter.data.json` |
| Patient |  `<name>.<version if required>.patient.data.json` | `GMarx.patient.data.json` |
| Event |  `<name>.<version if required>.event.data.json` | `physicalExamination.event.data.json` |

A list of data files is provided in [`/data/inventory.txt`](data/inventory.txt)

## Output Channels
Groucho supports multiple output channels through which events can be published. Each output channel is configured by editing values in an associated configuration file. Configuration files are defined using JSON.

Configuration files live in the directory `/config`

| Channel | Description | Configuration |
|---------|-------------| --------------|
| sink | Discards event. Useful for testing. | None needed |
| file | Write event to a file in a designated directory. | [here](docs/FILE-CHANNEL.md) |
| healthshare | Send event, via an API, to an instance of an InterSystems HealthShare EMS. | [here](docs/HEALTHSHARE-CHANNEL.md) |
| mesh | Send event, via the Message Exchange for Social Care and Health (MESH) messaging service, to a recipient MESH mailbox. | [here](docs/MESH-CHANNEL.md) |
| nems | Send event, via an API, to the National Events Management Service (NEMS). | [here](docs/NEMS-CHANNEL.md) |

## Indexes
Groucho supports multiple indexes in which pointers can be created and removed. Each index is configured by editing values in an associated configuration file. Configuration files are defined using JSON.

Configuration files live in the directory `/config`

| Index | Description | Configuration |
|---------|-------------| --------------|
| loopback | Discards pointer. Useful for testing. | None needed |
| file | Write pointer to a file in a designated directory. | [here](docs/FILE-INDEX.md) |
| nrls | Create, update or remove pointer, via an API, on the National Record Locator Service (NRLS). | [here](docs/NRLS-INDEX.md) |

## Logging
TODO
