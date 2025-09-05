//fetch - An external API given by browsers to make API calls

// async function getAllUsers(){
//     try {
//         let response= await fetch ('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json') //get req is async thats why we make it await
//         const data=await response.json()    //this process takes time as this is async operation  so we have to await this
//         console.log(data);
//     } catch (error) {
//         console.log("Err: ",error);
        
//     }
    
// }
// getAllUsers()

// above code using .then .catach -> thenable/mutiple then()s

fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log("Err: ",err);
    
})