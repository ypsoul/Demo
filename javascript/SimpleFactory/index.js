/**
 * 需求：
 1.用户名，如果用户输入内容不符合规范就自定义一个警示框，提示信息：用户名不能超过16个字母或者数字；
 2.用户密码，如果用户输入的密码错误就自定义一个警示框，提示信息：用户密码错误；
 3.用户名：用户名不存在就自定义一个警示框，提示信息：您的用户名不存在，清重新输入；
 4.在警示框里添加一个注册按钮
 5.登入成功，除了有确定按钮，还要有提示信息。
 */


// version 1.0

var LoginAlert = function(text){
    this.content = text
}
LoginAlert.prototype.show = function(){
    // 显示警示框
}

//使用
var userNameAlert = new LoginAlert('用户名不能超过16个字母或者数字');
userNameAlert.show()

var passwordAlert = new LoginAlert('用户密码错误')
passwordAlert.show()


var loginConfirm = function(text){
    this.content = text
}
loginConfirm.prototype.show = function(){
    //显示显示框
}

var loginFailConfirm = new loginConfirm('您的用户名不存在，清重新输入');
loginFailConfirm.show()


var LoginPrompt = function(text){
    this.content = text
}
LoginPrompt.prototype.show = function(){
    //显示提示框
}

// eg体育用品为例，有好多种类，篮球，足球，网球，再把他们封装在一个函数里，我只要知道这个函数，里面的基类就知道了啊

//篮球基础
var Basketball = function (){
    this.intro = "篮球盛行于美国"
}
Basketball.prototype = {
    getMember:function(){
        console.log("每个队伍需要5名队员")
    },
    getBallSize:function(){
        console.log("篮球很大")
    }
}

//足球基础
var Football = function (){
    this.intro = "足球在世界范围很流行"
}
Football.prototype = {
    getMember:function(){
        console.log("每个队伍需要11名队员")
    },
    getBallSize:function(){
        console.log("足球很大")
    }
}


//网球基础
var Tennis = function (){
    this.intro = "网球比赛每年有很多系列赛"
}
Tennis.prototype = {
    getMember:function(){
        console.log("每个队伍至少1名队员")
    },
    getBallSize:function(){
        console.log("网球很小")
    }
}

// 重点来了   工厂

var SportsFactory = function(name){
    switch (name){
        case 'NBA':
            return new Basketball();
        case 'wordCup':
            return new Football();
        case 'FrenchOpen' :
            return new Tennis()
    }
}

//调用
var football = SportsFactory('wordCup');
console.log(football)
console.log(football.intro)
football.getMember()

//这样简单的工厂模式就出来了  回过头来，之前的需求

//version 2.0

var PopFacory = function(name){
    switch(name){
        case 'alert':
            return new LoginAlert()
        case 'confirm':
            return new loginConfirm()
        case 'prompt':
            return new LoginPrompt()
    }
}
//只是在基础是封装了一个工厂函数，但是这里面有好多相同的地方，也是可以提取出来的。比如书的工厂，输入有不同分类，但是都会有目录，出版时间，页码等等。不同的属性就做针对性的处理，参数传参，

function createBook(name,time,type){
    var o= new Object();
    o.name = name;
    o.time =time;
    o.getName = function(){
        console.log(this.name)
    }
    return o;
}

var book1 = createBook("js book",2019,"js");
var book2 = createBook("css book", 2018,"css")

book1.getName();
book2.getName()

// 最后再看看需求他们都有共有的属性content，原型方法show，不同的是提示框还是确认框之类的

// version 3,0
function createPop(type,text){
    var o = new Object();
    o,content=text;
    o,show = function(){
        //显示方法
    }
    if(type = 'alert'){
        //
        console.log("alert")
    }
    if(type == 'prompt'){
        //
    }
    if(type == 'confirm'){
        //
    }
    return o
}
var userNameAlert = createPop('alert','用户只能是26字母和数字')
console.log(userNameAlert)

//一个用构造函数实例化的，另一个是建立一个新对象，增强其属性和功能来实现的