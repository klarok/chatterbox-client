var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    let room = RoomsView.view({ name: roomName });
    this.$select.append(room);
  },
  
  view: _.template(`
    <option value="<%- name %>"><%- name %></option>
    `)

};