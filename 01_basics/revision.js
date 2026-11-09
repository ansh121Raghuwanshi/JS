// //  var a= 10;
// //  console.log(a);

// //  let c = 20;
// //  console.log(c);
// //  c=40;
// //   console.log(c);

// //  const v=30;
// //  console.log(v);
// //  console.log(v);

// //  const name = "ansh"
// //  let repo=20
// //  console.log(`my name is ${name} and my repo is$(repo)`)
// //  console.log(2+3)
// // console.log(Math.floor(6.4))

// // let arr=[0,1,2,3,4,5,6,7,8,9,0,0,7,7,6,45,4];
// //  const a =arr.slice(6,9);
// // console.log(a)
// // console.log(arr);
// // arr.push(9);
// // console.log(arr);
// // arr.pop();
// // console.log(arr)
// // arr.unshift(89);
// // console.log(arr);
// // let newarr=arr.join()
// // console.log(newarr)

// const marvel_heroes=["thor","iron man","spiderman"]
// const dc_heroes=["superman","flash","batman"]

// // marvel_heroes.push(dc_heroes);
// //  const allheroes=marvel_heroes.concat(dc_heroes);
// const allheroes = [...marvel_heroes, ...dc_heroes]
// // console.log(allheroes)

// const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realArray = anotherArray.flat(Infinity)
// // console.log(realArray);
// // console.log(Array.isArray(
    
// //     "ansh"
// // ))
// console.log(Array.from(Object.values({name:"ansh"}))); 

//  fetch("https://api.github.com/users/ansh121Raghuwanshi")
//  .then((response)=>{
//     return response.json();
//  }).then((data)=>{
//     console.log(data)
//  }).catch((error)=>{
//     console.log(error)
//  })

//  async function getAllUsers(){

//  const response= await fetch("https://api.github.com/users/ansh121Raghuwanshi")
//  const data=await response.json();
//  console.log(data);
//  }
//  getAllUsers()
const arr=[1.,2,3,45,4]
const result=arr.some((num)=>num<0)
console.log(result)