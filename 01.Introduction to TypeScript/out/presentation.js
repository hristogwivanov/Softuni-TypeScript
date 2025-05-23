"use strict";
let str = 'hello';
str = 'singleQuotes';
str = "doubleQuotes";
// str = 11;
let decimal = 11;
let hex = 7E3;
let binary = 11111100011;
let float = 3.14;
// decimal = 'hello';
let isBool = true;
isBool = 5 < 2;
let numbers = [1, 2, 3, 4];
isBool = numbers.includes(100);
// usBool = 11;
let uniqueSymbol = Symbol('mySymbol');
let anotherSymbol = Symbol('mySymbol');
console.log(uniqueSymbol === anotherSymbol);
let undefinedValue1;
let undefinedValue2 = undefined;
let person = null;
let arrayOfStr = [];
arrayOfStr.push('Hello'); // valid
// arrayOfStr.push(11);
let tuple;
tuple = ['Hello', 11];
// tuple = [11, 'Hello'];
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
;
let day;
day = DaysOfTheWeek.Monday;
console.log(day);
if (day === DaysOfTheWeek.Monday) {
    console.log('I hope you all had a great weekend!');
}
//# sourceMappingURL=presentation.js.map