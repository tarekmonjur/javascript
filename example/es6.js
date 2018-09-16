class Animal{
    constructor(name){
        this.name = name;
    }

    toString(){
        return "The animal name is "+ this.name;
    }
}

class Dog extends Animal{
    constructor(name, owner){
        super(name);
        this.owner = owner;
    }

    toString(){
        return super.toString() + "<br> Dog is name "+ this.name + "<br> Owner is "+ this.owner;
    }
}


var dog = new Dog('Tiger', 'Max');

document.write(dog.toString());