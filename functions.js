/*
Use case for:
- Functions
- Function parameters
- Return values
- Arrow functions
*/

/* ==========
    Functions
    ========= */

// Function declaration
function greeting() {
  console.log("Hello, welcome to the world of functions!");
}

// Call the function
greeting(); // Outputs: Hello, welcome to the world of functions!

// Function with parameters
function add(a, b) {
  return a + b; // Return the sum of a and b
}

// Call the function with arguments
const sum = add(5, 3);
console.log("Sum:", sum); // Outputs: Sum: 8

// Arrow function
const multiply = (x, y) => {
  return x * y; // Return the product of x and y
};

// Call the arrow function
const product = multiply(4, 6);
console.log("Product:", product); // Outputs: Product: 24

// Function with default parameters
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

// Call the function without an argument
greet(); // Outputs: Hello, Guest!

// Call the function with an argument
greet("Alice"); // Outputs: Hello, Alice!

// Function that returns a value
function square(num) {
  return num * num; // Return the square of num
}

const squaredValue = square(7);
console.log("Squared Value:", squaredValue); // Outputs: Squared Value: 49
