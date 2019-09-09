/*

Given a sorted array consisting of only integers where every element appears exactly twice except for one element which appears exactly once.
 
Find this single element that appears only once.


Example 1:
  Input: [1,1,2,3,3,4,4,8,8]
  Output: 2

Example 2:
  Input: [3,3,7,7,10,11,11]
  Output: 10


Note: Your solution should run in O(log n) time and O(1) space.

 */

// Time O(logN)
// Space O(1)
const singleNonDuplicate = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let delta = mid % 2 ? -1 : 1;

    if (nums[mid] === nums[mid + delta]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return nums[low] === nums[low - 1] ? nums[low + 1] : nums[low];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// XOR
// Time O(N)
// Space O(1)
const singleNonDuplicate2 = nums => {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

  return ans;
};
