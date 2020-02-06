var express = require('express');
var socket = require('socket.io');

// app set up
var app = express();
var server = app.listen(4000, () => {
  console.log('Listening to requests on port 4000');
});

// app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

var io = socket();
io.on('connection', (socket) => {
  console.log('Made a socket connection');
});


// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);
//
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//   console.log('a user connected');
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
