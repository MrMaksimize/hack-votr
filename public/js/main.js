$(document).ready(function() {
  var socket = io.connect();
  socket.on('connect', function() {
    console.log("Connected, lets sign-up for updates about votes for this event");
    socket.emit('event', 'event_2');
  });

  socket.on('vote', function(data) {
    console.log(data);
  });
});
