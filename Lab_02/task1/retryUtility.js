const { set } = require("supertest/lib/cookies");

async function retryOperation(operation, maxRetries = 3, delay = 1000) {
    if (typeof operation !== 'function') {
        throw new Error('Operation must be a function returning a Promise');
    }
    if (!Number.isInteger(maxRetries) || maxRetries <= 0) {
        throw new Error('maxRetries must be a positive integer');
    }
    if (!Number.isInteger(delay) || delay < 0) {
        throw new Error('delay must be a non-negative integer');
    }

    let lastError = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed: ${error.message}`);

            if (attempt < maxRetries) {
                const waitMs = delay * attempt;
                await new Promise((resolve) => setTimeout(resolve, waitMs));
            }
        }
    }

    throw lastError;
}

module.exports = { retryOperation };
