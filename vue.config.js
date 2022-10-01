const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    allowedHosts: "all",
    proxy:{
      "/ounapi":{
        target: process.env.VUE_APP_API_URL
      }
    }
  }
})
