var Friends = {
  list: {},
  toggleStatus: function(event) {
    let username = event.data;
    if (Friends.list.hasOwnProperty(username)) {
      Friends.list[username] = !Friends.list[username];
    } else {
      Friends.list[username] = true;
    }
    Friends.toggleFriendClass(username);
  },
  toggleFriendClass: function(username) {
    let sometimesFriend = $(`div.username:contains("${username}")`);//.css('color', 'blue');
    if (Friends.list[username]) {
      sometimesFriend.addClass('friend');
    } else {
      sometimesFriend.removeClass('friend');
    }
  }

};

    // if (Friends.list.hasOwnProperty(message.username)) {
    //   $('#chats div:last-child').css('font-weight', 'bold');
    // }