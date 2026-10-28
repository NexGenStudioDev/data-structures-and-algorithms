/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];

    for (const chr of s) {
        const top = stack[stack.length - 1];

        if (
            stack.length > 0 &&
            top !== chr &&
            top.toLowerCase() === chr.toLowerCase()
        ) {
            stack.pop();
        } else {
            stack.push(chr);
        }
    }

    return stack.join('');
};