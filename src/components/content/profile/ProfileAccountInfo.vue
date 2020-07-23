<template>
  <div class="profile-account-info">
    <div class="account-item">
      <div class="number">
        <span>0.00</span>元
      </div>
      <div class="text">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span>0</span>个
      </div>
      <div class="text">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span>0</span>分
      </div>
      <div class="text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAccountInfo'
}
</script>

<style scoped>
.profile-account-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.account-item {
  flex: 1;
  padding: 18px;
  font-size: 13px;
  color: #666;
  text-align: center;
  background-color: #fff;
  border-left: 1px solid #f2f2f2;
}

.account-item:first-child {
  border-left: none;
}

.number span {
  margin-right: 2px;
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.text {
  margin-top: 6px;
}
</style>