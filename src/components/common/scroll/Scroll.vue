<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    // 实时监测滚动位置
    probeType: {
      type: Number,
      default: 0
    },
    // 上拉加载
    pullUpLoad: {
      type: Object,
      default() {
        return {
          boolean: false,
          threshold: -80
        }
      }
    },
    // 下拉刷新
    pullDownRefresh: {
      type: Object,
      default() {
        return {
          boolean: false,
          threshold: 80,
          stop: 0
        }
      }
    },
    // 派发click事件
    click: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //1、创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh: this.pullDownRefresh,
      click: this.click
    })

    //2、监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }

    //3、监听上拉事件
    if (this.pullUpLoad.boolean) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }

    //4、监听下拉事件
    if (this.pullDownRefresh.boolean) {
      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown')
      })
    }
  },
  methods: {
    //1、滚动到指定位置
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //2、获取当前的Y值
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
    //3、重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    //4.完成上拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    //5.完成上拉刷新
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown()
    }
  }
}
</script>

<style scoped>
</style>
