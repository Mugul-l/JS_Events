//The call() method is a built-in function method in JavaScript that allows you to invoke a function immediately 
// while explicitly setting the value of this and passing arguments one by one.


function sayHello() {
    console.log("Hello, my name is " + this.name);
}

let person1 = { name: "Smruti" };
let person2 = { name: "Pragyan" };

//sayHello(); // "this" is not set → prints "Hello, my name is undefined"

// sayHello.call(person1); // Hello, my name is Smruti
// sayHello.call(person2); // Hello, my name is Pragyan

//------------------------------------------------------------

function greet(age, city) {
    console.log("Hello, my name is " + this.name + 
                ", I am " + age + " years old " + 
                "and I live in " + city);
}

let person = { name: "Smruti" };

//greet.call(person, 25, "Bhubaneswar");
// Hello, my name is Smruti, I am 25 years old and I live in Bhubaneswar

//------------------------------------------------------

function setUserName(UserName){
    this.UserName=UserName;
    console.log("called");
    
}

function createUser(name,email,password){

    setUserName.call(this, name)   //Run setUserName, but pretend its this is the same as the current this inside createUser.
    this.email=email;
    this.password=password;
}

const User1= new createUser("Smruti","smruti@gmail.com","12345");
console.log(User1);
