const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second")
});
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third")
});


Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
    
})

//Promise.all() -> Waits for all promises to finish.
// Once all are done, it gives you an array of results (in the same order you listed them).
// If any one fails, the whole thing fails immediately