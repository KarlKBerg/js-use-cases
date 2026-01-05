/*
Use case for:
- Objects
- Modifying objects
- Nested objects
*/

/* ==========
    Objects
    ========= */

// Create an object to represent a car
const car = {
  make: "Toyota", // Property: make
  model: "Camry", // Property: model
  year: 2020, // Property: year
  color: "blue", // Property: color
  isElectric: false, // Property: isElectric
  // Nested object for engine details
  engine: {
    type: "V6", // Property: type
    horsepower: 301, // Property: horsepower
  },
};

// Accessing object properties
console.log("Car Make: " + car.make); // Outputs: Car Make: Toyota
console.log("Car Model: " + car.model); // Outputs: Car Model: Camry
console.log("Engine Type: " + car.engine.type); // Outputs: Engine Type: V6

// Modifying object properties
car.color = "red"; // Change color from blue to red
car.isElectric = true; // Change isElectric from false to true

console.log("Updated Car Color: " + car.color); // Outputs: Updated Car Color: red
console.log("Is the car electric? " + car.isElectric); // Outputs: Is the car electric? true

// Adding a new property to the object
car.owner = "Alice"; // New property: owner
console.log("Car Owner: " + car.owner); // Outputs: Car Owner: Alice

// Removing a property from the object
delete car.year; // Remove the year property
console.log("Car Year after deletion: " + car.year); // Outputs: Car Year after deletion: undefined

// Display the entire car object
console.log("Car Object:", car);
/* Outputs:
Car Object: {
  make: 'Toyota',
  model: 'Camry',
  color: 'red',
  isElectric: true,
  engine: { type: 'V6', horsepower: 301 },
  owner: 'Alice'
}
*/
