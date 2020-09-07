<!--  -->
<template>
<div class=''>
    <van-nav-bar
        title="信息"
        left-text="返回"
        left-arrow
        
  @click-left="onClickLeft()"
        />
        <div class="head">
        <img src="../assets/1.jpg" class="img">
        <p class="username"></p>
    </div>
    <van-cell-group>
        <div style="height:25px;"></div>
          <van-cell title="性别" :value="vacc.gender" />
   <van-cell title="出生日期" :value="vacc.birthday" />
    <van-cell title="与本人关系" :value="vacc.relation" />
     <van-cell title="家庭住址" :value="vacc.address" />
      <van-cell title="出生医院" :value="vacc.birthhospital" />
     <van-cell title="医学行为记录"  @click="jump()"/>
      <!-- <van-cell title="修改信息" @click="modify()" /> -->
        <van-cell title="二维码"  @click="ewm()"/>
         <van-cell title="删除用户信息"  @click="delete1()"/>
      <!-- <van-cell title="健康状况查询" @click="Health()" /> -->
</van-cell-group>
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
vacc:'',
uid:''
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
    
    jump(){
            this.$router.push('Medicalbehavior?numberid='+this.vacc.numberid)
    },
    modify(){
        this.$router.push('modify2')
    },
      ewm(){
        this.$router.push('ewm?numberid='+this.vacc.numberid)
    },
    delete1(){
             let fromdata=new FormData();
      fromdata.append("uid",this.uid)

    this.$axios.post("http://152.136.232.95:8089/user/deleteUser",fromdata).then(res=>{
        console.log(res)
        if (res.data==1) {
            alert("删除成功")
            this.$router.push("addfamily")
        } else {
            alert("删除失败")
        }

    })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
    this.Aemail=this.$route.query.numberid;
    console.log(this.Aemail);
    sessionStorage.setItem("jrnumberid",this.Aemail)
     let fromdata=new FormData();
      fromdata.append("numberid",this.Aemail)

    this.$axios.post("http://152.136.232.95:8089/user/getUserInfoByNum",fromdata).then(res=>{
        console.log(res)
        this.vacc= res.data[0]
        this.uid=this.vacc.uid
        // console.log(vacc.vname)

    })
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