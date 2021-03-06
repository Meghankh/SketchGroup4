var express = require('express');
var app = express(); //function handler
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

//run node index.js --> Hellow world gets sent
/*app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});*/


//But we want more html stuff, put in index.html
//route handler
app.get('/', function(req, res){
    res.redirect('/controller');
});


app.get('/controller', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/display', function(req, res){
  res.sendFile(__dirname + '/display.html');
});


//pays attention to when someone goes to port 300
//and leaves
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
  	//send message to everyone
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

//we are listening on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
