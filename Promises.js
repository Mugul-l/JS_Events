//A Promise in JavaScript is an object that represents the result of an asynchronous task that will finish in the future (either successfully or with an error).

// It has 3 states:

// Pending → still working
// Fulfilled → finished successfully (resolve)
// Rejected → failed (reject)

//  Think of it like ordering food in a restaurant:

// When you order → Pending (waiting for food)
// Food arrives → Fulfilled (success)
// Food not available → Rejected (error)

//Example code:
// let foodOrder = new Promise((resolve, reject) => {
//   let delivered = true;

//   setTimeout(() => {
//     if (delivered) {
//       resolve("Food delivered 🍔");
//     } else {
//       reject("Delivery failed 🚫");
//     }
//   }, 2000);
// });

// foodOrder
//   .then(msg => console.log(msg))   // if success
//   .catch(err => console.log(err))  // if error
//   .finally(() => console.log("Process finished 🎯"));
//----------------------------------------------------------------------------------------------------------------------

// const PromiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is a promise...");
//         resolve("Waiting...")
//         //reject("Something went wrong!");
//     },2000);
// })
// PromiseOne.then((msg)=>{
//     console.log(msg,"Resolved!!" );
    
// })
// .catch((err)=>{
//     console.log("Rejected!",err);
    
// })

//-------------------------------------------------------------------------------------------

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"SmrutiPragyan",Tittle:"Biswal"})
//     },1000)
// }).then((Fullname)=>{
//     console.log(Fullname);  //return the full object
    
// })

//---------------------------------------------------------------------------------------

//Multiple then() blocks

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve("The promise is resolved.");
        }
        else{
            reject("The promise is rejected.");
        }
    },1000)
}).then((msg)=>{
    console.log(msg);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
    console.log("The process is completed now.");
    
})