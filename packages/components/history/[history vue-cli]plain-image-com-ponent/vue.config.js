const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    port: 9991,
  },
  css: {
    extract: false,
  },
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.entry =
      process.env.NODE_ENV === "development"
        ? ["./src/show-case/main.ts"]
        : ["./src/components/index.vue"];
    if (process.env.NODE_ENV === "production") {
      config.module.rules.forEach((rule) => {
        if (rule.use) {
          let idx = rule.use.findIndex((w) => w.loader.includes("thread-loader"));
          if (idx !== -1) {
            rule.use.splice(idx, 1)
          }
        }
      });
    }
    config.output.libraryExport = 'default'
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap((opts) => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });
    }
  },
});
