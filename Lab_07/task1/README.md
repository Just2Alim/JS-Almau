# Lab 7.1 — Singleton Pattern
**Student Name:** [Your Name]  
**Student ID:** [Your ID]  
**Date:** [Date]

## What problem Singleton solves
The Singleton pattern ensures that only one instance of a class exists in the application and provides a global access point to it. This is useful when the whole system must share the same state or configuration.

## When to use Singleton
Use Singleton when exactly one object is needed, for example:
- configuration manager
- database connection
- logger
- application-wide settings

## Drawbacks
Singleton can introduce global state, which may make testing harder. It can also increase coupling between parts of the application if overused.

## Included files
- `singleton.js` — class-based singleton
- `config.js` — module-based singleton
- `test.js` — tests proving singleton behavior

## How to run
Use Node.js with ES modules enabled.
Example:
```bash
node test.js