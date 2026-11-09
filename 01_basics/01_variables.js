const accountId=12345;
let accountEmail="ansh@gmail.com"
var accountPassword="3456";// prefer not to use because of block scope and function scope;
accountCity="jaipur"; // memory me space reserve without any let , const ye possible h but not to do bad thing
// console.log(accountEmail)
// console.log("hello")


// console.log(id)
let id;
id=1;
// console.log(id)

var a=10;
function num(){
    var a=30;
    if(true){
         a=20;
    }
    console.log(a);
}
num();
console.log(a);
// var has issue of block scope , if it is declared inside a if, or {} it is not limited to that scope . but it is functional scope , its range ended with that function;