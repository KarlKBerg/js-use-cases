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

// Checking required fields in an object
const requiredFields = ["name", "age", "profession", "email"];
const hasAllFields = requiredFields.every((field) => userKeys.includes(field));
console.log("Has all required fields:", hasAllFields); // Outputs: Has all required fields: false

/* ==========
    .Object.values()
    ========= */

// Get all values of the user object
const userValues = Object.values(user);
console.log("User Values:", userValues); // Outputs: User Values: [ 'John Doe', 30, 'Developer' ]

/* ==========
    .Object.entries()
    ========= */

// Get all entries (key-value pairs) of the user object
const userEntries = Object.entries(user);
console.log("User Entries:", userEntries);
// Outputs: User Entries: [ [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'profession', 'Developer' ] ]
