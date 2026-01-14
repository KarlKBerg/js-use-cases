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

/* ==========
    Destructuring objects
    ========= */

// Destructuring in forEach loop (Cleaner syntax)
const person2 = {
  name: "Alice",
  age: 30,
  city: "London",
};

const entries2 = Object.entries(person2);

entries2.forEach(([key, value]) => {
  console.log("Key:", key, "| Value:", value);
});

// More on deconstructing
const { property1, property2 } = myObject;
// is equivalent to
/*
 const property1 = myObject.property1;
 const property2 = myObject.property2;
*/
// Example:
const person3 = {
  firstName: "Alice",
  age: 30,
};

// Destructuring assignment
const { firstName, age } = person3;

console.log(firstName); // "Alice"
console.log(age); // 30

// Destructuring in function parameters
function displayPerson({ firstName, age }) {
  console.log(`Name: ${firstName}, Age: ${age}`);
}

// Call the function with an object
displayPerson(person3); // Outputs: Name: Alice, Age: 30

// renaming variables during destructuring
const person4 = {
  firstName: "Bob",
  age: 25,
};

// Destructuring with renaming
const { firstName: name, age: years } = person4;

console.log(name); // "Bob"
console.log(years); // 25

// Destructuring in function parameters with renaming
function displayPersonRenamed({ firstName: name, age: years }) {
  console.log(`Name: ${name}, Age: ${years}`);
}

// Call the function with an object
displayPersonRenamed(person4); // Outputs: Name: Bob, Age: 25

// providing default values during destructuring
const person5 = {
  firstName: "Charlie",
};

// Destructuring with default value
const { firstName: fname, age: userAge = 18 } = person5;

console.log(fname); // "Charlie"
console.log(userAge); // 18

// Destructuring in function parameters with default values
function displayPersonDefault({ firstName: fname, age: userAge = 18 }) {
  console.log(`Name: ${fname}, Age: ${userAge}`);
}

// Call the function with an object
displayPersonDefault(person5); // Outputs: Name: Charlie, Age: 18

/* ==========
    Destructuring for arrays
    ========= */

const highScores = [98, 95, 92, 88, 85];

// Destructuring assignment
const [firstPlace, secondPlace, thirdPlace] = highScores;

console.log("First place:", firstPlace); // 98
console.log("Second place:", secondPlace); // 95
console.log("Third place:", thirdPlace); // 92

// Destructuring in function parameters
function displayScores([first, second, third]) {
  console.log(`1st: ${first}, 2nd: ${second}, 3rd: ${third}`);
}

// Call the function with an array
displayScores(highScores); // Outputs: 1st: 98, 2nd: 95, 3rd: 92

// Skipping elements during destructuring
const topScores = [100, 98, 95, 90, 85];

// Destructuring with skipping
const [gold, , silver, , bronze] = topScores;

console.log("Gold:", gold); // 100
console.log("Silver:", silver); // 95
console.log("Bronze:", bronze); // 85

// Destructuring in function parameters with skipping
function displayTopScores([gold, , silver, , bronze]) {
  console.log(`Gold: ${gold}, Silver: ${silver}, Bronze: ${bronze}`);
}

// Call the function with an array
displayTopScores(topScores); // Outputs: Gold: 100, Silver: 95, Bronze: 85

// Destructuring with rest operator
const scores = [45, 50, 55, 60, 65];

// Destructuring with rest operator
const [firstScore, secondScore, ...remainingScores] = scores;

console.log("First Score:", firstScore); // 45
console.log("Second Score:", secondScore); // 50
console.log("Remaining Scores:", remainingScores); // [55, 60, 65]

// Destructuring in function parameters with rest operator
function displayScoresWithRest([firstScore, secondScore, ...remainingScores]) {
  console.log(
    `First Score: ${firstScore}, Second Score: ${secondScore}, Remaining Scores: ${remainingScores}`
  );
}

// Call the function with an array
displayScoresWithRest(scores); // Outputs: First Score: 45, Second Score: 50, Remaining Scores: 55,60,65
