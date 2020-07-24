<template>
  <div v-if="Object.keys(goodsComment).length !== 0" class="goods-comment">
    <div class="comment-header clear-fix">
      <div class="comment-title">用户评价</div>
      <div class="comment-more">更多&nbsp;>></div>
    </div>
    <div class="comment-user">
      <img :src="goodsComment.user.avatar" alt />
      <span>{{goodsComment.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <p>{{goodsComment.content}}</p>
      <div class="comment-other">
        <span class="date">{{goodsComment.created | showData}}</span>
        <span>{{goodsComment.style}}</span>
      </div>
      <div class="comment-imgs">
        <img :src="item" v-for="(item, index) in goodsComment.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
  name: 'DetailGoodsComment',
  props: {
    goodsComment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showData(value) {
      //1、将时间戳转成data对象
      const data = new Date(value * 1000)
      //2、格式化data
      return formatDate(data, "yyyy-MM-dd hh:mm:ss")
    }
  }
}
</script>

<style scoped>
.goods-comment {
  padding: 5px 15px 10px 15px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.comment-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.comment-title {
  float: left;
  font-size: 15px;
}

.comment-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.comment-user {
  padding: 10px 0 5px 0;
}

.comment-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}

.comment-user span {
  margin-left: 10px;
  font-size: 15px;
}

.comment-detail {
  padding: 0 5px;
}

.comment-detail p {
  font-size: 14px;
  line-height: 1.8em;
  color: #777;
}

.comment-other {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}

.comment-other .date {
  margin-right: 8px;
}

.comment-imgs {
  margin-top: 10px;
}

.comment-imgs img {
  margin-right: 4px;
  width: 70px;
  height: 70px;
}
</style>
