var socket = io()

var move = function(id){
  socket.emit('newMove',id);
};

window.ondeviceorientation = function(event) {
          console.log(event);
          alpha = Math.round(event.alpha);
          beta = Math.round(event.beta);
          gamma = Math.round(event.gamma);
       
       var coordinates = {'bx':beta, 'gy':gamma, 'az':alpha}

    // send data over the socket
    socket.emit('acceleration',coordinates); 
}       


