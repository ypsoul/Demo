// 将观察者放在一个闭包里，当页面加载就立马执行

var Observer = (function(){
    // 防止消息队列暴露
    var _message = {}
    return {
        // 注册消息  接收两个参数 消息类型和相应的处理动作
        regist: function(type,fn){
            // 消息类型不存在就创建一个消息类型
            if(typeof _message[type] === "undefined"){
                _message[type] = [fn]
            }else {
            // 将方法动作推入该消息对应的动作序列中
                _message[type].push(fn)
            }
        },
        // 观察者发布一个消息时将所有订阅者的消息一次执行完
        // 发布消息  接收两个参数 消息类型和执行需要传递的参数
        fire: function(type,args){
            // 如果没被注册
            if(!_message[type]){
                return
            }
            var events = {
                type: type,
                args: args || {}
            },
            i=0,
            len = _message[type].length;
            for(;i<len;i++){
                _message[type][i].call(this,events)
            }
        },
        // 移除消息 接收两个参数 消息类型和相应的处理动作
        remove: function(type,fn){
            // 如果消息队列存在
            if(_message[type] instanceof Array){
                // 从最后一个消息开始遍历
                var i= _message[type].length-1;
                for(;i>=0;i--){
                    // 存在并移除
                    _message[type][i] === fn && _message[type].splice(i,1)
                }
            }

        }
    }
})()

Observer.regist('test',function(e){
    console.log(e.type,e.args.msg)
})

Observer.fire('test',{msg:'传递参数'})


