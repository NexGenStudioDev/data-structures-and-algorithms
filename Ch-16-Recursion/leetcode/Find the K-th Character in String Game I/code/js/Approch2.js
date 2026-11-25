/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    function Character(n) {

        if (n === 0) return 0;

        return (n % 2) + Character(Math.floor(n / 2));
    }

    return String.fromCharCode(97 + Character(k - 1) % 26);
};