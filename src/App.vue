<template>
  <div id="app">
    <header>
     <a id="clickHome" href="/"><span>This App</span></a> 
     <a id="clickHome" href="#/twitter"><span>Twitter</span></a>
     <a id="clickHome" href="#/reddit"><span>Reddit</span></a>
    </header>
    <main>
      <img src="" alt="">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: orange;
  color: #ffffff;
}
#clickHome {
  text-decoration: none;
  color: white;
}
header span {
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}
</style>
