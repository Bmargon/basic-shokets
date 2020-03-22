const {io} = require('../server')

io.on('connection', (client) => {
  console.log('usuario conectado')

  client.emit('enviarMSM', {
    usuario: 'saludos desde node',
    mensaje: 'bienvenidoooooo'
  })
  client.on('disconnect', () => {
    console.log('usuario desconectado')
  })
  // escuchar el cliente
  client.on('enviarMSM', (payload, callback) => {
    console.log(payload)


    client.broadcast.emit('enviarMSM', payload)
    // if (payload.usuario) {
    //   callback({
    //     resp: 'todo ok'
    //   })
    // } else {
    //   callback({
    //     resp: 'todo mal'
    //   })
    // }
  })
})