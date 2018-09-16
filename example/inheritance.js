var Person = function (fullname) {
  console.log('The Person Instance');
  this.fullname = fullname;
};

Person.prototype.walk = function(){
	console.log('I am walking....');
}

Person.prototype.sayHellow = function(){
	console.log('Hello, I am '+ this.fullname);
}

var Student = function(fullname, subject){
	Person.call(this, fullname);
	console.log('The Student Instance...');
	this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 

Student.prototype.sayHellow = function(){
	console.log('Hi, I am '+ this.fullname + " I'm studying "+ this.subject);
}

Student.prototype.sayGoodBye = function()
{
	console.log('Goodbye...');
}

var student1 = new Student('Tarek Monjur', 'computer science and engineering');
student1.walk();
student1.sayHellow();
student1.sayGoodBye();

var sayWalk = student1.walk;

console.log(student1 instanceof Student);
console.log(sayWalk === Person.prototype.walk);


