class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`usernmae${this.username}`)
    }
     static createId(){
        return `123`
    }
}
const hiteah = new User("ansh")
console.log(hiteah.createId())