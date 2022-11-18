<template>
  <div class="count">
    <div class="item">
      <div class="label">42391</div>
      <div class="small">出警量</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "count"
}
</script>

<style scoped lang="scss">
.count {
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  .label {
    font-size: 138px;
    font-family: QTYPECOND-BOOK;
  }

  img {
    width: 224px;
    height: 224px;
    margin-right: 20px;
  }

  .name {
    font-size: 62px;
    color: #c1ddf1;
  }

  .small {
    font-size: 70px;
    background-image: url("../../../assets/img/page/borderSafety/4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 473px;
    height: 78px;
    text-align: center;
    line-height: 78px;
  }
}
</style>
