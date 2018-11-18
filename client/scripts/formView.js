var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // on submit click, call render message on text
    let message = {username: App.username, text: $('form input#message').val(), roomname: Rooms.currentRoom};
    Parse.create(message, (data) => {
      _.extend(message, data);
      Messages.add(message);
      MessagesView.renderOne(message);
    });
    // console.log('click!');
    // console.log(submitted);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};