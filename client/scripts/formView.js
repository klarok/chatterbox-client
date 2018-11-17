var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // on submit click, call render message on text
    let currUser = App.username;
    let message = $('form input#message').val();
    let room = Rooms.currentRoom;
    Parse.create({username: currUser, text: message, roomname: room});
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};