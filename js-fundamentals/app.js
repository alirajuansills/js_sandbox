/* Chapter 7. Variables - var. let & const */

// // var, let, const

// var name = "John Doe";

// name = "Steve Smith";

// // Init var
// var greeting;

// // letters, numbers, _, $
// // can not start with number

// // multi word vars
// var firstName = "John"; // Camel case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case

// // LET
// let name = "John Doe";
// name = "John Doe";

// // Const
// // Can't be reassinged
//  const name = "John";

// const person = {
//   name: "John",
//   age: 30,
// };

// person.name = "Sara";
// person.age = 32;

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// you can change arrays and objects that are assign to variables using const

/* Chapter 8: Data Types in JavaScript */

/* 
Primitive Data Types: 
* Stored directly in the location the variable accesses
* Stored on the stack 
*/

/* 
Reference Data Types: 
* Accessed by reference
* Objects that are stored on the heap
* A pointer to a location in memory 
*/

/* 
Primitive Data Types
* String
* Number
* Boolean
* Null
* Undefined
* Symbols (ES6)
*/

/* 
Reference Data Types / Objects
* Arrays
* Object Literals
* Functions
* Dates
* Anything Else....
*/

/* 
Dynamically Typed Language
* Types are associated with values not variables
* The same variable can hold multiple types
* We do not need to specify types
* Most other languages are statically typed (Java, C#, C++)
* There are supersets of JS and addons to allow static typing (TypeScript, Flow)
*/

// PRIMITIVE

// // String
// const name = "John Doe";
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ["moves", "music"];
// // Object literal
// const address = {
//   city: "Boston",
//   state: "MA",
// };
// const today = new Date();

/* Chapter 9: Type Conversion */

let val;

// Number to string
val = String(5);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);
// toString()
val = (5).toString();
val = true.toString();
// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");
// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
