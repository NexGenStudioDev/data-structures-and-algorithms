var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/**
 * Push element x onto stack.
 *
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

    // Put the new element into q2 first.
    this.q2.push(x);

    // Move all old elements behind the new element.
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    // q2 now has the correct Stack order.
    // Make q2 the main queue.
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * Remove the element on top of the stack.
 *
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q1.shift();
};

/**
 * Return the element on top of the stack.
 *
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[0];
};

/**
 * Returns whether the stack is empty.
 *
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};