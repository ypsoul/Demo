const path = require('path')

module.exports = {
    // 修改路口
    pages:{
        index:{
            entry:'examples/main.js',
            template:'public/index.html',
            filename:'index.html'
        }
    },

    // 扩展webpack配置,加入编译
    chainWebpack:config => {
        config.resolve.alias
        .set('@',path.resolve(('examples')))
        .set('~',path.resolve('packages'))
        
        config.module
        .rule('js')
        .include.add(/examples/).end()
        .include.add(/packages/).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
            return options
        })
    }
}