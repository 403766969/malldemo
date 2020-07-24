<template>
  <div class="cart-goods-list-item">
    <div class="item-selector">
      <cart-check-button :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="item-img" @click="toDetail">
      <img :src="product.img" :alt="product.name" />
    </div>
    <div class="item-info">
      <div class="item-name" @click="toDetail">{{product.name}}</div>
      <div class="item-msg" @click="toDetail">颜色：{{product.style}}，&nbsp;尺码：{{product.size}}</div>
      <div class="item-shop" @click="toDetail">
        <img src="~assets/img/profile/vip.svg" height="48" width="48" />
        <span>{{product.shop}}</span>
      </div>
      <div class="info-bottom">
        <div class="item-price" @click="toDetail">¥{{product.price}}</div>
        <div class="item-count">
          <span @click="decrease">－</span>
          <span>{{product.count}}</span>
          <span @click="increase">＋</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckButton from 'views/cart/components/CartCheckButton'
// mapMutations
import { mapMutations } from 'vuex'

export default {
  name: 'CartGoodsListItem',
  components: {
    CartCheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapMutations({
      updateChecked: 'cart/updateChecked',
      updateCount: 'cart/updateCount'
    }),

    // 改变商品的选中状态
    checkClick() {
      let payload = {
        item: this.product,
        checked: !this.product.checked
      }
      this.updateChecked(payload)
    },

    // 进入详情页
    toDetail() {
      this.$router.push("/detail/" + this.product.iid)
    },

    // 增加商品数量
    increase() {
      let payload = {
        item: this.product,
        count: 1
      }
      this.updateCount(payload)
    },

    // 减少商品数量
    decrease() {
      if (this.product.count > 1) {
        let payload = {
          item: this.product,
          count: -1
        }
        this.updateCount(payload)
      }
    }
  }
}
</script>

<style scoped>
.cart-goods-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 110px;
  border-radius: 5px;
}

.item-info {
  flex: 1;
  padding: 5px 10px;
  min-width: 0;
}

.item-info .item-name,
.item-info .item-msg,
.item-info .item-shop {
  margin-top: 5px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-info .item-name {
  font-size: 17px;
  color: #333;
}

.item-info .item-msg {
  margin-top: 7px;
  font-size: 14px;
  color: var(--color-high-text);
}

.item-info .item-shop img {
  margin-top: -5px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.item-info .item-shop span {
  margin-left: 5px;
  font-size: 14px;
  color: #666;
}

.info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
}

.info-bottom .item-price {
  height: 23px;
  line-height: 23px;
  font-size: 18px;
  color: orangered;
}

.info-bottom .item-count span {
  display: inline-block;
  width: 30px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  font-size: 14px;
  color: #666;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.7);
}

.info-bottom .item-count span:nth-of-type(1) {
  border-radius: 5px 0 0 5px;
}

.info-bottom .item-count span:nth-of-type(2) {
  border-left: none;
  border-right: none;
}

.info-bottom .item-count span:nth-of-type(3) {
  border-radius: 0 5px 5px 0;
}
</style>
