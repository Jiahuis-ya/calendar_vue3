const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // huiyu文件(succeed)
      // "/apis": {
      //   target: "http://106.53.120.224:8901", // 目标地址
      //   changeOrigin: true, // 是否改变源、换源
      //   // ws: true, // web socket开启
      //   secure: false, // https检查
      //   pathWrite: { // 重写路径
      //     "^/apis": ""
      //   }
      // },
      
      // mock api
      // "/api3": {
      //   target: "http://localhost:4100", // 目标地址
      //   changeOrigin: true, // 是否改变源、换源
      //   // ws: true, // web socket开启
      //   secure: false, // https检查
      //   pathWrite: { // 重写路径
      //     "^/api3": ""
      //   }
      // },
      // 聚合api TODO: 有时代理失败可以考虑使用他们的公公path去匹配，不一定要设置'api'
      "/calendar": {
        target: "http://v.juhe.cn", // 目标地址
        changeOrigin: true, // 是否改变源、换源
        // ws: true, // web socket开启
        secure: false, // https检查
        // pathWrite: { // 重写路径
        //   "^/api2": ""
        // }
      },
    },
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  },
  // lintOnSave: false
})
