/*
Use case for:
- Arrays
- Index
*/

/* ==========
    ARRAYS
    ========= */

/* Create array */
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

/* Accessing elements by index, starts from 0 not 1 (zero based indexing) */
// Index starts at 0
console.log(fruits[0]); // Outputs: Apple
console.log(fruits[2]); // Outputs: Cherry

/* Modifying elements by index */
fruits[1] = "Blueberry"; // Change Banana to Blueberry
console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

/* Array length */
console.log("Number of fruits: " + fruits.length); // Outputs: Number of fruits: 5

/* Find last element in array */
console.log("Last fruit: " + fruits[fruits.length - 1]); // Outputs: Last fruit: Elderberry

/* Adding elements to the array */
fruits.push("Fig"); // Adds Fig to the end of the array
console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry", "Fig"]

/* Removing elements from the array */
const removedFruit = fruits.pop(); // Removes the last element (Fig) and returns it
console.log("Removed fruit: " + removedFruit); // Outputs: Removed fruit: Fig
console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

/* Iterating over an array */
console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Outputs each fruit in the array
}

/* Finding the index of an element */
const index = fruits.indexOf("Cherry");
console.log("Index of Cherry: " + index); // Outputs: Index of Cherry: 2

/* Checking if an element exists in the array */
const hasDate = fruits.includes("Date");
console.log("Array contains Date: " + hasDate); // Outputs: Array contains Date: true
