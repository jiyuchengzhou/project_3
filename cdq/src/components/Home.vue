<template>
  <div>
    <search v-show="currentIndex[4].iSelect==true" @goshou="go_shou"></search>
    <!-- 切换面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <headerI @func="getMsgFormSon" @toFen="to_fen"></headerI>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <fenlei @fen="getFen" @toshou="to_shou"></fenlei>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <!-- 组件子传父 -->
        <cart
          @goshou="go_shou"
          :cart_products="cart_products"
          :cart_num="cart_num"
          :cart_sel="cart_sel"
        ></cart>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <wode></wode>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部切换按钮 -->
    <mt-tabbar class="fixed" v-model="active">
      <mt-tab-item id="tab1" @click.native="changeState(0)">
        <img
          slot="icon"
          :class="currentIndex[0].iSelect?'img_1':'img_none'"
          :src="currentIndex[0].iSelect?require('./img/footer/s1.png'):require('./img/footer/1.png')"
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(1),jianche()">
        <img
          slot="icon"
          :src="currentIndex[1].iSelect?require('./img/footer/s2.png'):require('./img/footer/2.png')"
        />
        产品分类
      </mt-tab-item>
      <mt-tab-item
        id="tab3"
        @click.native="changeState(2),jianche(),jiazai()"
        style="position:relative;"
      >
        <div
          style="border:1px solid white;border-radius:6px;background:rgb(245, 100, 86);font-size:7px;height:12px;width:12px;color:white;font-weight:500;position:absolute;top:5px;right:50%;transform:translate(15px,0)"
        >{{this.$store.state.cartNum}}</div>
        <img
          slot="icon"
          :src="currentIndex[2].iSelect?require('./img/footer/s3.png'):require('./img/footer/3.png')"
        />
        购物车
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="changeState(3),jianche()">
        <img
          slot="icon"
          :src="currentIndex[3].iSelect?require('./img/footer/s4.png'):require('./img/footer/4.png')"
        />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
// 引入header组件
import header from "@/components/common/header.vue";
// 引入fenlei组件
import fenlei from "@/components/common/fenlei.vue";
// 引入cart组件
import cart from "@/components/common/cart.vue";
// 引入header组件
import wode from "@/components/common/wode.vue";
// // 引入search组件
import search from "@/components/common/search_com.vue";
export default {
  components: {
    headerI: header,
    fenlei: fenlei,
    cart: cart,
    wode: wode,
    search: search
  },
  data() {
    return {
      //购物车选中信息
      cart_sel: [],
      // 购物车数量信息
      cart_num: [],
      //购物车商品信息
      cart_products: [],
      active: "tab1", //面板id
      //创建数组保存tabbar
      //图片状态
      currentIndex: [
        { iSelect: true },
        { iSelect: false },
        { iSelect: false },
        { iSelect: false },
        { iSelect: false }
      ]
    };
  },
  methods: {
    // 加载购物车数据
    jiazai() {
      // if (this.active == "tab3") {
      //   return;
      // } else {
      // 从数据库获取数据
      var url = "cart";
      this.axios.get(url).then(res => {
        console.log(res.data);
        this.cart_products = res.data;
        // vuex获取数据;
        if (this.cart_products == 0) {
          this.$store.commit("huo", 0);
        } else {
          this.$store.commit("huo", this.cart_products.length);
        }
        //生成一个数组
        for (var i = 0; i < this.cart_products.length; i++) {
          this.cart_sel[i] = false;
        }
        for (var i = 0; i < this.cart_products.length; i++) {
          this.cart_num[i] = this.cart_products[i].count;
        }
      });
      // }
    },
    //购物车跳转到首页
    go_shou() {
      this.active = "tab1";
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (a == 0) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    },
    //分类页跳转到首页
    to_shou() {
      this.active = "tab1";
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (a == 0) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    },
    // 跳转到分类页面
    to_fen(data) {
      // 切换组件;
      this.active = "tab2";
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (a == 1) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    },
    // 获取fenlei子组件传参，跳转到搜索页
    getFen(data) {
      // 切换组件;
      this.active = "";
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (a == 4) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    },
    // 获取headerI子组件传参，跳转到搜索页
    getMsgFormSon(data) {
      // 切换组件;
      this.active = "";
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (a == 4) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    },
    // 检测是否登录
    jianche() {
      var url = "jianche";
      this.axios.get(url).then(res => {
        if (res.data == -1) {
          this.$router.push("/login");
          console.log(res.data);
        }
      });
    },
    // 切换组件
    changeState(i) {
      for (var a = 0; a < this.currentIndex.length; a++) {
        if (i == a) {
          this.currentIndex[a].iSelect = true;
        } else {
          this.currentIndex[a].iSelect = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.fixed {
  position: fixed;
  z-index: 2;
  bottom: 0;
}
.img_1 {
  background: #f56456;
  border-radius: 50%;
  width: 25px;
  height: auto;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background: none;
  color: #f56456;
}
.mint-tabbar {
  background: white;
}
</style>

