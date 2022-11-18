<template>
  <div class="detail">
    <div class="detail-title">飞机航线</div>
    <div class="detail-text">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.detail {
  width: 1058px;
  height: 875px;
  margin: 0 98px 299px 0;
  border-radius: 29px;
  border: solid 2px rgba(158, 208, 246, 1);
  padding: 36px 55px;
  box-sizing: border-box;

  &-title {
    width: 954px;
    height: 111px;
    font-size: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 146, 255, .2);


  }

  &-text {
    height: 702px;
  }


  &::after {
    content: '';
    display: inline-block;
    position: relative;
    background-color: rgba(185, 225, 245, 1);
    border-radius: 0px 22px 0px 22px;
    width: 275px;
    height: 25px;
    left: -55px
  }
}
</style>
