var twitter = require('ntwitter');
var fs = require('fs');
var config = require('./../config');
var twitterConfig = config.twitterConfig;
var twit = new twitter({
  consumer_key: twitterConfig.consumer_key,
  consumer_secret: twitterConfig.consumer_secret,
  access_token_key: twitterConfig.access_token_key,
  access_token_secret: twitterConfig.access_token_secret
});
var track = config.trackTweets;
var outputFile = config.outputFile;


var tweetNr = 0;
var steamWrite = fs.createWriteStream(outputFile, { flags: 'a' });

twit.stream('statuses/filter', track, function (stream) {
  stream.on('data', function (data) {

    steamWrite.write('\n' + data.text);
    tweetNr++;
    console.log('Total tweets written to file:' + tweetNr);
  });

  stream.on('end', function (response) {
    console.log('stream ended');
    console.log(response);
    streamWrite.end();

  });
  stream.on('destroy', function (response) {

    streamWrite.end();
  });

});