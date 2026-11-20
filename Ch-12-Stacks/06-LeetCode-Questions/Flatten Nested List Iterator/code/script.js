/**
 * NestedIterator traverses nested lists lazily with an explicit stack.
 * The platform supplies NestedInteger with isInteger(), getInteger(), getList().
 */
var NestedIterator = function (nestedList) {
    this.stack = [{ list: nestedList, index: 0 }];
    this.nextValue = undefined;
    this.ready = false;
};

NestedIterator.prototype.hasNext = function () {
    if (this.ready) return true;

    while (this.stack.length > 0) {
        const frame = this.stack[this.stack.length - 1];
        if (frame.index >= frame.list.length) {
            this.stack.pop();
            continue;
        }

        const item = frame.list[frame.index++];
        if (item.isInteger()) {
            this.nextValue = item.getInteger();
            this.ready = true;
            return true;
        }

        const childList = item.getList();
        if (childList.length > 0) {
            this.stack.push({ list: childList, index: 0 });
        }
    }

    return false;
};

NestedIterator.prototype.next = function () {
    if (!this.hasNext()) return undefined;
    this.ready = false;
    const value = this.nextValue;
    this.nextValue = undefined;
    return value;
};

if (typeof module !== "undefined") module.exports = NestedIterator;
