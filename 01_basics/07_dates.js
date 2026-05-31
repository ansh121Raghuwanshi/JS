// dates 
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedate= new Date(2025,0,24)
// console.log(myCreatedate.toDateString());


// let myCreatedate2= new Date(2025,0,18,5,3)
// console.log(myCreatedate2.toLocaleString());

// let myCreatedate2= new Date("2023-01-14")   // dd-mm-yy me month 1 se chalu hoga or single me 0 se chalu hoga.

// console.log(myCreatedate2.toLocaleString());
let myCreatedate2= new Date("01-04-2025")
// console.log(myCreatedate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedate2.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default' , {
    weekday: "long",
    
})



