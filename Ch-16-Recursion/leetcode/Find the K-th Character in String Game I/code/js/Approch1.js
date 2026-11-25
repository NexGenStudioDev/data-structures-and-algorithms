/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    let word = "a";



    while (word.length < k) {


        for (let ch of word) {
            word += String.fromCharCode((ch.charCodeAt(0) - 97 + 1) % 26 + 97);
        }



    }


    return word[k - 1]


};