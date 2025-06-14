// date are calcuted from jan 1st,1970
// data is calculated in millisecond
const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof(myDate))


const CreateDate = new Date(2023,0,11)
console.log(CreateDate.toDateString())

let myTimeStamp =Date.now()
console.log(Math.floor(myTimeStamp/1000))
// to convert into second we divide it by 1000 but it may give decimal value so use math.floor()
// getMonth(),getDate()