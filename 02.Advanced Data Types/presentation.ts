// Union Type - represent an either-or combination of multiple types
//Has only the shared properties of the combined types without type narrowing to a single type

function greet(message: string | string[]) {
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

function showContact(contactPerson: 
    {name: string} & {email: string}){
        return contactPerson;
    }
    let contactPerson: {name: string} & {email: string} =
{
    name: 'Svetoslav Dimitrov',
    email: 'test@test.com'
}
console.log(showContact(contactPerson));


//Literal Types

//String Literal Type
let status2: "success" | "error";
status2 = "success";

//Number Literal Type
let errorCode: 500 | 400 | 404;
errorCode = 500;


//Type Aliases
//A custom name for a type, declared with the type keyword, can target: 
// -Primitives
// -Objects
// -Advanced types

type Age = number; //primitive
type User = { age: Age}; //uses the type alias Age
type Person = { name: string }; // object
type Combined = User & Person; // advanced type

const user: Combined = { name: 'John', age: 20 };


//"keyof" TypeScript Operator
// TypeScript operator that does not exist in JS
//Retrieves the keys of an object type as a union of string or numeric literals

// type Point = { x: number; y: number;}
// type PointKeys = keyof Point; // 'x' | 'y'

type Colors = {red: string; blue: string; };
type ColorKeys = keyof Colors; //'red' | 'blue'


// "in" Usage

// JS operator that checks if a given key exists in an object
// TypeScript can use the JS "in" operator: 
// -As a TypeGuard
// -To iterate over the results of the "keyof" operator
type A = { name: string};
type B = { age: number};
let val: A | B = {age: 5};
//used as a type guard to narrow 'val' to type B 
if('age' in val) console.log(val.age);


//"typeof" Usage
//TypeScript can also levarage the JS typeof operator to extract TS type information from variables
//This does not change the runtime functionality
type Point = {x: number; y: number; };
let point1: Point = {x: 12, y: 4};
type Point2 = typeof point1; //{x: number; y: number; }

console.log(typeof point1) //object
type Color = {red: number};
let color1 = {red: 20};

//true sinec both are objects
console.log(typeof point1 == typeof color1) //true



