<template>
  <div class="goods-list-item">
    <img :src="goodsListItem.show.img" />
    <div class="goods-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">{{goodsListItem.price}}</span>
      <span class="collect">{{goodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-list-item {
  position: relative;
  padding-bottom: 15px;
  width: 48%;
  text-align: center;
  background-color: #fff;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.goods-info .price {
  color: var(--color-high-text);
}

.goods-info .collect {
  position: relative;
  margin-left: 20px;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 50%;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  transform: translateY(-50%);
}
</style>