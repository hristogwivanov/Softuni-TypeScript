"use strict";
//Object-Oriented Programming(OOP)
//A programming paradigm that uses objects to organize code and structure applications
//Key concepts: classes, objects, inheritance, abstraction, polymorphism and ecapsulation
//Benefits of OOP
//Modularity: code is organized into managable, reusable units (classes and objects)
//Reusability: code can be reused across different parts of the application and even in other projects
//Flexibility and Exensiblity: easily adapt and extend the system through inheritance and polymorphism
//Simplified Maintenance: changes and updates are localized to the related class or object, reducing complexity
//Classes and Objects
//A blueprint for creating objects
//Defines the properties and methods that objects based on the class will have
//Can have constructors for initializing object properties
// class Dog {
//     private name: string;
//     private age: number; 
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a; 
//     }
//     bark(){
//         return `${this.name} woofed friendly`;
//     }
// }
// let tommy = new Dog ('Tommy', 6);
// console.log(tommy); // Dog { name: 'Tommy', age: 6 }
// console.log(tommy.bark()); // Tommy woofed friendly
//Object
//An instance of a class
//Represents a specific entity based on the class's blueprint
//Has specific property values and can call the class's methods
//Classes vs Objects
//Class
// class Person {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     greet(): string {
//         return `Hello, I am ${this.name}`
//     }
// }
// //Object
// const person1 = new Person('Alice');
// const person2 = new Person('Bob');
// console.log(person1.greet());
// console.log(person2.greet());
//Core Principles of OOP
//Encapsulation: bundle data and behaviour within a class, controlling access with access modifiers and accessors
//Abstraction: focus on essential futures and hide unnecessary details
//Inheritance: create new classes based on existing ones, fostering code reuse and extensibility; 
//Polymorphism: provide a common interface for differentt data types, allowing flexibility and extensibility\
//Encapsulation
//Access control through access modifiers (public, private, protected)
// class Person {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet():string {
//         return `Hello, I am ${this.name}`
//     }
// }
// let person1 = new Person('Ivan');
// console.log(person1.greet());
//Abstraction
//Presenting a simple interface while hiding the complex implementation
// interface Human {
//     greet(): string;
// }
// class Person implements Human {
//     greet(): string {
//         return 'Hello, there!';
//     }
// }
// let person1 = new Person();
// console.log(person1.greet());
//Inheritance
//Inheriting properties and methods from the base class
class Animal {
    sound;
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    constructor() {
        super('Bark');
    }
}
let dog = new Dog();
dog.makeSound(); //Bark
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() { return `${this.name} says hello`; }
    ;
}
let person = new Person('John');
console.log(person.greet());
//Example: Method Overriding
//Hides the parent method implementation and can be: 
//Implicit = redeclaring method with same name
//Explicit - using the override keyword
//Can set "noImplicitOverride": true in tsconfig to have TS allow only explicit overrides
class Shape {
    draw() { console.log('Drawng a shape.'); }
}
class Circle extends Shape {
    draw() { console.log('Drawing a circle.'); }
}
let shape = new Shape();
let circle = new Circle();
shape.draw();
circle.draw();
//# sourceMappingURL=presentation.js.map