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

/*

  Один элемент может находиться только на четном индексе 
  


*/

// Time O(logN)
// Space O(1)
const singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid % 2 == 0) {
      if (nums[mid] == nums[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid;
      }
    } else {
      if (nums[mid - 1] == nums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[lo];
};

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
