<!--  -->
<template>
  <div>
    <van-nav-bar title="疫苗详情" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <!-- <p>
      那天看到一段话大概是说，好像爱一个人就总会觉得ta很可怜，就像你只是一个人住，吃了顿外卖。你爸妈就会说在外面住很可怜，一个人吃饭很可怜。
      我觉得还挺有道理的，不喜欢一个人的话，当对方遇到不好时就想划清界限;而很喜欢一个人的话，看到对方出现一点狼狈心都会碎。四五年前遇到过一个女孩，那时候谈不上多喜欢她，就觉得她足够高挑好看又很酷，可以当女朋友。当时我们日常约会，关系一步步发展。后来有一天我们一起上楼，她在进电梯时被电梯门轻轻夹了一下，电梯里很多人气氛有点尴加，那一瞬间她有点面露难色、失态狼狈。回
      去的时候这一幕总在我脑海里闪现，奇怪的是，我始终说不出的反感，觉得好像她一下子就不好看了不酷了，我反应过来自己真的不喜欢她，那天之后我们再也没有联系过。后来同样的，有一次我和小女友上天桥时她滑了一个屁股蹲，就滑了一级台阶腿磕破一点儿皮，但当时她一屁股坐地上，我就觉得她真可怜，赶紧冲过去像抱小朋友那种一下子抱起来她，使劲拍拍股的土，一个劲儿怪她走路不牵着我，心里真的挺难过的。她说我都摔倒了你还怪我，你有啥好生气的啊。我说生气是无能的体现，我气我自己无能没有扶好你，你不懂。
    </p>-->
    <div class="box">
      <video :src="vacc.video" controls="controls" style="width:100%;height:100%" id="video"></video>
      <!-- <video src="${video}" controls="controls" class="video" id="my-video"> </video> -->
    </div>
    <div class="vac">
        <p style="margin-left:5%">疫苗名称：{{vacc.vname}}</p>
        <p style="margin-left:5%">疫苗种类：{{vacc.vclass}}</p>
        <!-- <p style="margin-left:5%">剂次：{{vacc.dosetimes}}</p> -->
        <!-- <p style="margin-left:10px">剂型：{{vacc.doseform}}</p> -->
        <p style="margin-left:5%">规格：{{vacc.specifications}}</p>
        <!-- <p style="margin-left:5%">厂家：{{vacc.manufactor}}</p> -->
        <p style="margin-left:5%">价格：{{vacc.price}}</p>
        <p style="margin-left:5%">疫苗禁忌：{{vacc.vclass}}</p>
        <p style="margin-left:5%">接种禁忌：{{vacc.dosetimes}}</p>
        <!-- <p style="margin-left:10px;color:red" v-if="play">播放完成</p> -->

      <div style="margin-left:10px;">
        <div>
          <!-- <button @click="jump()" class="yes">预约疫苗</button> -->
          <div style="margin: 16px;margin-top:20px">
            <van-button round block type="info" @click="jump()" class="yes">预约疫苗</van-button>
          </div>
        </div>
      </div>
      <!-- <button style="margin-top:10px;margin-left:2.5%" @click="jump1()"><a href="ele">签名</a> <input type="file"  ref="file" ></button> -->
    </div>
    <!-- <button @click="jump()" class="yes">预约疫苗</button> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      vacc: "",
      Aemail: "",
      file: "",
      imgBase64: [],
      vname: "",
      play: "",
      timers: "",
      getCurTime: "",
      isFinish:false,
      vid:''
    };
  },
  mounted() {
    this.videoplay();
  },

  created() {
    this.vid=this.$route.query.info;
    console.log(this.vid);
    // var vid = sessionStorage.getItem("vid");
    let fromdata = new FormData();
    fromdata.append("vid",this.vid);

    this.$axios
      .post("http://152.136.232.95:8089/vaccines/findVaccinesByVid", fromdata)
      .then(res => {
        console.log(res);
        this.vacc = res.data;

        // console.log(vacc.vname)
      });
    this.vname = this.$route.query.vname;
    console.log(this.vname);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    videoplay() {
      var that=this
      var elevideo = document.getElementById("video");
      var last = 0;
      var temp;
      elevideo.ontimeupdate = function() {
        var current = elevideo.currentTime;
        if (current - last > 2) {
          elevideo.currentTime = last;
        } else {
          last = current;
        }
      };
      elevideo.addEventListener("loadedmetadata", function() {
        var tol = elevideo.duration; //获取总时长

        this.getCurTime = parseInt(tol);
        // console.log(this.getCurTime);
      });
      elevideo.addEventListener("ended", function() {
        //结束
        that.isFinish=true
        alert("播放结束");
      });
      elevideo.addEventListener("timeupdate", function() {
        var timers = Math.ceil(this.currentTime - 1); //视频当前播放时长
        // time1.innerHTML=timeToMinute(timers);
        this.timers = timers;
        // console.log(this.timers);
      });
    },

    jump() {
      /* if (this.getCurTime == this.timers) {
        this.$router.push("appointment?vname=" + this.vname);
      } else if (this.getCurTime != this.timers) {
        alert("请先看完视频，再去预约！");
      } */
      if(this.isFinish==false){
        alert("请先看完视频，再去预约！");
      }else{
        this.$router.push("inquiry?vname=" + this.vacc.vname);
      }
    }
  }
};
</script>
<style  scoped>
.button {
  margin-left: 39%;
}
.box {
  width: 94%;
  height: 12em;
  text-align: center;
  /* border:1px solid black; */
  margin-left: 2.8%
}
.yes {
  /* margin-left:37.5%; */
  margin-top: 50px;
}
.yes1 {
  margin-left: 22%;
  margin-top: 50px;
}
</style>