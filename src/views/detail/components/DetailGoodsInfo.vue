<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{goodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-list">
      <img v-for="(item, index) in goodsInfo.detailImage[0].list" :key="index" :src="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .desc {
  padding: 15px 0;
  line-height: 1.5em;
  font-size: 14px;
}

.info-desc .start,
.info-desc .end {
  position: relative;
  width: 80px;
  height: 1px;
  background-color: #a3a3a5;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
}

.info-desc .start::before {
  top: 0px;
  left: 0px;
}

.info-desc .end::before {
  bottom: 0px;
  right: 0px;
}

.info-list {
  margin-top: 15px;
}

.info-list img {
  display: block;
  padding: 5px;
  width: 100%;
}
</style>
