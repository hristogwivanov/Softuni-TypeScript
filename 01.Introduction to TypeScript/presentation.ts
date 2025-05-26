//String

// let str: string = "hello";
// str = "singleQuotes";
// str = "doubleQuotes";
// // str = 11;

//Numbers

let decimal: number = 11;
let hex: number = 7e3;
let binary: number = 11111100011;
let float: number = 3.14;
// decimal = 'hello';

//Boolean

let isBool: boolean = true;
isBool = 5 < 2;
let numbers = [1, 2, 3, 4];
isBool = numbers.includes(100);
// usBool = 11;

//Symbol

let uniqueSymbol: symbol = Symbol("mySymbol");
let anotherSymbol: symbol = Symbol("mySymbol");
console.log(uniqueSymbol === anotherSymbol);

//Undefined

let undefinedValue1;
let undefinedValue2: undefined = undefined;
let person: null = null;

//Array

let arrayOfStr: string[] = [];
arrayOfStr.push("Hello"); // valid
// arrayOfStr.push(11);

//Tuple

let tuple: [string, number];
tuple = ["Hello", 11];
// tuple = [11, 'Hello'];

enum DaysOfTheWeek {
    Monday = 1,
    Tuesday,
}

let day: DaysOfTheWeek;
day = DaysOfTheWeek.Monday;
console.log(day);
if (day === DaysOfTheWeek.Monday) {
    console.log("I hope you all had a great weekend!");
}

let a: any = "hello";
let b: unknown = "hello";
a = 11;
b = 12;
console.log(a.length);
// console.log(b.length);

greet("message string");

// function greet(message: string): void {
//     console.log(message);
// }

function optionalParams(name: string, mail?: string) {
    // logic
} //valid

// function optionalParams(name?: string, mail. string){
//     //logiic
// }// invalid

//Return data types

function greet(name: string): string {
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

let val: unknown = 20;
let str = val as string;

//no TypeScript error
console.log(str.length); //undefined
console.log((<string>val).length); //undefined

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