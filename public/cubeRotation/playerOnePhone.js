var socket = io()

var move = function(id){
  console.log('hi');
  socket.emit('newMoveOne',id);
};

window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
       
  var coordinates = {'bx':beta, 'gy':gamma, 'az':alpha}

    // send data over the socket
    socket.emit('accelerationOne',coordinates); 
}       


