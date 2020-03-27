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

      <!-- <div id="an_logo" style="position:relative;">
        <transition @before-enter="before" @enter="enter" @after-enter="after">
          <div
            v-show="show"
            style="position:absolute;left:0;border:1px solid red;background:red;border-radius:10px;width:20px;height:20px;z-index:80;"
          ></div>
        </transition>
      </div>-->
      <div class="heng">
        <div class="heng_1" v-for="(item,i) in products.slice(0,5) " :key="i">
          <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
            <img style="width:100%;height:auto;" :src="require('../'+item.src)" alt />
            <div style="color:black;height:38px;overflow:hidden;">{{item.intr}}</div>
          </router-link>

          <div style="margin:10px 0;">
            <span style="color:#f56456">¥</span>
            <span style="color:#f56456">{{item.price}}</span>
            <span style="position:relative;float:right">
              <span class="heng_2" @click="addCart(item.id,i);addGoods($event)">+</span>
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
        <div class="heng_1" v-for="(item,i) in products.slice(5,10) " :key="i">
          <router-link :to="{path:'/details',query:{ id:item.id }}" style="text-decoration:none">
            <img style="width:100%;height:auto;" :src="require('../'+item.src)" alt />
            <div style="color:black;height:38px;overflow:hidden;">{{item.intr}}</div>
          </router-link>

          <div style="margin:10px 0;">
            <span style="color:#f56456">¥</span>
            <span style="color:#f56456">{{item.price}}</span>
            <span style="position:relative;float:right">
              <span class="heng_2" @click="addCart(item.id,i);addGoods($event)">+</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 原始位置 -->
    <div
      style="display:none;position:fixed;z-index:100;width:100%;height:0px;background:rgba(5,5,5,0.5);bottom:55px;display:flex"
    >
      <div style="width:25%;"></div>
      <div style="width:25%;"></div>
      <div style="width:25%;">
        <!-- 动画小球 -->
        <div style="position:relative;" v-for="(ball, index) of balls" :key="index">
          <transition @before-enter="before" @enter="enter" @after-enter="after">
            <div
              v-show="ball.show"
              style="position:absolute;left:50%;border:1px solid red;background:red;border-radius:10px;width:20px;height:20px;z-index:100;"
            ></div>
          </transition>
        </div>
        <div style="margin-left:50%;width:10px;height:10px;margin-top:5px;"></div>
      </div>
      <div style="width:25%;"></div>
    </div>
    <!-- 动画定位时使用 -->
    <div
      style="display:none;position:fixed;z-index:-1;width:100%;height:55px;background:rgba(5,5,5,0.5);bottom:0;display:flex"
    >
      <div style="width:25%;"></div>
      <div style="width:25%;"></div>
      <div style="width:25%;">
        <div
          id="anima"
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
      products: [],
      balls: [
        // 这里定义了多个ball,是因为可能同时有多个小球在动画中（快速点击多次或者多个商品）
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: [] // 在动画中的小球集合
    };
  },
  methods: {
    addGoods(e) {
      // console.log(this.balls);
      var el = e.target;
      // console.log(el);
      this.balls.forEach(v => {
        if (!v.show) {
          v.show = true; // 当切换元素的display:block/none时，会触发vue的动画
          v.el = el; // 将触发点击事件的“+”号保定道小球对象上，方便获取动画初始时的位置
          this.dropBalls.push(v); // 取一个小球加入动画队列
          // console.log(this.balls);
          return;
        }
      });
    },
    // 实现加入购物车动画
    before(el) {
      var an_Position = document
        .getElementById("anima")
        .getBoundingClientRect();
      console.log(an_Position);
      let count = this.balls.length;
      while (count--) {
        // 将动画队列中的小球，依次处理
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect(); //拿到点击的“+”号的位置,这里不直接取值（我是用的绝对定位，当然可以直接取值）的原因是，商品列表中每个加号的位置是不固定的，如果上下滑动了，这个位置就不确定
          let x = rect.left - an_Position.left; // 需要偏移的x向距离
          let y = -(window.innerHeight - rect.top - 55); // 需要偏移的y向距离
          el.style.display = ""; // 当前状态下，display值为none，将其置空。

          // 这里需要注意了，小球飞入的动画分两个维度，X轴和Y轴，因此
          el.style.transform = `translate3d(${x}px, ${y}px, 0px)`; // 首先将“ball”Y向移动至“+”好位置
          // el.style.transform = `translate3d(${x}px, 0px)`;
          // 接着将“inner-hook”X向移动至“+”号处，其实此时外层“ball”的X位置没有动，但因为背景色等等样式只应用于“inner-hook”上，因此，视觉效果上，这个小球是移动到了“+”号的位置
          // let inner = el.getElementsByClassName("inner-hook")[0];
          // inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
          // inner.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      }
    },
    enter(el, done) {
      el.offsetWidth;
      this.$nextTick(() => {
        // el.style.webkitTransform = "translate3d(0, 0, 0)"; //接着将小球位置置为初始值，但css中设置了transition .8s,因此，动画效果就出来了
        el.style.transform = "translate3d(0, 0, 0)";
        // let inner = el.getElementsByClassName("inner-hook")[0];
        // inner.style.webkitTransform = "translate3d(0, 0, 0)";
        el.style.transform = "translate3d(0, 0, 0)";
        el.style.transition = "transform 0.3s linear";
        setTimeout(() => {
          done();
        }, 300);
      });
    },
    after(el) {
      let ball = this.dropBalls.shift(); //结束后，将这个活动中的小球删除
      if (ball) {
        ball.show = false;
        el.style.display = "none"; // 并且将其设为不可见
      }
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
      // this.elLeft = event.target.getBoundingClientRect().left;
      // this.elTop = event.target.getBoundingClientRect().top;
      // this.show = true;
      this.axios.get(url, { params: obj }).then(res => {
        var obj2 = res.data[0];
        var url = "addcart";
        this.axios.get(url, { params: obj2 }).then(res => {
          if (res.data == -1) {
            this.$router.push("/login");
          } else if (res.data == 1) {
            setTimeout(() => {
              this.$store.commit("add");
            }, 300);
          }
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
  height:32px;
  line-height: 32px;
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
  z-index: 10;
}
</style>

