/**
 * @param {string} s
 * @return {boolean}
 */
// Time O(5N)
// Space O(1)
const isPalindrome = s => {
  // In this solution we shared space for 2 additional array and 1 space for additional string
  const str = s.replace(/[^A-Za-z0-9]+/g, '');
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
};

/**
 * @param {string} s
 * @return {boolean}
 */
// Time O(N)
// Space O(1)
const isPalindrome_II = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
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

  return -1;
}

// [1, 2, 3, 8, 9, 10, 20] target 8
// 4
function binarySearch_II(nums) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
