import BackTop from 'components/content/backtop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    // 返回顶部点击处理
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  },
}