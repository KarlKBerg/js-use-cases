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

// calculating total price in shopping cart
const shoppingCart = {
  laptop: 1200,
  mouse: 25,
  keyboard: 75,
};

const prices = Object.values(shoppingCart); // [1200, 25, 75]
let totalCost = 0;

prices.forEach((price) => {
  totalCost += price;
});

console.log("Total cost:", totalCost); // 1300
/* ==========
    .Object.entries()
    ========= */

// Get all entries (key-value pairs) of the user object
const userEntries = Object.entries(user);
console.log("User Entries:", userEntries);
// Outputs: User Entries: [ [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'profession', 'Developer' ] ]

// Iterating over entries using for...in loop
const person = {
  name: "Alice",
  age: 30,
  city: "London",
};

for (const propertyKey in person) {
  const propertyValue = person[propertyKey];
  console.log("Key:", propertyKey, "| Value:", propertyValue);
}

// iterating over entries using forEach() (More modern approach)
const person1 = {
  name: "Alice",
  age: 30,
  city: "London",
};

const entries = Object.entries(person1);

entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  console.log("Key:", key, "| Value:", value);
});

// Destructuring in forEach loop
const person2 = {
  name: "Alice",
  age: 30,
  city: "London",
};

const entries2 = Object.entries(person2);

entries2.forEach(([key, value]) => {
  console.log("Key:", key, "| Value:", value);
});
