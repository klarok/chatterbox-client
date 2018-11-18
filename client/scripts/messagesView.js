var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(results) {
    let storedMessages = Messages.items();
    this.$chats.empty();
    for (let i = 0; i < results.length; i++) {
      // if (!storedMessages[results[i].objectId]) {
      this.renderMessage(results[i]);
      //   Messages.add(results[i]);
      // }
    }
  },
  
  renderMessage: function(message) {
    if (message.username === undefined || message.text === undefined) {
      console.log('username or text does not exist');
      return;
    }
    
    let chat = MessageView.render(message);
    this.$chats.append(chat);
    //Check if in friends list; if true, add friend class
    // $('#chats div:last-child .username').click(message.username, Friends.toggleStatus);
    let $newestChat = $('#chats div:last-child .username');
    if (Friends.list.hasOwnProperty(message.username)) { $newestChat.addClass('friend'); }
    $newestChat.click(message.username, Friends.toggleStatus);
    //return chat;
  },
  
  renderOne: function(message) {
    if (message.username === undefined || message.text === undefined) {
      console.log('username or text does not exist');
      return;
    }
    
    let chat = MessageView.render(message);
    this.$chats.prepend(chat);
    //Check if in friends list; if true, add friend class
    // $('#chats div:last-child .username').click(message.username, Friends.toggleStatus);
    let $newestChat = $('#chats div:last-child .username');
    if (Friends.list.hasOwnProperty(message.username)) { $newestChat.addClass('friend'); }
    $newestChat.click(message.username, Friends.toggleStatus);
  }

};