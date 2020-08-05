<template>
    <div id="box">
      <top></top>
      <div class="box">
        <h2>注册账号</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input placeholder="请输入验证码" v-model="ruleForm.yzm" class="input-with-select">
                <el-button slot="append" @click="getyzm">获取验证码</el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="用户" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
          
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>

    export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          email:'',
          pass: '',
          checkPass: '',
          username: '',
          yzm:'',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    components:{
      top
    },
    methods: {
      // 验证码接口
      getyzm(){
        this.$axios.post('/BQ/user/sendCode',{
         user_email:this.ruleForm.email
        }).then(res=>{
          console.log(res);
        })
      },
      // 注册接口
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {    
          if (valid) {
            this.$axios.post('/BQ/user/register',{
              user_email:this.ruleForm.email,
              verificationCode:this.ruleForm.yzm,
              user_password:this.ruleForm.pass,
              user_name:this.ruleForm.username
            }).then(res=>{
              console.log(res);
            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.box{
    width: 350px;
    height: 524px;
    /* border: 1px solid black; */
    margin: 70px auto;
}
.box h2{
    text-align: center;
    padding: 30px 0px;
}
</style>