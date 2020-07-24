<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base-info">
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span
        v-if="baseInfo.discount"
        class="discount"
        :style="{'background-color': baseInfo.discountBgColor}"
      >{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in baseInfo.services.length-1" :key="index">
        <img :src="baseInfo.services[index-1].icon" />
        <span>{{baseInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 15px 10px 0px 10px;
  width: 100%;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 15px;
}

.info-price span {
  vertical-align: middle;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  margin-left: 5px;
  font-size: 13px;
  text-decoration: line-through;
}

.info-price .discount {
  margin-left: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  border-radius: 8px;
}

.info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

.info-service-item span {
  margin-left: 2px;
  font-size: 13px;
  color: #333;
}
</style>
