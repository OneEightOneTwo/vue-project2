<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <div class="left">
          <router-link to="/home">
            <i class="iconfont icon-iconfanhui"></i>
          </router-link>
        </div>
        <div class="center">
          <h1>Welcome</h1>
        </div>
      </div>
      <div class="lmian">
        <div class="login-main">
          <form class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-8">
                <input type="text" ref="name" class="form-control" placeholder="用户名">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8">
                <input type="password" ref="pwd" class="form-control" placeholder="密码">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8 inptext">
                <button type="button" class="btn btn-danger btn-lg btn-block" @click="add">Login</button>
              </div>
            </div>
          </form>
        </div>
        <div class="login-base">
          <div class="login-base-le">
            <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
            <span class="fl">忘记密码</span>
          </div>
          <router-link to="/register">
            <div class="login-base-ri">
              <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
              <span class="fr">快速注冊</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      visibility: false,
      list: []
    };
  },
  methods: {
    add: function() {
      var user = this.$refs.name.value;
      var pwd = this.$refs.pwd.value;
      console.log(user, pwd);
      if (user == "") {
        this.$alert("用户名不能为空");
      } else if (pwd == "") {
        this.$alert("密码不能为空");
      } else {
        var url = `http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f&cellphone=${user}&passwrod=${pwd}`;
        this.$http.post(url).then(res => {
          console.log(res);
          if (res.data.status == "0") {
            this.$toast("登陆成功");
            location.href = "";
          }
        });
      }
    }
  }
};
</script>

<style scoped>
input::-webkit-input-placeholder{
            color:white;
        }
.h1,
h1 {
  font-size: 30px;
  text-align: center;
  background: -webkit-linear-gradient(
    left,
    #147b96,
    #e6d205 25%,
    #147b96 50%,
    #e6d205 75%,
    #147b96
  );
  color: transparent;
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: masked-animation 1s infinite linear;
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

* {
  background: url(../assets/4.jpg);
}
.warp {
  width: 100%;
  height: 42rem;
}
.header {
  width: 100%;
  line-height: 1.5rem;
  display: flex;
}
.header .left {
  flex: 1;
}
.header .center {
  flex: 9;
  font-size: 20px;
  font-weight: normal;
}
.heder .center h1 {
  line-height: 1.5rem;
}
.form-control {
  display: block;
  width: 97%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #fff;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 24px;
  outline: none;
}
.lmian {
  flex: 1;
}
.col-sm-8 {
  position: relative;
  min-height: 1px;
}
.btn-block {
  width: 100%;
  height: 46px;
  outline: none;
  border-radius: 30px;
  font-size: 24px;
  color: skyblue;
}
.login-base {
  width: 90%;
  height: 3rem;
  margin-left: 5%;
  overflow: hidden;
  line-height: 1rem;
  border-radius: 30px;
}
.login-base-le {
  float: left;
  font-size: 1rem;
  color: white;
  line-height: 3rem;
  text-align: center;
  padding-left: 1rem;
}
.login-base-ri {
  float: right;
  font-size: 1rem;
  color: #fff;
  line-height: 3rem;
  padding-right: 1rem;
}
.form-horizontal .form-group {
  margin: 27px;
}
</style>
