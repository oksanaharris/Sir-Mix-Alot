
var model = require('./Model.js');
var user = require('./User.js');
//can these be the same var names as on other files?

var MessageSchema = {
  from: 'User',
  to: 'User',
  message: 'String',
  sent: 'Date'
};

function Message (){
  model.call(this, MessageSchema);
}

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `Message`.

// var Hey = new Message();


module.exports = Message;

// ## Message

// Will require the `Model` module, and assign it to a temporary variable.
// Will require the `User` module, and assign it to a temporary variable.

// Will declare a new variable named `MessageSchema` and assign it's value to a literal object with the following keys and values

// `from` = `User`
// `to` = `User`
// `message` = `String`
// `sent` = `Date`

// The constructor will `call` the `Model` constructor method using `this` as it's context, and `MessageSchema` as it's only argument.

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `Message`.

// export the `Message` class definition as a module.