<template>
  <div class="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .main {
    height: 100%;
    background-color: #f2f2f2;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
  background-color: #ffffff;
}

  .router-enter-active,
  .router-leave-active {
    transition: opacity 0.3s;
  }
  .router-enter,
  .router-leave-to {
    opacity: 0;
  }
</style>
