let a=30

if(true){
    let a =10
    const b=20
    // console.log(a);
    
}

// console.log(a);
// console.log(b);



function one (){
    const username ="ansh"

    function two (){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}

// one()
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const wensite = " youtube "
        // console.log(username+wensite);
    
    }
// console.log(website);

}
// console.log(username);

//-------------interesting ----------/////
// addone(5) we can also write here , code work properly
function addone(num){    // syntax 1
return num +1
}
addone(5)


// addTwo(5) we cant write here because we hold the function in variable it will produce error. 
const addTwo = function(num){   // syntax 2
    return num +2
}
addTwo(5)
