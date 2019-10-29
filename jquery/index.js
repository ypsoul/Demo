// 匿名函数
(function(window,undefined){
  window.$ = jquery = function(nodeSelect){
    let nodes = {}

    if(typeof nodeSelect === "string"){
      let temp = document.querySelectorAll(nodeSelect);
      for(let i =0;i < temp.length;i++){
        nodes[i] = temp[i];
      }
      // 类数组
      nodes.length = temp.length;
    }else{
      throw new Error('必须输入字符串')
    }
    nodes.addClass = function(classes){
      let className = classes.split(' ');
      className.forEach(value=>{
        for(let i = 0;i < nodes.length;i++){
          nodes[i].classList.add(value)
        }
      })
    }
    nodes.setText = function(text) {
        for (let i = 0;i < nodes.length; i++){
          nodes[i].textContent = text
        }
    }
    return nodes
    
  }
})(window)