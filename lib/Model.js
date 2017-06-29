// ## Model

// Will require the `Data Store` module, and assign it's `store` property to a temporary variable.

// Define a constructor that accepts a singl argument `schema` and assign it's value to a public property named `schema`.

var db = require('./DataStore.js').store;

function Model (schema){
  console.log('this is getting invoked');
  this.schema = schema;
  this.id = null;

  for (var key in schema){
    this[key] = schema[key];
    //is this set to null?
  }

  // console.log('this constructor Bob ' , this.constructor.name);

  // console.log('has own property does it?' , db.hasOwnProperty(this.constructor.name));

  if (!db.hasOwnProperty(this.constructor.name)){
    db[this.constructor.name] = ['set to empty'];
  } 

  // console.log(db[this.constructor]);

}

Model.prototype.save = function(){
  this.id = db[this.constructor.name].id++;
};

Model.prototype.destroy = function(){
  db[this.constructor.name] = [];
  //if 'it' has an id set
};

Model.getDB = function (){
  return db;
};

//static methods?

Model.prototype.getNextId = function(){
  return db[this.constructor.name].id++;
};

module.exports = Model;

// should have a method named `getNextId` that returns the next successive number in the datastore for this model, the highest `id` plus one. `getNextId` should also return the highest `id` of a single collection in the data store plus one.

// should have a method named `find` that accepts a single argument `id` that returns the stored data object in the datastore for this model, having the same `id` value passed in from the `find` argument

// should have a method named `extend` that accepts a single argument `klass`, and extends each static and prototype method of `Model` onto `klass`

// should have a method named `save` that sets it's `id` to the next id in this model's datastore, if this object's `id` is null, and push the new instance that is being saved to the data store collection by the name of the extended modal.

// should have a method named `destroy` that removes the stored data object from the datastore for this model, if it has an `id` set.


