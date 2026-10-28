/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    if (s.length === 0)
        return "";

    return s
        .split(" ")
        .map(word => {
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
};