/*
Use case for:
- export
- import
- ES6 modules
*/

/* ==========
    EXPORT
    ========= */

// Export function or variable

export function exportedFunction() {
  console.log("This function is exported");
}

export let exportedVar = true;

// Default export

export default function () {
  console.log("This is a default export");
}

// Export list
export { exportedFunction, exportedVar };

// Rename export
export { exportedVar as var }; // Renamed to var

// Import
import { exportedFunction, exportedVar } from "./path/pathfile.js";

// Rename on import
import { exportedFunction as function1 } from ".path/pathfile.js"; // renamed as function 1

// Import default export
import myFunction from "path.filepath.js";

// Import everything as an object
import * as myObject from "./path/to/module.js";
