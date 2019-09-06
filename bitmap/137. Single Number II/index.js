/*
Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. 
Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99

 */

// Решение через битовые маски

// Time O(N)
// Space O(1)

const singleNumber = nums => {
  let seenOnce = 0;
  let seenTwice = 0;

  for (let num of nums) {
    seenOnce = ~seenTwice & (seenOnce ^ num);
    seenTwice = ~seenOnce & (seenTwice ^ num);
  }

  return seenOnce;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N) + O(NlogN)
// Space O(1)
const singleNumber2 = nums => {
  let ans = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) i++;
    ans = ans ^ nums[i];
  }

  return ans;
};
