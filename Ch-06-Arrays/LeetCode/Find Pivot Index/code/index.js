/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0

    let leftSum = 0

    // Total sum
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    
    for (let i = 0; i < nums.length; i++) {

        let RightSum = sum - leftSum - nums[i]

        if (leftSum === RightSum) {
            return i
        }


        leftSum += nums[i]


    }


    return -1
};
