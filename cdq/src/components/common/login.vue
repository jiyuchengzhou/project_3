<template>
  <div style="width:100%;height:100%;">
    <!-- 顶部 -->
    <div style="background:rgb(247, 59, 48)">
      <router-link to="/home">
        <img class="home" src="../img/login/01.png" alt />
      </router-link>
      <router-link to="/register">
        <div class="t_reg">注册</div>
      </router-link>
      <div style="text-align:center;">
        <img class="wc" src="../img/login/02.png" alt />
      </div>
    </div>
    <!-- 登录选择 -->
    <div class="sel">
      <div class="_sel">普通登录</div>
      <div class="_sel">动态密码登录</div>
    </div>
    <div style="background:rgb(248, 248, 248);">
      <!-- 登录中两个输入框 -->
      <div class="_input">
        <div style="width:30%;">用户名:</div>
        <div>
          <input
            v-model="uname"
            style="border:none; outline:none;height:20px;"
            placeholder="手机/邮箱/用户名"
            type="text"
          />
        </div>
      </div>
      <!-- 登录提示 -->
      <div class="_tishi" style v-show="show">{{tishi}}</div>
      <div class="_input">
        <div style="width:30%;">密码:</div>
        <div>
          <input
            v-model="upwd"
            style="border:none; outline:none;height:20px;"
            placeholder="密码"
            type="password"
          />
        </div>
      </div>
      <!-- 登录前选项 -->
      <div class="l_sel">
        <div style="width:33.3%;text-align:center;">
          <img src alt />自动登录
        </div>
        <div style="width:33.3%;text-align:center;">
          <img src alt />找回密码
        </div>
        <div style="width:33.3%;text-align:center;">
          <img src alt />快速注册
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="login_btn">
        <mt-button @click="login" style="width:90%;background:rgb(247, 59, 48);color:white;">登录</mt-button>
      </div>
    </div>
    <!-- 背景铺满剩下的地方 -->
    <div class="pu"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      show: false,
      tishi: "用户名或者密码错误"
    };
  },
  methods: {
    // jianche(){
    //     var url="jianche"
    //      this.axios.get(url).then(res=>{
    //         if(res.data==-1){
    //                 // this.$router.push("/login")
    //                 console.log(res.data)
    //             }
    //     })
    // },
    login() {
      var uname = this.uname;
      var upwd = this.upwd;
      console.log(uname);
      console.log(upwd);
      var obj = { uname: uname, upwd: upwd };
      var url = "login";
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          var name = res.data.msg[0].uname;
          this.$store.commit("getusername", name);
          this.$router.push("/home");
        } else {
          console.log("登录失败");
          console.log(res);
          this.show = true;
        }
      });
    }
  }
};
</script>
<style scoped>
.wc {
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.pu {
  width: 100%;
  height: 100%;
  background: rgb(248, 248, 248);
  position: fixed;
}
.login_btn {
  display: flex;
  justify-content: center;
  background: rgb(248, 248, 248);
}
.l_sel {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(248, 248, 248);
}
._tishi {
  padding: 3px;
  border: 1px solid rgb(248, 248, 248);
  background: white;
  padding-left: 30%;
  color: #f23030;
  font-size: 14px;
}
._input {
  display: flex;
  padding: 15px;
  border: 1px solid rgb(248, 248, 248);
  background: white;
}
._sel {
  text-align: center;
  width: 50%;
}
.sel {
  display: flex;
  background: rgb(248, 248, 248);
  padding: 15px;
}
.home {
  width: 25px;
  margin-left: 25px;
  margin-top: 10px;
}
.t_reg {
  color: white;
  float: right;
  font: 0.75rem;
  margin-top: 15px;
  margin-right: 25px;
}
</style>

