<!--  -->
<script src="<%= BASE_URL %>js/html-docx.js"></script>
<template>
  <div class="box" ref="imageDom">
    <p class="title" >接种者详情表</p>
    <div style="width:100%">
      <p style="margin-left:2%;">电子告知书：</p>
       <p style="margin-left:5%;">
       <div>
    <video :src="vacccc.video"  controls="controls" style="width:100%;height:100%"></video>
 </div>
       </p>
      <p style="margin-left:5%;">【疾病名称】：
        <p style="margin-left:30%;">{{vacccc.vname}}</p>
        </p>
        <p style="margin-left:5%;">【疫苗类别】：
        <p style="margin-left:30%;">{{vacccc.vclass}}</p>
        </p>
         <p style="margin-left:5%;">【疫苗作用】：
        <p style="margin-left:30%;">{{vacccc.effect}}</p>
        </p>
      <p style="margin-left:5%;">【接种禁忌】：
        <p style="margin-left:30%;">{{vacccc.taboo}}</p>
        </p>

        <p style="margin-left:5%;">【疫苗规格】：
        <p style="margin-left:30%;">{{vacccc.specifications}}</p>
        </p>
    </div>
    <div style="width:98%;margin-left:2%;" >
      <p style="clear:both" >接种者信息：</p>
      <p style="margin-left:10%; float: left;">接种者姓名：{{vaccc.name}}</p>
      <p style="margin-left:10%; float: left;">接种部位：{{vaccc.vaccinationsite}}</p>
      <p style="margin-left:10%; float: left;">接种地点：{{vaccc.place}}</p>
      <p style="margin-left:10%; float: left;">接种医生：{{vaccc.doctor}}</p>
      <p style="margin-left:10%; float: left;">接种科室：{{vaccc.department}}</p>
      <p style="margin-left:10%; float: left;">接种医生职务：{{vaccc.job}}</p>
    </div>
    <div>
      <p style="clear:both;margin-left:2%;">接种者健康询问：</p>
    <div style="margin-left:5%">
  <div  v-for="(item,index) in aaa " :key="index">
    <p>{{item.name}}</p>
    <p style="width:94%;height:2em;border-bottom:1px solid black">{{item.answer}},{{item.remarks}}</p>
     <p contentEditable="true"   @input="onDivInput($event)" style="width:3.5em;"></p>
  </div>
</div>
    <div style=" position: relative;width:100%;height：50px; ">
         <a href="ele"><p style="margin-left:5%;color:blue">去电子签名</p></a> 
      <p style="margin-left:5%">用户签名:</p>
    
          
 <div class="image-view" style="margin-top:10px;">
            <input type="file" @change="getImgBase()"   ref="file" class="inp">

        <div class="view">
            <div class="item" v-for="(item, index) in imgBase64">
                <span class="cancel-btn" @click="delImg(index)">x</span>
                <img :src="item">
            </div>
        </div>
    </div> 
    </div>
    
    <div style="width:100%;height：50px; clear:both ">
      <p style="margin-left:5%">医生签名:(请保存医生的签名放进已下载的文档，上传到服务器)</p>
    <canvas id="canvasOne" width="0" height="0"></canvas>
      <img :src='doctorautograph' class="docu" crossOrigin="Anonymous" @change="getImgBase1()" />
    </div>

      <div style="position: relative;width:100%;height:27px;clear:both;">
         <button @click="downloadHT()" id="outTable"  style="margin-left:5%;color:blue; position:absolute;
      right:10%">导出word文档</button>
    </div>

     <div style=" position: relative;width:100%;height：50px;">
      <p style="margin-left:5%">上传word文档:</p>
      <div class="image-view1" style="margin-top:10px;">
            <input type="file"   ref="file1" class="inp1">
    </div> 
    </div>
        <div style="position: relative;width:100%;height：50px;clear:both;">
    <button id="outTable" class="yes11"    @click="change()" >提交</button>
    </div>
<!-- <button style="margin-left:43%;margin-top:20px" @click="jump()">提交</button> -->
      <!-- <div class="box">
         <button @click="printOut()" id="outTable" class="yes1">保存文档</button>
       
           <button id="outTable" class="yes11"    @click="change()" >确认接种</button> -->
          <!-- <input type="flie" value="上传" class="button2"  @click="change()" ref="file"/> -->
<!-- <button @click="printOut()" id="outTable"  style="margin-left:43%;margin-top:20px" ref="file" type="file">提交</button> -->
      </div>
<!-- <p>医学建议：
    1.建议接种<input type="radio" name="" id="">；
    2.推迟接种<input type="radio" name="" id="">□；
    3.不宜接种<input type="radio" name="" id="">。</p> -->
  </div>
</template>
<script>
    /*
    * 将canvas图片转换成图片，上传到服务器
    */
    var canvas = document.getElementById('canvasOne');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //添加外网图片
    var img = new Image();
    //设置图片跨域访问
    //img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function () {
        //画图
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var data = canvas.toDataURL('image/jpeg');
        alert(data);
    }
    //使用外网图片
    img.src = 'http://www.gongjuji.net/favicon.ico';
</script>
<script type="text/javascript" src="FileSaver.js"></script>
<script type="text/javascript" src="jquery.wordexport.js"></script>
<script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.js"></script>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import html2Canvas from 'html2canvas';   
import JsPDF from 'jspdf';
import saveAs from "file-saver";
import "../../static/js/jquery.wordexport"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    html2Canvas,
  },
  data() {
    //这里存放数据
    return {
      imgBase64:[] ,
       imgBase641:[] ,
       doctorautograph:"",
      vaccc:'',
      vacccc:'',
      aaa:'',
     i:{
      id:'',
      id1:'',
      id2:'',
      id3:'',
      id4:'',
      id5:'',
      id6:'',
      id7:'',
      id8:'',
      id9:'',
      id10:'',
     }
 
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合

  methods: {
    downloadHT(){
      $(".box").wordExport("生成文档")
    },
       getImgBase(){
                var _this = this;
                var event = event || window.event;
               var file = event.target.files[0]; 
                var reader = new FileReader(); 
                //转base64
                reader.onload = function(e) {
                    _this.imgBase64.push(e.target.result);
                }
                reader.readAsDataURL(file);
            },
            //删除图片
            delImg(index){
                this.imgBase64.splice(index,1);
            },
             getImgBase1(){
                var _this = this;
                var event = event || window.event;
               var file1 = event.target.files[0];
                var reader = new FileReader(); 
                //转base64
                reader.onload = function(e) {
                    _this.imgBase64.push(e.target.result);
                }
                 reader.readAsDataURL(file1);
            },
      onDivInput: function(e) {
        this.myHtmlCode = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput1: function(e) {
        this.myHtmlCode1 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput2: function(e) {
        this.myHtmlCode2 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput3: function(e) {
        this.myHtmlCode3 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput4: function(e) {
        this.myHtmlCode4 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput5: function(e) {
        this.myHtmlCode5 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput6: function(e) {
        this.myHtmlCode6 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput7: function(e) {
        this.myHtmlCode7 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput8: function(e) {
        this.myHtmlCode8 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput9: function(e) {
        this.myHtmlCode9 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
          onDivInput10: function(e) {
        this.myHtmlCode10 = e.target.innerHTML;
        console.log('Text: %o', this.myHtmlCode );
    },
change(){
       var that=this
      let fromdata=new FormData();
      fromdata.append( "uploadFile",that.$refs.file.files[0])
        console.log(that.$refs.file.files)
      this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata).then(response=>{
        console.log(response)
         console.log(response.data)
         sessionStorage.setItem("sign",response.data)
        // window.location.href="appointment"

        })
          let fromdata1=new FormData();
           fromdata1.append( "aid",sessionStorage.getItem("aid"))
      fromdata1.append( "uploadFile",that.$refs.file1.files[0])
        console.log(that.$refs.file.files)
      this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata1).then(res=>{
        console.log(res)
        sessionStorage.setItem("letterthird",res.data)
        })
         let fromdata2=new FormData();
         fromdata2.append( "aid",sessionStorage.getItem("aid"))
      fromdata2.append( "letterthird",sessionStorage.getItem("letterthird"))
      this.$axios.post("http://152.136.232.95:8089/appointRecord/updateLetterThird",fromdata2).then(res=>{
        console.log(res)
        if (res.data==1) {
          alert("提交成功")
        } else {
          alert("提交失败")
        }
      })
},
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     this.myHtmlCode=sessionStorage.getItem("myHtmlCode")
    console.log(this.myHtmlCode)
    if ( this.myHtmlCode==''|| this.myHtmlCode==undefined) {
      this.myHtmlCod==''
    } else {
       this.myHtmlCod==this.myHtmlCode
    }
     let fromdata1=new FormData();
      fromdata1.append("vname",sessionStorage.getItem("vname"))

    this.$axios.post("http://152.136.232.95:8089/vaccines/findVaccinesByVname",fromdata1).then(res=>{
        console.log(res)
        this.vacccc= res.data

    })
    // sessionStorage.setItem("vid",this.Aemail)
     let fromdata=new FormData();
      fromdata.append("aid",sessionStorage.getItem("aid"))

    this.$axios.post("http://152.136.232.95:8089/appointRecord/findAppointRecordByaid",fromdata).then(res=>{
        console.log(res)
        this.vaccc= res.data
        this.doctorautograph=res.data.doctorautograph
          console.log(this.doctorautograph)
        sessionStorage.setItem("aid",this.vaccc.aid)
        console.log(this.vaccc.aid)

    })
    //
         let fromdataa=new FormData();
      fromdataa.append("aid",sessionStorage.getItem("aid"))

    this.$axios.post("http://152.136.232.95:8089/health/findAllHealthByAid",fromdataa).then(res=>{
        console.log(res)
        this.aaa=res.data
 })
    this.$axios.post('http://152.136.232.95:8089/healthinquiry/findHealthInquiry').then(res=>{
      console.log(res)
      this.i.id=res.data[0].id
      this.i.id1=res.data[1].id
      this.i.id2=res.data[2].id
      this.i.id3=res.data[3].id
      this.i.id4=res.data[4].id
      this.i.id5=res.data[5].id
      this.i.id6=res.data[6].id
      this.i.id7=res.data[7].id
      this.i.id8=res.data[8].id
      this.i.id9=res.data[9].id
      this.i.id10=res.data[10].id
      // console.log(this.id)
    })
  },
};
</script>
<style  scoped>
.title {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.font{
    font-size: 16px;
    margin-left: 1%;
    line-height: 31px
}
.yes1{
  position: absolute;
  top: 11%;
  left: 11%

}
.button2 {
  width: 50%;
  /* border:1px solid black;  */
  position: absolute;
  top: 10%;
  left: 44%
}
.box{
  width: 100%;
  height: 60px;
  /* border:1px solid black; */
  margin-top: 10px ;
  position: relative;
 
}
.image-view{
        width:100%;
        height:0px;
        margin: auto;
        /* border:1px solid black */
    }
    .image-view1{
       width:100%;
        height:0px;
        margin: auto;
    }
    .image-view .item {
        position:relative;
        float:left;
        height:60px;
        width:100px;
        margin-left: 80%;
        margin-bottom: 10px
        /* border:1px solid black */
    }
    .image-view .item .cancel-btn{
        position:absolute;
        right:48px;
        top:8;
        display:block;
        width:20px;
        height:20px;
        color:#fff;
        line-height:20px;
        text-align:center;
        background:red;
        border-radius:10px;
        cursor:pointer;
        /* border:1px solid black */
    }
    .image-view .item img{
        width:100%;
        height:100%;
         margin-left: 44%;
        /* border:1px solid black */
    }
    .image-view .view{
        clear:both;
        float: left;
    
    }
    .inp{
      width: 60%;
      /* border:1px solid black;  */
      position:absolute;
      top:58%;
      right:2%
    }
        .inp1{
      width: 60%;
      /* border:1px solid black;  */
      margin-top:10px;
      margin-left:20%;
      position:absolute;
      top:0%;
      right:2%
    }
    .yes11{
  /* position: absolute;
  top: 70%;
  left: 38.5% */
  margin-left: 39%;
  margin-top: 20px;
  margin-bottom: 20px

}
.docu{
width: 30%;
height: 5em;
margin-left: 33%
}
</style>