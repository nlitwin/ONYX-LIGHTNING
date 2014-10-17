'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  title: String,
  info: String,
  location: String,
  url: String
});

module.exports = mongoose.model('Thing', ThingSchema);
