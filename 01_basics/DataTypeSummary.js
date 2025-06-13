// Primitive datatype (call by value if data is copied then original value is not copied)
// 7 Types : String ,Number,Boolean,null,undefined,symbol,BigInt

// reference type(non primitive : refernce is allocated directly)
// Array,Objects,Functions

// javaScript is dynamically typed language, meaning that the type of a variable is determined at runtime based on the value assigned to it. Unlike statically typed languages, where variable types are explicitly declared and cannot change, JavaScript allows variables to hold values of different types during execution.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);

let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
console.log(person.name); // Output: "John"
person.greet(); // Output: "Hello, John"

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));


// stack and heap memory
// Stack : used for primitive and Heap memory is used for non primitive
// we get copy of variable declared in stack but we get refernce of original value of variable declared i/n heap


// stack example
let youtubeChannel = "padmaja"
let anotherName = youtubeChannel
console.log(youtubeChannel)
console.log(anotherName)

// heap example
let user={
  email :"padmaja.sharma0073@gmail.com",
  password : "Padma@8986"
}

let userTwo = user
userTwo.email ="MohitThakre8686@gmail.com"

console.log(user)
console.log(userTwo)