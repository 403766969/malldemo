<template>
  <nav-bar class="home-nav-bar">
    <template #nav-bar-center>
      <h3>购物街</h3>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'HomeNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}

.home-nav-bar h3 {
  font-size: 18px;
}
</style>