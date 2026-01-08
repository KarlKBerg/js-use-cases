/*
Use case for:
- .length property of strings and arrays
- .slice() method for strings and arrays
- .indexOf() method for strings and arrays
- .includes() method for strings and arrays
- .toUpperCase() method for strings
- .toLowerCase() method for strings
- .trim() method for strings
- .split() method for strings
- .toString() method for numbers
- .toFixed() method for numbers
*/

/* =========================
    STRING PROPERTIES & METHODS
    ========================= */

// Example string
const exampleString = "  Hello, World!  ";

// .length property
console.log("Length of string:", exampleString.length); // Outputs: Length of string: 17

// .slice() method
console.log("Sliced string:", exampleString.slice(2, 7)); // Outputs: Sliced string: llo,

// .indexOf() method
console.log("Index of 'World':", exampleString.indexOf("World")); // Outputs: Index of 'World': 9

// .includes() method
console.log("Includes 'Hello':", exampleString.includes("Hello")); // Outputs: Includes 'Hello': true

// .toUpperCase() method
console.log("Uppercase string:", exampleString.toUpperCase()); // Outputs: Uppercase string:   HELLO, WORLD!

// .toLowerCase() method
console.log("Lowercase string:", exampleString.toLowerCase()); // Outputs: Lowercase string:   hello, world!

// .trim() method
console.log("Trimmed string:", exampleString.trim()); // Outputs: Trimmed string: Hello, World!

// .split() method
console.log("Split string:", exampleString.trim().split(", ")); // Outputs: Split string: [ 'Hello', 'World!' ]

/* =========================
    NUMBER METHODS
    ========================= */

// Example number
const exampleNumber = 123.456789;

// .toString() method
console.log("Number as string:", exampleNumber.toString()); // Outputs: Number as string: 123.456789

// .toFixed() method
console.log("Number fixed to 2 decimals:", exampleNumber.toFixed(2)); // Outputs: Number fixed to 2 decimals: 123.46
console.log("Number fixed to 4 decimals:", exampleNumber.toFixed(4)); // Outputs: Number fixed to 4 decimals: 123.4568

// Math methods for additional number manipulations
console.log("Rounded number:", Math.round(exampleNumber)); // Outputs: Rounded number: 123
console.log("Floored number:", Math.floor(exampleNumber)); // Outputs: Floored number: 123
console.log("Ceiled number:", Math.ceil(exampleNumber)); // Outputs: Ceiled number: 124
console.log("Random number between 0 and 1:", Math.random()); // Outputs: Random number between 0 and 1: <random_value>
console.log("Random number between 0 and 10:", Math.floor(Math.random() * 10)); // Outputs: Random number between 0 and 10: <random_value>
