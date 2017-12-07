<template>
  <div class="reddit">
    <h1>Reddit</h1>
    <label for="getArticles">Get Churning Articles</label><button id="getArticles" v-on:click="getChurningArticles()">GET</button>
        
    <h2>New Churning Articles</h2>
    <ol id="orderedArticles">
      <li  v-for="art in newChurningArticles"> {{art.title}} -- {{art.id}}</li>
    </ol>
    <button v-on:click="getArticleComments()"> Comments </button>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  name: 'reddit',
  data: () => {
    return {
      newChurningArticles: [],
      title: '',
      articleId: ''
    }
  },
  // mounted () {
  //   console.log('ready')
  //     this.newChurningArticles = this.getChurningArticles()
  // },
  methods:  {
    // thisGoesFirst:  () =>  {
    //     console.log('goes first')
    //       this.getChurningArticles( (callback) => {
    //         console.log('got Articles')
    //         this.gotArticles = true
    //       });
    // },
    //Get's churning subreddit *new* articles in json from reddit 
    //loop's through json to pull out article title and unique id
    //id will be used to search comments for example tweet. 
    getChurningArticles: function () {
      console.log('in getting articles')
      this.newChurningArticles = []
      axios.get('https://www.reddit.com/r/churning/new.json')
      .then(response => {
        let fetchChurningArticles = response.data.data.children;
        for (var i = 0; i < fetchChurningArticles.length; i++) {
          let obj = fetchChurningArticles[i];
          for (let key in obj){
            this.title = obj[key].title;
            this.articleId = obj[key].id;  
                //pull out undefined items
              if(this.title && this.articleId != undefined){
                this.newChurningArticles.push({title: this.title, id: this.articleId})
            }// if
          } //for in
        } // for loop
      }, response => {
        console.log('error')
      });
    },
    
    getArticleComments: function () {
      console.log(this.newChurningArticles, 'new get article comments')
      this.displayArticles = this.newChurningArticles;
         
    }
    //------------- TO DO ----------------
    //get comments based on article selected 
    //Future - setup to search for marriott NFL question of the week. 
    //get sub reddit articles
    //get the right article 
    //get the right comment 
    //send comment to twitter 
    //twit comment(as answer to question
    
  }// end methods
}//export

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#getArticles {
  margin: 5px;
}
h2 {
  text-align: start;
  margin-left: 40px;
}
#orderedArticles {
  text-align: start;
  margin-left: 50px;
}
</style>
