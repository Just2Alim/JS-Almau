# Lab 8.1: Flyweight Pattern

**Memory Comparison:** Without flyweight, 10,000 trees require creating memory for 10,000 sets of colors and dimensions. With flyweight, we only store 4 unique tree types, saving ~83% memory. We use it when we need thousands of objects sharing identical intrinsic states.
