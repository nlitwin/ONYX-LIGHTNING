'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var newsUtils = require('../../components/news_aggregator/news.aggregator.utils.js')

describe('GET /api/things', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/news')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  it('news response should have a 200 status', function(done) {
    request(app)
      .get('/api/news')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  it('news response should have a valid url', function(done) {
    request(app)
      .get('/api/news')
      .end(function(err, res) {
        if (err) return done(err);
        res.body[0].url.should.be.instanceof(String)
        //valid Url is the url found in the response object's url property
        var validUrl = newsUtils.isValidUrl(res.body[0].url);
        //isValidUrl returns true if it passes the regex test
        (validUrl).should.be.ok;

        res.body.should.be.instanceof(Array);
        done();
      });
  });
  it('news response should have a location that is a country', function(done) {
    request(app)
      .get('/api/news')
      .end(function(err, res) {
        if (err) return done(err);
        res.body[0].location[0].should.be.instanceof(String);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  it('news response should have a title', function(done) {
    request(app)
      .get('/api/news')
      .end(function(err, res) {
        if (err) return done(err);
        res.body[0].title.should.be.instanceof(String)
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
