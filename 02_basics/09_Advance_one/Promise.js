// The Promise Object represent the eventual completion or failure of an asynchronous operation and its resulting value
// const PromiseOne = new Promise()
//  //new keyword gives instance 
// the above code creates a promise
const PromiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
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
        resolve({username :"Chai",email:"chai@example.com"})
    },1000)
}).then(function(user){
    console.group(user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
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
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
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


