<!--  -->
<template>
<div class=''>
    <van-nav-bar
        title="疫苗详细类别"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft()"
    />
    <div>
        <p style="text-align:center">免费的一类疫苗</p>
        <div  v-for="(item,index) in vclass1 " :key="index">
        <van-cell center :title="item.vname" :value="item.manufactor" label="描述信息"  @click="jump(index)"/>
        </div>
    </div>
    <div>
        <p style="text-align:center">以下为收费的二类疫苗</p>
        <div  v-for="(item,index) in vclass2 " :key="index">
        <van-cell center :title="item.vname" :value="item.manufactor" label="描述信息" @click="jump1(index)"/>
        </div>
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
    vname1:'',
    vclass:'',
    vclass1:[],
    vclass2:[]
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
    jump(index){
         this.$router.push("/details?info=" + this.vclass1[index].vid);
    },
     jump1(index){
         this.$router.push("/details?info=" + this.vclass2[index].vid);
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
      this.vname1=this.$route.query.vname;
    console.log(this.vname1);
     let fromdata=new FormData();
      fromdata.append("vname",this.vname1)
    this.$axios.post("http://152.136.232.95:8089/vaccines/findVaccinesByVname",fromdata).then(res=>{
        console.log(res)
        this.vclass=res.vclass
    })
    console.log(this.vclass)
    let fromdata1=new FormData();
    fromdata1.append('vclass',"一类疫苗")
     fromdata1.append('vname',this.vname1)
    this.$axios.post("http://152.136.232.95:8089/vaccines/findVaccinesByVnameVclass",fromdata1).then(res=>{
        console.log(res)
        this.vclass1=res.data
    })
     let fromdata2=new FormData();
    fromdata2.append('vclass',"二类疫苗")
    fromdata2.append('vname',this.vname1)
    this.$axios.post("http://152.136.232.95:8089/vaccines/findVaccinesByVnameVclass",fromdata2).then(res=>{
        console.log(res)
        this.vclass2=res.data
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

</style>