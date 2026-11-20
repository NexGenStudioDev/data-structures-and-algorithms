class Solution {
    largest(arr) {
        if (arr.length === 0) return undefined;

        let max = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    smallest(arr) {
        if (arr.length === 0) return undefined;

        let min = Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }
}
