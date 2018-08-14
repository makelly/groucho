// Groucho
// app.js - main application

const _ = require('lodash');
const yargs = require('yargs');

const inventory = require('./src/commands/inventory.js');
const publish = require('./src/commands/publish.js');
const point = require('./src/commands/point.js');
const listen = require('./src/commands/listen.js');
const scriptModule = require('./src/script-interpreter/script-interpreter.js');

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
  choices: ['sink', 'file', 'healthshare', 'mesh']
};

const indexOptions = {
  describe: 'Index server',
  type: 'string',
  demandOption: true,
  alias: 'i',
  choices: ['loopback', 'file', 'nrls']
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
    // Check script exists
    if (!scriptModule.ScriptInterpreter.existsScript(argv.script)) {
      console.log('Invalid values:');
      console.log(`  Argument: script, Given: "${argv.script}", file not found.`);
    } else {
      try {
        // Create command and execute
        new publish.PublishCommand(argv.script, argv.channel, argv.verbose).do();
      } catch(e) {
        console.log('Error ' + e.message);
      }
    }
    break;

  case pointCmd:
    // Check script exists
    if (!scriptModule.ScriptInterpreter.existsScript(argv.script)) {
      console.log('Invalid values:');
      console.log(`  Argument: script, Given: "${argv.script}", file not found.`);
    } else {
      try {
        // Create command and execute
        new point.PointCommand(argv.script, argv.index, argv.verbose).do();
      } catch(e) {
        console.log('Error ' + e.message);
      }
    }

    break;

  case listenCmd:
    try {
      // Create command and execute
      new listen.ListenCommand(argv.verbose).do();
    } catch(e) {
      console.log('Error ' + e.message);
    }
    break;

  default:
    // No command given
    console.log('No command given.');
}
