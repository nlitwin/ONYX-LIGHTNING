var FeedParser = require('feedparser');
var request = require('request');
var db = require('./api/thing/thing.controller');

var req = request('http://news.yahoo.com/rss/world/');
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
    newItem.title=item.title;
    newItem.location='Paraguay';
    newItem.info= item.summary;
    newItem.url=item.link;
    console.log(newItem);
     console.log(item.title, '----');
   //  console.log(JSON.parse(item.title))
     //db.create(JSON.parse(item.title));
  }
});


