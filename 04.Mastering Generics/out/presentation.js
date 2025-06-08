"use strict";
// Generics
// Interfaces, Generic Functions and Classes
// Generics
// - Generic functions
// - Generic interfaces
// - Generic classes
// - Generic type constraints
// - Mapped Types using Generics
// - Advanced Mapped Types
// Generics
// Definition
// - Used to build reusable software components
// - The components will work with a multitude of types instaed of a single type
// - Defined by type variable - <LETTER> 
// Follows thge DRY (Don't Repeat Yourself) principle
// Allows us to abstract the  type
// Example: Generic vs Non-Generic
// Generic
function echo(arg) {
    console.log(typeof arg);
    // It will print number and string when the function is invoked
    return arg;
}
echo(11111);
echo('Hello');
// Non-generic
function echoNumber(arg) {
    return arg;
}
function echoString(arg) {
    return arg;
}
const generatedFn = (arg, param) => {
    return [arg, param];
};
const sample = generatedFn('Hello', 'World');
console.log(sample); // [Hello, World]
// Generic Classes
// Generics can be used on: 
// - The properties of the class
// - The methods of the class
// To define a generic class we put <LETTER> after the name of the class
// We can use multiple type variables
// Generic classes can implement generic interfaces
// Example: Generic Class Using Single Parameter
class Collection {
    data;
    constructor(...elements) { this.data = elements; }
    addElement(el) { this.data.push(el); }
    removeElement(el) {
        let index = this.data.indexOf(el);
        console.log(`index: ${index}`);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
    reverseElements() {
        return this.data.reverse();
    }
    showElements() { return this.data; }
}
let collection = new Collection();
collection.addElement(1);
console.log(collection.showElements());
collection.addElement('string');
console.log(collection.showElements());
collection.reverseElements();
console.log(collection.showElements());
collection.removeElement('string');
console.log(collection.showElements());
//# sourceMappingURL=presentation.js.map