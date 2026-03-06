function validateUserData(data) {
  const errors = [];

  // Check whether input exists and is an object
  if (!data || typeof data !== "object") {
    return {
      isValid: false,
      errors: ["Input must be a valid object."],
    };
  }

  // Validate required name
  if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
    errors.push("Name is required.");
  }

  // Validate required email
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !data.email.includes("@")
  ) {
    errors.push("A valid email is required.");
  }

  // Validate optional age
  if (
    data.age !== undefined &&
    (typeof data.age !== "number" || data.age <= 0)
  ) {
    errors.push("Age must be a positive number.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Example usage
const validUser = {
  name: "Alim",
  email: "alim@example.com",
  age: 20,
};

const invalidUser = {
  name: "",
  email: "wrong-email",
  age: -5,
};

console.log("Valid user result:");
console.log(validateUserData(validUser));

console.log("Invalid user result:");
console.log(validateUserData(invalidUser));