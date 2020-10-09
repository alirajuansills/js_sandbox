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

// let val;

// // Number to string
// val = String(5);
// val = String(4 + 4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1, 2, 3, 4]);
// // toString()
// val = (5).toString();
// val = true.toString();
// // String to number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello");
// val = Number([1, 2, 3]);

// val = parseInt("100.30");
// val = parseFloat("100.30");
// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

/* Chapter 10 Numbers & The Math Object */

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1); // commonly used

// console.log(val);

/* Chapter 11 String Methods & Concatenation */

const firstName = "William";
const lastName = "Johnson";
const age = 27;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Ali ";
val += "Sills";

val = "Hello, my name is" + firstName + " and I am " + age;

// Escaping
val = "that's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");
// Get last char
val = firstName.charAt(firstName);

console.log(val);
