const user = {
    username :"ansh",
    loginCount : 8,
    signedIn  : true ,

    getUserDetails: function(){
        // console.log("get user details");
        //  console.log (`username :${this.username}`);
        
        // console.log(this);
        
    }


}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

function User (username , isLoggedIn){
    this.username = username;
    this.getUserDetails = isLoggedIn
    return this // nhi bhi karenge to chalega
}
const userOne = new User("ansh",true)
const userTwo =new  User("aaaa",false)
console.log(userOne);
console.log(userTwo);


