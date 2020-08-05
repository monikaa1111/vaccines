
<template>
<div>
<div class="box1">
    <div>
            <h2 class="d1">登录</h2>
        </div>
    <div class="box2">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
         
        <el-form-item label="手机号" prop="checkPass" >
            <el-input type="text" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item> 
        <font class="font">没有账号？<a href="register1">极速注册</a></font>
        <font class="font1" @click="ass">忘记密码</font>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="submit">登录</el-button>
        </el-form-item>
        </el-form>
       
    </div>
    </div>
    </div>
</template>
<script>
export default {
    components:{
    },
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
        console.log(value)
        var zz=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (value === '') {
          callback(new Error('请输入手机号'));
        }else if(!zz.test(value)){
         
          this.ruleForm.checkPass='';
          callback();
        }
    };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
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
    methods: {
      ass(){
        this.$router.push("/forget");
      },
      
      submitForm(formName) {
          if (this.ruleForm.pass!=''&&this.ruleForm.checkPass!='') {
              this.$axios.post('/BQ/user/login',{
              user_email:this.ruleForm.checkPass,
              user_password:this.ruleForm.pass
          }).then(res=>{
            console.log(res);
          })
          } else {
            console.log('error submit!!');
            return false;
          }
      },
    }
  }
</script>
<style scoped>
.box1{
    width: 500px;
    height: 300px;
    border: 1px solid black;
    margin: 120px auto;
    position: relative;
    top: 0%;
    left: 0;
}
.box2{
     width: 400px;
    height: 300px;
    margin: 30px auto;
    position: relative;
    top: 0%;
    left: -8%;
}
.d1{
    text-align: center;
    margin-top: 14px;
}
.submit{
    width: 240px;
    height: 40px;
    cursor: pointer;
     position: absolute;
    left: 7%;
    margin-top:8%; 
    }
.font{
      font-size: 12px;
      position: absolute;
      top: 40%;
      left: 25%;
    }
    .font1{
      font-size: 12px;
      position: absolute;
      top: 40%;
      left: 87%;
    }
</style>