<template>
  <div class="reddit">
    <h1>{{ msg }}</h1>
    <h2>Reddit</h2>
    <button v-on:click="getChuringArticles()"></button>
  </div>
</template>

<script type="text/javascript">
import VueResource from 'vue-resource'

export default {
  name: 'reddit',
  data: () => {
    return {
      msg: 'this is Reddit',
    }
  },
  methods: {
    getChuringArticles: () => {
      this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => {
        this.sources = response.data.sources;
      }, response => {
        console.log('error')
      });
    }
  
    //get sub reddit articles
    //get the right article 
    //get the right comment 
    //send comment to twitter 
    //twit comment(as answer to question)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
