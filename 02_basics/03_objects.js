// singleton 
// object.create

// object literals 
const mysym= Symbol("key1")
const JsUser={
    name:"ansh",
    fullname:"ansh patel",
    [mysym]:"mykey1",
    age:20,
    location:"chand",
    email:"ansh@google@gmail.com",
    lastLoginDays:["monday" , "saturday"]
}
// console.log(JsUser.email); // two methods of accessing one is . and second is []
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email="ansh@chatgpt.com" // for changing value of objects
// Object.freeze(JsUser); // for freezing the value or does not change the value  
JsUser.email="ansjscldknn@wd.com" // does not change but do not show error

// console.log(JsUser);

JsUser.greeting= function() {
    console.log("hello js user");
}

JsUser.greetingTwo= function() {
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// in greeting & greetingTwo functions you  log messages to the console but don't return anything, so they implicitly return undefined as an output after every console. But when we use return keyword in functions instead of console.log it will not output 'undefined'.

// because whenever we are using { } we have to explicitly write return whereas when simply using ( ) we do do not need to write it