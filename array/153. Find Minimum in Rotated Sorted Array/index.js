/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1

Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

0123 4567


O(n^2)
*/

const input = [4, 5, 6, 7, 0, 1, 2];
// bubble sort
const findMin = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let swap = nums[i];
        nums[i] = nums[j];
        nums[j] = swap;
      }
    }
  }
  return nums[0];
};

const res = findMin(input);
console.log('---', res);

////////////////////////////////////////////////////////////

// Binary search
const findMin2 = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) {
      return nums[left];
    }

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

const res2 = findMin2(input);
console.log('---', res2);
