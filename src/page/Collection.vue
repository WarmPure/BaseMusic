<template>
  <div style="height: 100%; background-color: #ffffff">
    <div style="text-align: center; font-size: 15px; padding-top: 20px; padding-bottom: 15px">收藏</div>


    <van-list class="common-bg" style="padding-top: 5px" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item, index) in dataSource" :key="index">
        <div style="padding: 5px 15px 5px 15px;">
          <div class="card-border">
            <div  style="width: 100%; display: flex; justify-content: space-between; padding: 10px 15px 10px 15px;">

              <div style="display: inline-flex">
                <div style="margin-top: auto; margin-bottom: auto; font-size: 15px">1.</div>
                <div style="margin-top: auto; margin-bottom: auto; margin-left: 15px">
                  <div style="font-size: 14px; margin-bottom: 5px">歌名字</div>
                  <div style="font-size: 14px; color: #8d8d8d">演唱者</div>
                </div>
              </div>

              <div style="margin-top: auto; margin-bottom: auto;">
                <van-icon name="play-circle-o"></van-icon>
                <van-icon name="pause-circle-o"></van-icon>
              </div>



            </div>
          </div>
        </div>
      </div>
    </van-list>

  </div>
</template>

<script>
  export default {
    name: 'Collection',

    data() {
      return {
        dataSource: ['1',""],
        error: false,
        loading: false,
        finished: false,


      }
    },

    methods: {

      onLoad () {
        this.finished = true;
        this.loading = false;
      }
    },



  }
</script>

<style scoped>


  .van-icon {

    font-size: 20px !important;
  }


</style>
