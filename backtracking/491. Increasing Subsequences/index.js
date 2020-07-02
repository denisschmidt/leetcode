/*

Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2.


Example:
  Input: [4, 6, 7, 7]
  Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
  

Constraints:
  The length of the given array will not exceed 15.
  The range of integer in the given array is [-100,100].
  The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.

*/

// Time O(N!)
// Space O(N!)
const findSubsequences = nums => {
  let ans = [];

  bactrack([], 0);

  return ans;

  function bactrack(comb, index) {
    if (comb.length >= 2) {
      ans.push([...comb]);
    }

    let set = new Set();

    for (let i = index; i < nums.length; i++) {
      if (set.has(nums[i])) continue;
      if (comb.length == 0 || comb[comb.length - 1] <= nums[i]) {
        comb.push(nums[i]);
        set.add(nums[i]);
        bactrack(comb, i + 1);
        comb.pop();
      }
    }
  }
};
