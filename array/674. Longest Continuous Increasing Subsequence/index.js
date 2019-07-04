/*
Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

Example 1:
  Input: [1,3,5,4,7]
  Output: 3

  Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
    Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 

Example 2:
  Input: [2,2,2,2,2]
  Output: 1
  Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
  
 Note: Length of the array will not exceed 10,000.

 */

/*
Time Complexity: O(N), where N is the length of nums. We perform one loop through nums.

Space Complexity: O(1), the space used by anchor and ans.
 */
const findLengthOfLCIS = function(nums) {
  let ans = 1;
  let maxValue = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      ans++;
    } else {
      maxValue = Math.max(maxValue, ans);
      ans = 1;
    }
  }
  return maxValue;
};

const res = findLengthOfLCIS([2, 2, 2, 2]);
console.log('---', res);
