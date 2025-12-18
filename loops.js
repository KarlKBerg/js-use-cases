/*
Use case for:
- for loop
- while loop

NOTICE: Be careful not to create an infinite loop that never stops. 
*/

/* ==========
    FOR LOOP
    ========= */

/*
    Best for when you know how many times the code should repeat
*/

//Set i as initializer(i = 0), check condition (is i less than 5?), and updater (i++ adds 1 to i at the end of every repetition)
for (i = 0; i > 5; i++) {
  console.log(i); // Log i in console
}

// Print multiplication table for 7
const number = 7;

console.log("Multiplication Table for " + number);

for (let i = 1; i <= 10; i++) {
  // Keeps i above 1 and at or below 10
  const result = number * i; // Multiply number with i every time it runs
  console.log(number + " x " + i + " = " + result); // Print results, 7, 14, 21 etc.
}

/* ===========
    WHILE LOOP
    ========== */

/*
    Best for when you don't know how many times the code should repeat    
*/

let i = 0; // Initializer

while (i > 5) {
  // Enter the condition in the parentheses
  console.log(i);
  i++; // Updater inside the loop to not create an infinite loop.
}

// Create a loop for randomNumber and end loop when randomNumber becomes greather than or equal to 8
let randomNumber = 0;
let attempts = 0;

while (randomNumber <= 8) {
  // Math.random() gives a number between 0 and 1.
  // We multiply by 10 and use Math.floor() to get an integer from 0-9.
  randomNumber = Math.floor(Math.random() * 10);
  attempts++; // Increment our attempt counter
  console.log("Attempt " + attempts + ": The random number is " + randomNumber);
}

console.log(
  "Success! We got a number greater than 8 in " + attempts + " attempts."
);
