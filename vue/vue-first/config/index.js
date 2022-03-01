'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    // Default 경로
    // index: path.resolve(__dirname, '../dist/index.html'),
    // SpringBoot 경로
    index : path.resolve(__dirname,'../../../src/main/resources/static/vue-first/index.html'),

    // Paths
    // Default 경로
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // SpringBoot 경로
    // assetsRoot: path.resolve(__dirname, 'springboot내 build 결과물 경로')
    // build시 생성되는 css, js등 파일 위치 설정
    // index.html은 해당 경로의 css, js등 파일 을 읽어와 화면에 보여짐 
    assetsRoot: path.resolve(__dirname, '../../../src/main/resources/static/vue-first'), 
    assetsSubDirectory: 'static/',
    // assetsPublicPath : index.html에서 읽어올 경로(default '/', static에서 vue-first를 생성하였기에 해당 디렉토리 읽음)
    assetsPublicPath: 'vue-first/',
    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
