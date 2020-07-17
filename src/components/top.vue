<!--  -->
<template>
<div class=''>
   <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o" >首页</van-tabbar-item>
  <van-tabbar-item icon="setting-o">分类</van-tabbar-item>
  <van-tabbar-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png">个人中心</van-tabbar-item>
</van-tabbar>
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
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
}
</script>
<style  scoped>

</style>