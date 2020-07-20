<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <template #nav-bar-left>
        <div class="detailImg" @click="detailBackClick">
          <img src="~assets/img/common/back.svg" alt="返回" />
        </div>
      </template>
      <template #nav-bar-center>
        <div class="title">
          <div
            v-for="(item,index) in titles"
            :key="index"
            :class="{active:currentIndex===index}"
            @click="detailTitleClick(index)"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: [`商品`, `参数`, `评论`, `推荐`],
      currentIndex: 0
    }
  },
  methods: {
    //1、点击切换标签
    detailTitleClick(index) {
      this.currentIndex = index;
      this.$emit('detailTitleClick', index)
    },

    //2、点击返回
    detailBackClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-nav-bar {
  background-color: #fff;
}

.detail-nav-bar .title {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}

.active {
  color: var(--color-tint);
}

.detailImg {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
</style>
