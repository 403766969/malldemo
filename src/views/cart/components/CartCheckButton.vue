<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt :class="{checked:isChecked}" />
  </div>
</template>

<script>
export default {
  name: 'CartCheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button img {
  width: 16px;
  height: 16px;
  background-color: #999;
  border-radius: 50%;
}

.check-button .checked {
  background-color: var(--color-high-text);
}
</style>
