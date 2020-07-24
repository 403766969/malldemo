<template>
  <div class="profile-features">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <div>
        <img class="icon" :src="iconURL(item.icon)" :alt="item.text" />
        <span class="text">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileFeatures',
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    iconURL(icon) {
      return require('assets/img/profile/' + icon)
    }
  }
}
</script>

<style scoped>
.profile-features {
  width: 100%;
  font-size: 17px;
  color: #333;
  background-color: #fff;
  border-top: 15px solid #f2f2f2;
}

.item {
  padding: 0 30px;
}

.item > div {
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.item:last-of-type > div {
  border-bottom: none;
}

.icon {
  margin-top: -4px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
}

.text {
  margin-left: 6px;
}
</style>