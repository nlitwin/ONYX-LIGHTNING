'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewsSchema = new Schema({
  title: String,
  info: String,
  location: Array,
  url: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('News', NewsSchema);
