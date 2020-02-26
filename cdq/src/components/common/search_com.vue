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
            <div class="gwc" @click="add_cart(item.id)">
              <img style="margin-top:3px;" src="../img/search/gwc.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:55px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      products: [],
      xian: 1
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
            this.$store.commit("add");
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