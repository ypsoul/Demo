var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
});

var socketArr = []; //创建一个数组来存放所有连接的socket.id



io.on('connection', function (socket) {
    socket.on('disconnect', ()=> {
        let a= socketArr.findIndex((value)=>{
            return value===socket.id
        });
        console.log(a)
        if(a>-1)
        socketArr.splice(a,1)
    });
    console.log('a user connected!');
    socket.emit('chat message', 'i am ' + socket.id); //连接后在客户端进行自我介绍，是哪个一个socket.id

    socketArr.push(socket.id); //把连接的socket.id都存入数组
    socket.emit('joiner',socketArr)
    socket.on('chat message', function (msg) {
        socket.username = socket.id;
        var index = socketArr.indexOf(socket.id); //获得数组的index
        var id = index == socketArr.length - 1 ? socketArr[0] : socketArr[index + 1]; //选择私信的目标socket.id。
        //这是就是1发给2， 2发给3， 3发给1.
        //按照首尾相连的顺序传递发送消息
        socket.to(id).emit('chat message', 'from ' + socket.id + ':' + msg + ' to ' + id); //消息发到指定socket.id的客户端，并且标明是谁发给谁的
    });

});

http.listen(3000, function () {
    console.log('listening on *:3000');
});