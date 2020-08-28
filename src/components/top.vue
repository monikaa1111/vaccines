<!--  -->
<template>
<div class=''>
  
  <router-view />

<van-tabbar route active-color="#1989fa">
 <van-tabbar-item icon="wap-home-o" to="home">疫苗知识</van-tabbar-item>
  <van-tabbar-item icon="apps-o" to="treeselect">疫苗分类</van-tabbar-item>
  <van-tabbar-item icon="phone-o" to="yyrecord">疫苗预约</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" @click="jump2()">个人中心</van-tabbar-item>
</van-tabbar>
<!-- <van-tabbar v-model="active" route>
  <van-tabbar-item icon="wap-home-o" to="home">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o" @click="jump3()">分类</van-tabbar-item>
  <van-tabbar-item icon="phone-o" @click="jump1()">疫苗预约</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" @click="jump2()">个人中心</van-tabbar-item>
</van-tabbar> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
    return {
      active:'',
    };
},
  methods:{
    jump(){
      // window.location.href="home"
      this.$router.push('home')
    },
    jump1(){
      // window.location.href="yyrecord"
      this.$router.push('yyrecord')
    },
    jump3(){
      // window.location.href="treeselect"
      this.$router.push('treeselect')
    },
    jump2(){
      var tel=sessionStorage.getItem("telephone")
     if (tel!='') {
      //  window.location.href="Personal"
       this.$router.push('Personal')
      
     } else {
        //  window.location.href="login"
         this.$router.push('login')
     }
      
    }
  }
}
</script>
<style  scoped>

</style>