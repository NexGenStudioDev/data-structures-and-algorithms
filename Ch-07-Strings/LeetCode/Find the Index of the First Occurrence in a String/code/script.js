/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let n = needle.length;

    let str1 = haystack.slice(0, n);
    let str2 = needle;

    for (let i = 0; str1.length === n && i < haystack.length; i++) {

        if (str1 === str2) {
            return i;
        }

        str1 = haystack.slice(i + 1, i + 1 + n);
    }

    return -1;
};