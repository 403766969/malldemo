<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="tab-bar-item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="tab-bar-item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      default: '/'
    },
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>