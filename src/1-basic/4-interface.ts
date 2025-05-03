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