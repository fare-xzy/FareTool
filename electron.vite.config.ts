import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'
//ant-design-vue
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        //安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ['vue', 'vue-router'],
        dts: "src/auto-import.d.ts",
        //ant-design-vue
        resolvers: [AntDesignVueResolver()]
      }),
      Components({
        dirs: ['src/components'],
        //ant-design-vue   importStyle = false 样式就没了
        resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})],
      })
    ]
  }
})
