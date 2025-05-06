/*
* Functions in TypeScript
* A function is a block of code that performs a specific set of statements.
* They allow you to write reusable, modular, testable code.
*/

// =====================================================================================
// =====================================================================================

// 1. Basic function declaration
function addFn(a: number, b: number): number {
  return a + b; // This is a valid number
}
// Usage:
console.log(`Add:`, addFn(1, 2)); // This will print 3

// a: number, b: number are the parameters of the function
// the :number after the parameters is the return type of the function

// =====================================================================================
// =====================================================================================

// 2. Function expression
// The function is assigned to a variable called addFnExpression
const addFnExpression = function (a: number, b: number): number {
  return a + b; // This is a valid number
}
// Usage:
// The function can be called using the variable name
console.log(`Add Expression:`, addFnExpression(1, 2)); // This will print 3

// =====================================================================================
// =====================================================================================

// 3. Arrow function
// This is a valid arrow function
const addFnArrow = (a: number, b: number): number => {
  return a + b; // This is a valid number
}
// Usage:
console.log(`Add Arrow:`, addFnArrow(1, 2)); // This will print 3

// =====================================================================================
// =====================================================================================

// 4. Function with default parameters
// This is a valid function with default parameters
// The second parameter is optional and has a default value of 2
// If the second parameter is not passed, it will take the default value of 2
function addFnDefault(a: number, b: number = 2): number {
  return a + b; // This is a valid number
}
// Usage:
console.log(`Add Default:`, addFnDefault(1)); // This will print 3

// =====================================================================================
// =====================================================================================

// 5. Function with Optional parameters
// This is a valid function with optional parameters
// The second parameter is optional and can be omitted
// If the second parameter is not passed, it will be undefined
function addFnOptional(a: number, b?: number): number {
  return a + (b || 0); // This is a valid number
}
// Usage:
console.log(`Add Optional:`, addFnOptional(1)); // This will print 1

// =====================================================================================
// =====================================================================================

// 6. Function with Rest parameters
// This is a valid function with rest parameters
// The rest parameter is an array of numbers
function addFnRest(...args: number[]): number {
  console.log("args", args); // This will print the array of numbers
  return args.reduce((acc, curr) => acc + curr, 0); // This is a valid number
}
// Usage:
console.log(`Add Rest:`, addFnRest(1, 2, 3, 4, 5)); // This will print 15
// The function will return the sum of all the numbers in the array

// You can also use the rest parameter with other parameters
// The rest parameter MUST be the last parameter in the function
// This is a valid function with rest parameters and other parameters
// The first parameter is a number and the rest parameter is an array of numbers
function addFnRestWithOther(a: number, ...args: number[]): number {
  // so a=2 and args=[1, 2, 3, 4, 5]
  // In this case, it will return 2 * (1 + 2 + 3 + 4 + 5) = 2 * 15 = 30
  return a * args.reduce((acc, curr) => acc + curr, 0); // This is a valid number
}
// Usage:
console.log(`Add Rest With Other:`, addFnRestWithOther(2, 1, 2, 3, 4, 5)); // This will print 30


// =====================================================================================
// =====================================================================================

// 7. Function with callback
// This is a valid function with callback
// The function takes a callback as a parameter
// The callback is a function that takes a number as a parameter and returns void
// The function will call the callback with the result of the addition
function addFnCallback(a: number, b: number, callback: (result: number) => void): void {
  const result = a + b; // This is a valid number
  callback(result); // This is a valid callback
}
// Usage:
addFnCallback(1, 2, (result) => {
  console.log(`Add Callback:`, result); // This will print 3
}
);

// =====================================================================================
// =====================================================================================

// 8. Function as type
type TAddFunction = (a: number, b: number) => number; // This is a valid function type
// You can use this type to create function variables of this type
let addFunction: TAddFunction = (a, b) => a + b; // This is a valid AddFunction
// Now you can use this function variable to call the function
let resultAdd: number = addFunction(1, 2); // This is a valid number
console.log(`Result:`, resultAdd); // This will print 3
// You can also use this type to create function parameters and return types
function addNumbers(add: TAddFunction): number {
  return add(1, 2); // Here we are using the add function was passed as a parameter
}
// Usage:
let sumTotalFn: number = addNumbers(addFunction); // This is a valid number
console.log(`Total Sum:`, sumTotalFn); // This will print 3

// ======================================================================================
// ======================================================================================

// 9. Function Overloads
// The actual implementation handles all cases using `any`, 
// but the overload signatures define valid call forms.
function addFnOverload(a: number, b: number): number; // This is a valid function overload
function addFnOverload(a: string, b: string): string; // This is a valid function overload
function addFnOverload(a: any, b: any): any { // This is a valid function overload
  return a + b; // This is a valid number
}
// Usage:
console.log(`Add Overload:`, addFnOverload(1, 2)); // This will print 3
console.log(`Add Overload:`, addFnOverload('Hello ', 'World')); // This will print HelloWorld

// ======================================================================================
// ======================================================================================

// 10. Higher-Order Functions
// A higher-order function is a function that takes one or more functions as arguments or returns a function as a result
// This is a valid higher-order function
function higherOrderFn(fn: (a: number, b: number) => number): (a: number, b: number) => number {
  return function (a: number, b: number): number {
    return fn(a, b); // This is a valid number
  }
}
// Usage:
const addNewFn = (a: number, b: number): number => a + b; // This is a valid function
const addFnHigherOrder = higherOrderFn(addNewFn); // This is a valid function
console.log(`Add Higher Order:`, addFnHigherOrder(1, 2)); // This will print 3