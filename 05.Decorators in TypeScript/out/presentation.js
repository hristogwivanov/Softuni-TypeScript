// Decorators in TypeScript
// 1. Introduction to Decorators
// 2. Syntax and Basic Usage
// 3. Types of Decorators
// 4. Advanced Usage
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Introduction to Decorators
// Definition
// Used in frameworks like Angular, MobX and others
// They are used to extend a functionality or add meta-data
// Use the form @example where example must evaluate to function that will be called at runtime
// function example (target) {
//     // some code logic
// }
// Decorate
// We can decorate five different things: 
// Class definitions, properties, methods, accessors, parameters
// The function that we implement is dependent on the thing we are decorating
// The arguments required to decorate a class are different to the arguments required to decorate a method
// Decorator Evaluation
// There is well defined order to how decorators are applied: 
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member. 
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member. 
// Parameter Decorators are applied for the constructor
// Class Decorators are applied for the class
// Syntax and Basic Usage
// function classDecorator(constructor: Function) {
//     console.log("Class decorator called.");
// }
// @classDecorator
// class ExampleClass {}
// function methodDecorator(){
//     return function (
//         target: Object, 
//         propertyKey: string | symbol,
//         descriptor: PropertyDescriptor
//     ){
//         console.log("Method decorated.");
//     }
// }
// class ExampleClass{
//     @methodDecorator()
//     exampleMethod(){}
// }
// Decorators and Inheritance
// Subclasses do not inherit the decorators of the super class
// Every subclass needs to be decorated on its own
function classDecorator(constructor) {
    console.log(`Called on ${constructor.name}`);
}
let ExampleClass = class ExampleClass {
};
ExampleClass = __decorate([
    classDecorator
], ExampleClass);
// Called on ExampleClass
class DerivedClass extends ExampleClass {
}
// No output, since decorators are not inheritedю
// Types of Decorators
// Class Decorators
// Method Decorators
// Accessor Decorators
// Property Decorators
// Parameter Decorators
// Decorator Factories
// Class Decorators
// Definition
// Class Decorator is added just before the class Declaration
// The Class Decorator receives the constructor of the class as a parameter
// Used to observe, modify or replace a class definition
// If the Class Decorator returns a value, it will replace the class declaration with the provided constructor function
// Example: Class Decorator
// function Frozen(constructor: Function){
//     Object.freeze(constructor);
//     Object.freeze(constructor.prototype);
// }
// @Frozen //@Frozen is a class decorator
// class Person {
//     constructor (private name: string) {}
// }
// Example: Overwriting Class Definition
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
let Student = class Student extends Person {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
};
Student = __decorate([
    overwrite,
    __metadata("design:paramtypes", [String, Number])
], Student);
export function overwrite(constructor) {
    return (function () { return { test: 20 }; });
}
let student = new Student('George', 30);
console.log(student); // {test: 20}
console.log(student instanceof Person); //false
console.log(student instanceof Student); //false
//# sourceMappingURL=presentation.js.map