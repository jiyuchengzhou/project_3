<template>
  <div>
    <div class="bg_all">
      <div class="back_s" @click="back">
        <img class="img_back" src="../img/details/xiaoyu.png" alt />
      </div>
      <!-- 轮播图区域 -->
      <div class="_swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img :src="require('../'+products.src01)" class="swiper_img" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="require('../'+products.src02)" class="swiper_img" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="require('../'+products.src03)" class="swiper_img" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="require('../'+products.src04)" class="swiper_img" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="require('../'+products.src05)" class="swiper_img" alt />
          </swiper-slide>
          <div class="swiper-pagination swip" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
      <div class="bg_white">
        <!-- 商品名 -->
        <div class="d-flex intr">
          <div class="w-80">{{products.intr}}</div>
          <div class="share">
            <div>
              <img style="width:20px" src="../img/details/fenxiang.png" alt />
            </div>
            <div>分享</div>
          </div>
        </div>
        <!-- 价格 -->
        <div class="d-flex" style="justify-content:space-between">
          <div class="price">
            ¥
            <span>{{products.price}}</span>
          </div>
          <div class="xiaoliang">
            <span>销量</span>
            <span>14</span>
            <span>件</span>
          </div>
        </div>
      </div>
      <!-- 地址 -->
      <div class="bg_white d-flex pm_top">
        <div style="line-height:20px;width:20%;">
          <b>送至</b>
        </div>
        <div style="width:60%">
          <img src="../img/details/dizhi.png" alt />
          <span>请选择收货地址</span>
          <div style="padding-top:10px;">包邮</div>
        </div>
        <div style="width:20%">
          <img src="../img/details/right.png" alt />
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="d-flex bg_white pm_top p_b">
        <div class="w-50">商品详情</div>
        <div class="w-50">规格参数</div>
      </div>
      <div>
        <img class="img_d" src="../img/details/1/d1.jpg" alt />
        <img class="img_d" src="../img/details/1/d2.jpg" alt />
        <img class="img_d" src="../img/details/1/d3.jpg" alt />
        <img class="img_d" src="../img/details/1/d4.jpg" alt />
        <img class="img_d" src="../img/details/1/d5.jpg" alt />
        <img class="img_d" src="../img/details/1/d6.jpg" alt />
        <img class="img_d" src="../img/details/1/d7.jpg" alt />
        <img class="img_d" src="../img/details/1/d8.jpg" alt />
        <img class="img_d" src="../img/details/1/d9.jpg" alt />
        <img class="img_d" src="../img/details/1/d10.jpg" alt />
      </div>
      <!-- 撑开位置 -->
      <div class="cheng"></div>
      <!-- 固定底部按钮 -->
      <div class="fix">
        <div class="d-flex bg_white p-5">
          <div class="w-14">
            <img src="../img/details/dianpu.png" alt />
            <div>店铺</div>
          </div>
          <div class="w-14">
            <img src="../img/details/shoucang.png" alt />
            <div>收藏</div>
          </div>
          <div class="w-14">
            <img src="../img/details/kefu.png" alt />
            <div>客服</div>
          </div>

          <div class="w-58">
            <mt-button style="width:50%;font-size:0.8rem" type="primary" @click="add_cart">加入购物车</mt-button>
            <mt-button style="width:50%;font-size:0.8rem" type="default">立即购买</mt-button>
          </div>
        </div>
      </div>
      <!-- 加入购物车时弹出的方框 -->

      <div :class="{'addCart':cart}" class="_cart">
        <!-- 叉 -->
        <div :class="{'cha':cart}" class="_cha" @click="cha">
          <img style="width:15px;height:15px;" src="../img/details/cha.png" alt />
        </div>
        <div class="cart_img">
          <img
            :src="require('../'+products.src)"
            style="width:82px;height:82px;margin-bottom:30px;"
          />
        </div>
        <div style="color:red;margin-left:130px;margin-top:20px;">¥{{products.price.toFixed(2)}}</div>
        <!-- 购买数量 -->
        <div style="margin-top:180px;">
          <span style="margin-left:30px;">购买数量</span>
          <div style="display:flex;float:right;">
            <button @click="jian" class="jian_btn">-</button>
            <input type="text" v-model="num" style="width:30px;text-align:center;" />
            <button @click="add" class="add_btn">+</button>
          </div>
        </div>
        <!-- 确定按钮 -->
        <div class="que_btn">
          <mt-button style="width:90%;border-radius:20px;" @click="inCart">确定</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "carrousel",
  data() {
    return {
      // 弹窗
      toastInstanse: null,
      cart: false,
      num: 1,
      products: {},
      // 轮播图所需数据
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
          type: "fraction" //显示数字
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: " .swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    // 返回
    back() {
      this.$router.go(-1); //返回上一层
    },
    // 添加购物车
    inCart() {
      var url = "detailadd";
      var obj2 = this.products;
      obj2.count = this.num;
      this.axios.get(url, { params: obj2 }).then(res => {
        if (res.data == 1) {
          this.$store.commit("add");
          this.toastInstanse = Toast({
            message: "添加成功", //弹窗内容
            position: "middle", //弹窗位置
            duration: 1000 //弹窗时间毫秒,如果值为-1，则不会消失
          });
          // 关闭购物车页面
          this.cha();
        } else if (res.data == -1) {
          this.$router.push("/login");
        } else {
          this.toastInstanse = Toast({
            message: "添加成功", //弹窗内容
            position: "middle", //弹窗位置
            duration: 1000 //弹窗时间毫秒,如果值为-1，则不会消失
          });
          // 关闭购物车页面
          this.cha();
        }
      });
    },
    // 关闭加入购物车页
    cha() {
      this.cart = false;
    },
    // 打开购物车页
    add_cart() {
      this.cart = true;
    },
    add() {
      this.num++;
    },
    jian() {
      if (this.num == 1) {
        return;
      } else {
        this.num--;
      }
    }
  },
  // 从服务器获取商品数据
  created: function() {
    var id = this.$route.query.id;
    console.log(id);
    var obj = { id };
    var url = "details";
    this.axios.get(url, { params: obj }).then(res => {
      console.log(res.data[0]);
      this.products = res.data[0];
    });
  }
};
</script>
<style scoped>
.swip {
  background: grey;
  width: 50px;
  border-radius: 10px;
  color: white;
  opacity: 0.5;
  position: absolute;
  left: 100%;
  transform: translate3d(-75px, 0, 0);
}
.que_btn {
  text-align: center;
  bottom: 0;
  width: 100%;
  margin-top: 30px;
}
.jian_btn {
  background: rgb(247, 247, 247);
  width: 30px;
  border: 0;
}
.add_btn {
  background: rgb(247, 247, 247);
  margin-right: 30px;
  width: 30px;
  border: 0;
}
.cart_img {
  width: 82px;
  margin-left: 15px;
  height: 82px;
  position: absolute;
  top: -15px;
  box-shadow: 0px 0px 10px white;
  border: 5px solid white;
  border-radius: 5px;
}
._cha {
  background: white;
  padding: 10px;
  position: absolute;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
._cart {
  height: 315px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
  position: fixed;
  bottom: -350px;
  z-index: 5;
}
.img_back {
  width: 25px;
  margin-top: 3px;
  margin-right: 2px;
}
.back_s {
  background: rgba(41, 47, 54, 0.5);
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 10;
}
.cha {
  animation: chazi 0.2s 0.5s 1;
  animation-fill-mode: forwards;
}
@keyframes chazi {
  from {
    top: 0;
    right: 20px;
  }
  to {
    top: -30px;
    right: 20px;
  }
}
.addCart {
  animation: mymove 0.5s 1;
  animation-fill-mode: forwards;
}
@keyframes mymove {
  from {
    bottom: -350px;
  }
  to {
    bottom: 0px;
  }
}
.cheng {
  height: 66px;
}
.fix {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.p-5 {
  padding: 5px;
}
.mint-button--primary {
  background-color: rgb(255, 147, 1);
  color: #fff;
  width: 50%;
  font-size: 15px;
  /* border-top-left-radius: 50%;
        border-bottom-left-radius: 50%; */
}
.mint-button--default {
  background-color: rgb(245, 100, 86);
  color: #fff;
  width: 50%;
  font-size: 15px;
}
.w-58 {
  width: 58%;
  text-align: center;
}
.w-14 {
  width: 14%;
  text-align: center;
}
.p_b {
  padding-bottom: 20px;
}
.img_d {
  width: 100%;
  height: auto;
  vertical-align: top;
}
.w-50 {
  width: 50%;
  text-align: center;
}
.pm_top {
  margin-top: 20px;
  padding-top: 20px;
}
.bg_white {
  background: white;
}
.bg_all {
  background: rgb(238, 242, 243);
}
.xiaoliang {
  width: 20%;
  color: #999;
  font-size: 14px;
  line-height: 30px;
  padding-right: 20px;
}
.price {
  /* width: 80%; */
  color: #f56456;
  font-size: 20px;
  padding-left: 20px;
}
.intr {
  padding: 20px;
}
.w-80 {
  width: 80%;
}
.share {
  text-align: center;
}
.d-flex {
  display: flex;
}
.swiper_img {
  width: 100%;
  height: auto;
}
._swiper {
  width: 100%;
  overflow: hidden;
}
</style>