<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="修改信息"
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
          v-model="ruleForm.username"
          name="姓名"
          label="姓名："
          placeholder="请输入您的姓名"
          :rules="[{ required: true, message: '请填写真实姓名' }]"
          style="margin-top:1em"
        />
        <van-field
          v-model="ruleForm.gender"
          name="性别"
          label="性别："
          placeholder="请输入您的性别"
          :rules="[{ required: true, message: '此选项不能为空' }]"
          style="margin-top:1em"
        />
        <van-field
          v-model="ruleForm.birthday"
          name="出生日期"
          label="出生日期："
          placeholder="请输入您的出生日期"
          :rules="[{ required: true, message: '此选项不能为空' }]"
          style="margin-top:1em"
          type="number"
        />

        <van-field
          v-model="ruleForm.numberid"
          name="身份证号"
          label="身份证号："
          placeholder="请输入您的身份证号"
          :rules="[{ required: true, message: '请填写您的身份证号' }]"
          style="margin-top:1em"
          type="number"
        />
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
          placeholder="请输入您的出生医院"
          :rules="[{ required: true, message: '请填写您的出生医院' }]"
          style="margin-top:1em"
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
      this.$axios.post("/BQ/user/sendCode", tel).then(res => {
        console.log(res);
        let code = res.data;
      });
    },

    jump() {
      let obj = {
        username: this.ruleForm.username,
        // code:this.code,
        name: this.ruleForm.name,
        gender: this.ruleForm.gender,
        birthday: this.ruleForm.birthday,
        numberid: this.ruleForm.numberid,
        relation: this.value,
        address: this.ruleForm.address,
        password: this.ruleForm.password,
        birthhospital: this.ruleForm.birthhospital,
        residencepermit: this.ruleForm.residencepermit,
        birthcertificate: this.ruleForm.birthcertificate,
        ykrecord: this.ruleForm.ykrecord
      };

      this.$axios.post("/BQ/user/register", obj).then(res => {
        console.log(res);
      });
    },
        },
};
</script>
<style  scoped>
.shangchuan {
  margin-top: 10px;
  margin-left: 60%;
}
</style>