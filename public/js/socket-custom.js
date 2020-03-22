var socket = io()
// escuchar sucesos
socket.on('connect', function () {
  console.log('conectado al servidor')
})
socket.on('disconnect', function () {
  console.log('perdimos conexion con el servidor')
})
// enviar informacon
socket.emit('enviarMSM', {
  usuario: 'Bruno',
  mensaje: 'desde sockets'
}, function (respuesta) {
  console.log(respuesta)
})

// escuchar informacion desde el lado del client
socket.on('enviarMSM', function (payload) {
  console.log(payload)
})