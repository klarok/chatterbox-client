var Messages = {
  _data: {},
  
  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },
  
  add: function(message) {
    Messages._data[message.objectId] = message;
  },
  
  store: function(results) {
    for (let i = 0; i < results.length; i++) {
      Messages.add(results[i]);
    }
  }
  
};