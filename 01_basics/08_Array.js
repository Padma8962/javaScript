const myArr =[0,1,2,true,"padmaja"]
// collection of multiple item of different type
// array are resizeable ie we can inc or dec the size of array
// js array are zero indexed
// array element can be accessed using indexing
// array cpoy operation creates shallow copies(cpy the share the same reference point ie changes made in copy chnages the original array)

const arr = new Array(["padmaja","mohit"])
arr.push("Sarika")  //pop,unshift(shift index of elm by 1 and add new element at the start),shift(remove first element and shift back to the same place),includes,indexOf,isArray
console.log(arr)
// differnce between push and concate
    // push : The push method modifies the original array.
    //conacate :The concat method creates and returns a new array, leaving the original array unchanged.

let arr1 = [1, 2, 3];
arr1.push(4, 5); // Adds 4 and 5 to the end of the array
console.log(arr1); // Output: [1, 2, 3, 4, 5]


let arr2 = [1, 2, 3];
let newArr = arr2.concat([4, 5]); // Combines arr with [4, 5]
console.log(arr2);     // Output: [1, 2, 3] (original array remains unchanged)
console.log(newArr);  // Output: [1, 2, 3, 4, 5]


// join : add elements to a string values remain the same but the type changes from Array to string
//slice(a,b) :slice and give element of array  from a to b-1 index .keep the original array as its
//splice(a,b) : give element of array  from a to b index and removes the sliced element fron the original array

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const removedFruits = fruits.splice(2, 2); // Removes 2 elements starting at index 2
console.log(removedFruits); // Output: ['cherry', 'date']
console.log(fruits);        // Modified array: ['apple', 'banana', 'elderberry']

const anotherArray = [1,2,3,[4,5,6],[6,[7,8,9,10],11]]
const realAnotherArray = anotherArray.flat(Infinity) //.flat(depth);
console.log(realAnotherArray)

console.log(Array.from("padmaja"))
console.log(Array.from({name:"padmaja"})) //important for interview purpose



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

console.log(new Array(score1,score2,score3))