<template>
  <nav-bar class="profile-nav-bar">
    <template #nav-bar-center>
      <h3>我的</h3>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'ProfileNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.profile-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}

.profile-nav-bar h3 {
  font-size: 18px;
}
</style>