<!--  -->
<template>
<div class=''>
       <van-nav-bar
        title="疫苗详情"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
 <div class="box">
    <video src="../video/111.mp4"  controls="controls" style="width:100%;height:100%"></video>
 </div>
 <div class="vac">
     <p style="margin-left:10px">疫苗名称：{{vacc.vname}}</p>
     <p style="margin-left:10px">疫苗种类：{{vacc.vclass}}</p>
     <p style="margin-left:10px">剂次：{{vacc.dosetimes}}</p>
     <p style="margin-left:10px">剂型：{{vacc.doseform}}</p>
     <p style="margin-left:10px">规格：{{vacc.specifications}}</p>
     <p style="margin-left:10px">厂家：{{vacc.manufactor}}</p>
     <p style="margin-left:10px">价格：{{vacc.price}}</p>
    
 </div>
      <button style="margin-left:10px" @click="jump()">预约</button>
     <button style="margin-left:10px" @click="jump2()">电子告知书</button>
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
    Aemail:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    jump(){
        this.$router.push('/appointment?vname='+this.vacc.vname)
    },
    jump2(){
        window.location.href='notification'
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
    this.Aemail=this.$route.query.info;
    console.log(this.Aemail);
     let fromdata=new FormData();
      fromdata.append("vid",this.Aemail)

    this.$axios.post("http://152.136.232.95:8089/vaccines/findVaccinesByVid",fromdata).then(res=>{
        console.log(res)
        this.vacc= res.data
        // console.log(vacc.vname)

    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style  scoped>
.box{
    width: 100%;
    height:20em;
    /* border:1px solid black; */
}
.vac{
    position: relative;
}
</style>