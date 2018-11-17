var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click(function() {
      Rooms.add();
    });
    
    this.$select.change(function() {
      Rooms.enterRoom($(this).val());
    });
    
    Rooms.currentRoom = 'Alw3ujdoiasjdao9uwrjaosjdosijdol';
    this.renderRoom(Rooms.currentRoom);
  },

  render: function(results) {
    let list = {};
    for (var i = 0; i < results.length; i++) {
      if (!list.hasOwnProperty([results[i].roomname])) {
        this.renderRoom(results[i].roomname);
        list[results[i].roomname] = true;
      }
    }
  },
  
  renderRoom: function(roomName) {
    let room = RoomsView.roomOption({ name: roomName });
    this.$select.append(room);
  },
  
  roomOption: _.template(`
    <option value="<%- name %>"><%- name %></option>
    `)

};