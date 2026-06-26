class User{
    constructor(email, password){
        this.email = email;
        // To make it truly private, JavaScript provides private class fields using #.
        this.password = password;
    }

    // getter and setter is used to access the private properties of the class. In this case, we are using getter and setter to access the password property of the class.
    get password(){
        // return this.password.toUpperCase();
        // The underscore (_) is just a naming convention meaning:
        // "Please don't access this directly."
        return this._password.toUpperCase(); //_password is used to avoid infinite recursion when accessing the password property.
    }

    set password(value){
        this._password = value;
    }
}

const padmaja = new User('padmaja.sharma0073@gmail.com', "abcd1234");
console.log(padmaja.email);
console.log(padmaja.password);

// Code	Accessible Outside?
// this.password	✅ Yes (public property or getter/setter)
// this._password	✅ Yes (convention only, not private)
// this.#password	❌ No (truly private)
