<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.logo" />
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shopInfo.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <div class="shop-appraise" v-for="(item, index) in shopInfo.score" :key="index">
          <span class="name">{{item.name}}</span>
          <span class="score" :class="{'score-better': item.isBetter}">{{item.score | scoreFilter}}</span>
          <span class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      return value < 10000 ? value : (value / 10000).toFixed(1) + '万'
    },
    scoreFilter(value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 15px 8px;
  width: 100%;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  display: flex;
  align-items: center;
}

.shop-top img {
  margin-left: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-top .title {
  margin-left: 10px;
  font-size: 16px;
}

.shop-middle {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.shop-middle-item {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.sells-count,
.goods-count {
  font-size: 18px;
}

.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-appraise {
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  text-align: center;
}

.shop-appraise span {
  margin: 0 6px;
}

.shop-appraise .name {
  color: #333;
}

.shop-appraise .score {
  color: #5ea732;
}

.shop-appraise .better {
  color: #fff;
  background-color: #5ea732;
}

.shop-appraise .score-better {
  color: #f13e3a;
}

.shop-appraise .better-more {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  margin: 0 auto;
  width: 150px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  background-color: #f2f5f8;
  border-radius: 10px;
}
</style>
