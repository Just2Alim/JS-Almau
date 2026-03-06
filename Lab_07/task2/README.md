# Lab 7.2 — Factory Pattern
**Student Name:** [Your Name]  
**Student ID:** [Your ID]  
**Date:** [Date]

## What problem Factory solves
The Factory pattern creates objects without requiring the caller to specify the exact class directly. It delegates object creation to a factory method based on runtime input.

## Difference from Constructor
With a constructor, the caller knows the exact type:
```javascript
const email = new EmailNotification(to, subject);