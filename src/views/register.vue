<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="注册"
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
        <van-field
          v-model="ruleForm.username"
          name="姓名"
          label="姓名："
          placeholder="请输入您的姓名"
          :rules="[{ required: true, message: '请填写真实姓名' }]"
          style="margin-top:1em"
        />
        <!-- <van-field
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
        /> -->
      <!-- <div class="block" style="margin-left:4%;margin-top:11px">
          <span class="demonstration" style="font-size:14px">出生日期：</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期" >
          </el-date-picker>
        </div> -->
        <van-field
          v-model="ruleForm.numberid"
          name="身份证号"
          label="身份证号："
          placeholder="请输入您的身份证号"
          :rules="[{ required: true, message: '请填写您的身份证号' }]"
          style="margin-top:1em"
          type="number"
        />
        <!-- <van-field
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
        </van-popup> -->
        <van-field
          v-model="ruleForm.telephone"
          name="手机号"
          label="手机号："
          placeholder="请输入您的手机号"
          :rules="[{ required: true, message: '手机号不能为空' }]"
          style="margin-top:1em"
          type="number"
        />
        <van-field v-model="ruleForm.sms" center clearable label="短信验证码：" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary" @click="code()">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="ruleForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
          <van-field
          v-model="ruleForm.password2"
          type="password"
          name="再次输入密码"
          label="再次输入密码"
          placeholder="再次输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
<!-- 
        <van-field
          v-model="ruleForm.address"
          name="家庭住址"
          label="家庭住址："
          placeholder="请输入您的家庭住址"
          :rules="[{ required: true, message: '请填写您的家庭住址' }]"
          style="margin-top:1em"
        />
        <van-field
          v-model="ruleForm.birthhospital"
          name="出生医院"
          label="出生医院："
          placeholder="请输入宝宝的出生医院"
          :rules="[{ required: true, message: '请填写宝宝的出生医院' }]"
          style="margin-top:1em"
        /> -->
               <!-- <van-field  label="居住证明：" />
                <input type="file" @change="getImgBase()"   ref="file1" style="margin-top:10px;margin-left:15%;">
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
            </div> -->
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="jump()">注册</van-button>
        </div>
      </van-form>
    </div>
    <div class="font" @click="jump11()">已有账号？立即登录</div>
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
       value1: '',
       fileList: [],
        value: "",
        showPicker: false,
        columns: ["本人", "夫妻", "父母", "子女", "兄弟姐妹"],
      ruleForm: {
        username: "",
        password: "",
         password2: "",
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
        imgBase64:[] 
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
    jump11() {
      this.$router.push('/login')
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
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
    code() {
      var tel = [this.ruleForm.telephone];
      console.log(JSON.stringify(this.ruleForm.telephone));
      this.$axios.post("http://152.136.232.95:8089/user/sendCode",tel).then(res => {
        console.log(res);
        this.code1 = res.data;
        if (res.data!="") {
          alert("验证码发送成功")
        } else {
          
        }
      });
    },

    jump() {
      // var that=this
      // let fromdata=new FormData();
      //  fromdata.append( "uploadFile",that.$refs.file.files[0])
      //   console.log(that.$refs.file.files[0])
      // this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata).then(response=>{
      //   console.log(response)
      //    console.log(response.data)
      //    sessionStorage.setItem("birthcertificate",response.data)

      //   })
      //   let fromdata1=new FormData();
      //  fromdata1.append( "uploadFile",that.$refs.file1.files[0])
      //   console.log(that.$refs.file1.files[0])
      // this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata1).then(response1=>{
      //   console.log(response1)
      //    console.log(response1.data)
      //    sessionStorage.setItem("residencepermit",response1.data)

      //   })
      //   let fromdata2=new FormData();
      //  fromdata2.append( "uploadFile",that.$refs.file2.files[0])
      //   console.log(that.$refs.file2.files[0])
      // this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata2).then(response2=>{
      //   console.log(response2)
      //    console.log(response2.data)
      //    sessionStorage.setItem("ykrecord",response2.data)

      //   })
      if (this.ruleForm.password != this.ruleForm.password2) {
        alert("您输入的密码不一致，请填写相同密码")
      }else{
                      let obj = {
        // code:this.code,
        name: this.ruleForm.username,
        telephone:this.ruleForm.telephone,
        // gender: this.ruleForm.gender,
        // birthday: this.value1+'',
        numberid: this.ruleForm.numberid,
        // relation: this.value,
        // address: this.ruleForm.address,
        password: this.ruleForm.password,
        // birthhospital: this.ruleForm.birthhospital,
        code:this.code1,
        // birthcertificate:sessionStorage.getItem("birthcertificate"),
        // residencepermit:sessionStorage.getItem("residencepermit"),
        // ykrecord:sessionStorage.getItem("ykrecord"),
      };
      console.log(this.value1)
      console.log(typeof(this.value1))
      
      this.$axios.post("http://152.136.232.95:8089/user/register", obj).then(res => {
        console.log(res);
        localStorage.setItem("telephone",this.ruleForm.telephone)
      localStorage.setItem("psw",this.ruleForm.password)
        if (res.data==1) {
          alert("注册成功，请稍等...")
          // window.location.href="login"
          this.$router.push('login')
        } else {
          alert("注册失败")
        }
      });
      }


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
</style>