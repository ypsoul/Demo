const http = require('http')
const io = require('socket.io')

let httpServer = http.createServer((req,res)=>{

})

httpServer.listen(8080)

let wsServer=io.listen(httpServer);

let users = { };  // sid:socket

let reflect = {}; // name:sid

let userList = []

wsServer.on('connection',socket=>{ // 此处socket 是新建socket的实例 ,每个用户都是独一无二的
    // 在此也可以跟数据库关联（根据前端数据取关联信息）

    console.log(socket.id + "已经连接完成") // socket.id 是 实例自带的，我一开始以为是前端传递的数据对象，注意一下哦

    socket.emit('connectSucc', socket.id);


    socket.on('addUser',data=>{
      reflect[data] = socket.id;
      if(socket.id in users){ // 如果存在了，说明登录了
      } else {
        users[socket.id] = socket;
        console.log(data, socket.id, "已经登录！")
      }
      socket.emit("userHasLogin");
      userList.push(data)
    })

    socket.emit('numbers',userList)

    socket.on('msg',obj=>{    // obj 接受前端 emit('msg') message

      aSock.forEach(s=>{
        if(s!==socket.nickname){ // 过滤掉自己发送的信息
          socket.emit('msg',obj)
        }
      })
    })



    socket.on('disconnect',()=>{


      console.log('user' + socket.id + ' disconnected');
    })
})

