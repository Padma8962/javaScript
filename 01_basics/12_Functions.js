// definition
function sayMyName(){
    console.log("padmaja");
}
 
// execution
sayMyName()

// function addTwoNo(number1 ,number2){ //parameters
//     console.log(number1+number2);
// }
// const result = addTwoNo(3+7) //arguments
// console.log(result);

function addTwoNo(number1 ,number2){ //parameters
    let result = number1+number2
    return result
}

console.log("Result :",addTwoNo(3,4));

function loginUserMessage(username){
    if(username == undefined){ //or write !username
        console.log("Please enter a username")
        return //return ko hat kr result kuch aur aayega ek baar dekhna
    }
    return `${username} just logged in`
}

const msg = loginUserMessage();
console.log(msg)

function calculateCart(...num1){ //... is spread operator as well as rest operator(passing multiple values in a function) depending upon usage
    return num1;
}

console.log(calculateCart(200 ,400 ,500))

function calculateCartPrice(val1 ,val2 ,...num1){ 
    return num1;
}

console.log(calculateCartPrice(200 ,400 ,500 ,600 ,700))

const user ={
    username: "padmaja",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username :"Ashutosh",
    price : 399
})