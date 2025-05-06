/*
* Arrays in TypeScript
* An array is a collection of elements of elements stored in a single variable.
* These elements are ordered and can be accessed using an index.
*/

// In javascript:
let numbers = [1, 2, 3, 4, 5]; // This is a valid array of numbers

// In typescript:
let numbersArray: number[] = [1, 2, 3, 4, 5]; // This is a valid array of numbers
let stringsArray: string[] = ['a', 'b', 'c']; // This is a valid array of strings
let booleanArray: boolean[] = [true, false, true]; // This is a valid array of booleans
let mixedArray: (number | string)[] = ['d', 1, 'a', 2, 'b', 4, 5]; // This is a valid array of numbers and strings. See the elements doen't need to follow the order of the types
let anyArray: any[] = [1, 'a', true]; // This is a valid array of any type
let objectArray: { id: number, name: string }[] = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]; // This is a valid array of objects
let tupleArray: [number, string][] = [[1, 'a'], [2, 'b']]; // This is a valid array of tuples
let arrayOfArrays: number[][] = [[1, 2], [3, 4]]; // This is a valid array of arrays
let arrayOfObjects: { id: number, name: string }[][] = [[{ id: 1, name: 'a' }, { id: 2, name: 'b' }]]; // This is a valid array of arrays of objects
let arrayOfTuples: [number, string][][] = [[[1, 'a'], [2, 'b']]]; // This is a valid array of arrays of tuples

// You can also use the Array<T> syntax to create arrays
let numbersArray2: Array<number> = [1, 2, 3, 4, 5]; // This is a valid array of numbers
let stringsArray2: Array<string> = ['a', 'b', 'c']; // This is a valid array of strings
let booleanArray2: Array<boolean> = [true, false, true]; // This is a valid array of booleans
let mixedArray2: Array<number | string> = [1, 'a', 2, 'b', 'c']; // This is a valid array of numbers and strings. See the elements doen't need to follow the order of the types
let anyArray2: Array<any> = [1, 'a', true]; // This is a valid array of any type
let objectArray2: Array<{ id: number, name: string }> = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]; // This is a valid array of objects
let tupleArray2: Array<[number, string]> = [[1, 'a'], [2, 'b']]; // This is a valid array of tuples
let arrayOfArrays2: Array<number[]> = [[1, 2], [3, 4]]; // This is a valid array of arrays
let arrayOfObjects2: Array<{ id: number, name: string }[]> = [[{ id: 1, name: 'a' }, { id: 2, name: 'b' }]]; // This is a valid array of arrays of objects
let arrayOfTuples2: Array<[number, string][]> = [[[1, 'a'], [2, 'b']]]; // This is a valid array of arrays of tuples

// Common array methods
const colorsArr: string[] = ['red', 'green', 'blue'];
console.log(colorsArr.length); // This will print 3
console.log(colorsArr[0]); // This will print 'red'
//modify the array
colorsArr[0] = 'yellow'; // This will change the first element to 'yellow'
console.log(colorsArr); // This will print ['yellow', 'green', 'blue']
//add an element to the end of the array
colorsArr.push('purple'); // This will add 'purple' to the end of the array
console.log(colorsArr); // This will print ['yellow', 'green', 'blue', 'purple']
//add an element to the beginning of the array
colorsArr.unshift('orange'); // This will add 'orange' to the beginning of the array
console.log(colorsArr); // This will print ['orange', 'yellow', 'green', 'blue', 'purple']
//remove the last element of the array
colorsArr.pop(); // This will remove the last element of the array
console.log(colorsArr); // This will print ['orange', 'yellow', 'green', 'blue']
//remove the first element of the array
colorsArr.shift(); // This will remove the first element of the array
console.log(colorsArr); // This will print ['yellow', 'green', 'blue']
//remove an element from the array
colorsArr.splice(1, 1); // This will remove the second element of the array
console.log(colorsArr); // This will print ['yellow', 'blue']
//find an element in the array
let index = colorsArr.indexOf('yellow'); // This will find the index of 'yellow' in the array
console.log(index); // This will print 0
//find an element in the array
let index2 = colorsArr.indexOf('green'); // This will find the index of 'green' in the array
console.log(index2); // This will print -1
//check if an element is in the array
let isInArray = colorsArr.includes('yellow'); // This will check if 'yellow' is in the array
console.log(isInArray); // This will print true
//check if an element is in the array
let isInArray2 = colorsArr.includes('green'); // This will check if 'green' is in the array
console.log(isInArray2); // This will print false
//sort the array

// itarete over the array
for (let i = 0; i < colorsArr.length; i++) {
  console.log(colorsArr[i]); // This will print each element of the array
}
// itarete over the array
for (let color of colorsArr) {
  console.log(color); // This will print each element of the array
}
// itarete over the array
colorsArr.forEach((color, index) => {
  console.log(`Index: ${index}, Color: ${color}`); // This will print each element of the array
});
// itarete over the array
colorsArr.map((color, index) => {
  console.log(`Index: ${index}, Color: ${color}`); // This will print each element of the array
});
// filter the array
let filteredColors = colorsArr.filter(color => color !== 'yellow'); // This will filter the array to remove 'yellow'
console.log(filteredColors); // This will print ['blue']

// Using ReadonlyArray
const readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5]; // This is a valid readonly array of numbers
// readonlyArray[0] = 10; // This will give an error because the array is readonly
// readonlyArray.push(6); // This will give an error because the array is readonly
// readonlyArray.pop(); // This will give an error because the array is readonly
// readonlyArray.shift(); // This will give an error because the array is readonly
// readonlyArray.unshift(0); // This will give an error because the array is readonly

let readonlyArrayNotInitialized: ReadonlyArray<number>; // This is a valid readonly array of numbers
readonlyArrayNotInitialized = [1, 2, 3, 4, 5]; // Here we are initializing the readonly array
// readonlyArrayNotInitialized[0] = 10; // This will give an error because the array is readonly
// readonlyArrayNotInitialized.push(6); // This will give an error because the array is readonly