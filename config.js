module.exports = 

{
    outputFile: "<file name to output tweets>",

    twitterConfig: {

        consumer_key: '<your consumer key>',
        consumer_secret: '<your secret consumer key>',
        access_token_key: '<your access token key>',
        access_token_secret: '<your access token secret key>'
    
    },

    // parameters to play  when running the latestTweets script
    latestTweetParams:{
        
            q: '<#hashtag1>,<#hashtag2>,...',
            count: 1000, // how many tweets to grab
            language: 'english' // check twitter documentation for list of languages
            
    },

    // parameters to play with when syncing with the Tweet stream and listening to tweets for a specific hashtag

     trackTweets:{track:'<#hashtag1>,<#hashtag2>,...'}
   
}