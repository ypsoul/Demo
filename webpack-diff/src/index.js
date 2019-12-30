import './index.css'

function main() {
  console.log('cccc')
}
main()

import { createElement, render } from './vdom'
let vnode = createElement('div',{id:'wrap1',key:'4'},createElement('div',{id:'wrap2',key:'3'},'测试二'),'测试一')

render(vnode,app)