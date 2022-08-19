import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { prismjsPlugin } from "vite-plugin-prismjs";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    vue(),
    prismjsPlugin({
      languages: ["json"],
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  base: "./", // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
});