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
