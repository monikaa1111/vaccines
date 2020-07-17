<template>
<div class="container full">
    <div class="content ">
    <div>
        <van-sticky>
            <!-- 导航栏 -->
            <van-nav-bar
                title="我要报修"
                left-text="返回"
                left-arrow
                right-text="维修列表"
                @click-left="onClickLeft"
                @click-right="onClickRight"
                class="wybx"
            />
        </van-sticky>
        <!-- 内容 -->
        
           <van-form validate-first >
            <!-- 通过 pattern 进行正则校验 -->
            <div class="nr">
            <van-field
                v-model="value1"
                label="小区名字"
                name="xqname"
                clearable
                placeholder="例如：xx小区"
                :rules="[{ required: true, message: '请输入正确内容'}]"
            />
            <van-field
                v-model="value2"
                label="报修房号"
                name="fmname"
                clearable
                placeholder="例如：xx栋xx楼xx号"
                :rules="[{ required: true, message: '请输入正确内容' }]"
            />
            <van-field
                v-model="value3"
                label="维修区域"
                name="wxname"
                clearable
                placeholder="例如：厨房洗菜池"
                :rules="[{ required: true, message: '请输入正确内容' }]"
            />
            <van-field
                readonly
                clickable
                name="calendar"
                :value="value"
                label="预约时间"
                placeholder="点击选择日期"
                @click="showCalendar = true"
            />
            <van-calendar v-model="showCalendar" @confirm="onConfirm" />
            
            
        </div>
        <div class="nr">
        
            <van-field v-model="text" label="联系人" placeholder="请输入联系人"
            name="lxname"
            clearable
            :rules="[{ required: true, message: '请输入正确内容' }]"
            />
            <van-field v-model="tel"  type="tel" label="联系电话" 
              placeholder="请输入联系人手机号" 
              clearable
              name="telname"
             :rules="[
                    { required: true, message: '请填写您的手机号码！' },
                    { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
                ]"
            />

        </div>
        <!-- 描述问题 -->
        <div class="nr ms">
            <p class="quest">请描述您遇到的问题</p>
            <van-field
                v-model="message"
                rows="1"
                name="wtname"
                label="留言"
                type="textarea"
                placeholder="请简单描述故障问题"
                maxlength='100'
                show-word-limit
                 
                :rules="[
                    { required: true, message: '请填写您遇到的问题！' }
                ]"
            />
        </div>
        <!-- 上传文件 -->
        <div class="nr ms">
            <p class="quest">上传文件<i class="dx">限制上传大小（3M）</i></p>
            <van-uploader v-model="fileList" multiple :max-count="3" :max-size="3 * 1024 * 1024" upload-text='上传文件' class="sctp" :after-read="afterread"/>
        </div>
        <!-- 提交按钮 -->
        <div style="margin: 16px;">
                <van-button round block type="info" @click="sub()">
                    提交
                </van-button>
        </div>
        </van-form>
            </div>
        </div>
    </div>  
</template>

<script>
    import { Toast } from 'vant'
    import Tabnav from "@/components/Tabnav.vue";
    import { mapActions, mapState, mapGetters } from "vuex";
    import axios from "axios";
    import Qs from 'qs'
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: '',
                text:'',
                tel:'',
                message:'',
                fileList: [],
                value: '',
                showCalendar: false,
            }
        },
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight(){
                this.$router.push('/liebiao')
            },
           onConfirm(date) {
                this.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                this.showCalendar = false;
            },
            sub(){
                console.log(this.value1)
                console.log(this.value2)
                console.log(this.value3)
                console.log(this.text)
                console.log(this.tel)
                console.log(this.value);
                console.log(this.message);
                console.log(this.fileList)
                if(this.value1==''||this.value2==''||this.value3==''||this.text==''||this.tel==''||this.value==''||this.message==''||this.fileList==''){
                    Toast.fail('请完善以上内容');
                }else{
                    this.getdata()
                }
            },
            // 传参
            getdata(){

                let gs={
                    xqname:this.value1,//小区名称
                    fjno:this.value2,//房间号
                    yydate:this.value,//预约时间
                    region:this.value3,//区域
                    lxr:this.text,//联系人
                    lxrtel:this.tel,//联系电话
                    wtms:this.message,//故障
                    wtpic:this.fileList.join()//图片
                }
                axios({
                    method: 'post',
                    url: '/wy/weixiu/addphone',
                    data: Qs.stringify(gs)
                })
                .then(res=>{
                    console.log(res)
                    if(res.data.code!==0){
                        Toast.fail('信息提交失败');
                    }else{
                        Toast.success('信息提交成功');
                    }
                })
            },
            //上传图片
            afterread(item){
                var vm=this
                window.lrz(item.file,{
                    before:function(){},
                    fail:function(err){},
                    always:function(){},
                    whidth:400
                },function(con){
                    let data={
                        imgbase64:con.base64
                    }
                    axios({
                        method:'post',
                        url:'/common/uploadfile/baseimg',
                        data:Qs.stringify(data)
                    }).then(two=>{
                        console.log(two)
                        console.log(two.data.data.imgurl)
                        vm.fileList=two.data.data.imgurl
                       
                        console.log(vm.fileList)
                    })
                }
               
                )},
        },
    }
</script>

<style lang="scss" scoped>
    .wybx{
        line-height: 3rem;
    }
    .nr{
        overflow: hidden;
        border-bottom:5px solid #cccccc ;
    }
    .ms{
        margin-top: 1rem;
        .dx{
            font-size: 0.3rem;
            margin-left: 0.8rem;
            color: #cccccc;
        }
        .sctp{
            margin-left:0.8rem ;
        }
    }
    .quest{
        font-size: 14px;
        margin-left: 1rem;
        margin-bottom: 0.5rem;
    }
</style>