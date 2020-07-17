<!--  -->
<template>
<div>
<el-row class="tac">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#cccccc"
      text-color="black"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>疫苗库</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">疫苗类型</template> -->
          <el-menu-item index="1-1">一类疫苗</el-menu-item>
          <el-menu-item index="1-2">二类疫苗</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="2">
           <template slot="title">
        <i class="el-icon-plus"></i>
        <span slot="title">机构管理</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="1-1">医院医生管理</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
      

        <el-submenu index="3">
           <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="1-1" @click="jump()">用户信息</el-menu-item>
        </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
           <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">内容管理</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="1-1">文章信息</el-menu-item>
          <el-menu-item index="1-1">视频信息</el-menu-item>
        </el-menu-item-group>
        </el-submenu>

         <el-submenu index="5">
           <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">疫苗记录</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">预约记录</el-menu-item>
          <el-menu-item index="1-1">接种记录</el-menu-item>
        </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
           <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">电子告知管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">电子管理书</el-menu-item>
          <el-menu-item index="1-1">电子告知视频</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
</el-row>
<!-- 一类疫苗 -->
<el-table :data="tableData" stripe style="width: 88%" class="yimiao1">
    <el-table-column prop="id"  label="序号" width="80"> </el-table-column>
    <el-table-column prop="name"  label="名称"  width="200"></el-table-column>
    <el-table-column prop="amend" label="编辑" width="100"></el-table-column>
    <el-table-column prop="del" label="删除" width="100"></el-table-column>
  </el-table>
    <!-- 二类疫苗 -->
    <el-table :data="tableData2" stripe style="width: 88%" class="yimiao2">
    <el-table-column  prop="id2" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="name2" label="名称" width="200"> </el-table-column>
    <el-table-column  prop="amend2" label="编辑" width="10"> </el-table-column>
    <el-table-column prop="del2" label="删除" width="100"> </el-table-column>
  </el-table>
 <!-- 机构管理 -->
    <el-table :data="jigou" stripe style="width: 88%" class="jigou">
    <el-table-column  prop="hid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="dyhname" label="医生用户名" width="120"> </el-table-column>
    <el-table-column prop="did" label="医生ID" width="100"> </el-table-column>
    <el-table-column prop="dpsw" label="密码" width="100"> </el-table-column>
    <el-table-column prop="dname" label="姓名" width="100"> </el-table-column>
    <el-table-column prop="dsex" label="性别" width="100"> </el-table-column>
    <el-table-column prop="dborth" label="出生年月日" width="150"> </el-table-column>
    <el-table-column prop="hbodyid" label="身份证号" width="150"> </el-table-column>
    <el-table-column prop="htel" label="联系电话" width="120"> </el-table-column>
    <el-table-column prop="hwork" label="工作单位" width="180"> </el-table-column>
    <el-table-column prop="hplace" label="科室" width="120"> </el-table-column>
    <el-table-column prop="hjob" label="职务" width="100"> </el-table-column>
    <el-table-column  prop="hamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="hdel" label="删除" width="100"> </el-table-column>
  </el-table>
    <!-- 用户管理 -->
    <el-table :data="user" stripe style="width: 88%" class="user" >
    <el-table-column  prop="uid" label="序号"  width="80" > </el-table-column>
    <el-table-column prop="userid" label="用户id" width="120"> </el-table-column>
    <el-table-column prop="username" label="用户名" width="100"> </el-table-column>
    <el-table-column prop="upsw" label="用户密码" width="100"> </el-table-column>
    <el-table-column prop="uname" label="用户姓名" width="100"> </el-table-column>
    <el-table-column prop="usex" label="用户性别" width="100"> </el-table-column>
    <el-table-column prop="uborth" label="出生年月日" width="150"> </el-table-column>
    <el-table-column prop="ubodyid" label="身份证号" width="150"> </el-table-column>
    <el-table-column prop="utel" label="联系电话" width="120"> </el-table-column>
    <el-table-column prop="uadd" label="家庭地址" width="180"> </el-table-column>
    <el-table-column prop="ujie" label="接种记录" width="120"> </el-table-column>
    <el-table-column  prop="uamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="udel" label="删除" width="100"> </el-table-column>
  </el-table>
   <!-- 内容管理文章 -->
    <el-table :data="art" stripe style="width: 88%" class="art">
    <el-table-column  prop="aid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="aname" label="文章名称" width="200"> </el-table-column>
    <el-table-column  prop="aamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="adel" label="删除" width="100"> </el-table-column>
  </el-table>
  <!-- 内容管理视频 -->
    <el-table :data="video" stripe style="width: 88%" class="video">
    <el-table-column  prop="vid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="vname" label="文章名称" width="200"> </el-table-column>
    <el-table-column  prop="vamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="vdel" label="删除" width="100"> </el-table-column>
  </el-table>
  <!-- 预约记录 -->
    <el-table :data="app" stripe style="width: 88%" class="app">
    <el-table-column  prop="appid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="appname" label="预约记录" width="200"> </el-table-column>
    <el-table-column  prop="appamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="appdel" label="删除" width="100"> </el-table-column>
  </el-table>
   <!-- 接种记录 -->
    <el-table :data="vac" stripe style="width: 88%" class="vac">
    <el-table-column  prop="vacid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="vacname" label="接种记录" width="200"> </el-table-column>
    <el-table-column  prop="vacamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="vacdel" label="删除" width="100"> </el-table-column>
  </el-table>
   <!-- 电子管理书 -->
    <el-table :data="elebook" stripe style="width: 88%" class="elebook">
    <el-table-column  prop="eleid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="elename" label="接种记录" width="200"> </el-table-column>
    <el-table-column  prop="eleamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="eledel" label="删除" width="100"> </el-table-column>
  </el-table>
   <!-- 电子管理视频 -->
    <el-table :data="elevideo" stripe style="width: 88%" class="elevideo">
    <el-table-column  prop="evid" label="序号"  width="80"> </el-table-column>
    <el-table-column prop="evname" label="接种记录" width="200"> </el-table-column>
    <el-table-column  prop="evamend" label="编辑" width="100"> </el-table-column>
    <el-table-column prop="evdel" label="删除" width="100"> </el-table-column>
  </el-table>
</div>
</template>
<script>
 export default {
     data() {
      return {
        tableData: [{
          id: '1',
          name: '乙肝疫苗',
          amend: '编辑',
          del: '删除'
        }],
         tableData2: [{
          id2: '1',
          name2: '二类疫苗',
          amend2: '编辑',
          del2: '删除'
        }],
         jigou: [{
          hid: '1',
          dyhname: '医生用户名',
          did: '医生id',
          dpsw: '密码',
          dname: '医生姓名',
          dsex: '性别',
          dborth: '出生年月日',
          hbodyid: '身份证号',
          htel: '联系电话',
          hwork: '工作单位',
          hplace: '科室',
          hjob: '职务',
          hamend: '编辑',
          hdel: '删除'
        }],
        //  user: [{
        //   uid: '1',
        //   userid: '用户id',
        //   username: '用户名',
        //   upsw: '用户密码',
        //   uname: '',
        //   usex: '用户性别',
        //   uborth: '出生年月日',
        //   ubodyid: '身份证号',
        //   utel: '联系电话',
        //   uadd: '家庭住址',
        //   ujie: '接种记录',
        //   uamend: '编辑',
        //   udel: '删除'
        // }],
         user: [{ 
           ubodyid: '',
           utel: '',
         }],
         art: [{
          aid: '1',
          aname: '文章名称',
          aamend: '编辑',
          adel: '删除'
        }],
        video: [{
          vid: '1',
          vname: '文章名称',
          vamend: '编辑',
          vdel: '删除'
        }],
        app: [{
          appid: '1',
          appname: '预约记录',
          appamend: '编辑',
          appdel: '删除'
        }],
        vac: [{
          vacid: '1',
          vacname: '接种记录',
          vacamend: '编辑',
          vacdel: '删除'
        }],
         elebook: [{
          eleid: '1',
          elename: '电子告知书',
          eleamend: '编辑',
          eledel: '删除'
        }],
         elevideo: [{
          evid: '1',
          evname: '电子告知视频',
          evamend: '编辑',
          evdel: '删除'
        }]
      }
    },
    methods: {
    jump(){
      var that=this;
        this.$axios.post('/dfy/user/findAllUser').then(res=>{
            console.log(res.data)
            this.user=res.data
        })
    }
    }
  }
</script>
<style scoped>
.tac{
    width: 12em;
    height: 30em;
    float: left;
}
.el-table-column{
    border:1px solid black;
}
.yimiao1{
    display:none;
}
.yimiao2{
    display: none;
}
.jigou{
    display: none;
}
.user{
    display: block;
}
.art{
    display: none;
}
.video{
    display: none;
}
.app{
    display: none;
}
.vac{
    display: none;
}
.elebook{
    display: none;
}
.elevideo{
    display: none;
}
</style>