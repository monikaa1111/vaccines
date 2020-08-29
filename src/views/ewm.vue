<template>
    <div class="login_div">
       <p style=" text-align: center">我的二维码</p>
       <img src="http://152.136.232.95:8089/createCommonQRCode?url=http://www.baidu.com,{{ewm}}" class='addImg' >
    </div>
</template>
<script>
import QRCode from "qrcodejs2"; 
    import wx from 'weixin-js-sdk'
    import $ from 'jquery'
    export default {
        data(){
            return {
                ewm:''
            }
        },
    methods : {


    },
    created(){
         this.numberid=this.$route.query.numberid;
             console.log(this.numberid);
       
        this.$axios.post("http://152.136.232.95:8089/createCommonQRCode?url=http://www.sheltermedia.cn/haoyisheng/hao/first.html?numberid="+this.numberid).then(res=>{
             console.log(res)
             this.ewm=res.data
        })
        
          
        }
}
</script>
<style >

</style>