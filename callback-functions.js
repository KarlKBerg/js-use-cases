/*
Use case for:
- callback functions
- anonymous functions
- anonymous arrow functions
- passing functions as arguments
- .forEach() method
- .map() method
- .filter() method
- .find() method
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

// Methods (.forEach, .map, .filter) that use callback functions

/* ==========
    .forEach() METHOD
    ========= */
// Using .forEach() to iterate over an array
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit, index) {
  console.log("Fruit " + index + ": " + fruit);
});
// Outputs:
// Fruit 0: apple
// Fruit 1: banana
// Fruit 2: cherry

/* ==========
    .map() METHOD
    ========= */
// Using .map() to create a new array with modified values
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers: " + squaredNumbers); // Outputs: Squared Numbers: 1,4,9,16,25

/* ==========
    .filter() METHOD
    ========= */
// Using .filter() to create a new array with elements that meet a condition
const mixedNumbers = [10, 15, 20, 25, 30];
const evenNumbers = mixedNumbers.filter(function (num) {
  return num % 2 === 0; // Keep only even numbers
});
console.log("Even Numbers: " + evenNumbers); // Outputs: Even Numbers: 10,20,30

/* ==========
    .find() METHOD
    ========= */
// Using .find() to locate the first element that meets a condition
const people = [
  { name: "John", age: 28 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 32 },
];
const personOver30 = people.find((person) => person.age > 30);
console.log("Person over 30: " + JSON.stringify(personOver30)); // Outputs: Person over 30: {"name":"Jim","age":32}
