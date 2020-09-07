<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="完善个人信息"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft()"
    />
    <div>
      <van-form @submit="onSubmit">
        <!-- <van-field
          v-model="ruleForm.name"
          name="用户名"
          label="用户名："
          placeholder="请输入您的用户名"
          :rules="[{ required: true, message: '请填写您的用户名' }]"
          style="margin-top:1em"
        /> -->
         <div class="van-cell">
          <div  style="width:30%">
            <span  class="van-field__label">姓名：</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" :value="vacc.name">
            </div>
          </div>
        </div>
        <!-- <div class="van-cell">
          <div  style="width:30%">
            <span  class="van-field__label">手机号：</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" :value="vacc.telephone">
            </div>
          </div>
        </div> -->
        <div class="van-cell">
          <div  style="width:30%">
            <span  class="van-field__label">身份证号：</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" :value="vacc.numberid">
            </div>
          </div>
        </div>
        <!-- <van-field
          v-model="ruleForm.username"
          name="姓名"
          label="姓名："
          placeholder="请输入您的姓名"
          :rules="[{ required: true, message: '请填写真实姓名' }]"
          style="margin-top:1em"
        /> -->
        <van-field
          v-model="ruleForm.gender"
          name="性别"
          label="性别："
          placeholder="请输入您的性别"
          :rules="[{ required: true, message: '此选项不能为空' }]"
          style="margin-top:1em"
        />
        <van-field
          v-model="value1"
          name="出生日期"
          label="出生日期："
          placeholder="请输入宝宝的出生日期，格式为xxxx-xx-xx"
          :rules="[{ required: true, message: '请填写您的出生日期' }]"
          style="margin-top:1em"
          type="date"
        />
      <!-- <div class="block" style="margin-left:4%;margin-top:11px">
          <span class="demonstration" style="font-size:14px">出生日期：</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期" >
          </el-date-picker>
        </div> -->
        <!-- <van-field
          v-model="ruleForm.numberid"
          name="身份证号"
          label="身份证号："
          placeholder="请输入您的身份证号"
          :rules="[{ required: true, message: '请填写您的身份证号' }]"
          style="margin-top:1em"
          type="number"
        /> -->
        <van-field
          readonly
          clickable
          label="与本人关系"
          :value="value"
          placeholder="请选择"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>

        <van-field
          v-model="ruleForm.address"
          name="家庭住址"
          label="家庭住址："
          placeholder="请输入您的家庭住址"
          :rules="[{ required: true, message: '请填写您的家庭住址' }]"
          style="margin-top:1em"
        />
       
               <van-field  label="居住证明：" />
                <input type="file" @change="getImgBase()"   ref="file1" style="margin-top:10px;margin-left:15%;">
       <p style="margin-left:5%;color:red">提示：以下三项只需新生儿上传（非必填）</p>
                 <van-field
          v-model="ruleForm.birthhospital"
          name="出生医院"
          label="出生医院："
          placeholder="请输入宝宝的出生医院"
          :rules="[{ required: true, message: '请填写宝宝的出生医院' }]"
          style="margin-top:1em"
        />
                <van-field label="请上传宝宝的出生证明:" />
                <input type="file" @change="getImgBase()"   ref="file" style="margin-top:10px;margin-left:15%;">
                <van-field  label="乙肝和卡介苗接种记录：" />
        <input type="file" @change="getImgBase()"   ref="file2" style="margin-top:10px;margin-left:15%;">
        <div class="image-view" style="margin-top:10px;">
                <div class="view">
                    <div class="item" v-for="(item, index) in imgBase64">
                        <span class="cancel-btn" @click="delImg(index)">x</span>
                        <img :src="item">
                    </div>
                </div>
            </div>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="jump()">确认信息</van-button>
        </div>
      </van-form>
    </div>
    <!-- <div class="font" @click="jump11()">已有账号？立即登录</div> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Qs from "qs";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        Aemail:'',
       value1: '',
       fileList: [],
        value: "",
        showPicker: false,
        columns: ["本人", "夫妻", "父母", "子女", "兄弟姐妹"],
      ruleForm: {
        username: "",
        password: "",
        gender: "",
        birthday: "",
        numberid: "",
        telephone: "",
        address: "",
        birthhospital: "",
        sms:"",

        //  pickerOptions: {
        //   disabledDate(time) {
        //     return time.getTime() > Date.now();
        //   },
        // },
       
      },
        residencepermit: "",
        birthcertificate: "",
        ykrecord: "",
        imgBase64:[] ,
        vacc:''
    };
  },
  methods: {
     getImgBase(){
                var _this = this;
                var event = event || window.event;
                var file = event.target.files[0];
                var file1 = event.target.files[0];
                var file2 = event.target.files[0];
                var reader = new FileReader(); 
                //转base64
                reader.onload = function(e) {
                    _this.imgBase64.push(e.target.result);
                }
                reader.readAsDataURL(file);
                reader.readAsDataURL(file1);
                reader.readAsDataURL(file2);
            },
            //删除图片
            delImg(index){
                this.imgBase64.splice(index,1);
            },
   
    onClickLeft() {
        this.$router.go(-1)
    },

    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onSubmit(values) {
      console.log("submit", values);
    },


    jump() {
      var that=this
      let fromdata=new FormData();
       fromdata.append( "uploadFile",that.$refs.file.files[0])
        console.log(that.$refs.file.files[0])
      this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata).then(response=>{
        console.log(response)
         console.log(response.data)
         sessionStorage.setItem("birthcertificate",response.data)

        })
        let fromdata1=new FormData();
       fromdata1.append( "uploadFile",that.$refs.file1.files[0])
        console.log(that.$refs.file1.files[0])
      this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata1).then(response1=>{
        console.log(response1)
         console.log(response1.data)
         sessionStorage.setItem("residencepermit",response1.data)

        })
        let fromdata2=new FormData();
       fromdata2.append( "uploadFile",that.$refs.file2.files[0])
        console.log(that.$refs.file2.files[0])
      this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata2).then(response2=>{
        console.log(response2)
         console.log(response2.data)
         sessionStorage.setItem("ykrecord",response2.data)
         
        })

                          let obj = {
        // code:this.code,
        uid:this.vacc.uid,
        name: this.vacc.name,
        telephone:this.vacc.telephone,
        gender: this.ruleForm.gender,
        birthday: this.value1+'',
        numberid: this.vacc.numberid,
        relation: this.value,
        address: this.ruleForm.address,
        // password: this.ruleForm.password,
        birthhospital: this.ruleForm.birthhospital,
        // code:this.code1,
        birthcertificate:sessionStorage.getItem("birthcertificate"),
        residencepermit:sessionStorage.getItem("residencepermit"),
        ykrecord:sessionStorage.getItem("ykrecord"),
      };
      console.log(this.value1)
      console.log(typeof(this.value1))
      
      this.$axios.post("http://152.136.232.95:8089/user/modifyUserInfo", obj).then(res => {
        console.log(res);
        localStorage.setItem("telephone",this.ruleForm.telephone)
      localStorage.setItem("psw",this.ruleForm.password)
        if (res.data==1) {
          alert("信息已完善，请稍等...")
          // window.location.href="login"
          this.$router.push('Personal')
        } else {
          alert("信息完善失败 ")
        }
      });

    }


               //上传图片
            // afterread(item){
            //     var vm=this
            //     window.lrz(item.file,{
            //         before:function(){},
            //         fail:function(err){},
            //         always:function(){},
            //         whidth:400
            //     },function(con){
            //         let data={
            //             imgbase64:con.base64
            //         }
            //         axios({
            //             method:'post',
            //             url:'/BQ/file/upload',
            //             data:Qs.stringify(data)
            //         }).then(two=>{
            //             console.log(two)
            //             console.log(two.data.data.imgurl)
            //             vm.fileList=two.data.data.imgurl
                       
            //             console.log(vm.fileList)
            //         })
            //     }
               
            //     )},
        },
        created(){
                this.Aemail=this.$route.query.numberid;
    console.log(this.Aemail);
    sessionStorage.setItem("jrnumberid",this.Aemail)
     let fromdata=new FormData();
      fromdata.append("numberid",this.Aemail)

    this.$axios.post("http://152.136.232.95:8089/user/getUserInfoByNum",fromdata).then(res=>{
        console.log(res)
        this.vacc= res.data[0]
        // console.log(vacc.vname)

    })
        }
};
</script>
<style  scoped>
.shangchuan {
  margin-top: 10px;
  margin-left: 5%
}
.font{
  text-align: center;
  font-size: 12px;
  color: rgb(136, 136, 136);
  margin-bottom: 20px
}

    .image-view{
        width:100%;
        height:10px;
        margin: auto;
        /* border:1px solid black */
    }
    .image-view .item {
        position:relative;
        float:left;
        height:100px;
        width:100px;
        margin:10px 10px 0 0;
        /* border:1px solid black */
    }
    .image-view .item .cancel-btn{
        position:absolute;
        right:0;
        top:0;
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
        /* border:1px solid black */
    }
    .image-view .view{
        clear:both;
        float: left;
        
    }
     .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
}
.van-cell[data-v-2a0c5816] {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
}
.van-field__label {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 6.2em;
    margin-right: 12px;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
}
.van-cell__value {
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
}
.van-field__body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.van-field__control {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
</style>