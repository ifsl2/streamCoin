const { Server } = require('http')
const net = require('net')



//CONEXÃO COM O COLETOR DE DADOS
const WebSocketServer = require('ws')


const wss = new WebSocketServer.Server({port: 4000}) 

let sockets = []
wss.on('connection', function(socket, req) {
  sockets.push(socket);
  console.log('Conexão com o coletor realizada com sucesso');
  
  
  var myarr = req.url.split("/?assets=");
  
  if(myarr[1]){
    arrayCript = myarr[1].split(",");
  }
  
  
  socket.on('message', function incoming(message) {
    var obj = JSON.parse(message.toString());
    if(typeof arrayCript !== 'undefined'){
      if(arrayCript.includes(Object.keys(obj)[0])){
        sockets.forEach(s => s.send(message.toString()))
      }
    }else{
      console.log(message.toString());
    }
    
  })

  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket)
    console.log('byee')
  })
})

//Daqui pra baixo é código antigo que deve ser adaptado e incluído
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
server.listen(5050, '127.0.0.1')