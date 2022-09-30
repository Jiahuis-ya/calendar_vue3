const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (src) => path.resolve(__dirname, src)

module.exports = defineConfig({
  publicPath: './', // 打包后的文件通过这个路径去访问dist文件
  outputDir: path.resolve(process.cwd(), './dist'),
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    open: true,
    port: 8888,
    // TODO:暂时关闭，使用nginx代理
    // proxy: {
    //   // 聚合api 
    //   "/calendar": {
    //     target: "http://v.juhe.cn", // 目标地址
    //     changeOrigin: true, // 是否改变源、换源
    //     ws: true, // web socket开启
    //     secure: false, // https检查
    //   },
    // },
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  },
  // lintOnSave: false
  css: {
    loaderOptions: {
      scss: {
        // v8: prependData  其余：additionalData
        additionalData: `
          @import "assets/sass/_variables.scss";
          @import "assets/sass/mixin.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolve('./src/assets'),
        libs: resolve('./src/libs'),
        components: resolve('./src/components'),
      }
    }
  },
})
