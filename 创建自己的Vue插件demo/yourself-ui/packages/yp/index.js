import Yptest from './src/yp'

Yptest.install = Vue => {
    //定义一个新的vue组件
    Vue.component(Yptest.name,Yptest)
}

export default Yptest