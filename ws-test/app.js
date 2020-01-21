const http = require('http')
const io = require('socket.io')

let httpServer = http.createServer((req, res) => {

})

httpServer.listen(8080)

let wsServer = io.listen(httpServer);

let reflect = {}; // name :sid

let socketlist = {}; // sid :socket
 
let userList = []

wsServer.on('connection', socket => { // 此处socket 是新建socket的实例 ,每个用户都是独一无二的
  // 在此也可以跟数据库关联（根据前端数据取关联信息）

  // console.log(socket.id + "已经连接完成") // socket.id 是 实例自带的，我一开始以为是前端传递的数据对象，注意一下哦



  socket.on('addUser', username => {
    reflect[username] = socket.id;
    socketlist[socket.id] = socket;
    socket.nickname = username;
    userList.push(username);

    for( var key in socketlist ){
      socketlist[key].emit('numbers', userList)
    }
  })

  
  socket.emit('numbers', userList);


  socket.on('msg', obj => { // obj 接受前端 emit('msg') message
    userList.forEach(s => {
      if (s !== obj.nickname) { // 过滤掉自己发送的信息
        socketlist[reflect[s]].emit('msg', obj)
      }
    })
  })



  socket.on('disconnect', () => {
    console.log('user ' + socket.id + ' disconnected');

    if (reflect.hasOwnProperty(socket.nickname)) {
      delete reflect[socket.nickname];
      delete socketlist[socket.id];
      userList[socket.id] && remove(userList[socket.id]);
      socket.emit('numbers', userList);
      console.log(socket.id + '删除数据成功')
    }
  })
})