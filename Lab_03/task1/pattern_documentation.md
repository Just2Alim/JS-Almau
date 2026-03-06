
# Pattern Name
Validation Utility Pattern

# Description
The Validation Utility Pattern provides a reusable way to validate structured input data before it is processed by an application. It helps developers centralize validation logic and return consistent validation results.

# Context Outline
This pattern is effective in applications where data must be checked before use. Common contexts include form handling, API input preparation, user registration, settings panels, admin dashboards, and any workflow that depends on clean, verified input.

# Problem Statement
In JavaScript applications, input data often comes from users, forms, APIs, or external sources. This data may be incomplete, malformed, or inconsistent. If validation logic is scattered across many files and components, the code becomes repetitive, hard to maintain, and error-prone. Developers need a reusable way to validate data consistently.

# Solution
The pattern solves the problem by introducing a dedicated utility function for validation.

Steps:
1. Accept an input object.
2. Check whether the input exists and has the expected type.
3. Validate required fields.
4. Validate field format and constraints.
5. Collect all validation errors in a single array.
6. Return a consistent result object with validity status and error messages.

# Design
The pattern is based on a single reusable validation utility. Instead of embedding validation logic inside components, the application delegates validation to a helper function. This improves separation of concerns: UI components gather input, while the utility function evaluates the data.

The main design elements are:
- input parameter
- validation rules
- error accumulator
- consistent output object

The end user does not see the pattern directly. It is transparent to the user experience because it mainly supports developers and internal code quality.

# Implementation
To implement this pattern in JavaScript:
1. Create a utility function with a clear name.
2. Accept structured input such as an object.
3. Define validation rules inside the function.
4. Store all detected problems in an array.
5. Return an object such as:
   - `isValid`
   - `errors`
6. Reuse the function wherever validation is needed.

# Examples
A minimal implementation is shown below:

```javascript
function validateUserData(data) {
  const errors = [];

  if (!data || typeof data !== "object") {
    return {
      isValid: false,
      errors: ["Input must be a valid object."]
    };
  }

  if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
    errors.push("Name is required.");
  }

  if (!data.email || typeof data.email !== "string" || !data.email.includes("@")) {
    errors.push("A valid email is required.");
  }

  if (data.age !== undefined && (typeof data.age !== "number" || data.age <= 0)) {
    errors.push("Age must be a positive number.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}