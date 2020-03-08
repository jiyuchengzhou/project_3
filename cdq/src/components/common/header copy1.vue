<template>
  <div>
    <!-- 上面搜索框 -->
    <!-- <router-link :to="{path:'/search'}"> -->
    <div class="top">
      <!-- 分类按键 -->
      <div class="caidan" @click="toFenlei">
        <img src="../img/caidan.png" style="width:25px;height:25px;" alt />
        <br />
        <span>分类</span>
      </div>
      <!-- 搜索框 -->
      <div class="sou" @click="sendMsg">
        <img id="fdj" src="../img/fdj.png" alt />
        <input id="shousuo" type="text" placeholder="搜索商品/店铺" />
      </div>
      <div class="xioaxi">
        <img src="../img/xiaoxi.png" alt />
        <br />
        <span>消息</span>
      </div>
    </div>
    <!-- </router-link> -->
    <div style="height:50px;width:100%"></div>
    <!-- 主体区域 -->
    <div>
      <!-- <div>
                <router-link=""><img style="width:100%;height:auto;" src="../img/souye/gonggao.jpg" alt=""></router-link>
      </div>-->
      <div>
        <router-link to="/">
          <img class="img_s" style src="../img/souye/01.png" alt />
        </router-link>
      </div>
      <!-- 三张图片组合 -->
      <div style="width:50% ;float:left">
        <router-link to="/">
          <img style="width:100%;height:auto;" src="../img/souye/02.webp" alt />
        </router-link>
      </div>
      <div style="width:50%;float:left">
        <router-link to="/">
          <img style="width:100%;height:auto;" src="../img/souye/03.webp" alt />
        </router-link>
        <router-link to="/">
          <img style="width:100%;height:auto;" src="../img/souye/04.webp" alt />
        </router-link>
      </div>
      <!-- 低价处理区 -->
      <div>
        <router-link to="/">
          <img style="width:100%;height:auto;" src="../img/souye/05.png" alt />
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <img style="width:100%;height:auto;" src="../img/souye/06.jpg" alt />
        </router-link>
      </div>
      <!-- 横向商品展示区 -->
      <div id="an_logo" style="position:relative;">
        <transition @before-enter="before" @enter="enter" @after-enter="after">
          <div
            v-show="show"
            style="position:absolute;left:0;border:1px solid red;background:red;border-radius:10px;width:20px;height:20px;z-index:80;"
          ></div>
        </transition>
      </div>
      <div id="an_logo" style="position:relative;">
        <transition @before-enter="before" @enter="enter" @after-enter="after">
          <div
            v-show="show"
            style="position:absolute;left:0;border:1px solid red;background:red;border-radius:10px;width:20px;height:20px;z-index:80;"
          ></div>
        </transition>
      </div>
      <div class="heng">
        <div class="heng_1" v-for="(item,i) in products" :key="i">
          <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
            <img style="width:100%;height:auto;" :src="require('../'+item.src)" alt />
            <div style="color:black;height:38px;overflow:hidden;">{{item.intr}}</div>
          </router-link>

          <div style="margin:10px 0;">
            <span style="color:#f56456">¥</span>
            <span style="color:#f56456">{{item.price}}</span>
            <span style="position:relative;float:right">
              <span class="heng_2" @click="addCart(item.id,i)">+</span>
            </span>
          </div>
        </div>
      </div>

      <!-- 固定商品展示区 -->
      <!-- <div style="width:100%;height:100px;background:yellow;"></div> -->
      <!-- 爆品团购区 -->
      <div style="display:flex;flex-wrap:wrap;">
        <div style="width:100%;">
          <img class="img_s" src="../img/souye/07.png" alt />
        </div>
        <div style="width:100%;">
          <img class="img_w50" src="../img/souye/08.webp" alt />
          <img class="img_w50" src="../img/souye/09.webp" alt />
          <img class="img_w50" src="../img/souye/10.webp" alt />
          <img class="img_w50" src="../img/souye/11.webp" alt />
          <img class="img_w50" src="../img/souye/12.webp" alt />
          <img class="img_w50" src="../img/souye/13.webp" alt />
        </div>
      </div>
      <!-- 犬猫医疗保健品 -->
      <div style="width:100%">
        <img class="img_s" src="../img/souye/14.png" alt />
        <img class="img_s" src="../img/souye/15.png" alt />
      </div>
      <div style="width:100%;">
        <img class="img_w50" src="../img/souye/17.webp" alt />
        <img class="img_w50" src="../img/souye/17.webp" alt />
        <img class="img_w50" src="../img/souye/18.webp" alt />
        <img class="img_w50" src="../img/souye/19.webp" alt />
        <img class="img_w50" src="../img/souye/20.webp" alt />
        <img class="img_w50" src="../img/souye/21.webp" alt />
      </div>
      <!-- 犬猫美味零食 -->
      <div style="width:100%">
        <img class="img_s" src="../img/souye/22.png" alt />
      </div>
      <div style="width:100%;">
        <img class="img_33" src="../img/souye/23.webp" alt />
        <img class="img_33" src="../img/souye/24.webp" alt />
        <img class="img_33" src="../img/souye/25.webp" alt />
        <img class="img_33" src="../img/souye/26.webp" alt />
        <img class="img_33" src="../img/souye/27.webp" alt />
        <img class="img_33" src="../img/souye/28.webp" alt />
      </div>
      <!-- 犬猫日常用品 -->
      <div style="width:100%">
        <img class="img_s" src="../img/souye/29.png" alt />
      </div>
      <div style="width:100%;">
        <img class="img_33" src="../img/souye/30.webp" alt />
        <img class="img_33" src="../img/souye/31.webp" alt />
        <img class="img_33" src="../img/souye/32.webp" alt />
        <img class="img_33" src="../img/souye/33.webp" alt />
        <img class="img_33" src="../img/souye/34.webp" alt />
        <img class="img_33" src="../img/souye/35.webp" alt />
      </div>
      <!-- 双拼粮犬猫更爱吃 -->
      <h2 class="xifen">
        <span>双拼粮犬猫更爱吃</span>
      </h2>
      <div style="width:100%;">
        <img class="img_s" src="../img/souye/36.jpg" alt />
      </div>
      <div style="width:100%;">
        <img class="img_s" src="../img/souye/37.jpg" alt />
      </div>
      <!-- 横向商品展示区 -->
      <div class="heng">
        <div class="heng_1" v-for="(item,i) in products" :key="i">
          <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
            <img style="width:100%;height:auto;" :src="item.src" alt />
            <div style="color:black;">{{item.intr}}</div>
          </router-link>

          <div>
            <span style="color:#f56456">¥</span>
            <span style="color:#f56456">{{item.price}}</span>
            <span class="heng_2">+</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 动画定位时使用 -->
    <div
      style="position:fixed;z-index:-1;width:100%;height:55px;background:rgba(5,5,5,0.5);bottom:0;display:flex"
    >
      <div style="width:25%;"></div>
      <div style="width:25%;"></div>
      <div style="width:25%;">
        <div
          id="cart"
          style="margin-left:50%;width:10px;height:10px;background:red;margin-top:5px;"
        ></div>
      </div>
      <div style="width:25%;"></div>
    </div>
    <!-- 撑开位置 -->
    <div class="cheng"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      products: [],
      elLeft: 0,
      elTop: 0
    };
  },
  methods: {
    // 实现加入购物车动画
    before(el) {
      const an_Position = document
        .getElementById("an_logo")
        .getBoundingClientRect();
      el.style.transform = `translate(${this.elLeft - an_Position.left}px,${this
        .elTop - an_Position.top}px)`;

      console.log(an_Position.top);
      console.log(an_Position.left);
      console.log(this.elLeft);
      console.log(this.elTop);
    },
    enter(el, done) {
      el.offsetWidth;
      const badgePosition = document
        .getElementById("cart")
        .getBoundingClientRect();
      console.log(badgePosition.left);
      console.log(badgePosition.top);
      const an_Position = document
        .getElementById("an_logo")
        .getBoundingClientRect();

      el.style.transform = `translate(${
        badgePosition.left
      }px,${badgePosition.top - an_Position.top}px)`;
      // 增加贝塞尔曲线
      el.style.transition =
        "transform .88s cubic-bezier(0.3, -0.25, 0.7, -0.15)";
      el.style.transition = "transform 0.2s linear";
      // el.style.transform = "translate(100px,100px)";
      // el.style.transition = "all 1s ease";
      done();
    },
    after(el) {
      this.show = false;
    },
    //   向父组件传参跳转分类页面
    toFenlei() {
      this.$emit("toFen", "123");
    },
    //向父组件传参
    sendMsg() {
      this.$emit("func", "123");
    },
    //   加入购物车
    addCart(p_id, index) {
      var id = p_id;
      var url = "details";
      var obj = { id };
      this.elLeft = event.target.getBoundingClientRect().left;
      this.elTop = event.target.getBoundingClientRect().top;
      this.show = true;
      this.axios.get(url, { params: obj }).then(res => {
        var obj2 = res.data[0];
        var url = "addcart";
        this.axios.get(url, { params: obj2 }).then(res => {
          if (res.data == -1) {
            this.$router.push("/login");
          } else if (res.data == 1) {
            setTimeout(() => {
              this.$store.commit("add");
            }, 200);
          }
          console.log(res.data);
        });
      });
    }
  },
  created: function() {
    var url = "index";
    this.axios.get(url).then(res => {
      console.log(res);
      this.products = res.data;
    });
  }
};
</script>
<style scoped>
.img_w50 {
  width: 50%;
  height: auto;
}
.xifen {
  width: 100%;
  font-size: 16px;
  height: 2rem;
  line-height: 2rem;
  font-weight: bold;
  color: #353535;
  text-align: center;
  position: relative;
}
.img_33 {
  width: 33.33333333%;
  height: auto;
  justify-content: center;
}
.heng_2 {
  float: right;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
}
.heng_1 {
  width: 27%;
  background: white;
  padding: 5px;
  flex-shrink: 0;
}
.heng {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  /* overflow: auto; */
}
.img_s {
  width: 100%;
  height: auto;
}
.sou {
  width: 100%;
  padding-right: 20px;
  padding-left: 6px;
}
.cheng {
  height: 65px;
}
/* 消除图片间隙 */
img {
  vertical-align: top;
}
#shousuo {
  width: 100%;
  border: none;
  background: rgb(247, 131, 120);
  border-radius: 20px;
  height: 30px;
}
#fdj {
  position: absolute;
  top: 14px;
  left: 50px;
}
input::placeholder {
  /* placeholder颜色  */
  color: #fff;
  /* placeholder字体大小  */
  font-size: 14px;
  /* placeholder位置  */
  /* text-align: left; */
  position: relative;
  left: 38px;
  top: -2px;
}
div .caidan {
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 8px;
}
div .xioaxi {
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
  margin-left: -8px;
  width: 50px;
}
div .top {
  display: flex;
  height: 50px;
  width: 100%;
  background: rgb(245, 100, 86);
  align-items: center;
  position: fixed;
}
</style>

