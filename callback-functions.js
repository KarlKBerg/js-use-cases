/*
Use case for:
- callback functions
- anonymous functions
- anonymous arrow functions
- passing functions as arguments
*/

/* ==========
    CALLBACK FUNCTIONS
    ========= */
// A function that takes another function as a parameter (callback)
function greetUser(name, callback) {
  const greetingMessage = "Hello, " + name + "!";
  callback(greetingMessage); // Call the callback function with the greeting message
}

// callback function defined separately
function displayMessage(message) {
  console.log(message); // Outputs the message
}
// Using the greetUser function with displayMessage as a callback
greetUser("Alice", displayMessage); // Outputs: Hello, Alice!

// Using the greetUser function with an anonymous function as a callback
greetUser("Bob", function (message) {
  console.log("Anonymous function says: " + message);
}); // Outputs: Anonymous function says: Hello, Bob!

// Using the greetUser function with an anonymous arrow function as a callback
greetUser("Charlie", (message) => {
  console.log("Arrow function says: " + message);
}); // Outputs: Arrow function says: Hello, Charlie!

/* ==========
    ANONYMOUS FUNCTIONS
    ========= */
// An anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};
console.log("Sum using anonymous function: " + add(5, 3)); // Outputs: Sum using anonymous function: 8

// An anonymous arrow function assigned to a variable
const multiply = (a, b) => a * b;
console.log("Product using arrow function: " + multiply(5, 3)); // Outputs: Product using arrow function: 15

/* ==========
    PASSING FUNCTIONS AS ARGUMENTS
    ========= */
// A function that processes two numbers using a provided operation function
function processNumbers(num1, num2, operation) {
  return operation(num1, num2); // Call the operation function with num1 and num2
}

// Using processNumbers with different operations
const sumResult = processNumbers(10, 20, (a, b) => a + b);
console.log("Sum result: " + sumResult); // Outputs: Sum result: 30

const productResult = processNumbers(10, 20, (a, b) => a * b);
console.log("Product result: " + productResult); // Outputs: Product result: 200
