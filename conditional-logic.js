/*
Use case for:
- if statements
- if-else statements
- Switch statements
*/

// Constant and variable used in examples.
const day = "Monday";
const votingAge = 18;
let userAge = 21;
let userRegistered = true;

/* =============
    IF / IF ELSE
    ============ */

// Simple condition check
if (userAge >= votingAge) {
  // >= checks if userAge is greater than or equal to votingAge
  console.log("You are old enough to vote!"); // Displayed if userAge is greather than or equal to votingAge
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

/* =============
    SWITCH 
    ============ */

// Checks if any conditions are equal to day(monday)
switch (day) {
  case "Monday": // Matches because strings are case-sensitive and day is "Monday"
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a normal day");
    break;
}
