import Component from "../react/component"
const ReactDOM = {
  render
}

function render(vonde, container) {
  return container.appendChild(_render(vonde))
}

function createComponent(comp,props){
  let inst;
  if(comp.prototype&&comp.prototype.render){
    inst = new comp(props)
  }else{
    // 如果是函数组件，将函数组件扩展成类组件，方便统一管理
    inst= new Component(props)
    inst.constructor = comp;
    inst.render=function(){
      return this.constructor(props)
    }
  }
  return inst
}

function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === "boolean") vnode = "" ;
  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return textNode;
  }

  if(typeof vnode.tag ==="function"){
    // 创建组件
    const comp = createComponent(vnode.tag,vnode.attrs);
    setComponentProps(comp,vnode.attrs)

    return comp.base;
  }

  // 虚拟dom对象
  const {
    tag,
    attrs
  } = vnode;
  const dom = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(key => {
      const value = attrs[key];
      setAttribute(dom, key, value);
    })

  }
  // 递归渲染子节点
  vnode.childrens.forEach(child => {
    render(child, dom)
  })
  return dom;
}

function setAttribute(dom, key, value) {
  if (key === 'className') {
    key = 'class'
  }
  // 如果是事件 onclick onBlur
  if (/on\w+/.test(key)) {
    key.toLowerCase();
    dom[key] = value || '';
  } else if (key === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      // {width:20px}
      for (let k in value) {
        if (typeof value[k] === "number") {
          dom.style[k] = value[k] + 'px'
        } else {
          dom.style[k] = value[k]
        }
      }
    }
  } else {
    if (key in dom) {
      dom[key] = value || ""
    }
    if (value) {
      dom.setAttribute(key, value);
    } else {
      dom.removeAttribute(key);
    }
  }
}
export default ReactDOM;