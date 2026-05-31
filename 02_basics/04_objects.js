// const tinderUser= new Object() // singleton objects
const tinderUser= {}

tinderUser.id="123abc"
tinderUser.name="ansh"
tinderUser.isLoggedIn= false

// console.log(tinderUser.id);

const regularUser ={
    email:"sourab@gmail.com",
    fullname: {
        username: {
            firstname:"ansh",
            lastname:"patel"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);
 
const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}
const obj4={5:"a",6:"b"}

//  const obj3={obj1 ,obj2} // this wil give the same array problem (arrays ke ander arrays hota h type)

// const obj3=Object.assign( {},obj1,obj2)
// const obj3={...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
        id:0,
        email:"ansh@gmail.com",
    },
    {
        id:1,
        email:"ansh@gmail.com",
    },
    {
        id:2,
        email:"ansh@gmail.com",
    },
    {
        id:3,
        email:"ansh@gmail.com",
    },
    {
        id:4,
        email:"ansh@gmail.com",
    },
    
]

users[1].email
console.log(users[1]);

// console.log(Object.keys(tinderUser)); // keys aa jayegi
// console.log(Object.values(tinderUser)); // data array aayega 

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// let Obj1 = { 1: "a", 2: "b" };

// let Obj2 = { 3: "c", 4: "d" };

// let Obj3 = { ...Obj1, ...Obj2 }; //Here I have used spread operator but in order to access I need to use []
// let Obj4 = Object.assign({}, Obj1, Obj2); //Best practice beacause it would not change the source object (Obj1)
//let Obj4 = Object.assign(Obj1, Obj2); //Bad practice 
// console.log(Obj1); //It make changes in target Object as well.


//---------------//-------------//
const course={
    coursename:"js in hindi ",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
// another syntax to extract values
// const{courseInstructor:Instructor}= course
// // console.log(courseInstructor);
// console.log(Instructor);

// const navbar = ({company}) => {  //de-structuring       // {company}= proprties dene ke liye  in react 

// }
// navbar(company = "hitesh")

// {
//     "name":"ansh",
//    " coursename":"js in hindi ",   // json structure
//     "price":"free"
// }


[

  {},
  {},
  {}
]
