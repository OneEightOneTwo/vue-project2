<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text=""
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 购物车 -->
    <div class="main" v-for="(item,index) in items" :key="index">
      <div class="left">
        <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <van-card
        :num="item.num"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.imageURL"
      >
        <div slot="footer">
          <van-stepper v-model="item.value"/>
        </div>
      </van-card>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: "",
      items: [
        {
          value: "1",
          num: "1",
          price: "2298.00",
          title: "魅族 16th",
          desc: "全网通公开版 静夜黑 6+64GB",
          value: 1,
          imageURL: require("../../assets/1.jpg")
        },
        {
          value: "1",
          num: "1",
          price: "2298.00",
          title: "魅族 16th",
          desc: "全网通公开版 静夜黑 6+64GB",
          value: 1,
          imageURL: require("../../assets/1.jpg")
        },
        {
          value: "1",
          num: "1",
          price: "2298.00",
          title: "魅族 16th",
          desc: "全网通公开版 静夜黑 6+64GB",
          value: 1,
          imageURL: require("../../assets/1.jpg")
        }
      ]
    };
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    onSubmit() {}
  }
};
</script>
<style scoped>
.main {
  position: relative;
}
.left {
  /* position: fixed;
    top: 20px; */
  position: absolute;
  top: 40px;
  z-index: 999;
  left: 5px;
}
.van-card {
  padding: 5px 40px;
}
.van-submit-bar {
  bottom: 53px;
}
</style>



