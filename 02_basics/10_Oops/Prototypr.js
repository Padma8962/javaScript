// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// injecting hitesh in all objects and heyHitesh in all arrays
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() //heroPower object hai toh vo array method ko access nahi kar sakta

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //linking TeachingSupport to TASupport using __proto__ property
}

Teacher.__proto__ = User //this is another method to link prototype

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //this is thrid method to link prototype

console.log(TASupport.isAvailable);
console.log(TASupport.makeVideo);
console.log(TASupport.name);

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()