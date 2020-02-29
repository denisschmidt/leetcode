// На каждом шаге мы делим N => N / 2  -> N / 4 -> ... -> 1 -> 0 что дает O(logN)

// Time O(logN)
// Space O(1)
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // так же середину можно найти вот так: let mid = (right + left) >>> 1;
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left] === target ? left : -1;
}
