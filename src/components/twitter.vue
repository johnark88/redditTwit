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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#editText {
  font-size: 10px;
}
</style>
