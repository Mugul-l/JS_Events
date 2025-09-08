 
function createUser(name,score){
    this.name=name;
    this.score=score;
}

createUser.prototype.IncreseScore=function() {
    this.score++;
}

createUser.prototype.PrintMe=function(){
    console.log(`The score is ${this.score}`);
    
}

const User1= new createUser("Smruti",20);
const User2= new createUser("Akhil",90);

 User1.PrintMe()
 User2.PrintMe()

 /* 
 Here what happens behind the scene when the new keyword is used:

 A new object is created: the new keyword initiates the creation of a new JS object.

 A prototype is linked: the newly createdc object gets linked to the prototype property of the constructor function ,
  this means that it has access to properties and methods defined on the constructors prototype.

 The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
 If no explicit value is specified from the constructor,JS assumes this,the newly created object to be the inteneded return value.

 The new object is returned: after the constructor function has been called , it does not return a non-premitive value(object,array,function etc) 
 the newly created object is returned.

 So in short:
 new keyword = make object + link prototype + run constructor + return object.
 */