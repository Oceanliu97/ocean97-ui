<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>\
    <LyButton unit="asdasd">测试按钮{{ handleFirstUpperCase('qweqwe') }}</LyButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LyButton from './package/button/src/button.vue'

import { handleFirstUpperCase } from './package/public-js/letter.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LyButton
  },
  created(){
console.log("🚀 ~ file: App.vue:14 ~ handleFirstUpperCase:", handleFirstUpperCase)

  },
  methods: {
    handleFirstUpperCase
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
