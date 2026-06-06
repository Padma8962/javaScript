// {} with functions or if else is called scope

// let a =10
// const b =20
// var c =30

var c = 300
if(true){
    let a =10
    const b =20
    var c =30
}

// console.log(a)
// console.log(b)
console.log(c)

// therfore we avoid var
// scope k baar jo bhi value likhte hai vo scope k ander available hoti hai pr scope k ander jo bhi value likhte hai vo scope k bahar available nhi hoti hai
// difference between var and let

// nested scope
function one(){
    const username = "padma"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)//not accessable
    two() //function call
}
one()

// ++++++++++++++++++++++interesting+++++++++++++++

function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){  //functions in the form of expression
    return num+2
}
addTwo(2)

// differnce between both is that fucntion can be call above or below fuction defination of that function but expression of a function can be call only after its declaration

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrow function () => {} and this keyword

const user ={
    username :"Padmaja",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)   //in node environment this will refer to empty objects

const chai = function(){
    let username = "padmaja"
    console.log(this.username)
}

console.log(chai)

const tea = () =>{
    let username = "Ashu"
    console.log(this.username)
}

tea()
// differnce between arrow function and normal function

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

const addThree =(num1,num2) => (num1+num2) //{} use karenge toh return likhna padega pr () use karenge toh return nhi likhna padega

const returnObject = (no) =>({username:"Padmaja"}) //object ko () iske ander likhna padhta hai
console.log(returnObject(1))