<template>
  <div class="member-index">
    <!-- 头部 -->
    <div class="header">
      <div class="member-info">
        <div class="img-box">
          <img src="../../assets/mini-uc.png">
        </div>
        <span class="name">用户502554624</span>
      </div>
      <!-- 消息 -->
      <div class="advices">
        <van-icon name="chat-o" size="25px" color="white" />
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="myorders">
      <div class="top">
        <span>我的订单</span>
        <a href="/" class="goto-allorder">
          查看全部订单
          <van-icon name="arrow"/>
        </a>
      </div>
      <div class="order-status">
        <a href="/">
          <i class="obligation">
            <van-icon name="pending-payment" size="30px" class="icon"/>
          </i>
          待付款
          <hr>
        </a>
        <a href="/">
          <i class="obligation">
            <van-icon name="logistics" size="30px" class="icon"/>
          </i>
          待发货
          <hr>
        </a>
        <a href="/">
          <i class="obligation">
            <van-icon name="send-gift-o" size="30px" class="icon"/>
          </i>
          待收货
          <hr>
        </a>
        <a href="/">
          <i class="obligation">
            <van-icon name="after-sale" size="30px" class="icon"/>
          </i>
          退款/售后
        </a>
      </div>
    </div>
    <!-- 我的收藏 -->
    <div class="member-item">
      <a href="//me.m.meizu.com/home/m/favorite_list">我的收藏</a>
      <a href="//me.m.meizu.com/home/address/index">我的地址</a>
      <a href="//me.m.meizu.com/home/m/redenvelop_list">我的红包</a>
      <a href="//me.m.meizu.com/home/m/coupon_list">我的优惠券</a>
    </div>
    <!-- M码通道 -->
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>M码通道</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>手机号查询订单</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>以旧换新</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>百城速达</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>联系客服</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>意见反馈</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
    </div>
    <!-- 退出登录 -->
    <a href="javascript:;" id="j-exit" class="exit">退出登录</a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.member-index {
  background-color: #eee;
  margin-bottom: 53px;
}
/* 头部 */
.header {
  /* height: 4rem; */
  background: url(../../assets/mine-top.jpg) no-repeat 50%;
  height: 9rem;
  position: relative;
}
.header .member-info,
.public-center-completely,
.service .up-proof .proof-list .imging img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header .member-info {
  width: 100%;
  text-align: center;
}
.header .member-info .img-box {
  width: 5.13889rem;
  height: 5.08333rem;
  border: 0.05556rem solid #fff;
  border-radius: 3.06944rem;
  background-color: #fff;
  margin: 0.13889rem auto 0;
}
.header .member-info .img-box img {
  width: 5.1234rem;
  height: 5rem;
  line-height: 3.88889rem;
  display: block;
  border-radius: 3.06944rem;
}
.header .member-info span {
  display: block;
  color: #fff;
  font-size: 1.013333rem;
  margin-top: 0.27778rem;
}
.header .advices{
  float: right;
  margin: .91667rem;
}
/* 我的订单 */
.myorders {
  margin-top: 0.49444rem;
  background-color: #fff;
}
.myorders .top {
  position: relative;
  padding: 0 1.2rem;
  font-size: 1.01667rem;
  height: 2.5rem;
  display: flex;
  line-height: 2.5rem;
}
.myorders .top span {
  color: #444;
  flex: 1;
}
.myorders .top a {
  font-size: 0.83333rem;
  color: #999;
  display: block;
}
.myorders .top a:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 1px;
  background-color: #e5e5e5;
  transform: scaleY(0.5);
  pointer-events: none;
}
/* 待付款 */
.member-index .myorders .order-status {
  height: 4.05556rem;
  border-bottom: 1px solid #e5e5e5;
  color: #666;
  font-size: 0.33333rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.member-index .myorders .order-status .obligation:before {
  /* font-size: .625rem; */
  display: block;
  margin-top: 0.25rem;
  color: #999;
}
.member-index .myorders .order-status .obligation {
  height: 2.266667rem;
  width: 2.266667rem;
  display: block;
  margin-top: 0.25rem;
  color: #999;
  margin-left: 32%;
  line-height: 2.266667rem;
}

.member-index .myorders .order-status a {
  position: relative;
  display: block;
  width: 2.5rem;
  color: #666;
  text-decoration: none;
  flex: 2;
}
.member-index .myorders .order-status a hr {
  position: absolute;
  display: block;
  width: 1px;
  border: none;
  height: 2.43333rem;
  border-right: 1px solid #ddd;
  top: 1.06389rem;
  right: 0;
}
/* 我的收藏 */
.member-index .member-item {
  background-color: #fff;
  height: 5.05556rem;
  margin-top: 0.39444rem;
  color: #666;
  font-size: 0.33333rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  /* margin-top: .666667rem; */
}
.member-index .member-item a {
  flex: 1;
  color: #666;
  margin-top: 0.666667rem;
  padding-top: 2.2rem;
  display: block;
  width: 2.5rem;
  text-align: center;
}
.member-index .member-item a:first-child{
  background: url(../../assets/collect.png) no-repeat center 10%;
  background-size: 1.66667rem 1.66667rem;
}
.member-index .member-item a:nth-child(2){
  background: url(../../assets/site.png) no-repeat center 10%;
  background-size: 1.66667rem 1.66667rem;
}
.member-index .member-item a:nth-child(3){
  background: url(../../assets/packet.png) no-repeat center 10%;
  background-size: 1.66667rem 1.66667rem;
}
.member-index .member-item a:nth-child(4){
  background: url(../../assets/discount.png) no-repeat center 10%;
  background-size: 1.66667rem 1.66667rem;
}
/* M码通道 */
.weui-cells {
  margin-top: 0.39444rem;
}
/* 退出登录 */
.member-index .exit {
  /* display: flex; */
  background-color: #fff;
  display: block;
  color: #333;
  height: 3.56944rem;
  line-height: 3.56944rem;
  text-align: center;
  font-size: 0.98889rem;
  margin-top: 2.15278rem;
}
</style>

