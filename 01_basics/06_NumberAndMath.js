const score = 400
console.log(score)

// new keyword is used to create objects of specific datatype
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 1000
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000000000
console.log(hundreds.toLocaleString('en-IN'))
// MAX_VALUE,MIN_VALUE


// ++++++++++++Math++++++++++++

console.log(Math)
// .pi,abs,ceil,floor,round,max,min,random between 0 and 1,

const min = 10
const max= 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
// max-min range m laane k liye
// +1 zero ko include nhi krne k liye
// +min to get min value as 10
