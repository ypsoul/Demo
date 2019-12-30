/**
 * @param {} vnode // 用户写的虚拟节点
 * @param {} container // 渲染到某个容器
 */

export function render(vnode, container) {
  let ele = createDomElementFromVnode(vnode);
  container.appendChild(ele)
}


// 通过虚拟DOM创建真实的DOM
function createDomElementFromVnode(vnode) {
  let {
    type,
    key,
    props,
    children,
    text
  } = vnode;
  if (type) { // 说明是一个标签
    vnode.domElement = document.createElement(type);
    updateProperties(vnode) //根据当前的虚拟节点的属性，更新真实的DOM
    // 遍历子节点
    children.forEach(childVnode => render(childVnode, vnode.domElement))
  } else {
    vnode.domElement = document.createTextNode(text)
  }
  return vnode.domElement
}


// 后续比对的时候，会根据老的属性 和 新的属性 重新更新节点
function updateProperties(newVnode, oldProps = {}) {
  let domElement = newVnode.domElement; //真实的dom元素
  let newProps = newVnode.props; // 当前虚拟节点的属性

  // 属性如果老的里面有，新的没有 将移除
  for (let oldPropName in oldProps) {
    if (!newProps[oldPropName]) {
      delete domElement[oldPropName]
    }
  }

  // 同一 style属性，旧得移除 新的覆盖
  let newStyleObj = newProps.style || {}
  let oldStyleObj = newProps.style || {}

  for (let propName in oldStyleObj) {
    if (!newStyleObj[propName]) {
      domElement.style[propName] = ''
    }
  }



  // 如果老的没有，新的里面有 将覆盖老节点
  for (let newPropName in newProps) {
    if (newPropName === 'style') { // 还有事件
      let styleObj = newProps.style;
      for (let s in styleObj) {
        domElement.style[s] = styleObj[s]
      }
    } else {
      domElement[newPropName] = newProps[newPropName]
    }

  }
}