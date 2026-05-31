function sayMyName(){
    console.log("8998");
}
// sayname - ye sirf refernce h
// sayMyName()
// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2); //
   
// }
// addTwoNumber()  not a numner(NaN) aayega output kyuki argument nhi diya

function addTwoNumbers(num1,num2){
       let result = num1 + num2
       return result

     }
 const result=addTwoNumbers(3,4)
//  console.log("result:",result);
function loginUserMessage(username){
    if(username=== undefined){
// console.log("please enter a username");
return
    }
    return `${username} just logged in `
}
// console.log( loginUserMessage("ansh"));
// console.log( loginUserMessage());

// function calculateCartPrice(...num1){  // ... rest operator
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));

function calculateCartPrice( val1,val2,val3,...num1){  // ... rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500,3000,40000)); array me add hota jayega baad me array me loop lagake add kr dunga

const user = {
    username:"ansh",
    price:199
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"ansh",
    price:123
})

const myNewArr=[200,400,500,600]
function returnSecondValue(getArr){
    return getArr[2]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,500,600]));

