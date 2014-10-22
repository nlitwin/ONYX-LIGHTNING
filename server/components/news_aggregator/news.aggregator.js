var FeedParser = require('feedparser');
var request = require('request');
// var db = require('./api/thing/thing.controller');


// var apiMap = {
//   yahoo: {
//     url: 'http://news.yahoo.com/rss/world/'
//   }
// };

var apiMap = require('./news.source.config.js');
var utils = require('./news.aggregator.utils.js');

exports.fetchArticles = function(dbCallback) {
  // console.log('parseRSS.js : 13');
  // console.log('parseRSS.js : 14', dbCallback);

  for (var key in apiMap) {
    console.log(key);
    fetchSingleApi(apiMap[key]);
  }

  function fetchSingleApi (api) {
    console.log(api);
    var req = request(api.url);
    var feedparser = new FeedParser();

    req.on('error', function (error) {
      // handle any request errors
    });
    req.on('response', function (res) {
      var stream = this;

      if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

      stream.pipe(feedparser);
    });


    feedparser.on('error', function(error) {
      // always handle errors
    });
    feedparser.on('readable', function() {
      // This is where the action is!
      var stream = this
        , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
        , item;

      while (item = stream.read()) {
        var newItem = {};
        newItem.title = item.title;
        newItem.location = utils.getLocation();
        newItem.info = item.summary;
        newItem.url = item.link;
        // console.log(newItem.title);
        dbCallback(newItem);
      }
    });
  }

};
