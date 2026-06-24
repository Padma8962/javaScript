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