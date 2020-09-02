<!--  -->
<template>
  <div class="boxx" id="export_content">
    <van-nav-bar title="受种者健康状况询问表 " left-text left-arrow @click-left="onClickLeft()" />
    <!-- <p class="title">受种者健康状况询问表</p> -->
    <!-- <div style="width:100%">
      <p style="margin-left:2%;">电子告知书详情：</p>
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
    <div style="width:100%;margin-left:2%;" >
      <p style="clear:both" >接种者信息：</p>
      <p style="margin-left:10%; float: left;">接种者姓名：{{vaccc.name}}</p>
      <p style="margin-left:10%; float: left;">接种部位：{{vaccc.vaccinationsite}}</p>
      <p style="margin-left:10%; float: left;">接种地点：{{vaccc.place}}</p>
      <p style="margin-left:10%; float: left;">接种医生：{{vaccc.doctor}}</p>
      <p style="margin-left:10%; float: left;">接种科室：{{vaccc.department}}</p>
      <p style="margin-left:10%; float: left;">接种医生职务：{{vaccc.job}}</p>
    </div>-->
    <div>
      <!-- <p style="clear:both;margin-left:2%;">接种者健康询问：</p> -->
      <p class="font">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下问题可帮助确定受种者今天是否可以接种本疫苗，请认真阅读。如果对任何问题的回答为“是”，并不表示受种者不应接种本疫苗，而只是表示还需要询问其他问题。如果对有些问题不清楚，请要求医护人员说明。( 请在方框内打“V"，如选"是”请在备注中注明具体情况。
        <font style="color:red">注:此表只可填一次，不可空白不填，如若填写有误，本接种点概不负责。</font>)
      </p>
      <table border="1" cellspacing="0" cellpadding="0" width="100%" align="center">
        <tr>
          <th width="56%">健康状况</th>
          <th>是或否</th>
          <th>备注</th>
        </tr>
        <tr>
          <td>{{q.question0.name}}</td>
          <td>
            是
            <input type="radio" name="yes" value="是" v-model="m.myVal" />
            否
            <input type="radio" name="yes" value="否" v-model="m.myVal" />
          </td>
          <td contenteditable="true" @input="onDivInput($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question1.name}}</td>
          <td>
            是
            <input type="radio" name="yes01" value="是" v-model="m.myVal01" />
            否
            <input type="radio" name="yes01" value="否" v-model="m.myVal01" />
          </td>
          <td contenteditable="true" @input="onDivInput1($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question2.name}}</td>
          <td>
            是
            <input type="radio" name="yes02" value="是" v-model="m.myVal02" />
            否
            <input type="radio" name="yes02" value="否" v-model="m.myVal02" />
          </td>
          <td contenteditable="true" @input="onDivInput2($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question3.name}}</td>
          <td>
            是
            <input type="radio" name="yes03" value="是" v-model="m.myVal03" />
            否
            <input type="radio" name="yes03" value="否" v-model="m.myVal03" />
          </td>
          <td contenteditable="true" @input="onDivInput3($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question4.name}}</td>
          <td>
            是
            <input type="radio" name="yes04" value="是" v-model="m.myVal04" />
            否
            <input type="radio" name="yes04" value="否" v-model="m.myVal04" />
          </td>
          <td contenteditable="true" @input="onDivInput4($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question5.name}}</td>
          <td>
            是
            <input type="radio" name="yes05" value="是" v-model="m.myVal05" />
            否
            <input type="radio" name="yes05" value="否" v-model="m.myVal05" />
          </td>
          <td contenteditable="true" @input="onDivInput5($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question6.name}}</td>
          <td>
            是
            <input type="radio" name="yes06" value="是" v-model="m.myVal06" />
            否
            <input type="radio" name="yes06" value="否" v-model="m.myVal06" />
          </td>
          <td contenteditable="true" @input="onDivInput6($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question7.name}}</td>
          <td>
            是
            <input type="radio" name="yes07" value="是" v-model="m.myVal07" />
            否
            <input type="radio" name="yes07" value="否" v-model="m.myVal07" />
          </td>
          <td contenteditable="true" @input="onDivInput7($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question8.name}}</td>
          <td>
            是
            <input type="radio" name="yes08" value="是" v-model="m.myVal08" />
            否
            <input type="radio" name="yes08" value="否" v-model="m.myVal08" />
          </td>
          <td contenteditable="true" @input="onDivInput8($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question9.name}}</td>
          <td>
            是
            <input type="radio" name="yes09" value="是" v-model="m.myVal09" />
            否
            <input type="radio" name="yes09" value="否" v-model="m.myVal09" />
          </td>
          <td contenteditable="true" @input="onDivInput9($event)" style="width:3em;"></td>
        </tr>
        <tr>
          <td>{{q.question10.name}}</td>
          <td>
            是
            <input type="radio" name="yes10" value="是" v-model="m.myVal10" />
            否
            <input type="radio" name="yes10" value="否" v-model="m.myVal10" />
          </td>
          <td contenteditable="true" @input="onDivInput10($event)" style="width:3em;"></td>
        </tr>
      </table>
      <!-- <div style="position: relative;width:100%;height:27px;clear:both;">
        <button
          @click="printOut()"
          id="outTable"
          style="margin-left:5%;color:blue; position:absolute;
      right:10%;margin-top:10px"
        >导出word文档</button>
      </div>-->

      <!-- <div style=" position: relative;width:100%;height:50px;">
        <p style="margin-left:5%">上传word文档:</p>
        <div class="image-view1" style="margin-top:10px;">
          <input type="file" ref="file" class="inp1" />
        </div>
        <button @click="jump33()" style="position:absolute;right:8%">提交文档</button>
      </div>-->

      <div style="position: relative;width:100%;height：50px;clear:both;">
        <div style="margin: 16px;margin-top:30px">
          <van-button round block type="info" @click="printOut()">确认接种</van-button>
        </div>
        <!-- <button id="outTable" class="yes11" @click="jump()" style="margin-bottom:20px;">确认接种</button> -->
      </div>
      <!-- <button style="margin-left:43%;margin-top:20px" @click="jump()">提交</button> -->
      <!-- <input type="flie" value="上传" class="button2"  @click="change()" ref="file"/>
      <button @click="printOut()" id="outTable"  style="margin-left:43%;margin-top:20px" ref="file" type="file">提交</button>-->
    </div>
    <!-- <p>医学建议：
    1.建议接种<input type="radio" name="" id="">；
    2.推迟接种<input type="radio" name="" id="">□；
    3.不宜接种<input type="radio" name="" id="">。</p>-->
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
import saveAs from "file-saver";
import "../../static/js/jquery.wordexport";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    html2Canvas
  },
  data() {
    //这里存放数据
    return {
      htmlTitle: "健康查询表",
      imgBase64: [],
      vaccc: "",
      vacccc: "",
      myVal: "",
      myVal01: "",
      myVal02: "",
      myVal03: "",
      myVal04: "",
      myVal05: "",
      myVal06: "",
      myVal07: "",
      myVal08: "",
      myVal09: "",
      myVal10: "",
      q: {
        question0: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: ""
      },
      m: {
        myVal: "",
        myVal01: "",
        myVal02: "",
        myVal03: "",
        myVal04: "",
        myVal05: "",
        myVal06: "",
        myVal07: "",
        myVal08: "",
        myVal09: "",
        myVal10: ""
      },
      i: {
        id: "",
        id1: "",
        id2: "",
        id3: "",
        id4: "",
        id5: "",
        id6: "",
        id7: "",
        id8: "",
        id9: "",
        id10: ""
      },
      letterfirst:"",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.myVal = sessionStorage.getItem("myVal");
    console.log(this.myVal);
    this.myVal01 = sessionStorage.getItem("myVal01");
    console.log(this.myVal01);
    this.myVal02 = sessionStorage.getItem("myVal02");
    console.log(this.myVal02);
    this.myVal03 = sessionStorage.getItem("myVal03");
    console.log(this.myVal03);
    this.myVal04 = sessionStorage.getItem("myVal04");
    console.log(this.myVal04);
    this.myVal05 = sessionStorage.getItem("myVal05");
    console.log(this.myVal05);
    this.myVal06 = sessionStorage.getItem("myVal06");
    console.log(this.myVal06);
    this.myVal07 = sessionStorage.getItem("myVal07");
    console.log(this.myVal07);
    this.myVal08 = sessionStorage.getItem("myVal08");
    console.log(this.myVal08);
    this.myVal09 = sessionStorage.getItem("myVal09");
    console.log(this.myVal09);
    this.myVal10 = sessionStorage.getItem("myVal10");
    console.log(this.myVal10);
    this.aid = this.$route.query.info;
    console.log(this.aid);
    let fromdata1 = new FormData();
    fromdata1.append("vname", sessionStorage.getItem("vname"));

    this.$axios
      .post(
        "http://152.136.232.95:8089/vaccines/findVaccinesByVname",
        fromdata1
      )
      .then(res => {
        console.log(res);
        this.vacccc = res.data;
      });
    // sessionStorage.setItem("vid",this.Aemail)

    this.$axios
      .post("http://152.136.232.95:8089/healthinquiry/findHealthInquiry")
      .then(res => {
        console.log(res);
        this.i.id = res.data[0].id;
        this.i.id1 = res.data[1].id;
        this.i.id2 = res.data[2].id;
        this.i.id3 = res.data[3].id;
        this.i.id4 = res.data[4].id;
        this.i.id5 = res.data[5].id;
        this.i.id6 = res.data[6].id;
        this.i.id7 = res.data[7].id;
        this.i.id8 = res.data[8].id;
        this.i.id9 = res.data[9].id;
        this.i.id10 = res.data[10].id;
        // console.log(this.id)
        this.q.question0 = res.data[0];
        this.q.question1 = res.data[1];
        this.q.question2 = res.data[2];
        this.q.question3 = res.data[3];
        this.q.question4 = res.data[4];
        this.q.question5 = res.data[5];
        this.q.question6 = res.data[6];
        this.q.question7 = res.data[7];
        this.q.question8 = res.data[8];
        this.q.question9 = res.data[9];
        this.q.question10 = res.data[10];
      });
     
            let fromdata3 = new FormData();
            fromdata3.append("aid", this.aid);

            this.$axios
              .post(
                "http://152.136.232.95:8089/appointRecord/findAppointRecordByaid",
                fromdata3
              )
              .then(res => {
                console.log(res);
                this.vaccc = res.data;
                sessionStorage.setItem("aid", this.vaccc.aid);
                console.log(this.vaccc.aid);
                if (
                  res.data.doctorconfirm == 1 
                ) {
                  this.$router.push("Health");
                } else {
                }
              });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    downloadHT() {
      $(".boxx").wordExport("生成文档");
    },
    getImgBase() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var file1 = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBase64.push(e.target.result);
      };
      reader.readAsDataURL(file);
      reader.readAsDataURL(file1);
    },
    //删除图片
    delImg(index) {
      this.imgBase64.splice(index, 1);
    },
    onDivInput: function(e) {
      this.myHtmlCode = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode);
    },
    onDivInput1: function(e) {
      this.myHtmlCode1 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode1);
    },
    onDivInput2: function(e) {
      this.myHtmlCode2 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode2);
    },
    onDivInput3: function(e) {
      this.myHtmlCode3 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode3);
    },
    onDivInput4: function(e) {
      this.myHtmlCode4 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode4);
    },
    onDivInput5: function(e) {
      this.myHtmlCode5 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode5);
    },
    onDivInput6: function(e) {
      this.myHtmlCode6 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode6);
    },
    onDivInput7: function(e) {
      this.myHtmlCode7 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode7);
    },
    onDivInput8: function(e) {
      this.myHtmlCode8 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode8);
    },
    onDivInput9: function(e) {
      this.myHtmlCode9 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode9);
    },
    onDivInput10: function(e) {
      this.myHtmlCode10 = e.target.innerHTML;
      console.log("Text: %o", this.myHtmlCode10);
    },
    jump33() {
      var that = this;
      let fromdata = new FormData();
      fromdata.append("uploadFile", that.$refs.file.files[0]);
      console.log(that.$refs.file.files);
      this.$axios
        .post("http://152.136.232.95:8089/file/upload", fromdata)
        .then(response => {
          console.log(response);
          console.log(response.data);
          sessionStorage.setItem("letterfirst", response.data);
          // window.location.href="appointment"
        });
    },

    convertBase64UrlToBlob(urlData) {
      var bytes = window.atob(urlData.split(",")[1]); //去掉url的头，并转换为byte

      //处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return new Blob([ab], { type: "image/png" });
    },
    printOut(name) {
      let obj = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal,
        id: this.i.id,
        name: this.q.question0.name,
        remarks: this.myHtmlCode
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj)
        .then(res => {
          console.log(res);
        });
      let obj1 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal01,
        id: this.i.id1,
        name: this.q.question1.name,
        remarks: this.myHtmlCode1
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj1)
        .then(res => {
          console.log(res);
        });
      let obj2 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal02,
        id: this.i.id2,
        name: this.q.question2.name,
        remarks: this.myHtmlCode2
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj2)
        .then(res => {
          console.log(res);
        });
      let obj3 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal03,
        id: this.i.id3,
        name: this.q.question3.name,
        remarks: this.myHtmlCode3
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj3)
        .then(res => {
          console.log(res);
        });
      let obj4 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal04,
        id: this.i.id4,
        name: this.q.question4.name,
        remarks: this.myHtmlCode4
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj4)
        .then(res => {
          console.log(res);
        });
      let obj5 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal05,
        id: this.i.id5,
        name: this.q.question5.name,
        remarks: this.myHtmlCode5
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj5)
        .then(res => {
          console.log(res);
        });
      let obj6 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal06,
        id: this.i.id6,
        name: this.q.question6.name,
        remarks: this.myHtmlCode6
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj6)
        .then(res => {
          console.log(res);
        });
      let obj7 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal07,
        id: this.i.id7,
        name: this.q.question7.name,
        remarks: this.myHtmlCode7
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj7)
        .then(res => {
          console.log(res);
        });
      let obj8 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal08,
        id: this.i.id8,
        name: this.q.question8.name,
        remarks: this.myHtmlCode8
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj8)
        .then(res => {
          console.log(res);
        });
      let obj9 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal09,
        id: this.i.id9,
        name: this.q.question9.name,
        remarks: this.myHtmlCode9
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj9)
        .then(res => {
          console.log(res);
        });
      let obj10 = {
        aid: sessionStorage.getItem("aid"),
        answer: this.m.myVal10,
        id: this.i.id10,
        name: this.q.question10.name,
        remarks: this.myHtmlCode10
      };
      this.$axios
        .post("http://152.136.232.95:8089/health/addHealthRecord", obj10)
        .then(res => {
          console.log(res);
        });
      let shareContent = document.body, //需要截图的包裹的（原生的）DOM 对象
        width = shareContent.clientWidth, //获取dom 宽度
        height = shareContent.clientHeight, //获取dom 高度
        canvas = document.createElement("canvas"), //创建一个canvas节点
        scale = 1; //定义任意放大倍数 支持小数
      canvas.width = width * scale; //定义canvas 宽度 * 缩放
      canvas.height = height * scale; //定义canvas高度 *缩放
      canvas.style.width = shareContent.clientWidth * scale + "px";
      canvas.style.height = shareContent.clientHeight * scale + "px";
      canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
      let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        logging: false, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true // 【重要】开启跨域配置
      };

      html2Canvas(shareContent, opts).then(() => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //页面偏移
        var position = 0;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;
        var pageData = canvas.toDataURL("image/jpeg", 1.0);
        var PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        //  PDF.save(name + ".pdf"); // 这里是导出的文件名
        var formData = new FormData();
        //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数

        //convertBase64UrlToBlob函数是将base64编码转换为Blob
        formData.append("uploadFile", this.convertBase64UrlToBlob(pageData)); //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
        this.$axios
          .post("http://152.136.232.95:8089/file/upload", formData)
          .then(res => {
            console.log(res);
            this.letterfirst=res.data
            console.log(this.letterfirst)
          }).then(()=>{
                       console.log(this.letterfirst)
            let fromdata2 = new FormData();
        fromdata2.append("aid", sessionStorage.getItem("aid"));
        fromdata2.append("letterfirst",this.letterfirst);
     
      this.$axios
        .post(
          "http://152.136.232.95:8089/appointRecord/updateLetterFirst",
          fromdata2
        )
        .then(res => {
          console.log(res);
          if (res.data == 1) {
            let fromdata3 = new FormData();
            fromdata3.append("aid", this.aid);

            this.$axios
              .post(
                "http://152.136.232.95:8089/appointRecord/findAppointRecordByaid",
                fromdata3
              )
              .then(res => {
                console.log(res);
                this.vaccc = res.data;
                sessionStorage.setItem("aid", this.vaccc.aid);
                console.log(this.vaccc.aid);
                if (
                  res.data.doctorconfirm == 1 
                ) {
                   alert("医生确认成功，请去上传您的电子签名...");
                  this.$router.push("Health");
                } else {
                   alert("上传成功，请等待医生的确认...");
                }
              });
          } else {
            alert("请先去上传文档");
          }
        });
          })

      });
    }
  }
};
</script>

<style  scoped>
.title {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.font {
  font-size: 16px;
  margin-left: 1%;
  line-height: 31px;
}
.yes1 {
  position: absolute;
  top: 11%;
  left: 11%;
}
.yes11 {
  /* position: absolute;
  top: 70%;
  left: 38.5% */
  margin-left: 39%;
  margin-top: 20px;
}
.button2 {
  width: 50%;
  /* border:1px solid black;  */
  position: absolute;
  top: 10%;
  left: 44%;
}
.box {
  width: 100%;
  height: 60px;
  /* border:1px solid black; */
  margin-top: 10px;
  position: relative;
}
.image-view {
  width: 100%;
  height: 0px;
  margin: auto;
  /* border:1px solid black */
}
.image-view .item {
  position: relative;
  float: left;
  height: 60px;
  width: 100px;
  margin-left: 80%;
  margin-bottom: 10px;
  /* border:1px solid black */
}
.image-view .item .cancel-btn {
  position: absolute;
  right: 48px;
  top: 8;
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  background: red;
  border-radius: 10px;
  cursor: pointer;
  /* border:1px solid black */
}
.image-view .item img {
  width: 100%;
  height: 100%;
  margin-left: 44%;
  /* border:1px solid black */
}
.image-view .view {
  clear: both;
  float: left;
}
.inp {
  width: 60%;
  /* border:1px solid black;  */
  position: absolute;
  top: 58%;
  right: 2%;
}
.inp1 {
  width: 60%;
  /* border:1px solid black;  */
  margin-top: 10px;
  margin-left: 20%;
  position: absolute;
  top: -11%;
  right: 2%;
}
</style>