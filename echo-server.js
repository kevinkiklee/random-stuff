const net = require('net')

net.createServer(socket => {
  socket.on('data', function(data){
    console.log('Echoing: %s', data.toString())
    socket.write(data.toString())
  })
}).listen(8001)
