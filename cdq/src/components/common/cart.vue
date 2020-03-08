<template>
  <div>
    <div class="page">
      <!-- 加载v-model数据 -->
      <div v-if="guazai"></div>
      <!-- 头部 -->
      <mt-header class="fixed" title="购物车">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="goShou"></mt-button>
        </router-link>
        <mt-button slot="right" v-show="show==1" @click="qiehuan()">管理</mt-button>
        <mt-button slot="right" v-show="show==2" @click="qiehuan()">完成</mt-button>
      </mt-header>
      <div style="height:58px;"></div>
      <!-- 商品列表 -->
      <!-- 循环生成 -->
      <div id="cart_pro">
        <div class="product" v-for="(item,i) in products" :key="i">
          <div class="g1">
            <!-- 选择框 -->
            <!-- <input type="checkbox" v-model="sel[i]" class="p-center" @click="dan(i)" /> -->
            <img
              :src="sel[i]?require('../img/cart/gou.png'):require('../img/cart/fou.png')"
              class="p-center"
              @click="dan(i)"
            />
          </div>
          <div class="g2">
            <router-link
              :to="{path:'/details',query:{ id:item.yuanid }}"
              style="text-decoration:none;color:black;"
            >
              <img class="cart_img" :src="require('../'+item.src)" alt />
            </router-link>
          </div>
          <div class="g3">
            <router-link
              :to="{path:'/details',query:{ id:item.yuanid }}"
              style="text-decoration:none;color:black;"
            >
              <div class="intr">{{item.intr}}</div>
            </router-link>
            <div class="guige">
              <span>规格:</span>
              <span>{{item.guige}}</span>
            </div>
            <div>
              <span class="price">
                <span>¥</span>
                <span>{{item.price}}</span>
              </span>
              <div class="f-r">
                <span @click="jian(i)">－</span>
                <input type="text" class="pri-num" v-model="num[i]" />
                <span @click="add(i)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全选那排 -->
      <div class="_quan" v-show="show==1" style>
        <div class="w-30">
          <!-- <input class="ml-17" type="checkbox" v-model="isAllChecked" @click="chooseAll()" /> -->
          <img
            :src="isAllChecked?require('../img/cart/gou.png'):require('../img/cart/fou.png')"
            class="ml-17"
            @click="chooseAll()"
          />
          <span style="margin-left:50px;" @click="chooseAll()">全选</span>
        </div>
        <div class="w-40">
          <div class="f-r">
            <span>合计:</span>
            <span class="total">¥{{total_p}}</span>
          </div>
        </div>
        <mt-button class="w-30 mt_5">去结算</mt-button>
      </div>

      <!-- 全选管理那排 -->
      <div v-show="show==2" class="_quan">
        <div class="w-30">
          <img
            :src="isAllChecked?require('../img/cart/gou.png'):require('../img/cart/fou.png')"
            class="ml-17"
            @click="chooseAll()"
          />
          <span style="margin-left:50px;" @click="chooseAll();total_price()">全选</span>
        </div>
        <div style="width:70%;" class="w-40">
          <div class="f-r">
            <span @click="del_all(),total_price()" style="margin-right:10px; font-size:14px;">清除</span>
            <span class="shoucang">&nbsp;&nbsp;&nbsp;移入收藏夹&nbsp;&nbsp;&nbsp;</span>
            <span @click="del(),total_price()" class="_del">删除</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 撑开位置 -->
    <div class="cheng"></div>
  </div>
</template>
<script>
export default {
  props: ["cart_products", "cart_num", "cart_sel"],
  data() {
    return {
      guazai: false,
      // 商品选择数量
      num: this.cart_num,
      products: this.cart_products,
      // products:[
      // 	{src:'img/cart/1.png',intr:'特价促销  英国K魔方 幼犬猫专用羊奶粉350g',guige:'350g',price:'88.00'},

      // ],
      isAllChecked: false,
      total_p: "0.00",
      show: 1,
      sel: this.cart_sel
    };
  },

  methods: {
    // 跳转首页
    goShou() {
      this.$emit("goshou", "123");
    },
    // 单选
    dan(i) {
      if (this.sel[i] == true) {
        this.sel[i] = false;
      } else {
        this.sel[i] = true;
      }
      // 判断多选
      var sel_sum = 0;
      for (var b = 0; b < this.sel.length; b++) {
        if (this.sel[b] == true) {
          ++sel_sum;
        }
      }
      if (sel_sum == this.sel.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
      //计算总价
      this.total_price();
    },
    // 切换管理和完成页面
    qiehuan() {
      if (this.show == 1) {
        this.show = 2;
      } else {
        this.show = 1;
      }
    },
    // 全选
    chooseAll() {
      if (this.sel.length == 0) {
        this.isAllChecked = false;

        console.log(this.sel.length);

        console.log(this.isAllChecked);
        return;
      }
      if (this.isAllChecked == true) {
        this.isAllChecked = false;
        for (var i = 0; i < this.sel.length; i++) {
          this.sel[i] = false;
        }
      } else {
        this.isAllChecked = true;
        for (var i = 0; i < this.sel.length; i++) {
          this.sel[i] = true;
        }
      }
      //计算总价
      this.total_price();
    },
    // 计算总价
    total_price() {
      var sum = 0;
      for (var c = 0; c < this.sel.length; c++) {
        if (this.sel[c] == true) {
          sum += this.products[c].price * this.num[c];
        }
      }
      this.total_p = sum.toFixed(2);
    },
    // 减少数量
    jian(i) {
      if (this.num[i] == 1) {
        return;
      }
      this.num[i] = this.num[i] * 1 - 1;
      console.log(this.num);
      if (this.guazai == false) {
        this.guazai = true;
      } else {
        this.guazai = false;
      }
      //计算总价
      this.total_price();
    },
    //增加数量
    add(i) {
      this.num[i] = 1 + this.num[i] * 1;
      console.log(this.num);
      if (this.guazai == false) {
        this.guazai = true;
      } else {
        this.guazai = false;
      }
      console.log(this.num);
      console.log(this.sel);
      console.log(this.products);
      //计算总价
      this.total_price();
      console.log(this.products);
    },
    //删除
    del() {
      this.isAllChecked = false;
      for (var i = 0; i < this.sel.length; i++) {
        if (this.sel[i] == true) {
          var id = this.products[i].id;
          var obj = { id };
          var url = "del";
          console.log("删除成功");
          this.products.splice(i, 1);
          this.num.splice(i, 1);
          this.sel.splice(i, 1);
          this.$store.commit("del", 1);
          --i;
          this.axios.get(url, { params: obj }).then(res => {
            // console.log(res.data);
            if (res.data == 1) {
              console.log(this.products);
              if (this.products.length == 0) {
                this.products = [];
              }
              // console.log(this);
              // console.log(this.products);
              // if (this.guazai == false) {
              //   this.guazai = true;
              // } else {
              //   this.guazai = false;
              // }
            } else {
              console.log("删除失败");
            }
          });
        }
      }
    },

    //清除
    del_all() {
      this.isAllChecked = false;
      // for (var i = 0; i < this.sel.length; i++) {
      var url = "delall";
      this.axios.get(url).then(res => {
        console.log(res.data);
        if (res.data == 1) {
          console.log("删除成功");
          this.total_p = "0.00";
          this.$store.dispatch("del", this.products.length);
          this.products = [];
          // this.$store.commit("del", this.products.length);
        } else {
          console.log("删除失败");
        }
      });
      // }
    }
  },
  watch: {
    cart_sel() {
      this.sel = this.cart_sel;
      this.isAllChecked = false;
    },
    cart_num() {
      this.num = this.cart_num;
    },
    cart_products() {
      this.products = this.cart_products;
    }
  },
  // computed:{
  // },
  created: function() {
    // 从数据库获取数据
    var url = "cart";
    this.axios.get(url).then(res => {
      console.log(res.data);
      this.products = res.data;
      // vuex获取数据;
      if (this.products == 0) {
        this.$store.commit("huo", 0);
      } else {
        this.$store.commit("huo", this.products.length);
      }
      //生成一个数组
      //   for (var i = 0; i < this.products.length; i++) {
      //     this.sel[i] = false;
      //   }
      //   for (var i = 0; i < this.products.length; i++) {
      //     this.num[i] = 1;
      //   }
    });
  }
};
</script>
<style scoped>
._del {
  text-align: center;
  border: 1px solid #de2434;
  color: #de2434;
  border-radius: 17px;
  font-size: 17px;
  font-weight: 400;
  padding-left: 5px;
  padding-right: 5px;
}
.shoucang {
  text-align: center;
  border: 1px solid #ffb254;
  color: #ffb254;
  font-weight: 700;
  margin-right: 10px;
  border-radius: 17px;
  font-size: 17px;
  font-weight: 400;
}
._quan {
  display: flex;
  height: 50px;
  line-height: 50px;
  background: white;
  position: fixed;
  bottom: 55px;
  width: 100%;
  z-index: 3;
}
.mint-button--default {
  background: #f56456;
  color: white;
}
.ml-17 {
  position: absolute;
  left: 17px;
  top: 12px;
}
.total {
  color: #f56456;
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
}
.mt_5 {
  margin-top: 5px;
}
.w-40 {
  width: 40%;
}
.w-30 {
  width: 30%;
}
.g3 .f-r > span {
  display: inline-block;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 2;
}
.cheng {
  height: 120px;
}
.cart_img {
  width: 100%;
  height: auto;
}
.p-center {
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
.f-r {
  float: right;
}
.pri-num {
  width: 20px;
  border: 0;
  outline: none;
  text-align: center;
  border: 1px solid black;
}
.price {
  line-height: 35px;
  font-size: 0.75rem;
  color: #f56456;
}
.guige {
  line-height: 0.7rem;
  font-size: 0.5rem;
  color: #999;
}
.intr {
  display: block;
  height: 1.6rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.6rem;
  color: #353535;
}
.g3 {
  margin-left: 20px;
  width: 66%;
}
.g2 {
  width: 23%;
  box-shadow: 0 0 5px 5px rgba(200, 200, 200, 0.1);
}
.g1 {
  width: 11%;
  text-align: center;
}
.product {
  background: white;
  display: flex;
  padding: 10px;
  border-radius: 1rem;
}
.mint-header {
  color: #000;
  height: 50px;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;
}
.page {
  background: rgb(242, 242, 242);
}
</style>>