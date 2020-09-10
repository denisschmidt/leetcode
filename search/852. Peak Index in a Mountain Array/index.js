/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.

 */

// Time O(LogN)
// Space O(1)
const peakIndexInMountainArray = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let ans = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] >= nums[mid + 1]) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
};

// Time O(N)
// Space O(1)
const peakIndexInMountainArray2 = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return -1;
};
