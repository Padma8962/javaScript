class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ // static is used to create a method that is not tied to an instance of the class, but rather to the class itself. It can be called without creating an instance of the class.
        return '123';
    }
}

const user1 = new User('John');
user1.logMe();
// console.log(user1.createId());

class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
}

const teacher1 = new Teacher('Jane', 'Math');
teacher1.logMe();
console.log(Teacher.createId()); // static method can be called on the class itself, not on an instance of the class.