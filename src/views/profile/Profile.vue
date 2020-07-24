<template>
  <div id="profile">
    <profile-nav-bar />
    <scroll
      class="profile-scroll"
      ref="scroll"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      @pullingDown="pullingDown"
    >
      <profile-user-info />
      <profile-account-info />
      <profile-features :list-data="feartures1" />
      <profile-features :list-data="feartures2" />
    </scroll>
  </div>
</template>

<script>
// 我的页面组件
import ProfileNavBar from 'views/profile/components/ProfileNavBar'
import ProfileUserInfo from 'views/profile/components/ProfileUserInfo'
import ProfileAccountInfo from 'views/profile/components/ProfileAccountInfo'
import ProfileFeatures from 'views/profile/components/ProfileFeatures'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Profile',
  components: {
    ProfileNavBar,
    ProfileUserInfo,
    ProfileAccountInfo,
    ProfileFeatures,
    Scroll
  },
  data() {
    return {
      feartures1: [
        { icon: 'message.svg', text: '我的消息' },
        { icon: 'pointer.svg', text: '积分商城' },
        { icon: 'vip.svg', text: '会员卡' },
      ],
      feartures2: [
        { icon: 'cart.svg', text: '我的购物车' },
        { icon: 'shopping.svg', text: '下载购物APP' },
      ]
    }
  },
  methods: {
    // 下拉刷新
    pullingDown() {
      window.location.reload(true)
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#profile {
  padding: 44px 0 49px 0;
  width: 100%;
  background-color: #fff;
}

.profile-scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
</style>