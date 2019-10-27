const React = {
  createElement
}

function createElement(tag,attrs,...childrens){
  // 解构
  return {
    tag,
    attrs,
    childrens
  }
}

export default React