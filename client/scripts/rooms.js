var Rooms = {
  currentRoom: undefined,
  
  add: function() {
    let newRoom = prompt('Please enter a new room name.');
    RoomsView.renderRoom(newRoom);
  },
  
  enterRoom: function(roomName) {
    Parse.readRoom(roomName, (data) => {
      MessagesView.render(data.results);
    });
  }

};