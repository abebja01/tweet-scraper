var Twitter = require('twitter');
var fs = require('fs');
var config = require('./../config');


var twitterConfig = config.twitterConfig;
var queryParams = config.latestTweetParams;
var outputFile = config.outputFile;

var client = new Twitter({
  consumer_key: twitterConfig.consumer_key,
  consumer_secret: twitterConfig.consumer_secret,
  access_token_key: twitterConfig.access_token_key,
  access_token_secret: twitterConfig.access_token_secret
  });
  
  var params = {
    q: queryParams.q,
    count: queryParams.count,
    language: queryParams.language
  }
  
var stream = fs.createWriteStream(outputFile,{flags: 'a'});

  client.get('search/tweets',params,function(error, tweets, response) {
    if(error) console.log(error);

    tweets.statuses.forEach((tweet,run)=>{
        console.log(tweet.text);

       
            stream.write(tweet.text);
         
     });
     
  stream.end();


});