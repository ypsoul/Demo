// 匿名函数
let $= jquery= (function(window,undefined){
  let jquery = function(nodeSelect){
    this.nodes = document.querySelectorAll(nodeSelect)
  }
  jquery.prototype = {
      each: function(callback) {
        for (let i = 0,len = this.nodes;i++){

        }
      },
      addClass:function(className) {
        let className = classes.split(' ');
        className.forEach(value=> {
          
        })
      }
  }

    addClass = function(classes){
      
      className.forEach(value=>{
        this.each(function(index,obj) {

        })
        for(let i = 0;i < nodes.length;i++){
          nodes[i].classList.add(value)
        }
      })
    }
    setText = function(text) {
        for (let i = 0;i < nodes.length; i++){
          nodes[i].textContent = text
        }
    }
    return nodes
})(window)