<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="忘记密码"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="ruleForm.name"
          name="用户名"
          label="用户名："
          placeholder="请输入您的用户名"
          :rules="[{ required: true, message: '请填写您的用户名' }]"
          style="margin-top:1em"
        />
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
          name="请输入新密码"
          label="请输入新密码"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
          v-model="ruleForm.newpassword"
          type="password"
          name="确认新密码"
          label="确认新密码"
          placeholder="确认新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="jump()">注册</van-button>
        </div>
      </van-form>
    </div>
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
      code3:'',   
       fileList: [],
      ruleForm: {
        username: "",
        password: "",
        newpassword: "",
        telephone: "",
        // residencepermit: "",
        // birthcertificate: "",
        // ykrecord: ""
      }
    };
  },
  methods: {
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
      this.$axios.post("http://152.136.232.95:8089/user/sendCode", tel).then(res => {
        console.log(res);
        this.code3 = res.data;
        
      });
      
    },
    jump(){
      let fromdata=new FormData();
      fromdata.append("telephone",this.ruleForm.telephone)
      fromdata.append("newpassword",this.ruleForm.newpassword)
      fromdata.append('code',this.code3)
      this.$axios.post("http://152.136.232.95:8089/user/forgetPassword",fromdata).then(res=>{
        console.log(res)
        if (res.data==1) {
          window.location.href="login"
        } else {
          alert("修改失败，请重试")
        }
      })
    }
   
  }
};
</script>
<style  scoped>
.shangchuan {
  margin-top: 10px;
  margin-left: 60%;
}
</style>