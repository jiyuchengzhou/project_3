<template>
    <div>
        <!-- 上面搜索框 -->
        <div class="top">
            <!-- 分类按键 -->
            <div class="caidan">
                <img src="../img/caidan.png" style="width:25px;height:25px;"  alt=""><br>
                <span>分类</span>
            </div>
            <!-- 搜索框 -->
            <div style="width:100% ;padding-right:20px;padding-left:6px;">
                <img id="fdj" src="../img/fdj.png" alt="">
                <input id="shousuo" type="text" placeholder="搜索商品/店铺">
            </div>
            <div class="xioaxi">
                <img src="../img/xiaoxi.png"  alt=""><br>
                <span>消息</span>
            </div>
        </div>
        <div style="height:50px;width:100%"></div>
        <!-- 主体区域 -->
        <div>
            <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/gonggao.jpg" alt=""></a>
            </div>
            <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/01.png" alt=""></a>
            </div>
            <!-- 三张图片组合 -->
            <div>
                  
                <div style="width:50% ;float:left">
                    <a href="">
                        <img style="width:100%;height:auto;" src="../img/souye/02.webp" alt="">
                    </a>
                </div>
                <div style="width:50%;float:left">
                    <a href="">
                        <img style="width:100%;height:auto;" src="../img/souye/03.webp" alt="">
                    </a>
                    <a href="">
                        <img style="width:100%;height:auto;" src="../img/souye/04.webp" alt="">
                    </a>
                </div>
                <div>
                    <a href=""><img style="width:100%;height:auto;" src="../img/souye/05.png" alt=""></a>
                </div>
                <div>
                    <a href=""><img style="width:100%;height:auto;" src="../img/souye/06.jpg" alt=""></a>
                </div>
                <!-- 横向商品展示区 -->
                <div style="width:100%;height:auto;display:flex;flex-wrap:nowrap;overflow:auto;">
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                    <div style="width:30%;height:100px;background:red;margin:2px;flex-shrink:0"></div>
                </div>


            </div>

        </div>

    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* 消除图片间隙 */
    img {
        vertical-align:top;
    }
    #shousuo{
        width:100%;
        border:none;
        background:rgb(247, 131, 120);
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
        color:#fff;
        /* placeholder字体大小  */
        font-size: 14px;
        /* placeholder位置  */
        /* text-align: left; */
        position:relative;
        left:38px;
        top:-2px;
        
    }
    div .caidan{
        color:#fff;
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
        background:rgb(245, 100, 86);
        align-items: center;
        position:fixed;
    }
</style>

