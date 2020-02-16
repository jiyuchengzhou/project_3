<template>
    <div>
        <!-- 上面搜索框 -->
        <router-link :to="{path:'/search'}">
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
        </router-link>
        <div style="height:50px;width:100%"></div>
        <!-- 主体区域 -->
        <div>
            <!-- <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/gonggao.jpg" alt=""></a>
            </div> -->
            <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/01.png" alt=""></a>
            </div>
            <!-- 三张图片组合 -->       
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
            <!-- 低价处理区 -->
            <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/05.png" alt=""></a>
            </div>
            <div>
                <a href=""><img style="width:100%;height:auto;" src="../img/souye/06.jpg" alt=""></a>
            </div>
            <!-- 横向商品展示区 -->
            <div style="width:100%;height:auto;display:flex;flex-wrap:nowrap;overflow:auto;">
                <div style="width:27%;background:white;padding:5px;flex-shrink:0" v-for="(item,i) in products" :key=i>
                    <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
                         <img style="width:100%;height:auto;" :src="require('../'+item.src)" alt="">
                        <div style="color:black;height:38px;overflow:hidden;">{{item.intr}}</div>
                    </router-link>
                   
                    <div style="margin:10px 0;"> <span style="color:#f56456">¥</span> <span style="color:#f56456">{{item.price}}</span><span @click="addCart(item.id)" style="float:right;border:1px solid black;width:20px;height:20px;border-radius:50%;text-align:center;">+</span></div>
                </div>
                
                
                
               
            </div>
            <!-- 固定商品展示区 -->
            <!-- <div style="width:100%;height:100px;background:yellow;"></div> -->
            <!-- 爆品团购区 -->
            <div style="display:flex;flex-wrap:wrap;">
                <div style="width:100%;">
                    <img style="width:100%;height:auto;" src="../img/souye/07.png" alt="">
                </div>
                <div style="width:100%;">
                    <img style="width:50%;height:auto;" src="../img/souye/08.webp" alt="">
                    <img style="width:50%;height:auto;" src="../img/souye/09.webp" alt="">
                    <img style="width:50%;height:auto;" src="../img/souye/10.webp" alt="">
                    <img style="width:50%;height:auto;" src="../img/souye/11.webp" alt="">
                    <img style="width:50%;height:auto;" src="../img/souye/12.webp" alt="">
                    <img style="width:50%;height:auto;" src="../img/souye/13.webp" alt="">
                </div>
            </div>
            <!-- 犬猫医疗保健品 -->
            <div style="width:100%">
                 <img style="width:100%;height:auto;" src="../img/souye/14.png" alt="">
                 <img style="width:100%;height:auto;" src="../img/souye/15.png" alt="">
            </div>
            <div style="width:100%;">
                <img style="width:50%;height:auto;" src="../img/souye/17.webp" alt="">
                <img style="width:50%;height:auto;" src="../img/souye/17.webp" alt="">
                <img style="width:50%;height:auto;" src="../img/souye/18.webp" alt="">
                <img style="width:50%;height:auto;" src="../img/souye/19.webp" alt="">
                <img style="width:50%;height:auto;" src="../img/souye/20.webp" alt="">
                <img style="width:50%;height:auto;" src="../img/souye/21.webp" alt="">
            </div>
            <!-- 犬猫美味零食 -->
            <div style="width:100%">
                <img style="width:100%;height:auto" src="../img/souye/22.png" alt="">
            </div>
            <div style="width:100%;">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/23.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/24.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/25.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/26.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/27.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/28.webp" alt="">
            </div>
            <!-- 犬猫日常用品 -->
            <div style="width:100%">
                <img style="width:100%;height:auto" src="../img/souye/29.png" alt="">
            </div>
            <div style="width:100%;">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/30.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/31.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/32.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/33.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/34.webp" alt="">
                <img style="width:33.33333333%;height:auto;justify-content:center;" src="../img/souye/35.webp" alt="">
            </div>
            <!-- 双拼粮犬猫更爱吃 -->
            <h2 style="width:100%;font-size: 16px;height: 2rem;line-height: 2rem;font-weight: bold;color: #353535;text-align: center;position: relative;"><span>双拼粮犬猫更爱吃</span></h2>
            <div style="width:100%;">
                <img style="width:100%;height:auto" src="../img/souye/36.jpg" alt="">
            </div>
            <div style="width:100%;">
                <img style="width:100%;height:auto" src="../img/souye/37.jpg" alt="">
            </div>
            <!-- 横向商品展示区 -->
            <div style="width:100%;height:auto;display:flex;flex-wrap:nowrap;overflow:auto;">
                <div style="width:27%;background:white;padding:5px;flex-shrink:0" v-for="(item,i) in products" :key=i>
                    <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
                         <img style="width:100%;height:auto;" :src="item.src" alt="">
                        <div style="color:black;">{{item.intr}}</div>
                    </router-link>
                   
                    <div> <span style="color:#f56456">¥</span> <span style="color:#f56456">{{item.price}}</span><span style="float:right;border:1px solid black;width:20px;height:20px;border-radius:50%;text-align:center;">+</span></div>
                </div>
            </div>
            
        </div>
        <!-- 撑开位置 -->
        <div class="cheng"></div>
    </div>    
</template>
<script>
export default {
   data(){
       return{
        //    products:[
        //        {id:1,src:'img/souye/ex.jpg',intr:"特价促销  诺瑞犬用羊乳钙片110g 220片 通用型幼犬怀孕狗 补钙",price:30,},
               
        //    ]
        products:[]
       }
   },
   methods:{
        addCart(i){

            var id=i
            var url="details";
            var obj={id}
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res.data) 
                var obj2=res.data[0] 
                console.log(obj2)
                var url='addcart'
                this.axios.get(url,{params:obj2}).then(res=>{
                    if(res.data==-1){
                        this.$router.push("/login")
                    }
                    console.log(res.data)
                }) 
            })   
        }
   },
   created:function(){
            var url="index";
            this.axios.get(url).then(res=>{
                console.log(res)
                this.products=res.data
            })
   }


}
</script>
<style scoped>
    .cheng{
        height:65px;
    }
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

