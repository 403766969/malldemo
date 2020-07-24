<template>
  <div class="goods-param" v-if="Object.keys(goodsParam).length !== 0">
    <table class="goods-size" v-for="(table, index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="goods-info">
      <tr v-for="(info, index) in goodsParam.infos" :key="index">
        <td class="goods-info-key">{{info.key}}</td>
        <td class="goods-info-value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParam',
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-param {
  padding: 20px 20px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.goods-param table {
  width: 100%;
  border-collapse: collapse;
}

.goods-param table tr {
  height: 42px;
  line-height: 42px;
  text-align: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.goods-info-key {
  width: 90px;
}

.goods-info-value {
  color: #eb4868;
}
</style>
