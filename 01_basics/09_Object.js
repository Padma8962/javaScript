//two ways to declare object one as constructor and another as literal
//object literal k tarah declare krte hai toh singleton nhi banata hai

//interview question ek symbol lo usko object ki keys m add karo aur print karwa do
const mySym = Symbol("key1")
//object literal
const jsUser = {
    name : "padmaja",
    age : 23,
    [mySym] : "Symbol", //mySym : "Symbol" ese nhi use kr sakte hai
    location : "rajgarh",
    isLoggedin : true,
    loggedinDays : ["Monday","Thrusday"]
} //emptyObject

jsUser.greeting = function(){
    console.log("hello")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo())
console.log(jsUser.greeting())
//update krne k liye values ko overwrite kr sakte hai
Object.freeze(jsUser) //ab update nhi kr sakte values ko
console.log(jsUser.name) //not a good practice
console.log(jsUser["name"]) //good practice
console.log(jsUser[mySym])



//object constructor
Object.create
const tinderUser = new Object();
// const tinderUser = {

// }  same as the above object

tinderUser.id="123456"
tinderUser.name ="Padmaja"
tinderUser.isLoggedin=false

console.log(tinderUser);

const regularUser ={
    email : "Padmaja.sharma0073@gmail.com",
    fullname:{
        userfullname:{
            firstname :"Padmaja",
            lastname : "Sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a" ,2:"b"};
const obj2 = {3:"c" ,4:"d"};

console.log({obj1,obj2});
const obj3 = Object.assign({} ,obj1 ,obj2) //concatenate two objects inside {}
// ...obj1 using . we are spreading elements of object

// const obj3 ={...obj1 , ...obj2}
// console.log(obj3)

// values from database
const users =[
    {
        id: "1",
        email:"Rajesh.sharma0073@gmail.com"
    },
    {
        id: "2",
        email:"Sarika.sharma0073@gmail.com"
    },
    {
        id: "3",
        email:"Padmaja.sharma0073@gmail.com"
    },
    {
        id: "4",
        email:"AshuTosh.sharma0073@gmail.com"
    }
]

console.log(users[1].email); //Output : Rajesh.sharma0073@gmail.com

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.llog(tinderUser.hasOwnProperty('isLogged'));

