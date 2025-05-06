/*
* Tuples
* In TypeScript, a tuple is a data structure that allows you to:
* - store multiple values
* - of different types
* - in a single variable
* - in a specific order (arrays cannot have a fixed order)
* - and with a fixed length (arrays can have a variable length)
*/

// IMPORTANT: Tuples are a special type of array, so even though they are called "tuples", they are still arrays under the hood. That way, even they have a fixed length, you can add or remove elements from them using array methods, and TypeScript will not throw an error. 

// A good way to avoid this is to use the readonly keyword, which makes the tuple immutable. More details below.

// =====================================================================
// =====================================================================

// Basic Syntax
//let tupleName: [type1, type2, ...] = [value1, value2, ...];

// A tuple is defined using square brackets [] and can contain values of different types.
let tuple: [number, string, boolean] = [1, "Hello", true];

// if you try to assign a value of a different type, TypeScript will throw an error
//let tuple: [number, string, boolean] = [1, "Hello", 2]; // Error: Type 'number' is not assignable to type 'boolean'.

// if you try to assign less or more values than the tuple type, TypeScript will throw an error
//let tuple: [number, string] = [1, "Hello", true]; // Error: Type 'boolean' is not assignable to type 'string'.

// if you try to assign values in a different order, TypeScript will throw an error
//let tuple: [number, string, boolean] = ["Hello", 1, true]; // Error: Type 'string' is not assignable to type 'number'.

// =====================================================================
// =====================================================================

// Accessing Tuple Elements
// You can access tuple elements using their index, just like arrays.
let tuple2: [number, string, boolean] = [1, "Hello", true];
console.log(tuple[0]); // Output: 1
console.log(tuple[1]); // Output: Hello

// You can also use destructuring to access tuple elements.
let [num, str, bool] = tuple2;
console.log(num); // Output: 1
console.log(str); // Output: Hello
console.log(bool); // Output: true

// =====================================================================
// =====================================================================

// Tuple with Optional Elements
// You can also define typles with optional elements using the ? operator.
let tuple3: [number, string?, boolean?] = [1]; // valid
let tuple4: [number, string?, boolean?] = [1, "Hello"]; // valid
let tuple5: [number, string?, boolean?] = [1, "Hello", true]; // valid
//let tuple6: [number, string?, boolean?] = ["Hello", 1]; // Error: Type 'string' is not assignable to type 'number'.

// =====================================================================
// =====================================================================

// Named Tuples (for readability)
// You can also define named tuples for better readability.
type PersonTuple = [name: string, age: number, isStudent: boolean];
let personTuple: PersonTuple = ["John", 25, true];
// This doesn’t change behavior but improves code readability, especially in editors with good TypeScript support.

// So you cannot access the tuple elements using the name of the tuple, it's just for readability
// console.log(personTuple.name); // Error: Property 'name' does not exist on type 'PersonTuple'.
// console.log(personTuple[name]); // Output: John
console.log(personTuple[0]); // Output: John

// =====================================================================
// =====================================================================

// Tuple with Rest Elements
// You can also define tuples with rest elements using the ... operator.

let tuple7: [number, ...string[]] = [1, "Hello", "World"]; // valid
let tuple8: [number, ...string[]] = [1]; // valid
//let tuple9: [number, ...string[]] = []; // Error: Type '[]' is not assignable to type '[number, ...string[]]'.
//let tuple10: [number, ...string[]] = [1, 2]; // Error: Type 'number' is not assignable to type 'string'.
//let tuple11: [number, ...string[]] = [1, "Hello", 2]; // Error: Type 'number' is not assignable to type 'string'.

let tuple12: [...string[]] = ["Hello", "World"]; // valid
let tuple13: [...string[]] = []; // valid

// ======================================================================
// =====================================================================
// Readonly Tuples
// You can also define readonly tuples using the readonly keyword. This makes the tuple immutable, meaning you cannot change its elements after it is created. This is useful for defining constants or for preventing accidental changes to the tuple.
let readonlyTuple: readonly [number, string, boolean] = [1, "Hello", true];
let notReadonlyTuple: [number, string, boolean] = [1, "Hello", true];
// readonlyTuple[0] = 2; // Error: Index signature in type 'readonly [number, string, boolean]' only permits reading.
// readonlyTuple.push(2); // Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'.
notReadonlyTuple[0] = 2; // valid
notReadonlyTuple.push(2); // valid
console.log("notReadonlyTuple", notReadonlyTuple); // Output: [2, "Hello", true, 2]