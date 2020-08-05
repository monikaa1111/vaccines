<!--  -->
<template>
<div class=''>
           <van-nav-bar
        title="确认预约"
        left-text="返回"
        right-text="按钮"
        left-arrow
        />
      <van-form>
        <van-field
          v-model="username"
          name="预约姓名"
          label="预约姓名"
          placeholder="预约姓名"
          :rules="[{ required: true, message: '请填写预约姓名' }]"
        />
        <van-field
          v-model="numberid"
          name="预约身份证号"
          label="预约身份证号"
          placeholder="预约身份证号"
          :rules="[{ required: true, message: '请填写预约身份证号' }]"
          type="number"
        />
         <van-field
          v-model="telephone"
          name="家长电话"
          label="家长电话"
          placeholder="家长电话"
          :rules="[{ required: true, message: '请填写家长电话' }]"
          type="number"
        />
       <van-field
          v-model="position"
          name="预约部位"
          label="预约部位"
          placeholder="预约部位"
          :rules="[{ required: true, message: '请填写预约部位' }]"
        />
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
                        <van-field
          v-model="doctor"
          name="预约医生"
          label="预约医生"
          placeholder="预约医生"
          :rules="[{ required: true, message: '请填写预约医生' }]"
        />
                        <van-field
          v-model="department"
          name="预约医生科室"
          label="预约医生科室"
          placeholder="预约医生科室"
          :rules="[{ required: true, message: '请填写预约医生的科室' }]"
        />
                        <van-field
          v-model="job"
          name="预约医生职务"
          label="预约医生职务"
          placeholder="预约医生职务"
          :rules="[{ required: true, message: '请填写预约医生的职务' }]"
        />
        <div style="margin-top: 16px;margin-bottom:16px">
    <van-button round block type="info" native-type="submit" @click="jump()">
     确认预约
    </van-button>
  </div>
        </van-form>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
    numberid:'',
    place:'',
    telephone:'',
    time:'',
    vname:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    jump() {
      //       let fromdata=new FormData();
      // fromdata.append( "ykrecord", this.ykrecord)
      // console.log(typeof(this.ykrecord))
      // this.$axios.post("http://152.136.232.95:8089/appointRecord/addAppointRecord",fromdata).then(response=>{
      //   console.log(response)
      //   })
       this.vname=this.$route.query.vname;
       console.log(this.vname);
    
      let obj = {
            department:this.department,
            doctor: this.doctor,
            job: this.job,
            name: this.username,
            numberid:this.numberid,
            place:this.place,
            telephone: this.telephone,
            time: this.time,
            vaccinationsite:this.position,
            vname: this.vname
        // code:this.code1
      };
      console.log(this.value1)
      console.log(typeof(this.value1))

      this.$axios.post("http://152.136.232.95:8089/appointRecord/addAppointRecord", obj).then(res => {
        console.log(res);
        if (res.data==1) {
          alert("预约成功")
          this.$router.go(0)
          // window.location.href="login"
        } else {
          alert("预约失败")
        }
      });
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

</style>