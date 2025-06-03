"use strict";
// Union Type - represent an either-or combination of multiple types
//Has only the shared properties of the combined types without type narrowing to a single type
function greet(message) {
    console.log(message.length); //ok, since both have length
    if (typeof message === "string") { //narrowed to string
        return message;
    }
    return message.join(' '); //narrowed to string[]
}
let greeting = 'Hello world';
let greetingArray = ['Dear', 'Sir/Madam'];
console.log(greet(greeting));
console.log(greet(greetingArray)); //Dear Sir/Madam
//Intersection types - combine multiple types in one
//Has all properties of the combined types
function showContact(contactPerson) {
    return contactPerson;
}
let contactPerson = {
    name: 'Svetoslav Dimitrov',
    email: 'test@test.com'
};
console.log(showContact(contactPerson));
//Literal Types
//String Literal Type
let status2;
status2 = "success";
//Number Literal Type
let errorCode;
errorCode = 500;
let val = { age: 5 };
//used as a type guard to narrow 'val' to type B 
if ('age' in val)
    console.log(val.age);
let root = {
    value: 20,
    left: { value: 5 } //also of type TreeNode
};
let thomas = {
    fullName: 'Thomas Doe',
    email: 'thomas@test.test'
};
console.log(thomas.fullName); //Thomas Doe
let calc = function (a, b, operation) {
    let result = 0;
    const addition = () => result = a + b;
    const parser = {
        'addition': addition,
    };
    parser[operation]();
    return result;
};
class Clock {
    hour;
    minute;
    constructor(h, m) {
        this.hour = h;
        this.minute = m;
    }
    showTime() {
        return `Current time: ${this.hour}:${this.minute}`;
    }
}
//Extending Interfaces
//Interfaces can extend classes and other interfaces
//Extending classes
//The extended interface inherits all of the members of the class including private and protected members
//The interface does not inherit the implementations of the members (e.g. mehtod implementations)
//Extending other interfaces
//Creates a combination of all interfaces
//Example: Extending Interfaces
class Computer {
    RAM;
    constructor(r) { this.RAM = r; }
    showParams() { return `${this.RAM}`; }
}
class PC extends Computer {
    keyboard;
    CPU;
    constructor(RAM, CPU, keyboard) { super(RAM); this.CPU = CPU; this.keyboard = keyboard; }
    showParts() {
        return `${this.RAM} ${this.CPU} ${this.keyboard}`;
    }
}
let pesho = new PC(16, "Ryzen", "cherry");
console.log(pesho.showParts());
//Interfaces vs Types
//In many cases, they can be used interchangeably depending on personal preference
// Interfaces: 
// - defines a contract that the object must adhere to. 
// Types: 
// - create new name for primitive data types
// - define union, tuple and more complex types and many more
//Interface example 
// interface Person {
//     firstName: string;
//     lastName: string;
//     greeting: () => string;
// }
//Type
// type Person = {
//     firstName: string;
//     lastName: string;
//     greeting: () => string;
// }
//TypeScript provides a lot more advanced data types and advanced typing for complex use cases: 
// - union, intersection types and variety of literals
// - type aliases, recursive types, "keyof" and many more
// There are types and interfaces that can help us extend our typing even to the next level;
//# sourceMappingURL=presentation.js.map