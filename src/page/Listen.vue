<template>
  <div style="height: 100%; background-color: #aee4ff">
    <div style="text-align: center; font-size: 15px; padding-top: 20px; margin-bottom: 15px">今日推荐</div>

    <!--<aplayer autoplay-->
    <!--:music="{-->
    <!--title: '浪费',-->
    <!--artist: '林宥嘉',-->
    <!--src: 'http://sc1.111ttt.cn/2016/1/12/05/205052117476.mp3',-->
    <!--pic: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/secretbase.jpg'-->
    <!--}"-->
    <!--/>-->

    <!--lrcType=1 字符串形式  =2 HTML形式  =3 文件形式-->
    <!--LRC format-->
    <!--The following LRC format are supported:-->

    <!--[mm:ss]APlayer-->

    <!--[mm:ss.xx]is-->

    <!--[mm:ss.xxx]amazing-->

    <!--[mm:ss.xx][mm:ss.xx]APlayer-->

    <!--[mm:ss.xx]<mm:ss.xx>is-->

    <!--[mm:ss.xx]amazing[mm:ss.xx]APlayer-->

    <div>
      <div v-if="!star" @click="onStar"
           style="font-size: 15px; position: absolute; z-index: 999; left: 91%; margin-top: 10px">
        <van-icon name="like-o"></van-icon>
      </div>
      <div v-else @click="onStar"
           style="font-size: 15px; position: absolute; z-index: 999; left: 91%; margin-top: 10px; color: red">
        <van-icon name="like"></van-icon>
      </div>
    </div>

    <aplayer style="margin-bottom: 10px"
             autoplay
             theme="pic"
             shuffle
             repeat="list"
             show-lrc
             :muted.sync="muted"
             :volume.sync="volume"
             :music='musicArr[0]'
             :list='musicArr'/>

    <div style="padding-bottom: 60px; text-align: center; font-size: 10px; color: #999999">--------别太贪心哦--------</div>

  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'

  export default {
    name: 'Listen',
    components: {
      Aplayer
    },
    data () {
      return {

        star: false,

        musicArr: [],
        muted: false,
        volume: 1,
      }
    },
    methods: {

      onStar () {
        this.star = !this.star
      }
    },
    created () {

      this.musicArr = [

        {
          title: '浪费',
          artist: '林宥嘉',
          src: 'http://sc1.111ttt.cn/2016/1/12/05/205052117476.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
          lrc: '[00:00.00]APlayer\n[00:04.01]is\n[00:08.02]amazing'
        },
        {
          title: '一生何求',
          artist: '陈百强',
          src: 'http://sc1.111ttt.cn/2016/5/12/09/205092003238.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '最美的期待',
          artist: '周笔畅',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '明天你好',
          artist: '未知',
          src: 'http://sc1.111ttt.cn/2016/1/12/10/205100059540.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '我不相信',
          artist: '庄心妍',
          src: 'http://sc1.111ttt.cn/2017/1/05/09/298092041338.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '广东爱情故事',
          artist: '广东雨神',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '浪费',
          artist: '林宥嘉',
          src: 'http://sc1.111ttt.cn/2016/1/12/05/205052117476.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
          lrc: '[00:00.00]APlayer\n[00:04.01]is\n[00:08.02]amazing'
        },
        {
          title: '一生何求',
          artist: '陈百强',
          src: 'http://sc1.111ttt.cn/2016/5/12/09/205092003238.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '最美的期待',
          artist: '周笔畅',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '明天你好',
          artist: '未知',
          src: 'http://sc1.111ttt.cn/2016/1/12/10/205100059540.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '我不相信',
          artist: '庄心妍',
          src: 'http://sc1.111ttt.cn/2017/1/05/09/298092041338.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '广东爱情故事',
          artist: '广东雨神',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '浪费',
          artist: '林宥嘉',
          src: 'http://sc1.111ttt.cn/2016/1/12/05/205052117476.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
          lrc: '[00:00.00]APlayer\n[00:04.01]is\n[00:08.02]amazing'
        },
        {
          title: '一生何求',
          artist: '陈百强',
          src: 'http://sc1.111ttt.cn/2016/5/12/09/205092003238.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '最美的期待',
          artist: '周笔畅',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '明天你好',
          artist: '未知',
          src: 'http://sc1.111ttt.cn/2016/1/12/10/205100059540.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '我不相信',
          artist: '庄心妍',
          src: 'http://sc1.111ttt.cn/2017/1/05/09/298092041338.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '广东爱情故事',
          artist: '广东雨神',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '浪费',
          artist: '林宥嘉',
          src: 'http://sc1.111ttt.cn/2016/1/12/05/205052117476.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
          lrc: '[00:00.00]APlayer\n[00:04.01]is\n[00:08.02]amazing'
        },
        {
          title: '一生何求',
          artist: '陈百强',
          src: 'http://sc1.111ttt.cn/2016/5/12/09/205092003238.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '最美的期待',
          artist: '周笔畅',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '明天你好',
          artist: '未知',
          src: 'http://sc1.111ttt.cn/2016/1/12/10/205100059540.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '我不相信',
          artist: '庄心妍',
          src: 'http://sc1.111ttt.cn/2017/1/05/09/298092041338.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
        {
          title: '广东爱情故事',
          artist: '广东雨神',
          src: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
          pic: 'http://img4.imgtn.bdimg.com/it/u=202822525,4136369797&fm=26&gp=0.jpg',
        },
      ]

    },

    mounted () {

    }
  }
</script>

<style scoped>

</style>
