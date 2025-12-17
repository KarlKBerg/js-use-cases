/*
Use case for:
- if statements
- if-else statements
- Switch statements
*/

// Constant and variable used in examples.
const votingAge = 18; // Constant to be checked against
let userAge = 21; // Variable to be checked against constant
let userRegistered = true;

/* =============
    IF / IF ELSE
    ============ */

// Simple condition check
if (userAge >= votingAge) {
  console.log("You are old enough to vote!"); // Displayed if userAge is more or equal to votingAge
} else {
  console.log("You are not old enough to vote!"); // Displayed if userAge is less than votingAge
}

// Multiple conditions check
if (userAge >= votingAge && userRegistered) {
  // && checks if both conditions are true
  console.log("You can vote!");
} else if (userAge < votingAge) {
  console.log("You can't vote because you are not old enough.");
} else {
  console.log("You can't vote because you are not registered.");
}

// If else statements

// Switch statements
