import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    dts()
  ],
  server: {
    force: true,
  },
  // root: path.resolve(__dirname, 'public'),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.vue'),
      name: 'PlainQrcode',
      formats: ['es'],
      fileName: (format) => `plain-qrcode.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})
