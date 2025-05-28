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
const user = { name: 'John', age: 20 };
let val = { age: 5 };
//used as a type guard to narrow 'val' to type B 
if ('age' in val)
    console.log(val.age);
let point1 = { x: 12, y: 4 };
console.log(typeof point1); //object
let color1 = { red: 20 };
//true sinec both are objects
console.log(typeof point1 == typeof color1); //true
//# sourceMappingURL=presentation.js.map