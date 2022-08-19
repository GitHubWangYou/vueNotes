<template>
  <div class="root">
    <div class="menus_button">
      <div
        class="item_button"
        @click="handelItem(item)"
        v-for="(item, index) in InitMenu.nameList"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="container">
      <div class="menus_list" @click="()=>{isVue=!isVue}">{{isVue?"VUE":"MD"}}</div>
      <component v-if="isVue" :is="InitMenu.initCom(currentName)" />
      <v-md-preview v-if="!isVue" :text="InitMenu.initMd(currentName)"></v-md-preview>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import InitMenu from "./page/initComponents";
const isVue = ref(true)
const currentName = ref(InitMenu.nameList[0]);
const handelItem = (name: string) => {
  currentName.value = name;
};
</script>
<style lang="scss" scoped>
.public_style {
  display: flex;
  align-items: center;
  justify-content: center;
}
.root {
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  // 滚动条宽度
  div::-webkit-scrollbar {
    width: 6px;
  }
  // 滚动条轨道
  div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  // 小滑块
  div::-webkit-scrollbar-thumb {
    background: #22f97f49;
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #bc6df1;
  }
  .menus_button {
    width: 200px;
    height: calc(100vh - 10px);
    background-color: rgb(239, 240, 240);
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    align-content: flex-start;
    overflow-y: auto;
    .item_button {
      width: 100%;
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 16px;
      border-radius: 3px;
      background-image: linear-gradient(to right, #e0cae0 0%, #97d9e1 100%);
      &:hover {
        box-shadow: 1px 2px 3px rgb(53, 52, 52);
      }
    }
  }
  .container {
    width: 100%;
    height: calc(100vh - 10px);
    padding: 0 10px;
    overflow-y: auto;
    .menus_list {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #97d9e1;
      margin-bottom: 15px;
      font-size: 20px;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      color: rgb(100, 98, 98);
      text-shadow: 0px 0.5px 0.5px black;
      &:hover {
        transition: 2s;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
        color: white;
      }
    }
  }
}
</style>
