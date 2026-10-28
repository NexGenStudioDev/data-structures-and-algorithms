/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let trimmed = s.trim();

    let words = trimmed.split(" ");

    return words[words.length - 1].length;
};