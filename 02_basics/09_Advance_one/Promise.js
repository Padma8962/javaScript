// The Promise Object represent the eventual completion or failure of an asynchronous operation and its resulting value
// const PromiseOne = new Promise()
// new keyword gives instance 
// the above code creates a promise
const PromiseOne = new Promise(function(resolve,reject){ //resolve and reject are callback functions
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() //resolve() is called when the async task is completed successfully 
    },1000)
})
// resolve has a relation with then() method and reject has a relation with catch() method
PromiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn resolved')
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve k ander object pass kar sakte hai
        resolve({username :"Chai",email:"chai@example.com"})
    },1000)
}).then(function(user){
    console.group(user)
}) //then is used to handle the resolved value of the promise

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Padmaja",password:"123"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})
PromiseFour.then(function(user){
    console.log(user)
    return user.username //returning the username to the next then() method
}).then((username)=>{  //chaining the then() method to handle the returned value from the previous then() method
    console.log(username)
}).catch(function(error){ //catch bhi likhna padega kyuki agar promise reject ho jata hai to catch() method handle karega
    console.log(error)
}).finally(function(){ //finally() method is used to execute code after the promise is settled (either resolved or rejected)
    console.log("The promise is either resolved or rejected")
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript",password:"123"})
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)
});
//prosime consume karne ke liye async await ka use karenge
// async is used to declare a function as asynchronous and await is used to wait for the promise to resolve or reject
async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    
}
consumePromiseFive()


// Promise.all() method takes an iterable of promises as input and returns a single Promise that resolves to an array of the results of the input promises. The returned promise will resolve when all of the input promises have resolved, or it will reject if any of the input promises reject.
// A Promise represents a value that may be available now, later, or never.
// An async function always returns a Promise.
// await can only be used inside an async function.It pauses the execution of that function until the Promise settles.

// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //agr await nhi likhte toh promise pending m chala jata
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }
// getAllusers()

// alternative
// fetch function/API is used to make network requests and it returns a Promise that resolves to the Response object representing the response to the request. The Response object has a json() method that returns a Promise that resolves to the result of parsing the response body text as JSON.
// fetch() promise does not reject on http error(like 404) instead a then() handler must check Response.ok or Response.status properties
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
}); //is data phle print ho raha hai pr esa kyun?
// fetch k liye ek alg queue rehti hai jo ki priority queue hoti hai aur ye queue event loop ke sath kaam karti hai. jab bhi fetch() call hota hai to ye ek promise return karta hai jo ki pending state me rehta hai jab tak ki response nahi milta. jab response milta hai to ye promise resolve ho jata hai aur then() method call hota hai. isliye data phle print ho raha hai. 
const header = {
    'Content-Type' : 'text/xml',
    'Breaking-Bad' : '<3',
};
fetch("https://jsonplaceholder.typicode.com/users" ,{header});