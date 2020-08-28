<!--  -->
<template>
<div class=''>
   <top></top>
   <van-nav-bar
  title="疫苗知识"
/>
   <div>
   <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
    <van-swipe-item v-for="item in banner.length" :key="item" style="height:200px">
            <img :src="banner[item-1]"  style="width:100%;height:100%"/>
    </van-swipe-item>
</van-swipe>
</div>
<!-- <van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item>内容 1</van-swipe-item>
    <van-swipe-item>内容 2</van-swipe-item>
    <van-swipe-item>内容 3</van-swipe-item>
  </van-swipe>
</van-notice-bar> -->
<div style="margin-top:0.5em">
  <van-cell-group>
  <van-cell title="专业医学科普知识" value="-" @click="jump2()" /></van-cell-group>
  <div style="width:100%;">
  <div class="box" v-for="(item,index) in message " :key="index" @click="jump(index)"> 
    <div class="image">
      <img :src="item.video" class="image" />
    </div>
    <div style="margin-left:2px;margin-top:10px">{{item.vname}}</div>
    <p style="font-size:14px;margin-top:3px">{{item.vclass}}</p>
  </div>
   <div class="box1" v-for="(item,index) in 2 " :key="index" >
  </div>
</div>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import top from '@/components/top'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  top
},
data() {
    return {
      message:[],
      banner:[
           require("../assets/t1.png"),
           require("../assets/t1.png"),
           require("../assets/t1.png")
       ],
    };
  },
   methods: {
   
    jump(index){
      this.$router.push('/details?info='+this.message[index].vid)
    }
  },
  created(){
    this.$axios.post('http://152.136.232.95:8089/vaccines/findAllVaccines').then(res=>{
      console.log(res)
      this.message=res.data
      console.log(this.message)
    })
  }
}
</script>
<style  scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
    .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .box{
    width:46%;
    height:12em;
    /* border:1px solid black;  */
     float: left;
     margin-left: 2.3%;
     	box-shadow: 1px 1px 2px #bebebe;
       margin-top: 10px
  }
   .box1{
    width:46%;
    height:12em;
    /* border:1px solid black;  */
     float: left;
     margin-left: 2.3%;
     	/* box-shadow: 1px 1px 2px #bebebe; */
       margin-top: 10px
  }
  .image{
    width: 100%;
    height:6em;
   
  }
</style>