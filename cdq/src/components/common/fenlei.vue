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
                    <li style="border-top:none">犬主粮</li>
                    <li>猫主粮</li>
                    <li>宠物零食</li>
                    <li>保健品</li>
                    <li>美容清洁</li>
                    <li>用品玩具</li>
                    <!-- 背景铺满剩下的地方 -->
                    <li style="height:1000px;background:white;display:block;"></li>
                </ul>
                 
            </div>
            <!-- 右侧分类选项 -->
            <div class="zanwei">
                <div class="r-fenlei " style="width:98%;">
                    <img class="w-100" src="../img/fenlei/1.jpg" alt="">
                    <mt-button class="btn w-100" type="danger">进入犬粮频道</mt-button>
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
    </div>
</template>
<script>
export default {
    data(){
        return{
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
    }
}
</script>
<style scoped>
    .zanwei{
       padding-left:80px;
       margin-right:10px;
    }
    .cheng{
        height:65px;
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
    }
    .pingpai_1{
        width:33.33%;
        text-align: center;
        margin-top: 20px;
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
        display: flex;
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
        border-bottom:1px solid #999;;
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