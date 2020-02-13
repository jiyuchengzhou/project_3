<template>
    <div>
        <!-- 上面搜索框 -->
        <div class="top">
            <!-- 分类按键 -->
            <div class="caidan">
                <img src="../img/fenlei/xiaoyu.png" style="width:25px;height:25px;"  alt=""><br>
            </div>
            <!-- 搜索框 -->
            <div style="width:100% ;padding-right:20px;padding-left:6px;">
                <img id="fdj" src="../img/fenlei/fdj.png" alt="">
                <input id="shousuo" type="text" placeholder="请输入商品名称">
            </div>
            <div class="xioaxi">
                <img src="../img/fenlei/gd.png"  alt=""><br>
            </div>
        </div>
        <!-- 分类主体 -->
        <div class="page">
            <div>
                <!-- 左边分类列表 -->
                <ul>
                    <li style="border-top:none" :class="{'active':select_num==1}" @click="select(1)">犬主粮</li>
                    <li :class="{'active':select_num==2}" @click="select(2)">猫主粮</li>
                    <li :class="{'active':select_num==3}" @click="select(3)">宠物零食</li>
                    <li :class="{'active':select_num==4}" @click="select(4)">保健品</li>
                    <li :class="{'active':select_num==5}" @click="select(5)">美容清洁</li>
                    <li :class="{'active':select_num==6}" @click="select(6)">用品玩具</li>
                    <!-- 背景铺满剩下的地方 -->
                    <li class="pu"></li>
                </ul>
                 
            </div>
            <!--犬主粮 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==1">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/1.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 犬主粮
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        <!-- <ul style="width:100%;">
                            <li class="pu"></li>
                        </ul> -->
                    </div>
                    
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
            <!--猫主粮 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==2">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/2.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 猫主粮
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        

                    </div>
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
            <!--宠物零食 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==3">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/3.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 宠物零食
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        

                    </div>
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
            <!--保健品 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==4">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/4.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 保健品
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        

                    </div>
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
            <!--美容清洁 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==5">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/5.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 美容清洁
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        

                    </div>
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
            <!--用品玩具 右侧分类选项 -->
            <div class="zanwei" v-show="select_num==6">
                <div class="r-fenlei " style="width:100%;">
                    <img class="w-100" src="../img/fenlei/6.jpg" alt="">
                    <mt-button class="btn " type="danger">进入犬粮频道</mt-button>
                    <a class="clear_a m_t " href=""> 
                        <span> 
                            <b>按品牌分</b> 
                        </span> 
                        <img class="f_r" src="../img/fenlei/dy.png" alt=""> 
                    </a>
                    <!-- 品牌 -->
                    <div class="pingpai">
                        <!-- 循环生成 -->
                        <div class="pingpai_1" v-for="(item,i) in pingpai" :key="i">
                            <img class="logo" :src="item.src" alt="">
                            <div>
                                {{item.name}}
                            </div>
                        </div>
                        

                    </div>
                </div>
                 <!-- 撑开位置 -->
                <div class="cheng"></div>
            </div>
        
        
        </div>
        <div class="bottom_g"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            select_num:1,
            pingpai:[
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                {src:require('../img/fenlei/pingpai/QuanZL/logo1.webp'),name:"比瑞吉"},
                
                
            ]      
            
        }
    },
    methods:{
        // 分类切换
        select(i){
            this.select_num=i;
        }
    }
}
</script>
<style scoped>
    .bottom_g{
        height:10px;
        background: rgb(247, 248, 249);
        position: fixed;
        bottom: 55px;
        width:100%;
        z-index:100;
    }    
    .pu{
        height:1000px;
        background:white;
        display:block;
        width:100%;
    }
    .active{
        background:rgb(247, 248, 249); 
    }
    .zanwei{
       padding-left:80px;
       margin-right:20px;
    }
    .cheng{
        height:55px;
    }
    #shousuo{
            width:100%;
            border:none;
            background:rgb(247, 248, 249);
            border-radius:20px;
            height:30px;
        }
    #fdj{
      position: absolute;
      top:14px;
      left:50px;
    }
    input::placeholder {
        /* placeholder颜色  */
        color:#666;
        /* placeholder字体大小  */
        font-size: 14px;
        /* placeholder位置  */
        /* text-align: left; */
        position:relative;
        left:38px;
        top:-2px;
        
    }
    div .caidan{
        color:#666;
        font-size: 12px;
        margin-top: 4px;
        margin-left: 8px;
    }
    div .xioaxi{
        color:#fff;
        font-size: 12px;
        margin-top: 4px;
        margin-left: -8px;
        width:50px;
        
    }
    div .top{
        display: flex;
        height:50px;
        width:100%;
        background:white;
        align-items: center;
        position:fixed;
        overflow: hidden;
        z-index: 3;
    }
    .pingpai_1{
        width:33.33%;
        text-align: center;
        margin-top: 20px;
        z-index: 1;
    }
    .pingpai{
        background: white;
        display: flex;
        flex-wrap: wrap;
    }
    .logo{
        width:55px;
    }
    .m_t{
        display: block;
        margin-top: 10px;
    }
    .f_r{
        float:right;
    }
    .clear_a{
        text-decoration:none;
        color:black;
    }
    .btn{
        width:100%;
        height:30px;
        background: #f56456;
        font-size: 12px;
        display: block;
        margin:0 auto;
        margin-top: 10px;
        z-index: 0;
    }
    .w-100{
        width:100%;
    }
    .r-fenlei{
        width:100%;
        overflow: hidden;
        padding: 10px;
    }
    .page{
        overflow: hidden;
        justify-content: space-between;
        background: rgb(247, 248, 249);
        padding-top: 50px;
    }
    ul{
        list-style: none;
        margin:0;
        padding:0;
        width:80px;
        position: fixed;
        margin-top: 2px;
    }
    ul>li{
        border-bottom:3px solid #f7f8f9;
        position: relative;
        width: 100%;
        padding: 15px 10px;
        font-size: 13px;
        line-height: 19px;
        color: #232326;
        cursor: pointer;
        background-color: #fff;
        box-sizing: border-box;
    }
</style>