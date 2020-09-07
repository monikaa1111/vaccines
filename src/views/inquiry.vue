<!--  -->
<template>
<div class=''>
      <van-nav-bar
      title="健康小提示"
      left-text="返回"
      left-arrow
      
      @click-left="onClickLeft()"
    />
    <!-- <p class="title">健康状况询问表</p> -->
     <p class="font" >&nbsp;&nbsp;&nbsp;&nbsp;以下问题可帮助确定受种者是否可以预约本疫苗。请认真查阅后如果符合宝宝的自身情况之后进行预约。</p>
     <p style="margin-left:5%">1.近 1 周有发热等不舒服吗？</p>
     <p style="margin-left:5%">2.是否对药物、食物、疫苗等过敏？</p>
     <p style="margin-left:5%">3.是否曾经在接种疫苗后出现过严重反应？</p>
     <p style="margin-left:5%">4.是否有癫痫、脑或其他神经系统疾病？</p>
     <p style="margin-left:5%">5.是否患有癌症、白血病、艾滋病或其他免疫系统疾病?</p>
     <p style="margin-left:5%">6.在过去三个月内，是否使用过可的松、强的松、其他类固醇或抗肿瘤药物，或进行过放射性治疗？</p>
     <p style="margin-left:5%">7.有哮喘、肺部疾病、心脏疾病、肾脏疾病、代谢性疾病（如糖尿病）或血液系统疾病吗？</p>
     <p style="margin-left:5%">8.在过去的一年内，是否接受过输血或血液制品、或使用过免疫球蛋白？</p>
     <p style="margin-left:5%">9.在过去 1 个月内是否接种过疫苗？</p>
     <p style="margin-left:5%">10.是否怀孕或有可能 3  个月内怀孕？（仅需询问育龄妇女）</p>
     <p style="margin-left:5%;color:red">温馨提示：</p>
     <p style="margin-left:10%;color:red">①.如果您出现以上任意症状</p>
     <p style="margin-left:10%;color:red"> ②.在一个月内接种过同种疫苗，请不要进行预约操作。</p>
     <!-- <button style="margin-left:41%;margin-top:20px;margin-bottom:10px" @click="jump()">去预约</button> -->
         <div style="margin: 16px;margin-top:30px">
          <van-button round block type="info" @click="jump()">去预约</van-button>
        </div>
         <!-- <div style="margin:auto;margin-top:30px;width:60%;height:4em">
                 <van-button type="info" @click="jump()" style="width:100%; border-radius:10px">预约</van-button>
             </div> -->
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
vname:'',
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
            this.vname=this.$route.query.vname;
            console.log(this.vname);
        this.$router.push('appointment?vname='+this.vname)
    }
},
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
<style scoped>
.title {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.font{
    font-size: 15px;
    margin-left: 1%;
    line-height: 31px;
    margin-left: 5%
    
}
</style>