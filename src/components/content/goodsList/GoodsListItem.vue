<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" @load="goodsListImagesLoad" />
    <div class="goods-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">￥{{goodsListItem.price}}</span>
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
  },
  computed: {
    showImage() {
      return this.goodsListItem.img || this.goodsListItem.image || this.goodsListItem.show.img
    }
  },
  methods: {
    goodsListImagesLoad() {
      if (this.$route.name === 'Home') {
        this.$bus.$emit('goodsListImagesLoad')
      }
    },
    itemClick() {
      if (this.$route.name === 'Home') {
        this.$router.push('/detail/' + this.goodsListItem.iid)
      }
    }
  }
}
</script>

<style>
.goods-list-item {
  position: relative;
  margin: 5px 0 10px 0;
  width: 48%;
  text-align: center;
  background-color: #fff;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  line-height: 1.5em;
  font-size: 16px;
}

.goods-info p {
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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