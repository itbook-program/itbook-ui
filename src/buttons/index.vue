<template>
  <div class="custom-butttons__container">
    <input placeholder="测试" />
  </div>
</template>
<script>
export default {
  name: 'Buttons',
  props: {
    clickMethods: { // 点击按钮事件
      type: Function,
      defalut: () => { }
    },
    type: {
      type: String,
      default: 'info'
    },
    text: {
      type: String,
      default: '确认'
    }
  }
}
</script>
<style scoped>
.custom-button__wrapper {
  width: 100%;
  border-radius: 44rpx;
  background-color: #1ea473;
  height: 88rpx;
  color: #fff;
  font-size: 32rpx;
}

.custom-button__wrapper:active {
  opacity: 0.8;
}
</style>
