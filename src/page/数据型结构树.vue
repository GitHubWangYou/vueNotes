<template>
  <div>
    <a-tree :tree-data="data" />
  </div>
</template>
<script lang="ts" setup>
const dataSource = [
  { title: "1", id: 1, pid: null },
  { title: "2", id: 2, pid: null },
  { title: "3", id: 3, pid: null },
  { title: "1-1", id: 11, pid: 1 },
  { title: "1-2", id: 12, pid: 1 },
  { title: "2-1", id: 21, pid: 2 },
  { title: "2-2", id: 22, pid: 2 },
  { title: "3-1", id: 31, pid: 3 },
  { title: "3-2", id: 32, pid: 3 },
];
const data = [
  {
    title: "1",
    id: 1,
    pid: null,
    children: [
      { title: "1-1", id: 11, pid: 1 },
      { title: "1-2", id: 12, pid: 1 },
    ],
  },
  {
    title: "2",
    id: 2,
    pid: null,
    children: [
      { title: "2-1", id: 21, pid: 2 },
      { title: "2-2", id: 22, pid: 2 },
    ],
  },
  {
    title: "3",
    id: 3,
    pid: null,
    children: [
      { title: "3-1", id: 31, pid: 3 },
      { title: "3-2", id: 32, pid: 3 },
    ],
  },
];
</script>
<style lang="less" scoped></style>
