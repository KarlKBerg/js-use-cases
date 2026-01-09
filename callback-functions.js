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
