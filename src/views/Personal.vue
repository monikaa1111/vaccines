<!--  -->
<template>
<div class=''>
    <top></top>
    <div class="head">
        <img src="../assets/1.jpg" class="img">
        <p class="username">{{message.name}}</p>
    </div>
    <van-cell-group>
  <van-cell title="性别" :value="message.gender" />
   <van-cell title="出生日期" :value="message.birthday" />
    <van-cell title="与本人关系" :value="message.relation" />
     <van-cell title="家庭住址" :value="message.address" />
      <van-cell title="出生医院" :value="message.birthhospital" />
     <van-cell title="医学行为记录" @click="Medicalbehavior()" />
      <van-cell title="管理家庭成员"  @click="addfamily()"/>
      <van-cell title="修改个人信息" @click="modify()" />
       <van-cell title="我的二维码"  @click="ewm()"/>
      <!-- <van-cell title="健康状况查询" @click="Health()" /> -->
</van-cell-group>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import top from '@/components/top'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    top,
},
data() {
//这里存放数据
return {
    message:'',
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    modify(){
      this.$router.push('/modify1')
    },
    addfamily(){
      this.$router.push('/addfamily')
    },
        Health(){
      this.$router.push('/Health')
    },
    Medicalbehavior(){
        this.$router.push('Medicalbehavior?numberid='+this.message.numberid)
    },
    ewm(){
        this.$router.push('ewm?numberid='+this.message.numberid)
    }
},
created() {
    //              this.aaa=this.$route.query.uid;
    //    console.log(this.aaa);
    var tel=sessionStorage.getItem("telephone")
       let fromdata=new FormData();
      fromdata.append("telephone",tel)
    this.$axios.post("http://152.136.232.95:8089/user/getUserInfo",fromdata).then(res =>{
        console.log(res)
        sessionStorage.setItem("uid",res.data[0].uid)
        this.message=res.data[0]
        console.log(this.message)
 

    })
},

}
</script>
<style  scoped>
.head{
    height: 260px;
    width: 100%;
    background-color: rgb(135, 175, 248);
    position: relative;
}
.img{
    width: 20%;
    height: 5em;
    border-radius:50%;
    position: absolute;
    top: 28%;
    left: 40%
}
.username{
    position: absolute;
    top: 58%;
    left: 45%
}
</style>