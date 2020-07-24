<template>
  <swiper class="home-swiper">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <img :src="item.image" :alt="item.title" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.home-swiper {
  width: 100%;
  overflow: hidden;
}

.home-swiper img {
  width: 100%;
}
</style>
