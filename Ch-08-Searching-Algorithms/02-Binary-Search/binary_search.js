// Classic Binary Search & Bounds in O(log N)

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

function lowerBound(arr, target) {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= target) high = mid;
        else low = mid + 1;
    }
    return low;
}

console.log("Found at index:", binarySearch([1, 3, 5, 7, 9], 7)); // 3
