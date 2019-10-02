// // 状态模式：当一个对象的内容状态发生改变时，会导致其行业的改变
// function showResult(result) {
//     if(result == 0){
//         // 0处理结果
//     }else if(result == 1){
//         // 1处理结果
//     }else if(result == 2){
//         // 2处理结果
//     }
//     // ...
// }

// // 状态对象的实现

// var resultState = function () {
//     var States = {
//         // 每一种状态作为一种独立方法保存
//         state0: function () {
//             console.log('这是第零种情况')
//         },
//         state1: function () {
//             console.log('这是第一种情况')
//         },
//         state2: function () {
//             console.log('这是第二种情况')
//         }
//     }
//     function show(result) {
//         States['state'+result] && States['state'+result]();
//     }
//     return {
//         // 返回调用状态方法的接口
//         show: show
//     }
// }()

// resultState.show(2)


// // 超级玛丽

// // 单一判断
// var instAction =""

// function changeMarry(action) {
//     if(action == "jump"){
//         // 跳跃动作
//     }else if(action == 'move'){
//         // 移动操作
//     }else{
//         // 默认
//     }
// }

// // 复合动作 对条件判断是翻倍的

// var lastAction1 = ""
// var lastAction2 = ""

// function changeMarry(action1,action2) {
//     if(action1 == "shoot"){
//         // 射击
//     }else if(action1 == "jump"){
//         // 跳跃
//     }else if(action1 == "move"&&action2 == "shoot"){
//         // 移动射击
//     }else if(action1 == "jump"&&action2 == "shoot"){
//         // 跳跃射击
//     }
//     lastAction1 = action1 || ""
//     lastAction2 = action2 || "" 
// }



// 创建超级玛丽状态类
var MarryState = function () {

    // 内部状态私有变量
    var _currentState = {},
        states = {
            jump: function () {
                console.log('jump')
            },
            move: function () {
                console.log('move')
            },
            shoot: function () {
                console.log('shoot')
            },
            squat: function () {
                console.log('squat')
            }
        };

    // 动作控制类
    var Action = {
        changeState: function () {
            var arg = arguments;

            _currentState = {};

            if (arg.length) {
                for (var i = 0, len = arg.length; i < len; i++) {
                    _currentState[arg[i]] = true;
                }
            }
            return this
        },
        // 执行
        goes:function(){
            console.log('触发一次动作')
            for(var i in _currentState){
                states[i]&&states[i]()
            }
            return this
        }
    }
    // 返回接口方法
    return {
        change:Action.changeState,
        goes:Action.goes
    }
}

var marry = new MarryState()

marry.change('jump','shoot').goes().change('shoot').goes()