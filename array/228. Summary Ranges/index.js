/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

 */

// Time O(N)
// Space O(1)
var summaryRanges = function(nums) {
  let n = nums.length;
  let ans = [];

  for (let i = 0, j = 0; i < n; ++i) {
    j = i;

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    if (i === j) {
      ans.push(nums[i].toString());
    } else {
      ans.push(`${nums[j]}->${nums[i]}`);
    }
  }

  return ans;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
var summaryRanges2 = function(nums) {
  let ans = 0;
  let index = 0;
  let n = nums.length;
  let res = [];

  while (index < n) {
    let val = nums[index];

    let count = 0;

    while (index < n && nums[index + 1] - nums[index] === 1) {
      index++;
      count++;
    }

    index++;

    nums[ans] = count === 0 ? val.toString() : `${val}->${nums[index - 1]}`;
    res.push(nums[ans]);
    ans++;
  }

  return res;
};
