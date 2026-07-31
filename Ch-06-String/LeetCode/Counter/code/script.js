/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    // The inner function closes over the variable 'n'
    return function() {
        // Post-increment: returns current value, THEN increments n
        return n++;
    };
};

// Example Usage:
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12