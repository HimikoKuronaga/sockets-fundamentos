
let socket = io();

// on escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos comunicacion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Hugo',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor : ', mensaje);
});


