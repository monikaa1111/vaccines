<!--  -->
<template>
  <div class>
    <van-nav-bar title="登录" right-text />
    <div class="box">
      <van-form>
        <van-field
          v-model="telephone"
          name="手机号"
          label="手机号："
          placeholder="请输入您的手机号"
          :rules="[{ required: true, message: '手机号不能为空' }]"
          style="margin-top:1em"
          type="number"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
          style="margin-top:1em"
        />
        <div style="margin: 16px;margin-top:1em">
          <van-button round block type="info" @click="submit()">登录</van-button>
        </div>
      </van-form>
      <div style="position: relative;width:100%;height:4em">
        <div class="font1" @click="jump1()">忘记密码</div>
        <div class="font" @click="jump()">没有账号？立即注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      telephone: "",
      password: "",
      tel: "",
      psw: ""
    };
  },
  methods: {
    jump() {
      this.$router.push("/register");
    },
    jump1() {
      this.$router.push("/forget");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    submit() {
      let fromdata = new FormData();
      fromdata.append("telephone", this.telephone);
      sessionStorage.setItem("telephone", this.telephone);
      fromdata.append("password", this.password);
      this.$axios
        .post("http://152.136.232.95:8089/user/login", fromdata)
        .then(res => {
          console.log(res);
          console.log(res.data.password);
          localStorage.setItem("res", res.data);
          sessionStorage.setItem("numberid", res.data.numberid);
          if (res.data.password != "" && res.data.password != undefined) {
            alert("登录成功");
            // window.location.href="Personal"
            this.$router.push("Personal");
          } else {
            alert("用户名/密码错误");
          }
        });
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var tel = localStorage.getItem("telephone");
    console.log(tel);
    this.tel = tel;
    var psw = localStorage.getItem("psw");
    console.log(psw);
    this.psw = psw;
  }
};
</script>
<style  scoped>
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
</style>