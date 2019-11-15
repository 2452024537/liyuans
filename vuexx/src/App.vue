<template>
  <div id="app">
    <!-- header-bar -->
    <div class="main">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <!-- footer-bar -->
    <FooterBar />
  </div>
</template>
<script>
import FooterBar from './components/FooterBar/index'
export default {
  components: {
    FooterBar
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
html,body {
  width: 100%;
  height: 100%;
}

html {
  font-size: 13.333333vw;
}
a{ 
  color: black;
  font-size: 12px;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.header {
  width: 100%;
  height: .8rem;
  background: #ccc;
}
.main {
  flex:1;
  width: 100%;
  overflow: auto;
}

.footer {
  width: 100%;
  height: .8rem;
  background: #eee;
}

</style>
