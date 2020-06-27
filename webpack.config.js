// path模块
const path = require('path')
// webpack是基于node.js的所以遵循common.js规范
module.exports = {
  // mode选项：两种打包模式
  // production（默认值） 压缩代码，打包慢，在线上使用
  // development 不压缩代码，打包块，在开发阶段使用
  mode:'development',
  // 设置入口和出口，入口为main.js 出口为dist/bundle.js
  // 入口
  entry:'./src/main.js',
  // 出口
  output:{
    // 目录,拼接绝对路径
    path:path.join(__dirname,'dist'),
    // 文件名称
    filename:'bundle.js'
  }
}