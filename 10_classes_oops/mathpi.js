 const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")  // object ki hidden cheezo ke bare me batati h
console.log(descriptor)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  ye value hard coded false h , usko true nhi kr sakte to value change nhi ho sakti

*/
// console.log(Math.PI)

const chai ={
    name:"ginger chai",
    price : 240,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }

}
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined kyuki property ka descriptor manga h chai ek object h 
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, "name", { // properties ko change kr sakte h defineProperty se
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}