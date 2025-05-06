/*
* What is an Object in TypeScript?
* An object in TypeScript is a collection of key-value pairs. Each key is a string (or symbol using the symbol type) and each value can be of any type. Objects can also contain methods, which are functions that are properties of the object.
* Objects are used to store data and functions in a structured way. They can be created using object literals, constructor functions, or classes.
*/

// Basic Object example
const person = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  isEmployed: true, // This is a property of the object, it is a boolean
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};

// The example above is a javascript object, with no news, it's also valid in typescript, but using types is where the magic happens.

// Object with type
type Person = {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet: () => void; // This is a method of the object, it is a function
}
// Now you can use this type to create an object of this type
const personTyped: Person = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  isEmployed: true, // This is a property of the object, it is a boolean
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};

// You can also use interfaces to define the shape of an object
interface PersonInterface {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet: () => void; // This is a method of the object, it is a function
}
// Now you can use this interface to create an object of this type
const personInterface: PersonInterface = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  isEmployed: true, // This is a property of the object, it is a boolean
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};

// You can also use classes to define the shape of an object
class PersonClass {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  constructor(name: string, age: number, isEmployed: boolean) { // This is a constructor function
    this.name = name; // This is a property of the object, it is a string
    this.age = age; // This is a property of the object, it is a number
    this.isEmployed = isEmployed; // This is a property of the object, it is a boolean
  }
  greet() { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Now you can use this class to create an object of this type
const personClass = new PersonClass('John Doe', 30, true);

// 2. Object with optional properties
// In the examples above, we have seen how to create objects with all properties required. But it's also possible to create objects with optional properties. This is done by using the ? operator after the property name. This means that the property is optional and can be omitted when creating the object. For example:

type PersonOptional = {
  name: string; // This is a property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet?: () => void; // This is an optional method of the object, it is a function
}

// Now you can use this type to create an object of this type
const personOptional: PersonOptional = {
  name: 'John Doe', // This is a required property of the object, it is a string
  isEmployed: true, // This is a required property of the object, it is a boolean
  // age: 30, // This is an optional property of the object, it is a number
  // greet: function () { // This is an optional method of the object, it is a function
  //   console.log(`Hello, my name is ${this.name}`);
  // },
};

// You can also use interfaces to define the shape of an object with optional properties
interface PersonOptionalInterface {
  name: string; // This is a property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet?: () => void; // This is an optional method of the object, it is a function
}

// You can also use classes to define the shape of an object with optional properties
class PersonOptionalClass {
  name: string; // This is a property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  constructor(name: string, age: number | undefined, isEmployed: boolean) { // This is a constructor function
    this.name = name; // This is a property of the object, it is a string
    this.age = age; // This is an optional property of the object, it is a number
    this.isEmployed = isEmployed; // This is a property of the object, it is a boolean
  }
  greet() { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  }
}
// Now you can use this class to create an object of this type
const personOptionalClass = new PersonOptionalClass('John Doe', undefined, true); // This is a valid PersonOptionalClass
personOptionalClass.greet(); // This will print Hello, my name is John Doe

// ==================================================================================
// ==================================================================================

// 3. Object with readonly properties
// In the examples above, we have seen how to create objects with properties required and some optional properties. But it's also possible to create objects with readonly properties. This is done by using the readonly operator before the property name. This means that the property is readonly and cannot be changed after the object is created. For example:
type PersonReadonly = {
  readonly name: string; // This is a readonly property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet: () => void; // This is a method of the object, it is a function
}

// Now you can use this type to create an object of this type
const personReadonly: PersonReadonly = {
  name: 'John Doe', // This is a required property of the object, it is a string
  // age: 30, // This is an optional property of the object, it is a number
  isEmployed: true, // This is a required property of the object, it is a boolean
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};
// personReadonly.name = 'Jane Doe'; // This will give an error because name is a readonly property: Cannot assign to 'name' because it is a read-only property.

// You can also use interfaces to define the shape of an object with readonly properties
interface PersonReadonlyInterface {
  readonly name: string; // This is a readonly property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  greet: () => void; // This is a method of the object, it is a function
}

// You can also use classes to define the shape of an object with readonly properties
class PersonReadonlyClass {
  readonly name: string; // This is a readonly property of the object, it is a string
  age?: number; // This is an optional property of the object, it is a number
  isEmployed: boolean; // This is a property of the object, it is a boolean
  constructor(name: string, age: number | undefined, isEmployed: boolean) { // This is a constructor function
    this.name = name; // This is a readonly property of the object, it is a string
    this.age = age; // This is an optional property of the object, it is a number
    this.isEmployed = isEmployed; // This is a property of the object, it is a boolean
  }
  greet() { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  }
}
// Now you can use this class to create an object of this type
const personReadonlyClass = new PersonReadonlyClass('John Doe', undefined, true); // This is a valid PersonReadonlyClass
personReadonlyClass.greet(); // This will print Hello, my name is John Doe
// personReadonlyClass.name = 'Jane Doe'; // This will give an error because name is a readonly property: Cannot assign to 'name' because it is a read-only property.

// ==================================================================================
// ==================================================================================
// 4. Nested objects
// In the examples above we have seen how to create flat objects. But it's also possible to create nested objects. This is done by using the type or interface keyword to define the shape of the nested object. For example:
type Address = {
  street: string; // This is a property of the object, it is a string
  city: string; // This is a property of the object, it is a string
}
type PersonNested = {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  address: Address; // This is a nested object, it is of type Address
  greet: () => void; // This is a method of the object, it is a function
}
// Now you can use this type to create an object of this type
const personNested: PersonNested = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: { // This is a nested object, it is of type Address
    street: '123 Main St', // This is a property of the object, it is a string
    city: 'New York', // This is a property of the object, it is a string
  },
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};

// You can also use interfaces to define the shape of a nested object
interface AddressInterface {
  street: string; // This is a property of the object, it is a string
  city: string; // This is a property of the object, it is a string
}
interface PersonNestedInterface {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  address: AddressInterface; // This is a nested object, it is of type Address
  greet: () => void; // This is a method of the object, it is a function
}
// Now you can use this interface to create an object of this type
const personNestedInterface: PersonNestedInterface = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: { // This is a nested object, it is of type Address
    street: '123 Main St', // This is a property of the object, it is a string
    city: 'New York', // This is a property of the object, it is a string
  },
  greet: function () { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  },
};

// You can also use classes to define the shape of a nested object
class AddressClass {
  street: string; // This is a property of the object, it is a string
  city: string; // This is a property of the object, it is a string
  constructor(street: string, city: string) { // This is a constructor function
    this.street = street; // This is a property of the object, it is a string
    this.city = city; // This is a property of the object, it is a string
  }
}
class PersonNestedClass {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  address: AddressClass; // This is a nested object, it is of type Address
  constructor(name: string, age: number, address: AddressClass) { // This is a constructor function
    this.name = name; // This is a property of the object, it is a string
    this.age = age; // This is a property of the object, it is a number
    this.address = address; // This is a nested object, it is of type Address
  }
  greet() { // This is a method of the object, it is a function
    console.log(`Hello, my name is ${this.name}`);
  }
}
// Now you can use this class to create an object of this type
const addressClass = new AddressClass('123 Main St', 'New York'); // This is a valid AddressClass
const personNestedClass = new PersonNestedClass('John Doe', 30, addressClass); // This is a valid PersonNestedClass
personNestedClass.greet(); // This will print Hello, my name is John Doe

// ==================================================================================
// ==================================================================================

// 5. Object with index signatures
// In the examples above we have seen how to create objects with properties keyed by strings. But it's also possible to create objects with index signatures. This is done by using the [key: string]: type syntax.
// This means that the object can have any number of properties with keys of type string and values of type type. For example:
type Dictionary = {
  [key: string]: string;
};

const colors: Dictionary = {
  primary: "#ff0000",
  secondary: "#00ff00"
};

// You can also use interfaces to define the shape of an object with index signatures
interface DictionaryInterface {
  [key: string]: string;
}
const colorsInterface: DictionaryInterface = {
  primary: "#ff0000",
  secondary: "#00ff00"
};

// Types with defined properties and index signatures
type PersonWithIndexSignature = {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  [key: string]: string | number; // This is an index signature, it means that the object can have any number of properties with keys of type string and values of type string or number
}
// Now you can use this type to create an object of this type
const personWithIndexSignature: PersonWithIndexSignature = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: '123 Main St', // This is a property of the object, it is a string
  phone: 1234567890, // This is a property of the object, it is a number
};

console.log('phone', personWithIndexSignature.phone); // This will print 1234567890
console.log('address', personWithIndexSignature.address); // This will print 123 Main St

// You can also use interfaces to define the shape of an object with index signatures
interface PersonWithIndexSignatureInterface {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  [key: string]: string | number; // This is an index signature, it means that the object can have any number of properties with keys of type string and values of type string or number
}
// Now you can use this interface to create an object of this type
const personWithIndexSignatureInterface: PersonWithIndexSignatureInterface = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: '123 Main St', // This is a property of the object, it is a string
  phone: 1234567890, // This is a property of the object, it is a number
};
console.log('phone', personWithIndexSignatureInterface.phone); // This will print 1234567890
console.log('address', personWithIndexSignatureInterface.address); // This will print 123 Main St

// type with default properties and nested signatures
type PersonWithDefaultPropertiesAndNested = {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  address: {
    [key: string]: string; // This is an index signature, it means that the object can have any number of properties with keys of type string and values of type string
  }
}
// Now you can use this type to create an object of this type
const personWithDefaultPropertiesAnd: PersonWithDefaultPropertiesAndNested = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: { // This is a property of the object, it is an object with keys of type string and values of type string
    street: '123 Main St', // This is a property of the object, it is a string
    city: 'New York', // This is a property of the object, it is a string
  },
}
console.log('address', personWithDefaultPropertiesAnd.address); // This will print { street: '123 Main St', city: 'New York' }
console.log('address', personWithDefaultPropertiesAnd.address.street); // This will print 123 Main St

// You can also use interfaces to define the shape of an object with index signatures
interface PersonWithDefaultPropertiesAndNestedInterface {
  name: string; // This is a property of the object, it is a string
  age: number; // This is a property of the object, it is a number
  address: {
    [key: string]: string; // This is an index signature, it means that the object can have any number of properties with keys of type string and values of type string
  }
}
// Now you can use this interface to create an object of this type
const personWithDefaultPropertiesAndNestedInterface: PersonWithDefaultPropertiesAndNestedInterface = {
  name: 'John Doe', // This is a property of the object, it is a string
  age: 30, // This is a property of the object, it is a number
  address: { // This is a property of the object, it is an object with keys of type string and values of type string
    street: '123 Main St', // This is a property of the object, it is a string
    city: 'New York', // This is a property of the object, it is a string
  },
}
console.log('address', personWithDefaultPropertiesAndNestedInterface.address); // This will print { street: '123 Main St', city: 'New York' }
console.log('address', personWithDefaultPropertiesAndNestedInterface.address.street); // This will print 123 Main St