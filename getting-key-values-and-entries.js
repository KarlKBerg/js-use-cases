/*
Use case for:
- .Object.keys()
- .Object.values()
- .Object.entries()
*/

/* ==========
    .Object.keys()
    ========= */

const user = {
  name: "John Doe",
  age: 30,
  profession: "Developer",
};

// Get all keys of the user object
const userKeys = Object.keys(user);
console.log("User Keys:", userKeys); // Outputs: User Keys: [ 'name', 'age', 'profession' ]

/* ==========
    .Object.values()
    ========= */

// Get all values of the user object
const userValues = Object.values(user);
console.log("User Values:", userValues); // Outputs: User Values: [ 'John Doe', 30, 'Developer' ]
