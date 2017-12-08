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

export default {
  name: 'twitter',
  data: () => {
    return {
      tweetToPost: ''
    }
  },
  methods: {
    postTweet: (tweetToPost) =>  {

      console.log('post this to twitter - ', tweetToPost)
      var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });

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
