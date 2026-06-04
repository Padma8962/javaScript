"use strict" // treat all JS code as newer version of js

// alert(3+3) //we are using node.js ,not browser only available in browser
// code readablity should be high
// ECMA is a documentation for javascript
// ; only for readiblity and it is good practice
let name ="padmaja"
let age = 23
let isLoggedin = true

// Primitive Datatype(Stack Memory)
// Number (range = 2^53)(int n decimal value)
// BigInt (scientific values)
// Boolean
// String (can be written bw '' or"")
// null = standAlone
// undefined(declaration hai pr defination nhi hai)
// Symbol=unique(gives uniqueness)

const id=   Symbol("123")
const anotherId = Symbol("123")
console.log(id);
console.log(anotherId);
console.log(id == anotherId)

// Reference Datatype(heap Memory ie memory can be used using reference)
// Array
// Object
// Function
const clg = ["kvs" ,"iehe" ,"iiit"];
let myObj = {
    name:"Padmaja",
    age :24,
    currently :"iiit"
}
const myFunction = function(){
    console.log("Hello World");
}

           
// JavaScript is a dynamically typed language.
// This means you do not need to declare the data type of a variable.

console.log(typeof(name))
console.log(typeof(undefined))
console.log(typeof(null))

