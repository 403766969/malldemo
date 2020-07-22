<template>
  <div class="toast" v-show="isShowToast">
    <div class="msg">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      isShowToast: false,
      message: ''
    }
  },
  methods: {
    // 直接调用此方法即可显示提示信息
    showToast(message = '提示信息！', duration = 800) {
      this.isShowToast = true
      this.message = message
      setTimeout(() => {
        this.isShowToast = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
}

.toast .msg {
  padding: 5px 10px;
  line-height: 16px;
  font-size: 16px;
  color: white;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgba(7, 153, 146, 0.8),
    rgba(96, 163, 188, 0.7)
  );
  border-radius: 7px;
}
</style>
