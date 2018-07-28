// Groucho
// app.js - main application

const _ = require('lodash');
const yargs = require('yargs');

// Get command
const scriptOptions = {
  describe: 'Script file',
  type: 'string',
  demandOption: true,
  alias: 's'
};

const argv = yargs
  .command('run', 'Run a script', {
    script: scriptOptions
  })
  .help()
  .argv;

const command = argv._[0];

// Execute Command
if (command === 'run') {
  console.log(`Run: ${argv.script}`);
}
