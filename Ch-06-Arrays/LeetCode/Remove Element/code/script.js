/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[x] = nums[j];
            x = x + 1;
        }
    }
    return x;
};