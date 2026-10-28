/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if (s.length !== t.length)
        return false;

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {

        const charS = s[i];
        const charT = t[i];

        if (
            mapS.has(charS) &&
            mapS.get(charS) !== charT
        ) {
            return false;
        }

        if (
            mapT.has(charT) &&
            mapT.get(charT) !== charS
        ) {
            return false;
        }

        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }

    return true;
};