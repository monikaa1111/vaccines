<!--  -->
<template>
<div class=''>
     <van-nav-bar
        title="医学行为记录"
        left-text="返回"
        left-arrow
        
  @click-left="onClickLeft()"
        />
   <div class="box">
      <p style="position: absolute;left:5%">预约记录</p>
      <p style="position: absolute;right:5%;font-size:12px;line-height:2.5em;color: darkgrey" @click="see()">查看详情>></p>
  </div>
 <div class="box">
      <p style="position: absolute;left:5%">接种记录</p>
      <p style="position: absolute;right:5%;font-size:12px;line-height:2.5em;color: darkgrey" @click="se()">查看详情>></p>
  </div>
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
    see(){
          this.$router.push('yyrecord1?numberid='+this.numberid)
    },
    se(){
        this.$router.push('Vaccinationrecords?numberid='+this.numberid)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.numberid=this.$route.query.numberid;
    console.log(this.numberid);
    sessionStorage.setItem("jrnumberid",this.numberid)
     let fromdata=new FormData();
      fromdata.append("numberid",this.numberid)

    this.$axios.post("http://152.136.232.95:8089/user/getUserInfoByNum",fromdata).then(res=>{
        console.log(res)
        this.vacc= res.data[0]
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
.box{
    height:3.5em; 
    width: 99%;
    border-top: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    position: relative;
}
.van-button{
    height: 4em
}
</style>