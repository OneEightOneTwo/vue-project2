<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <div class="left">
          <router-link to="/login">
            <i class="iconfont icon-iconfanhui"></i>
          </router-link>
        </div>
        <div class="centers">
          <h1>ShareLink</h1>
          <h2>Link the world. Share to world</h2>
        </div>
      </div>
      <div class="rmain">
        <div class="register-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="用户名" ref="pwd">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="密码" ref="pwd">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="确认密码" ref="pwd">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="邮箱" ref="pwd">
          </div>
          <div class="form-group">
            <input type="text" class="form-control yz" ref="yanzhen" placeholder="验证码">
            <div class="form-group-yz">
              <img @click="refreshpic" :src="imgSrc" class="form-group-yz-img">
            </div>
          </div>

          <button type="button" class="btn btn-danger btn-lg btn-block" @click="register">Check</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      //图片验证码
      imgSrc:
        "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=1312423435",
      //用来发判断发送验证码
      isrefreshpic: false,
      //定时器初始值
      auth_time: 0,
      //disabled的初始值
      btnBoolen: true,
      btnClassName: "btn",
      btnValue: "获取短信验证码"
    };
  },
  methods: {
    //图片验证码
    refreshpic: function() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc =
        "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=1312423435" +
        sj;
    }
      }
    };
  
</script>

<style scoped>
.warp {
  width: 100%;
  height: 42rem;
}
.h1,
h1 {
  line-height: 2rem;
  font-size: 2rem;
  color: white;
  text-align: center;
}
h2 {
  font-size: 1rem;
  padding-left: 18%;
  color: white;
}
* {
  background: url(../assets/1.jpg);
}
.btn-block {
  display: block;
  width: 94%;
  margin-left: 10px;
  height: 60px;
  border-radius: 68px;
  color: #ff0052; /* Fallback Color */
  text-transform: uppercase;
  font-weight: bold;
  font-family: helvetica;
  text-align: center;
  font-size: 16px;
  outline: none;
}

.header {
  width: 100%;
  line-height: 1rem;
  display: flex;
  margin-bottom: 3rem;
}

.header .centers {
  flex: 10;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
  color: #555;
  background-image: none;
  border: 1px solid #ccc;
  background: white;
  opacity: 0.8;
  outline: none;
}
.form-control {
  width: 87%;
  margin-left: 2.75%;
  height: 45px;
  border-radius: 68px;
}
.register-form {
}

.form-control {
  margin-bottom: 15px;
}

.register-form-inp {
  width: 63%;
  float: left;
}
.form-group {
  margin-bottom: 15px;
}
.register-form-btn {
  width: 30%;
  float: left;
  margin-left: 2%;
}
.register-form-btn .btn {
  background: #ccc;
  border: none;
}
.register-form-btn .btns {
  background: #fff;
  border: 1px solid #9e157c;
  color: #9e157c;
}
.form-group-yz {
  position: relative;
}
.form-group-yz-img {
  width: 4.9rem;
  height: 2.5rem;
  position: absolute;
  top: -63px;
  left: 69%;
}
.register-form-btn {
  width: 30%;
  float: left;
  margin-left: 2%;
}
.register-form-btn button {
  font-size: 0.2rem;
  color: #000000;
}
</style>

