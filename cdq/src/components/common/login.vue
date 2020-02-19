<template>
  <div style="width:100%;height:100%;">
    <!-- 顶部 -->
    <div style="background:rgb(247, 59, 48)">
      <router-link to="/home">
        <img style="width:25px;margin-left:25px;margin-top:10px;" src="../img/login/01.png" alt />
      </router-link>
      <router-link to="/register">
        <div style="color:white;float:right;font:0.75rem;margin-top:15px;margin-right:25px;">注册</div>
      </router-link>
      <div style="text-align:center;">
        <img style="height:60px;margin:10px;" src="../img/login/02.png" alt />
      </div>
    </div>
    <!-- 登录选择 -->
    <div style="display:flex;background:rgb(248, 248, 248);padding:15px;">
      <div style="text-align:center;width:50%;">普通登录</div>
      <div style="text-align:center;width:50%;">动态密码登录</div>
    </div>
    <div style="background:rgb(248, 248, 248);">
      <!-- 登录中两个输入框 -->
      <div style="display:flex;padding:15px;border:1px solid rgb(248, 248, 248);background:white;">
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
      <div style="display:flex;padding:15px;border:1px solid rgb(248, 248, 248);background:white;">
        <div style="width:30%;">密码:</div>
        <div>
          <input
            v-model="upwd"
            style="border:none; outline:none;height:20px;"
            placeholder="密码"
            type="text"
          />
        </div>
      </div>
      <!-- 登录前选项 -->
      <div style="display:flex;margin-top:20px;margin-bottom:20px;background:rgb(248, 248, 248);">
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
      <div style="display:flex;justify-content:center;background:rgb(248, 248, 248);">
        <mt-button @click="login" style="width:90%;background:rgb(245, 100, 86);color:white;">登录</mt-button>
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
      uname: "",
      upwd: ""
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
        if (res.data == 1) {
          console.log("登录成功");
          this.$router.push("/home");
        } else {
          console.log("登录失败");
          console.log(res);
        }
      });
    }
  }
};
</script>
<style scoped>
</style>

