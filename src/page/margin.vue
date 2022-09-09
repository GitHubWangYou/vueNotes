<template>
  <img src="../assets/11.jpg" alt="" />
  <div class="root">
    <div class="alone_style">
      <a-input-number id="inputNumber" :min="1" :max="10" />
    </div>
    <div class="center">
      <a-input-number id="inputNumber" :min="1" :max="10" />
      <div class="middle">
        <div class="alone_style">
          <a-input-number id="inputNumber" :min="1" :max="10" />
        </div>
        <div class="middle_center">
          <div class="alone_style">
            <a-input-number id="inputNumber" :min="1" :max="10" />
          </div>
          <div class="center_style"></div>
          <div class="alone_style">
            <a-input-number id="inputNumber" :min="1" :max="10" />
          </div>
        </div>
        <div class="alone_style">
          <a-input-number id="inputNumber" :min="1" :max="10" />
        </div>
      </div>
      <a-input-number id="inputNumber" :min="1" :max="10" />
    </div>
    <div class="alone_style">
      <a-input-number id="inputNumber" :min="1" :max="10" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.root {
  width: 400px;
  height: 300px;
  background-color: rgb(227, 244, 160);
}
.alone_style {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
}
.center {
  .alone_style();
  justify-content: space-between;
  height: 60%;
  background-color: rgb(227, 244, 160);
  align-items: center;
}
.middle {
  width: calc(100% - 200px);
  height: 50%;
  background-color: rgb(204, 205, 204);
}
.middle_center {
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center_style {
  width: 250px;
  height: 50px;
  background-color: green;
}
</style>
