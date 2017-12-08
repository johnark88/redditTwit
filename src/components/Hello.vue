<template>
  <div class="hello">
    <button><router-link id="twitRoute" to="/twitter">Go to Twitter</router-link></button>
    <button><router-link id="redditRoute" to="/reddit">Go to Reddit</router-link></button>
  </div>
</template>

<script>
import twitter from '@/components/twitter'
import reddit from '@/components/reddit'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    reddit, twitter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

#twitRoute, #redditRoute {
  font-weight: bold;
  color: orange; 
  text-decoration: none;
  padding: 10px;
}
</style>
