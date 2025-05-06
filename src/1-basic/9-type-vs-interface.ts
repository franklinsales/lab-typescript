/*
* Types vs Interfaces
* Types and Interfaces are two ways to define the shape of data in TypeScript.
* They are similar in many ways, but there are some differences between them.
* In general, you can use either one to define the shape of data, but there are some cases where one is more appropriate than the other.
* In this section, we will explore the differences between Types and Interfaces in TypeScript.
*/

// =====================================================================
// =====================================================================

// Basic Syntax
type UserTypeSys = {
  name: string;
  age: number;
  // You can also define methods in a type
  greet: () => string;
};

interface UserInterfaceSys {
  name: string;
  age: number;
  // You can also define methods in an interface
  greet: () => string;
}
// The basic syntax for defining a type and an interface is similar.
// You can define a type using the type keyword and an interface using the interface keyword.
const userType: UserTypeSys = {
  name: "John",
  age: 25,
  greet: () => `Hello, my name is ${userType.name} and I am ${userType.age} years old.`,
};
const userInterface: UserInterfaceSys = {
  name: "John",
  age: 25,
  greet: () => `Hello, my name is ${userInterface.name} and I am ${userInterface.age} years old.`,
};
console.log("Using Type:", userType.greet()); // Output: Hello, my name is John and I am 25 years old.
console.log("Using Interface:", userInterface.greet()); // Output: Hello, my name is John and I am 25 years old.
// Both can have properties and methods, and you can use them to define the shape of data.

// =====================================================================
// =====================================================================

// Extending Types and Interfaces
// You can extend both: types and interfaces, but the syntax is different.

// With interfaces, you can use the 'extends' keyword to create a new interface that inherits from an existing interface.
interface UserPhoneSys {
  phone: string;
}
interface UserInterfaceSysExtended extends UserInterfaceSys, UserPhoneSys {
  email: string;
}
const userInterfaceExtended: UserInterfaceSysExtended = {
  name: "John",
  age: 25,
  email: "john@email.com",
  phone: "123-456-7890",
  greet: () => `Hello, my name is ${userInterfaceExtended.name} and I am ${userInterfaceExtended.age} years old. My email is ${userInterfaceExtended.email} and my phone number is ${userInterfaceExtended.phone}.`,
};
console.log("Using Extended Interface:", userInterfaceExtended.greet()); // Output: Hello, my name is John and I am 25 years old.

// With types, you can use the '&' operator to create a new type that combines multiple types.
type UserTypeSysExtended = UserTypeSys & {
  email: string;
} & {
  phone: string;
};
const userTypeExtended: UserTypeSysExtended = {
  name: "Ana",
  age: 25,
  email: "ana@email.com",
  phone: "124-456-7890",
  greet: () => `Hello, my name is ${userTypeExtended.name} and I am ${userTypeExtended.age} years old. My email is ${userTypeExtended.email} and my phone number is ${userTypeExtended.phone}.`,
};
console.log("Using Extended Type:", userTypeExtended.greet()); // Output: Hello, my name is John and I am 25 years old.

// Both work well for combining multiple data-types(types or interfaces) into one. However:
// - The syntax is different ('extends' vs '&')
// - Interfaces uses the concept of inheritance, while types uses the concept of composition (intersection types), so types can be more flexible in some cases, like when you want mixing multiple types together, including primitive types, union types, etc.

// =====================================================================
// =====================================================================

// Declaration Merging
// Interfaces support declaration merging, which means you can define the same interface multiple times and TypeScript will merge them into a single interface.
interface UserInterfaceSysToMerge {
  name: string;
  age: number;
  greet: () => string;
}
interface UserInterfaceSysToMerge {
  email: string;
  phone: string;
}
const userInterfaceMerged: UserInterfaceSysToMerge = {
  name: "John",
  age: 25,
  email: "john@email.com",
  phone: "123-456-7890",
  greet: () => `Hello, my name is ${userInterfaceMerged.name} and I am ${userInterfaceMerged.age} years old. My email is ${userInterfaceMerged.email} and my phone number is ${userInterfaceMerged.phone}.`,
};
console.log("Using Merged Interface:", userInterfaceMerged.greet()); // Output: Hello, my name is John and I am 25 years old. My email is

type UserTypeToMerge = {
  name: string;
  age: number;
};
// type UserTypeToMerge = {
//   email: string;
//   phone: string;
// }; // Error: Duplicate identifier 'UserTypeToMerge'.

// So, you cannot do the same with types. If you try to define the same type multiple times, TypeScript will throw an error.

// ✅ Use interface if you’re creating public APIs or libraries where extending types later is desirable.

// =====================================================================
// =====================================================================

// Union and Intersection Types
// Types can be used to create union and intersection types, while interfaces cannot.
type StringOrNumber = string | number; // Union type

//✅ Use type when dealing with primitives, unions, or tuples. Because interfaces are designed for object shapes, and they don’t handle unions, or intersections of primitive types.

// =====================================================================
// =====================================================================

// Class Types
// Both types and interfaces can be used to define the shape of a class, but there are some differences.
// When using a type, you can use the 'implements' keyword to implement the type in a class.
type UserTypeClass = {
  name: string;
  age: number;
  greet: () => string;
};
class UserTypeClassImpl implements UserTypeClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const userTypeClass = new UserTypeClassImpl("John", 25);
console.log("Using Type Class:", userTypeClass.greet()); // Output: Hello, my name is John and I am 25 years old.

// When using an interface, you can also use the 'implements' keyword to implement the interface in a class.
interface UserInterfaceClass {
  name: string;
  age: number;
  greet: () => string;
}
class UserInterfaceClassImpl implements UserInterfaceClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const userInterfaceClass = new UserInterfaceClassImpl("John", 25);
console.log("Using Interface Class:", userInterfaceClass.greet()); // Output: Hello, my name is John and I am 25 years old.

// Both can be used to define the shape of a class, but interfaces are more commonly used for this purpose, because they were designed with OOP in mind. And types with classes has some limitations, like you cannot use the 'extends' keyword to create a new type that inherits from an existing type. You can only use the '&' operator to create a new type that combines multiple types. Types cannot be merged like interfaces.

// ✅ Use interface when designing class contracts.

// =====================================================================
// =====================================================================

// Examples: Real-World Scenarios
// Example 1: API Response Discriminated Union (Use type)
type ApiResponse = 
  | { status: "success"; data: string }
  | { status: "error"; message: string };
// Here we are using a type to define an API response that can be either a success or an error. This is a common use case for types, as they allow us to create union types that can represent multiple possible shapes of data.

function handleApiResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.error("Error:", response.message);
  }
}
const successResponse: ApiResponse = { status: "success", data: "Data received" };
const errorResponse: ApiResponse = { status: "error", message: "Error occurred" };
handleApiResponse(successResponse); // Output: Data: Data received
handleApiResponse(errorResponse); // Output: Error: Error occurred

//Example 2: Extensible Plugin System (Use interface)
// Here we are using interface to define a plugin system that can be extended with new plugins. This is a common use case for interfaces, as they allow us to create extensible APIs that can be easily extended with new functionality.
interface CustomPlugin {
  name: string;
  version: string;
  init: () => void;
}

// You can extend the CustomPlugin interface to create a new plugin with additional properties or methods.
interface CustomPluginExtended extends CustomPlugin {
  destroy: () => void;
}
const myPlugin: CustomPluginExtended = {
  name: "MyPlugin",
  version: "1.0.0",
  init: () => console.log("Plugin initialized"),
  destroy: () => console.log("Plugin destroyed"),
};
myPlugin.init(); // Output: Plugin initialized
myPlugin.destroy(); // Output: Plugin destroyed

// ======================================================================
// ======================================================================

// Summary
// - Use type when you need to define a union or intersection type, or when you want to create a type alias for a primitive type.
// - Use interface when you want to define the shape of an object, especially when you want to create a public API or library that can be easily extended.
// - Use interface when you want to create a class contract or when you want to take advantage of declaration merging.
// - Use type when you want to create a more complex type that includes unions, intersections, or tuples.
// - Use type when you want to create a closed type that cannot be extended or merged.