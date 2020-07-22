<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="回到顶部" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
}
.back-top img {
  width: 50px;
  height: 50px;
}
</style>
