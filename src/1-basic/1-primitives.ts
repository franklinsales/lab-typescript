/*
* What are primitive types?
* Primitive types are the most basic data types in TypeScript. They are not objects and have no methods.
* They are immutable and represent a single value.
* The primitive types in TypeScript are:
*/

// 1. number: Represents both integer and floating-point numbers.
let age: number = 25;
let negativeValue: number = -10; // You can use negative numbers
let pi: number = 3.14;
let hex: number = 0xfff; // You can use hexadecimal numbers using the 0x prefix
let binary: number = 0b1010; // You can use binary numbers using the 0b prefix
let octal: number = 0o744; // You can use octal numbers using the 0o prefix

// You can use _ to separate digits in numbers for better readability
let creditCard: number = 123_456_789_012_3456; // This is a valid number
// let creditCard: number = 123_456_789_012_3456.78; // This is not a valid number

// Difference between number and Number
// number is a primitive type, while Number is an object wrapper around the number primitive type.
// Number is used to create number objects, but it is not commonly used in TypeScript.
// It is recommended to use the number primitive type instead of the Number object.
// Example of using Number object
let numObj: Number = new Number(25); // This creates a Number object
// However, it is not recommended to use Number object in TypeScript.
// It is better to use the number primitive type.

// Observation: JavaScript/TypeScript Number Limits:
// In TypeScript, number is the same as JavaScript's Number type, which is a 64-bit floating point number (IEEE 754). 
// This affects what integers can be safely and precisely represented.
// Number.MAX_SAFE_INTEGER //  9007199254740991 (2^53 - 1)
// Number.MIN_SAFE_INTEGER // -9007199254740991 (-(2^53 - 1))
// Why "safe"? Because JavaScript uses 64-bit floating-point numbers to represent all numbers,
// which can lead to precision issues when dealing with very large integers.

// ==================================================================================
// ==================================================================================

// 2. bigint: Represents integers with arbitrary precision. 
// It can be used to represent large integers that are beyond the range of the number type.
let bigInt: bigint = 1234567890123456789012345678901234567890n; // The n suffix indicates that this is a bigint
// It is important to note that you cannot mix bigint and number types in arithmetic operations.
// BigInt is always a whole number, so you cannot use it with decimal numbers.
// Example of using BigInt
let bigInt1: bigint = 1234567890123456789012345678901234567890n;
let bigInt2: bigint = 9876543210987654321098765432109876543210n;
let sum: bigint = bigInt1 + bigInt2; // This is valid
// let sum: bigint = bigInt1 + 1; // This is not valid, you cannot mix bigint and number types
// let sum: bigint = bigInt1 + 1n; // This is valid, you can mix bigint and bigint types
// let sum: bigint = bigInt1 + BigInt(1); // This is valid, you can convert number to bigint using BigInt function
// let sum: bigint = bigInt1 + BigInt(1.5); // This is not valid, you cannot convert decimal number to bigint

// ==================================================================================
// ==================================================================================

// 3. string: Represents a sequence of characters. Strings can be enclosed in single quotes, double quotes, or backticks (template literals).
let personName: string = 'John Doe';
let greeting: string = "Hello, World!";
let templateLiteral: string = `Hello, ${personName}!`; // Template literals allow for string interpolation
let multilineString: string = `This is a string
that spans multiple lines.`; // Template literals can span multiple lines
// You can use escape characters in strings
let escapedString: string = 'This is a string with an escape character: \n'; // \n is a newline character
// You can use string methods to manipulate strings
// strings are immutable in TypeScript, so you cannot change the original string
let upperCaseName: string = personName.toUpperCase(); // This creates a new string with the uppercase version of the original string

// ==================================================================================
// ==================================================================================

// 4. boolean: Represents a logical value that can be either true or false.
let isActive: boolean = true;
let isLoggedIn: boolean = false;
let isComplete: boolean = true; // This is a boolean value

// ==================================================================================
// ==================================================================================

// 5. null: Represents the intentional absence of any object value. It is a primitive type in TypeScript.
let emptyValue: null = null; // This is a null value
// null is often used to indicate that a variable has no value or that an object is not initialized.
// It is important to note that null is different from undefined.
// null is an object type in JavaScript, but it is a primitive type in TypeScript.

// ==================================================================================
// ==================================================================================

// 6. undefined: Represents a variable that has been declared but has not yet been assigned a value.
let uninitializedValue: undefined; // This is an undefined value
// It is important to note that undefined is different from null.
// undefined is often used to indicate that a variable has not been initialized or that a function does not return a value.
// It is also important to note that undefined is a type in TypeScript, while null is an object type in JavaScript.

// ==================================================================================
// ==================================================================================

// 7. symbol: Represents a unique and immutable value that can be used as an identifier for object properties.
// Symbols are often used to create private properties in objects.
let uniqueSymbol: symbol = Symbol('uniqueIdentifier'); // This creates a new symbol
let anotherSymbol: symbol = Symbol('uniqueIdentifier'); // This creates another new symbol
// Symbols are unique, even if they have the same description
console.log(uniqueSymbol === anotherSymbol); // This will print false
// You can use symbols as object property keys
let obj: { [key: symbol]: string } = {};
obj[uniqueSymbol] = 'This is a unique value'; // This creates a new property with a symbol key
// You can use symbols to create private properties in objects
let privateSymbol: symbol = Symbol('privateProperty');
let objWithPrivateProperty = {
  [privateSymbol]: 'This is a private property' // This creates a weakly private property, but it is not truly private
  // because it can be accessed using the symbol key and the objWithPrivateProperty() function, 
  // so it is a technique for creating private properties of literal objects in JavaScript.
}
// You can access the private property using the symbol key
console.log(objWithPrivateProperty[privateSymbol]); // This will print 'This is a private property'
// However, you cannot access the private property using a string key
// console.log(objWithPrivateProperty['privateProperty']); // This will print undefined

// ==================================================================================
// ==================================================================================
