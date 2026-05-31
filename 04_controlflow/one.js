//
// const userLoggedIn = true 
// const temperature = 50
// if(temperature < 60){
// console.log("less than 60");
// } else {
// console.log("greater than 50");
// }

// <, >, <=, >=, == , != , ===, !==(negative sign checking )

const score = 200
 
 if (score > 100) {
    let power = "fly"
     console.log(`User power: ${power}`);
 }
 
//  console.log(`User power: ${power}`);

 // const balance = 1000
 
 // if (balance > 500) console.log("test"),console.log("test2");
 
 // if (balance < 500) {
 //     console.log("less than 500");
 // } else if (balance < 750) {
 //     console.log("less than 750");
     
 // } else if (balance < 900) {
 //     console.log("less than 750");
     
 // } else {
 //     console.log("less than 1200");
 
 // }


 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true
 
 if (userLoggedIn && debitCard && 2==3) {
     console.log("Allow to buy course");
 }
 
 if (loggedInFromGoogle || loggedInFromEmail) {
     console.log("User logged in");
 }
