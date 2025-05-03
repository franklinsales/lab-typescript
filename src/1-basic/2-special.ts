/* What are special types in TypeScript?
* Special types in TypeScript are types that are not primitive types, but are used to represent specific values or behaviors.
* These types include:
* 1. any: Represents any type of value. It can be used to represent values that can be of any type.
* 2. unknown: Represents a value that is unknown at compile time. It is similar to any, but is safer to use because it requires type checking before using the value.
* 3. never: Represents a value that never occurs. It is used to indicate that a function does not return a value or that a variable cannot be assigned a value.
* 4. void: Represents the absence of a value. It is used to indicate that a function does not return a value.
*/

// ==================================================================================
// ==================================================================================

// 1. any: Represents any type of value. It can be used to represent values that can be of any type.
let anyValue: any = 123; // This can be a number
anyValue = 'Hello'; // This can be a string
anyValue = true; // This can be a boolean
// This can be any type of value, so it is not type-safe.
// It is important to note that using any defeats the purpose of TypeScript's type system.
// It is recommended to use 'unknown' instead of any whenever possible.

// ==================================================================================
// ==================================================================================

// 2. unknown: Represents a value that is unknown at compile time. It is similar to any, but is safer to use because it requires type checking before using the value.
let unknownValue: unknown = 123; // This can be a number
unknownValue = 'Hello'; // This can be a string
// This can be any type of value, but you need to check the type before using it.
if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase()); // This is valid, because we checked the type
}
if (typeof unknownValue === 'number') {
  console.log(unknownValue.toString()); // This is valid, because we checked the type. The code will not reach this point if unknownValue is not a number.
}

// ==================================================================================
// ==================================================================================

// 3. never: Represents a value that never occurs. It is used to indicate that a function does not return a value or that a variable cannot be assigned a value.
function throwError(message: string): never {
  throw new Error(message); // This function never returns a value
}
function infiniteLoop(): never {
  while (true) {
    // This function never returns a value
  }
}
//Examle: that a variable cannot be assigned a value. This is useful for indicating that a variable cannot be assigned a value. 
// Forcing the compiler to throw an error if you try to assign a value to it.
let neverValue: never;

// ==================================================================================
// ==================================================================================
// 4. void: Represents the absence of a value. It is used to indicate that a function does not return a value.
function logMessage(message: string): void {
  console.log(message); // This function does not return a value
}
function doNothing(): void {
  // This function does not return a value
  return; // This is optional, because the function does not return a value
}
function doSomething(): void {
  // This function does not return a value
  return undefined; // This is also valid, because the function does not return a value
}
function doSomethingElse(): void {
  // This function does not return a value
  // return null; // Type 'null' is not assignable to type 'void'. This is not valid, because null is not a valid value for void
}