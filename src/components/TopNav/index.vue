<template>
  <div class="topNav">
    <div class="left">
      <ul>
        <li><a href="">小米商城</a></li>
        <li><a href="">MIUI</a></li>
        <li><a href="">loT</a></li>
        <li><a href="">云服务</a></li>
        <li><a href="">金融</a></li>
        <li><a href="">有品</a></li>
        <li><a href="">小爱开放平台</a></li>
        <li><a href="">企业团购</a></li>
        <li><a href="">资质证照</a></li>
        <li><a href="">协议规则</a></li>
        <li><a href="">下载app</a></li>
        <li><a href="">select Location</a></li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li><a href="">登录</a></li>
        <li><a href="">注册</a></li>
        <li><a href="">消息通知</a></li>
        <li class="cart" ref="cart">
          <a href="" class="cart-have">
            <i class="iconfont icon-cart"></i>
            <span> 购物车（1）</span>
          </a>
          <transition name="cartAnimate">
            <div class="cart-info" v-show="cartFlag">
              <div class="cart-info-top">
                <div class="cart-item">
                  <div class="cart-item-left">
                    <img
                      src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941094.42616676.jpg?width=60&height=60"
                    />
                    <div>小米CC9 pro</div>
                  </div>
                  <div class="cart-item-right">
                    <span class="cart-item-price">2799 x 1</span>
                    <span class="cart-item-del">x</span>
                  </div>
                </div>
              </div>
              <div class="cart-info-bottom">
                <div class="cart-price">
                  <div>共1件商品</div>
                  <div><span class="cart-price-sum">2799</span>元</div>
                </div>
                <div class="cart-btn">去购物车结算</div>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      cartFlag: false
    };
  },
  methods: {
    cartShow() {
      let cart = this.$refs.cart;
      cart.addEventListener("mouseenter", () => {
        this.cartFlag = true;
        this.getCartList();
      });
      cart.addEventListener("mouseleave", () => {
        this.cartFlag = false;
      });
    },
    // 发送请求获取购物车数据
    getCartList() {
      console.log("请求购物车数据");
      // this.$axios.get('');
    }
  },
  mounted() {
    this.cartShow();
  }
};
</script>

<style lang="scss" scoped>
.cartAnimate-enter,
.cartAnimate-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.cartAnimate-enter-active,
.cartAnimate-leave-active {
  transition: all 0.5s ease;
}
a {
  color: #b0b0b0;
  text-decoration: none;
  font-size: 12px;
  display: block;
  padding: 0 10px;
  position: relative;
  height: 40px;
}
a:hover {
  color: #ffffff;
}
a::after {
  content: " ";
  position: absolute;
  display: block;
  right: 0;
  top: 38%;
  height: 12px;
  background: #b0b0b0;
  width: 1px;
  opacity: 0.15;
}
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b0b0b0;
  background: #333333;
  height: 40px;
  line-height: 40px;
  width: 1230px;
  margin: 0 auto;
  .left,
  .right {
    ul {
      list-style: none;
      margin: 0;
      li {
        // background: #333333;
        display: inline-block;
        vertical-align: bottom;
      }
    }
  }

  .right {
    .cart {
      background: #424242;
      position: relative;
      a:hover {
        color: #ff6700;
        background: #fff;
      }
      .cart-info {
        position: absolute;
        right: 0;
        width: 300px;
        box-shadow: 0 10px 10px #ebe9ea;
        color: #000;
        background: #fff;
        font-size: 12px;
        z-index: 4;
        .cart-info-top {
          padding: 20px;
          .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .cart-item-left {
              display: flex;
              align-items: center;
              img {
                width: 60px;
                margin-right: 20px;
              }
              div:hover {
                color: #ff6700;
                cursor: pointer;
              }
            }
            .cart-item-right {
              .cart-item-del {
                margin-left: 5px;
                cursor: pointer;
                color: #b6b6b6;
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .cart-info-bottom {
          padding: 5px 20px;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .cart-price {
            div:nth-of-type(1) {
              height: 20px;
            }
            .cart-price-sum {
              font-size: 24px;
            }
            div:nth-of-type(2) {
              color: #ff6730;
            }
          }
          .cart-btn {
            width: 100px;
            color: #fff;
            background: #ff6700;
            height: 35px;
            line-height: 35px;
            text-align: center;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .cart-have {
      background: #ff6700;
      color: #fff;
    }
  }
}
</style>
