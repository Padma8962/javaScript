let name = "padmaja"
 console.log(typeof(Number(name)))

 let name2 =Number("padmaja") 
 console.log(name2) //not a number

 let score = true
 console.log(Number(score)) // 0=>false && 1=>true

 let isLoggedin = 1
 console.log(Boolean(isLoggedin))

 let num = String(33)
 console.log(num)
 console.log(typeof(num))

 console.log("1"+2+2) //122
 console.log(1+2+"2") //32

 //neat code ,not confusing code, readable code
 let n = 100
 n++
console.log(n)

let a = 100
++a
console.log(a)

let b = 100
b--
console.log(b)

let x =100
--x
console.log(x)

// for conversion datatype should be same to get correct result
// typescript allow nhi krta hai different datatype ka comparision
// equallity and comparision works differently in comparision null is treated as zero
console.log(null>0)
console.log(null==0)
console.log(null>=0)

// === strict check it checks value as well as its datatype
console.log("2" == 2)