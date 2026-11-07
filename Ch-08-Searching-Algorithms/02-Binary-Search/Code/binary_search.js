function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 🎯 Found
    }

    if (arr[mid] < target) {
      left = mid + 1; // 🔍 Search right half
    } else {
      right = mid - 1; // 🔍 Search left half
    }
  }

  return -1; // ❌ Not found
}

// ✅ Example:
const nums = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(nums, 9)); // Output: 4
