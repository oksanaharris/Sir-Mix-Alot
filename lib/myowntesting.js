var db = require('../lib/DataStore.js').store;
var User = require('../lib/User.js');
var Account = require('../lib/Account.js');
var Model = require('../lib/Model.js');
var Message = require('../lib/Message.js');
var Location = require('../lib/Location.js');

// console.log('creating a new user named Bob');
// var Bob = new User();

// // console.log(Bob);

// // console.log(db);
// console.log('saving Bob using Bob.save');
// Bob.save();

// console.log('again ' , db);

// console.log('creating a new user named Stacy');
// var Stacy = new User();



// // console.log('third time ', db);

// // Stacy.id = 2;

// console.log('setting Stacy\'s user name and password');
// Stacy.username = 'Stacy';
// Stacy.password = 'Hello';

// console.log('saving Stacy');
// Stacy.save();

// console.log('fourth time ', db);



// need to check how it gets handled when there is no id
// save assigns the same id - doesn't work, needs to be fixed

// console.log('stacy getting her own id ' , Stacy.getNextId());

// but User getNextId works after the first... lets try after second - works - produces the next number even though both ids are set to strng '1' - returns 3

// console.log('user getting next id ' , User.getNextId());

// console.log('setting Stacy\'s id to 2');
// Stacy.id = 2; 

// console.log('printing db ', db);

// console.log('finding user with id 1 ' , User.find(1));

// console.log('finding user with id 2 ' , User.find(2));

// console.log('finding user with id 3 ' , User.find(3));

// need to put 'String' and 'String' into the schema

      var m1 = new Model();
      m1.a = 'A1';
      m1.save();

      var m2 = new Model();
      m2.a = 'A2';
      m2.save();

      console.log('finding Model 1 ' , Model.find(1));
      console.log('finding Model 2 ' , Model.find(2));

      console.log('here is what m2 looks like ', m2);
      //when a new id is not passed in, it gives it an id of 1, which is wrong.
      
      console.log('destroying m1 ', m1.destroy());

      console.log('finding Model 1 ' , Model.find(1));
      console.log('here is what m2 looks like ', m2);

      console.log('finding Model 2 ' , Model.find(2));

// console.log('destroying Bob');
// Bob.destroy();

console.log('printing db ', db);