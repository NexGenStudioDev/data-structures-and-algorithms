/**
 * Reverse the character array in place using constant auxiliary space.
 * @param {character[]} s
 * @return {void}
 */
var reverseString = function (s) {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        const character = s[left];
        s[left] = s[right];
        s[right] = character;
    }
};
