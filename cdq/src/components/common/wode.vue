<template>
    <div>
        <!-- 顶部 -->
        <div class="bg-red">
            <div>
                <img class="first_img" src="../img/wode/set.png" alt="">
                <img class="first_img" src="../img/wode/message.png" alt="">
            </div>
            <div class="user">
                <img class="user_img" src="../img/wode/user.png" alt="">
                <div class="user_name">
                    <div>username</div>
                    <div class="zhuche">注册会员</div>
                </div>
            </div>
            <!-- 顶部最后一排 -->
            <div class="top_last">
                <div class="t-center">
                    <div>0</div>
                    <div>收藏商品</div>
                </div>
                <div class="t-center">
                    <div>1</div>
                    <div>关注店铺</div>
                </div>
                <div class="t-center" >
                    <div>2</div>
                    <div>足迹</div>
                </div>
                <div class="t-center">
                    <div>3</div>
                    <div>我的评价</div>
                </div>
            </div>
        </div>
        <div class="group">
        <!-- 第一个框内的内容 -->
            <div class="first_group" >
                <div class="zican"> <b>我的资产</b> </div>
                <div class="zican_1">
                    <div class="zican_geshi">
                        <div>
                            <span>0</span> <span>元</span>
                        </div>
                        <div>余额</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <span>0</span>
                        </div>
                        <div>红包</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <span>0</span> 
                        </div>
                        <div>积分</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <img src="../img/wode/ewm.png" alt="">
                        </div>
                        <div>余额</div>
                    </div>
                    <!-- 第二排 -->
                    <div class="zican_geshi">
                        <div>
                            <img src="../img/wode/huangguan.png" alt="">
                        </div>
                        <div>我的权益</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <img src="../img/wode/chuzhika.png" alt="">
                        </div>
                        <div>我的储值卡</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <img src="../img/wode/gwk.png" alt="">
                        </div>
                        <div>我的购物卡</div>
                    </div>
                    <div class="zican_geshi">
                        <div>
                            <img src="../img/wode/thq.png" alt="">
                        </div>
                        <div>提货券</div>
                    </div>
                </div>
            </div> 
            <!-- 第二个框的内容 -->
             <div class="first_group" >
                <div class="zican"> <b>我的订单</b> </div>
                <div class="zican_1">
                    <div class="dd_geshi">
                        <div>
                            <img src="../img/wode/dfk.png" alt="">
                        </div>
                        <div>待付款</div>
                    </div>
                    <div class="dd_geshi">
                        <div>
                            <img src="../img/wode/dfh.png" alt="">
                        </div>
                        <div>待发货</div>
                    </div>
                    <div class="dd_geshi">
                        <div>
                            <img src="../img/wode/dsh.png" alt="">
                        </div>
                        <div>待收货</div>
                    </div>
                    <div class="dd_geshi">
                        <div>
                            <img src="../img/wode/dpj.png" alt="">
                        </div>
                        <div>待评价</div>
                    </div>
                    <div class="dd_geshi">
                        <div>
                            <img src="../img/wode/tk.png" alt="">
                        </div>
                        <div>退款/售后</div>
                    </div>
                </div>
            </div>
        <!-- 退出登录按钮 -->
        <mt-button @click="exit()" class="btn">退出登录</mt-button>

        </div>
        <!-- 背景铺满剩下的地方 -->
        <div style="width:100%;height:100%;background:rgb(242, 242, 242);position:fixed;"></div>
        <!-- 撑开位置 -->
        <div class="cheng"></div>
    </div>
</template>
<script>
export default {
    methods:{
        exit(){
            var url="exit"
             this.axios.get(url).then(res=>{
                 if(res.data==1){
                     this.$router.push("/login")
                 }
            })
        }
    }
    
}
</script>
<style scoped>
    .cheng{
        height:65px;
    }
    .btn{
        width:90%;
        display: block;
        margin:0 auto;
        margin-top:20px;
        background: white;
    }
    .dd_geshi{
        text-align: center;
        width:20%;
        margin-top: 20px;
    }
    .zican_geshi{
        text-align: center;
        width:25%;
        margin-top: 20px;
    }
    .zican_1{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size:14px;
    }
    .zican{
        border-bottom: 1px solid rgb(242, 242, 242);
        height:40px;
        line-height: 40px;
        margin-left:15px;
          
    }
    .first_group{
        width:90%;
        background: white;
        margin:0 auto;
        margin-top: 20px;
        border-radius: 20px;
        padding:10px;  
    }
    .group{
        background:rgb(242, 242, 242);
        overflow: hidden;
    }
    .t-center{
        text-align: center;
    }
    .top_last{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        font-size: 15px;
        margin-bottom: 20px;
    }
    .zhuche{
        font-size: 14px;
        background: rgb(206, 41, 41);
        border:1px solid transparent;
        border-radius: 8px;
        text-align: center;
        width:100px;
    }
    .user_name{
        margin-left: 30px;
        font-size: 25px;
    }
    .user{
        display: flex;
        margin-top: 35px;
    }
    .user_img{
        width:48px;
        height:48px;
        border-radius: 24px;
    }
    .first_img{
        width:20px;
        float: right;
        margin-left: 15px;
    }
    .bg-red{
        padding:15px;
        color:white;
        background: url("../img/wode/bg.png") no-repeat #f23030;
        background-size: 100% auto;
        background-position: center top;
    }

</style>