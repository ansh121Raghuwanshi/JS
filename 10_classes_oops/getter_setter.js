class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){                        // get define kiye to set bhi krna hi padega nhi to error
        return `${this._password}hitesh`
    }
    //  set password(value){
    //     this.password = value   // constructer bhi set kr raha h or setter bhi to erroe aayega , maximum call stack size exceed, to ek this._password krke bana denge
    // }
    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);