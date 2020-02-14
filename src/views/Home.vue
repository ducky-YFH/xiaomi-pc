<template>
  <div class="home">
    <!-- 顶部导航 -->
    <header>
      <div class="topNav">
        <TopNav></TopNav>
      </div>
      <!-- 首页导航 -->
      <div class="homenav">
        <div class="homenav-left"></div>
        <div class="homenav-center">
          <ul>
            <li v-for="(item, index) in homeNavList" :key="index">
              <a @mouseenter="slideDown(index)" @mouseleave="slideUp" href="">{{
                item
              }}</a>
            </li>
          </ul>
        </div>
        <div class="homenav-right">
          <input type="text" />
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <!-- 首页导航展示栏 -->
      <div
        class="homenav-show"
        @mouseenter="slideDown()"
        @mouseleave="slideUp"
        ref="homeNav"
      >
        <ul>
          <li>
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&w=160&h=110&f=webp&q=90"
                alt=""
              />
              <div>小米CC9 Pro</div>
              <div>2599元起</div>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&w=160&h=110&f=webp&q=90"
                alt=""
              />
              <div>小米CC9 Pro</div>
              <div>2599元起</div>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <!-- 主体内容 -->
    <main class="container ">
      <!-- 侧边选择栏 -->
      <div class="aside-carousel">
        <aside>
          <ul>
            <li
              v-for="(item, index) in asideNav"
              :key="index"
              @mouseenter="asideShow(index)"
              @mouseleave="asideHide"
            >
              <span>{{ item }}</span
              ><i class="iconfont icon-right"></i>
            </li>
          </ul>
        </aside>
        <!-- 轮播图 -->
        <div class="carousel">
          <swiper class="swiper" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide style="background: #007aff">
              <a href="">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                  alt=""
                />
              </a>
            </swiper-slide>
            <swiper-slide style="background: #007aff">
              <a href="">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                  alt=""
                />
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <!-- 侧边栏展开框 -->
        <div
          class="aside-show"
          ref="asideShow"
          @mouseenter="asideShow"
          @mouseleave="asideHide"
        >
          <ul class="aside-show-col" v-for="count in asideShowCol" :key="count">
            <li
              v-for="item in asideShowList.slice((count - 1) * 6, count * 6)"
              :key="item.id"
            >
              <a href="">
                <img :src="item.img" alt="" />
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 推荐产品 -->
      <div class="recomment">
        <div class="recomment-cart-left">
          <a href="">
            <i class="iconfont icon-naozhong"></i>
            <p>小米秒杀</p>
          </a>
          <a href="">
            <i class="iconfont icon-iconqyxx"></i>
            <p>企业团购</p>
          </a>
          <a href="">
            <i class="iconfont icon-F"></i>
            <p>F码通道</p>
          </a>
          <a href="">
            <i class="iconfont icon-ai-SIM"></i>
            <p>米粉卡</p>
          </a>
          <a href="">
            <i class="iconfont icon-tuihuanhuo"></i>
            <p>以旧换新</p>
          </a>
          <a href="">
            <i class="iconfont icon-chongzhi"></i>
            <p>话费充值</p>
          </a>
        </div>
        <div class="recomment-cart">
          <a href=""
            ><img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bc54a61b927dd8c54ddd39a0acf0254.jpg?w=632&h=340"
              alt=""
          /></a>
        </div>
        <div class="recomment-cart">
          <a href=""
            ><img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c74e01afe50a86c3a87ff030b85781.jpg?w=632&h=340"
              alt=""
          /></a>
        </div>
        <div class="recomment-cart">
          <a href=""
            ><img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
              alt=""
          /></a>
        </div>
      </div>
      <!-- 主体内容重要部分 -->
      <div class="main-content">
        <!-- 小米闪购 -->
        <div class="flash-buy">
          <div class="flash-buy-head">
            <h1>小米闪购</h1>
            <!-- 轮播图前后控制器 -->
            <div class="swiper2-controls">
              <div class="swiper2-button-prev" slot="button-prev">
                <i class="iconfont icon-left2"></i>
              </div>
              <div class="swiper2-button-next" slot="button-next">
                <i class="iconfont icon-right2"></i>
              </div>
            </div>
          </div>
          <div class="flash-buy-content">
            <div class="left">
              <div>14: 00 场</div>
              <img src="../assets/images/flash.png" alt="" />
              <div>距离结束还有</div>
              <div class="flash-countdown">
                <span>{{ flashCountDown.hour }}</span>
                <i>:</i>
                <span>{{ flashCountDown.minute }}</span>
                <i>:</i>
                <span>{{ flashCountDown.second }}</span>
              </div>
            </div>
            <div class="right">
              <swiper class="swiper2" :options="swiperOption2" ref="mySwiper">
                <!-- slides -->
                <swiper-slide
                  style="background: pink"
                  v-for="item in 8"
                  :key="item"
                >
                  <a href="" class="swiper2-slide-item">
                    <div>
                      <img
                        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571038766.41824452.jpg?thumb=1&w=200&h=200"
                        alt=""
                      />
                    </div>
                    <p>MIJOY 抽纸青春版 24包/箱</p>
                    <p>精选原生竹浆，健康环保</p>
                    <p>
                      <span>27.9元</span>
                      <del>32.9元</del>
                    </p>
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="recommend-card">
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/731d72805fb720532079afd58645f6b9.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
                alt=""
              />
            </a>
          </div>
        </div>
        <!-- 卡片式商品展示 -->
        <div class="shop-box">
          <!-- 手机列表 -->
          <div class="shop-card">
            <div class="card-head">
              <h1>手机</h1>
              <a href=""
                ><span>查看全部</span><i class="iconfont icon-Right"></i
              ></a>
            </div>
            <div class="card-content">
              <div class="left">
                <ul>
                  <li>
                    <a href="">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90"
                        alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="right">
                <ul>
                  <li v-for="item in 8" :key="item">
                    <a href="">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                        alt=""
                      />
                      <h3>Redmi K30</h3>
                      <p class="desc">120Hz流速屏, 全速热爱</p>
                      <p class="price">1599元</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-recommend">
              <a href="">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
                  alt=""
                />
              </a>
            </div>
          </div>
          <!-- 其他产品商品，和手机有点不一样，所以要修改一下样式 -->
          <div
            class="shop-card card-circul"
            ref="cardCircul"
            v-for="(item, index) in shopList"
            :key="index"
          >
            <div class="card-head" ref="cardHead">
              <h1>{{ item.title }}</h1>
              <div>
                <ul>
                  <li
                    v-for="(item2, index2) in item.types"
                    :key="index2"
                    :class="{ active: index2 == 0 }"
                    @mouseenter="cardRightActive(index, index2)"
                  >
                    {{ item2.name }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-content">
              <div class="left">
                <ul>
                  <li v-for="item3 in item.left" :key="item3.id">
                    <a href=""> <img :src="item3.img" alt=""/></a>
                  </li>
                </ul>
              </div>
              <div class="right" ref="cardRight">
                <ul
                  v-for="(item4, index4) in item.types"
                  :key="index4"
                  :class="{ active: index4 == 0 }"
                >
                  <li v-for="(item5, index5) in item4.list" :key="index5">
                    <a href="">
                      <img :src="item5.img" alt="" />
                      <h3>{{ item5.name }}</h3>
                      <p class="desc">{{ item5.desc }}</p>
                      <p class="price">
                        <span>{{ item5.price }}元</span>
                        <del>{{ item5.del }}</del>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-recommend">
              <a href="">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- 尾部 -->
    <footer>
      <div class="footer-one">
        <ul>
          <li>
            <i class="iconfont icon-weixiu"></i>
            <span>预约维修服务</span>
          </li>
          <li>
            <i class="iconfont icon-7"></i>
            <span>7天无理由退货</span>
          </li>
          <li>
            <i class="iconfont icon-15"></i>
            <span>15天免费换货</span>
          </li>
          <li>
            <i class="iconfont icon-liwu"></i>
            <span>满99元包邮</span>
          </li>
          <li>
            <i class="iconfont icon-dizhi"></i>
            <span>520余家售后网点</span>
          </li>
        </ul>
      </div>
      <div class="footer-two">
        <div class="left">
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
          <ul>
            <li class="left-head"><a href="">帮助中心</a></li>
            <li><a href="">账户管理</a></li>
            <li><a href="">购物指南</a></li>
            <li><a href="">订单操作</a></li>
          </ul>
        </div>
        <div class="right">
          <p>400-100-5678</p>
          <p>周一至周日 8:00-18:00</p>
          <p>(仅收市话费)</p>
          <a href="">
            <i class="iconfont icon-ziyuan"></i>
            <span>人工客服</span>
          </a>
        </div>
      </div>
      <div class="footer-three">
        <div>
          <div class="left"></div>
          <div class="right">
            <ul>
              <li><a href="">小米商城</a></li>
              <li><a href="">MIUI</a></li>
              <li><a href="">米家</a></li>
              <li><a href="">米聊</a></li>
              <li><a href="">多看</a></li>
              <li><a href="">游戏</a></li>
              <li><a href="">政企服务</a></li>
              <li><a href="">小米天猫店</a></li>
              <li><a href="">小米集团隐私政策</a></li>
              <li><a href="">小米公司儿童信息保护规则</a></li>
              <li><a href="">小米商城隐私政策</a></li>
              <li><a href="">小米商店用户协议</a></li>
              <li><a href="">问题反馈</a></li>
              <li><a href="">廉正举报</a></li>
              <li><a href="">诚信合规</a></li>
              <li><a href="">Select Location</a></li>
            </ul>
            <ul>
              <li>© mi.com 京ICP证110507号</li>
              <li>
                <a href="">京ICP备10046444号 京公网安备11010802020134号</a>
              </li>
              <li><a href="">京网文[2017]1530-131号</a></li>
              <li><a href="">（京）网械平台备字（2018）第00005号</a></li>
              <li>
                <a href="">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
              </li>
              <li><a href="">营业执照</a></li>
              <li>
                <a href="">网络食品经营备案（京）【2018】WLSPJYBAHF-12</a>
              </li>
              <li><a href="">食品经营许可证</a></li>
              <li>
                违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉
                本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
              </li>
            </ul>
            <ul>
              <li>
                <a href=""
                  ><img src="https://i1.mifile.cn/f/i/17/site/truste.png" alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img src="https://s01.mifile.cn/i/v-logo-2.png" alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img src="https://s01.mifile.cn/i/v-logo-1.png" alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-four">
        <div class="four-bg"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // homeNav临时数据
      homeNavList: [
        "小米手机",
        "Redmi 手机",
        "电视",
        "笔记本",
        "家电",
        "路由器",
        "智能硬件",
        "服务",
        "社区"
      ],
      // asideNav临时数据
      asideNav: [
        "手机电话卡",
        "电视盒子",
        "笔记本 显示器 平板",
        "家电 插线板",
        "出行 穿戴",
        "智能 路由器",
        "电源 配件",
        "健康 儿童",
        "耳机 音箱",
        "生活 箱包"
      ],
      // asideShow临时数据
      asideShowList: [
        {
          id: 1,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 2,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 3,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 4,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 5,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 6,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 7,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 8,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 9,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 10,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 11,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 12,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        },
        {
          id: 13,
          url: "1.com",
          name: "Redmi K30 4G",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&w=40&h=40&f=webp&q=90"
        }
      ],
      // asideShowCol临时数据
      asideShowCol: 0,
      //轮播图设置属性
      swiperOption: {
        // spaceBetween: 30, //板块间距
        loop: true, //无缝轮播
        centeredSlides: true,
        autoplay: {
          //自动轮播
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOption2: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        // spaceBetween: 30, //板块间距
        autoplay: {
          //自动轮播
          delay: 4000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper2-button-next",
          prevEl: ".swiper2-button-prev",
          disabledClass: "swiper2-button-disabled"
        }
      },
      // 小米闪购倒计时
      flashCountDown: {
        hour: "00",
        minute: "00",
        second: "00"
      },
      // 小米商品临时数据
      shopList: [
        {
          title: "家电",
          left: [
            {
              id: 23121,
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?thumb=1&w=234&h=300&f=webp&q=90"
            },
            {
              id: 21311,
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?thumb=1&w=234&h=300&f=webp&q=90"
            }
          ],
          types: [
            {
              name: "热门",
              list: [
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            },
            {
              name: "电视影音",
              list: [
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            },
            {
              name: "安防",
              list: [
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            }
          ]
        },
        {
          title: "智能",
          left: [
            {
              id: 23121,
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?thumb=1&w=234&h=300&f=webp&q=90"
            },
            {
              id: 21311,
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?thumb=1&w=234&h=300&f=webp&q=90"
            }
          ],
          types: [
            {
              name: "热门",
              list: [
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            },
            {
              name: "热门",
              list: [
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            },
            {
              name: "安防",
              list: [
                {
                  img:
                    "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!100x100.jpg",
                  name: "米家空调",
                  desc: "变频节能省电，自清洁",
                  price: 2333
                },
                {
                  img:
                    "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!100x100.jpg",
                  name: "米家电视",
                  desc: "超清电视震撼感受",
                  price: 4561
                },
                {
                  img:
                    "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!100x100.jpg",
                  name: "米家电话",
                  desc: "神一般的音质，超长通话",
                  price: 110
                },
                {
                  img:
                    "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!100x100.jpg",
                  name: "米家电饭锅",
                  desc: "变频节能省电，自清洁",
                  price: 231
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    // ++++++++++++++++++++顶部导航事件++++++++++++++++++++
    slideDown(index) {
      // 获取到索引号
      if (index) {
        console.log(index);
      }
      // 给导航栏添加一个class，用于显示
      this.$refs.homeNav.classList.add("homenav-active");
    },
    slideUp() {
      const homeNav = this.$refs.homeNav;
      homeNav.classList.remove("homenav-active");
    },
    // --------------------顶部导航事件--------------------
    asideShow(index) {
      console.log(index);
      this.$refs.asideShow.classList.add("asideShow-active");
    },
    asideHide() {
      this.$refs.asideShow.classList.remove("asideShow-active");
    },
    // 获取侧边栏展开的数据
    getasideShowList() {
      // this.$axios.get('api)
      // 这个数通过asideNav的个数 / 6
      this.asideShowCol = Math.ceil(this.asideShowList.length / 6);
      // console.log(this.asideShowList.length);
      // console.log(this.asideShowCol);
    },
    // 闪购倒计时
    // eslint-disable-next-line no-unused-vars
    countDown(targetTime = 1581918213000) {
      let that = this;
      let countDown = {};
      setInterval(function() {
        let date = new Date(targetTime) - new Date();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          countDown.hour =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          countDown.minute =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          countDown.second =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
        } else {
          //活动已结束，全部设置为'00'
          for (let key in countDown) {
            countDown[key] = "00";
          }
        }
        that.flashCountDown = countDown;
      }, 1000);
    },
    // 鼠标触发类型
    // eslint-disable-next-line no-unused-vars
    cardRightActive(groupIndex, itemIndex) {
      const cardHeadLi = this.$refs.cardHead[groupIndex].children[1].children[0]
        .children;
      const cardRightUl = this.$refs.cardRight[groupIndex].children;
      // eslint-disable-next-line no-unused-vars
      cardRightUl.forEach((item, index) => {
        cardHeadLi[index].classList.remove("active");
        item.classList.remove("active");
      });
      cardHeadLi[itemIndex].classList.add("active");
      cardRightUl[itemIndex].classList.add("active");
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.getasideShowList();
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
    this.countDown();
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
.home {
  margin: 0 auto;
}

header {
  .topNav {
    background: #333333;
  }
  .homenav {
    display: flex;
    align-items: center;
    margin: 20px auto;
    width: 1230px;
    .homenav-left {
      cursor: pointer;
      margin-right: 100px;
      width: 55px;
      height: 55px;
      position: relative;
      overflow: hidden;
      background: #ff6700;
      &::before,
      &::after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        height: 55px;
        width: 55px;
        transform-origin: 50% 50%;
        transition: all 0.3s;
      }
      &::before {
        margin-left: -55px;
        opacity: 0;
        background: url("../assets/images/home.png");
      }
      &::after {
        opacity: 1;
        background: url("../assets/images/logo.png");
      }
      &:hover:before {
        opacity: 1;
        margin-left: 0;
      }
      &:hover:after {
        opacity: 0;
        margin-left: 55px;
      }
    }
    .homenav-center {
      flex: 1;
      ul {
        display: flex;
        li {
          // margin-right: 20px;
          a {
            padding: 26px 10px 38px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }
    .homenav-right {
      height: 40px;
      flex: 0.6;
      text-align: right;
      input {
        vertical-align: middle;
        height: 40px;
        width: 246px;
        border: 1px solid #e0e0e0;
        text-indent: 10px;
        &:focus {
          border: 1px solid #ff6700;
          outline: none;
        }
      }

      .icon-sousuo {
        vertical-align: middle;
        border: 1px solid #e0e0e0;
        border-left: none;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        padding: 1px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background: #ff6700;
          color: #fff;
          border: 1px solid #ff6700;
        }
      }
    }
  }
  // 顶部鼠标触发商品展示栏
  .homenav-show {
    width: 100%;
    height: 0;
    overflow: hidden;
    border-top: 1px solid #e0e0e0;
    transition: all 0.3s;
    position: absolute;
    z-index: 3;
    background: #fff;
    padding: 0 10%;
    box-sizing: border-box;
    ul {
      display: flex;
      padding-top: 40px;
      li {
        text-align: center;
        &:last-of-type {
          img {
            border-right: none;
          }
        }
        a {
          display: block;
          img {
            width: 160px;
            height: 110px;
            padding: 0 30px;
            border-right: 1px solid #e0e0e0;
          }
          div:nth-of-type(1) {
            margin-top: 8px;
            font-size: 12px;
          }
          div:nth-of-type(2) {
            font-size: 12px;
            color: #ff6700;
            margin-top: 8px;
          }
        }
      }
    }
  }
  // 顶部鼠标触发商品展示栏，动画效果
  .homenav-active {
    box-shadow: 0 3px 3px #e0e0e0;
    height: 229px;
  }
}
// 主要内容区域
.container {
  // 轮播图部分
  .aside-carousel {
    width: 1230px;
    margin: 0 auto;
    position: relative;
    height: 460px;
    // border: 1px solid red;
    aside {
      height: 460px;
      width: 204px;
      position: absolute;
      left: 0;
      top: 0;
      // border: 1px solid blue;
      background: rgba(0, 0, 0, 0.2);
      z-index: 2;
      ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 15px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          &:hover {
            background: #ff6700;
          }
          span {
          }

          i.iconfont.icon-right {
          }
        }
      }
    }
    // 轮播图样式
    .carousel {
      // position: absolute;
      .swiper {
        height: 460px;
        width: 1226px;
        // 左右控制器
        .swiper-button-prev,
        .swiper-button-next {
          cursor: pointer;
          z-index: 2;
          width: 41px;
          height: 69px;
          margin-top: -35px;
        }
        .swiper-button-prev {
          background: url("../assets/images/icon-slides.png") no-repeat -83px 50%;
          left: 16.5%;
          &:hover {
            background: url("../assets/images/icon-slides.png") no-repeat 0 50%;
          }
        }
        .swiper-button-next {
          background: url("../assets/images/icon-slides.png") no-repeat -125px 50%;
          right: 0;
          &:hover {
            background: url("../assets/images/icon-slides.png") no-repeat -42px 50%;
          }
        }
        // 分页器
        .swiper-pagination {
          width: 400px;
          left: auto;
          right: 30px;
          bottom: 20px;
          text-align: right;
        }
      }
    }
    // 侧边展示框
    .aside-show {
      height: 460px;
      background: #fff;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      margin-left: 204px;
      box-shadow: 0 5px 10px #d9d9d9;
      display: flex;
      visibility: hidden;
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 20px;
        li {
          a {
            display: flex;
            align-items: center;
            padding: 16px 50px 12px 0;
            &:hover {
              color: #ff6700;
            }
            img {
            }

            span {
            }
          }
        }
      }
    }
    .asideShow-active {
      visibility: visible;
    }
  }
  // 推荐
  .recomment {
    display: flex;
    height: 170px;
    margin-top: 23px;
    justify-content: space-between;
    width: 1230px;
    margin: 25px auto;
    .recomment-cart-left {
      display: flex;
      flex-wrap: wrap;
      width: 204px;
      background: #5f5750;
      a {
        padding: 25px 0;
        width: 68px;
        text-align: center;
        color: #cfccca;
        font-size: 13px;
        border-right: 1px solid rgba(207, 204, 202, 0.1);
        border-bottom: 1px solid rgba(207, 204, 202, 0.1);
        box-sizing: border-box;
        &:hover {
          color: #fff;
        }
        .iconfont {
          font-size: 20px;
        }

        p {
          margin-top: 6px;
        }
      }
    }

    .recomment-cart {
      a {
        display: inline-block;
        width: 316px;
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  // 主体内容重要部分
  .main-content {
    background: #f5f5f5;
    padding-bottom: 20px;
  }
  // 闪购
  .flash-buy {
    .flash-buy-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1230px;
      margin: 0 auto;
      h1 {
        font-size: 23px;
        width: 1230px;
        margin: 0 auto;
        padding: 20px 0;
        color: #333333;
      }
      .swiper2-controls {
        height: 24px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .swiper2-button-prev,
        .swiper2-button-next {
          box-sizing: border-box;
          padding: 4px 10px;
          color: #4d4d4d;
          cursor: pointer;
          outline: none;
          &:hover {
            color: #ff6700;
          }
        }
        .swiper2-button-prev {
          border-right: 1px solid #e0e0e0;
        }

        .swiper2-button-next {
        }

        .swiper2-button-disabled {
          outline: none;
          color: #e0e0e0;
          cursor: default;
          &:hover {
            color: #e0e0e0;
          }
        }
      }
    }
    .flash-buy-content {
      display: flex;
      justify-content: space-between;
      width: 1230px;
      height: 340px;
      margin: 0 auto;
      .left {
        width: 234px;
        text-align: center;
        background: #f1eded;
        padding-top: 60px;
        border-top: 1px solid #e53934;
        margin-right: 20px;
        div:nth-of-type(1) {
          color: #e53934;
          font-size: 22px;
        }
        div:nth-of-type(2) {
          color: #6f6d6d;
          font-size: 16px;
          margin-bottom: 45px;
        }
        img {
          margin: 20px 0;
        }

        .flash-countdown {
          span {
            background: #605751;
            color: #fff;
            padding: 12px;
            font-size: 22px;
          }
          i {
            font-size: 22px;
            font-weight: bold;
            padding: 0 4px;
          }
        }
      }
      .right {
        width: 996px;
        .swiper2 {
          height: 100%;
          .swiper2-slide-item {
            border-top: 1px solid orange;
            display: block;
            background: #fff;
            height: 100%;
            text-align: center;
            div:nth-of-type(1) {
              margin-top: 30px;
              img {
                width: 160px;
              }
            }
            p:nth-of-type(1) {
              font-size: 15px;
              color: #5f5f5f;
              margin-top: 38px;
            }
            p:nth-of-type(2) {
              font-size: 12px;
              color: #adadad;
              margin: 11px 0 24px;
            }
            p:nth-of-type(3) {
              font-size: 13px;
              span:nth-of-type(1) {
                color: #fa6509;
                margin-right: 5px;
              }
              span:nth-of-type(2) {
              }
              color: #adadad;
            }
          }
        }
      }
    }
    .recommend-card {
      width: 1230px;
      margin: 20px auto;
    }
  }
  // 卡片式商品展示
  .shop-card {
    width: 1230px;
    margin: 0 auto;
    .card-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        width: 1230px;
        margin: 0 auto;
        padding: 20px 0;
        font-size: 23px;
        color: #333333;
        flex: 13.5;
      }
      a {
        display: flex;
        font-size: 16px;
        flex: 1;
        align-items: center;
        font-size: 15px;
        &:hover {
          color: #ff6700;
        }
        span {
        }
        i {
          font-size: 18px;
          margin-left: 5px;
        }
      }
    }
    .card-content {
      display: flex;
      .left {
        width: 234px;
        height: 614px;
        ul {
          li {
            transition: all 0.3s ease;
            margin-bottom: 18px;
            &:hover {
              box-shadow: 0 0 10px #e1e1e1;
              transform: translateY(-5px);
            }
            a {
              img {
              }
            }
          }
        }
      }

      .right {
        width: 2160px;
        ul {
          li {
            width: 230px;
            height: 300px;
            display: inline-block;
            text-align: center;
            background: #fff;
            margin-bottom: 18px;
            margin-left: 18px;
            transition: all 0.3s ease;
            margin-bottom: 18px;
            &:hover {
              box-shadow: 0 0 10px #e1e1e1;
              transform: translateY(-5px);
            }
            a {
              img {
                width: 160px;
              }

              h3 {
                font-size: 14px;
              }

              .desc {
                font-size: 12px;
                color: #b0b0b0;
                margin: 14px 20px;
              }

              .price {
                font-size: 14px;
                color: #ff6700;
                del {
                  margin-left: 5px;
                  color: #b0b0b0;
                }
              }
            }
          }
        }
      }
    }
    .card-recommend {
      width: 1230px;
      margin: 20px auto;
      // margin-bottom: 20px;
    }
  }
  // 卡片式商品展示2，在原来的基础上修改一点
  .card-circul {
    .card-head {
      div {
        ul {
          display: flex;
          li {
            padding-bottom: 4px;
            margin-left: 15px;
            transition: border 0.3s;
            border-bottom: 2px solid transparent;
            cursor: pointer;
          }
          .active {
            border-bottom: 2px solid #ff6700;
            color: #ff6700;
          }
        }
      }
    }
    .right {
      ul {
        display: none;
      }
      .active {
        display: block;
      }
    }
  }
}
footer {
  .footer-one {
    width: 1230px;
    margin: 0 auto;
    ul {
      display: flex;
      border-bottom: 1px solid #f1f1f1;
      padding: 30px 0 30px 0;
      li {
        flex: 1;
        text-align: center;
        vertical-align: middle;
        border-right: 1px solid #e7e7e7;
        &:last-of-type {
          border-right: none;
        }
        i {
          font-size: 25px;
          margin-right: 6px;
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }
    }
  }

  .footer-two {
    width: 1230px;
    margin: 0 auto;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    .left {
      flex: 0.92;
      display: flex;
      justify-content: space-between;
      border-right: 1px solid #f1f1f1;
      ul {
        flex: 1;
        li {
          padding-bottom: 12px;
          font-size: 12px;
          a {
            color: #757575;
            &:hover {
              color: #fa6509;
            }
          }
        }
        .left-head {
          font-size: 15px;
          margin-bottom: 20px;
          a {
            color: #000;
          }
        }
      }
    }

    .right {
      text-align: center;
      flex: 0.23;
      p {
        &:nth-of-type(1) {
          color: #ff7300;
          font-size: 20px;
        }
        &:nth-of-type(2) {
          color: #616161;
          font-size: 12px;
          margin: 10px 0;
        }
        &:nth-of-type(3) {
          color: #616161;
          font-size: 12px;
          margin-bottom: 20px;
        }
      }
      a {
        padding: 5px 20px;
        border: 1px solid #f25908;
        color: #f25908;
        font-size: 12px;
        &:hover {
          color: #fff;
          background: #f25908;
        }
        i {
          font-size: 14px;
          vertical-align: middle;
          margin-right: 5px;
        }

        span {
          vertical-align: middle;
        }
      }
    }
  }

  .footer-three {
    & > div {
      width: 1230px;
      margin: 0 auto;
      display: flex;
    }
    padding: 33px 65px;
    background: #f5f5f5;
    margin-top: 30px;
    .left {
      width: 60px;
      height: 60px;
      flex-basis: 5%;
      background: url("../assets/images/logo.png") no-repeat center;
    }

    .right {
      flex-basis: 95%;
      ul {
        display: flex;
        font-size: 12px;
        &:nth-of-type(1) {
          li {
            border-right: 1px solid #b0c0d6;
            padding: 0 5px;
            &:last-of-type {
              border-right: 0;
            }
            a {
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
        &:nth-of-type(2) {
          display: block;
          margin-left: 5px;
          color: #b0b0b0;
          a {
            color: #b0b0b0;
          }
        }
        &:nth-of-type(3) {
          img {
            height: 27px;
          }
        }
      }
    }
  }

  .footer-four {
    background: #f5f5f5;
    padding-bottom: 20px;
    .four-bg {
      margin: 0 auto;
      width: 267px;
      height: 19px;
      background: url("../assets/images/desc.png") no-repeat center 0;
    }
  }
}
</style>
