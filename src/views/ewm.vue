<template>
    <div class="login_div">
       <p style=" text-align: center">我的二维码</p>
      <img :src="this.ewm" style="margin-left:10%">
    </div>
</template>
<script>
import QRCode from "qrcodejs2"; 
    import wx from 'weixin-js-sdk'
    import $ from 'jquery'
    export default {
        data(){
            return {
                ewm:'',
                numberid:this.numberid,
                
            }
        },
    methods : {
  getEwm:function(){
      this.$axios.post("http://152.136.232.95:8089/createCommonQRCode?url=http://www.sheltermedia.cn/haoyisheng/hao/first.html?numberid="+ this.numberid,{ 'responseType': 'blob' }).then(res=>{
 

this.ewm="http://152.136.232.95:8089/createCommonQRCode?url=http://www.sheltermedia.cn/hao/t.html?nu="+ this.numberid;
      })


  }
    },
    created(){
         this.numberid=this.$route.query.numberid;
        

        this.getEwm();
      
     
          
        }
       
    }
</script>

<style >

</style>