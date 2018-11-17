var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click(function() {
      Rooms.add();
    });
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
    let room = RoomsView.view({ name: roomName });
    this.$select.append(room);
  },
  
  view: _.template(`
    <option value="<%- name %>"><%- name %></option>
    `)

};