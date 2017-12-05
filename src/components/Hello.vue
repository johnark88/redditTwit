<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button><router-link id="twitRoute" to="/twitter">Go to Twitter</router-link></button>
    <button><router-link id="redditRoute" to="/reddit">Go to Reddit</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'This App welcomes you'
    }
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
