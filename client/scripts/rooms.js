var Rooms = {
  add: function() {
    let newRoom = prompt('Please enter a new room name.');
    RoomsView.renderRoom(newRoom);
  }

};