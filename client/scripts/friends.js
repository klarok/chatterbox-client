var Friends = {
  list: {},
  toggleStatus: function(event) {
    let username = event.data;
    if (Friends.list.hasOwnProperty(username)) {
      Friends.list[username] = !Friends.list[username];
    } else {
      Friends.list[username] = true;
    }
  }

};