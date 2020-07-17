<!--  -->
<template>
<div class=''>
    <van-nav-bar
  title="登录"
  right-text=""
  @click-right="onClickRight"
  
/>
<div class="box">
<van-form>
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
     style="margin-top:1em"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
    style="margin-top:1em"
  />
  <div style="margin: 16px;margin-top:1em">
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
  </div>
  <div class="font" @click="jump()">没有账号？立即注册</div>
</van-form>
</div>
</div>
</template>

<script>

export default {
components: {},
data() {
    
//这里存放数据
return {
        username: '',
        password: '',
};

},
 methods: {
     onClickLeft() {
    },
    jump() {
      this.$router.push('/register')
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.box{
    width: 100%;
    height:10em;
    /* border:1px solid black; */
    margin-top: 1em;
    
}
.font{
  text-align: center;
  font-size: 12px;
  color: rgb(136, 136, 136)
}

</style>