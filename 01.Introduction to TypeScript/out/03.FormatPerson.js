"use strict";
function formatPerson(input) {
    const [name, age, family] = input;
    return family
        ? `Hello, my name is ${name} ${family} and my age is ${age}`
        : `Hello, my name is ${name} and my age is ${age}`;
}
console.log(formatPerson(["Ivan", 20]));
console.log(formatPerson(["Joro", 30]));
console.log(formatPerson(["Joro", 20, "Ivanov"]));
// console.log(formatPerson(["Joro", '25']));
// console.log(formatPerson([]));
//# sourceMappingURL=03.FormatPerson.js.map