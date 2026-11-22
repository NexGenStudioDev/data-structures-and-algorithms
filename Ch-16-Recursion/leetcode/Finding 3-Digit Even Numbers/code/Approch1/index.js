/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {

    let myset = new Set()

    let len = digits.length

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                if (i === j || j === k || i === k) {
                    continue;
                }

                if (digits[i] === 0 || digits[k] % 2 !== 0) {
                    continue;
                }

                myset.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
            }
        }
    }


    return [...myset].sort((a, b) => a - b);

};
