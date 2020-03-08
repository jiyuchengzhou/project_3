<template>
  <div>
    <!-- 上面搜索框 -->
    <div class="top">
      <!-- 分类按键 -->
      <div class="caidan" @click="goShou">
        <img src="../img/fenlei/xiaoyu.png" style="width:25px;height:25px;" alt />
        <br />
      </div>
      <!-- 搜索框 -->
      <div class="sou_in">
        <input id="shousuo" type="text" v-model.trim="key" placeholder="请输入商品名称" />
      </div>
      <div class="xioaxi">
        <div style="color:black" @click="search()">搜索</div>
      </div>
    </div>
    <!-- 撑开顶部的位置 -->
    <div style="height:50px;"></div>
    <!-- 当未搜索到商品显示 -->
    <div style="text-align:center;" v-show="xian==0">
      <img src="../img/search/wu.png" alt />
      <div>暂无相关记录</div>
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <div class="list_1" v-for="(item,i) in products" :key="i" :class="{'odd_s':(i+1)%2!=0}">
        <div class="pro" style="width:100%;">
          <router-link
            :to="{path:'/details',query:{ id:item.id }}"
            style="text-decoration:none;color:black;"
          >
            <img style="width:100%;" :src="require('../'+item.src)" alt />
            <div class="list_2">{{item.intr}}</div>
          </router-link>
          <div class="list_3">
            <span>¥{{item.price}}</span>
            <div class="gwc" @click="add_cart(item.id);addGoods($event)">
              <img style="margin-top:3px;" src="../img/search/gwc.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:55px;"></div>
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
          id="an_logo"
          style="margin-left:50%;width:10px;height:10px;background:red;margin-top:5px;"
        ></div>
      </div>
      <div style="width:25%;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      products: [],
      xian: 1,
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
  // directives: {
  //   focus: {
  //     inserted: function(el, { value }) {
  //       if (value) {
  //         el.focus();
  //         console.log(1);
  //       }
  //     }
  //   }
  // },
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
        .getElementById("an_logo")
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
    add_cart(i) {
      var id = i;
      var url = "details";
      var obj = { id };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res.data);
        var obj2 = res.data[0];
        console.log(obj2);
        var url = "addcart";
        this.axios.get(url, { params: obj2 }).then(res => {
          if (res.data == -1) {
            this.$router.push("/login");
          } else if (res.data == 1) {
            setTimeout(() => {
              this.$store.commit("add");
            }, 300);
          }
          console.log(res.data);
        });
      });
    },
    // 跳转首页
    goShou() {
      this.$emit("goshou", "123");
    },
    // 模糊查询
    search() {
      console.log(this.key);
      var key = this.key;
      var obj = { key };
      var url = "search";
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res.data);
        if (res.data == 0) {
          this.products = [];
          this.xian = 0;
        } else {
          this.xian = 1;
          this.products = res.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.sou_in {
  width: 100%;
  padding-right: 20px;
  padding-left: 6px;
}
.list_3 {
  margin-top: 5px;
  line-height: 25px;
  margin-bottom: 10px;
  padding: 5px;
}
.list_2 {
  margin-top: 5px;
  padding: 5px;
  padding-top: 1px;
  overflow: hidden;
  height: 33px;
}
.list_1 {
  width: 47%;
  box-sizing: border-box;
  background: white;
  margin-top: 10px;
}
.list {
  display: flex;
  background: rgb(247, 248, 249);
  flex-wrap: wrap;
}
.gwc {
  border: 1px solid rgb(245, 100, 86);
  background: rgb(245, 100, 86);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  text-align: center;
  padding: 0px !important;
  float: right;
}
.odd_s {
  margin-left: 2%;
  margin-right: 1%;
}
.list :nth-child(even) {
  margin-right: 2%;
  margin-left: 1%;
}
input {
  outline: none;
  text-indent: 20px;
}
#shousuo {
  width: 100%;
  border: none;
  background: rgb(247, 248, 249);
  border-radius: 20px;
  height: 30px;
}
input::placeholder {
  color: #666;
  font-size: 14px;
  position: relative;
  left: 38px;
  top: -2px;
}
div .caidan {
  color: #666;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 10px;
}
div .top {
  display: flex;
  height: 50px;
  width: 100%;
  background: white;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 3;
}
div .xioaxi {
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  margin-top: 0px;
  margin-left: -8px;
  width: 50px;
  border: 1px solid #f56456;
  border-radius: 20%;
  text-align: center;
  background: #f56456;
}
</style>