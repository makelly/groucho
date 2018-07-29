// channel-mgr.js - channel manager

const _ = require('lodash');

const sinkOut = require('./channel-sink.js');
const fileOut = require('./channel-file.js');
const intersystemsOut = require('./channel-intersystems.js');
const meshOut = require('./channel-mesh.js');
const config = require('./channel-config.js');

// Class to manage publishing events via different output channels
class ChannelManager {
  // constructor
  constructor() {
    try {
      // Get channel config information
      let cfg = new config.ChannelConfig();

      // Create instances of all output channels, passing in config information
      this.sink = new sinkOut.SinkChannel();
      this.file = new fileOut.FileChannel(cfg.file);
      this.intersystems = new intersystemsOut.InterSystemsChannel(cfg.intersystems);
      this.mesh = new meshOut.MeshChannel(cfg.mesh);
    } catch(e) {
      throw new Error(e.message);
    }
  }
}

// Export modules
module.exports = {
  ChannelManager
}
