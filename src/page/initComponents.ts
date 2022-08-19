import { Component, defineAsyncComponent, shallowRef, ref } from "vue";
interface FileType {
  [key: string]: Component;
}
const files: Record<string, FileType> = import.meta.globEager("./*.vue");
const nameList = ref<string[]>([]);
const dataS = ref("");
Object.keys(files).forEach((item) => {
  let it = item.match(/(?<=\/).+(?=\.vue)/g) || [""];
  if (it[0]) nameList.value.push(it[0]);
});
function initCom(name: string): Component {
  return defineAsyncComponent(() => import(/* @vite-ignore */ `./${name}.vue`));
}
function initMd(name: string): string {
  fetch(`http://localhost:5000/?name=${name}`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      dataS.value = data;
    })
    .catch((err) => {
      console.log("错误", err);
    });
  return dataS.value;
}
export default {
  nameList: nameList.value,
  initCom,
  initMd,
};
