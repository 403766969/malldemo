<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    cols: {
      type: Number,
      default: 2
    }
  },
  updated() {
    this.$nextTick(() => {
      let items = this.$refs.gridView.children
      let basis = (100 / this.cols).toFixed(2) + '%'
      for (let item of items) {
        item.style.flex = `0 0 ${basis}`
        item.style.overflow = 'hidden'
      }
    })
  }
}
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
}
</style>
