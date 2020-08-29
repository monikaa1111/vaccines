<!--  -->
<template>
  <div class>
    <top></top>
    <van-nav-bar title="疫苗分类" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-for="(item,index) in one " :key="index">
          <div v-if="active === 0" class="box" @click="jump(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <van-button plain type="info" class="button">预约</van-button>
            <!-- <button class="button">预约</button> -->
          </div>
        </div>
        <div v-for="(item,index) in two" :key="index">
          <div v-if="active === 1" class="box" @click="jump1(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in three" :key="index">
          <div v-if="active === 2" class="box" @click="jump2(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
            <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in four" :key="index">
          <div v-if="active === 3" class="box" @click="jump3(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in five" :key="index">
          <div v-if="active === 4" class="box" @click="jump4(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
            <van-button plain type="info" class="button">预约</van-button>
         </div>
        </div>
        <div v-for="(item,index) in six" :key="index">
          <div v-if="active === 5" class="box" @click="jump5(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in seven" :key="index">
          <div v-if="active === 6" class="box" @click="jump6(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in eight" :key="index">
          <div v-if="active === 7" class="box" @click="jump7(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in nine" :key="index">
          <div v-if="active === 8" class="box" @click="jump8(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in oneyear" :key="index">
          <div v-if="active === 9" class="box" @click="jump9(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in yiyear" :key="index">
          <div v-if="active === 10" class="box" @click="jump10(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in twoyear" :key="index">
          <div v-if="active === 11" class="box" @click="jump11(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in threeyear" :key="index">
          <div v-if="active === 12" class="box" @click="jump12(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in fouryear" :key="index">
          <div v-if="active === 13" class="box" @click="jump13(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
        <div v-for="(item,index) in sixyear" :key="index">
          <div v-if="active === 14" class="box" @click="jump14(index)">
            <!-- <img :src="item.video" alt class="img" /> -->
            <p style="margin-left:2%">{{item.vname}}</p>
            <!-- <button class="button">预约</button> -->
             <van-button plain type="info" class="button">预约</van-button>
          </div>
        </div>
      </template>
    </van-tree-select>
    
   <div class="aaa"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import top from "@/components/top";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    top
  },
  data() {
    //这里存放数据
    return {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      oneyear: "",
      twoyear: "",
      threeyear: "",
      fouryear: "",
      yiyear: "",
      sixyear: "",
      seven: "",
      eight: "",
      nine: "",
      active: 0,
      items: [
        { text: "一月" },
        { text: "二月" },
        { text: "三月" },
        { text: "四月" },
        { text: "五月" },
        { text: "六月" },
        { text: "七月" },
        { text: "八月" },
        { text: "九月" },
        { text: "一岁" },
        { text: "一岁半" },
        { text: "两岁" },
        { text: "三岁" },
        { text: "四岁" },
        { text: "五岁" },
        { text: "六岁" },
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    jump(index) {
      this.$router.push("/classification?vname="+this.one[index].vname);
    },
    jump1(index) {
      this.$router.push("/classification?vname="+this.two[index].vname);
    },
    jump2(index) {
      this.$router.push("/classification?vname="+this.three[index].vname);
    },
    jump3(index) {
      this.$router.push("/classification?vname="+this.four[index].vname);
    },
    jump4(index) {
      this.$router.push("/classification?vname="+this.five[index].vname);
    },
    jump5(index) {
      this.$router.push("/classification?vname="+this.six[index].vname);
    },
    jum6(index) {
      this.$router.push("/classification?vname="+this.seven[index].vname);
    },
    jump7(index) {
      this.$router.push("/classification?vname="+this.eight[index].vname);
    },
    jump8(index) {
      this.$router.push("/classification?vname="+this.nine[index].vname);
    },
    jump9(index) {
      this.$router.push("/classification?vname="+this.oneyear[index].vname);
    },
    jump10(index) {
      this.$router.push("/classification?vname="+this.yiyear[index].vname);
    },
    jump11(index) {
      this.$router.push("/classification?vname="+this.twoyear[index].vname);
    },
    jump12(index) {
      this.$router.push("/classification?vname="+this.threeyear[index].vname);
    },
    jump13(index) {
      this.$router.push("/classification?vname="+this.fouryear[index].vname);
    },
    jump14(index) {
     this.$router.push("/classification?vname="+this.sixyear[index].vname);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var that = this;
    let fromdata = new FormData();
    fromdata.append("age", "一月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata
      )
      .then(res => {
        console.log(res);
        this.one = res.data;
      });
    let fromdata1 = new FormData();
    fromdata1.append("age", "二月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata1
      )
      .then(res => {
        console.log(res);
        this.two = res.data;
      });
          let fromdata2 = new FormData();
    fromdata2.append("age", "三月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata2
      )
      .then(res => {
        console.log(res);
        this.three = res.data;
      });
          let fromdata3 = new FormData();
    fromdata3.append("age", "四月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata3
      )
      .then(res => {
        console.log(res);
        this.four = res.data;
      });
          let fromdata4 = new FormData();
    fromdata4.append("age", "五月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata4
      )
      .then(res => {
        console.log(res);
        this.five = res.data;
      });
          let fromdata5 = new FormData();
    fromdata5.append("age", "六月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata5
      )
      .then(res => {
        console.log(res);
        this.six = res.data;
      });
          let fromdata6 = new FormData();
    fromdata6.append("age", "七月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata6
      )
      .then(res => {
        console.log(res);
        this.seven = res.data;
      });
          let fromdata7 = new FormData();
    fromdata7.append("age", "八月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata7
      )
      .then(res => {
        console.log(res);
        this.eight = res.data;
      });
          let fromdata8 = new FormData();
    fromdata8.append("age", "九月");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata8
      )
      .then(res => {
        console.log(res);
        this.nine = res.data;
      });
      let fromdata9 = new FormData();
    fromdata9.append("age", "一岁");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata9
      )
      .then(res => {
        console.log(res);
        this.oneyear = res.data;
      });
      let fromdata10 = new FormData();
    fromdata10.append("age", "一岁半");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata10
      )
      .then(res => {
        console.log(res);
        this.yiyear = res.data;
      });
      let fromdata11 = new FormData();
    fromdata11.append("age", "两岁");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata11
      )
      .then(res => {
        console.log(res);
        this.twoyear = res.data;
      });
      let fromdata12 = new FormData();
    fromdata12.append("age", "三岁");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata12
      )
      .then(res => {
        console.log(res);
        this.threeyear = res.data;
      });
      let fromdata13 = new FormData();
    fromdata13.append("age", "四岁");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata13
      )
      .then(res => {
        console.log(res);
        this.fouryear = res.data;
      });
      let fromdata14 = new FormData();
    fromdata14.append("age", "六岁");
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByAge",
        fromdata14
      )
      .then(res => {
        console.log(res);
        this.sixyear = res.data;
      });
      
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style  scoped>
.box {
  width: 80%;
  height: 7em;
  /* border:1px solid black; */
  margin:10px auto;
  box-shadow: 1px 1px 1px 1px rgb(218, 217, 217);
  position: relative;
}
.van-tree-select__nav {
  flex: 0.8;
  /* height: 400px; */
}
.img {
  width: 100%;
  height: 10em;
}
p{
  position: absolute;
  top: 15%;
  left: 5%
}
.button{
  height: 2em;
  margin-bottom: 10px;
  margin-right: 5%;
  position: absolute;
  right: 5%;
  bottom: 10%;
}
.aaa
{width: 100%;
height: 50px;
/* position: flex; */
/* border:1px solid black; */
 }
</style>