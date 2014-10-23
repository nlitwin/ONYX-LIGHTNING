'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  // Link to MongoLabs:
  // mongodb://MongoLab-h:gPeidJFDyXGX9Vg1uutUrYIbv7VAMeiEXfQfu0fCF10-@ds030607.mongolab.com:30607/MongoLab-h
  // Local MongoDB:
  // mongodb://localhost/onyxlightning-dev
  mongo: {
    uri: 'mongodb://MongoLab-h:gPeidJFDyXGX9Vg1uutUrYIbv7VAMeiEXfQfu0fCF10-@ds030607.mongolab.com:30607/MongoLab-h'
  },

  seedDB: false
};
