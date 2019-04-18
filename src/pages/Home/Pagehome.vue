<template>
  <div>
    <header>
      <div class="top">
        <div class="left">MEIZU</div>
        <div class="main">
          <form action="/">
          <van-icon name="search" style="position:absolute;top:0.3rem;margin-left:0.2rem" size="20px"/> 
           <input @click="got" type="text" placeholder="魅族15">
          </form>
        </div>
        <div class="right">
          <img src="../../assets/news.png" alt>
        </div>
      </div>
      <van-swipe :autoplay="3000" indicator-color="white" style="height:240px;">
        <van-swipe-item>
          <img src="../../assets/banner1.jpg" alt style="height:300px;width:100%">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner2.jpg" alt style="height:100%;width:100%">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner3.jpg" alt style="height:100%;width:100%">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner4.jpg" alt style="height:100%;width:100%">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner5.jpg" alt style="height:100%;width:100%">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner6.jpg" alt style="height:100%;width:100%">
        </van-swipe-item>
      </van-swipe>
    </header>
    <div class="index-hot-site" id="index-hot-site">
      <div class="hot-tip-bar">
        <span class="icon" data-mtype="mgw_index_yl_service" data-bh="click_mgw_index_yl_service">
          <img src="../../assets/m.png">魅族官方直供
        </span>
        <span class="icon" data-mtype="mgw_index_yl_service" data-bh="click_mgw_index_yl_service">
          <img src="../../assets/m.png">满80免运费
        </span>
        <span class="icon" data-mtype="mgw_index_yl_service" data-bh="click_mgw_index_yl_service">
          <img src="../../assets/m.png">7 天无理由退货
        </span>
      </div>
      <div class="hot-site">
        <ul>
          <li>
            <a href data-mtype="mall_index_menu_1" data-bh="click_mall_index_menu_1">
              <img src="../../assets/mm1.png" alt>
              <span>16th系列</span>
            </a>
          </li>
          <li>
            <a href data-mtype="mall_index_menu_2" data-bh="click_mall_index_menu_2">
              <img src="../../assets/mm2.jpg" alt>
              <span>限时3期免息</span>
            </a>
          </li>
          <li>
            <a href data-mtype="mall_index_menu_3" data-bh="click_mall_index_menu_3">
              <img src="../../assets/mm3.png" alt>
              <span>以旧换新</span>
            </a>
          </li>
          <li>
            <a href data-mtype="mall_index_menu_4" data-bh="click_mall_index_menu_4">
              <img src="../../assets/mm4.png" alt>
              <span>M码通道</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 广告banner -->
    <div class="index-banner" id="index-banner">
      <div class="row">
        <div class="banner-lg">
          <a
            href="https://detail.meizu.com/item/meizunote9.html?click=mall_index_ad_1"
            data-mtype="mall_index_ad_1"
            data-bh="click_mall_index_ad_1"
          >
            <img src="../../assets/advertising1.jpg">
          </a>
        </div>
      </div>
      <div class="row">
        <div class="banner-lg">
          <a
            href="https://detail.meizu.com/item/meizu16x.html?click=mall_index_ad_2"
            data-mtype="mall_index_ad_2"
            data-bh="click_mall_index_ad_2"
          >
            <img src="../../assets/advertising2.png">
          </a>
        </div>
        <div class="banner-lg">
          <a
            href="https://detail.meizu.com/item/meizu_ep51.html?click=mall_index_ad_3"
            data-mtype="mall_index_ad_3"
            data-bh="click_mall_index_ad_3"
          >
            <img src="../../assets/advertising3.jpg">
          </a>
        </div>
      </div>
    </div>
    <!-- 智能手机-->
    <div class="index-phone-list">
      <h3 class="list-title">智能手机</h3>
      <div class="list-ad">
        <a
          href="https://detail.meizu.com/item/meizu16x.html?click=mall_index_kw_1_1"
          data-mtype="mall_index_kw_1_1"
          data-bh="click_mall_index_kw_1_1"
        >
          <img
            src="../../assets/advertising4.jpg"
            lazy-src="https://openfile.meizu.com/group1/M00/07/08/Cgbj0VxmbimAFFM6AAJBovov-HM067.jpg"
            alt
          >
        </a>
      </div>
      <div class="phone-list" id="phoneList">
        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizu16th.html?click=mall_index_kw_1_2"
            data-mtype="mall_index_kw_1_2"
            data-bh="click_mall_index_kw_1_2"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"
              lazy-src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"
              alt="魅族 16th"
            >
            <div class="info">
              <p class="products-name">魅族 16th</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>直降</em>骁龙845 屏幕下指纹
                </span>
              </p>

              <p class="price">
                <i>￥</i>2298
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizu16thplus.html?click=mall_index_kw_1_3"
            data-mtype="mall_index_kw_1_3"
            data-bh="click_mall_index_kw_1_3"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"
              lazy-src="https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png"
              alt="魅族 16th Plus"
            >
            <div class="info">
              <p class="products-name">魅族 16th Plus</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>直降</em>骁龙845 屏幕下指纹
                </span>
              </p>

              <p class="price">
                <i>￥</i>2698
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizunote9.html?click=mall_index_kw_1_4"
            data-mtype="mall_index_kw_1_4"
            data-bh="click_mall_index_kw_1_4"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png"
              lazy-src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png"
              alt="魅族 Note9"
            >
            <div class="info">
              <p class="products-name">魅族 Note9</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>新品</em>骁龙675 后置4800万
                </span>
              </p>

              <p class="price">
                <i>￥</i>1398
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizu16x.html?click=mall_index_kw_1_5"
            data-mtype="mall_index_kw_1_5"
            data-bh="click_mall_index_kw_1_5"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
              lazy-src="https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
              alt="魅族 16 X"
            >
            <div class="info">
              <p class="products-name">魅族 16 X</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>领券</em>骁龙710 轻奢旗舰
                </span>
              </p>

              <p class="price">
                <i>￥</i>1798
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizux8.html?click=mall_index_kw_1_6"
            data-mtype="mall_index_kw_1_6"
            data-bh="click_mall_index_kw_1_6"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"
              lazy-src="https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"
              alt="魅族 X8"
            >
            <div class="info">
              <p class="products-name">魅族 X8</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>领券</em>骁龙710 旗舰双摄
                </span>
              </p>

              <p class="price">
                <i>￥</i>1298
              </p>
            </div>
          </a>
        </div>
        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizuv8.html?click=mall_index_kw_1_7"
            data-mtype="mall_index_kw_1_7"
            data-bh="click_mall_index_kw_1_7"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMOAFzUFAARRWnHvM84529.png"
              lazy-src="https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMOAFzUFAARRWnHvM84529.png"
              alt="魅族 V8 高配版"
            >
            <div class="info">
              <p class="products-name">魅族 V8 高配版</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>领券</em>双摄全面屏 游戏长续航
                </span>
              </p>

              <p class="price">
                <i>￥</i>898
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizunote8.html?click=mall_index_kw_1_8"
            data-mtype="mall_index_kw_1_8"
            data-bh="click_mall_index_kw_1_8"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png"
              lazy-src="https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png"
              alt="魅族 Note8"
            >
            <div class="info">
              <p class="products-name">魅族 Note8</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>领券</em>骁龙632 疾速双摄
                </span>
              </p>

              <p class="price">
                <i>￥</i>999
              </p>
            </div>
          </a>
        </div>

        <div class="phone-content">
          <a
            href="https://detail.meizu.com/item/meizu_15plus.html?click=mall_index_kw_1_9"
            data-mtype="mall_index_kw_1_9"
            data-bh="click_mall_index_kw_1_9"
          >
            <img
              src="https://openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png"
              lazy-src="https://openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png"
              alt="魅族 15 Plus"
            >
            <div class="info">
              <p class="products-name">魅族 15 Plus</p>

              <p class="slogan slogan-sale">
                <span>
                  <em>领券</em>限量领券更优惠 | 三星8895处理器 2000万暗光双摄
                </span>
              </p>

              <p class="price">
                <i>￥</i>1798
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 魅族声学-->
    <div v-for="(t,index) in tabbar" :key="index" class="index-phone-list">
      <h3 class="list-title" v-text="t.title"></h3>
      <div class="audio-list-ad" id="audio-list-ad">
        <div class="accessoary-ad" style="background:#F55C5C">
          <a
            href="https://detail.meizu.com/item/meizu_g20.html?click=mall_index_kw_2_1"
            data-mtype="mall_index_kw_2_1"
            data-bh="click_mall_index_kw_2_1"
          >
            <div>
              <h4 v-text="t.name1"></h4>
              <p v-text="t.use1"></p>
              <span class="price">
                <i v-text="t.nowprice1">￥499</i>
                <s v-text="t.agoprice"></s>
              </span>
            </div>
            <img
              :src="t.img1"
              lazy-src="https://fms.res.meizu.com/dms/2018/12/20/df9a311b-4fdc-4678-9a40-da281796ea0a.jpg"
              alt
            >
          </a>
        </div>

        <div class="accessoary-ad" style="background:#7063C9">
          <a
            href="https://detail.meizu.com/item/meizu_ep52_lite.html?click=mall_index_kw_2_2"
            data-mtype="mall_index_kw_2_2"
            data-bh="click_mall_index_kw_2_2"
          >
            <div>
              <h4>魅族 EP52 Lite 蓝牙耳机</h4>
              <p>超高性价比创造无线新声代</p>
              <span class="price">
                <i v-text="t.nowprice2"></i>
              </span>
            </div>
            <img
              :src="t.img2"
              lazy-src="https://fms.res.meizu.com/dms/2018/12/29/c76d0c8b-4661-46d3-b823-fa2239378063.jpg"
              alt
            >
          </a>
        </div>
      </div>
      <div class="phone-list" id="phoneList">
        <div class="phone-content" v-for="(g,idx) in t.tab" :key="idx">
          <a
            href="https://detail.meizu.com/item/meizu16th.html?click=mall_index_kw_1_2"
            data-mtype="mall_index_kw_1_2"
            data-bh="click_mall_index_kw_1_2"
          >
            <img
              :src="g.image"
              lazy-src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png"
              alt="魅族 16th"
            >
            <div class="info">
              <p class="products-name" v-text="g.pname"></p>

              <p class="slogan">
                <span v-text="g.user"></span>
              </p>
              <p class="price">
                <i v-text="g.nprice"></i>
                <s v-text="g.aprice"></s>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 返回顶部 -->
    <div @click="back" class="index-back-center" id="index-back-center">
      <div class="back-to-top" id="toTop">
        <span>返回顶部</span>
      </div>
    </div>
    <!-- 正品 -->
    <div class="index-footer-service" id="index-footer-service">
      <div>
        <a
          href="https://mall.meizu.com/marrive/summary.html"
          data-mtype="mall_index_buttom_serv_1"
          data-bh="click_mall_index_buttom_serv_1"
        >
          <img
            src="https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg"
            lazy-src="https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg"
            alt
          >
        </a>
      </div>

      <div>
        <a
          href="http://service.meizu.com/authenticity.html"
          data-mtype="mall_index_buttom_serv_2"
          data-bh="click_mall_index_buttom_serv_2"
        >
          <img
            src="https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg"
            lazy-src="https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg"
            alt
          >
        </a>
      </div>

      <div>
        <a
          href="http://service.meizu.com/help/after_ser.html#policy3"
          data-mtype="mall_index_buttom_serv_3"
          data-bh="click_mall_index_buttom_serv_3"
        >
          <img
            src="https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg"
            lazy-src="https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg"
            alt
          >
        </a>
      </div>

      <div>
        <a
          href="https://bbs.res.meizu.com/static_new/guide/"
          data-mtype="mall_index_buttom_serv_4"
          data-bh="click_mall_index_buttom_serv_4"
        >
          <img
            src="https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg"
            lazy-src="https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg"
            alt
          >
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabbar: [
        {
          title: "魅族声学",
          img1:
            "https://fms.res.meizu.com/dms/2018/12/20/df9a311b-4fdc-4678-9a40-da281796ea0a.jpg",
          img2:
            "https://fms.res.meizu.com/dms/2018/12/29/c76d0c8b-4661-46d3-b823-fa2239378063.jpg",
          name1: "魅族 HALO 激光蓝牙耳机",
          use1: "夜跑神器 随性张扬",
          name2: "魅族 EP52 Lite 蓝牙耳机",
          use2: "超高性价比创造无线新声代",
          nowprice1: "￥499",
          nowprice2: "￥129",
          agoprice: "￥999",
          tab: [
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            }
          ]
        },
        {
          title: "智能配件",
          img1:
            "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg",
          img2:
            "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg",
          name1: "魅族 HALO 激光蓝牙耳机",
          use1: "夜跑神器 随性张扬",
          name2: "魅族 EP52 Lite 蓝牙耳机",
          use2: "超高性价比创造无线新声代",
          nowprice1: "￥499",
          nowprice2: "￥129",
          agoprice: "￥999",
          image1:
            "https://openfile.meizu.com/group1/M00/07/1C/Cgbj0Vyi-aOAT8yaAAW5mQNdc_c215.png",
          tab: [
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            }
          ]
        },
        {
          title: "生活周边",
          img1:
            "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg",
          img2:
            "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg",
          name1: "魅族 HALO 激光蓝牙耳机",
          use1: "夜跑神器 随性张扬",
          name2: "魅族 EP52 Lite 蓝牙耳机",
          use2: "超高性价比创造无线新声代",
          nowprice1: "￥499",
          nowprice2: "￥129",
          agoprice: "￥999",
          image1:
            "https://openfile.meizu.com/group1/M00/07/1C/Cgbj0Vyi-aOAT8yaAAW5mQNdc_c215.png",
          tab: [
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            },
            {
              image:
                "https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png",
              pname: "POP 真无线蓝牙耳机",
              user: "双无线 零设限",
              nprice: "￥399",
              aprice: "￥499"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    back() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      // let that = this;
      // let timer = setInterval(() => {
      //   let ispeed = Math.floor(-that.scrollTop / 5);
      //   document.documentElement.scrollTop = document.body.scrollTop =
      //     that.scrollTop + ispeed;
      //   if (that.scrollTop === 0) {
      //     clearInterval(timer);
      //   }
      // }, 40);
    },
    got() {
      this.$route.path === "/search"
        ? this.$router.push({ path: "/pagehome" })
        : this.$router.push({ path: "/search" });
    }
  }
};
</script>
<style scoped>
/* css是局部样式 */
/* 头部 */
.top {
  margin-top: 1.333333rem;
  display: flex;
  position: fixed;
  z-index: 1000;
  width: 100%;
}
.left {
  flex: 2;
  padding-left: 0.8rem;
  color: white;
}
.main {
  flex: 3;
  padding-left: 1.066667rem;
}
input {
  height: 1.6rem;
  width: 13rem;
  border-radius: 0.933333rem;
  padding-left: 1.366667rem;
}
.right {
  flex: 2;
  /* padding-top: 0.6rem; */
  padding-left: 0.933333rem;
}
.right img {
  height: 1.733333rem;
  width: 1.733333rem;
}
#index-hot-site {
  /* background: #999; */
}
.index-hot-site {
  background: #fff;
  margin-bottom: 0.666667rem;
}
.index-hot-site .hot-tip-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.666667rem 0.933333rem;
  text-align: center;
  background-color: #f7f7f7;
}
.index-hot-site .hot-tip-bar span {
  display: inline-block;
  padding-left: 1.066667rem;
  font-size: 0.266667rem;
  color: #999;
  position: relative;
}
.index-hot-site .hot-tip-bar img {
  position: absolute;
  width: 3.51852vw;
  height: 3.51852vw;
  background: #999;
  left: 0;
  border-radius: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.index-hot-site .hot-site {
  text-align: center;
}
.index-hot-site .hot-site ul {
  padding-top: 4vw;
  padding-bottom: 1vw;
}
.index-hot-site .hot-site li {
  display: inline-block;
  width: 20vw;
  height: 17vw;
  margin: 0 1vw;
}
.index-hot-site .hot-site li span {
  color: #000;
  line-height: 2.6;
  font-size: 3.33333vw;
}
.index-hot-site .hot-site li img {
  display: block;
  width: 8.33333vw;
  margin: 0 auto;
}
/* 广告 */
.index-banner {
  display: flex;
  flex-wrap: wrap;
  height: 69vw;
  /* overflow: hidden; */
}
.index-banner .row {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
}
.index-banner .row:nth-child(1) .banner-lg {
  height: 69.44444vw;
}
.index-banner img {
  width: 100%;
}
.index-banner .row:nth-child(2) .banner-lg {
  height: 34.72222vw;
}

/* 智能手机 */
.list-title {
  font-size: 4.81481vw;
  font-weight: 700;
  padding: 6vw 0 7vw;
  text-align: center;
  position: relative;
}
.list-title:after {
  position: absolute;
  content: "";
  width: 6vw;
  height: 0.7vw;
  background: #0bbbef;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  bottom: 4vw;
}
.index-phone-list .list-ad img {
  display: block;
  width: 100%;
}
.phone-list {
  display: flex;
  flex-wrap: wrap;
  background: #f4f4f4;
  padding: 1.5vw 0;
  align-items: center;
  justify-content: space-between;
}
.phone-list .phone-content {
  position: relative;
  width: 49.2%;
  text-align: center;
  background: #fff;
  padding-top: 6.2963vw;
  padding-bottom: 4.90741vw;
  margin-bottom: 1.11111vw;
  box-sizing: border-box;
}
.phone-list .phone-content img {
  display: inline-block;
  width: 85%;
  min-height: 100px;
  will-change: height;
}
.phone-list .phone-content .products-name {
  font-size: 3.88889vw;
  color: #333;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.phone-list .phone-content .slogan {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.33333vw;
  color: #999;
  margin: 0 1.5vw;
  margin-top: 1.75926vw;
  margin-bottom: 2.5vw;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.phone-list .phone-content .slogan.slogan-sale span {
  color: #c00;
  border: 1px solid #c00;
  line-height: 4.62963vw;
}
.phone-list .phone-content .slogan span {
  font-style: normal;
  padding: 0 1.25vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid transparent;
}
.phone-list .phone-content .slogan em {
  float: left;
  padding: 0 1.25vw;
  margin-left: -1.25vw;
  margin-right: 1.25vw;
  color: #fff;
  background-color: #c00;
  font-style: normal;
}
.phone-list .phone-content .price {
  font-size: 3.88889vw;
  color: #c00;
}
.phone-list .phone-content .price i {
  font-style: normal;
  font-size: 2.8vw;
}
/* 魅族声学 */
.accessoary-ad {
  height: 43.88889vw;
  position: relative;
  background: #7063c9;
  overflow: hidden;
}
.accessoary-ad:nth-child(odd) div {
  right: 0;
}
.accessoary-ad div {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 0;
  color: #fff;
  line-height: 6vw;
  padding: 3.88889vw;
}
.accessoary-ad h4 {
  font-size: 4.62963vw;
  width: 33.33333vw;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.accessoary-ad p {
  font-size: 3.33333vw;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  line-height: 1.2;
  padding: 1.2vw 0;
}
.accessoary-ad span {
  position: absolute;
  left: 3.88889vw;
  bottom: 14vw;
  font-size: 4.62963vw;
}
.accessoary-ad i {
  font-style: normal;
}
.accessoary-ad s {
  margin-left: 2vw;
  font-size: 2.77778vw;
  color: rgba(255, 255, 255, 0.7);
}
.accessoary-ad img {
  position: absolute;
  width: 50%;
}
.accessoary-ad:nth-child(even) img {
  right: 0;
}
.phone-list .phone-content .price s {
  color: #999;
  /* font-size: 3vw; */
  /* padding-left: 1vw; */
}
/* 返回顶部 */
.back-to-top {
  display: flex;
  /* position: fixed; */
  bottom: 100px;
  justify-content: center;
  align-items: center;
  height: 4.333333rem;
  font-size: 1rem;
  background: #f3f3f3;
}
.back-to-top span {
  display: inline-block;
  color: #999;
}
/* 正品 */
.index-footer-service {
  display: flex;
  padding: 4vw 4vw 0;
  overflow: hidden;
  margin-bottom: 3.8rem;
}
.index-footer-service div {
  flex: 1;
}
.index-footer-service div a {
  display: block;
}
.index-footer-service div img {
  display: block;
  width: 16vw;
  margin: auto;
}
</style>
