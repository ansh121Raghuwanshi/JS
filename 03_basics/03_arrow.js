// Normal Function: 
//  this dynamic hota hai aur depend karta hai ke function kis tarah call kiya gaya.

// Arrow Function:
 // this lexical hota hai aur function define hone wale scope ke this ko inherit karta hai.

 const  user = {
    username :"hitesh",
    price :999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); current context ki baat krta h 
        
        
    }
 }
//  user.welcomeMessage()
//  user.username="ansh"
//  user.welcomeMessage()

// console.log(this); current context empty {} , but in browser consloe log it is --- Window 


// function chai(){
//     let username="ansh"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = function(){
//     let username="ansh"
//     console.log(this.username); // undefined
// }
// chai()

const chai = () => {
    let username="ansh"
    console.log(this.username);
}
// chai()

() => {} // basic syntax
// const addTwo = (num1 , num2) => {
//     return num1 + num2  // exlpicit return 
// }

// const addTwo = (num1 , num2) =>  num1 + num2 // implicit return 
// const addTwo = (num1 , num2) => ( num1 + num2)  // curly braces use karenge to return likhna padega or paranthises uses karenge to nhi likhna padega. 

const addTwo = (num1 , num2) => ({ username:"ansh"}) // object aase return krte h 
console.log(addTwo(3,4));

const myArray =[2,3,4,5,6]
// myArray.forEach(function(){})
// myArray.forEach(() => () )   just example how to use syntax