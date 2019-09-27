<template>
  <div class="common-bg">
    <listen v-if="active==0"></listen>
    <collection v-else-if="active==1"></collection>

    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>今日推荐</span>
        <i slot="icon" class="iconfont icon-shangquan"></i>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>收藏</span>
        <i slot="icon" class="iconfont icon-gongzuotai"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

  import Listen from "./Listen"
  import Collection from "./Collection"

  export default {
    name: 'Main',

    components: {
      Listen,
      Collection,
    },

    data() {
      return {
        active: 0,
      }
    },

  }
</script>

<style scoped>

</style>
