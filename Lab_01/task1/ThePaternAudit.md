# Lab 1.1 — The Pattern Audit
Student Name: [Your Name]
Student ID: [Your ID]
Date: [Date]

## Introduction

This report analyzes the legacy shopping cart code from the lab assignment in order to determine whether it represents a genuine design pattern, a proto-pattern, or neither. The evaluation is based on the concepts from Chapter 2 of *Learning JavaScript Design Patterns, 2nd Ed.* by Addy Osmani, especially the sections “The Pattern Tests” and “Rule of Three”.

The provided code defines global variables `cart` and `total`, and several functions: `addItem`, `removeItem`, `updateDisplay`, `calculateTax`, and `checkout`. These functions work together to manage cart state, update the interface, and calculate the final order total.

---

## Task 1. Pattern Identification

The code does not implement a clear, mature design pattern. At most, it can be described as a **proto-pattern** or an **ad-hoc procedural solution**.

A weak argument can be made that the code has a **module-like organization**, because related shopping cart operations are grouped around shared state (`cart` and `total`). However, this is not a true Module Pattern because the data is not encapsulated. All variables and functions are placed in the global scope, which means they are publicly accessible and can be changed from anywhere in the application.

### Category
Because this is not a genuine GoF pattern, assigning a strict category is difficult. If interpreted loosely, it is closest to a **structural-style proto-pattern**, because it organizes related functionality around a shared structure. However, it does not fully qualify as a real structural design pattern.

### Why it is not a genuine pattern
A real pattern should be reusable, well-structured, and validated across recurring design problems. This code is highly specific to one scenario and one DOM structure. It solves the problem in a direct way, but it does not present a reusable pattern template.

### Code references
- Global state: `var cart = [];`, `var total = 0;`
- Shared operations: `addItem`, `removeItem`, `updateDisplay`, `calculateTax`, `checkout`
- DOM dependence: `document.getElementById('cart')`, `document.getElementById('total')`

---

## Task 2. Rule of Three Evaluation

### 1. Fitness of Purpose

Yes, the solution does solve a specific problem: it manages a shopping cart in a simple e-commerce page.

Evidence from the code:
- `addItem(name, price)` adds a new item into the cart and increases the total.
- `removeItem(index)` removes an item and decreases the total.
- `updateDisplay()` refreshes the cart interface and total on the page.
- `calculateTax(rate)` computes tax from the current total.
- `checkout()` calculates the final total, shows it, clears the cart, and resets the total.

This proves that the code is fit for its immediate purpose.

### 2. Usefulness

The solution does provide some practical benefits:
- it is simple and easy to understand,
- it is short,
- it groups cart-related operations in one place,
- it works for a very small application.

However, its usefulness is limited:
- it uses global variables,
- it tightly couples logic with DOM updates,
- it is difficult to test,
- it is not scalable,
- it is not easily reusable in a different UI or framework.

So, the solution is useful for a basic demo or small legacy page, but not as a robust design solution.

### 3. Applicability

The solution is not broadly applicable. It is very specific to this exact scenario:
- one global cart,
- one page,
- direct DOM manipulation,
- no separation between business logic and presentation.

Because of this, the code does not generalize well to larger systems, modern component-based applications, or reusable libraries.

### Rule of Three conclusion

The code partially satisfies the Rule of Three:
- **Fitness of Purpose:** yes
- **Usefulness:** partially
- **Applicability:** weak

Therefore, it does not fully qualify as a validated pattern.

---

## Task 3. Pattern-ity Tests

### 1. Does it solve a particular problem?

Yes. It solves the problem of managing a shopping cart and updating the UI in a basic e-commerce application.

### 2. Does it have an obvious solution?

Yes. The solution is quite obvious and straightforward. It uses simple global variables and direct DOM manipulation. This weakens its claim to being a real pattern, because patterns usually represent more refined, reusable solutions.

### 3. Does it describe a proven concept?

Only partially. The idea of grouping cart operations around shared state is common and practical, but the implementation itself is too primitive to count as a proven design pattern.

### 4. Does it describe a relationship between system structures?

Only weakly. It does show a relationship between state, cart operations, and UI updates, but all concerns are mixed together rather than separated into a clear design structure.

### Pattern-ity conclusion

The code passes some pattern-ity checks only partially. It solves a problem, but it is too obvious, too specific, and too tightly coupled to count as a proper pattern.

---

## Task 4. Anti-Pattern Identification

### Anti-pattern 1: Global Namespace Pollution

The code places `cart`, `total`, and all related functions in the global scope. This is a classic example of **global namespace pollution**.

Why this is a problem:
- any other script can accidentally overwrite these names,
- debugging becomes harder,
- the code becomes less maintainable,
- shared state is not protected.

### Anti-pattern 2: Tight Coupling

The business logic and UI logic are tightly coupled. For example:
- `addItem()` and `removeItem()` immediately call `updateDisplay()`,
- `updateDisplay()` directly manipulates DOM elements,
- cart logic cannot be reused without the current HTML structure.

Why this is a problem:
- poor reusability,
- poor testability,
- poor separation of concerns.

### Suggested solutions
- wrap cart logic in a module or class,
- isolate state management from DOM rendering,
- use a modern component-based architecture,
- avoid globals by using closures, modules, or framework state.

---

## Final Conclusion

This code should be classified as a **proto-pattern rather than a genuine design pattern**.

It does solve a practical problem, but it does not fully satisfy the Rule of Three or the pattern-ity tests. In addition, it contains clear anti-patterns such as **global namespace pollution** and **tight coupling**. For these reasons, it is better described as an ad-hoc legacy implementation with proto-pattern characteristics, not a validated reusable pattern.