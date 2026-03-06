// ----------------------------------------------------
// Example 1: Basic Module Pattern using IIFE
// ----------------------------------------------------
const counterModule = (function () {
  let count = 0; // private variable

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
})();

console.log("Basic Module Pattern:");
console.log(counterModule.increment()); // 1
console.log(counterModule.increment()); // 2
console.log(counterModule.getCount());  // 2

// ----------------------------------------------------
// Example 2: Module Pattern with private variables
// ----------------------------------------------------
const userModule = (function () {
  let username = "guest"; // private variable

  function isValidName(name) {
    return typeof name === "string" && name.trim() !== "";
  }

  return {
    setUsername(name) {
      if (!isValidName(name)) {
        console.error("Invalid username.");
        return;
      }

      username = name;
    },
    getUsername() {
      return username;
    },
  };
})();

console.log("\nModule Pattern with private variables:");
console.log(userModule.getUsername()); // guest
userModule.setUsername("Alim");
console.log(userModule.getUsername()); // Alim
userModule.setUsername("");
console.log(userModule.getUsername()); // still Alim

// ----------------------------------------------------
// Example 3: Modern ES6 module equivalent
// ----------------------------------------------------
// In a real project, this part would be placed in separate files.
// Example shown here as documentation-style code.

// userStore.js
/*
let currentUser = "guest";

export function setCurrentUser(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Invalid user name.");
  }

  currentUser = name;
}

export function getCurrentUser() {
  return currentUser;
}
*/

// app.js
/*
import { setCurrentUser, getCurrentUser } from "./userStore.js";

setCurrentUser("Alim");
console.log(getCurrentUser());
*/

console.log("\nES6 module equivalent:");
console.log("See commented example in this file for import/export structure.");