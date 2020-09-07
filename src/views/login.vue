<template>
<div class="log_form">
      <van-nav-bar title="登录" right-text />
          <div class="box1">
        <div class="van-field__label"><span class=".van-field__label">账号:</span></div>
        <div class="van-cell__value">
          <div class=".van-field__body"><input type="text" v-model="username" placeholder="请输入用户名" id="user" class="van-field__control" ></div></div>
     </div>
     <div class="box1">
        <div class="van-field__label"><span class=".van-field__label">密码:</span></div>
        <div class="van-cell__value">
          <div class=".van-field__body"><input type="password" v-model="password" placeholder="请输入密码" id="pswd" class="van-field__control"></div></div>
     </div>
               
         <div class="item" >
            
            <input type="checkbox" v-model="password_ji" class="password_ji">
            <label>记住密码</label>
        </div>
        <div style="margin: 16px;margin-top:1em">
          <van-button round block type="success" class="login_bt" @click="login_submit">登录</van-button>
        </div>
         <div style="position: relative;width:100%;height:4em">
        <div class="font1" @click="jump1()">忘记密码</div>
        <div class="font" @click="jump()">没有账号？立即注册</div>
      </div>
            </div>
</template>

<script>
// 引入base64
const Base64 = require('js-base64').Base64
export default {
    data () {
        return {
                account:'',
                password:'',
                remember:'',
                username:'',
                password_ji:true,
        }
    },
mounted(){
      this.getCookie();

  },
 

    methods: {
       jump1(){
    this.$router.push("forget")
  },
  jump(){
    this.$router.push("register")
  },
     //设置cookie
    setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        document.cookie = "userName=" + c_name + ";path=/;expires=" + exdate.toLocaleString()
        document.cookie = "userPwd=" + c_pwd + ";path=/;expires=" + exdate.toLocaleString()
    },
    //获取cookie
    getCookie: function() {
        if (document.cookie.length > 0) {
            var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
            // console.log(arr)
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('='); //再次切割
                //判断查找相对应的值
                if (arr2[0] == 'userName') {
                    this.username = arr2[1]; //保存到保存数据的地方
                } else if (arr2[0] == 'userPwd') {
                    this.password = arr2[1];
                }
            }
        }
    },
    //删除cookie
    clearCookie: function() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了

    },

login_submit(){
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if (this.password_ji == true) {
            console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            this.setCookie(this.username, this.password, 7);
        }else {
          console.log("清空Cookie");
          //清空Cookie
          this.clearCookie();
        }
                       let fromdata = new FormData();
      fromdata.append("telephone", this.username);
      sessionStorage.setItem("telephone", this.username);
      fromdata.append("password", this.password);
      this.$axios
        .post("http://152.136.232.95:8089/user/login", fromdata)
        .then(res => {
          console.log(res);
          console.log(res.data.password);
          localStorage.setItem("res", res.data);
          sessionStorage.setItem("loginnumberid", res.data.numberid);
          if (res.data.password != "" && res.data.password != undefined) {
            // this.telephone.innerHTML=this.telephone;
            // this.password.innerHTML=this.password;
            // console.log( password.innerHTML=this.password)
            alert("登录成功");
            // window.location.href="Personal"
            this.$router.push("Personal");
          } else {
            alert("用户名/密码错误");
          }
        });
        //与后端请求代码，本功能不需要与后台交互所以省略
        
        console.log("登陆成功");
        

    },

    }
}
</script>

<style>
.main {
    width: 300px;
}
.main .item {
    display: flex;
    align-items: center;
    line-height: 30px;
}
.main .item label {
    width: 100px;
}
.box {
  width: 100%;
  height: 10em;
  /* border:1px solid black; */
  margin-top: 1em;
}
.font {
  text-align: center;
  font-size: 12px;
  color: rgb(136, 136, 136);
}
.font1 {
  /* text-align: center; */
  font-size: 12px;
  color: rgb(136, 136, 136);
  position: absolute;
  top: 1.8%;
  left: 3%;
}
.box1{
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
.van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
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
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
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
.van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    box-sizing: border-box;
    width: 6.2em;
    margin-right: 12px;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
}
.item{
  /* border:1px solid black; */
  width: 80%;
  margin-left: 5% ;
  margin-top: 10px;
    font-size: 14px;
    color: rgb(136, 136, 136);
    
}

.van-button--round{
   background-color: #1989fa;
   color: white;
   border: 1px solid transparent
}
</style>