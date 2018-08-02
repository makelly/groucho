// Groucho
// app.js - main application

const _ = require('lodash');
const yargs = require('yargs');

const inventory = require('./commands/inventory.js');
const publish = require('./commands/publish.js');
const point = require('./commands/point.js');
const listen = require('./commands/listen.js');

// Setup command-line arguments
const inventoryCmd = 'inventory';
const publishCmd = 'publish'
const pointCmd = 'point';
const listenCmd = 'listen';

const scriptOptions = {
  describe: 'Script file to run',
  type: 'string',
  demandOption: true,
  alias: 's'
};

const channelOptions = {
  describe: 'Output channel',
  type: 'string',
  demandOption: true,
  alias: 'c',
  choices: ['sink', 'file', 'intersystems', 'mesh']
};

const indexOptions = {
  describe: 'Index server',
  type: 'string',
  demandOption: true,
  alias: 'i'
};

const verboseOptions = {
  describe: 'Verbose comments',
  type: 'boolean',
  demandOption: false,
  alias: 'v',
  default: 'false'
};

const argv = yargs
  .command(inventoryCmd, 'List inventory')
  .command(publishCmd, 'Publish events', {
    script: scriptOptions,
    channel: channelOptions,
    verbose: verboseOptions
  })
  .command(pointCmd, 'Manage pointers', {
    script: scriptOptions,
    index: indexOptions,
    verbose: verboseOptions
  })
  .command(listenCmd, 'Listen for requests', {
    verbose: verboseOptions
  })
  .help()
  .argv;

// Get the command
const command = argv._[0];

// Execute Command
switch (command) {
  case inventoryCmd:
    new inventory.InventoryCommand().do();
    break;

  case publishCmd:
    new publish.PublishCommand(argv.verbose).do();
    break;

  case pointCmd:
    new point.PointCommand(argv.verbose).do();
    break;

  case listenCmd:
    new listen.ListenCommand(argv.verbose).do();
    break;

  default:
    // No command given
    console.log('No command given.');
}
