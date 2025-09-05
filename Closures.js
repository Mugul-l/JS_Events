//A closure in JavaScript is the combination of a function and the lexical scope within which that function was declared.
//  This means that an inner function can "remember" and access the variables and parameters of its outer (enclosing) function, 
// even after the outer function has finished executing. 

function OuterFunc()
{
    let name="Smruti";
    function innerFunc(){
        console.log("My name is : ",name);
        
    }
    return innerFunc;
}

let inner = OuterFunc();
inner();        //Even though OuterFunc finished running, inner still remembers name because of lexical scope + closure.