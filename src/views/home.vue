<!--  -->
<template>
  <div class>
    <top></top>
    <van-nav-bar title="疫苗知识" />
    <div>
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="item in banner.length" :key="item" style="height:200px">
          <img :src="banner[item-1]" style="width:100%;height:100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs v-model="active">
      <van-tab title="视频资料">
        <div class="tab-panel">
          <div class="tab-panel-item tab-active" id="aa">
            <a href="spxq.html" class="aui-flex b-line">
              <div class="aui-flex-box">
                <h2>新生儿乙肝疫苗、卡介苗接种与管理</h2>
              </div>
              <div class="aui-science-user">
                <img src="img/CDC.png" alt />
                <span class="aui-science-hot">必学</span>
              </div>
            </a>
          </div>
        </div>
      </van-tab>
      <van-tab title="文章资料">
        <div class="tab-panel">
         <div class="tab-panel-item tab-active" id="bb">
            <a href="spxq.html" class="aui-flex b-line">
              <div class="aui-flex-box">
                <h2>新生儿乙肝疫苗、卡介苗接种与管理</h2>
              </div>
              <div class="aui-science-user">
                <img src="img/CDC.png" alt />
                <span class="aui-science-hot">必学</span>
              </div>
            </a>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import top from "@/components/top";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    top
  },
  data() {
    return {
      message: [],
      banner: [
        require("../assets/t1.png"),
        require("../assets/t1.png"),
        require("../assets/t1.png")
      ],
      active: 2
    };
  },
  methods: {
    jump(index) {
      this.$router.push("/classification?vname=" + this.message[index].vname);
    }
  },
  created() {
    this.$axios
      .post("http://152.136.232.95:8089/vaccines/findAllVaccines")
      .then(res => {
        console.log(res);
        this.message = res.data;
        console.log(this.message);
      });
  }
};
</script>
<style  scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.box {
  width: 46%;
  height: 12em;
  /* border:1px solid black;  */
  float: left;
  margin-left: 2.3%;
  box-shadow: 1px 1px 2px #bebebe;
  margin-top: 10px;
}
.box1 {
  width: 46%;
  height: 12em;
  /* border:1px solid black;  */
  float: left;
  margin-left: 2.3%;
  /* box-shadow: 1px 1px 2px #bebebe; */
  margin-top: 10px;
}
.image {
  width: 100%;
  height: 6em;
}
/*
<!--

* 17素材vip建站专区模块代码
* 详尽信息请看官网：http://www.17sucai.com/pins/vip
*
* Copyright , 温州易站网络科技有限公司版权所有
*
* 请尊重原创，未经允许请勿转载。
* 在保留版权的前提下可应用于个人或商业用途

-->
*/

html,
body {
  color: #333;
  margin: 0;
  height: 100%;
  font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
}

a,
label,
button,
input,
select {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  border: 0;
}

body {
  background: #fff;
  color: #666;
}

html,
body,
div,
dl,
dt,
dd,
ol,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
button,
fieldset,
form,
input,
legend,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #08acee;
}

button {
  outline: 0;
}

img {
  border: 0;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
  outline: none;
}

li {
  list-style: none;
}

a {
  color: #666;
}

.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.clearfix {
}

.divHeight {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.r-line {
  position: relative;
}

.r-line:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #d9d9d9;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.b-line {
  position: relative;
}

.b-line:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 15px;
  width: 92%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.aui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 15px;
  position: relative;
}

.aui-flex-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}

/* 必要布局样式css */

.aui-flexView {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.aui-scrollView {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-top: 0;
}

.aui-navBar {
  height: 44px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1002;
  background: #fff;
}

.aui-navBar-item {
  height: 44px;
  min-width: 25%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  padding: 0 0.9rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  color: #808080;
  position: relative;
}

.aui-navBar-item:first-child {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  margin-right: -35%;
  font-size: 0.9rem;
  font-weight: bold;
}

.aui-navBar-item:last-child {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.aui-center {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 44px;
  width: 50%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  color: #333;
  font-weight: bold;
}

.icon {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
}

.icon-return {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACiUlEQVRoQ93b0VHDMAwGYHUC2AA2gBHKBMAE0AlQJ4ANEBNQJoANYATYgBFgA+6/c+5yvbi2FdlWyGuTNJ+lqLaSrmghGzOfE9ErEZ0SkYjIVnPpK81BrY9h5nXAHo+++1pE3kqvxT2YmW+J6HkC9iIi+Kxocw0+gAVyIyK7Ii0RuQUnsKroYnBcgmthXYJrYt2BmfmeiB4i96U6jcfnc5PSzIxKHKu6Jlg3EU5gn0SES6txbP/uEU5gVT89hwanK7g1tmtK98B2ATMz5sNYBGB+PLWZp3G3Kh2w70SElU9zbNMIJ7C/+EnSrH5Kq3eTopWBXYvIZ+nFa/avDvaErZ7S3rBVwaElgwI17lIMWYh7tlkaV6/SXrFVIpzAfhHRlYh8awqOxTGmRSsDizT+sbhw7TnMwEvAmqV0pI06BAFp3D2yw8XMjnCiJeMKOzvCS8POAtdutmmLUuo4VUqHexaTiqnNrP+UunjN51qwENHdxBe6xqpTmplj4J2IbDQj3+oYbYTRrYiltGu0CoxoJIoWHnJte8+qprJGDc5AY0F/4Q09C7xE9GxwQOOextP4o4k0chVpE3BAoxP54R1tBl4K2hSciUajvUmH0rxKxyYLYW0cS280AFC9u6DNIzwMQkCjkJ1MDEw3dDVwSG90LBHpMy/oqmCP6Opgb+gm4Ew0qnfxq4Slq6xm4Aw0dqn6bFi9Hi4d1fH+4XkTVlOXkfNURTeN8B4c6JvW6G7gkOLN0V3BPdDdwRlo9dvvzebSmqLGzIfS26xP5iLCo/k3XjF8jAyYCdoVOKNlNBvtDlwb7RJcE+0WnIFWzchcgxNo1XMs9+ADfbL/+UetvZYRfqvxVzxUa9Vb8n+GBkVMuJ45uQAAAABJRU5ErkJggg==");
}

.aui-flex-box h2 {
  color: #333333;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.aui-flex-box h3 {
  color: #727272;
  font-size: 0.8rem;
  font-weight: normal;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 0.3rem;
}

.aui-flex-box p {
  color: #999999;
  font-size: 0.8rem;
}

.aui-flex-box p em {
  color: #219c8b;
  font-style: normal;
  margin-right: 0.3rem;
}

.aui-flex-box p .aui-flex-info {
  color: #cccccc;
  text-decoration: line-through;
}

.aui-science-user {
  width: 100px;
  height: 100px;
  margin-left: 0.8rem;
  position: relative;
}

.aui-science-user img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: block;
  border: none;
}

.aui-science-hot {
  background: #f76260;
  font-size: 0.7rem;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.1rem 0.4rem;
}
/*
<!--

* 17素材vip建站专区模块代码
* 详尽信息请看官网：http://www.17sucai.com/pins/vip
*
* Copyright , 温州易站网络科技有限公司版权所有
*
* 请尊重原创，未经允许请勿转载。
* 在保留版权的前提下可应用于个人或商业用途

-->
*/
html,
body {
  color: #333;
  margin: 0;
  height: 100%;
  font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
}

a,
label,
button,
input,
select {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  border: 0;
}

body {
  background: #fff;
  color: #666;
}

html,
body,
div,
dl,
dt,
dd,
ol,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
button,
fieldset,
form,
input,
legend,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #08acee;
}

button {
  outline: 0;
}

img {
  border: 0;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
  outline: none;
}

li {
  list-style: none;
}

a {
  color: #666;
}

.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.clearfix {
}

.divHeight {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.r-line {
  position: relative;
}

.r-line:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #d9d9d9;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.b-line {
  position: relative;
}

.b-line:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.aui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 15px;
  position: relative;
}

.aui-flex-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}

/* 必要布局样式css */

.aui-flexView {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.aui-scrollView {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-top: 0;
}

.aui-navBar {
  height: 44px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1002;
  background: #f6f6f6;
}

.aui-navBar-item {
  height: 44px;
  min-width: 25%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  padding: 0 0.9rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  color: #808080;
  position: relative;
}

.aui-navBar-item:first-child {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  margin-right: -25%;
  font-size: 0.9rem;
  font-weight: bold;
}

.aui-navBar-item:last-child {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.aui-center {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 44px;
  width: 50%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  color: #333;
}

.icon {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
}

.icon-return {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABpUlEQVRoQ+Xb0U0DMQwGYHsCOkIZgQ1gg4zQbsAGwCSUDf4N6AYwAiOwgVGkVqoqKNdcYv9u7znW+ZN99+DIKgmeUsq9iDztUt0CeGlNW1sDveJKKStVfT18n5ltAKxbcqAG/4bdI83sDsDnuWha8ClsRZrZA4DtRYD/w+7AtwC+0oMnYtcANudi63mqlh6NpQJ7YGnAXlgKsCc2HOyNDQVHYMPAUdgQcCTWHRyNdQUzYN3ALFgXMBN2OJgNOxTMiB0GZsUOATNju4PZsV3BGbDdwFmwXcCZsLPB2bCzwBmxzeBSylJEPlR18deo1MyaR6kt49epMU1j2nq5parv2bBzKnx14KWq1ousm2xVbmrpiryqn9a+qhnRzRXOip4NztbeXcCZ0N3AWdBdwRnQ3cHs6CFgZvQwMCt6KJgRPRzMhnYBM6HdwCxoVzAD2h0cjQ4BR6LDwFHoUHAEOhzsjaYAe6JpwF5oKrAHmg48BW1m3yJSlzzyrwBMnYZe1JLHFPTFrfGcQpvZG4DV1BvDw3OU3/AxpJRSVPVRRBZmBgDPLdga8wOXCd5MGyWFyQAAAABJRU5ErkJggg==");
}

.icon-more {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACY0lEQVRoQ+2YMYsTQRTH35vsBhth/QIBS73IcQS1TR+WbJMPoAhXCYqVhWghYiVqJVpov5AZk08hmEPvjtNSk09wVmIm9yRFls1ukptsUszsvdRv/7zf+z2GmSBcsB9eMF5g4LIbZ8NsuGQT4JUumdAcDhtmwyWbAK90yYTyocUrzStdsgnwSpdMKJ/SvNLpHWi1Wlc8z6sj4i4RnQHAUbVaPYzj+LTI6tuQt9Bwp9OpjsfjF4j4KAtGRAQAr0aj0ePBYDA2AbcpLwcchuHVSqXyGRFvnAPznYgipdSvVXW25c0BN5tNLwiCAwPYGeOhlHIPAKbrnvvZmDcHHEXRM0R8arKmsxoieqKUer7oGxvzssB/EPHyOsAAcCqlDJYAW5eXAIdhuON53vGasLPy61LKH+lvN8nTWl/r9/s/t5UHAEl/CXC73b4nhPhQEPiulPJj+ttN8ojojlLq07byACDpLw28L4R4VwSYiPaVUu8zDVqZlwBHUXQLEb8UAZ5MJjd7vd7X9Le25iXAjUbDr9VqfwFArAl9NhwOL2UvIbbmZU/pt4h4fx1gInqtlHq45JQukvdGKfVgi3lz/c0BT6+AWusBANRNoInom+/7t+M4/reovkDeie/7e1vMy/W38GrpeZ4EgN1V0ER0JIQIu93u7/OuljblLX08aK1fAkBuVYs+HmzJW/kejqIoQMQ6EU3vy5qIjjd5HtqQx38AmBxWLtewYZftmfTOhk2m5HING3bZnknvbNhkSi7XsGGX7Zn0zoZNpuRyDRt22Z5J72zYZEou17Bhl+2Z9M6GTabkcs1/Nka/TGd1vC8AAAAASUVORK5CYII=");
}

.tab-nav {
  height: 45px;
  line-height: 45px;
  display: block;
  position: relative;
  background: #f2f2f2;
  z-index: 1;
  width: 100%;
}

.tab-nav-item {
  height: 45px;
  position: relative;
  text-align: center;
  color: #585858;
  font-size: 0.9rem;
  display: block;
  float: left;
  border-radius: 80px;
  width: 50%;
}

.tab-nav-item.tab-active {
  /* background-color: #51bd03; */
}

.tab-nav-item.tab-active a {
  color: #21b100;
}

.tab-nav-item a {
  display: inherit;
  font-size: 0.95rem;
  color: #888888;
}

.tab-panel {
  position: relative;
  overflow: hidden;
}

.tab-panel .tab-panel-item {
  width: 100%;
  position: absolute;
  top: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.tab-panel .tab-panel-item.tab-active ~ .tab-panel-item {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.tab-panel .tab-panel-item.tab-active {
  position: relative;
  -webkit-transition: -webkit-transform 0.15s;
  transition: -webkit-transform 0.15s;
  transition: transform 0.15s;
  transition: transform 0.15s, -webkit-transform 0.15s;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.m-slider {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.slider-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  z-index: 1;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.slider-item {
  width: 100%;
  height: 100%;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.slider-item img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.slider-pagination {
  text-align: right;
  position: absolute;
  width: 100%;
  z-index: 2;
  right: 0;
  bottom: 0.5rem;
  pointer-events: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.slider-pagination > .slider-pagination-item {
  margin: 0 0.25rem;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
  background-color: #ffffff;
  border-radius: 10px;
}

.aui-flex-img {
  width: 75px;
  height: 60px;
  margin-right: 10px;
}

.aui-flex-img img {
  width: 75px;
  height: 60px;
  display: block;
  border: none;
}

.aui-flex-box h2 {
  font-weight: normal;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 5px;
}

.aui-flex-box p {
  font-weight: normal;
  font-size: 0.95rem;
  color: #999999;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>