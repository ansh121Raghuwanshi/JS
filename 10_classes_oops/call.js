
/*
function(){
call(){
}

}
function ke ander er or func to ander wala excute hoga or uske ander ke variable gayab ho gaye 

to iske liye .call ka use karenge reference hold karna padega n variable ka tabhi to outer func me use kr payenge 
.call lagane se bas nhi chalega setUserName.call(username) 
setUserName.call(this,username) this bhi use krna padega 
*/



function setUserName(username){
    // complex db calls 
this.username=username
}

function createUser(username,email,password){
   // setUserName(username) // yaha reference huya h , call hi nhi paranthenes se lag raha hoga call ho raha but nhi ho raha 
   setUserName.call(this,username) 
   
   this.email=email
    this.password=password
}

const chai = new createUser("chai","chai@ex","123")
console.log(chai);// output--> createUser { email: 'chai@ex', password: '123' }  username set hi nhi huya