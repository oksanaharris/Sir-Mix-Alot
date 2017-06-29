
var model = require('./Model.js');

var UserSchema = {
  username: 'Bob',
  password: 'HiMom'
};

function User(){
  model.call(this, UserSchema);
}

User.prototype = Object.create(model.prototype);
User.prototype.constructor = User;
//it doesn't explicitely say to do that - it just talks about the extend method on the Model

// var Bob = new User();

//still need to inherit Model extend method 

module.exports = User;

// Will require the `Model` module, and assign it to a temporary variable.

// Will declare a new variable named `UserSchema` and assign it's value to a literal object with the following keys and values

// `username` = `String`
// `password` = `String`

// The constructor will `call` the `Model` constructor method using `this` as it's context, and `UserSchema` as it's only argument.

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `User`.

// export the `User` class definition as a module.