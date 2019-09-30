// 单例模式，又称为单体模式，是只被实例化一次的对象类。
//滑动


//version 1
function g(id){
    return document.getElementById(id)
}
function css(id,key,value){
    g(id).style[key] = value
}
function attr(id,key,value){
    g(id)[key] = value
}
function on (id,type,fn){
    g(id)['on'+type] = fn
}

// version 2

var King = {
    g:function(id){
        return document.getElementById(id)
    },
    css:function(id,key,value){
        g(id).style[key] = value
    }
    //...
}

// version 3

var King = {
    g:function(id){
        return document.getElementById(id)
    },
    css:function(id,key,value){
        this.g(id).style[key] = value
    }
    //...
}

//创建小型的代码库
var A = {
    Util:{
        util_method1:function(){},
        util_method2:function(){}
    },
    Tool:{
        tool_method1:function(){},
        tool_method2:function(){}
    },
    ajax:{
        get:function(){},
        post:function(){}
    },
    other:{
        //...
    }
}
//使用
A.Util.util_method1();
A.Tool.tool_method2()


//静态变量 单例好处

var Config = (function(){
    var conf = {
        MAX_NUM:100,
        MIN_NUM:1,
        COUNT:1000
    }
    //返回取值
    return {
        get : function(name){
            return conf[name] ? conf[name] :null
        }
    }
})();

var count = Config.get('COUNT');
console.log(count) //1000



//惰性单例
var LazySingle = (function(){
    var _instance = null;
    // 单例
    function Single(){
        // 定义私有属性 方法
        return {
            publicMethod:function(){},
            publicProperty:'1.0'
        }
    }
    //获取单例对象接口
    return function(){
        if(!_instance){
            _instance = Single()
        }
        //返回
        return _instance
    }
})()

console.log(LazySingle().publicProperty)