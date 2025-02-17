module.exports = {
  // 默认输出目录为 dist/
  outputDir: 'dist',

  // 配置静态资源路径为绝对路径，生产环境下使用根路径
  publicPath: '/',

  // 其他配置项
  devServer: {
    port: 8080, // 开发服务器端口
    open: true, // 启动时自动打开浏览器
    historyApiFallback: true, // 确保 history 模式路由正常工作
    hot: true, // 启用热模块替换
    inline: true, // 启用内联模式
    watchOptions: {
      poll: true, // 轮询文件变化
    },
  },

  // 配置 webpack 以支持异步组件加载，优化代码分割
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },

  // 确保构建后的文件路径正确
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        // 自定义配置项
        return options;
      });
  },
};