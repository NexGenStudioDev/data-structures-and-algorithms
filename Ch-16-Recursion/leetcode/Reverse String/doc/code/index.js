/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    function reverse(P1, P2) {


        if (P1 >= P2) {
            return;
        }

        let temp = s[P1]

        s[P1] = s[P2]

        s[P2] = temp


        reverse(P1 + 1, P2 - 1)



    }


    reverse(0, s.length - 1)

};