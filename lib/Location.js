
var model = require('./Model.js');
var user = require('./User.js');

var LocationSchema = {
  lng: 'Number',
  lat: 'Numer'
};

function Location(){
  model.call(this, LocationSchema);
}

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `Location`.

// var loc = new Location();

module.exports = Location;

// ## Location

// Will require the `Model` module, and assign it to a temporary variable.

// Will declare a new variable named `LocationSchema` and assign it's value to a literal object with the following keys and values

// `lng` = `Number`
// `lat` = `Number`

// The constructor will `call` the `Model` constructor method using `this` as it's context, and `LocationSchema` as it's only argument.

// After the class constructor, invoke the `Model.extend` static method passing in a single argument `Location`.

// export the `Location` class definition as a module.