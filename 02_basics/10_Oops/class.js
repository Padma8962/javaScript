class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.

// // behind the scene, the above code is equivalent to the following code:
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// let person2 = new Person("John", 30);
// person2.sayHello();

// inheritance
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}.`);
    }
}

let student1 = new Student("Jane", 20, "A");
student1.sayHello(); // Output: Hello, my name is Jane, I am 20 years old and I am in grade A.                      

// Person k paas Student k method ka access nhi hoga
//  student1 is instance od Student class but is not equvilaent to Student class.