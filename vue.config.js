const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // http://v.juhe.cn/calendar/day
      "api": {
        target: "http://v.juhe.cn/", // 目标地址
        changeOrigin: true, // 是否改变源、换源
        ws: true, // web socket开启
        secure: false, // https检查
        pathWrite: { // 重写路径
          "^api": ""
        }
      }
    }
    // port: 4003,
    // host: true,
    // open: true
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  },
  // lintOnSave: false
})
