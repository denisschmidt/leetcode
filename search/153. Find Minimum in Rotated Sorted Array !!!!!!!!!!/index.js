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


Основная проблема что там нужно сделать это за O(logN)

Тут сразу напрашивается бинарный поиск в качестве основого решения

*/

const input = [4, 5, 6, 7, 0, 1, 2];

// Time O(LogN)
// Space O(1)
const findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= nums[nums.length - 1]) {
      ans = nums[mid];
      right = mid - 1; // искать что еще меньше слева
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
