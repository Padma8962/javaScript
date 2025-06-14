//two ways to declare object one as constructor and another as literal
//object literal k tarah declare krte hai toh singleton nhi banata hai

//interview question ek symbol lo usko object ki keys m add karo aur print karwa do
const mySym = Symbol("key1")
//object literal
const jsUser = {
    name : "padmaja",
    age : 23,
    [mySym] : "Symbol",
    location : "rajgarh",
    isLoggedin : true,
    loggedinDays : ["Monday","Thrusday"]
} //emptyObject

jsUser.greeting = function(){
    console.log("hello")
}
console.log(jsUser.greeting())
//update krne k liye values ko overwrite kr sakte hai
Object.freeze(jsUser) //ab update nhi kr sakte values ko
console.log(jsUser.name) //not a good practice
console.log(jsUser["name"])
console.log(jsUser[mySym])



//object constructor
Object.create