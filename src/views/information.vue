<!--  -->
<template>
<div class=''  ref="imageDom">
        <van-nav-bar
      title="疫苗预约"
      left-text="返回"
      left-arrow
      
      @click-left="onClickLeft()"
    />
    <div class="box1">
        <p style="margin-left:5%">疫苗名称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.vname}}</p>
    </div>
    <div class="box1">
        <p style="margin-left:5%">预约姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.name}}</p>
    </div>
        <div class="box1">
        <p style="margin-left:5%">预约身份证号：&nbsp;&nbsp;&nbsp;{{vacc.numberid}}</p>
    </div>
        <div class="box1">
        <p style="margin-left:5%">家长电话：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.telephone}}</p>
    </div>
        <!-- <div class="box1">
        <p style="margin-left:5%">接种部位：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.vaccinationsite}}</p>
    </div> -->
        <div class="box1">
        <p style="margin-left:5%">预约时间：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.time}}</p>
    </div>
        <div class="box1">
        <p style="margin-left:5%">预约地点：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{vacc.place}}</p>
    </div>
        
        <div class="box1">
        <p style="margin-left:5%">预约医生科室：&nbsp;&nbsp;&nbsp;{{vacc.department}}</p>
    </div>
        <!-- <div class="box1">
        <p style="margin-left:5%">预约医生职务：&nbsp;&nbsp;&nbsp;{{vacc.job}}</p>
    </div> -->
         <button @click="jump1()" class="yes1">去接种</button>


      <input type="button" value="修改信息" class="button2"  @click="change()" />
      
<!-- <button @click="clickGeneratePicture()" id="outTable">下载</button> -->


   <!-- <el-button  size="mini" class="filter-item" type="primary" icon="el-icon-download" @click="handleExport()">导出</el-button> -->
          <!-- <div class="tian" v-show="show">
            <input type="button" value="确认修改" class="sure"/>
        </div> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import html2canvas from 'html2canvas';   
import JsPDF from 'jspdf'
export default {
    
//import引入的组件需要注入到对象中才能使用
components: {
    html2canvas,
},
data() {
//这里存放数据
return {
    aid:'',
    vacc:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},

methods: {
       onClickLeft() {
      this.$router.go(-1);
    },
     jump1(){
          this.$router.push('inoculation?info='+this.vacc.aid)
    },
     clickGeneratePicture() {
      html2canvas(this.$refs.imageDom).then(canvas => {
        // 转成图片，生成图片地址
        this.imgUrl = canvas.toDataURL("image/png");
        // 创建隐藏的可下载链接
      var eleLink = document.createElement("a");
      eleLink.href = this.imgUrl; // 转换后的图片地址
      eleLink.download = "pictureName";
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
      });
      
    },
change(){
    this.$router.push('modify?info='+this.vacc.aid)
}
},
created() {
    
    this.aid=this.$route.query.info;
    console.log(this.aid);
    // sessionStorage.setItem("vid",this.Aemail)
     let fromdata=new FormData();
      fromdata.append("aid",this.aid)

    this.$axios.post("http://152.136.232.95:8089/appointRecord/findAppointRecordByaid",fromdata).then(res=>{
        console.log(res)
        this.vacc= res.data
        sessionStorage.setItem("aid",this.vacc.aid)
        console.log(this.vacc.aid)

    })
},
    


}
</script>
<style scoped>
.box1{
    width: 100%;
    height: 3em;
    border:1px solid rgb(230, 230, 230);
    border-right:none;
    border-left:none;  
}
.button2 {
  margin-left:10%;
  margin-top: 50px 
}
.tian {
  width: 90%;
  height: 8.5em;
  border: 1px solid black;
  /* margin: auto; */
  background-color: rgb(187, 255, 255);
  z-index: 1;
  position: absolute;
  left: 5%;
}
.sure{
    position: absolute;
    bottom: 2%;
    right: 5%;
}
.yes1{
  margin-left:18%;
  margin-top: 50px 

}
</style>