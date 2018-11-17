var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <a href=""><%- username %></a>
        </div>
        <div><%- text %></div>
      </div>
    `)

};