const user=
{
    name:"Smruti"
}

const Teacher={
    makeVdo:true,
    getUser:function()
    {
        console.log(`My user anme is : ${this.name}`);
        
    }
}


const TecahingSupport={
    isAvailable:false,
    __proto__: Teacher  //Now TeachingSupport can access the Teachar Object
}

//Teacher.__proto__ = user //Teacher can access all the properties of User

//Modern Syntax of prototype

Object.setPrototypeOf(Teacher,user)

Teacher.getUser()  //My user anme is : Smruti 


//----------------------------------------------------------------------
//Prototype with Strings

const UserName= "SmrutiPragyan   ";

String.prototype.TrueLength=function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

UserName.TrueLength()
"Anshuman".TrueLength()
"Banaras".TrueLength()
