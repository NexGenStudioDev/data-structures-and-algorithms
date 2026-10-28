/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

    if (title.length === 0)
        return "";

    let words = title.split(" ").map(word => {

        if (word.length <= 2) {
            return word.toLowerCase();
        }

        return word[0].toUpperCase() +
               word.slice(1).toLowerCase();
    });

    return words.join(" ");
};