<!--  -->
<template>
  <div class='div'>
    <van-nav-bar
      title="您的接种记录"
      right-text="预约接种疫苗"
      right-arrow
      @click-right="onClickright()"
    />
    <!-- <input
      type="button"
      value="添加"
      style="margin:20px"
      @click="change()"
    /> -->
    <!-- <div class="tian" v-show="show">
        <input type="button" value="确认添加" class="sure"/>
    </div> -->
    <div class="box"  v-for="(item,index) in vacc " :key="index"  >
      <div @click="jump(index)" class="box1">
      <!-- <img src="../assets/1.jpg" class="img" /> -->
      <p class="name">{{item.vname}}</p>
      <p class="date">{{item.time}}</p>
      <p class="date1">价格：20</p>
      </div>
       <!-- <van-button plain type="info" class="button1" @click="del(index)">删除</van-button> -->
      <!-- <input type="button" value="删除" class="button1" @click="del(index)" /> -->
         <!-- <input type="button" value="修改信息" class="button2" @click="modi(index)" /> -->
      <!-- <input type="button" value="修改" class="button2"  @click="change()" />
          <div class="tian" v-show="show">
            <input type="button" value="确认修改" class="sure"/>
        </div> -->
    </div>
    <div class="aaa"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  data() {
    //这里存放数据
    return {
        show:false,
        vacc:[],
        record:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.numberid=this.$route.query.numberid;
    console.log(this.numberid);
      let fromdata=new FormData();
      fromdata.append("numberid",this.numberid)
     this.$axios.post("http://152.136.232.95:8089/appointRecord/findAppointRecord",fromdata).then(res=>{
        console.log(res)
        if (res.data.letterthird!="null" || res.data.letterthird!="" || res.data.letterthird!=null ) {
          this.vacc=res.data
          console.log(this.vacc)
        } else {
          
        }
        

    })
  },
  //方法集合
   methods: {
      onClickright() {
      // this.$router.go(-1);
      this.$router.push('treeselect')
    },
        jump(index){
      this.$router.push('information?info='+this.vacc[index].aid)
      sessionStorage.setItem("vname",this.vacc[index].vname)
    },
    del(index) {
      let fromdata=new FormData();
      fromdata.append("aid",this.vacc[index].aid)

       console.log(this.vacc[index].aid)
      //  let aid={
      //   "aid": (this.vacc[index].aid)
      //   }
      // this.$axios.post("http://152.136.232.95:8089/appointRecord/deleteAppointRecord",fromdata).then(res => {
      //   console.log(res);
      //   if (res.data==1) {
      //     alert("删除成功")
      //     this.$router.go(0)
      //   } else {
      //     alert("删除失败")
      //   }
      // });
    },
    //  modi(index) {
    //   let fromdata=new FormData();
    //   fromdata.append("aid",this.vacc[index].aid)

    //    console.log(this.vacc[index].aid)
    //   //  let aid={
    //   //   "aid": (this.vacc[index].aid)
    //   //   }
    //   this.$axios.post("http://152.136.232.95:8089/appointRecord/deleteAppointRecord",fromdata).then(res => {
    //     console.log(res);
    //     if (res.data==1) {
    //       alert("修改成功")
    //       this.$router.go(0)
    //     } else {
    //       alert("修改失败")
    //     }
    //   });
    // },
    change(){
   this.show = !this.show
  },
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},

};
</script>
<style  scoped>
.box {
  width: 90%;
  height: 6em;
  /* border:1px solid black; */
  margin: 10px auto;
  /* background-color: rgb(214, 214, 214); */
  box-shadow: 1px 1px 2px 1px rgb(212, 212, 212);
  position: relative;
}
.box1 {
  width: 90%;
  height: 6em;
  /* border:1px solid black; */
  margin: 10px auto;
  /* box-shadow: 1px 1px 2px 1px rgb(180, 179, 179); */
  position: relative;
}
/* .img {
  width: 30%;
  height: 6em;
  position: absolute;
  top: 22%;
  left: 5%;
} */
.name {
  font-size: 20px;
  position: absolute;
  top: 0%;
  left: 10%;
}
.date {
  font-size: 14px;
  position: absolute;
  top: 62%;
  left: 10%;
}
.date1 {
  font-size: 14px;
  position: absolute;
  top: 62%;
  left: 40%;
}
.button {
  position: absolute;
  top: 75%;
  left: 55%;
}
.button1 {
  height:2em;
  position: absolute;
  top: 66%;
  /* left: 70%; */
  right: 12%
}
.button2 {
  position: absolute;
  top: 75%;
  left: 45%;
}
.tian {
  width: 90%;
  height: 8.5em;
  border: 1px solid black;
  /* margin: auto; */
  background-color: rgb(187, 255, 255);
  z-index: 1;
  position: absolute;
  left: 5%;
}
.sure{
    position: absolute;
    bottom: 2%;
    right: 5%;
}
.div{
  margin-bottom:10em
}
.aaa
{width: 100%;
height: 50px;
/* border:1px solid black; */
 }
</style>