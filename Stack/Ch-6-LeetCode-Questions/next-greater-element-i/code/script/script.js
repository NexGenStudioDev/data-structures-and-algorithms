var nextGreaterElement = function(nums1, nums2) {
    const nextMap = new Map();
    const stack = [];
    
    // 1. Build the map: Element -> Its immediate right neighbor
   
    let current = 0;
    let next = 1;
    while (next < nums2.length) {
        nextMap.set(nums2[current], nums2[next]);
        current++;
        next++;
    }

    // 2. Find the Next Greater Element for each number in nums1
    for (let num of nums1) {
        let search = num;
        let found = false;

        // 3. Traverse the chain of "next" pointers
        while (nextMap.has(search)) {
            let nextVal = nextMap.get(search);
            
            if (nextVal > num) {
                //  Found a number greater than the original target
                stack.push(nextVal);
                found = true;
                break;
            }
            
            // Not greater? Move to the next element in the chain
            search = nextVal;
        }

        // If we exhausted the chain and found nothing greater
        if (!found) {
            result.push(-1);
        }
    }

    return result;
};


console.log(nextGreaterElement([4,1,2],[1,3,4,2])) // [-1,3,-1]
console.log(nextGreaterElement([2,4],[1,2,3,4]))