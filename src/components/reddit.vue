<template>
  <div class="reddit">
    <h1>{{ msg }}</h1>
    <h2>Reddit</h2>
    <label for="getArticles">Get Churning Articles</label><button id="getArticles" v-on:click="getChuringArticles()">GET</button>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  name: 'reddit',
  data: () => {
    return {
      newChuringArticles: [],
      msg: 'this is Reddit',
    }
  },
  methods: {
    //Get's churning subreddit *new* articles in json from reddit 
    //loop's through json to pull out article title and unique id
    //id will be used to search comments for example tweet. 
    getChuringArticles: () => {
      this.newChuringArticles = []
      axios.get('https://www.reddit.com/r/churning/new.json')
      .then(response => {
        let getChuringArticles = response.data.data.children;
        for (var i = 0; i < getChuringArticles.length; i++) {
          let obj = getChuringArticles[i];
          for (let key in obj){
            this.title = obj[key].title;
            this.articleId = obj[key].id;  
                //pull out undefined items
              if(this.title && this.articleId != undefined){
              this.newChuringArticles.push({title: this.title, id: this.articleId})
        
            }// if
          } //for in
        } // for loop
      }, response => {
        console.log('error')
      });
    },
    getArticleComments: () => {
      console.log(this.newChuringArticles, 'new get article comments')
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
#getArticles {
  margin: 5px;
}
</style>
