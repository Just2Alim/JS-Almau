
## Selected Utility Function
I selected a utility function called `validateUserData(data)`.

## Purpose of the Function
This function validates user input before the data is saved, sent to an API, or used in application logic. It checks whether required fields are present and whether they have valid values.

## What Problem Does It Solve?
In many JavaScript applications, user data may be incomplete, empty, or incorrectly formatted. If invalid data is processed without validation, it can lead to UI bugs, database errors, incorrect calculations, or failed requests.

The function solves this problem by centralizing validation logic in one reusable place.

## In What Contexts Is It Used?
This utility function is useful in the following contexts:
- form validation before submit
- registration and login pages
- profile editing screens
- admin panels
- API request preparation
- general frontend data checking

## How Does It Solve the Problem?
The function receives a JavaScript object and checks:
1. whether the input exists and is an object
2. whether required fields are present
3. whether the fields are non-empty strings
4. whether the email contains a valid format
5. whether the age is a positive number if provided

It returns a structured result object containing:
- `isValid` — overall validation result
- `errors` — list of validation error messages

## Key Components of the Solution
The solution includes the following components:
- input existence check
- type checking
- required field validation
- basic format validation
- centralized error collection
- reusable return structure

## Why This Function Is a Good Example
This function is a good example for pattern documentation because it is:
- reusable
- simple but practical
- easy to explain formally
- applicable in many JavaScript projects
- suitable for demonstrating pattern structure from Chapter 3