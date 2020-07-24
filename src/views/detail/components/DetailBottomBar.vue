<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    cartClick() {
      this.$emit('openBuyOptions')
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 777;
  width: 100%;
  height: 49px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  margin: 6px auto 2px auto;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  line-height: 49px;
  font-size: 14px;
}

.bar-right .cart {
  color: #333;
  background-color: #ffe817;
}

.bar-right .buy {
  color: #fff;
  background-color: #f69;
}
</style>
