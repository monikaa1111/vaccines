<!--  -->
<template>
<div class=''>
    <van-nav-bar
        title="疫苗详细类别"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft()"
    />
    <div>
        <p style="text-align:center">免费的一类疫苗</p>
        <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />

    </div>
    <div>
        <p style="text-align:center">以下为收费的二类疫苗</p>
         <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />
        <van-cell center title="单元格" value="预约" label="描述信息" />
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
<style  scoped>

</style>