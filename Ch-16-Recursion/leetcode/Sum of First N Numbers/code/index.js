class Solution {
    NnumbersSum(N) {
        function sumRange(first, last) {
            if (first === last) {
                return first;
            }

            const middle = Math.floor((first + last) / 2);
            return sumRange(first, middle) + sumRange(middle + 1, last);
        }

        return sumRange(1, N);
    }
}
