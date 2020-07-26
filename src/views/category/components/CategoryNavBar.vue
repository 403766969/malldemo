<template>
  <nav-bar class="category-nav-bar">
    <template #nav-bar-center>
      <h3>分类</h3>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.category-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}

.category-nav-bar h3 {
  font-size: 18px;
}
</style>