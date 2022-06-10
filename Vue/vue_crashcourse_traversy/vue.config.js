module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5151',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
};
