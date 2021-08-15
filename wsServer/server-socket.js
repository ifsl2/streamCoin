const { Server } = require('http')
const net = require('net')

var clients = [];

const handleConnection = socket => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort     
  clients.push(socket);
  broadcast(socket.name + " Se conectou\n", socket);

  socket.on('data', function (data) {
    //broadcast(socket.name + ": " + data + "\n", socket);
    broadcast(data + "\n");
  });

  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " desconectou.\n");
  });
  
  function broadcast(message, sender) {
    clients.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });
  }
}

const server = net.createServer(handleConnection)
server.listen(4000, '127.0.0.1')