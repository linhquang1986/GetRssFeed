var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var q = require('q')
module.exports = class {
    constructor(url) {
        this.url = url;
        this.feedparser = new FeedParser();
        this.req = request(this.url);
    }
    parStart() {
        let that = this;
        var items = [];
        let d = q.defer();
        that.req.on('error', function (error) {
            d.reject({ status: 400, error: error })
        });
        that.req.on('response', function (res) {
            var stream = this; // `this` is `req`, which is a stream

            if (res.statusCode !== 200) {
                d.reject({ status: 400, error: 'Bad status code' })
            }
            else {
                stream.pipe(that.feedparser);
            }
        });
        that.feedparser.on('error', function (error) {
            d.reject({ status: 400, error: error })
        });
        that.feedparser.on('readable', function () {
            // This is where the action is!
            var stream = this; // `this` is `feedparser`, which is a stream
            var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
            var item;
            while (item = stream.read()) {
                items.push(item);
            }
        });
        that.feedparser.on('end', () => {
            d.resolve(items)
        });
        return d.promise;

    }
}