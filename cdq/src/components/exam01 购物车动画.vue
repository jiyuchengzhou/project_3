<template>
  <div>
    <div style="width:100%;height:500px;background:blue"></div>
    <div style="width:100%;height:500px;background:blue"></div>
    <button @click="go">+</button>
    <transition @before-enter="before" @enter="enter" @after-enter="after">
      <div style="position:absolute;z-index:100;" v-show="show">123</div>
    </transition>
    <!-- <div style="width:100px;height:200px;border:1px solid red;"></div>
    <div>123456</div>-->
    <div style="width:100%;height:200px;background:blue"></div>
    <img src="./img/souye/37.jpg" style="width:100%;height:100px;" alt />
    <div style="position:fixed;width:100%;height:55px;background:blue;bottom:0;display:flex">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      elLeft: 0,
      elTop: 0
    };
  },

  methods: {
    go() {
      this.elLeft = event.target.getBoundingClientRect().left;
      this.elTop = event.target.getBoundingClientRect().top;
      console.log(this.elTop);

      this.show = !this.show;
    },
    before(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const badgePosition = document
        .getElementById("cart")
        .getBoundingClientRect();
      el.style.transform = `translate3d(${badgePosition.left -
        this.elLeft}px,${badgePosition.top - this.elTop - 20}px,0)`;
      // 增加贝塞尔曲线
      el.style.transition =
        "transform .88s cubic-bezier(0.3, -0.25, 0.7, -0.15)";
      el.style.transition = "transform .88s linear";
      // el.style.transform = "translate(100px,100px)";
      // el.style.transition = "all 1s ease";
      done();
    },
    after(el) {
      this.show = false;
    }
  }
};
</script>

<style>
</style>