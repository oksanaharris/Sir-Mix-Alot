// ## Model

// Will require the `Data Store` module, and assign it's `store` property to a temporary variable.

// Define a constructor that accepts a singl argument `schema` and assign it's value to a public property named `schema`.

var db = require('./DataStore.js').store;

function Model (schema){
  this.schema = schema;
  this.id = null;

  for (var key in schema){
    this[key] = schema[key];
  }

  if (!db.hasOwnProperty(this.constructor.name)){
    db[this.constructor.name] = [];
  } 
}

//prototype - save & destroy methods

Model.prototype.save = function(){
  if (!this.id){
    var nextId = this.constructor.getNextId();
    this.id = nextId;
  }
  db[this.constructor.name].push(this);
};

Model.prototype.destroy = function(){
  if (this.id){
    var storedObj = db[this.constructor.name];
    for (var i = 0; i < storedObj.length; i++){
      if (storedObj[i].id === this.id){
        storedObj.splice(i,1);
      }
    }
  } else {
    return null;
  }
};

//static methods - getNextId, find & extend
Model.getNextId = function(){
  var itsArray = db[this.name];
  var nextIndex = itsArray.length + 1; 
  return nextIndex;
};

Model.find = function(id){
  var found = true;
  for (var i = 0; i < db[this.name].length; i++){
    if (db[this.name][i].id === id){
      found = true;
      return db[this.name][i];
    } else {
      found = false;
    }
  }
  if (found === false){
    return null;
  }
};

Model.extend = function(klass){
  klass.prototype = Object.create(Model.prototype);
  for (var key in Model){
    if (Model.hasOwnProperty(key)){
      klass[key] = Model[key];
    }
  }
};

module.exports = Model;

// should have a method named `getNextId` that returns the next successive number in the datastore for this model, the highest `id` plus one. `getNextId` should also return the highest `id` of a single collection in the data store plus one.

// should have a method named `find` that accepts a single argument `id` that returns the stored data object in the datastore for this model, having the same `id` value passed in from the `find` argument

// should have a method named `extend` that accepts a single argument `klass`, and extends each static and prototype method of `Model` onto `klass`

// should have a method named `save` that sets it's `id` to the next id in this model's datastore, if this object's `id` is null, and push the new instance that is being saved to the data store collection by the name of the extended modal.

// should have a method named `destroy` that removes the stored data object from the datastore for this model, if it has an `id` set.


