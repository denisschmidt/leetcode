/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:
  Input: [1,2,2,3]
  Output: true

Example 2:
  Input: [6,5,4,4]
  Output: true

Example 3:
  Input: [1,3,2]
  Output: false

Example 4:
  Input: [1,2,4,5]
  Output: true

Example 5:
  Input: [1,1,1]
  Output: true
 
Note:
  1 <= A.length <= 50000
  -100000 <= A[i] <= 100000
*/

const isMonotonic = nums => {
  let n = nums.length;
  let increasing = true;
  let decreasing = true;

  if (n < 2) {
    return true;
  }

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      decreasing = false;
    }

    if (nums[i - 1] > nums[i]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
};

// Time O(2N)
// Space O(1)
const isMonotonic_II = nums => {
  let n = nums.length;
  let i = 1;
  for (; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      break;
    }
  }

  if (i === n) return true;

  i = 1;

  for (; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      return false;
    }
  }

  return true;
};
