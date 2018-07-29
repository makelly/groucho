// channel-config.js - channel configuration

const fs = require('fs');
const path = require('path');

// Class to load channel configuration information
class ChannelConfig {
  // Constructor
  constructor() {
    const folder = 'config';
    const fileEncoding = 'utf8';
    const fileFileName = 'channel-file.json';
    const intersystemsFileName = 'channel-intersystems.json';
    const meshFileName = 'channel-mesh.json';

    try {
      // Get the config files for each channel
      this.file = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, fileFileName), fileEncoding));
      this.intersystems = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, intersystemsFileName), fileEncoding));
      this.mesh = JSON.parse(fs.readFileSync(path.join(__dirname, '..', folder, meshFileName), fileEncoding));
    } catch(e) {
      throw new Error(e.message);
    }
  }
}

// Export modules
module.exports = {
  ChannelConfig
}
