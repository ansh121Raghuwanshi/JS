class User{
    constructor(username){
        this.username=username
    }
    logMe(){
     console.log(`${this.username}`)   
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // phele call waerga se krna padta tha jo phele lecture me pada 
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added by${this.username}`)
    }
}
const chai= new Teacher("chai", "chai@email","125")
console.log(chai)
chai.addCourse()