import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const optimizeDepsInclude = [];
const mainFields = ["module", "main"];
if (process.env.NODE_ENV === "development") {
  mainFields.unshift("my-low-code-main");
} else {
  optimizeDepsInclude.push("@my-low-code/basic-components");
  optimizeDepsInclude.push("@my-low-code/plain-image-component");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  optimizeDeps: {
    include: optimizeDepsInclude,
  },
  // build: {
  //   commonjsOptions: {
  //     include: [/@my-low-code/],
  //     defaultIsModuleExports: 'auto'
  //   } as RollupCommonJSOptions,
  // },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    mainFields,
    alias: [
      {
        find: "~antd",
        replacement: "node_modules/antd",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
});
