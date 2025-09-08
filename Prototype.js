// What is Prototype?

// In JavaScript, every function has a prototype property.which is either null or reference to another object.

// That prototype is used when creating objects with the new keyword.

// Every object in JavaScript has a hidden property called __proto__ (or [[Prototype]] internally), which points to the prototype of its constructor.

// This is the basis of prototypal inheritance.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
}
 

let p1 = new Person("Smruti", 25);
let p2 = new Person("Pragyan", 30);

// p1.sayHello();  // Hello, my name is Smruti
// p2.sayHello();  // Hello, my name is Pragyan

//-----------------------------------------------------------------------

const object= {
    name:"Smrtui",
    city:"Cuttack",
    getIntro:function(){
        console.log(`My name is ${this.name} and I am from ${this.city}`);
        
    }
}

let object2={
    name:"Shlzz",
    //city:"Hyderabad"
}

object2.__proto__=object;
object2.getIntro()  //My name is Shlzz and I am from Cuttack
//object2.getIntro()  //My name is Shlzz and I am from Hyderabad
