// 为页面文案document对象绑定了一个click文件事件来实现隐藏提示框的交互功能
document.onclick = function(e){
    e.preventDefault();
    if(e.target !== document.getElementById('xxx')){
        hidePageAlert()
    }
}

function hidePageAlert(){

}


//定义一个统一接口方法，简化我们对复杂的底层接口不统一的使用需求。
function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false); //false- false- 默认。事件句柄在冒泡阶段执行
    } else if(dom.addEvent){
        dom.attachEvent('on'+type,fn)
    }else{
        dom['on'+type] = fn;
    }
}
// 使用
var myDom = document.getElementById('xxx')
addEvent(myDom,'click',function(){
    alert(1)
})


// 获取事件对象
var getEvent= function(event){
    return event || window.event  //ie返回window.event
}

//获取元素
var getTarget = function(event){
    var event = getEvent(event);
    return event.target || event.srcElement;
}

//阻止默认行为

var preventDefault = function(event){
    var event = getEvent(event);
    if(event.preventDefault){
        event.preventDefault()
    }else{
        event.returnValue = false
    }
}

document.onclick = function(e){
    preventDefault(e);
    if(getTarget(e) !== document.getElementById("xx")){
        //...
    }
}


var A = {
    g:function(id){
        return document.getElementById(id)
    },
    css:function(id,key,value){
        this.g(id).style[key]=value;
    },
    attr:function(id,key,value){
        this.g(id)[key] = value;
    },
    html :function(id,html){
        this.g(id).innerHTML = html
    },
    on:function(id,type,fn){
        this.g(id)['on'+type] = fn
    }
}