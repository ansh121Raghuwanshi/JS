 const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("asyn task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    // console.log("promise comsumed");
    
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("asyn task two");
        resolve()
        
    },1000)

}).then(function(){

    // console.log("asyn two resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username:"chai", email :"chai@example.com"})
     },1000)
})
promiseThree.then(function(user){
// console.log(user);

})
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "ansh", password:"123"})

        } else {
            reject('ERROR: something went wrong')
        }
    })
})
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username // username niche jayega .then ki chaining karenge or error bhi h to catch() bhi use karenge 
})
.then((username)=>{   
console.log(username);

})
.catch(function(error){  // error handle krne ke liye
console.log(error);

}).finally(()=> console.log("the promise is either resolved or rejected")) // hamesha execute hoga , bata do jo kaam hona tha resolve ya reject ho gaya kya 

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript", password:"123"})

        } else {
            reject('ERROR: js went wrong')
        }
    })
})

async function consumePromiseFive(params) { // params ek optional para,meter h pass kr skate ho nhi bhi likhoge to chalega 
     try {
        const response = await promiseFive
     console.log(response)  
}
      catch (error) {
        console.log(error);
        
     }
    }
consumePromiseFive()

async function getAllUsers(){
        try {
           /*  step 1. fetch()
               step2. await fetch()
               usko ek variable me hold kranege response me 
               then response.json() , value string me aayegi usko json me krne ke liye 
               then data ko print kr lenge 
               sahi code h chalenge me time lagega kyuki fetch time leta h
                     const data =  response.json()  isko convert hone me time lagega to isko bhi await krana padega to shi chalega code ab
                           const data = await response.json()

               yadi ham console.log(response) phele print kra rahe h to data aa raha h
           
           */
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            // console.log(response)
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    //getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


/*

fetch('https://api.github.com/users/hiteshchoudhary') iska response .then () me jata h fir next .then() me phele wala then ka
.then()
.catch()

.then(data ) yaha data aayega  response.json()
.then(data) console.log karwayenge
.catch(error) error handle karenge 



fetch('https://api.github.com/users/hiteshchoudhary)
iska data sabse phele output me aa raha h aase kese huya 
jabki ye to last me likha h 
or uper jitne bhi setTimeout h vo to ek second ka h to fir uska output last me kyu aa raha h 
??????
microtask me jata h fetch () 
macrotask me jata h setTimeOut phir call back queue me push hoga , aur tab chalega jab call stack empty ho




*/