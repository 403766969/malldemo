<template>
  <div id="profile">
    <profile-nav-bar />
    <profile-user-info />
    <profile-account-info />
    <profile-features :list-data="feartures1" />
    <profile-features :list-data="feartures2" />
  </div>
</template>

<script>
// 我的页面组件
import ProfileNavBar from 'components/content/profile/ProfileNavBar'
import ProfileUserInfo from 'components/content/profile/ProfileUserInfo'
import ProfileAccountInfo from 'components/content/profile/ProfileAccountInfo'
import ProfileFeatures from 'components/content/profile/ProfileFeatures'

export default {
  name: 'Profile',
  components: {
    ProfileNavBar,
    ProfileUserInfo,
    ProfileAccountInfo,
    ProfileFeatures
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
  }
}
</script>

<style scoped>
#profile {
  padding-top: 43px;
}
</style>