<template>
  <div class="profile-user-info">
    <img class="avatar" src="~assets/img/profile/avatar.svg" alt />
    <div class="info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserInfo'
}
</script>

<style scoped>
.profile-user-info {
  display: flex;
  align-items: center;
  padding: 6px 15px;
  height: 85px;
  color: #fff;
  background-color: var(--color-tint);
}

.profile-user-info .avatar {
  width: 70px;
  height: 70px;
}

.info {
  flex: 1;
  padding-left: 15px;
}

.info .login {
  margin-top: 5px;
}

.info .phone {
  position: relative;
  margin-top: 5px;
}

.phone img {
  position: absolute;
  top: 50%;
  left: -5px;
  width: 20px;
  height: 30px;
  transform: translateY(-50%);
}

.phone span {
  margin-left: 12px;
  font-size: 13px;
}

.arrow {
  width: 20px;
}

.arrow img {
  width: 20px;
}
</style>