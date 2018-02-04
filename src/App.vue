<template>
  <div id="app">
    <keep-alive :include="includes">
      <router-view/>
    </keep-alive>
    <button @click="$router.push({path: '/a'})">to a</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    includes() {
      return ['aa', 'bb']
    }
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
