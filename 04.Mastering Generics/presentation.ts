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

function echo<T>(arg: T): T {
  console.log(typeof arg);
  // It will print number and string when the function is invoked
  return arg;
}
echo (11111);
echo ('Hello');

// Non-generic
function echoNumber(arg: number): number {
  return arg; 
}

function echoString(arg: string): string {
  return arg;
}

// Generic Functions
// Generic functions allow us to work with user input with unknown data type
// It is a way of telling the function that whatever type is passed to it the same type shall be returned
// Put some constraints to user input
// We can put more than one type variable in the generic function 

// Example: Generic Functions

// const takeLast = <T>(array: T[]) => {
//   return array.pop();
// }
// const sample = takeLast(['Hello', 'World', 'TypeScript'])
// const secondSample = takeLast([1, 2, 3, 4]);
// console.log(sample, secondSample); //TypeScript, 4

// const makeTuple = <T, V> (a: T, b: V) : [T, V] => {
//   return [a, b];
// }


// const firstTuple = makeTuple(1,2);
// const secondTuple = makeTuple('a', 'b');
// console.log(firstTuple, secondTuple);

// Generic Interfaces
// Using generic interfaces we can define generic funcitons too 
interface GenericConstructor<T, V> {
  (arg: T, param: V): [T, V];
}

const generatedFn: GenericConstructor<string, string> = <T, V>(arg: T, param: V) => {
  return [arg, param];
}

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

class Collection<T> {
  public data: T[];
  constructor(...elements: T[]) { this.data = elements; }

  addElement(el: T) { this.data.push(el); }

  removeElement(el: T)  {
    let index = this.data.indexOf(el);
    console.log(`index: ${index}`);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  reverseElements() {
    return this.data.reverse(); 
  }

  showElements() { return this.data;  }
}

let collection = new Collection<number | string>();
collection.addElement(1);
console.log(collection.showElements());
collection.addElement('string');
console.log(collection.showElements());
collection.reverseElements();
console.log(collection.showElements());
collection.removeElement('string');
console.log(collection.showElements());
