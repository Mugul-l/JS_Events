
/* 
class User{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;

    }

    encryptPassword(){
       return `The encrypted password is: ${this.password}ab2c0`;
        
    }

    nameInUpperCase(){
        return `The name is ${this.name.toUpperCase()}`
    }
}

const user1= new User("Smruti","xyz@gmail.com","smrutipragyan");
const result=user1.encryptPassword();
console.log(result);
console.log(user1.nameInUpperCase());

*/
// without classes

/*
function User(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
      return `The encrypted password is: ${this.password}ab2c0`;
}

User.prototype.nameInUpperCase=function(){
     return `The name is ${this.name.toUpperCase()}`
}

const userTwo=new User("Ansh","ansh@gmail.com","1234")
console.log(userTwo.encryptPassword());
console.log(userTwo.nameInUpperCase());

*/
//Inheritance

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        return `Username is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }

    addCourse(){
        console.log( `The couse is added ${this.username}`);
         
    }
}

const chai = new Teacher("Smruti","smru@gmail.com");
chai.addCourse()
