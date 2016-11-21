'use strict';

var path = require('path');
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../../', 'public')));

http.listen(3000, function(){
  console.log('Listening on Port 3000');
});

io.on('connection', function(socket){
  console.log('A user connected');

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  });

  socket.on('chat:message', function(data){
    io.emit('chat:message', data);
    console.log('Chat message : ' + data.message);
  });
});