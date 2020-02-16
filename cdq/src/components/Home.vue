<template>
<div>
    <!-- <search v-show="currentIndex[4].iSelect==true"></search> -->
    <!-- 切换面板 -->
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
            <headerI></headerI>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
            <fenlei></fenlei>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
            <cart></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab4">
            <wode></wode>
        </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部切换按钮 -->
    <mt-tabbar class="fixed" v-model="active">
        <mt-tab-item id="tab1"  @click.native="changeState(0)"  >
                <img slot="icon"  :class="currentIndex[0].iSelect?'img_1':'img_none'" :src="currentIndex[0].iSelect?require('./img/footer/s1.png'):require('./img/footer/1.png')">
                首页
        </mt-tab-item>
        <mt-tab-item id="tab2" @click.native="changeState(1),jianche()">
            <img slot="icon" :src="currentIndex[1].iSelect?require('./img/footer/s2.png'):require('./img/footer/2.png')">
            产品分类
        </mt-tab-item>
        <mt-tab-item id="tab3" @click.native="changeState(2),jianche()">
            <img slot="icon" :src="currentIndex[2].iSelect?require('./img/footer/s3.png'):require('./img/footer/3.png')">
            购物车
        </mt-tab-item>
        <mt-tab-item id="tab4" @click.native="changeState(3),jianche()">
            <img slot="icon" :src="currentIndex[3].iSelect?require('./img/footer/s4.png'):require('./img/footer/4.png')">
            我的
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>
<script>
// 引入header组件
import header from "@/components/common/header.vue"
// 引入fenlei组件
import fenlei from "@/components/common/fenlei.vue"
// 引入cart组件
import cart from "@/components/common/cart.vue"
// 引入header组件
import wode from "@/components/common/wode.vue"
// // 引入search组件
// import search from "@/components/common/search.vue"
export default {
    components:{
       'headerI':header,
       "fenlei":fenlei,
       "cart":cart,
       "wode":wode,
    //    "search":search
    },
    data(){
        return{
            active:"tab1",//面板id
            //创建数组保存tabbar
            //图片状态
            currentIndex:[
                {iSelect:true},
                {iSelect:false},
                {iSelect:false},
                {iSelect:false},
                // {iSelect:false},
            ]
            
        }
    },
    methods:{
        jianche(){
            var url="jianche"
             this.axios.get(url).then(res=>{
                if(res.data==-1){
                        this.$router.push("/login")
                        console.log(res.data)
                    }
            })
        },
       changeState(i){
            console.log(this.currentIndex[i].iSelect)
            for(var a=0; a<this.currentIndex.length; a++){
                if(i==a){
                    this.currentIndex[a].iSelect=true
                }else{
                    this.currentIndex[a].iSelect=false
                }               
            }
        },

    }
}
</script>
<style scoped>

    .fixed{
        position:fixed;
        z-index:2;
        bottom:0;
    }
    .img_1{
        background: #f56456;
        border-radius: 50%;
        width:25px;
        height:auto;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        background: none;
        color:#f56456;
    }
    .mint-tabbar{
        background:white;
    }
</style>

