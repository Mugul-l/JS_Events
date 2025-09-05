// The instanceof operator checks whether an object is an instance of a particular constructor function (or a class).
// It looks up the object’s prototype chain to see if it was created by (or inherits from) that constructor.

// Example with Constructor Function
function User(name) {
    this.name = name;
}

const user1 = new User("Smruti");

console.log(user1 instanceof User);     // true
console.log(user1 instanceof Object);   // true (because all objects inherit from Object)

//instanceof checks if an object was created by a constructor (or inherits from it).
// Works with both constructor functions and classes.
