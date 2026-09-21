/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let Stack = []
    let len = s.length

    for (let i = 0; i < len; i++) {
        if (isNaN(s[i])) {
            Stack.push(s[i])
        } else {
            Stack.pop()
        }
    }

    return Stack.join('');
};