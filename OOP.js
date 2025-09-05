const user={
    name:"Smruti",
    phone:5674567,
    age:24,
    gender:"Female",
    getUserDetails:function(){
        console.log("User details found...");
        console.log(`Thae name is ${this.name} and she is ${this.age} years old.`);
        
    }
}

console.log(user.name);
console.log(user.getUserDetails());

//constructor function--------
//A constructor function is a special function to create and initialize objects.
//It sets up the object’s initial state (properties/fields) when a new instance is created.

//whwile using new key word
//step 1- creates an empty object(instance)
//step 2- Calls contructcor function
//step 3- injects all the this (passon to the obj)
//step 4- extract from the function

function User(name,loginCount,IsLoggedIn){
    this.name=name;
    this.loginCount=loginCount;
    this.IsLoggedIn=IsLoggedIn;

    return this;
}

const response=new User("Smruti",10,true);
const response2=new User("Pragyan",15,false);
console.log(response,response2);
