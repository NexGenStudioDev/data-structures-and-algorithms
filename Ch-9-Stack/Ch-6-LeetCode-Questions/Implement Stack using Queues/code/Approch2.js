var MyStack = function () {
    this.q1 = [];
    this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

    // Add the new element to the back of the queue
    this.q1.push(x);

    // Increase the number of elements
    this.len++;

    // Move all old elements behind the new element
    // so that x becomes the front (top of the stack)
    for (let i = 0; i < this.len - 1; i++) {
        this.q1.push(this.q1.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

    // If the stack is empty
    if (this.empty()) {
        return -1;
    }

    // One element is being removed
    this.len--;

    // The front of the queue is the top of the stack
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {

    // If the stack is empty
    if (this.empty()) {
        return -1;
    }

    // The front of the queue represents the stack top
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};
