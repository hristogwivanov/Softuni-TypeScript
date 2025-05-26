"use strict";
//String
// let str: string = "hello";
// str = "singleQuotes";
// str = "doubleQuotes";
// // str = 11;
//Numbers
let decimal = 11;
let hex = 7e3;
let binary = 11111100011;
let float = 3.14;
// decimal = 'hello';
//Boolean
let isBool = true;
isBool = 5 < 2;
let numbers = [1, 2, 3, 4];
isBool = numbers.includes(100);
// usBool = 11;
//Symbol
let uniqueSymbol = Symbol("mySymbol");
let anotherSymbol = Symbol("mySymbol");
console.log(uniqueSymbol === anotherSymbol);
//Undefined
let undefinedValue1;
let undefinedValue2 = undefined;
let person = null;
//Array
let arrayOfStr = [];
arrayOfStr.push("Hello"); // valid
// arrayOfStr.push(11);
//Tuple
let tuple;
tuple = ["Hello", 11];
// tuple = [11, 'Hello'];
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
let day;
day = DaysOfTheWeek.Monday;
console.log(day);
if (day === DaysOfTheWeek.Monday) {
    console.log("I hope you all had a great weekend!");
}
let a = "hello";
let b = "hello";
a = 11;
b = 12;
console.log(a.length);
// console.log(b.length);
greet("message string");
// function greet(message: string): void {
//     console.log(message);
// }
function optionalParams(name, mail) {
    // logic
} //valid
// function optionalParams(name?: string, mail. string){
//     //logiic
// }// invalid
//Return data types
function greet(name) {
    return name;
}
console.log(greet("Hello"));
//Type Inference
//Type inference allows TypeScript to automatically deduce types, improving readability and development speed
let httpCode = {
    code: 404,
    text: "Page not found",
};
//Type Assertions
//Allow you to pass type information to Typescript
//Does not actually change the underlying value
//Can be done using <> or the as keyword
let val = 20;
let str = val;
//no TypeScript error
console.log(str.length); //undefined
console.log(val.length); //undefined
//TS error, as it expects 'str' to be a string
// console.log(str * 10); //200
console.log(typeof str); //number
//Type Guards
//Any expression that allows TypeScript to narrow the type information in some scope, like typeof, type predicate function, instanceof and more
// // function createRandomVariable(): unknown {...}
// // //typepredicate function
// function isString(val: unknown): val is string {
//     //TS allows carAt call, since we assert val is a string
//     return ((val as string).charAt != undefined);    
// }
// let myVal: unknown = createRandomVariable(); 
// // console.log(myVal.length); //Error
// // console.log(myVal * 2); //Error
// if(isString(myVal)) console.log(myVal.length); //valid
// if(typeof myVal === 'string') console.log(myVal,length) //valid
//# sourceMappingURL=presentation.js.map