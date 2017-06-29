
var model = require('./Model.js');
var user = require('./User.js');

var AccountSchema = {
  user: 'User',
  accountNumber: 'Number',
  address: 'String',
  balance: 'Number'
};

function Account(){
  model.call(this, AccountSchema);
}

//prototype?
//inherit extends method

// var act = new Account ();

module.exports = Account;

// ## Account

// Will require the `Model` module, and assign it to a temporary variable.
// Will require the `User` module, and assign it to a temporary variable.

// Will declare a new variable named `AccountSchema` and assign it's value to a literal object with the following keys and values

// `user` = `User`
// `accountNumber` = `Number`
// `address` = `String`
// `balance` = `Number`

// The constructor will `call` the `Model` constructor method using `this` as it's context, and `AccountSchema` as it's only argument.

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `Account`.

// export the `Account` class definition as a module.