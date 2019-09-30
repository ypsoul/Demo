/**
 * 需求：
来了一批广告资源投放，关于计算机培训，
1.一批是Java的，字体是绿色的；
2.还有一批是php,字体是黄色的，背景色是红色；
3.JavaScript的，背景色是粉丝的
...
 */

 //version 1.0
 var Java = function(content){
     this.content = content;
     (function(content){
         var div = document.createElement('div');
         div.innerHTML = content;
         div.style.color = 'green';
         document.getElementById('container').append(div)
     })(content)
 }


var Php = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.color = 'yello';
        div.style.background = 'red'
        document.getElementById('container').append(div)
    })(content)
}

var JavaScript = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.background = 'pink'
        document.getElementById('container').append(div)
    })(content)
}

//简单工厂

function Factory(type,content){
    switch(type){
        case 'java':
            return new Java(content)
        case 'php':
            return new Php(content)
        case 'JavaScript':
            return new JavaScript(content)
    }
}

Factory('JavaScript','javaScript 哪家强')


//安全模式类
var Demo = function(){};
Demo.prototype = {
    show:function(){
        console.log("成功获取，，，")
    }
}

var d = new Demo()
d.show() // 成功获取，，，

var d = Demo();
d.show() // Uncaught TypeError

//------------------------------

var Demo = function(){
    if(!this instanceof Demo){
        return new Demo()
    }
}
var d = Demo();
d.show()

//  安全的工厂方法

var Factory = function(type,content){
    if(this instanceof Factory){
        var s = new this[type](content)
        return s
    }else{
        return new Factory(type,content)
    }
}
// 工厂原型中设置所有类型对象的基类
Factory.prototype = {
    Java:function(content){
        //...
    },
    Php:function(content){
        //...
    }, 
    JavaScript:function(content){
        //...
    }
}


//使用
var data = [
    {type:'Java',content:'Java 哪家强'},
    {type:'Php',content:'Php 哪家强'},
    {type:'JavaScript',content:'JavaScript 哪家强'}
]

for(var i=3; i>=0,i--;){
    Factory(s[i],s[i].content)
}