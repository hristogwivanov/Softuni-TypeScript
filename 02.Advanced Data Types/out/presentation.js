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
//# sourceMappingURL=presentation.js.map