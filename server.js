const http = require("http");
const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static( __dirname + '/Client'));
console.log(__dirname + '/Client')
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (sock) => {
  sock.on('rx1', (text) => {
    io.emit('rx1', text);
  });
  sock.on('ry1', (text) => {
    io.emit('ry1', text);
  });
  sock.on('rx2', (text) => {
    io.emit('rx2', text);
  });
  sock.on('ry2', (text) => {
    io.emit('ry2', text);
  });
  sock.on('angle1', (text) => {
    io.emit('angle1', text);
  });
  sock.on('angle2', (text) => {
    io.emit('angle2', text);
  });
  sock.on('angle21', (text) => {
    io.emit('angle21', text);
  });
  sock.on('angle22', (text) => {
    io.emit('angle22', text);
  });

});
server.on('error', (err) => {
    console.error('Server error:', err);
  });
server.listen(8080, () => {
    console.log('RPS started on 8080');
});
  