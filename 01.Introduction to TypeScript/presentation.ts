let str: string = 'hello';
str = 'singleQuotes' ;
str = "doubleQuotes" ;
// str = 11;

let decimal: number = 11;
let hex: number = 7E3;
let binary: number = 11111100011;
let float: number = 3.14;
// decimal = 'hello';

let isBool: boolean = true; 
isBool = 5 < 2;
let numbers = [1, 2, 3, 4];
isBool = numbers.includes(100);
// usBool = 11;

let uniqueSymbol: symbol = Symbol('mySymbol');
let anotherSymbol: symbol = Symbol( 'mySymbol');
console.log(uniqueSymbol === anotherSymbol);

let undefinedValue1;
let undefinedValue2: undefined = undefined; 
let person: null = null;

let arrayOfStr: string[]=[];
arrayOfStr.push('Hello'); // valid
// arrayOfStr.push(11);

let tuple: [string, number];
tuple = ['Hello', 11]; 
// tuple = [11, 'Hello'];


enum DaysOfTheWeek{
    Monday = 1,
    Tuesday,
};

let day: DaysOfTheWeek;
day = DaysOfTheWeek.Monday;
console.log(day);
if (day === DaysOfTheWeek.Monday) {
    console.log('I hope you all had a great weekend!');
}



