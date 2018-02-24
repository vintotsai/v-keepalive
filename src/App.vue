<template>
  <div id="app">
    <keep-alive :max="3">
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />
    <button @click.stop="$router.push({path: '/a'})">to a</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key() {
      return this.$route.fullPath
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
button {
  border: 1px solid #ccc;
}
</style>
