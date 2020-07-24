<template>
  <grid-view class="category-grid-view" :cols="4">
    <grid-view-item
      class="category-grid-view-item"
      v-for="(item,index) in subcategories"
      :key="index"
    >
      <img class="item-img" :src="item.image" :alt="item.title" />
      <p class="item-title">{{item.title}}</p>
    </grid-view-item>
  </grid-view>
</template>

<script>
import GridView from 'components/common/gridview/GridView'
import GridViewItem from 'components/common/gridview/GridViewItem'

export default {
  name: 'CategoryGridView',
  components: {
    GridView,
    GridViewItem
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.category-grid-view-item {
  padding: 5px 10px;
}
.item-img {
  width: 100%;
}
.item-title {
  font-size: 14px;
  text-align: center;
}
</style>
