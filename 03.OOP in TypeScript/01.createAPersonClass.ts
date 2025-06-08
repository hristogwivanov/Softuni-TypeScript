//@ts-ignore
class Person {
  firstName: string;
  lastName: string;
  age: number;
  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age; 
  }
  introduce(){
    return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
  }
}

//@ts-ignore
const person = new Person ("John", "Doe", 30);
//@ts-ignore
console.log(person.introduce());