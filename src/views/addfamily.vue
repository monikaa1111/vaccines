<!--  -->
<template>
<div class=''>
    <van-nav-bar
        title="管理家庭成员"
        left-text="返回"
        left-arrow
        
  @click-left="onClickLeft()"
        />
        <div class="head">
        <img src="../assets/tianjia3.png" class="img" @click="addto()">
    </div>
    <p style="margin-left:2%">家庭成员</p>
    <div>
   <van-swipe-cell :before-close="beforeClose">
  <!-- <van-cell :border="false" title="单元格" value="内容" /> -->
  <div class="box"  v-for="(item,index) in message " :key="index" @click="see(index)" >
      <p style="position: absolute;left:5%;top:20%;">{{item.name}}</p>
      <p style="position: absolute;right:5%;font-size:12px;line-height:2.5em;color: darkgrey" >查看详情>></p>
      <p style="position: absolute;left:35%;font-size:15px">{{item.gender}}</p>
      <p style="position: absolute;left:35%;top:20%;font-size:15px">{{item.birthday}}</p>
      <p style="position: absolute;left:35%;top:40%;font-size:15px">{{item.relation}}</p>
      <!-- <p style="position: absolute;left:5%;top:65%;font-size:14px">家庭住址：{{item.gender}}</p>
      <p style="position: absolute;left:5%;top:80%;font-size:14px">出生医院：{{item.gender}}</p> -->
         <!-- <van-cell title="性别" :value="item.gender" />
        <van-cell title="出生日期" :value="item.birthday" />
          <van-cell title="与本人关系" :value="item.relation" />
          <van-cell title="家庭住址" :value="item.address" />
            <van-cell title="出生医院" :value="item.birthhospital" /> -->
  </div>
</van-swipe-cell>
<van-swipe-cell :before-close="beforeClose">
  <!-- <van-cell :border="false" title="单元格" value="内容" /> -->
  <!-- <div class="box">
      <p style="position: absolute;left:5%">儿子</p>
      <p style="position: absolute;right:5%;font-size:12px;line-height:2.5em;color: darkgrey">查看详情>></p>
  </div> -->
</van-swipe-cell>
</div>
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
message:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    see(index){
      this.$router.push('Familypersonal?numberid='+this.message[index].numberid)
    },
    addto(){
      this.$router.push("addto")
    }
  },
created() {
    //              this.aaa=this.$route.query.uid;
    //    console.log(this.aaa);
    var tel=sessionStorage.getItem("telephone")
       let fromdata=new FormData();
      fromdata.append("telephone",tel)
    this.$axios.post("http://152.136.232.95:8089/user/getUserInfo",fromdata).then(res =>{
        console.log(res)
        sessionStorage.setItem("uid",res.data[0].uid)
        this.message=res.data
        console.log(this.message)
 

    })
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
<style  scoped>
.head{
    height: 260px;
    width: 100%;
    background-color: rgb(135, 175, 248);
    position: relative;
}
.img{
    width: 20%;
    height: 4.5em;
    border-radius:50%;
    position: absolute;
    top: 28%;
    left: 40%;
    
}
/* .van-cell{
    height: 5em
} */
.box{
    height:8em; 
    width: 98%;
    margin:10px auto;
    /* border-top: 1px solid rgb(211, 211, 211); */
    position: relative;
    background-color:rgb(216, 220, 221);
}
.van-button{
    height: 4em
}
</style>