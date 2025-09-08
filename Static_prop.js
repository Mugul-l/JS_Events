class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        return `My name is ${this.username}`
    }

    static createId(){      // can not be accessed by child classes as static
        return `The id is 123`
    }
}

const Smruti= new User("SmrutipragyanBiswal")

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }


}

const Teacher1=new Teacher("Babun","banum@gmail.com")
console.log(Teacher1.createId());
