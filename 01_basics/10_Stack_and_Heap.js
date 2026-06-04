// stack memeory for primitive
let userName = "Padmaja";
let anotherUser = userName;
anotherUser = "Mohit";

console.log(userName);
console.log(anotherUser);
// not affect userName 

// heap memory for object ,array and functions
let userOne ={
    name :"Padmaja Sharma",
    subscribe : "chai aur code",
    age : 24
}

let userTwo = userOne;
userTwo.name = "Ashutosh Sharma"

console.log(userOne.name);
console.log(userTwo.name);
// affect both user as the value is passed by refernce let userTwo = userOne; here