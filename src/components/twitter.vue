<template>
  <div class="twitter">
    <h1>Twitter</h1>
    <div id="tweetPost">
      <span>This is the tweet pulled from Reddit</span><br>
      <span id="editText">(Edit as needed)</span><br>
      <input type="text" size="50" v-model="tweetToPost"></input><br>
      <button v-on:click="postTweet(tweetToPost)">POST</button>
    </div>
  </div>
</template>

<script>
import twitter from 'twitter'
import dotenv from 'dotenv'

require('dotenv').config()

export default {
  name: 'twitter',
  data: () => {
    return {
      tweetToPost: ''
    }
  },
  methods: {
    postTweet: () =>  {
        
        const getBearerToken = require('get-twitter-bearer-token')
        const twitter_consumer_key = process.env.TWITTER_CONSUMER_KEY;
        const twitter_consumer_secret = process.env.TWITTER_CONSUMER_SECRET;
        
        getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
            if (err) {
                console.log(err, 'error')
            } else {
                console.log(res, 'response')
              // bearer token 
              console.log(res.body.access_token)
            }
        })
      

      
      
      // let client = new twitter(secret); 
      // console.log(client, 'client')
      // console.log(header, 'header')
//       var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   bearer_token: process.env.TWITTER_BEARER_TOKEN
// });
      // client.post('statuses/update', {status: 'I Love Twitter'}, 
      //   function(error, tweet, response){ 
      //      if (error) {
      //        console.log(error); 
      //        } 
      //         console.log(tweet); 
      //         console.log(response); 
      //   });
        
    }//end post Tweet
  }//end methods
} //end export 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#editText {
  font-size: 10px;
}
</style>
