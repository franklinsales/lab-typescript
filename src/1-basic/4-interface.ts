/*
* Interfaces in TypeScript
* The 'interface' keyword in TypeScript is (mainly) used to define the structure of an object.
* But it can also be used to define the structure of a class, a function and indexable types.*/

//===================================================================================
//===================================================================================

// 1. Basic usage of the 'interface' keyword
interface UserSystem {
  id: number; // This is a valid number
  name: string; // This is a valid string
  age: number; // This is a valid number
}

// You can use this interface to create variables of this type
let user: UserSystem = {
  id: 12345, // This is a valid number
  name: 'John Doe', // This is a valid string
  age: 30, // This is a valid number
};

// =====================================================================================
// =====================================================================================

// 2. Using the 'interface' keyword to create function types
interface AddFunctionInterface {
  (a: number, b: number): number; // This creates a new type alias called AddFunction that is a function type.
}

// Now you can use this type alias to create function variables from this type
let addInterface: AddFunctionInterface = (a, b) => a + b; // This is a valid AddFunction
// // Now you can use this function variable to call the function
let resultInterface: number = addInterface(1, 2); // This is a valid number
console.log(`Result Interface:`, resultInterface); // This will print 3
// // You can also use this type alias to create function parameters and return types
function addNumbersInterface(add: AddFunctionInterface): number {
  return add(1, 2); // Here we are using the add function was passed as a parameter
}
// Usage:
let sumTotalInterface: number = addNumbersInterface(addInterface); // This is a valid number
console.log(`Total Sum Interface:`, sumTotalInterface); // This will print 3
// if you try to pass a function that does not match the AddFunction type, you will get a compile-time error
// ❌ let sumTotalError: number = addNumbersInterface((a, b, c) => a + b + c); // This will give a compile-time error: Argument of type '(a: any, b: any, c: any) => any' is not assignable to parameter of type 'AddFunctionInterface'.

// ======================================================================================
// ======================================================================================

// 3. using the 'interface' keyword to create class types
interface UserHouse {
  id: number; // This is a valid number
  name: string; // This is a valid string
  age: number; // This is a valid number
  getUserInfo(): string; // This is a valid method
}
// You can use this interface to create classes of this type
class UserHouseHold implements UserHouse {
  id: number; // This is a valid number
  name: string; // This is a valid string
  age: number; // This is a valid number

  constructor(id: number, name: string, age: number) {
    this.id = id; // This is a valid number
    this.name = name; // This is a valid string
    this.age = age; // This is a valid number
  }

  getUserInfo(): string {
    return `User ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`; // This is a valid method
  }
}

// Now you can use this class to create an object of this type
let userHouseHold: UserHouseHold = new UserHouseHold(12345, 'John Doe', 30); // This is a valid UserHouseHold
console.log(userHouseHold.getUserInfo()); // This will print User ID: 12345, Name: John Doe, Age: 30

// =====================================================================================
// =====================================================================================

// 4. Using the 'interface' keyword to create indexable types
interface StringArray {
  [index: number]: string; // This creates an indexable type that can be indexed by a number and returns a string
}
// You can use this interface to create variables of this type
let stringArray: StringArray = ['Hello', 'World']; // This is a valid StringArray
console.log(stringArray[0]); // This will print Hello
console.log(stringArray[1]); // This will print World

// You can also use this interface to create objects of this type
interface StringObject {
  [index: string]: string; // This creates an indexable type (Index Signature) that can be indexed by a string and returns a string.
}
// You can use this interface to create variables of this type
let stringObject: StringObject = {
  name: 'John Doe', // This is a valid StringObject
  age: '30', // This is a valid StringObject
  city: 'New York', // This is a valid StringObject
};
console.log(stringObject.name); // This will print John Doe
console.log(stringObject.age); // This will print 30