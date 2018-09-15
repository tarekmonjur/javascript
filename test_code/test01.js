var Person = function (firstname, lastname) {
  console.log('The Person Instance');
  this.firstname = firstname;
  this.lastname = lastname;
};

Person.prototype.walk = function(){
	console.log('I am walking....');
}

Person.prototype.sayHellow = function(){
	console.log('Hello, I am '+ this.firstname + ' '+ this.lastname);
}

var person1 = new Person('Tarek', 'Monjur');
var person2 = new Person('Ashad', 'Hossian');
var hifunction = person1.sayHellow;

person1.sayHellow();
person2.sayHellow();

hifunction(); 

console.log(hifunction === person1.sayHellow);
console.log(hifunction === Person.prototype.sayHellow);

console.log(person1);

hifunction.call(person1);