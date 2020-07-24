<template>
  <div class="detail-buy-options">
    <div class="container">
      <div class="show-info">
        <div class="show-info-img">
          <img :src="product.img" alt />
        </div>
        <div class="show-info-param">
          <p class="price">
            <span>￥</span>
            {{product.price}}
          </p>
          <p class="stock">库存{{product.stock}}件</p>
          <p class="choice">
            已选择：
            <span>"{{product.style}}"&nbsp;"{{product.size}}"</span>
          </p>
        </div>
      </div>

      <scroll class="content" :click="true">
        <div class="productMsg" v-if="Object.keys(buyOptions).length !== 0">
          <p>{{buyOptions.props[0].label}}</p>
          <div>
            <span
              class="msgBtn"
              v-for="(item,index) in buyOptions.props[0].list"
              :key="index"
              @click="chooseStyle(item.name)"
              :class="{active: item.name === product.style}"
            >{{item.name}}</span>
          </div>
        </div>

        <div class="productMsg" v-if="Object.keys(buyOptions).length !== 0">
          <p>{{buyOptions.props[1].label}}</p>
          <div>
            <span
              class="msgBtn"
              v-for="(item,index) in buyOptions.props[1].list"
              :key="index"
              @click="chooseSize(item.name)"
              :class="{active: item.name === product.size}"
            >{{item.name}}</span>
          </div>
        </div>

        <div class="productCount">
          <p>数量:</p>
          <div class="countBtn">
            <span @click="decrease">－</span>
            <span>{{product.count}}</span>
            <span @click="increase">＋</span>
          </div>
        </div>
      </scroll>

      <div class="commitBtn" @click="commitClick">确定</div>
      <div class="closeBtn" @click="closeClick">❌</div>
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'DetailBuyOptions',
  components: {
    Scroll
  },
  props: {
    buyOptions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      product: {
        img: '',
        style: '',
        size: '',
        stock: 0,
        price: 0,
        count: 1
      }
    }
  },
  methods: {
    chooseStyle(style) {
      this.product.style = style
      this.showInfo()
    },
    chooseSize(size) {
      this.product.size = size
      this.showInfo()
    },
    showInfo() {
      let target = this.buyOptions.skus.find(item =>
        item.style === this.product.style && item.size === this.product.size
      )
      this.product.img = target.img
      this.product.stock = target.stock
      this.product.price = this.priceFormat(target.nowprice)
    },
    priceFormat(price) {
      let str = price.toString()
      let startStr = str.substr(0, (str.length - 2))
      let endTwoStr = str.substr((str.length - 2), 2)
      return startStr + '.' + endTwoStr
    },
    increase() {
      this.product.count++
    },
    decrease() {
      if (this.product.count > 1) {
        this.product.count--
      }
    },
    closeClick() {
      this.$emit('closeBuyOptions')
    },
    commitClick() {
      this.$emit('commitClick', this.product)
    }
  },
  watch: {
    buyOptions(newVal, oldVal) {
      this.product.style = newVal.props[0].list[0].name
      this.product.size = newVal.props[1].list[0].name
      this.showInfo()
    }
  }
}
</script>

<style scoped>
.detail-buy-options {
  position: fixed;
  top: 44px;
  bottom: 0;
  left: 0;
  z-index: 888;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.detail-buy-options .container {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 8px;
  width: 100%;
  height: 60%;
  background-color: #fff;
  animation: openBuyOptions 0.6s ease-out;
}

@keyframes openBuyOptions {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.show-info {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.content {
  flex: 1;
  margin-bottom: 36px;
  overflow: hidden;
}

.show-info-img {
  flex: 1;
  margin-left: 10px;
  margin-top: -50px;
}

.show-info-param {
  flex: 3;
  margin-left: 10px;
}

.show-info-img img {
  width: 100%;
}

.show-info-param .price {
  font-size: 30px;
  color: #000;
}

.show-info-param .price span {
  font-size: 14px;
  vertical-align: top;
}

.show-info-param .stock {
  padding-top: 5px;
  font-size: 13px;
}

.show-info-param .choice {
  padding-top: 10px;
  font-size: 13px;
}

.show-info-param .choice span {
  color: var(--color-tint);
}

.productMsg {
  padding-top: 10px;
}

.productMsg p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

.productMsg .msgBtn {
  display: inline-block;
  margin: 10px;
  padding: 4px 15px;
  font-size: 12px;
  color: #666666;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.productMsg .active {
  color: var(--color-high-text);
  border: 1px solid var(--color-high-text);
}

.productCount {
  padding-top: 10px;
  padding-bottom: 10px;
}

.productCount p {
  margin-bottom: 15px;
  font-size: 14px;
  color: #666;
}

.productCount .countBtn {
  margin-left: 10px;
}

.productCount .countBtn span {
  display: inline-block;
  width: 35px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #666;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.7);
}

.productCount .countBtn span:nth-of-type(1) {
  border-radius: 5px 0 0 5px;
}

.productCount .countBtn span:nth-of-type(2) {
  border-left: none;
  border-right: none;
}

.productCount .countBtn span:nth-of-type(3) {
  border-radius: 0 5px 5px 0;
}

.commitBtn {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: white;
  text-align: center;
  background-image: linear-gradient(
    45deg,
    var(--color-high-text),
    var(--color-tint)
  );
}

.closeBtn {
  position: absolute;
  top: 5px;
  right: 3px;
  font-size: 18px;
  color: #666;
  background-color: #fff;
}
</style>
