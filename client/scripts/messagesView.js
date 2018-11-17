var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(results) {
    for (var i = 0; i < results.length; i++) {
      this.renderMessage(results[i]);
    }
  },
  
  renderMessage: function(message) {
    if (message.username === undefined || message.text === undefined) {
      console.log('username or text does not exist');
      return;
    }
    
    let chat = MessageView.render(message);
    this.$chats.append(chat);
    $('#chats div:last-child .username').click(message.username, Friends.toggleStatus);
    //return chat;
  }

};