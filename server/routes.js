/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var thingRouter = require('./api/thing/index.js');
var newsRouter = require('./api/news/index.js')
var userRouter = require('./api/user/index.js');
var authRouter = require('./auth/index.js');
module.exports = function(app) {



  // Insert routes below
  app.use('/api/things', thingRouter);
  app.use('/api/users', userRouter);
  app.use('/api/news', newsRouter);

  app.use('/auth', authRouter);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
