<!--  -->
<template>
<div class=''>
           <van-nav-bar
        title="确认预约"
        left-text="返回"
        left-arrow
        
  @click-left="onClickLeft()"
        />
<!--         
          <van-field
          readonly
          clickable
          label="为谁预约"
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
      <van-form>
        <div class="van-cell">
          <div style="width:28%">
            <span  class="van-field__label">预约姓名</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <select name="" id="" class="van-field__control"  v-model="username"  @click="name()">
                <option  v-for="(item,index) in message " :key="index">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <!-- <van-field
          v-model="username"
          name="预约姓名"
          label="预约姓名"
          placeholder="预约姓名"
          :rules="[{ required: true, message: '请填写预约姓名' }]"
        /> -->
         <div class="van-cell">
          <div  style="width:30%">
            <span  class="van-field__label">预约身份证号</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" :value="vaa.numberid">
            </div>
          </div>
        </div>
        <div class="van-cell">
          <div  style="width:28.5%">
            <span  class="van-field__label">家长电话</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" :value="vaa.telephone">
            </div>
          </div>
        </div>
        
        <!-- <van-field
          v-model="numberid"
          name="预约身份证号"
          label="预约身份证号"
          :placeholder='vaa.numberid'
          :rules="[{ required: true, message: '请填写预约身份证号' }]"
          type="number"
        /> -->
         <!-- <van-field
          v-model="telephone"
          name="家长电话"
          label="家长电话"
          placeholder="家长电话"
          :rules="[{ required: true, message: '请填写家长电话' }]"
          type="number"
        /> -->
       <!-- <van-field
          v-model="position"
          name="预约部位"
          label="预约部位"
          placeholder="预约部位"
          :rules="[{ required: true, message: '请填写预约部位' }]"
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
          name="预约医院"
          label="预约医院"
          placeholder="预约医院"
          :rules="[{ required: true, message: '请填写预约医院' }]"
        />
                        <!-- <van-field
          v-model="doctor"
          name="预约医生"
          label="预约医生"
          placeholder="预约医生"
          :rules="[{ required: true, message: '请填写预约医生' }]"
        /> -->
          <div class="van-cell">
          <div  style="width:28.5%">
            <span  class="van-field__label">预约医生科室</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" name="" id="" class="van-field__control" value="计免科">
            </div>
          </div>
        </div>
               
                     
        <!-- <div style=" position: relative;   ">
        <van-field
          name=" 上传电子签名"
          label=" 上传电子签名"
        />
          
 <div class="image-view" style="margin-top:10px;">
            <input type="file" @change="getImgBase()"   ref="file" class="inp">

        <div class="view">
            <div class="item" v-for="(item, index) in imgBase64">
                <span class="cancel-btn" @click="delImg(index)">x</span>
                <img :src="item">
            </div>
        </div>
    </div> -->
    <!-- </div> -->
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
  message:'',
  position:'',
    department:'',
    job:'',
    username:'',
    place:'',
    telephone:'',
    time:'',
    vname:'',
     imgBase64:[],
     value: "",
    showPicker: false,
      columns: ["本人", "夫妻", "父母", "子女", "兄弟姐妹"],  
      vaa:'',
      numberid1:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
  created() {
       var tel=sessionStorage.getItem("telephone")
       let fromdata=new FormData();
      fromdata.append("telephone",tel)
    this.$axios.post("http://152.136.232.95:8089/user/getUserInfo",fromdata).then(res =>{
        console.log(res)
        sessionStorage.setItem("telephone",tel)
        sessionStorage.setItem("uid",res.data.uid)
        this.message=res.data
        console.log(this.message)
  })
 
       
},
methods: {
  name(){
    
        let fromdata1=new FormData();
      fromdata1.append("name",this.username)
    this.$axios.post("http://152.136.232.95:8089/user/getUserInfoByName",fromdata1).then(res =>{
        console.log(res)
        this.vaa=res.data[0]
        this.numberid1=res.data[0].numberid
        console.log(this.vaa)

             let fromdata1=new FormData();
      fromdata1.append("numberid",this.numberid1)

    this.$axios.post("http://152.136.232.95:8089/user/getUserInfoByNum",fromdata1).then(res=>{
        console.log(res)
        this.vacc= res.data[0]
        // console.log(vacc.vname)
        if ( this.vacc.birthday=='' ||  this.vacc.gender == '' ||  this.vacc.address=='' ||  this.vacc.birthhospital=='') {
          alert("您的信息还未完善，请先去完善信息~")
          this.$router.push("perfect?numberid="+this.numberid1)
        } 
    })

    })
     
       
  },

    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
     onClickLeft() {
      this.$router.go(-1);
    },
    // getImgBase(){
    //             var _this = this;
    //             var event = event || window.event;
    //             var file = event.target.files[0];
    //             var reader = new FileReader(); 
    //             //转base64
    //             reader.onload = function(e) {
    //                 _this.imgBase64.push(e.target.result);
    //             }
    //             reader.readAsDataURL(file);
    //         },
    //         //删除图片
    //         delImg(index){
    //             this.imgBase64.splice(index,1);
    //         },


    jump() {
      //       var that=this
      // let fromdata=new FormData();
      // fromdata.append( "uploadFile",that.$refs.file.files[0])
      //   console.log(that.$refs.file.files)
      // this.$axios.post("http://152.136.232.95:8089/file/upload",fromdata).then(response=>{
      //   console.log(response)
      //    console.log(response.data)
      //    sessionStorage.setItem("autograph",response.data)
      //   // window.location.href="appointment"

      //   })
      //       let fromdata=new FormData();
      // fromdata.append( "ykrecord", this.ykrecord)
      // console.log(typeof(this.ykrecord))
      // this.$axios.post("http://152.136.232.95:8089/appointRecord/addAppointRecord",fromdata).then(response=>{
      //   console.log(response)
      //   })
       this.vname=this.$route.query.vname;
       console.log(this.vname);
       
    // var tel=sessionStorage.getItem("autograph")
    if (this.department==''||this.username==''||this.vaa.numberid==''||this.place==''|| this.vaa.telephone==''||this.time=='') {
      alert("您的信息不完善，请去完善信息..")
    } else {
      let obj = {
            department:this.department,
            job: this.job,
            name: this.username,
            numberid:this.vaa.numberid,
            place:this.place,
            telephone: this.vaa.telephone,
            time: this.time,
            vname: this.vname,
            // autograph:sessionStorage.getItem("autograph")
        // code:this.code1
      };
      console.log(this.value1)
      console.log(typeof(this.value1))
      sessionStorage.setItem("apnumberid",this.vaa.numberid)
      console.log(this.vaa.numberid)
      this.$axios.post("http://152.136.232.95:8089/appointRecord/addAppointRecord", obj).then(res => {
        console.log(res);
        if (res.data==1) {
          alert("预约成功,请返回个人中心点我的二维码进行现场签到")
          this.$router.push('Personal?apnumberid='+this.vaa.numberid)
        } else {
          alert("预约失败")
        }
      });
      }
    }

},
//生命周期 - 创建完成（可以访问当前this实例）

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
.image-view{
        width:100%;
        height:40px;
        margin: auto;
        /* border:1px solid black */
    }
    .image-view .item {
        position:relative;
        float:left;
        height:100px;
        width:100px;
        margin:10px 10px 0 0;
        margin-left: 80%;
        margin-bottom: 10px
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
    .inp{
      width: 60%;
      /* border:1px solid black;  */
      margin-top:10px;
      margin-left:20%;
      position:absolute;
      top:-1%;
      right:11%
    }
    .van-cell {
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
.van-cell[data-v-2a0c5816] {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
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
    -ms-flex: none;
    flex: none;
    -webkit-box-sizing: border-box;
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
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.van-field__control {
    display: block;
    -webkit-box-sizing: border-box;
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
</style>