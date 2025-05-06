/*
* type keyword
* The 'type' keyword in Typescript is used to define a new type alias.
* A type alias is a name for a type that can be used to create more readable and maintainable code.
* So the 'type'keyword is a way to define a name for a type.
* The 'type'keyword is very important in Typescript, actually it is a cornerstone of Typescript's type system.
* The 'type' keyword is used to create type aliases from primitive types, function types, class shapes, union types, intersection types, mapped types, and other types.
*/

// ==================================================================================
// ==================================================================================

// 1. Basic usage of the 'type' keyword

// Basic usage of the 'type' keyword
type UserID = string; // This creates a new type alias called UserID that is a string
// You can use this type alias to create variables of this type
let userID: UserID = '12345'; // This is a valid UserID
// You can also use this type alias to create function parameters and return types
function getUserID(): UserID {
  return '12345'; // This is a valid UserID
}
// You can also use this type alias to create object types
type User = {
  id: UserID; // This is a valid UserID
  name: string; // This is a valid string
  age: number; // This is a valid number
};

// So after defining a type alias, you can use it throughout your code to refer to that type.
// This makes your code more readable and maintainable.

// ===================================================================================
// ===================================================================================

// 2. Using the 'type' keyword to create function types

type AddFunction = (a: number, b: number) => number; // This creates a new type alias called AddFunction that is a function type.

// Now you can use this type alias to create function variables from this type
let add: AddFunction = (a, b) => a + b; // This is a valid AddFunction
// Now you can use this function variable to call the function
let result: number = add(1, 2); // This is a valid number
console.log(`Result:`, result); // This will print 3

// You can also use this type alias to create function parameters and return types
function addNumbersT(add: AddFunction): number {
  return add(1, 2); // Here we are using the add function was passed as a parameter
}
// Usage:
let sumTotal: number = addNumbersT(add); // This is a valid number
console.log(`Total Sum:`, sumTotal); // This will print 3
// if you try to pass a function that does not match the AddFunction type, you will get a compile-time error
// ❌ let sumTotalError: number = addNumbers((a, b, c) => a + b + c); // This will give a compile-time error: Argument of type '(a: any, b: any, c: any) => any' is not assignable to parameter of type 'AddFunction'.

// Here an example where we have a type that have two methods, one of them is declared using the type alias AddFunction and the other one is declared using a function type directly
type MathOperations = {
  add: AddFunction; // This is a valid AddFunction
  subtract: (a: number, b: number) => number; // This is a valid function type
}
// Now you can use this type alias to create an object of this type
let mathOperations: MathOperations = {
  add: (a, b) => a + b, // This is a valid AddFunction
  subtract: (a, b) => a - b, // This is a valid function type
}
// Now you can use this object to call the functions
let sumResult: number = mathOperations.add(1, 2); // This is a valid number
let subtractResult: number = mathOperations.subtract(1, 2); // This is a valid number
console.log(`Sum Result:`, sumResult); // This will print 3
console.log(`Subtract Result:`, subtractResult); // This will print -1

// As we can see types alias to create function types are very useful to create reusable and maintainable code.

// ===================================================================================
// ===================================================================================

// 3. Using the 'type' keyword to create class shapes
type UserClass = {
  id: number; // This is a valid number
  name: string; // This is a valid string
  age: number; // This is a valid number
  getUserInfo: () => string; // This is a valid function type
}

// Now you can use this type alias to create a class that implements this shape
class UserBusiness implements UserClass {
  id: number; // This is a valid number
  name: string; // This is a valid string
  age: number; // This is a valid number
  constructor(id: number, name: string, age: number) {
    this.id = id; // This is a valid number
    this.name = name; // This is a valid string
    this.age = age; // This is a valid number
  }
  getUserInfo(): string {
    return `User ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`; // This is a valid string
  }
}
// Now you can use this class to create an object of this type
let userBusiness: UserBusiness = new UserBusiness(12345, 'John Doe', 30); // This is a valid UserBusiness
// Now you can use this object to call the methods
let userInfo: string = userBusiness.getUserInfo(); // This is a valid string
console.log(`User Info:`, userInfo); // This will print User ID: 12345, Name: John Doe, Age: 30

// ==================================================================================
// ==================================================================================

// 4. Using the 'type' keyword to create tuple types
type UserTuple = [number, string, number]; // This creates a new type alias called UserTuple that is a tuple type
// Now you can use this type alias to create variables of this type
let userTuple: UserTuple = [12345, 'John Doe', 30]; // This is a valid UserTuple
console.log(`User Tuple:`, userTuple); // This will print [12345, 'John Doe', 30]
// 🤔: Type is the only valid way to create tuples using Typescript. In other words, you cannot use the "interface" keyword.

// You can create more complex type aliases by combining multiple types together. Like using union types, intersection types, and mapped types. Each of these types has its own unique characteristics and use cases, so each one has a specific section in this documentation.

