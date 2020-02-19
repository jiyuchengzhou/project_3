<template>
  <div style="width:100%;height:100%;">
    <!-- 顶部 -->
    <div style="background:rgb(247, 59, 48)">
      <router-link to="/home">
        <img style="width:25px;margin-left:25px;margin-top:10px;" src="../img/login/01.png" alt />
      </router-link>
      <router-link to="/login">
        <div style="color:white;float:right;font:0.75rem;margin-top:15px;margin-right:25px;">登录</div>
      </router-link>
      <div style="text-align:center;">
        <img style="height:60px;margin:10px;" src="../img/login/02.png" alt />
      </div>
    </div>
    <div style="background:rgb(248, 248, 248);">
      <div style="width:100%;text-align:center;margin-top:20px;margin-bottom:20px;">用户注册</div>
      <!-- 注册中三个输入框 -->
      <div style="display:flex;padding:15px;border:1px solid rgb(248, 248, 248);background:white;">
        <div style="width:30%;">用户名:</div>
        <div>
          <input
            v-model="uname"
            style="border:none; outline:none;height:20px;"
            placeholder="用户名"
            type="text"
          />
        </div>
      </div>
      <div style="display:flex;padding:15px;border:1px solid rgb(248, 248, 248);background:white;">
        <div style="width:30%;">手机号:</div>
        <div>
          <input
            v-model="phone"
            style="border:none; outline:none;height:20px;"
            placeholder="手机号"
            type="text"
          />
        </div>
      </div>
      <div style="display:flex;padding:15px;border:1px solid rgb(248, 248, 248);background:white;">
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

      <!-- 登录按钮 -->
      <div
        style="display:flex;justify-content:center;background:rgb(248, 248, 248);margin-top:20px;"
      >
        <mt-button @click="register" style="width:90%;background:rgb(245, 100, 86);color:white;">注册</mt-button>
      </div>
    </div>
    <!-- 背景铺满剩下的地方 -->
    <div style="width:100%;height:100%;background:rgb(248, 248, 248);position:fixed;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      upwd: "",
      uname: ""
    };
  },
  methods: {
    register() {
      var uname = this.uname;
      var upwd = this.upwd;
      var phone = this.phone;
      var obj = { uname: uname, upwd: upwd, phone: phone };
      var url = "register";
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data == 1) {
          console.log("注册成功");
        } else {
          console.log("注册失败");
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
