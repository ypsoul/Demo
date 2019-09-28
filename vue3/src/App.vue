<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <setup :page = "1"></setup> 
    <ref></ref>  -->
    <!-- <to-ref></to-ref> -->
    <!-- <computed></computed> -->
    <watch></watch>
  </div>
</template>

<script>

// import setup from './components/setup.vue'

// import ref from './components/ref.vue'

// import toRef from './components/toRefs.vue'

// import computed from './components/computed.vue'

import watch from './components/watch.vue'

export default {
  name: 'app',
  components: {
    // setup,
    // ref,
    // toRef
    // computed
    watch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
