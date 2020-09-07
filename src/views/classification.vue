<!--  -->
<template>
  <div class>
    <van-nav-bar title="疫苗详细类别" left-text="返回" left-arrow @click-left="onClickLeft()" />

    <div>
      <div @click="jump(index)" class="box">
        <!-- <span class="span">{{item.vclass}}(免费)</span> -->
        <!-- <img :src="item.video" alt class="img" /> -->
        <span style="  position: absolute;
  left:15%;
  top: 28%;">点击了解以下接种疫苗的区别</span>
        <!-- <span class="span1">·详情信息</span> -->
        <!-- <button class="button">预约</button> -->
        <van-button
          plain
          type="info"
          style="   width: 42%;height: 1.8em;position: absolute;left:41%;bottom: 18%;"
        >了解详情</van-button>
      </div>
    </div>
    <div v-for="(item,index) in vclass1" :key="index">
      <div class="box" @click="jump(index)">
        <span class="span">{{item.vclass}}(免费)</span>
        <img :src="item.video" alt class="img" />
         <p style="margin-left:2%">{{item.vname}}</p>
        <span class="span1">·详情信息</span>
        <!-- <button class="button">预约</button> -->
        <van-button plain type="info" class="button">预约</van-button>
      </div>
    </div>
    <div v-for="(item,index) in vclass2" :key="index">
      <div class="box" @click="jump(index)">
        <span class="span">{{item.vclass}}(自费)</span>
        <img :src="item.video" alt class="img" />
        <p style="margin-left:2%">{{item.vname}}</p>
        <span class="span1">·详情信息</span>
        <!-- <button class="button">预约</button> -->
        <van-button plain type="info" class="button">预约</van-button>
      </div>
    </div>
    <!-- <p style="text-align:center">免费的一类疫苗</p>
        <div  v-for="(item,index) in vclass1 " :key="index">
        <van-cell center :title="item.vname" :value="item.manufactor" label="描述信息"  @click="jump(index)"/>
    </div>-->
    <!-- <div>
    </div>
    <div>
        <p style="text-align:center">以下为收费的二类疫苗</p>
        <div  v-for="(item,index) in vclass2 " :key="index">
        <van-cell center :title="item.vname" :value="item.manufactor" label="描述信息" @click="jump1(index)"/>
        </div>
    </div>-->
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
      vname1: "",
      vclass: "",
      vclass1: [],
      vclass2: []
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
      this.$router.push("/details?info=" + this.vclass1[index].vid);
    },
    jump1(index) {
      this.$router.push("/details?info=" + this.vclass2[index].vid);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.vname1 = this.$route.query.vname;
    console.log(this.vname1);
    let fromdata = new FormData();
    fromdata.append("vname", this.vname1);
    this.$axios
      .post("http://152.136.232.95:8089/vaccines/findVaccinesByVname", fromdata)
      .then(res => {
        console.log(res);
        this.vclass = res.vclass;
      });
    console.log(this.vclass);
    let fromdata1 = new FormData();
    fromdata1.append("vclass", "一类疫苗");
    fromdata1.append("vname", this.vname1);
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByVnameVclass",
        fromdata1
      )
      .then(res => {
        console.log(res);

        this.vclass1 = res.data;
      });
    let fromdata2 = new FormData();
    fromdata2.append("vclass", "二类疫苗");
    fromdata2.append("vname", this.vname1);
    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByVnameVclass",
        fromdata2
      )
      .then(res => {
        console.log(res);
        this.vclass2 = res.data;
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
.box {
  width: 80%;
  height: 9em;
  /* border:1px solid black; */
  margin: 10px auto;
  box-shadow: 1px 1px 1px 1px rgb(218, 217, 217);
  position: relative;
}
.van-tree-select__nav {
  flex: 0.8;
  /* height: 400px; */
}
.img {
  position: absolute;
  width: 27%;
  height: 5em;
  top: 19%;
  left: 2%;
  /* border:1px solid black; */
}
p {
  position: absolute;
  top: 7%;
  left: 31%;
  /* border: 1px solid black */
}
.button {
  width: 42%;
  height: 1.8em;
  position: absolute;
  left: 41%;
  bottom: 8%;
}
.aaa {
  width: 100%;
  height: 50px;
  /* position: flex; */
  /* border:1px solid black; */
}
.span {
  width: 85px;
  height: 20px;
  background-color: rgb(245, 114, 114);
  position: absolute;
  top: 2%;
  right: 1%;
  font-size: 10px;
  text-align: center;
}
.span1 {
  /* border: 1px solid black; */
  position: absolute;
  top: 45%;
  left: 31%;
  font-size: 14px;
  text-align: center;
  color: darkgray;
}
</style>