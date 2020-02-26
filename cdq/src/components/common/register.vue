<template>
  <div style="width:100%;height:100%;">
    <!-- 顶部 -->
    <div style="background:rgb(247, 59, 48)">
      <router-link to="/home">
        <img class="home" src="../img/login/01.png" alt />
      </router-link>
      <router-link to="/login">
        <div class="t_login">登录</div>
      </router-link>
      <div style="text-align:center;">
        <img class="wc" src="../img/login/02.png" alt />
      </div>
    </div>
    <div style="background:rgb(248, 248, 248);">
      <div class="t_reg">用户注册</div>
      <!-- 注册中三个输入框 -->
      <div class="shuru">
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
      <!-- 用户名提示 -->
      <div :class="[c_uname]">{{_uname}}</div>
      <div class="shuru">
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
      <!-- 手机号验证 -->
      <div :class="[c_phone]">{{_phone}}</div>
      <div class="shuru">
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
      <!-- 密码验证 -->
      <div :class="[c_upwd]">{{_upwd}}</div>

      <!-- 登录按钮 -->
      <div class="login_btn">
        <mt-button
          @click="register"
          style="width:90%;background:rgb(245, 100, 86);color:white;"
          :disabled="!(c_uname=='green'&&c_phone=='green'&&c_upwd=='green')"
        >注册</mt-button>
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
      phone: "",
      upwd: "",
      uname: "",
      _phone: "",
      _upwd: "",
      _uname: "",
      c_phone: "red",
      c_upwd: "red",
      c_uname: "red"
    };
  },
  watch: {
    uname() {
      console.log(this.uname);
      if (this.uname.length > 2 && this.uname.length < 11) {
        this._uname = "格式正确";
        this.c_uname = "green";
      } else {
        this._uname = "请输入3-10位字符";
        this.c_uname = "red";
      }
    },
    upwd() {
      var bool = /^[A-Za-z0-9]{6,32}$/.test(this.upwd);
      console.log(bool);
      if (bool) {
        this._upwd = "格式正确";
        this.c_upwd = "green";
      } else {
        this._upwd = "密码格式为6-32位数字+英文";
        this.c_upwd = "red";
      }
    },

    phone() {
      var bool = /^1[3|4|5|7|8]\d{9}$/.test(this.phone);
      if (bool) {
        this._phone = "格式正确";
        this.c_phone = "green";
      } else {
        this._phone = "号码输入错误";
        this.c_phone = "red";
      }
    }
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
  margin-top: 20px;
}
.shuru {
  display: flex;
  padding: 15px;
  border: 1px solid rgb(248, 248, 248);
  background: white;
}
.t_reg {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
}
.wc {
  height: 60px;
  margin: 10px;
}
.t_login {
  color: white;
  float: right;
  font: 0.75rem;
  margin-top: 15px;
  margin-right: 25px;
}
.home {
  width: 25px;
  margin-left: 25px;
  margin-top: 10px;
}
.green {
  padding: 3px;
  border: 1px solid rgb(248, 248, 248);
  background: white;
  padding-left: 30%;
  font-size: 14px;
  color: green;
}
.red {
  padding: 3px;
  border: 1px solid rgb(248, 248, 248);
  background: white;
  padding-left: 30%;
  color: #f23030;
  font-size: 14px;
}
</style>
