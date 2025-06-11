"use strict";
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// class Person { constructor (public name: string) {  } }
// @overwrite class Student extends Person {
//     constructor (name: string, public age: number)  {   super(name);    }
// }
// export function overwrite(constructor: Function) {
//     return (function () { return { test: 20}} ) as any;
// }
// let student = new Student('George', 30);
// console.log(student);   // {test: 20}
// console.log(student instanceof Person); //false
// console.log(student instanceof Student); //false
//Example: Extending Class Definition
// @addTitle class Person { constructor(public name: string) { }}
// //TS Error: Decorator function return type is not assignable to typeof Other
// // @addTitle class Other { constructor(public lastName: string){   }}
// function addTitle(constructor: Function){
//     return class extends (constructor as {  new(...args: any[]): Person}){
//         constructor(...args: any[]){
//             super('Sir/Madam ' + args[0], ...args.shift());
//         }
//     }
// }
// let person = new Person('George');
// console.log(person.name)
//Example: Generic Class Decorators
let Test = class Test {
};
Test = __decorate([
    addTitleAbstract
], Test);
let Person = class Person extends Test {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
};
Person = __decorate([
    addTitleGeneric,
    __metadata("design:paramtypes", [String])
], Person);
let Other = class Other {
    lastName;
    constructor(lastName) {
        this.lastName = lastName;
    }
};
Other = __decorate([
    addTitleGeneric,
    __metadata("design:paramtypes", [String])
], Other);
function addTitleGeneric(constructor) {
    return class extends constructor {
        constructor(...args) { super('Sir/Madam ' + args[0], ...args.shift()); }
    };
}
function addTitleAbstract(constructor) {
    class Anonymous extends constructor {
        v = 20;
    }
    ;
    return Anonymous;
}
; // need to extend the Test class interface to let TS know about the new property
let person = new Person('George');
console.log(person.name); // Sir/Madam George
console.log(person.v); // 20
// Method Decorators
// Definition
// The method decorator function takes three arguments: 
// target - the parent class
// key - the name of the function
// descriptor - the Property Descriptor of the method
// descriptor.value - the method itself
function disableEnumarable(target, key, descriptor) {
    descriptor.enumerable = false;
}
;
// Example: Method Decorator
class Num {
    _number;
    constructor(_number) {
        this._number = _number;
    }
    getNumber() { return this._number; }
}
__decorate([
    add10,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Num.prototype, "getNumber", null);
function add10(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let result = original.apply(this, args);
        return result += 10;
    };
    return descriptor;
}
;
let num = new Num(20);
console.log(num.getNumber()); //30
// Accessor Decorators
// Definition
// TypeScript does not allow decorators on both the getter and the setter
// The property Descriptor combines both get and set not each declaration separately
// Takes the following three arguments
// - Target
// The constructor function of the class for a static members
// The prototype of the class for instance members
// key - The name of the member
// descriptor - The Property Descriptor fo the member
// Example: Accessor Decorator
class Point {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    set x(value) { this._x = value; }
    set y(value) { this._y = value; }
}
__decorate([
    double,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Point.prototype, "x", null);
__decorate([
    double,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Point.prototype, "y", null);
function double(target, key, descriptor) {
    let originalSet = descriptor.set;
    descriptor.set = function (val) {
        originalSet?.call(this, val * 2);
    };
}
;
let p = new Point(20, 20);
console.log(p);
p.x = 2;
p.y = 3;
console.log(p); // Point {_x: 4, _y: 6}
// Example: Static Accessor Decorator
// class Circle {
//     constructor(private _radius: number) {  }
//     @format static get PI() { return 3.1415}
// }
// function format(target: any, key: string, descriptor: PropertyDescriptor){
//     let original = descriptor.get;
//     descriptor.get = function() {
//         let result = original?.call(this);
//         return `PI is ${result.toFixed(2)}`;
//     }
// };
// let rect = new Circle(5);
// console.log(Circle.PI);
// Property Decorators
// Definition
// Property decorator can only be used to observe that a property with specific name has been declared
// Cannot be used to modify the value of a property
// The return value of the decorator is also ignored
// Takes the following two arguments: 
// - target - the constructor function for static members
// - the prototype of the class for instance members
// key - the name of the member
// Example: Prperty Decorator
// class Greeter {
//     @log
//     private _message: string = 'Hello';
// }
// function log(target: object, key: string) {
//     console.log(`Property '${key}' was declared.`)
//     console.log(` '${target.constructor}' is the constructor`)
// }
// let greeter = new Greeter(); 
// Parameter decorators
// Definition
// Parameter decorators can only be used to observe that a parameter has been declared on a method
// Cannot be used to modify tha value of the parameter 
// The return value of the decorator is also ignored
// Takes the following three arguments: 
// -target
//  -The constructor function for static members
//  -The prototype of the class for instance members
// key - The name of the parameter
// index - The index of the parameter in the arguments list
// Example: Parameter Decorator
class Greeter {
    greet(message) {
        return message;
    }
}
__decorate([
    __param(0, log),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Greeter.prototype, "greet", null);
function log(target, key, index) {
    console.log(`Parameter '${key}' was declared.`);
    console.log(`Index: ${index}`);
    console.log(`Constructor: ${target.constructor}`);
}
let greeter = new Greeter();
// Decorator Factories
// Definition
// Function that returns a decorator function
// Gives the flexibility to pass custom data to the decorator function when needed
function enumerable(value) {
    return function (// Decorator Factory
    target, //Decorator function
    propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
// Example: Decorator Factory
class Name {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    getName() { return this._name; }
}
__decorate([
    format('Hello, my name is %s'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Name.prototype, "getName", null);
function format(stringFormat) {
    return function (target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            let value = original.call(this, ...args);
            return stringFormat.replace('%s', value);
        };
        return descriptor;
    };
}
let nam = new Name('Peter');
console.log(nam.getName()); // Hello, my name is Peter
//# sourceMappingURL=presentation.js.map