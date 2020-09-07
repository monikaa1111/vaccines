<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="修改预约信息"
      left-text
      left-arrow
      @click-left="onClickLeft()"
    />
    <div>
      <van-form @submit="onSubmit">
    <van-field
          v-model="username"
          name="预约姓名"
          label="预约姓名"
          placeholder="预约姓名"
          :rules="[{ required: true, message: '请填写预约姓名' }]"
        />
         <van-field
          v-model="telephone"
          name="家长电话"
          label="家长电话"
          placeholder="家长电话"
          :rules="[{ required: true, message: '请填写家长电话' }]"
          type="number"
        />
       <!-- <van-field
          v-model="position"
          name="接种部位"
          label="接种部位"
          placeholder="接种部位"
          :rules="[{ required: true, message: '请填写接种部位' }]"
        /> -->
        <van-field
          v-model="time"
          name="预约时间"
          label="预约时间"
          placeholder="预约时间"
          :rules="[{ required: true, message: '请填写预约时间' }]"
          type="date"
        />
                <van-field
          v-model="place"
          name="预约地点"
          label="预约地点"
          placeholder="预约地点"
          :rules="[{ required: true, message: '请填写预约地点' }]"
        />

                        <!-- <van-field
          v-model="department"
          name="预约医生科室"
          label="预约医生科室"
          placeholder="预约医生科室"
          :rules="[{ required: true, message: '请填写预约医生的科室' }]"
        /> -->
                        
        <div style="margin: 16px;">
          <van-button round block type="info" @click="jump()">修改</van-button>
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
        position:'',
    department:'',
    doctor:'',
    job:'',
    username:'',
    place:'',
    telephone:'',
    time:'',
    vname:'',
    aaa:""
    };
  },
  methods: {
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
    // code() {
    //   var tel = [this.ruleForm.telephone];
    //   console.log(JSON.stringify(this.ruleForm.telephone));
    //   this.$axios.post("http://152.136.232.95:8089/user/sendCode", tel).then(res => {
    //     console.log(res);
    //     let code = res.data;
    //   });
    // },

    jump() {
             this.aaa=this.$route.query.sfzh;
             console.log(this.aaa);
       
    // var tel=sessionStorage.getItem("autograph")
    
      let obj = {
            doctor: this.doctor,
            job: this.job,
            name: this.username,
            place:this.place,
            telephone: this.telephone,
            time: this.time,
            aid:sessionStorage.getItem("aid"),
            numberid:this.aaa
            // autograph:sessionStorage.getItem("autograph")
        // code:this.code1
      };

      this.$axios.post("http://152.136.232.95:8089/appointRecord/modifyAppointRecord", obj).then(res => {
        console.log(res);
        if (res.data==1) {
          alert("修改成功")
          //  this.$router.push('information?info='+this.aaa)
          this.$router.go(-1);
        } else {
           alert("修改失败")
        }
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