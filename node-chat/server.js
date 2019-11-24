var fs = require('fs')
var http = require('http')
var socketIO = require('socket.io')
var express = require("express");
var path = require("path");


var app = express();
app.use(express.static(path.join(__dirname, '/'))); //设置 express  static 静态文件 

app.get("/", (req, res) => {
    fs.readFile("./chat.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

var server = http.createServer(app);

var users = {};//  sid  socket
var reflect = {};//  name  sid
var io = socketIO.listen(server);
io.on('connection', function (socket) {
    console.log(socket.id + "已经连接完成")
    // console.log(socket.id+"已经连接完成")
    //每次连接都对应一个  sid
    //每一个用户都有一个socket  对应一个 sid  对应一个  username
    // console.log(socket.id);
    io.sockets.emit('connectSucc', socket.id);

    //
    //发送私密消息
    socket.on('private message', function (from, to, msg) {
        // from -->sid
        //to -->sid
        for (const key in reflect) {
            console.log(key, ":", reflect[key])
        }
        // console.log('I received a private message by ', reflect[from],from, ' say to ', reflect[to],to, msg);
        if (reflect[to] in users) {
            // console.log('to :' + to);
            //to 222
            // users[reflect[to]].emit('to' + to, { mess: msg });
            users[reflect[to]].emit('to' + to, { person: from, content: msg });
            console.log('to' + to);
            console.log(reflect[to]);
            //
            // console.log(reflect[to],to+'_to');
            // xor  <--> 222
        }
    });

    //新增用户
    socket.on('new user', function (data) {
        reflect[data] = socket.id;
        // var sidList =
        //data 是 from 谁发的 添加到这个  users列表  登陆的用户

        if (socket.id in users) {
            socket.emit("userHasLogin");
        } else {
            // var nickname = data;
            users[socket.id] = socket;
            console.log(data, socket.id, "已经登录！")
            // users["aaa"] = socket
            //每一个登陆的用户有一个自己的socket
        }
        // console.info(users);
    });
    //断开连接
    socket.on('disconnect', function () {
        console.log('user' + socket.id + ' disconnected');
    });
});


server.listen(8080, function () {
    console.log('Listening at: http://localhost:8080');
});