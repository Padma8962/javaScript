// ["" , " " ,"" ,""]
// [{} , {} , {} , {}]

// for of
const arr = [1, 2, 3, 4, 5]
for(const i of arr){
    console.log(i);
}

const greetings = "Hello World"
for(const ch of greetings){
    console.log(`Each char is ${ch}`);
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA' , "United state of America")
map.set('Fr' ,"France")

console.log(map)

for(const [key , value] of map){
    console.log(key, ':-' ,value)
}

// objects are not iteratable like maps

// for in
const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'Ruby' ,
    swift : 'swift by apple'
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// does for in loop works on array
const programming = ['java' , 'c++' ,'c' ,'ruby']
for(const key in programming){
    console.log(programming[key] ," value at", key)
    
}

for (const key in map) {
    console.log(key)
} //no output beacuse map is not iteratable


// forEach
const coding = ['js' ,'ruby' ,'java' ,'python' ,'cpp']
coding.forEach( function (item) {
    console.log(item)
}) //forEach k ander callback function likhte hai and call back function ka naam nhi hota hai
//++++++++++++++OR++++++++++++++
coding.forEach( (item) =>{
    console.log(item)
} )

// +++++++++++++++OR+++++++++++++
function printMe(item){
    console.log(item)
}

coding.forEach(printMe)


coding.forEach((item, index ,arr) =>{
    console.log(item ,index ,arr)
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : ".js"
    },
    {
        languageName : "Java",
        languageFileName : ".java"
    },
    {
        languageName : "C++",
        languageFileName : ".cpp"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName)
})
