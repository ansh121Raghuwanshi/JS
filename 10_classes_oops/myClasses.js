// ES6 ke baad hi kahani h , tum ES6 ke baad ki js use kr rahe ho 
class User{
    constructor(username , email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return`${this.password}abc`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}
const chai = new User("ansh", "ansh@gm", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName())


//  behind the scene
// yadi class available nhi hoti to func se ke lete

function User1(username , email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    User1.prototype.encryptPassword=function(){
         return`${this.password}abc`
    }

    const tea = new User1("tea", "ansh@gm", "123")
    console.log(tea.username)
console.log(tea.encryptPassword());

