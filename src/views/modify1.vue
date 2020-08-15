<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="修改信息 "
      left-text
      left-arrow
      @click-left="onClickLeft()"
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
        <van-field
          v-model="ruleForm.birthhospital"
          name="出生医院"
          label="出生医院："
          placeholder="请输入宝宝的出生医院"
          :rules="[{ required: true, message: '请填写宝宝的出生医院' }]"
          style="margin-top:1em"
        />

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="jump()">修改</van-button>
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
        telephone: "",
        address: "",
        birthhospital: "",
        code1:'',

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
        uid:""
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
      this.$router.go(-1);
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
        this.uid=this.$route.query.uid;
    console.log(this.uid);
      let obj = {
        username: this.ruleForm.username,
        // code:this.code,
        name: this.ruleForm.name,
        gender: this.ruleForm.gender,
        birthday: this.value1+'',
        numberid: this.ruleForm.numberid,
        relation: this.value,
        address: this.ruleForm.address,
        birthhospital: this.ruleForm.birthhospital,
        uid:sessionStorage.getItem("uid")
      };
      console.log(this.value1)
      console.log(typeof(this.value1))

      this.$axios.post("http://152.136.232.95:8089/user/modifyUserInfo", obj).then(res => {
        console.log(res);
        if (res.data==1) {
          alert("修改成功，请稍等...")
          // window.location.href="Personal"
          this.$router.push('Personal')
        } else {
          alert("修改失败，请重试")
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