 // for of 

//  ["","",""]
//  [{},{},{}]

const arr=[1,2,3,4,5]
for (const element of arr) {
// console.log(element);
}

const greetings = "hello world "
for (const greet of greetings) {
     //console.log(`Each char is ${greet}`)   
}

// Maps 

const map = new Map()
map.set('IN',"Imdia" )
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // do entry nhi hogi unique value store hogi


console.log(map);

for (const [key , value] of map) {  // we use [ key , value ] here to iterate 
    // console.log(key, ':-' , value);
    
}
const myObject ={
    'game 1' :'NFS',
    'game 2' :'Spiderman'

    // game 1 :'NFS', 
    // game 2 :'Spiderman'
}
// for (const [key , value] of myObject) {
//     console.log(key , ':-' , value ); ------- does not work 
    
// }




//------------------------------------//
/* 
1. for maps we use for-of loop 
2. for object we use for-in loop 
3. arrays me bhi for-in loop laga sakte h
4. maps is not iterable , for in loop kaam nhi karega but dusre tarike h 
5. yadi filter or map me curly braces laga rahe ho to {} return likhna padega ya to fir { } mat lagao . 





*/