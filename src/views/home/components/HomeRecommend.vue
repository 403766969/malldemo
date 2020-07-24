<template>
  <div class="home-recommend">
    <div v-for="item in recommends" :key="item.image" class="homt-recommend-item">
      <img :src="item.image" alt />
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.home-recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px 20px 0px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  border-bottom: 8px solid rgba(189, 195, 199, 0.3);
}

.homt-recommend-item {
  flex: 1;
}

.homt-recommend-item img {
  padding: 0px 5px 0px 5px;
  width: 100%;
}
</style>
