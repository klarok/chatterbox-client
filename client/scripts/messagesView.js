var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    let chat = MessageView.render(message);
    this.$chats.append(chat);
  }

};