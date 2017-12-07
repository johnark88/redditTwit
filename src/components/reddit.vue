<template>
  <div class="reddit">
    <h1>Reddit</h1>
    <label for="getArticles">Get Churning Articles</label><button id="getArticles" v-on:click="getChurningArticles()">GET</button>
        
    <h2>New Churning Articles</h2>
    <ol id="orderedArticles">
      <li  v-for="art in newChurningArticles"> {{art.title}} --  <button @click="getArticleComments(art.id)">{{art.id}}</button></li>
    </ol>
    
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  name: 'reddit',
  data: () => {
    return {
      newChurningArticles: [],
      newArticleComments: [],
      title: '',
      articleId: ''
    }
  },
  methods:  {
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
    //Passed (id) based on button clicked by user
    //axois.get comments of article based on (id)
    //parse json - only need comments(this.body) 
    getArticleComments: function (id) {
      console.log(id, 'id')
      axios.get('https://www.reddit.com/r/churning/comments/'+ id +'.json')
      .then(response => {
        console.log(response.data[1].data.children)
          let fetchedArticleComments = response.data[1].data.children
          for (var i = 0; i < fetchedArticleComments.length; i++){
            let obj = fetchedArticleComments[i];
            for(let key in obj){
               this.body = obj[key].body;
               console.log(this.body, 'body?')

               if(this.body != undefined) {
                 this.newArticleComments.push({comment: this.body})
               }//end if
            }//end for in
          } //end for loop
          console.log(this.newArticleComments, 'done')
      }, response => {
        console.log('error in get comments')
      })
    }, //ed get article comments


    //------------- TO DO ----------------
    //get comments based on article selected 
    //Future - setup to search for marriott NFL question of the week. 

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
