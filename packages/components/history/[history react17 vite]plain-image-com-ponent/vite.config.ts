import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import * as path from "path";
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // chunkSplitPlugin({ strategy: "unbundle" })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.tsx"),
      name: "PlainImage",
      fileName: (format) => `plain-image.${format}.js`,
      formats: ["es"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "react",
        },
      },
      plugins: [
        typescript({
          // module: "ESNext"
			    tsconfig: "tsconfig.json",
        })
        // postcss({
        //   modules: true,
        //   extract: true,
        // }),
      ]
    },
  },
});
