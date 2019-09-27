import Yptest from './yp/index.js'

const components = [
    Yptest
]

// 定义install方法，接受一个vue为参数
const install = function (Vue){
    // 判断这个组件是不是安装了，如果安装了我就return
    if(install.installed) return
    install.installed = true

    // 遍历所有的组件
    components.map(component=>Vue.use(component))


    if(typeof window !== 'undefined' && window.Vue){
        install(window.Vue)
    }

}

export default {
    install,
    //所有组件必须要有install方法，才能Vue.use()
    ... components,
}