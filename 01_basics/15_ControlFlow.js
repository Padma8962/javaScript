// if
// if(condition){

// }
// else if(condition){

// }
// else{

// }



// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }


// truthy value : "0" ,'false' ,"" ,[] ,function(){}
// falsy value  : false, 0, -0, BigInt, "" , null ,undefined, NAN


const userEmail = ""
if(userEmail.length == 0){
    console.log("Array is Empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)

// Terniary Operator condition ? true : false