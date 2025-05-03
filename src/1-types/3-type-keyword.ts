/*
* type keyword
* The 'type' keyword in Typescript is used to define a new type alias.
* A type alias is a name for a type that can be used to create more readable and maintainable code.
* So the 'type'keyword is a way to define a name for a type.
* The 'type'keyword is very important in Typescript, actually it is a cornerstone of Typescript's type system.
*/

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

// You can create more complex type aliases by combining multiple types together. Like using union types, intersection types, and mapped types. Each of these types has its own unique characteristics and use cases, so each one has a specific section in this documentation.

