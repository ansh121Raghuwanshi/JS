const score=400
//console.log(score);

const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber= 23.987
// console.log(otherNumber.toPrecision(3));

const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'));

//------------MATHS-----------//

/*  console.log(Math.abs(-4)); // negative convert to positive

console.log(Math.round(4.6)); // for round off the number
console.log(Math.ceil(4.6));// for round off top value
console.log(Math.floor(4.6));// for round off low value

console.log(Math.min(3,5,6,7,8));
console.log(Math.max(3,5,6,7,8)); */

console.log(Math.random()  ); // give value between 0 and 1

const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min +1)) + min );

// At 22:26  if min =10 and max=20 then the value (Math.floor(Math.random()*(max-min +1)) )  => ensure that it will give value in the range [0,10] ..You have said 1 is added to avoid 0 but basically 1 is added to increase the range upto (10) ..if we will not add 1 it will give value in the range [0,9] 


