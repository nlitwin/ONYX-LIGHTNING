/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';
var parser = require('../../parseRSS');
var _ = require('lodash');
var Thing = require('./thing.model');
console.log('thing.controller.js : 14');

module.exports = {
  createArticle: createArticle,
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};



// Fill Database with Yahoo data
// parser.fetchArticles(module.exports.createArticle);




// Create Unique article in DB (uniqueness is determined by the url)
// This function is meant to be a callback for fetchArticles() in parseRSS.js
function createArticle (newArticle) {
  console.log('THINGS ####### createArticle')
  Thing.create(newArticle, function(err, article){
    if (err) {
      // console.log(err)
      ;
    } else {
      // console.log(newArticle);
      ;
    }
  });
}


// Get list of things
function index(req, res) {
  // console.log('controller index')
  Thing.find(function (err, things) {
    // console.log('found', things)
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single thing
function show(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
function create(req, res) {
  Thing.create(req.body, function(err, thing) {
    console.log('creating new')
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Updates an existing thing in the DB.
function update (req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
function destroy (req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
