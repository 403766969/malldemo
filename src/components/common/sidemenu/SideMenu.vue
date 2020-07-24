<template>
  <div class="side-menu">
    <div
      class="menu-item"
      :class="{active: index===currentIndex}"
      v-for="(item, index) in categories"
      :key="index"
      @click="itemClick(index)"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('menuItemClick', index)
    }
  }
}
</script>

<style scoped>
.side-menu {
  width: 100%;
  background-color: #f6f6f6;
}

.menu-item {
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  text-align: center;
  border-left: 3px solid #f6f6f6;
}

.menu-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left-color: var(--color-high-text);
}
</style>
