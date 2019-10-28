import Component from './component'

function createElement(tag,attrs,...childrens){
  // 解构
  return {
    tag,
    attrs,
    childrens
  }
}

export default {
  createElement,
  Component
}